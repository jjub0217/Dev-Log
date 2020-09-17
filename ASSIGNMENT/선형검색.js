// 선형 검색을 통해 주어진 배열(array)에 주어진 값(target)이 요소로 존재하는지 확인하여 
// 존재하는 경우 해당 인덱스를 반환하고 존재하지 않는 경우 -1을 반환하는 함수를 구현하라. 
// 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

function linearSearch(array, target) {
    // console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        if (typeof array[i] === typeof target) {
            if (array[i] === target) {
                return i
            }
        }
    }
    return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6], 1));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6));
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7));