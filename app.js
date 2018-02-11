let app=require('express')();
app.use(require('express').static('public'));
//app.set('view engine','jade')
    app.get('/index.html',(req,res)=>{
		res.sendFile( __dirname + "/views/" + "index.html" );
//		res.send("我妈不让我跟傻子玩");
//		res.render('index',{title:'老宋',message:'是不是傻？'})
	})

      app.get('/who-we-are.html',(req,res)=>{
		res.sendFile( __dirname + "/views/" + "who-we-are.html" );

	})

     app.get('/what-we-do.html',(req,res)=>{
		res.sendFile( __dirname + "/views/" + "what-we-do.html" );

	})

    app.get('/gallery.html',(req,res)=>{
		res.sendFile( __dirname + "/views/" + "gallery.html" );

	})
    app.get('/404.html',(req,res)=>{
		res.sendFile( __dirname + "/views/" + "404.html" );

	})
    app.get('/contact.html',(req,res)=>{
		res.sendFile( __dirname + "/views/" + "contact.html" );

	})
   app.listen(8089,()=>{
	   console.log('服务启动......')
	   console.log('端口为:8089')
   })