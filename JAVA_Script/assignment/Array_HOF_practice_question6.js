// todos에서 대상 요소의 id를 인수로 전달하면 해당 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라.
// hint) 기존 객체의 특정 프로퍼티를 변경/추가하여 새로운 객체를 생성하려면 Object.assign 또는 스프레드 문법을 사용한다.

let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function toggleCompletedById(id) {
    todos = todos.map(todo => ((todo.id === id) ? {...todo, completed: !todo.completed} : todo));
    // todos 라는 배열을 map 메소드를 써서 새로운 배열을 만들건데
    // todos의 요소 todo 를 일단 꺼내오고, 그 todo의 id가 2와 같으면, 꺼내온 todo를 스프레드 문법을 써서 객체를 풀어헤친거에서
    // complete 의 값을 반전 시킨것이 false 값인거고, 2와 같지 않다면 꺼내온 todo가 결과값이다. 
    // 위에 힌트에도 나왔지만, 위 코드는 기존 객체의 특정 프로퍼티를 변경 하거나 추가해서 새로운 배열(객체)를 생성하려면 스프레드 문법을 
    // 사용한다고 나와있는것처럼 스프레드 문법을 사용한 코드이다. 
  }
  
  toggleCompletedById(2); // 인수가 2이면 id값이 2 인 completed 값이 반전되고, 인수가 3이면 id 값이 3인 completed 값이 반전된다. 
  
  console.log(todos);
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */

  // 벨로퍼트 7장 스프레드 연산자 / 10장 함수 인자에서의 스프레드 인강 듣기