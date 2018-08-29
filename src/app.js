const express=require('express')
const path=require('path')
const app=express()

const loginrouter=require(path.join(__dirname,'./router/loginrouter.js'))

app.use('/login',loginrouter)

app.listen(1111,'127.0.0.1',err=>{
	if (err) {
		console.log(error)
	}
	console.log('start ok')
})