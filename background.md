# background

- background : 컬러, 경로, 반복, 위치, 스크롤특성

(띄어쓰기로 구분하기)

- 목록 누락 가능

ex)

```
backround: red url("--") no-repeat right 100px
```

## 1. background-color

## 2. background-image

- 요소의 배경에 이미지 삽입하는 역할
- ,  로 여러 이미지 장수 삽입 가능

## 3. background-repeat

1. repeat ㄴ
2. repeat-x : x축(가로축)으로만 반복
3. repeat-y : y축(세로축)으로만 반복
4. no-repeat

## 4. background-position

- 배경 이미지의 위치 기준점을 잡아줌
- 배경 이미지가 해당하는 요소의 어느 부분에 위치하게 될것인지에 대한 실질적인 위치 정보를 전달

1. 왼쪽상단 모서리 : 0%, 0% 
2. 오른쪽 하단 모서리 : 100%, 100% 

3. <p style="color:red";>방향</p>

``` ex)
ex) background-position : 방향1 방향2;
--->background-position : right bottom
```

4. <p style="color:red";>단위</p>

```ex) 
ex) background-position : x축 y축;
---> background-position : 100px 50px
```

----> 왼쪽에서 100px, 위에서 50px 

----> 방향과 단위를 같이 속성값으로 쓸수는 있는데

"(right/left) 단위" 혹은 "단위 (top/bottom)" 으로    써야만 사용 가능