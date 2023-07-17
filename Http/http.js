
import http from "http";
let user = [1,2,3,4,5]

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        let body  = ''
        req.on('data', (chunk)=>{
            body += chunk
        })
        req.on('end',()=>{
            console.log(JSON.parse(body));
        })
        res.end()
    }else if(req.url === '/user'){
        res.write((user.toString()))
        res.end('done')    
    }else {
        res.end('404 error')
    }
})
 server.listen(4004, ()=>{
    console.log('4004 port create server');
 })
