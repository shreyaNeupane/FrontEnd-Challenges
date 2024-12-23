

let selectedRating = 0;
// function to update rating
function gfg(rating) {
  selectedRating = rating;

  const nums = document.querySelectorAll(".nums");
 
  nums.forEach((num, index) => {
    if(index + 1 === rating){
      num.classList.add("selected");
    } else{
       num.classList.remove("selected");
    }
  });
}

//openpopup function
function openpopup(){
  if(selectedRating == 0){
    alert("Please select a rating before submitting!");
    return;
  }
}

// update the popup message
const output = document.getElementById("output");
output.innerText = `You selected ${selectedRating} out of 5`;

// show the popup
const popup = document.getElementById("popup");
popup.classList.add("open-popup");

// close popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("open-popup");
}
