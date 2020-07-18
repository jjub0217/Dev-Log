# 배치1 (float)

## 1. float

- 요소를 좌우방향(수평 정렬)으로 **"띄워서"** 정렬

- 텍스트가 어떤 한 요소의 주변에서 흐르게 하기 위해서 해당 그 요소에 float을 지정하면 된다.

- float는 부모요소한테 먹이면 적용안됨. 개별 아이템(자식요소)한테 줘야함

- 텍스트는 float 안줘도 뒤로 안 숨음

- **float 속성을 적용하면, 대부분의 inline 요소들은 display 성격이 block 으로 변경된다.** 

  - width, height, margin , padding 속성 적용가능

    **--> 하지만, 요소가 flex , inline-flex 인것에는 display 의 성격 변경 효과가 없다.** 

- ㄱ. none

  ㄴ. left : 맨 좌측부터 쌓임 ( [1] [2] [3]	  			 )

  ㄷ. right : 맨 우측부터 쌓임 ( 				[3] [2] [1] )

- 첫번째 자식요소 child1 에만 float 적용
  
``` html
  <div class="child1"></div>
  <div class="child2"></div>
```

```css
.child1{
float: left;
  width: 100px;
  height: 100px;
  background: red;
}
.child2{
  width: 200px;
  height: 200px;
  background: blue;
}
```

  ![캡처15](https://user-images.githubusercontent.com/62126380/78239729-0c58cd80-7519-11ea-98b1-5f81e8a2d27b.PNG)

  ===>> child1 에 라인박스가 생김.  -> 붕 뜬 child1 뒤에 child2 가 밀려 올라감.

- 첫번째, 두번째 모든 자식요소에 float 적용

  ``` html
  <div class="child1"></div>
  <div class="child2"></div>
  ```

  ```css
  .child1{
      float: left;
      width: 100px;
      height: 100px;
      background: red;
  }
  .child2{
      float: left;
      width: 100px;
      height: 100px;
      background: blue;
  }
  ```

  ![캡처16](https://user-images.githubusercontent.com/62126380/78240176-9acd4f00-7519-11ea-8f88-bf5e3d3b1a8d.PNG)

  ===>>부모요소 크기만큼에서 child1 사이즈를 뺀 나머지에 child2 의 라인박스가 생김.

  ---> 부모요소 크기에서 chiild1 과 child2 가 채워지고 남은 부모요소의 공간이 작으면 그 다음 형제요소는 수직정렬이 됨.

  ---> 자식요소에 float 을 주면, 부모요소는 품고있는   자식이 붕~~ 떠버리니까 인식을 못해서 높이를 잃어버린다. 


## float 해제 <br>(흐르는 부분을 완벽하게 멈추고 새롭게 시작하려고 할때 사용)

ㄱ. clear

- clear 의 속성값으로 none , left, right 값을 지정

- float 지정한 요소의 **다음 형제**에게 지정 -> float를 지정한 요소한테 준 padding 값과 다음형제 요소한테 준  margin값이 같으면, 해당 margin 값만큼 벌어지지 않는다. 효과가없다. : 마진겹침으로 인해 효과가 없게 된다.   

  -> 다음 형제요소한테, float 준 요소에게 부여해준 padding 값보다 큰 값을 margin에 줘야 한다.

- 예제

  1.  left 로 흐르는 float를 해제 시켜라

  ```css
  .box{
      float : left;
  }
  .text{
      clear: left;	/*<- clear 라는 CSS 적용*/
  }
  ```

  ![캡처12](https://user-images.githubusercontent.com/62126380/77879363-38fcb300-7295-11ea-9fd9-abaf9993d0c6.PNG)

  2. right으로 흐르는 float를 해제 시켜라

     ```css
     .box{
         float : right;
     }
     .text{
         clear: right;	/*<- clear 라는 CSS 적용*/
     }
     ```

     ![캡처13](https://user-images.githubusercontent.com/62126380/77879571-ad375680-7295-11ea-9223-42e0507c9e9a.PNG)

  3. clear: both 

     - 요소 하나하나마다 clear를 쓰는건 번거로우니까 위에 float 적용한게 left 이던, right 이던 상관없이 다음 형제 요소 float 해제 시켜라 

     ``` html
     <div class="float-left"></div>
     <div class="float-left"></div>
     <div cl]ass="next"></div>
     ```

     ```css
     .float-left {
     with: 100px;
     height: 100px;
     background: red;
     float: left;
     }
     
     .next {
     width: 200px;
     height: 200px;
     background: yellow;
     clear: both;   /*<- clear: both 라는 CSS 적용 */
     }
     ```



ㄴ. overflow

- 부모 요소에 ***"overflow: (hedden 또는 auto)"*** 추가

- 이건 float 와 아무 상관없는 속성이라서 이걸 사용하는 건 편법으로 사용하는것이므로 추천하지 않는다.

- 부모 요소의 크기를 결정하고, 해당 부모 요소에 overflow : hidden 을 주면 -> 본디, 자식요소가 부모요소보다 커서 넘치게 될때 그 넘친 자식요소의 부분을 감추는 속성인데,

  => 만약 애초에 부모요소의 가로너비를 fix, 세로너비는 auto 로 고정해주지 않는다면 자식요소의 높이만큼 같이 늘어나게 된다. (자식요소의 높이를 찾아와야 한다)

  => 그런데 부모요소에 overflow : hidden 을 주면 float 해서 높이를 잃어버린 자식요소가 높이를 찾게 되고, overflow : hidden 준 부모요소도 높이를 찾게 되어 해당 이슈를 해결하게 된다.  

  ==>>>> 하지만, 이 방법은 단지 높이를 찾기위해서 쓰는 방법이므로 추천하지 않는다.

- 예제

  1. overflow 속성 미적용

  ```html
  <div class="parent">
      <div class="child">1</div>
      <div class="child">2</div>
  </div>
  <div class="child">3</div>
  ```

  ```css
  .parent {
        
      }
  
  .child {
      float: left;
      width: 100px;
      height: 100px;
      background: red;
      margin-right: 20px;
      margin-top: 10px;
  }
  ```

  ![캡쳐124](https://user-images.githubusercontent.com/62126380/87241752-23d11c00-c461-11ea-9f4a-d5403bd383af.png) 

  2. overflow 속성 적용

  ```html
  <div class="parent">
      <div class="child">1</div>
      <div class="child">2</div>
  </div>
  <div class="child">3</div>
  ```

  ```css
  .parent {
          overflow: hidden; 
      }
  .child {
      float: left;
      width: 100px;
      height: 100px;
      background: red;
      margin-right: 20px;
      margin-top: 10px;
  }
  ```

  ![캡쳐125](https://user-images.githubusercontent.com/62126380/87241778-5aa73200-c461-11ea-9d23-7084f1514f92.PNG) 

  

ㄷ. 부모요소, 자식 요소 둘다 float  지정

- 단지 높이를 읽어들이기 위해서 하는 방법이기때문에 추천하지 않는다.

<u>**ㄹ. clearfix("float 해제 방법 추천!!!")**</u>

- **부모 요소에 *"clearfix"* 라는 class 를 추가**

​			└> **clearfix 가 있는 특정한 요소의 자식요소에는  무조건 float이 있는  자식요소들만 있어야 함**

​			└> **부모요소에 clrearfix 를 주면 부모가 잃어버렸던 높이를 찾게 된다.**

- 예시1

  ```html
  <div class="parent clearfix">
          <div class="child">1</div>
          <div class="child">2</div>
  </div>
  <div class="child">3</div>
  ```

  ```css
  .clearfix::after {
      content: "";
      clear: both;
      display: block;
  }
  
  .child {
      float: left;
      width: 100px;
      height: 100px;
      background: tomato;
      margin-right: 20px;
      margin-top: 10px;
      color: white;
      font-size: 40px;
  }
  ```


  ![캡처14](https://user-images.githubusercontent.com/62126380/87242422-7f9ea380-c467-11ea-9159-2c2e26b0996a.PNG) 

- 예시2

  ```html
  <div class="clearfix">
          <div class="float-box">1</div>
          <div class="float-box">2</div>
          <div class="float-box">3</div>
          <div class="float-box">4</div>
  </div>
      <div class="new-box"></div>
  ```

  ```css
  .clearfix::after {
          content: "";
          clear: both;
          display: block;
      }
  
  .float-box {
      width: 100px;
      height: 100px;
      background: tomato;
      margin: 10px;
      float: left;
  }
  
  .new-box {
      width: 250px;
      height: 250px;
      background: skyblue;
  }
  ```

  ![캡쳐126](https://user-images.githubusercontent.com/62126380/87242481-fb98eb80-c467-11ea-9b63-3c4442061911.PNG)

 