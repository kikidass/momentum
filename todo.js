const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';   // toDos 는 상수 선언하기 위한 임의의 값?

function paintToDo(text) {
    console.log(text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadtoDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null){

    }
}

function init() {
//    loadtoDos();
    toDoForm.addEventListener("submit",handleSubmit);  // form 태그에서 submit(엔터) 이벤트가 일어나면
                                                       // handleSubmit 함수 실행
}

init();