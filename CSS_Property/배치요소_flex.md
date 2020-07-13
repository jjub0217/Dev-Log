# 배치3 (flex)

## 3. flex

- 수평이나 수직으로 정렬을 해주는 속성

- 개념

  1. container

     - item들을 감싸는 부모요소가 됨

     - item들을 정렬하기 위한 필수템

     - 속성값 **(총 4개(ⓐⓑⓒⓓ) : display / flex-flow / justify-content / alin-items )**

       ⓐ display ( flex / inline-flex )

       - 요소의 특성을 정의

       - 요소를  inline으로 할지 block으로 할지 구분할때 쓰임

         ①  flex : 요소를 컨테이너화 되게 한다.

          ex) 

         ``` css
         .container1 {display:flex;}
         .container2 {display:flex;}
         ```

         -> **"수직정렬"**![캡처28](https://user-images.githubusercontent.com/62126380/79680871-94e0a900-824f-11ea-9bd5-4317cd9359b0.PNG)

         

         ② inline-flex 

         ex)

         ``` css
         .container1 {display:inline-flex}
         .container2 {display:inline-flex}
         ```

         -> **"수평정렬"**![캡처29](https://user-images.githubusercontent.com/62126380/79680901-cce7ec00-824f-11ea-84de-98dab447c336.PNG)

       

       ⓑ flex-flow (단축속성)

       ``` css
       flex-flow: (flex-direction:row) (flex-wrap:no-wrap)
       ```

       - 주 축과 여러 줄 묶음을 설정하는 속성

       - container 안에 있는 item들의 중요 축을 설정 ( 주 축 설정 )

         ① flex-direction ( row / row-reverse / cloumn / column-reverse )

         - ①-① row / row - reverse (수평정렬)

           **"row"**           ![캡처30](https://user-images.githubusercontent.com/62126380/79681052-8bf0d700-8251-11ea-84d8-95129a128ad5.PNG)

         

         **"row-reverse"** ![캡처31](https://user-images.githubusercontent.com/62126380/79681114-3832bd80-8252-11ea-8be3-d4edc402ca95.PNG)

         - ①-② column / column-reverse (수직정렬)

​							**"column"**                       ![캡처32](https://user-images.githubusercontent.com/62126380/79681217-5fd65580-8253-11ea-99be-e4859d967284.PNG)

​						**"column-reverse"**            ![캡처33](https://user-images.githubusercontent.com/62126380/79681250-b80d5780-8253-11ea-998d-9ddfb18f3dd5.PNG)

​							② flex-wrap ( no-wrap / wrap / wrap-reverse )

​													 -  item들을 여러 줄로 할건지, 1줄로 할건지 설정

​													 -  각각의 item 들은 가로너비가 컨테이너 안에 1줄 안으로 다 들어감.	

​													②-① no-wrap (기본값)

​													②-② wrap (여러줄로 설정)

​													②-③ wrap-reverse (여러줄로 묶되, 역방향으로 묶음)



​					ⓒ justify-content ( flex-start / flex-end / center / space-between / space-around )

​						 	■ 주 축의 정렬방법을 설정                                                                                                                        								(flex-direction 으로 정할수 있는 주 축을 수평으로 할건지, 수직으로 할건지 설정)

​									① flex-start : 시작점을 기준으로 해서 왼쪽 정렬![캡처34](https://user-images.githubusercontent.com/62126380/79681853-a0849d80-8258-11ea-8121-d7ed905d0ff3.PNG)

​									② flex-end : 끝점을 기준으로 해서 오른쪽 정렬![캡처35](https://user-images.githubusercontent.com/62126380/79681884-ee010a80-8258-11ea-9060-7bab3ea1bfd8.PNG)

​									③ center : 가운데 정렬 ![캡처36](https://user-images.githubusercontent.com/62126380/79681917-31f40f80-8259-11ea-8c78-8bf9d4180290.PNG)

​									④ space-between : 첫번째 아이템과 마지막 아이템을 각각 시작점과 끝점에 붙히고, 																		남은 여백을 균등하게 분배해서 가운데 정렬

​																		![캡처37](https://user-images.githubusercontent.com/62126380/79682005-c8c0cc00-8259-11ea-9350-4abdcccea2d5.PNG)

​							 		⑤ space- around : 쓸데없는 여백없이 꽉꽉 채워서 가운데 정렬 

​																		![캡처38](https://user-images.githubusercontent.com/62126380/79682049-20f7ce00-825a-11ea-91c0-8a11f8b91af7.PNG)

​						

​					ⓓ align - items / aling-content (align-content : 요소들이 여러 줄일 경우에만 사용)                                                                                                                 						( strech / flex-start / flex-end - center - space-between / space-around / baseline )

​							■ 교차 축의 정렬방법을 설정

​									① strech(기본값) : 부모의 높이를 세로로 꽉꽉 늘려서 채운다.

![캡처39](https://user-images.githubusercontent.com/62126380/79686437-42b57d00-827b-11ea-93b9-6ca5f05d1fa8.PNG)



