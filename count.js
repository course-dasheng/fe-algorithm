const fs = require('fs')
const path = require('path')
const dir = path.resolve(__dirname,'./')

!(async function(){
  let ret = await fs.readdirSync(dir)
  let len = ret.filter(v=>/^\d+\..+\.js$/.test(v)).length
  console.log(`你刷了${len}个题`)
})()