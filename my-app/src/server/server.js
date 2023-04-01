    const express = require("express")	//express 요청
	const app = express()		//express 요청 값 저장

	const PORT = process.env.PORT || 4000; //PORT 번호 저장 , PORT번호는 4000번 또는 자동
    const db = require('./database/db.js')
    const project_db = require('./database/ProjectDB.js')

    const bodyParser = require("body-parser")
    app.use(bodyParser.json());

    const upload = require('./fileUploadAction');//업로드 기능을 가져옴
    const multer = require('multer');

    app.use(express.urlencoded({extended: true}));
    app.use(express.json())

    app.post('/api/upload', (req, res, next) => {
        console.log("complete_upload")
        // console.log(req.file);
        upload(req, res, function(err) {
            console.log(req.file);
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

    app.get('/api/get_view/get_product:view',(req,res)=>{
        // console.log(`select * from ${req.params.view}`)
        db.query(`select * from ${req.params.view} order by ranking asc`,(err,data)=>{
            if(!err){//오류없을때
                // console.log(data)
                res.send({Product:data})
                //res.send({hello:'hello response'})
                //response.send
                //서버의 응답인데,App로 넘어간다.
            }else{//오류가있으면
                console.log(err)
            }
        })
    })


    app.post('/api/get_review_person/get_review',(req,res)=>{ //해당 제품 리뷰 검색
        // console.log(req.body)
        console.log(`select * from ${req.body.pro_id}_review where name="${req.body.writer}" and title="${req.body.title}" and time="${req.body.create_time}"`)
        db.query(`select * from ${req.body.pro_id}_review where name="${req.body.writer}" and title="${req.body.title}" and time="${req.body.create_time}"`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
                // console.log(data)
                res.send({Review:data})
                //res.send({hello:'hello response'})
                //response.send
                //서버의 응답인데,App로 넘어간다.
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.put('/api/put/modify_summary:id&:summary&:name&:title',(req,res)=>{ //해당 제품 리뷰 검색
        // console.log(`update ${req.params.id}_review set summary="${req.params.summary}" where name="${req.params.name}" and title="${req.params.title}"`)
        db.query(`update ${req.params.id}_review set summary="${req.params.summary}" where name="${req.params.name}" and title="${req.params.title}"`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
                // console.log(data)
                // res.send({User_info:data})
                //res.send({hello:'hello response'})
                //response.send
                //서버의 응답인데,App로 넘어간다.
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.get('/api/get_represent/get_product',(req,res)=>{
        // console.log(req.params)
        db.query(`select * from represent`,(err,data)=>{
            if(!err){//오류없을때
                // console.log(data)
                res.send({data:data})
                //res.send({hello:'hello response'})
                //response.send
                //서버의 응답인데,App로 넘어간다.
            }else{//오류가있으면
                console.log(err)
            }
        })
    })
    
    app.post('/api/post/join_membership',(req,res)=>{ // 회원가입 db추가
        // console.log(`insert into user_info values("${req.body.name}","${req.body.id}","${req.body.passwd}","${req.body.gender}","${req.body.basic_img_profile}","${req.body.email}","${req.body.real_name}","${req.body.phone_number}")`)
        db.query(`insert into user_info values("${req.body.name}","${req.body.id}","${req.body.passwd}","${req.body.gender}","${req.body.basic_img_profile}","${req.body.email}","${req.body.real_name}","${req.body.phone_number}")`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
            }else{//오류가있으면
                console.log(err)
            }
        })
        project_db.query(`insert into users values(0,"${req.body.id}","${req.body.passwd}","${req.body.name}",SYSDATE(),"${req.body.email}")`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
            }else{//오류가있으면 //insert into users(id,password,name,regdate,email)
                console.log(err)
            }
        })
        //여기에 만들어 줘야함 CHECK POINT
    })

    app.post('/api/post_/create_review',(req,res)=>{ //리뷰 create , db 에 추가
        title = req.body.title
        replace_title = req.body.replace_title
        id = req.body.id
        summary = req.body.summary
        date = req.body.date
        replace_date = req.body.replace_date
        inquiry = req.body.inquiry
        good_rec = req.body.good_rec
        name_ = req.body.name
        num = req.body.num
        time = req.body.review_time
        img_src1 = req.body.img_src1
        img_src2 = req.body.img_src2
        img_src3 = req.body.img_src3
        img_src4 = req.body.img_src4
        img_src5 = req.body.img_src5
        db.query(`insert into ${id}_review (title,summary,date,inquiry,good_rec,bad_rec,name,time,review_img,review_img2,review_img3,review_img4,review_img5) values("${title}","${summary}","${date}",0,0,0,"${name_}","${time}","${img_src1}","${img_src2}","${img_src3}","${img_src4}","${img_src5}")`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
            }else{//오류가있으면
                console.log(err)
            }
        })
        console.log(`create table ${id}_comment_${name_}_${replace_date}_${time}(name varchar(50) , date varchar(30) , good_rec int , bad_rec int , summary varchar(1000), time varchar(50)) `)
        db.query(`create table ${id}_comment_${name_}_${replace_date}_${time}(name varchar(50) , date varchar(30) , good_rec int , bad_rec int , summary varchar(1000), time varchar(50)) `,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.delete('/api/delete_review',(req,res)=>{ // 게시판 db 삭제 및 댓글 db 삭제
        // console.log("req.body_delete",req.body.title)
        // console.log(`drop table ${req.body.id}_comment_${req.body.name}_${req.body.replace_title}_${req.body.replace_date}`)
        db.query(`DELETE FROM ${req.body.id}_review WHERE name="${req.body.name}" and summary="${req.body.summary}"`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
            }else{//오류가있으면
                console.log(err)
            }
        })
        db.query(`drop table ${req.body.id}_comment_${req.body.name}_${req.body.replace_title}_${req.body.replace_date}`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.get('/api/get_comment:id&:title&:replace_title&:name&:date&:time',(req,res)=>{ // 날짜 넘겨받아야함 어떻게?
        // console.log("req.params",req.params)
        // console.log("get_comment",req.body)
        // console.log(`%%select * from ${req.params.id}_comment_${req.params.name}_${req.params.date}_${req.params.time}`)
        db.query(`select * from ${req.params.id}_comment_${req.params.name}_${req.params.date}_${req.params.time}`,(err,data)=>{
            if(!err){//오류없을때
                res.send({Product:data})
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.post('/api/insert_comment',(req,res)=>{ 
        db_date = req.body.db_date
        db_time = req.body.db_time

        value_date = req.body.value_date
        value_time = req.body.value_time
        writer = req.body.writer
        pro_id = req.body.pro_id
        summary = req.body.summary
        
        db.query(`insert into ${pro_id}_comment_${writer}_${db_date}_${db_time} values("${writer}","${value_date}",0,0,"${summary}","${value_time}")`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
                res.send({Update:"True"})
            }else{//오류가있으면
                console.log(err)
            }
        })
    })



    app.delete('/api/delete/del_comment',(req,res)=>{ 
        // console.log("req.body_delete",req.body)
        // console.log(`DELETE FROM ${req.body.pro_id}_comment_${req.body.writer}_${req.body.review_date}_${req.body.review_create_time} WHERE name="${req.body.writer}" and time="${req.body.comment_time}"`)
        db.query(`DELETE FROM ${req.body.pro_id}_comment_${req.body.writer}_${req.body.review_date}_${req.body.review_create_time} WHERE name="${req.body.writer}" and time="${req.body.comment_time}"`,(err,data)=>{
            if(!err){//오류없을때
                res.send({Update:"True"})
            }else{//오류가있으면
                console.log(err)
            }
        })
        // db.query(`drop table ${req.body.id}_comment_${req.body.name}_${req.body.replace_title}_${req.body.replace_date}`,(err,data)=>{
        //     if(!err){//오류없을때
        //     }else{//오류가있으면
        //         console.log(err)
        //     }
        // })
    })

    app.get('/api/get_image/basic_image',(req,res)=>{
        // console.log(req.params)
        db.query(`select * from basic_image`,(err,data)=>{
            if(!err){//오류없을때
                // console.log(data)
                res.send({data:data})
                //res.send({hello:'hello response'})
                //response.send
                //서버의 응답인데,App로 넘어간다.
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.post('/api/update_user_img',(req,res)=>{ 
        img_src = req.body.img
        user_name = req.body.user_name
        
        // console.log(`UPDATE user_info SET profile_img = "${img_src}" WHERE name = "${user_name}"`);
        db.query(`UPDATE user_info SET profile_img = "${img_src}" WHERE name = "${user_name}"`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
                // res.send({Update:"True"})
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.put('/api/put/update_userinfo',(req,res)=>{ 
        // console.log(req.body)
        // console.log(`select * from user_info where name="${req.body.user_name}" and id="${req.body.user_id}" and passwd="${req.body.user_pw}"`)
        db.query(`select * from user_info where name="${req.body.user_name}" and id="${req.body.user_id}" and passwd="${req.body.user_pw}"`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
                res.send({data:data})
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.put('/api/put/update_user_info_id',(req,res)=>{ 
        // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        // console.log(req.body)
        // console.log(`UPDATE user_info SET id = "${req.body.update_id}" WHERE name = "${req.body.user_name}"`)
        db.query(`UPDATE user_info SET id = "${req.body.update_id}" WHERE name = "${req.body.user_name}"`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
                // res.send({data:data})
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.put('/api/put/select_user_password',(req,res)=>{ 
        db.query(`select * from user_info where name="${req.body.user_name}" and id="${req.body.user_id}" and passwd="${req.body.present_input_pw}"`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
                res.send({data:data})
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.put('/api/put/update_user_password',(req,res)=>{ 
        // console.log(`UPDATE user_info SET passwd = "${req.body.update_input_pw}" WHERE name = "${req.body.user_name}" and id="${req.body.user_id}" and passwd="${req.body.present_input_pw}"`)
        db.query(`UPDATE user_info SET passwd = "${req.body.update_input_pw}" WHERE name = "${req.body.user_name}" and id="${req.body.user_id}" and passwd="${req.body.present_input_pw}"`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
                res.send({data:data})
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.get('/api/get/user_sub_info:name',(req,res)=>{
        // console.log(req.params)
        db.query(`select email,phone_number,real_name,gender,name from user_info where name="${req.params.name}"`,(err,data)=>{
            if(!err){//오류없을때
                // console.log(data)
                res.send({data:data})
                //res.send({hello:'hello response'})
                //response.send
                //서버의 응답인데,App로 넘어간다.
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.get('/api/get/pro_name_review:id&:view',(req,res)=>{
        // console.log(`select name from ${req.params.view} where id=${req.params.id}`)
        db.query(`select name from ${req.params.view} where id=${req.params.id}`,(err,data)=>{
            if(!err){//오류없을때
                // console.log(data)
                res.send({Product:data})
                //res.send({hello:'hello response'})
                //response.send
                //서버의 응답인데,App로 넘어간다.
            }else{//오류가있으면
                console.log(err)
            }
        })
    })


    app.put('/api/put/put_rec',(req,res)=>{ //해당 제품 리뷰 검색
        user_id = req.body.id
        user_name = req.body.name
        user_time = req.body.time
        user_title = req.body.title
        // console.log(`select good_rec,bad_rec from ${user_id}_review where name="${user_name}" and time="${user_time}" and title="${user_title}"`)
        
        db.query(`update ${user_id}_review set good_rec = good_rec+1  where name="${user_name}" and time="${user_time}" and title="${user_title}"`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
                // res.send({data:data})
            }else{//오류가있으면
                console.log(err)
            }
        })
    })

    app.post('/api/update_review_img',(req,res)=>{ //해당 제품 리뷰 검색
        user_id = req.body.id
        user_name = req.body.name
        user_time = req.body.time
        user_title = req.body.title
        user_img_src1 = req.body.img_src1
        user_img_src2 = req.body.img_src2
        user_img_src3 = req.body.img_src3
        user_img_src4 = req.body.img_src4
        user_img_src5 = req.body.img_src5
        // console.log(`update ${user_id}_review set review_img = "${user_img_src1}" , review_img2 = "${user_img_src2}", review_img3 = "${user_img_src3}" , review_img4 = "${user_img_src4}", review_img5 = "${user_img_src5}"  where name="${user_name}" and time="${user_time}" and title="${user_title}"`)
        db.query(`update ${user_id}_review set review_img = "${user_img_src1}" , review_img2 = "${user_img_src2}", review_img3 = "${user_img_src3}" , review_img4 = "${user_img_src4}", review_img5 = "${user_img_src5}"  where name="${user_name}" and time="${user_time}" and title="${user_title}"`,(err,data)=>{
            // console.log("/api/get/get_review:product_id")
            if(!err){//오류없을때
            }else{//오류가있으면
                console.log(err)
            }
        })
    })



	app.listen(PORT, ()=>{ //포트 listen
    		console.log(`Server On:http://localhost: ${PORT}`)
	})