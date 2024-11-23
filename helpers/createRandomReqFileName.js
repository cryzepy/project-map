const { getExtensionAFile } = require("../utils/getExtensionAFile");

exports.createRandomReqFileName = file => Date.now().toString() + file.md5 + "." + getExtensionAFile(file.name)