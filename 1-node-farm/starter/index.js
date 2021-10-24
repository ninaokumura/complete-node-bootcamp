// File system module return an object with functions we can use
const fs = require('fs')
const http = require('http')
const url = require('url')

/////////////////////////////////////////////////////////////////////////////////////////
// Files

/*
// synchronus Blocking
// This will read the data from the file and return it
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn)

// //Write in files
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/outup.txt', textOut)
console.log('File written!', textOut)
*/
//////////////////////////////////////////////////////////////////////////////////////////
/*
// Asynchronus non-blocking
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  if (err) return console.log('ERROR!💥')
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2)
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log(data3)

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
        console.log('Your file has been written 😀')
      })
    })
  })
})

console.log('Will read file!')
*/

// Creating a simple web server

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
  console.log(req.url)

  const pathName = req.url
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the overview!')
  } else if (pathName === '/product') {
    res.end('This is the product!')
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    })
    res.end(data)
  } else {
    res.writeHead(404, {
      // http header
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    })
    res.end('<h1>Page not found!</h1>')
  }
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000')
})

// Routing simply means implement different actions for different urls

// Web api => service where we can request data
