// const fs = require('fs')
// const path = require('path')
// const dir = path.resolve(__dirname,'./')


// let files = fs.readdirSync(dir)
// let len = files.filter(f=>/^\d+\..+\.js$/.test(f)).length
// console.log('一共刷了'+len+'题，加油！')

const fs = require('fs')
const path = require('path')
const dir = path.resolve(__dirname, './')

let ret = fs.readdirSync(dir)
let arr = ret.filter((v) => /^\d+\..+\.js$/.test(v))
let len = arr.length
console.log(`你刷了${len}个题`)
// console.log(len)
const md = fs.readFileSync(path.resolve(__dirname, './README.md'), 'utf8')
arr
  .sort((a, b) => {
    return Date(fs.statSync(a).ctime) - Date(fs.statSync(b).ctime)
  })
  .forEach((file) => {
    let str = '* ' + file.split('.')[0] + '.'
    if (md.indexOf(str) == -1) {
      console.log('    * ' + file + ' 不存在')
    }
  })
