# this

들어가기에 앞서...

><u>this</u>
>
>- 자신이 속한 객체, 즉 자신이 생성할 인스턴스를 가리키는, "자기 참조 변수"라고 한다.

---

- 객체를 만드는 방법들중에 '객체리터럴'로 만든 객체들은, 객체 내부에서, 객체를 가리키는 식별자를 참조할수 있지만,<br>생성자 함수'라는 함수들은, 해당 함수 내부안에서 자신이 미래에 생성할 인스턴스(객체)를 가리키는 식별자를 참조할수 없다. 

  ```javascript
  function Circle(radius){
      ???.radius = radius 
  } // <- 자신이 속한 객체(즉, 자신이 생성할 객체인 인스턴스) 를 가리키는 식별자를 참조하고싶지만, 
    // 	생성자 함수의 인스턴스는 생성자 함수가 완성되어야 생성되기 때문에, 
    // 	생성자 함수를 만드는 과정에서는 인스턴스를 참조할수 없다.
  ```

  => 생성자 함수를 만드는 과정에서 인스턴스의 프로퍼티나 메서드를 참조할수 있도록, 인스턴스를 가리키는 식별자의 역할을 하는 것이 "this"이다. 

- this에 바인딩되는 값은, 함수가 어떤 함수로 호출되었느냐에 따라 (함수 호출 방식에 따라) 결정된다.<br>여기서 중요한것은, this는 자기참조 변수이므로, **<u>객체리터럴 내부의 메서드 내부와 생성자 함수 내부에서만 의미있게 활용</u>**할수 있다.

  ![39](https://user-images.githubusercontent.com/62126380/96083952-2bd5a780-0ef9-11eb-9005-f97ec2e761b8.jpg) 

## 일반함수로 호출

1. 함수정의를, 일반함수로 호출된 모든 함수의 내부에서의 this에는 전역객체가 바인딩된다.

2. 객체리터럴의 메서드 내부에서 중첩된, 중첩함수와 콜백함수 내부에서의 this에도 전역객체가 바인딩된다. 

   ### 일반함수로 호출될때의 문제점

   ---

   - 객체리터럴의 메서드 내부에서 중첩된, 중첩함수와 콜백함수의 내부에서의 this에 전역객체가 바인딩되는 것은 문제가  있다.

     > <u>중첩함수와 콜백함수</u>
     >
     > - 외부함수를 돕는, 헬퍼 역할의 함수인데, 

   - 외부함수의 헬퍼역할을 하는, 외부함수인 메서드 내부의 this 와, <br>메서드 내부에서의, 중첩함수 내의 this 와 콜백함수 내의 this 가 다르다는 것은<br>헬퍼함수로의 역할을 하기 어렵게 한다. 

     - 해결방법

       1. 메서드 내부의 서두에, this(메서드를 호출한 객체 자체)를 변수에 할당

          ![40](https://user-images.githubusercontent.com/62126380/96085429-c3d49080-0efb-11eb-8bcb-21cc0f82f61c.jpg) 

       2. Function.prototype.(apply / call / bind ) 메서드 사용

          ![41](https://user-images.githubusercontent.com/62126380/96085822-5aa14d00-0efc-11eb-9854-861247d1508e.jpg) 

       3. 화살표 함수를 사용해서 this와 바인딩을 일치

          ```javascript
          var value = 1;
          
          const obj = {
              value : 100,
              foo(){
                  // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다
                  setTimeOur(() => console.log(this.vlaue), 100) // 100
              }
          }
          
          obj.foo();
          ```

## 메서드로 호출

1. 함수정의를, 메서드로 호출된 함수의 내부에서의 this에는 **<u>메서드가 호출된 객체</u>**가 바인딩된다. <br>메서드가 속해져있는 객체가 바인딩되는 것이 아니라, 메서드를 호출한 객체가 바인딩되는것에 주의해야 한다.<br>그 이유는, 메서드라는 함수 객체 자체는, 메서드가 속한 객체가 소유하고 있는 함수가 아니라, **<u>독립적인 함수</u>**이기 때문이다. 

   ```javascript
   const person = {
       name: '주현',
       getName()/*┌-->*/{ return this.name; }/*<--┐*/ 
   			/* └-------------------------------┘*/    
       		// └----> person 이라는 객체가 소유하고 있는, getName 이라는 프로퍼티에 바인딩된, 독립적인함수객체
       		// 		  person 이라는 객체가 소유하고 있는, getName 이라는 프로퍼티가 가리키고있는, 독립적인함수객체
   }
   
   
   const aontherPerson = {
       name: '세진',
       anotherPerson.getNAme = person.getName; /* <- 위의 person 객체가 소유하고 있는, 
       											  getName 이라는 프로퍼티가 가리키고 있는 getName 메서드를,
       											  abotherPerson 이라는 객체가 소유하고 있는,
                                                     getName 이라는 프로퍼티에 값으로 할당.*/
       console.log(anotherPerson,getName()) // '세진' <- anotherPerson 이라는 객체가 소유하고 있는,
       									 //			  getName 이라는 프로퍼티가 가리키고 있는 함수를 호출
   				}
   ```

   ![42](https://user-images.githubusercontent.com/62126380/96087496-e7e5a100-0efe-11eb-82a1-70a844ac5944.jpg)



2. 프로토타입 메서드 내부에서의 this에도, 메서드를 호출한 객체가 바인딩된다.

   ```javascript
   function Person(name){
       this.name = name;
   }
   
   Person.prototype.getName = /*┌>*/function(){/*<---------┐*/ 
       					   /*│*/	return this.name; /*│*/
       					   /*└--------------------------┘*/
   }						    // └----> Person 이라는 생성자함수의 prototype 객체가 소유하고 있는, 
   							// 		  getName 이라는 프로퍼티에 바인딩된, 독립적인함수객체
   
   const me = new Person('주현')
   console.log(me.getName()) // <- Person 이라는 생성자함수가 생성한 me 라는 인스턴스(객체)가 소유하고 있는,
   						  //	getName 이라는 프로퍼티에 바인딩된, 독립적인 함수객체
   ```

   ![43](https://user-images.githubusercontent.com/62126380/96088818-f1700880-0f00-11eb-8dc1-49c913a1165b.jpg) 

## 생성자 함수로 호출

- 함수정의를, 생성자로 호출된 함수의 내부에서의 this에는, 생성자함수가 미래에 생성할 인스턴스가 바인딩된다.

## Function.prototype.(apply / call / bind) 메서드로 호출

- apply / call / bind메서드들은 Function.prototype이 소유하고있는 메서드이기 때문에 모든 함수객체들이 상속받아서 사용할수있다.

- apply / call / bind 메서드들의 인수로는 "this 로 사용할 객체" 와 "인수 리스트" 를 같이 전달해야 한다.<br>(this 로 쓰일 객체를 사용할 일이 없어도 인수리스트와 같이 전달해야 한다. 안그러면 아무것도 안나온다. )  

- apply 와 call 은 함수를 호출하는 동작은 같지만, 전달하는 인수리스트의 형태가 다르다.

  ### Function.prototype.apply

  ---

  - 배열이 아니지만 배열과 비슷한 유사배열객체(예를 들면 arguments 객체) 에 배열메서드를 사용할수 있게끔 해주는 메서드이다.

  - 인수로 전달하는 것들은, this로 사용할 객체만 전달하거나, this로 사용할 객체와 함께 인수리스트의 형태가 **<u>배열의 형태</u>** 또는 유사 배열객체 형태의 리스트가 전달되어야 한다.

    ```javascript
    // this 로 사용할 객체만 인수로 전달
    
    function getThisBinding(){
        return this // ② <--------------------------------┐
    }/*                                                   │
                                                          │*/
    const thisArg = { name: '주현'}//                     │
    			  /* ￣￣￣￣￣￣￣￣----------------┐      │
    											   │	  │*/
    console.log(getThisBinding.apply(thisArg))//<--┘ ①    │ 
    /*								￣￣￣￣￣￣------------┘*/
    // { name: '주현' }
    ```

    ```javascript
    // this 로 사용할 객체와, 배열의 형태의 인수리트를, 인수로 전달
    
    function getThisBinding() {
        console.log(this); // { name: '주현' }
        console.log(this.name); // 주현
        console.log(typeof this); // object
        console.log(`${this.name}은 내이름이다`); // 주현은 내이름이다
    
        console.log(arguments); // [Arguments] { '0': 'hello' }
        console.log(Array.prototype.slice.apply(arguments)) // [ 'hello' ]
        /* └> 여기에서 slice가 가리키는 this는 array 타입의 값이어야 한다. 
        	  여기서 this로 전달한 인수는 arguments 인건데 arguments 는 배열이 아니라서 
        	  원래 slice 같은 배열메서드를 사용할수 없다. 
        	  하지만, appy 메서드 덕분에 배열메서드를 사용할수 있게 되었다. */
    }
    
    const thisArg = {
        name: '주현'
    }
    
    getThisBinding.apply(thisArg, ['hello']);// this에 바인딩하는 객체(thisArg) 전달, 배열형태인 인수리스트전달
    ```

  ### Function.prototype.call

  ---

  - 배열이 아니지만 배열과 비슷한 유사배열객체(예를 들면 arguments 객체) 에 배열메서드를 사용할수 있게끔 해주는 메서드이다.

  - 인수로 전달하는 것들은, this로 사용할 객체만 전달하거나, this로 사용할 객체와 함께 인수리스트의 형태가<br> **<u>쉼표로 나누어진 형태의 리스트</u>**가 전달되어야 한다.

    ```javascript
    // this 로 사용할 객체만 인수로 전달
    
    function getThisBinding(){
        return this // ② <--------------------------------┐
    }/*                                                   │
                                                          │*/
    const thisArg = { name: '주현'}//                     │
    			  /* ￣￣￣￣￣￣￣￣----------------┐      │
    											   │	  │*/
    console.log(getThisBinding.call(thisArg))//<--┘ ①     │ 
    /*								￣￣￣￣￣￣------------┘*/
    // { name: '주현' }
    ```

    ```javascript
    // this 로 사용할 객체와, 배열의 형태의 인수리트를, 인수로 전달
    
    function getThisBinding() {
        console.log(this); // { name: '주현' }
        console.log(this.name); // 주현
        console.log(typeof this); // object
        console.log(`${this.name}은 내이름이다`); // 주현은 내이름이다
    
        console.log(arguments); // [Arguments] { '0': 'hello' }
        console.log(Array.prototype.slice.call(arguments)) // [ 'hello' ]
        /* └> 여기에서 slice가 가리키는 this는 array 타입의 값이어야 한다. 
        	  여기서 this로 전달한 인수는 arguments 인건데 arguments 는 배열이 아니라서 
        	  원래 slice 같은 배열메서드를 사용할수 없다. 
        	  하지만, appy 메서드 덕분에 배열메서드를 사용할수 있게 되었다. */
    }
    
    const thisArg = {
        name: '주현'
    }
    
    getThisBinding.call(thisArg, 'hello');// this에 바인딩하는 객체(thisArg)전달, 쉼표로 나누어진 인수리스트전달
    ```

  ### Function.prototype.bind 

  ---

  - bind 메서드는 호출하지 않고, 그냥 this 로 사용할 객체만 전달하는 메서드이다.

  - setTimeout 함수 내부의 this 는 무조건 전역을 가리키고 있는데, bind 메서드를 쓰면, 객체 내부의 프로퍼티를 가져올수 있다.

    ```javascript
    // this 로 사용할 객체만 인수로 전달
    
    function getThisBinding(){
        return this // ② <--------------------------------┐
    }/*                                                   │
                                                          │*/
    const thisArg = { name: '주현'}//                     │
    			  /* ￣￣￣￣￣￣￣￣----------------┐      │
    											   │	  │*/
    console.log(getThisBinding.bind(thisArg))//<--┘ ①     │ 
    /*								￣￣￣￣￣￣------------┘*/
    // { name: '주현' }
    ```

  - 메서드 내부의 this 와, 메서드 내부에 중첩되있는 중첩함수 또는 메서드 내부에 있는 콜백함수의 this 에 바인딩된 값이 다른것을 일치시킬수 있는 방법이다. 

    ```javascript
    const person = {
        name: '주현',
        foo(callback){
            console.log(this);  //<- 1번 시점 : { name: '주현', foo: [Function: foo] }
            setTimeout(callback, 100)
            console.log(this); 
        }
    }
    person.foo(function(){
        console.log(`Hi! my name is ${this.name}`);//<- 2번 시점 : 콜백함수가 호출된 시점
    }); // <- foo ( ) 괄호 안이 콜백함수다.
    // Hi! my name is undefined : 메서드 안에서는 this가 person 객체 이고 콜백 함수 안에서는 window다.
    // 서로 this에 바인딩 된 값이 다르다.
    
    
    // └> 이걸 고쳐보자.
    
    
    
    const person = {
        name: '주현',
        foo(callback){
            console.log(this);  //<- 1번 시점 : { name: '주현', foo: [Function: foo] }
            setTimeout(callback.bind(this), 100)
            //						￣￣￣-- = { name: '주현', foo: [Function: foo] }
            console.log(this); 
        }
    }
    person.foo(function(){
        console.log(`Hi! my name is ${this.name}`);//<- 2번 시점 : 콜백함수가 호출된 시점
    });
    // Hi! my name is 주현
    ```

  

  

  

