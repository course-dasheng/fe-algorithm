async function asyncPool({
  limit,
  items,
  fn
}) {
  const promises= []
  const pool = new Set()
  for (const item of items) {
    const promise = fn(item)
    promises.push(promise)
    pool.add(promise)
    const clean = () => pool.delete(promise)
    promise.then(clean, clean)
    if (pool.size >= limit) await Promise.race(pool)
  }
  return Promise.all(promises)
}

async function sleep(n,name='test'){
  return new Promise(resolve=>{
    console.log(n,name,'start')
    setTimeout(()=>{
      console.log(n,name,'end','-------------')
      resolve({n,name})
    },n*1000)
  })
}


async function start(){
  asyncPool({
    limit: 2,
    items: [
      ()=> sleep(1,'吃饭'),
      ()=> sleep(3,'睡觉'),
      ()=> sleep(5,'打游戏'),
      ()=> sleep(3.5,'学习算法'),
      ()=> sleep(4,'学习Vue和React'),
    ],
    async fn(item){
      return await item()
    }
  })

}
// @think 如果任务有优先级呢
start()

