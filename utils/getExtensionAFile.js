exports.getExtensionAFile = filename => {
    const getLastIndexDot = filename.lastIndexOf(".");
    const extension =
    getLastIndexDot == -1 ? "" : filename.substring(getLastIndexDot + 1);
    return extension
}