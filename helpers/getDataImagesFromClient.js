exports.getDataImagesFromClient = (req) => {
  const data = [];
  if (req.files != null) {
    const images = req.files.images;
    if (images.name != undefined) {
      data.push(images);
    } else {
      images.forEach((file) => data.push(file));
    }
    return data
  } else {
    return [];
  }
};
