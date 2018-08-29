const xtpl=require('xtpl')
const path=require('path')


exports.getparentpage=(req,res)=>{
	res.sendFile(path.join(__dirname,'./../html/parent.html'))
}

exports.getchildpage=(req,res)=>{
	xtpl.renderFile(path.join(__dirname,'./../html/child.html'),{

	},function(error,content){
		res.send(content)
	})
}