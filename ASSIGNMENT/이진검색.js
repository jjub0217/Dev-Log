// 이진 검색을 통해 주어진 배열(array)에 주어진 값(target)이 요소로 존재하는지 확인하여 
// 존재하는 경우 해당 인덱스를 반환하고 존재하지 않는 경우 -1을 반환하는 함수를 구현하라. 
// 단, 아래의 빌트인 함수 이외에는 어떤 빌트인 함수도 사용하지 않아야 하며, while 문을 사용하여 구현하여야 한다.

// Math.floor: 전달받은 인수의 소수점 이하를 내림한 정수를 반환한다.

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1; 
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] > target) {
            end = mid - 1;
        } else { // arry[mid] < target
            start = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));