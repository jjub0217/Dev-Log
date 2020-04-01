# position

- 요소의 위치 지정 방법의 유형(기준)을 설정

- 배치 할수 있는 **"기준"**을 설정하는 역할

- 배치될 위치 방향

  ㄱ. top:  요소의 position 값이 지정되어서  기준이 정해지면, 잡혀있는 기준의 ***위쪽에서부터*** 의 거리

  ㄴ. bottom: 요소의 position 값이 지정되어서  기준이 정해지면, 잡혀있는 기준의 ***아래에서부터*** 의 거리

  ------>>>> % 사용시 : 부모요소의 세로너비(height)의 비율로 지정 (음수값 사용가능)

  ㄷ. left: 요소의 position 값이 지정되어서  기준이 정해지면, 잡혀있는 기준의 ***왼쪽에서부터*** 의 거리

  ㄹ. right: 요소의 position 값이 지정되어서  기준이 정해지면, 잡혀있는 기준의 ***오른쪽에서부터*** 의 거리

  ------>>>> % 사용시 : 부모요소의 가로너비(width)의 비율로 지정 (음수값 사용가능)

- 기준

  ## 1. static 

  - 요소의 기준이 없음 

  - <p style="color:red">배치 불가능</p>

  ## 2. relative 

  - <p style="color:red">요소 자신을 기준</p>

  - 자기 자신 스스로를 배치될 기준으로 삼음

  - 요소에 relative를 주면 해당 요소는 배치될    준비를 끝낸 상태 

    -> 자기 기준으로 움직이기 시작할것임

    -> 위치를 잡아야 움직일수 있으므로 위치를 잡아줘야 함(top, bottom, left, right 등)

  - 자기 자신을 기준으로 하다보니까 이동을      하려면 자기 자신이 원래 있었던 위치가         <u>**필수적으로**</u> 필요함.

  - <p style="color:red">주변에 있는 형제 요소에 영향을 주거나받게됨</p>

  ![캡처20](https://user-images.githubusercontent.com/62126380/78130334-1664c880-7454-11ea-995e-6ef334197ee8.PNG)

  ---> position: relative

  ​		top: 20px

  ​		left: 50px

  ----

![캡처21](https://user-images.githubusercontent.com/62126380/78130728-d2be8e80-7454-11ea-9414-aabf7087a2b4.PNG)

---> position: relative

​		top: 20px

​		right: 30px

 ## 3. absolute

- <p style="color:red">위치상의 부모요소를 기준</p>

- 위치상의 부모요소에 position 값이 부여되어야만그 요 소가 위치상의 부모요소의 역할을 가지게 됨

- 위치상의 부모요소에 position 값이 주어지면 위치방향은 absolute 가 부여된 요소에 적어야 함

  (			absolute 요소에 준 위치방향 

  ​									=

  positoin 값을 준 부모요소 위치에서부터의 위치방향)

- 요소에 absolute 를 주게 되면 부모요소를 기준으로 하기 때문에 부모요소를 기준으로 배치될 주비를 끝낸 상태 

  -> 동시에 공중으로 붕~~ 뜬 상태가 됨

  -> 다음 형제요소가 공중에 붕~~ 뜨게 된 요소가 원래 있던 위치에 밀려 들어가게 됨

  ![캡처22](https://user-images.githubusercontent.com/62126380/78134093-8aa26a80-745a-11ea-848f-3f81aca3e426.PNG)

  ---> .parent { position: relative }

  ​		.child { position: absolute;

  ​					bottom: 50px;

  ​					right: 10px }

  ## 4. fixed

  - 브라우저(=뷰포트)를 기준 (=우측하단)
  - fixed 값을 준 요소에 위치방향(top, bottom, left, right 등)이 <u>**필수적으로**</u> 들어가야 함
  - 아무리 스크롤을 내려도, 브라우저의 크기가 줄거나 늘어나도 브라우저의 우측 하단에 고정되어있다. (ex: 쇼핑몰 배너광고, 헤더 등 고정된 메뉴)

  ## 5. sticky

  - <p style="color:red">스크롤 영역을 기준</p>

  - 한 요소에 sticky를 주고, 스크롤영역의 어느 지점에 배치가 될지 설정해야 함

    ```ex
    .box { position:sticky;
    		top:0;}
    ```

    ---->> 스크롤 영역의 위에 붙어서 고정되있음

    ---->> 스크롤 영역안에서 맨 위의 요소의 컨텐츠들이 움직이지 않고 고정되서 스크롤이 내려가짐.

  - sticky를 준 요소에는 위치방향이 1개 이상    <u>**필수적으로**</u> 들어가야 함

- 요소 쌓임순서(stack order)

  - 어떤 요소가 내 시선에서 더 가깝게 있는지를 결정한다.

  - 쌓이는 규칙 : 

    1. static 을 제외한 position의 속성값이 

       **"있을 경우"** 가장 위에 쌓임

    2. position이 모든 요소에 존재한다면,           z-index 속성의 숫자가 높을수록                    가장 위에 쌓이는 개념으로 만들수 있음

       -->>**(주의!!)** position 이 있어야만 사용이 가능

    3. position 속성 값도 있고, z-index 값도 모두 같다면, 그 중에서 가장 늦게 작성된 코드가 가장 위에 쌓임

       ![캡처23](https://user-images.githubusercontent.com/62126380/78140700-6009df00-7465-11ea-9919-91194de1ffcc.PNG)

