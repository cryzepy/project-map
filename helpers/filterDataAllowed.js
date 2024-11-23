const { getExtensionAFile } = require("../utils/getExtensionAFile");

exports.filterDataAllowed = (files) => {
    const dataAllowed = files.filter(file => {

      const extension = getExtensionAFile(file.name);
      const allowedExtensions = ["jpeg", "jpg", "png"]

      // remove jika extensi file tidak sesuai
      if (!allowedExtensions.includes(extension)) return false;
    
      // remove jika file lebih dari 2MB
      if (file.size > 2_000_000) return false;
    
      // jika file sesuai maka push ke filteredDataAllowed
      return true
    })

    return dataAllowed
}

