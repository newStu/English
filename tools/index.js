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

function setMdFile(realPath) {
  let fileText = "";
  const { filePaths, baseDir } = getFileList(`../${realPath}`, "**/*.md");
  filePaths.sort((a, b) => parseInt(a) - parseInt(b));
  filePaths
    .filter((item) => item !== "index.md")
    .forEach((filePath) => {
      const fullPath = path.join(baseDir, filePath);
      if (!fs.statSync(fullPath).isFile()) return;
      // 读取文件
      const detail = loadFile(fullPath);

      const title = getFirstHeader(detail);
      const routePath = `/${realPath}/${filePath}`;

      fileText += `\t{ text: "${title}", link: "${routePath}" },\n`;
    });
  fileText = `export default [\n${fileText}]`;
  createFiles(fileText, `${baseDir}\\index.js`);
}

["funny", "level1", "level2", "pronunciation"].forEach((item) => {
  setMdFile(item);
});
