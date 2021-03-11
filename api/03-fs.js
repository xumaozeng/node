const fs = require('fs')

// 同步
// const data = fs.readFileSync('./const.js')
// console.log(data, data.toString());

// 异步
fs.readFile('./const.js', (err, data) => {
    if (err) throw err
    console.log(data);
})