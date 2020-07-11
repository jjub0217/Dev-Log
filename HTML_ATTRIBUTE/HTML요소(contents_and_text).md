# HTML 요소 (콘텐츠, 문자)

## 1. header

- head를 만을 때 쓰는 태그
- header 안에 자식요소로 또 header가 온다거나 footer가 올수 없다.

## 2. ul  / li

- ul : unordered list
- li : list item
- menu라는 걸 리스트 화 하는 태그

## 3. footer

## 4. h1 ~ h6

- block요소

- 문서의 목차를 만드는 것처럼 사용가능

- 6단계의 구획 제목을 나타냄

- 전역속성만 포함 

- h1 ~ h6 까지 폰트 사이즈가 다른데, 폰트크기를 줄이기 위해 낮은 단계 번호의 h 태그를 쓰면 **절대** 안된다.

- 번호는 순차적으로 기입해야 함. (누락도 불가능)

- h1 은 페이지에 한번만 써야함

ex)

``` tex
1. (h1) James과의 연애
	1.(h2) 데이트 장소
	2.(h2) 연애기간
	3.(h2) 데이트 패션
        1. (h3) 봄
        2. (h3) 여름
        	1. (h4) 반팔
        	2. (h4) 반바비
        3. (h3) 가을
        4. (h3) 겨울
    4. (h2) 감동받은 말
```

## 5. main

- block요소

- 문서 내부에 핵심적인 컨텐츠를 지칭할때 사용

- 문서나 앱 "body" 의 주요 컨텐츠 내용

- 문서의 핵심 주제, 앱의 핵심 가능성에 대해 연관된 컨텐츠 내용

- 문서에 한번만 지정

## 6. article

- block요소

- 독립적으로 구분되거나 재사용 가능한 영역에 지정

-  ***<u>h1 ~ h6 을 반드시 포함 해야 함</u>***

- ***<u>css 작성시, article의 부모요소는 딱히 쓸필요 X</u>***

- time 의 datetime 속성 사용 가능

- article 안에 자식요소로 또 article 을 쓸수는 있는데 그 안에 artycle이 아예 밖으로 나와도 독립적인 가치가 유지되면 가능함

## 7. section

- block요소

- ***<u>h1 ~ h6 을 반드시 포함 해야 함</u>***

- 문서의 일반적인 영역

- |        div        |             section              |         article          |
  | :---------------: | :------------------------------: | :----------------------: |
  | 별 의미 없는 태그 | 제목을 포함해서 의미를 가지게 됨 | 독립성이 유지되는 컨텐츠 |

## 8. aside

- block요소

- 광고나 기타 맄으 등의 사이드바 설정
- 전체적인 컨텐츠와는 구분되어지는 영역

## 9. nav

- block요소

- 다른 페이지 링크를 제공하는 영역

## 10. address

- block요소

- 연락처의 정보 제공 하는 영역

- address  태그 안에 a 태그 안에 삽입 가능한 컨텐츠

  ``` html
  <address>
  <a href="mailto: noonssub1004@gmail.com">noonssub1004@gmail.com</a>
  <a href="tel:+821092742066">010-92742066</a>
  </address>
  ```

## 11. DD / DD / DT

- block요소

- ㄱ. DT(Definition Term) : 용어를 정의

  ㄴ. DD(Definition Details) : 용어를 정의한것을 설명

  ㄷ. DL(Definition List) :  

  - 용어와 설명의 전체 집합(전체 목록)
  - 자식요소로 DT, DD 만 포함해야 함

- DL , DD, DT 는 스타일링하기 힘들어서 ul, ii, p로 대체 가능함

![캡처11](https://user-images.githubusercontent.com/62126380/77844098-78b49380-71de-11ea-9332-bd2cdf4dfd6f.PNG)

- **DT ( key ) 는 DD ( value ) 다.** 로 표시할 때 유용함.

## 12. blockquote

- block요소

- 일반적인 인용문을 설정

- cite 속성 사용 가능 ( cite의 속성값으로 url . 인용문)

