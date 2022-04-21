# 刷题章节

150题左右

## 数据结构
1. 链表
```js
遍历
while(head){
  head = head.next
}
return head

let dummny = {
  next:head
}
...
return dummny.next

```
2. 数组
```js
for(let i=0;i<arr.length;i++){
  arr[i]
}
```
3. 树     前端最需要刷的数据结构！！！！！
```js
(二叉树)
functon walk(treeNode){
  if(treeNode==null){
    return treeNode
  }
  
  处理 treeNode //进入节点  
  walk(treeNode.left)
  walk(treeNode.right)

  walk(treeNode.left)
  处理 treeNode
  walk(treeNode.right)
  
  walk(treeNode.left)
  walk(treeNode.right)
  处理 treeNode //离开节点
}
function walk(treeNode, res = []) {
    if(treeNode==null) {
      return treeNode
    }
    const stack = [treeNode]
    let cur = null
    while(stack.length) {
        cur = stack.pop()
        res.push(cur.val) //前
        cur.right && stack.push(cur.right)
        cur.left && stack.push(cur.left)
    }
    return res
};


```


## 算法思想
1. 二分（搜索）

有序的数组里 找一个数字，如果整体复杂度高，可以考虑先排序
```
  let left = 0
  let right = arr.length-1
  while(left<right){
    let mid = (left+right)>>1
    if(arr[mid]<nums[i]){
      left = mid+1
    }else{
      right = mid
    }

    let mid = (left+right)>>1
    if(arr[mid]<nums[i]){
      left = mid+1
    }else if(arr[mid]==nums[i]){
      right = mid
    }
  

  }

  while left<right 还是left<=right
  left =mid 还是Mid+1
  right=mid还是mid-1
  
  搜索一个元素的时候，通常<= mid需要+-1
  搜索便捷的时候，mid+1,mid，left<right

```

1. 双指针（快慢指针，头尾指针）
   1. 链表，数组 
```js
let fast = head
let slow = head
while(fast && fast.next){
  // 怎么走，看需求
}

let i=0
let j=0
```

3. 递归和回溯  （画递归树） ！！！重点，树的题目
```
function backtrack(数据，路径缓存){
  循环：(每次取下一个值)
    标记
    backtrack(数据，路径缓存)
    取消标记
}
```

4. 动态规划 ！！！！！！重点
  dp
  
<!-- 你要清楚，结果是怎么推导出来的
1,2,5三种零钱，怎么最好的找出11块钱
dp[11]  11块钱这个值得找零最佳解
Min(dp[10],d[9] dp[6])这三个的最优解 +1 -->
  // 边界条件
  // 循环：
  //   递推公式
  // 循环硬币
  //   dp[n] n的钱数下，返回零钱的最优解

  1. 暴力解（画图）
  2. 研究优化，加备忘录
  3. 递推

1. 贪心
没有公式
6. bfs（宽度优先） dfs(回溯，广度有限)

其他
1. bfs
2. 位运算

## 题型
1. 盛水
2. 炒股
3. 打劫
....




# 扩展

1. 图
2. 哈希表
3. 。。。。



