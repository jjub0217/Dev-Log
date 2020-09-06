#### ASCII CODE 에 알기 전에

- 메모리셀 1개씩의 크기는 8bit이며 1byte이다.
- 컴퓨터의 기본 저장단위는 byte이다. 
- 1byte 는 2의 1승

---

# ASCII CODE

- 컴퓨터 등 많은 통신 장치에서 사용되는 문자 인코딩

- 7bit , 총 128개의 문자들로 이루어져 있다.

  7bit만 활용하는 이유는 남은 1비트를 통신 에러 검출을 위해 사용하기 때문이다.

<img width="1077" alt="ASCII-Table" src="https://user-images.githubusercontent.com/62126380/79929401-8cbb8000-8480-11ea-9593-22b683e35047.png">

위 이미지처럼 ASCII CODE는 0~ 127까지 나타낼수 있다.

- 0 ~ 32 : 인쇄와 전송 제어용으로 사용
- 33 ~ 126 : 52개의 알파뱃 대소문자 / 10개의 숫자 / 32개의 특수문자 / 1개의 공백문자



영문으로는 전부 나타낼 수 있지만, 다른 언어를 표현하기에는 7bit로는 부족하다.<br>-> 보완하기 위해 Unicode  가 등장



# Unicode 

- 2byte (16bit = 2의 16승 : 65,536개의 문자)
- 유니코드로 ASCII CODE 포용이 가능하다.

# UTF-8

- 유니코드 부호화 방식(8bit 기반)

  





 