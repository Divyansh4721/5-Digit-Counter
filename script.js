var countInterval;

function startCounter() {

  var number = parseInt(document.getElementById("number").value);

  var currentNo1 = document.querySelector(".counter .current1");
  var nextNo1 = document.querySelector(".counter .next1");
  var currentNo2 = document.querySelector(".counter .current2");
  var nextNo2 = document.querySelector(".counter .next2");
  var currentNo3 = document.querySelector(".counter .current3");
  var nextNo3 = document.querySelector(".counter .next3");
  var currentNo4 = document.querySelector(".counter .current4");
  var nextNo4 = document.querySelector(".counter .next4");
  var currentNo5 = document.querySelector(".counter .current5");
  var nextNo5 = document.querySelector(".counter .next5");
  var count = 1;

  countInterval = setInterval(function () {
    if ((count-1) === number) {
      clearInterval(countInterval);
      alert("Counter has stopped");
      return;
    }
    increaseCount(currentNo1, nextNo1 ,onedigit(count),1);
    increaseCount(currentNo2, nextNo2 ,seconddigit(count),2);
    increaseCount(currentNo3, nextNo3 ,thirddigit(count),3);
    increaseCount(currentNo4, nextNo4 ,fourthdigit(count),4);
    increaseCount(currentNo5, nextNo5 ,fifthdigit(count),5);
    count++;
  }, 1000);

}

function increaseCount(currentNo, nextNo, counti, nu) {
  if(nextNo.innerText!=counti){
  nextNo.innerText = counti;
  nextNo.classList.add("animate"+nu);

  setTimeout(function () {
    currentNo.innerText = nextNo.innerText;
    nextNo.classList.remove("animate"+nu);
  }, 500);
}
}
function onedigit(num){
  return num%10;
}
function seconddigit(num){
  num=num/10;
  num=parseInt(num);
  return num%10;
}

function thirddigit(num){
  num=num/10;
  num=num/10;
  num=parseInt(num);
  return num%10;
}

function fourthdigit(num){
  num=num/10;
  num=num/10;
  num=num/10;
  num=parseInt(num);
  return num%10;
}

function fifthdigit(num){
  num=num/10;
  num=num/10;
  num=num/10;
  num=num/10;
  num=parseInt(num);
  return num%10;
}
