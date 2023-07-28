// 데이터 타입, 연산자 실습
1 + 1
// 2
1 + "만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true
!true
// false

// 인증번호 만들기 실습
Math.floor ( Math.random() * 1000000 )
639477
String ( Math.random() * 1000000 )
'731013.3617025944'
String ( Math.floor ( Math.random() * 1000000 ) )
'423087'
String ( Math.floor ( Math.random() * 1000000 ) )
'502899'
String ( Math.floor ( Math.random() * 1000000 ) )
'164163'
String ( Math.floor ( Math.random() * 1000000 ) )
'666819'
String ( Math.floor ( Math.random() * 1000000 ) )
'258660'
String ( Math.floor ( Math.random() * 1000000 ) )
'607930'
String ( Math.floor ( Math.random() * 1000000 ) )
'40247'
String ( Math.floor ( Math.random() * 1000000 ) ).padStart(6,0)
'910156'
String ( Math.floor ( Math.random() * 1000000 ) ).padStart(6,0)
'052787'
let result = String ( Math.floor ( Math.random() * 1000000 ) ).padStart(6,"0")
undefined
result
'031364'
result
'031364'