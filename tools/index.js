import * as path from "path";
import * as fs from "fs";
import * as globby from "globby";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function loadFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf-8");
}

export function getAllMdFile() {
  // new URL("../funny", import.meta.url).pathname.substring(1)
  const baseDir = path.resolve(__dirname, "../funny");
  // 获取所有文件路径
  const filePaths = globby.globbySync("**/*.md", {
    cwd: baseDir,
  });

  filePaths.forEach((filePath) => {
    const fullPath = path.join(baseDir, filePath);

    if (!fs.statSync(fullPath).isFile()) return;
    // 读取文件
    const detail = loadFile(fullPath);

    console.log(detail, "--------");
  });
}

getAllMdFile();

console.log(new URL("../funny", import.meta.url).href);
