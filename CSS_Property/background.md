# background

- background : 컬러, 경로, 반복, 위치, 스크롤특성(띄어쓰기로 구분하기)

- 목록 누락 가능 

```css
/*background: 색상 이미지경로 반복 위치 스크롤특성;*/
backround: red url("--") no-repeat right 100px
```

### 1. background-color

### 2. background-image

- background-image: url("-----------------");
- 요소의 배경에 한개 이상의 이미지를 삽입
- ,  로 여러 이미지 장수 삽입 가능
- 가로 너비(width) 와 세로 너비(height) 를 반드시 삽입해야 한다.

### 3. background-repeat

1. repeat 
2. repeat-x : x축(가로로만)으로만 반복
3. repeat-y : y축(수직으로만)으로만 반복
4. no-repeat

### 4. background-position

- 배경 이미지의 위치 기준점을 잡아줌

- 배경 이미지가 해당하는 요소의 어느 부분에 위치하게 될것인지에 대한 실질적인 위치 정보를 전달

- 속성 값

  1. 단위(px, %)  : % <- 요소 박스 뿐 아니라 이미지도 % 를 계산한다.

     - 왼쪽상단 모서리 : 0%(x축: 왼쪽에서부터의 거리), 0%(y축: 위에서부터의 거리) 

     - 오른쪽 하단 모서리 : 100%(x축), 100%(y축) 

     ```css
     /*background-position : x축 y축;
      --> 왼쪽에서 100px, 위에서 50px;
      --> 방향과 단위를 같이 속성값으로 쓸수는 있는데 "(좌/우), 단위" 혹은 "단위, (상/하)" 으로 써야만 사용 가능*/
     background-position : 100px 50px; 
     background-position : right 50px;
     background-position : top 10px;
     ```

  2. **방향** : 순서를 뒤바꿔서 사용해도 상관없다.

     ```css
     /* ---> background-position : 방향1 방향2;*/
     background-position : right bottom
     ```

### 5. background-attachment

- 요소가 스크롤될때 배경 이미지를 어떤식으로 표시할껀지, 그 배경 이미지의 스크롤 여부를 설정하는 역할

- ㄱ. srcoll

  - **요소 전체가 스크롤이 됨**

  -  요소가 스크롤될때, 배경 이미지도 요소와 같이 스크롤된다.

- ㄴ. fixed 

  - **배경 이미지가 뷰포트에 고정. 요소만 스크롤됨**
  
  - 요소는 스크롤되나, 배경 이미지는 스크롤되지 않고 고정된다. 
  
- ㄷ. local 

  - 요소 내부에 스크롤이 있을 때 배경 이미지도 같이 스크롤이 됨

### 6. background-size

ㄱ. auto

ㄴ. 단위

ㄷ. cover 

- 배경 이미지 크기 비율을 유지하는 상태에서, 배경이미지가 요소의 **조금 더 넓은 너비에 맞춰짐**
- 이미지가 잘릴 수 있음 
- 배경이미지가 요소를 커버하게 됨

ㄹ. contain

- 배경 이미지의 크기 비율을 유지하고, 요소의 **더 짧은 너비에 맞춰짐** -> 이미지가 잘리지 않음

  -> **요소의 빈공간이 보일수도 있다**

예시

- 예시1

```html
<div class="box"></div>
```

``` css
.box {
    width: 400px;
    height: 300px;
    background-image: url(https://heropy.blog/css/images/logo.png); /*500 x 500*/
    /*background-size: 200px; /*<- 삽입할 이미지의 크기를 정확히 아는게 아니라면, 
    								비율대로 출력되게 하도록 가로만 입력해라*/
}
```

- 예시2

```html
<div class="box"></div>
```

```css
.box {
    width: 400px;
    height: 300px;
    background-image: url(https://heropy.blog/css/images/logo.png); /*500 x 500*/
    background-size: cover;/*<- 배경이미지가 요소를 커버하게 된다. 
    							배경이미지의 사이즈가 요소의 가로너비에 맞춰져서 출력된다.
                                현재 요소의 가로너비가 세로너비보다 더 넓다. 
                                그러므로 요소의 더 넓은 가로너비에 맞춰져서 배경이미지 삽입된다.*/
}
/*----> 조금 더 넓은 widrh 값에 배경이미지가 맞추어짐*/
```

- 예시3

```html
<div class="box"></div>
```

```css
.box {
        width: 400px;
        height: 300px;
        background-image: url(https://heropy.blog/css/images/logo.png); /*500 x 500*/
        background-size: contain;/* 배경이미지가 요소 내에서 완벽하게 다 보이긴 하지만, 
                                    짧은 너비에 맞춰지기 때문에 빈공간이 보일수도 있다. */
    }
/*----> 조금 더 짧은 height 값에 배경이미지가 맞추어짐*/
```

