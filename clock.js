
const clockContainer = document.querySelector(".js-clock"),         // index.html 의 시계 영역인 js-clock 클래스 영역을 접근하여 조작하겠다.
      clockTitle = clockContainer.querySelector(".js-title");

function getTime(){                                                 // 시,분,초 구하는 함수
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    //  -->  선택된 영역에 텍스트를 삽입,,  따라서 <div>js-clock </div> 영역에 아무 글자가 없어도 이 코드에 의해 텍스트가 생긴다
    //  ES6에 도입된 문자열 표기법 : 기존의 ""+값+""; 표기법이 아닌 ``안에 문자열과 값을 모두 표기..  값은 ${} 로 표시
    //  ${}안에  조건식 등이 들어가서  다시  ${} 가 쓰여지면 ``로 한번 더 감싸야 한다
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();

