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

## 5. background-attachment

- 요소가 스크롤될때 배경 이미지를 어떤식으로 표시할껀지, 그 배경 이미지의 스크롤 여부를 설정하는 역할

- ㄱ. srcoll

  - <p style="color:red">요소 전체가 스크롤이 됨</p>

  -  결과적으로 요소가 위아래로 화면이 스크롤될때 같이 스크롤이 될텐데, 그 배경에 깔려져있는 이미지가 요소와 같이 스크롤이 됨

- ㄴ. fixed 

  - <p style="color:red">배경 이미지가 뷰포트에 고정. 요소만 스크롤됨</p>
  
  - 요소는 스크롤이 되지만 깔려져있는 배경이미지는 스크롤이 안되고 고정되있음
  
- ㄷ. local 

  - 요소 내부에 스크롤이 있을 때 배경 이미지도 같이 스크롤이 됨

## 6. background-size

ㄱ. auto

ㄴ. 단위

ㄷ. cover 

- 배경 이미지크기 비율을 유지하는 상태에서 이미지의 요소의 **조금 더 넓은** 너비에 맞춰서 출력이 됨

  --> 그러다보니 이미지가 잘릴수도 있는 형태가 됨

- 배경이미지가 요소를 커버하게 됨

  ex 1)

  ```ex
  <div>
  width: 400px
  height: 300px
  </div>
  ```

  ``` ex
  .div {
  background-size: cover
  }
  ```

  ----> 조금 더 넓은 widrh 값에 배경이미지가 맞추어짐

  ex 2)

  ``` ex
  <div>
  width:500px
  height: 300px
  </div>
  ```

  ```ex
  .div {
  background-size:cover
  }
  ```

  ----> 조금 더 짧은 height 값에 배경이미지가 맞추어짐

ㄹ. contain

- 배경이미지의 비율을 유지하고 요소의 **조금 더 짧은** 너비에 맞춰서 출력됨

  --> 그러다보니 이미지 전체가 다 나오게 됨
- <p style="color:red">주의!!</p>

  요소의 빈공간이 보일수도 있다

