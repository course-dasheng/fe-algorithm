// 特斯拉面试题

// 有N块积木，从0到N-1，排成一排。 【特斯拉】
//  一对青蛙坐在一块积木上，他们大吵了一架。
//  现在它们想要跳离彼此，这样它们之间的距离就会尽可能大。
//  块号J和K之间的距离，当J <=K时，计算为K - J + 1。
//  青蛙只能跳起来，
//  这意味着它们只能在
//  两个木块相邻且第二个木块与第一个木块高度相同或更高的情况下才能从一个木块移动到另一个木块。
//  如果它们一开始也选择坐在最理想的起始木块上，那么它们之间可能形成的最长距离是多少?

// 写一个函数:

// 函数的解决方案

// 给定一个由表示方块高度的n整数组成的数组方块，返回两只青蛙从其中一个方块开始彼此之间可能的最长距离
// ![](./assets/frog.png)
// https://github.com/himanshuarora05/Codility-FrogJump

// 动态规划
function solution(blocks) {
  let ret = [] // 每一个block[i]作为起点的时候，最大的距离
  for(let i=0;i<blocks.length;i++) {
    // console.log(first)
    let j = k = i
    for(j=i;j>=0;j--){
      // 第一只青蛙从右向左跳
      if(j===0 || blocks[j] > blocks[j-1]) {
        break
      }
    }

    for(k=i;k<blocks.length-1;k++){
      // 第二只青蛙从右向左跳
      if(blocks[k] > blocks[k+1]) {
        break
      }
    }

    // console.log(j,k)
    ret.push(k-j+1)
  }
  return Math.max(...ret)
}
console.log(solution([2,6,8,5]))
console.log(solution([1,5,5,2,6]))
console.log(solution([0,1]))