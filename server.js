'use strict';
const http = require('http');
const fs = require('fs'); //читаем файл
const server = http.createServer((request, response) => {
    console.log(request.method,request.url); // на любую команду/ запрос к серверу вывести сообщение в консоль
    if(request.url == '/style.css'){
        const css = fs.readFileSync('style.css', 'utf8');
        response.end(css);//обработали запрос и его можно завершить
    }else{

    }
    const html = fs.readFileSync('index.html', 'utf8');
    response.end(html);//обработали запрос и его можно завершить
});
console.log('port = ', process.env.PORT); // получаем адрес порта от хероку
server.listen(process.env.PORT || 3000);// запуск сервера
console.log('Server started!');

