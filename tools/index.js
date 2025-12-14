import * as path from "path";
import * as fs from "fs";
import * as globby from "globby";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/**
 * 创建文件
 * @param {*} element 文件内容
 * @param {*} pathFileName 带路径的文件名称
 */
function createFiles(element, pathFileName) {
  fs.writeFile(pathFileName, element, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`${pathFileName}  已生成`);
    }
  });
}

/**
 * 读取文件内容
 * @param {*} filePath 文件地址
 * @returns
 */
function loadFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf-8");
}

/**
 * 获取文件列表
 * @param {*} realPath 真实地址
 * @param {*} patterns 文件匹配
 * @returns
 */
function getFileList(realPath, patterns) {
  // new URL("../funny", import.meta.url).pathname.substring(1)
  const baseDir = path.resolve(__dirname, realPath);
  // 获取所有文件路径
  const filePaths = globby.globbySync(patterns, {
    cwd: baseDir,
  });

  return { filePaths, baseDir };
}

function getFirstHeader(markdownContent) {
  const headerRegex = /^# (.*)$/m;
  const match = markdownContent.match(headerRegex);
  return match ? match[1] : null;
}

function transformInfoToResult(list, realPath, baseDir) {
  // 创建一个对象来保存每个目录及其对应的项
  const directoryMap = {};
  const listInfo = list.filter((item) => item !== "index.md");

  // 遍历info数组
  for (const filePath of listInfo) {
    // 分割路径获取目录和文件名
    const pathParts = filePath.split("/");
    const fileName = pathParts.pop(); // 获取文件名
    const dirName = pathParts.join("/"); // 获取目录名
    const fullPath = path.join(baseDir, filePath);

    // 读取文件
    const detail = loadFile(fullPath);
    const title = getFirstHeader(detail);
    const routePath = `/${realPath}/${filePath}`;

    // 初始化当前目录在directoryMap中的记录
    if (!directoryMap[dirName]) {
      directoryMap[dirName] = {
        text: "", // 处理根目录和下划线
        items: [],
      };
    }
    // 如果是索引文件，则设置link属性
    if (fileName === "index.md") {
      directoryMap[dirName].text = title;
    } else {
      // 否则，将其添加到items数组中
      directoryMap[dirName].items.push({
        text: title, // 移除文件扩展名
        link: routePath,
      });
    }
  }
  // 构建最终结果数组，仅包含非空的目录和其下的items
  let result = [];
  for (const key in directoryMap) {
    result.push(directoryMap[key]);
  }
  return result;
}

function setMdFile(realPath) {
  let fileText = "";
  const { filePaths, baseDir } = getFileList(`../${realPath}`, "**/*.md");
  filePaths.sort((a, b) => parseInt(a) - parseInt(b));
  // .forEach((filePath) => {
  //   const fullPath = path.join(baseDir, filePath);
  //   if (!fs.statSync(fullPath).isFile()) return;
  //   // 读取文件
  //   const detail = loadFile(fullPath);
  //   const title = getFirstHeader(detail);
  //   const routePath = `/${realPath}/${filePath}`;

  //   fileText += `\t{ text: "${title}", link: "${routePath}" },\n`;
  // });
  const fileInfo = transformInfoToResult(filePaths, realPath, baseDir);
  fileText = `export default ${JSON.stringify(fileInfo, null, 2)}`;
  createFiles(fileText, path.join(baseDir, 'index.js'));
}

[
  "funny",
  "level1",
  "level2",
  "level3",
  "pronunciation",
  "composition",
  "education",
].forEach((item) => {
  setMdFile(item);
});
