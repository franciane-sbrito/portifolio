import styled from 'styled-components'

export const ContainerPage = styled.div`
top: 500px;
max-width: 100vw;
font-family: 'Special Elite', cursive;
font-size: 25px;
height: 97vh;
background-image: url('imagehome.png');
background-repeat: space;
background-size: 100vw 100vh;
background-color: #000055;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 600px) {
    align-items: normal;
}
` 
export const Stars = styled.div`
width: 3px;
height: 3px;
border-radius: 50%;
box-shadow: -390px 530px white,
-200px 80px white,
-80px 120px white,
-300px 320px white,
-250px 330px white,
-200px 530px white,
-150px 130px white,
-320px 100px white,
-350px 250px white,
560px 320px white,
670px 380px white,
780px 378px white,
880px 79px white,
567px 56px white,
400px 200px white,
590px 230px white,
50px 240px white,
670px 110px white,
780px 278px white,
1400px 100px white,
1390px 30px white,
1150px 200px white,
970px 90px white,
780px 78px white,
880px 179px white,
967px 56px white,
1250px 240px white,
130px 110px white,
1480px 278px white,
1580px 179px white,
1707px 56px white,
1830px 110px white,
1780px 278px white,
1580px 50px white,
1707px 156px white,
1550px 250px white;
animation: anim-stars 10s linear infinite;
@keyframes anim-stars {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-750px);
    }
}
&:after{
    content: " ";
    position: absolute;
    top: 450px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    box-shadow: 50px 30px white,
-100px 80px white,
-80px 120px white,
-300px 20px white,
-250px 130px white,
-200px 50px white,
-150px 100px white,
-320px 100px white,
-350px 250px white,
560px 320px white,
670px 380px white,
780px 378px white,
880px 79px white,
567px 56px white,
400px 200px white,
590px 230px white,
650px 240px white,
670px 110px white,
780px 278px white,
1400px 100px white,
1390px 30px white,
1150px 200px white,
970px 90px white,
780px 78px white,
880px 179px white,
967px 56px white,
1250px 240px white,
130px 110px white,
1480px 278px white,
1580px 179px white,
1707px 56px white,
1830px 110px white,
1780px 278px white,
1580px 50px white,
1707px 156px white,
1550px 250px white;
  }
`
export const Stars2 = styled.div`
width: 3px;
height: 3px;
border-radius: 50%;
box-shadow: 6vw 30px white,
13.35vw 81px white,
5.12vw 231px white,
19.68vw 31px white,
22.21vw 231px white,
19.68vw 51px white,
15.88vw 211px white,
22vw 211px white,
28.54vw 351px white,
35.50vw 331px white,
42.46vw 381px white,
49.43vw 378px white,
56vw 79px white,
35.88vw 56px white,
25.94vw 300px white,
37.34vw 330px white,
41.13vw 340px white,
42.46vw 220px white,
49.36 378px white,
88.60vw 200px white,
87.97vw 30px white,
81.64vw 300px white,
61.39vw 90px white,
50vw 78px white,
55.70vw 179px white,
61vw 56px white,
85.44 340px white,
8.5vw 220px white,  
92vw 378px white,
95vw 279px white,
96vw 56px white,
97vw 220px white,
99vw 378px white,
99vw 50px white,
97vw 256px white,
98vw 350px white;
bottom: 0;
animation: anim-stars 20s linear infinite;
@keyframes anim-stars {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-750px);
    }
}
&:after{
    content: "";
    position: absolute;
    top: 250px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    box-shadow: 50px 30px white,
    211px 81px white,
    81px 231px white,
    311px 31px white,
    351px 231px white,
    311px 51px white,
    251px 211px white,
    331px 211px white,
    451px 351px white,
    561px 331px white,
    671px 381px white,
    781px 378px white,
    881px 79px white,
    567px 56px white,
    410px 300px white,
    590px 330px white,
    650px 340px white,
    670px 220px white,
    780px 378px white,
    1400px 100px white,
    1390px 30px white,
    1150px 300px white,
    970px 90px white,
    780px 78px white,
    880px 179px white,
    967px 56px white,
    1350px 340px white,
    130px 110px white,
    1480px 378px white,
    1580px 179px white,
    1707px 56px white,
    1830px 110px white,
    1780px 378px white,
    1580px 50px white,
    1707px 156px white,
    1550px 350px white;
  }
`


export const Title = styled.h1`
width: 44.5vw;
text-align: items;
height: 5vh;
color: #DDD;
border-right: 4px solid #EEE;
white-space: nowrap;
overflow: hidden;
animation: cursor 500ms infinite normal, escrever 5s steps(40) normal;
@keyframes cursor {
    from {
        border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
        border-right-color: transparent;
    }
}
@keyframes escrever{
    from {
        width: 0;
    }
    to {
        width: 44.5vw;
    }
}
@media screen and (max-width: 600px) {
 margin-top: 250px;
    width: 80vw;
text-align: center;
font-size: 36px;
white-space: normal;
height: 75px;
display: flex;
align-items: center;
animation: cursor 500ms infinite normal, escrever 2s steps(40) normal;
}
`

