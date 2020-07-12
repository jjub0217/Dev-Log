# (글꼴,문자)

# font 

- font:  기울기, 두께, 크기 / 줄높이, 글꼴

- font-size 와 font-family 는 필수로 사용해야 한다.

  ```css
  font: italic bold 20px / 1.5 "Arial", sans-serif
  ```

  ----> 크기 와 줄높이는 크기 / 줄높이 이런 식으로,  / 로 구분하여 크기 다음 줄높이 순서를 지켜야 한다. 

## 1. font-style (글자 기울기)

ㄱ. nomal

ㄴ. italic

## 2. font-weight (글자 두께)

ㄱ. bold

ㄴ. bolder : 부모요소보다 두껍게 설정

ㄷ. lighter : 부모요소보다 얇게 설정

ㄹ. 숫자 : 9단계로 설정(100 ~ 900 사이 숫자로, 100 단위로 설정)

## 3. font-size (글자 크기)

## 4. line-height (줄높이, 행간)

- 줄높이를 설정하는 역할

- 사용범위

  - 숫자 (폰트 사이즈의 배수로 움직인다.) 

    - 추천 배수: 1.4 ~ 1.7 (가독성이 좋음)

      ```css
    .box1 {
          font-size: 16px;
        line-height: 32px;
      }
      
      .box2 {
          font-size: 16px;
          line-height: 2;
    }
      /* box1 과 box2 는 같다. */
      ```
    ```
    
    ```
  
  - 단위
  
  - %
  
    ![캡쳐123](https://user-images.githubusercontent.com/62126380/87221286-cb891400-c3a5-11ea-9c37-4a43aeade614.jpg)
  
    

## 5. font-family

- 글꼴(서체)를 결정하는 역할

- 꼭 **"글꼴후보 목록"**을 주고, **"글꼴계열"**을 필수로 지정해야 함

- 글꼴계열

  - serif : 바탕체 계열(꼭따리 있는거)
  - sans-serif : 고딕체 계열
  - monospace : 가로폭이 동등한 계열
  - cursive : 필기쳬 계열
  - fantasy : 그림같은 문자

  ``` CSS
  font-family(Arial, "open-sans", "돋움", sans-serif)
  /* 글꼴 후보 목록 : Arial "open-sans", "돋움", 
     글꼴계열 : sans-serif
  */
  ```


# text

## 1. text-align

: 문자의 정렬 방식을 지정

- ㄱ. left      ![캡처17](https://user-images.githubusercontent.com/62126380/77907676-f783fc00-72c4-11ea-9e99-1dc75e61646f.PNG)

  ㄴ. right    ![캡처18](https://user-images.githubusercontent.com/62126380/77907690-023e9100-72c5-11ea-93a5-ef8552c9727c.PNG)

  ㄷ. center ![캡처19](https://user-images.githubusercontent.com/62126380/77907705-0b2f6280-72c5-11ea-83aa-d8d7667e74c8.PNG)

  ㄹ. jutiify 

  - 양쪽맞춤
  - 2줄 이상일때만 가능(칸이 모자라서 다음줄로 떨어지는 경우)

## 2. text-indent

- 들여쓰기

- **"주의!!"** 

  a11y-hidden 처럼 숨기는 용도는 같지만 목적이 다르니 주의!!!

- 음수 값 사용 가능함 

  --> 음수값 사용시 내어쓰기 됨

  --> text-indent: -9999px (화면 밖으로(화면 영역 밖으로) 빼내서 안보이게 할수 있다.

ex)

```html
<div clss="heropy">HEROPY</div>
```

```css
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

- 글자와 글자 사이의 간격 너비를 설정
- 음수값 사용 가능

## 6. word-spacing

- 단어와 단어 사이의 간격 너비를 설정

# color

## 1. hsla

색상, 채도, 명도 투명도 제어

ex)

```css
hsla (120, 100%, 50% .3)
hsla (색상, 채도, 명도, 투명도)
```

## 2. rgb

빛의 삼원색 (red, green, blue) 를 사용

ex)

``` css
rgb (225, 255, 255)
```

## 3. rgba

- 빛의 삼원색, 투명도 를 사용
- 백분율로 계산

ex)

```css
rgba(255,0,0,.5)
```