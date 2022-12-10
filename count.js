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

let msgs = `有点意思
好顶赞
有点东西
点赞 
1
卡了吗
太强了
关注关注
关注关注`
  .split('\n')
  .filter((v) => v)
  .map((v) => v.trim())

function send() {
  let i = Math.floor(Math.random() * msgs.length)
  let msg = msgs.splice(i, 1)
  let input = document.querySelectorAll('.chat-input')[1]
  input.value = msg

  ev = document.createEvent('HTMLEvents')
  //event.initEvent(eventType,canBubble,cancelable)
  //eventType:字符串值，事件的类型
  //canBubble：事件是否冒泡
  //cancelable：是否可以用preventDefault()方法取消事件
  ev.initEvent('input', false, true)
  input.dispatchEvent(ev)
  document
    .querySelector(
      '.bl-button.live-skin-highlight-button-bg.live-skin-button-text.bl-button--primary.bl-button--small'
    )
    .click()
}
send()
setInterval(() => {
  send()
}, 1000 * 60 * 10)
