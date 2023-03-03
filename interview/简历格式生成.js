
const fs = require('fs')
const path = require('path')

function generateResume(str){
  // '---[1:2][1:1:1]---'
  let ret = []
  // console.l
  let i = 0
  console.log(str.length)
  while(i<str.length){
    const s = str[i]
    if(s==='-'){
      ret.push(s)
      i++
    }else if(s==='['){
      const tmp = str.slice(i,str.indexOf(']',i))
      ret.push(tmp.slice(1).split(':'))
      i += tmp.length+1
    }
  }
  //generate html
  generateHtml(ret)
}
function generateHtml(arr){
  console.log(arr)
  const filename = '简历格式生成.html'
  const ret = arr.map(item=>{
    if(item==='-'){
      return `<div class="item block"></div>`
    }else{
      return `<div class="flex">
        ${item.map(v=>`<div class="item" style="flex:${v}"></div>`)}
      </div>`
    }
  })
  const tmpl = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      .item{
        background:#ff57be;
        height:40px;
        margin:10px 0;
      }
      .flex{
        display:flex;
      }
    </style>
  </head>
  <body>
    <div>
    ${ret.join('\n')}
    </div>

  </body>
  </html>`
  let p = path.resolve(__dirname,filename)
  fs.writeFileSync(p,tmpl,'utf-8'  )
}
generateResume('---[1:2][1:1:1]---')