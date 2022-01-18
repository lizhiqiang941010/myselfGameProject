//引入插件
const  websocket=require("nodejs-websocket");

//创建soket实例，connect：连接事件对象
const  sever=websocket.createServer(conn=>{
    //监听实例对应的事件
    //text事件是文本事件，用来接受前端发送数请求
    conn.on("text",data=>{
        broadcast(JSON.parse(data));

        // conn.sendText(`${fontdata.username}说：${fontdata.datamsg}</br>`);//通过sendText()给浏览器发送数据。
    });
    //close事件，用来监听socket实例是否中止
    conn.on("close",()=>{
        console.log("连接中断");
    })
    //用于实现多人同时聊天，广播
    function broadcast(fontdata){
        sever.connections.forEach(item=>{
            item.send(`${fontdata.username}说：${fontdata.datamsg}</br>`)
        })
    }

}).listen(2000,"10.10.32.162",()=>{
    console.log("我是2000端口");
});