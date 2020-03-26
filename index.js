const express =require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>res.send('hello'))
app.get('/get',(req,res)=>res.send(
    {'name':'zhangsan','sex':10,}
))
app.post('/post',(req,res)=>res.send(
    {'error':0,'msg':'ok','data':'嗯嗯嗯'}
))

app.listen(port,()=>console.log(`端口：${port}`))



