var 입력 = document.querySelector('#accent');
var 계산 = document.querySelector("#calculation");
var 현재 = new Date();

function 일수계산기 (num){
    var 입력값 = 입력.value; 
    var 과거 = new Date(입력값);
    var 밀리초일수 = 과거.getTime() + num*(1000*60*60*24);
    var 일수 = new Date(밀리초일수);
    var 년 = 일수.getFullYear();
    var 월 = 일수.getMonth()+1;
    var 일 = 일수.getDate()-1;

    var 데이트 = document.querySelector("#date" + num);
    데이트.textContent = 년 + "년" + 월 + "월" + 일 + "일";
}

계산.addEventListener('click', function(e){
    e.preventDefault();
    
    일수계산기(100);
    일수계산기(200);
    일수계산기(365);
    일수계산기(500);
});
