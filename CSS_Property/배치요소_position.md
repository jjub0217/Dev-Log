# 배치2 (position)

## 2. position

- 요소의 위치 지정 방법의 유형(기준)을 설정

- 특정한 위치에 요소를 배치하기 위해서는 기준이라는 것이 필요하니까, 그 배치할수 있는 기준이 있어야 한다. 

- 배치 할수 있는 **"기준"**을 설정하는 역할.  또는, position 을 통해서 요소의 위치를 선정하는 배치의 개념이다.

- 텍스트나 이미지 수평정렬 / 수직 정렬 가능

- display 값이 flex, inline-flex 에는 position 효과없음

- 배치될 위치 방향(position과 같이 쓰일수 있는 속성)

  ㄱ. top:  요소의 position 값이 지정되어서  기준이 정해지면, 그 정해진 기준의 ***위쪽에서부터*** 의 거리

  ㄴ. bottom: 요소의 position 값이 지정되어서  기준이 정해지면, 그 정해진 기준의 ***아래에서부터*** 의 거리

  ------>>>> % 사용시 : 부모요소의 세로너비(height)의 비율로 지정 (음수값 사용가능)

  ㄷ. left: 요소의 position 값이 지정되어서  기준이 정해지면, 잡혀있는 기준의 ***왼쪽에서부터*** 의 거리

  ㄹ. right: 요소의 position 값이 지정되어서  기준이 정해지면, 잡혀있는 기준의 ***오른쪽에서부터*** 의 거리

  ------>>>> % 사용시 : 부모요소의 가로너비(width)의 비율로 지정 (음수값 사용가능)

  ![캡처24](https://user-images.githubusercontent.com/62126380/78242964-e71a8e00-751d-11ea-97f0-77f5cbc11dc0.PNG) 

- 속성값

  ### ㄱ. static (기본값)

  - 기준이 없어서 배치를 할수 없는 상태이다. (요소의 기준이 없음) 

  
### ㄴ. relative 

- **요소 자신을 기준으로 배치**
  
- 자기 자신 스스로를 배치될 기준으로 삼음
  
- 요소에 relative를 주면 해당 요소는 배치될  준비를 끝낸 상태 
  
  -> 자기 기준으로 움직이기 시작할것임
  
  -> 위치를 잡아야 움직일수 있으므로 위치를 잡아줘야 함(top, bottom, left, right 등)
  
- 자기 자신을 기준으로 하다보니까 이동을 하려면 자기 자신이 원래 있었던 위치가 <u>**필수적으로**</u> 필요함.
  
- 원래 자기 위치를 기준으로 하다보니, top, bottom, left, right 를 사용하여 이동시킨 요소는 자기 자신이 이동한게 아니라, 자기 자신의 홀로그램이 이동한거라고 생각해야 한다. 즉, 이동을 시켜도 자기자신은 본래 자기 위치에 존재하고 있다는 것이다. 
  
  ![캡쳐127](https://user-images.githubusercontent.com/62126380/87243796-bed2f180-c473-11ea-8662-911c1af7a5db.jpg)    
  
- 주변에 있는 형제 요소에 영향을 주거나받게됨
  
- 예시1
  
  ```html
    <div class="box">1</div>
  <div class="box relative">2</div>
    <div class="box">3</div>
  ```
  
    ```css
    .box {
        width: 100px;
        height: 100px;
        background: tomato;
        border: 4px dashed red;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        }
    
    .relative {
        position: relative;/*<- 자기자신을 스스로를 기준으로 삼는다. 배치될 준비는 끝난 상태. 
                                배치되는 기준이 자기자신을 기준으로 움직이기 시작할거다.
        						relative 로 위치를 잡게되면 자기 자신을 기준으로 하다보니까 
        					 	형제요소에 영향을 주고받게 된다. 
        						relative 로 인해서 위치를 배치하는 행동은 주변에 영향을 주고 받기 때문에 
        						조심해서 사용해야 한다. */
        /* top: 20px; */
        /* left: 30px; */
    }
    ```
  
    ![캡처20](https://user-images.githubusercontent.com/62126380/78130334-1664c880-7454-11ea-995e-6ef334197ee8.PNG) 
  
  ----
  
  - 예시2
  
    ```html
    <div class="box">1</div>
    <div class="box relative">2</div>
    <div class="box">3</div>
    ```
  
    ```css
    .box {
        width: 100px;
        height: 100px;
        background: tomato;
        border: 4px dashed red;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        }
    
    .relative {
        position: relative;/*<- 자기자신을 스스로를 기준으로 삼는다. 배치될 준비는 끝난 상태. 
                                배치되는 기준이 자기자신을 기준으로 움직이기 시작할거다.
        						relative 로 위치를 잡게되면 자기 자신을 기준으로 하다보니까 
        					 	형제요소에 영향을 주고받게 된다. 
        						relative 로 인해서 위치를 배치하는 행동은 주변에 영향을 주고 받기 때문에 
        						조심해서 사용해야 한다. */
        /* top: 20px; */
        /* right: 30px; */
    }
    ```
  
    ![캡처21](https://user-images.githubusercontent.com/62126380/78130728-d2be8e80-7454-11ea-9414-aabf7087a2b4.PNG) 
  
  - 예시3
  
    ```html
    <div class="box">1</div>
    <div class="box relative">2</div>
    <div class="box">3</div>
    ```
  
    ```css
     .box {
        width: 100px;
        height: 100px;
        background: tomato;
        border: 4px dashed red;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
            }
    
    .relative {
        position: relative;/*<- 자기자신을 스스로를 기준으로 삼는다. 배치될 준비는 끝난 상태. 
                            배치되는 기준이 자기자신을 기준으로 움직이기 시작할거다.
                            relative 로 위치를 잡게되면 자기 자신을 기준으로 하다보니까 
                            형제요소에 영향을 주고받게 된다. 
                            relative 로 인해서 위치를 배치하는 행동은 주변에 영향을 주고 받기 때문에 
                            조심해서 사용해야 한다. */
        left: 160px;
        bottom: 40px;
    }
    ```

---

### ㄷ. absolute

- 특정한 범위. 즉, 어떤 위치상의 부모요소라는 특정한 범위를 기준으로 그 안에서 특정한 좌표를 찍어서 배치하는 것이다. 

- `부모요소`를 기준으로 배치한다. 

  > `부모요소` : HTML구조적인 부모가 아니라, `위치상의 부모`를 말한다.
  >
  > > `위치상의 부모` : 
  > >
  > >   \-  position 이 적용된 요소(static 제외)가, 그게 위치상의 부모로써의 가치를 갖게 된다. 
  > >
  > > ​    	-> relative 를 추가하는게 제일 좋다.
  > >
  > >   \- 조상요소로 전파되어서 위치상의 부모요소가 변경될수도 있다.
  > >
  > > ​    	-> absolute가 적용된 요소에서, 위의 부모 혹은 조상요소로 타고타고타고 올라가면서 position 을 준 게 있는지 보다가
  > >
  > > ​      		window 객체까지 올라갈수도 있다. 이럴 경우에는 뷰포트 전체가 position이 적용된 위치상의 부모요소로써 
  > >
  > > ​      		역할을 한다.

- 위치상의 부모요소에 position 값이 주어지면 위치방향은 absolute 가 부여된 요소에 적어야 함

  (		absolute 요소에 준 위치방향	=	positoin 값을 준 부모요소 위치에서부터의 위치방향	)

- 주변 요소(형제요소, 부모요소 등)와의 상관관계가 모두 무너지게 됨

- 요소에 absolute 를 주게 되면 부모요소를 기준으로 하기 때문에 부모요소를 기준으로 배치될 준비를 끝낸 상태 

  -> 동시에 공중으로 붕~~ 뜬 상태가 됨

  -> 다음 형제요소가 공중에 붕~~ 뜨게 된 요소가 원래 있던 위치에 밀려 들어가게 됨

  ```html
  <div class="grand-parent">
        <div class="parent">
          <div class="child">1</div>
            <div class="child absolute">2</div>
          <div class="child" style="width: 150px; height: 100px;">3</div>
        </div>
  </div>
  ```
  
  ```css
  .grand-parent {
        width: 400px;
        height: 300px;
        padding: 30px 100px 100px 30px;
        border: 4px dashed lightgray;
    
    }
    
    .parent {
        width: 400px;
        height: 300px;
        border: 4px dashed gray;
        position: relative;
    }
    
    .child {
        width: 120px;
        height: 80px;
        background: tomato;
        border: 4px dashed red;
        border-radius: 10px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .absolute {
        position: absolute; /*<- absolute는 부모요소를 기준으로 하기 때문에 부모요소를 기준으로 배치될 준비된 상태.
        						그렇기 때문에 형제요소들에게 영향을 주고받지 않게 된다.
        						그래서 absolute 하면 공중에 부웅- 뜬 상태이고, absolute적용한 요소의 다음 형제요소는
        						밀려서 그 밑으로 올라가게 된다. */  
        background: tomato;
        bottom: 50px;
        right: 10px;
    }  
  ```

  ![캡처22](https://user-images.githubusercontent.com/62126380/78134093-8aa26a80-745a-11ea-848f-3f81aca3e426.PNG) 


---

### ㄹ. fixed

- 뷰포트를 기준으로 우측하단 등 우측상단 등에 고정되어 배치된다.
- fixed 값을 준 요소에 위치방향(**top, bottom, left, right** 등)이 <u>**필수적으로**</u> 들어가야 함
- 아무리 스크롤을 내려도, 브라우저의 크기가 줄거나 늘어나도 브라우저의 우측 하단에 고정되어있다. (ex: 쇼핑몰 배너광고, 헤더 등 고정된 메뉴)
- 주변 요소(형제요소, 부모요소 등)와의 상관관계가 모두 무너지게 됨

---

### ㅁ. sticky

- IE 지원불가

- 스크롤 영역을 기준으로 배치

- 특정한 요소에 sticky를 적용하고, 스크롤 영역에 어느 지점에 배치가 될지를 설정

- sticky가 부여되어있는 특정한 요소의 부모요소 밖으로는 벗어날순 없다. -> 고정된 상태에서

  부모요소가 사라질때 같이 사라지면서 다음 형제요소가 나타난다

- sticky를 준 요소에는 **위치방향 값**이 **1개 이상** <u>**필수적으로**</u> 들어가야 함

- 주변 요소(형제요소, 부모요소 등)와의 상관관계가 모두 무너지게 됨

- 한 요소에 sticky를 주고, 스크롤영역의 어느 지점에 배치가 될지 설정해야 함

  ```css
  .box { 
      position:sticky;
  	top:0;
  }
  ```

  ---->> 스크롤 영역의 위에 붙어서 고정되있음

  ---->> 스크롤 영역안에서 맨 위의 요소의 컨텐츠들이 움직이지 않고 고정되서 스크롤이 내려가짐.


#### ㅂ. 요소 쌓임순서(stack order)

- 요소가 쌓여있는 순서를 통해서,  어떤 요소가 사용자가 보는 시선과 더 가깝게 있는지(더 위에 쌓이는지)를 결정

- 쌓이는 규칙 : 

  1. static을 제외한 position의 속성값이 있을 경우 : 해당 position 이 부여 된것이 제일 위에 쌓인다.

     ![캡쳐128](https://user-images.githubusercontent.com/62126380/87247807-061bab00-c491-11ea-82ce-fe029cf80105.jpg) 

     ```html
     <div class="box-group">
             <div class="box box1">1</div>
             <div class="box box2">2</div>
             <div class="box box3">3</div>
             <div class="box box4">4</div><!--<- position을 준 요소: 가장 위에 쌓임-->
             <div class="box box5">5</div>
     </div>
     ```

     ```css
     .box1 {
                 color: black;
     }
     
     .box2 {
         color: black;
     }
     
     .box3 {
         position: relative;
     }
     
     .box4 {
         position: relative;
     }
     
     .box5 {
         color: black;
     }
     ```

     2-1. position 이 동일하게 존재하는 경우 : z-index( position이 있어야만 사용이 가능 ) 라는 속성의 특정한 숫자 값이 가장 높은것이 제일 위에 쌓인다.

     -->>**(주의!!)** position 이 있어야만 사용이 가능

     ![캡쳐129](https://user-images.githubusercontent.com/62126380/87247990-fbade100-c491-11ea-8751-a2fb3a0da939.JPG) 

     ```html
     <div class="box-group">
       <div class="box box1">1</div>
       <div class="box box2">2</div>
       <div class="box box3">3</div> <!--<- position이 동일하게 존재함 + z-index 부여/3번 박스가 제일 최상단-->
       <div class="box box4">4</div> <!--<- position이 동일하게 존재함-->
     <!-- position이 동일하게 존재할 경우에는 position과 z-index이 같이 존재하는 요소가 제일 위에 쌓인다. -->
       <div class="box box5">5</div>
     </div>
     ```

     ```css
     .box1 {
         color: black;
     }
     
     .box2 {
         color: black;
     }
     
     .box3 {
         position: relative;
         z-index: 1;
     }
     
     .box4 {
         position: relative;
     }
     
     .box5 {
         color: black;
     }
     ```

     2-2. position 이 동일하게 존재하는 경우 : z-index( position이 있어야만 사용이 가능 ) 라는 속성의 특정한 숫자 값이 가장 높은것이 제일 위에 쌓인다.

     ![캡쳐130](https://user-images.githubusercontent.com/62126380/87248215-4419ce80-c493-11ea-8b32-7b7393c03bfa.JPG) 

     ```html
     <div class="box-group">
       <div class="box box1">1</div> <!--<- position이 동일하게 존재함 + z-index 부여/1번 박스가 제일 최상단-->
       <div class="box box2">2</div> <!--<- position이 동일하게 존재함 + z-index 부여 -->
       <div class="box box3">3</div> <!--<- position이 동일하게 존재함 + z-index 부여-->
       <div class="box box4">4</div> 
     <!-- position이 동일하게 존재 + z-index도 동일하게 존재: z-index 숫자값이 제일 큰 요소가 제일 위에 쌓인다. -->
       <div class="box box5">5</div>
     </div>
     ```

     ```css
     .box1 {
         color: black;
         position: relative;
         z-index: 3;
     }
     
     .box2 {
         color: black;
         position: relative;
         z-index: 2;
     }
     
     .box3 {
         position: relative;
         z-index: 1;
     }
     
     .box4 {
         position: relative;
     }
     
     .box5 {
         color: black;
     }
     ```

3. position 이 동일하게 존재하며, z-index 값도 모두 동일할 경우 : HTML에서 가장 나중에 작성한 코드가 제일 위에 쌓인다.



