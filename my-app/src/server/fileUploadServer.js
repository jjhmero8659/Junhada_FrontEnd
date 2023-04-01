
const upload = require('./fileUploadAction');//업로드 기능을 가져옴
const multer = require('multer');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.post('/api/upload', (req, res, next) => {
    console.log('/api/upload');
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
          return next(err);
        } else if (err) {
          return next(err);
        }
        console.log('원본파일명 : ' + req.file.originalname)
        console.log('저장파일명 : ' + req.file.filename)
        console.log('크기 : ' + req.file.size)
        return res.json({success:1});
      });
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

