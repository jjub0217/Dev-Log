// 2. 이상한 문자 만들기
// toWeirdCase함수는 문자열을 인수로 전달받는다. 
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.
// 예를 들어 s가 ‘hello world’라면 첫 번째 단어는 ‘HeLlO’, 두 번째 단어는 ‘WoRlD’로 바꿔 ‘HeLlO WoRlD’를 리턴한다.
// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.


function toWeirdCase(s) {
    let strArray = '';
    let str1 = s.split(' ');
    // console.log(str1); // ['hello', 'world'] / ['my','name','is','lee']
    // console.log(str1.length); // 2 / 4
    // console.log(str1[0].length); // 5 / 2 
    // console.log(str1[0][0]); // h / m 
    for (let i = 0; i < str1.length; i++) {
        let str2 = str1[i].split('');
        /* console.log(str2); /* [ 'h', 'e', 'l', 'l', 'o' ] [ 'w', 'o', 'r', 'l', 'd' ]
                              [ 'm', 'y' ] [ 'n', 'a', 'm', 'e' ] [ 'i', 's' ] [ 'l', 'e', 'e' ] */
        for (let j = 0; j < str2.length; j++) {
            if (j % 2 === 0) {
                strArray += str2[j].toUpperCase();
            } else {
                strArray += str2[j].toLowerCase();
            }
        }
        strArray += ' ';
    }
    return strArray;
}

console.log(toWeirdCase('hello world'));
console.log(toWeirdCase('my name is lee'));