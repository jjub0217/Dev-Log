//아래 배열을 사용하여 html을 생성하는 함수를 작성하라.

const todos = [ 
    { id: 3, content: 'HTML', completed: false},
    { id: 2, content: 'CSS', completed: true},
    { id: 1, content: 'Javascript', completed: false}
    ];
    
    function render() {
        let html = '';
    
        todos.forEach(todo => {
        html += `<li "${todo.id}"><label><input type="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label></li>`
        });
        return html;
    }
    // todo 를 매개변수로 가져온 것은 todos의 배열에서 요소값인 객체들(todo)를 하나씩 가져오겠다는 의미이다.
    // 그러므로, 요소값인 객체들인 todo 안에 있는 프로퍼티를 가져올때는 todos.프로퍼티 가 아니라
    // todo.프로퍼티 여야 한다.

    // 위 코드에서 .innerHtml 이 쓰이지않은 이유는 현재 js 파일과 연결시키는 html 파일이 없으므로 
    // .innerHTML 이라는 접근자 프로터피는 사용할 수 없다. 
    // 하여, 빈문자열을 만들겠다고 선언하여 할당을 한 변수 html 에 += 연산자를 사용하였다. 
    // 또한, .innerHTML 을 안쓰고 변수 html에 += 이것만 한 이유는 
    // let html = ''; 을 코딩함으로써 빈 문자열을 만들었고, 
    // html += `<li>label</li>` 이라고 코딩한다면 이것은 '' = '' +  `<li>label</li>` 이라고 쓴것과 동일하다.
    // '' = '' +  `<li>label</li>`  은 문자 = 문자 + 문자 가 되므로 즉, 문자열을 html 이라는 변수에 
    // 할당하여 문자열을 만든것을 반환하겠다는 말이다.


    console.log(render());
    
    
    