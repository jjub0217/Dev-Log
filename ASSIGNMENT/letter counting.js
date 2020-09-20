// 1. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라. 
// 단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 
// 예를 들어 8808은 3, 8888은 4로 카운팅 해야 한다. 
// (hint) 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n] 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

let count = 0
let str = ''

// function getCount8() {
//     for (let i = 0; i <= 10000; i++) {
//         str += i;
//     }
//     return str;
// }
// let result = getCount8();

// for (let i = 0; i < result.length; i++) {
//     if (str[i] === '8') {
//         count++
//     }
// }
// console.log(count);


function getCount8() {
    for (let i = 0; i <= 10000; i++) {
        str += i;
    }
    for (let j = 0; j < str.length; j++) {
        if (str[j] === '8') {
            count++
        }
    }
    return count;
}
console.log(getCount8()); // 4000