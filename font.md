# (글꼴,문자)

# font 

- font-size 와 font-family 는 필수로 사용해야 한다.

- ex) 

  ```
  font: italic bold 20px / 1.5 "Arial", sans-serif
  ```

  ----> font: 기울기 두께 크기 / 줄높이 글꼴

  ___

  

## 1. font-style (글자 기울기)

ㄱ. namial

ㄴ. italic

## 2. font-weight (글자 두께)

- 부모요소보다 굵거나 얇은 폰트로 쓸 때 사용
- 부모요소에서 상속받은 값에서 계산됨

ㄱ. bolder

ㄴ. lighter

## 3. font-size (글자 크기)

## 4. line-height (줄높이) 설정

- 줄높이를 설정하는 역할

- 크기와 줄높이는 꼭 "/" 으로,  크기 줄높이 순서로 구분해서 사용하기

- 보통 1.4 ~ 1.7 배가 가독성이 좋음

- 사용범위

  - 그냥 숫자 : 요소 자체의 글꼴 크기의 배수 

  - 단위

  - %

    ex) 

    ```
    기본 font-size: 16px
    ---------------------
    line-height: 2
    ```

    ----> line-height 값이 font-size 16px 의 2배인 32px이 됨.

    ![캡처7](https://user-images.githubusercontent.com/62126380/77647570-fa6fab80-6fa9-11ea-8697-860bc51cf7bb.PNG)

## 5. font-family

- 글꼴(서체)를 결정하는 역할

- 꼭 **"글꼴후보 목록"**을 주고, **"글꼴계열"**을 필수로 지정해야 함

- 종류

  - serif : 바탕체 계열(꼭따리 있는거)
  - sans-serif : 고딕체 계열
  - monospace : 가로폭이 동등한 계열
  - cursive : 필기쳬 계열
  - fantasy : 그림같은 문자

- ex)

  ``` 
  font-family(Arial "open-sans", "돋움", sans-serif)
  ```

# text

## 1. text-align

: 문자의 정렬 방식을 지정

- ㄱ. left      ![캡처17](https://user-images.githubusercontent.com/62126380/77907676-f783fc00-72c4-11ea-9e99-1dc75e61646f.PNG)

  ㄴ. right    ![캡처18](https://user-images.githubusercontent.com/62126380/77907690-023e9100-72c5-11ea-93a5-ef8552c9727c.PNG)

  ㄷ. center ![캡처19](https://user-images.githubusercontent.com/62126380/77907705-0b2f6280-72c5-11ea-83aa-d8d7667e74c8.PNG)

  ㄹ. jutiify 

  - 양쪽맞춤
  - 2줄 이상일때만 가능
  - 엔터쳐서 생기는 2줄 말고 줄이 길어져서 2줄 되었을 경우

## 2. text-indent

- 들여쓰기

- **"주의!!"** 

  a11y-hidden 처럼 숨기는 용도는 같지만 목적이 다르니 주의!!!

- 음수 값 사용 가능함 

  --> 음수값 사용시 내어쓰기 됨

  --> text-indent: -9999px (화면 밖으로(화면 영역 밖으로) 빼내서 안보이게 할수 있다.

ex)

```
<div clss="heropy">HEROPY</div>

.heropy {
background: url("-----"); 
text-indent: -9999px;
}
```

 ----> 이미지의 제목을 코딩했지만 화면에 안보이게 하고싶어!!
![캡처8](https://user-images.githubusercontent.com/62126380/77722280-a4921680-7030-11ea-9402-ea216d961ef0.PNG)

![캡처10](https://user-images.githubusercontent.com/62126380/77722307-bd9ac780-7030-11ea-92df-0785bb46e526.PNG)

![캡처9](https://user-images.githubusercontent.com/62126380/77722326-cc817a00-7030-11ea-8414-e9021103d70c.PNG)

## 4. text-decoration

: 문자 장식을 설정

- ㄱ. underline : 밑줄

  ㄴ. overline : 윗줄

  ㄷ. line-thtough : 중앙선

  ㄹ. none :  밑줄 없애기

## 5. letter-spacing

- 문자 사이의 간격을 설정
- 음수값 사용 가능

## 6. word-spacing

: 띄어쓰기 너비를 설정

# color

## 1. hsla

색상, 채도, 명도 투명도 제어

ex)

```
hsla (120, 100%, 50% .3)
hsla (색상, 채도, 명도, 투명도)
```

## 2. rgb

빛의 삼원색 (red, green, blue) 를 사용

ex)

``` r
rgb (225, 255, 255)
```

## 3. rgba

- 빛의 삼원색, 투명도 를 사용
- 백분율로 계산

ex)

```
rgba(255,0,0,.5)
```