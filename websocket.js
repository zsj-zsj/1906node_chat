const WebSocket = require('ws')
const moment = require('moment')
const wss = new WebSocket.Server({ port: 12345 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('接受的消息: %s', message);
    var data =JSON.parse(message)  //接收到的json文本 转为json对象
                    //data.name 接收的名字
    var send_msg={name:data.name,msg:data.msg}

    //向所有客户端发送
    wss.clients.forEach(function each(client){
        send_msg.time = moment().utcOffset(8).format('YYYY-MM-DD HH:mm:ss');
        if(client.redyState===WebSocket.open){
            client.send(JSON.stringify(send_msg))
        }
    })

  });
 
  ws.send('something');
});