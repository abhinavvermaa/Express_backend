import multer from 'multer'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = 'AV'
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

export const upload = multer({ storage,})