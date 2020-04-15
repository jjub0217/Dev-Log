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
  2. 폰트컬러
  3. text-align (글자정렬)
  4. text-indent (글자 들여쓰기)
  5. text-decoration (글자 밑줄)
  6. letter-spacing ()
  7. opacity ()
- 상속안되는 요소
  1. position / display 등 배치 요소
  2. rem 단위

#### 강제상속

***

- 강제적으로 필요에 의해서 부모, 조상이 가지고 있는 상속 되지 않는 특정한 속성을 자식요소에게 강제적으로 상속할수 있음
- "inherit" : 강제 상속시키는 속성 값

# 우선순위

### 개념

***

같은 요소가 여러 선언의 대상이 될 경우 우선 결정하는 방법

​				ex)

```<예시>
<body>
    <div id="color_yellow" class="color_green" style="color:orange">hello world!</div>
    </body>
```

```<예시>
div {
    color: red;
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
body { color: violet;
}
```

---->  div 태그에 들어가있는 'hello world!' 라는 컨텐트에는 

어떤 우선순위가 적용되어서 어떤 컬러가 적용이 될지 결정

## 1. !important

모든 선언을 무시하고 가장 우선순위로 결정

## 2. 명시도

여러가지 선언하는 부분에 특정한 점수가 부여될때 가장 높은 점수의 속성값이 우선순위로 결정

## 3. 선언순서

점수가 동일할 경우에 가장 나중에 코딩한 속성값이 우선순위로 결정

## 4. 중요도

상속 규칙보다 명시도가 우선순위로 결정

#### * 점수 부여 방식

***

1. !important 부여방식 -> **무한대의 점수**
2. inline 선언방식(style 속성) -> **1000점**
3. id 선택자 -> **100점**
4. class 선택자 -> **10점**
5. tag 선택자 -> **1점**
6. 전체 선택자 -> **0점**
7. 상속 -> **아예 점수를 계산하지 않음





