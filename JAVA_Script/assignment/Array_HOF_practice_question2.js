// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 각 요소 중, 
// 해당 프로퍼티의 값만을 추출한 배열을 반환하는 함수를 작성하라.
// 단, for 문이나 Array#forEach는 사용하지 않도록 하자.

const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ]; 
  
// const ids = todos.map(todo => todo.id);
// console.log(ids);

function getValues(key) {
  
  return todos.map(todo => todo[key]); // map 고차함수를 함수 몸체 안에서 쓸때는 반드시 return 이 있어야 한다.
  // 객체 안에 있는 프로퍼티에 접근하고 싶으면 대괄호를 사용하여 해당 프로퍼티에 접근해야 한다.
}
console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed'));


  // function getValues(key) {
  // }
  // console.log();
  
  
  // console.log(getValues('id')); // [3, 2, 1]
  // console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
  // console.log(getValues('completed')); // [false, true, false]