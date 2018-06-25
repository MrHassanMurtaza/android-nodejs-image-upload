// multer to upload image
const multer = require('multer');

const fs = require('fs');


module.exports = {
    uploadImage: (req, res) => {
        let tmp_path = req.files[0].path;
        let target_path = 'uploads/' + req.files[0].originalname;
        var src = fs.createReadStream(tmp_path);
        var dest = fs.createWriteStream(target_path);
        src.pipe(dest);
        src.on('end', function() { res.sendStatus(200); });
        src.on('error', function(err) { res.sendStatus(500); });
    }
}