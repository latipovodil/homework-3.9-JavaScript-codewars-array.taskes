////////// No/1 link: https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript ----8kyu

let arr = [
  [8, 841, 84, 18585, 41],
  [4, 84, 848, 41854, 854, 58],
  [8, 1, 45841, 5145, 1458, 5, 69, 48, 3, 63, 13]
]


function toCsvText(array) {
  return array.join("\n")
}

console.log(toCsvText(arr));


////////// No/2 link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript ----7kyu

let arr2 = [
    1, 2, 'aasf', '1', '123', 123
  ]
  
  function filter_list(l) {
      return l.filter(l => typeof l === 'number')
    }
    
    console.log(filter_list(arr2));




////////// No/3 link: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript ----6kyu


let arr3 = [
  1,2,3,4,5,6,7,8,9,0
]


function createPhoneNumber(numbers){
  let all = '('
  for (let i = 0; i < 3; i++) {
    all += numbers[i]
    if (i==2) {
      all+=") "
    }
  }
  for (let j = 3; j < 6; j++) {
    all += numbers[j]
    if (j==5) {
      all+="-"
    }  
  }

  for (let k = 6; k < 10; k++) {
    all += numbers[k]
  }
  

  return all
}
console.log(createPhoneNumber(arr3));


