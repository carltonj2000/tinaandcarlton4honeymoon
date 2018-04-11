const path = require("path");
const os = require("os");
const fs = require("fs");

const images = require("./images")(os.hostname());

const uniqueIndex = () => {
  imageDirsAll.reduce((a, d) => {
    if (a.includes(d.index)) {
      console.log(`index ${d.index} is not allowed to be used twice`);
      process.exit(-1);
    }
    a.push(d.index);
    return a;
  }, []);
};

const imagesExists = images => {
  images.reduce((a, d) => {
    const file = path.join(d.dir, d.file);
    if (!fs.existsSync(file)) {
      console.log(`file ${d.file} not found in ${d.dir}`);
      process.exit(-1);
    }
  });
};

uniqueIndex();
imagesExists(images);
