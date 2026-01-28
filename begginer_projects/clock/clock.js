let displayEl = document.querySelector("#display");
setInterval(function(){
  let date = new Date();
  displayEl.innerHTML = date.toLocaleTimeString();
},1000)