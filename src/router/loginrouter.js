const express=require('express')
const path=require('path')

const loginrouter=express.Router()

const accountCtrl=require(path.join(__dirname,'./../control/control.js'))

loginrouter.get('/parent',accountCtrl.getparentpage)

loginrouter.get('/child',accountCtrl.getchildpage)

module.exports=loginrouter