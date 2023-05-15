/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  const len = Math.max(arr1.length, arr2.length)
  for(let i=0;i<len;i++){
      const v1 = Number(arr1[i]) || 0
      const v2 = Number(arr2[i]) || 0
      if(v1<v2){
          return -1
      }else if(v1>v2){
          return 1
      }
  }
  return 0
};