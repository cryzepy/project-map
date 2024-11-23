const { filterDataAllowed } = require("./filterDataAllowed");
const { createRandomReqFileName } = require("./createRandomReqFileName");
const LocationsInfo = require("../model/LocationsInfo")
const fs = require("fs");

exports.saveImagesAndLinks = async (data, id) => {

    if(!data.length) return false

    const filteredDataAllowed = filterDataAllowed(data);

    if (filteredDataAllowed.length != data.length) {
      throw new Error("file tidak sesuai");
    } else {
      const link_images = [];

      for (let i = 0; i < data.length; i++) {
        const file = data[i];
        const filename = createRandomReqFileName(file)
        try {
          fs.writeFileSync("public/data_images/" + filename, file.data);
          link_images.push(filename);
        } catch (err) {
          console.log("Gagal menyimpan file", err);
          return false
        }
      }

      try {
        await LocationsInfo.findOneAndUpdate(
          { _id: id },
          {
            $push: {
              images: {
                  $each: link_images,
              }
            }
          }
        );
        return true
      } catch (err) {
        console.log("gagal menambahkan link ke db", err);
        return false
      }
    }
}