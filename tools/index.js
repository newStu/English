import * as path from "path";
import * as fs from "fs";
import * as globby from "globby";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getFirstHeader(markdownContent) {
  const headerRegex = /^# (.*)$/m;
  const match = markdownContent.match(headerRegex);
  return match ? match[1] : null;
}

function createFiles(element, filterName, pathInfo) {
  fs.writeFile(`${pathInfo}/${filterName}`, element, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`${pathInfo}\\${filterName} 已生成`);
    }
  });
}

function loadFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf-8");
}

function setMdFile(realPath) {
  // new URL("../funny", import.meta.url).pathname.substring(1)
  const baseDir = path.resolve(__dirname, `../${realPath}`);
  // 获取所有文件路径
  const filePaths = globby.globbySync("**/*.md", {
    cwd: baseDir,
  });

  let fileText = "";
  filePaths.forEach((filePath) => {
    const fullPath = path.join(baseDir, filePath);
    if (!fs.statSync(fullPath).isFile()) return;
    // 读取文件
    const detail = loadFile(fullPath);

    const title = getFirstHeader(detail);
    const routePath = `/${realPath}/${filePath}`;

    fileText += `\t{ text: "${title}", link: "${routePath}" },\n`;
  });
  fileText = `export default [\n${fileText}]`;
  createFiles(fileText, "index.js", baseDir);
}




["funny", "level1", "level2"].forEach(item => {
  setMdFile(item);
})
