const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // cb(null, 'C:\\Users\\PC\\School_Project\\my-app\\public\\review_img'); // 절대경로
    cb(null, '../../public/img/review_img_folder');    
    // 파일이 저장되는 경로입니다. 
  },
  filename: function(req, file, cb) {
    // cb(null, moment().format('')+ file.originalname); 
    cb(null, moment().format('YYYY') + "_" + file.originalname);   
    // 저장되는 파일명
  }
});

const upload = multer({ storage: storage }).single("file");   
// single : 하나의 파일업로드 할때

module.exports = upload;