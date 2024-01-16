const portrait = document.getElementById("portrait");
const portraitsFolderPath = "./assets/portraits/";

portrait.addEventListener("click", setNextPortrait);

function setNextPortrait() {
  const pics = ["ian_beer.jpg", "ian2.jpg"];
  var currentPic = portrait.getAttribute("src").split("/").pop();
  currentIndex = pics.indexOf(currentPic);
  nextIndex = currentIndex + 1;
  if(nextIndex >= pics.length){
    nextIndex = 0;
  }
  portrait.setAttribute("src", portraitsFolderPath + pics[nextIndex]);
}
