# strict mode

- JS 라는 언어의 문법을 좀 더 엄격하게 만들어서, 일부러 에러를 발생시키는 효과를 낸다.

- 오류를 발생시키거나, 오타나 문법 지식의 미비로 인한 실수를 일으키지 않도록 하게끔 한다.

  ## strict mode 적용 방법

  ---

  **<u>결론: 즉시실행함수 내부의 선두에 'use strict' 라고 쓰자.</u>**

  1. 전역의 선두에 'use strict' 라고 쓰는 방법 <br>: 전역에 쓴것과 안쓴것들을 혼용해서 사용하면 오류를 발생시킬수도 있기 때문에 이 방법은 쓰지 않는 것이 좋다. 

     ```javascript
     'use strict'
     
     function foo(){
         x = 10;
     }
     foo();
     ```

  2. 함수몸체 내부의 선두에 'use strict' 라고 쓰는 방법<br>: 모든 함수에 일일이 strict mode를 적용시키는 것은 번거롭다. 또한, 다른 오류를 발생시킬수도 있다. 

     ```javascript
     function foo(){
         'use strict'
         
         x = 10;
     }
     foo();
     ```

  3. 즉시실행함수 몸체 내부의 선두에 'use strict' 라고 쓰는 방법<br>즉시실행함수로 스크립트 전체를 감싸서 스코프를 구분하는것이 좋다. 

     ```javascript
     (function foo(){
         'use strict'
         
          x = 1;
         console.log(x);
     })(); 
     
     // Refernce Error 
     ```

  ## strict mode를 적용시키면 나오는 명시적 에러들

  ---

  1. **<u>선언하지 않은</u>** 변수를 참조하면 Reference Error 

     ```javascript
     (function foo(){
         'use strict'
         
          x = 1;
         console.log(x);
     })();
     // Reference Error
     ```

  2. delete 연산자를 사용해서 뭔가를 삭제하면 Syntax Error(문법에러)

     ```javascript
     (function foo() {
         'use strict'
     
         let x = 1;
         delete x;
         console.log(x);
     })();
     // Syntax Error
     ```

  3. 매개변수를 중복사용하면 Syntax Error(문법에러)

     ```javascript
     (function foo() {
         'use strict'
     
         function bar(x, x) {
             return x + x;
         }
         console.log(bar(10, 20));
     })();
     // Syntax Error
     ```

  4. with 문을 사용하면 Syntax Error(문법에러)

     ```javascript
     (function foo() {
         'use strict'
     
         with({ x: 1 }){
             console.log(x);
         }
     })();
     // Syntax Error
     ```

  ## strict mode 를 적용시키면 나타나는 변화

  1. 일반함수로 호출하게 되면, 해당 일반함수 몸체 내부의 this 는 undefined 가 바인딩된다.<br>일반 함수 몸체 내부에서는 this 를 사용할 필요가 없기 때문이다.(에러는 발생하지 않는다.)

     ```javascript
     (function() {
         'use strict'
     
         function bar(){
             console.log(this);
         }
         bar(); // <- 일반함수로 호출 : undefined
     
         function Foo(){
             console.log(this);
         }
         new Foo(); // <- 생성자함수로 호출 : Foo {}
     })();
     ```

  2. 매개변수에 전달된 인수를, 재할당해서 변경해도 arguments 객체에 반영되지 않는다.

     ```javascript
     // strict mode 적용시키지 않은 상황
     
     // 인수가 arguments 객체의 프로퍼티의 값이 되는 함수
     (function (a) {
         console.log(a); // 1
         a = 2;
         console.log(a); // 2
         console.log(arguments); // [Arguments] { '0' : 2 }
         // └> [Arguments] { '0' : 1 }이 나와야 하던것이 재할당으로 인해 변경되었다.
     })(1); 
     
     
     // 인수가 arguments 객체의 프로퍼티의 값이 되는 함수
     (function (a) {
         'use strict'
         console.log(a); // 1
         a = 2;
         console.log(a); // 2
         console.log(arguments); // [Arguments] { '0' : 1 }
         // └> [Arguments] { '0' : 1 }이 나와야 하던것이 재할당으로 인해 변경되지않고,
         //    원래의 arguments 객체가 출력된다.
     })(1);
     ```

     

  



