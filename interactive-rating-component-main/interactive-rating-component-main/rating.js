
    let popup = document.getElementById("popup");

    function openPopup(){
      popup.classList.add("open-popup"); 
    }
    function closePopup(){
      popup.classList.remove("open-popup"); 
    }
 
    // to access rating
let nums = document.getElementById("nums");
let output = document.getElementById("output");

// function to update rating
function gfg(n) {
  remove();
  for (let i = 0; i < n; i++) {
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";
    nums[i].className = "nums " + cls;
  }
  output.innerText = "Rating is: " + n + "/5";
}