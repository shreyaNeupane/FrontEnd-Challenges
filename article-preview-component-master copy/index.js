let footer = document.querySelector(".footer");
let shareOption = document.querySelector(".hover");
shareOption.style.display = "none";
function showHideUsers() {
  if (shareOption.style.display === "block") {
    // Hide the share options and show the footer content
    shareOption.style.display = "none";
    footer.style.display = "flex"; // Adjust based on your layout
  } else {
    // Show the share options and hide the footer content
    shareOption.style.display = "block";
    footer.style.display = "none";
  }
}
