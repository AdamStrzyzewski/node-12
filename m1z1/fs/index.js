const fs = require("fs").promises;

const getFileStats = async (filename) => {
  const stats = await fs.stat(filename);
  return {
    name: filename,
    size: stats.size,
    date: stats.mtime,
    isFolder: stats.isDirectory(),
  };
};

const writeToFile = async (filename, text) => {
  await fs.appendFile(filename, text);
};

const getFiles = async (path) => {
  // get file list
  const files = await fs.readdir(path);
  const fileDetails = await Promise.all(files.map(getFileStats));
  // console.table(fileDetails);
  await writeToFile(
    "files.csv",
    fileDetails
      .map((el) =>
        Object.values(el)
          .map((el) => `"${el}"`)
          .join(";")
      )
      .join("\n")
  );
};

// getFiles(__dirname);

// fs.rename // rename/move file
// fs.unlink // delete file

// fs.writeToFile("test.txt", `${Math.random()}\n`);
// \n - new line
// fs.readFile(filename)

fs.readFile("files.csv").then((data) => {
  console.log(data.toString());
  console.log(
    data
      .toString()
      .split("\n")
      .map((row) => row.replace(/"/g, "").split(";"))
  );
});
