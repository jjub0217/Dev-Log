# 상속

### 개념  

***

- 데코레이션 요소가 상속됨(대부분 글자를 다루는 속성들)
  1. 폰트
     * font-size (글자크기)
     * font-weight (글자두께)
     * font-style (글자 기울기)
     * line-height (줄 높이)
     * fone-family (폰트)
  2. 컬러(폰트)
  3. text-align (글자정렬)
  4. text-indent (글자 들여쓰기)
  5. text-decoration (글자 밑줄)
  6. letter-spacing (띄어쓰기)
  7. opacity (투명도)
- 상속안되는 요소
  1. position / display 등 배치 요소
  2. rem 단위
- 내가 직접 요소에 부여한 것이 우선순위다. 
  - 내가 직접 요소에 부여 > 부모 요소로부터 상속

### 강제상속

***

- 강제적으로 필요에 의해서 부모, 조상이 가지고 있는 상속 되지 않는 특정한 속성을 자식요소에게 강제적으로 상속할수 있음
- "inherit" : 강제 상속시키는 속성 값

# 우선순위

### 개념

***

같은 요소가 여러 선언의 대상이 될 경우 우선 결정하는 방법

ex)

```html
<body>
    <div id="color_yellow" class="color_green" style="color:orange">hello world!</div>
    </body>
```

```css
div {
    color: red; !important
}

#color_yellow {
    color: yellow;
}

.color_green {
    color: green;
}

div {
    color: blue:
}

* {
    color: darkblue;
}

body { 
    color: violet;
}
```

---->  브라우저는 div 태그에 들어가있는 'hello world!' 라는 컨텐트에는 **어떤 우선순위가 적용**되어서<br> 어떤 컬러가 적용이 될지 결정해서 출력한다 

## 우선 순위 결정 

### 1. !important

모든 선언을 무시하고 가장 우선순위로 결정

### 2.명시도

여러가지 선언하는 부분에 특정한 점수가 부여될때 가장 높은 점수의 속성값이 우선순위로 결정

### 3.선언순서

점수가 동일할 경우에 가장 나중에 코딩한 속성값이 우선순위로 결정

### 4. 중요도

상속 규칙보다 명시도가 우선순위로 결정

#### * 점수 부여 방식

***

1. !important 부여방식 -> **무한대의 점수**
2. <u>inline 선언방식(style 속성)</u> -> **1000점**
3. id 선택자 -> **100점**
4. class 선택자 -> **10점**
5. tag 선택자 -> **1점**
6. 전체 선택자 -> **0점**
7. 상속 -> **아예 점수를 계산하지 않음

```css
div {
    color: red; !important		/*<- !important 무한대의 점수*/
}

#color_yellow {
    color: yellow;		/*<- id선택자 100점*/
}

.color_green {
    color: green;		/*<- class선택자 10점*/
}

div {
    color: blue:		/*<- tag선택자 1점*/
}

* {
    color: darkblue;		/*<- 전체 선택자 0점*/
}

body {
    color: violet;		/*<- 상속 아예 점수를 계산하지 않는다*/
}
```





