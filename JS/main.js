let allLists = document.querySelectorAll(".list");
let rightBox = document.querySelector(".right")
let leftBox = document.querySelector(".left")

allLists.forEach(list => {
   list.addEventListener("dragstart",function (e) {
      let selItem = e.target ;
      rightBox.addEventListener("dragover",function (e) {
         e.preventDefault();
      })
      rightBox.addEventListener("drop",function () {
         rightBox.appendChild(selItem);
         selItem = null 
      })
      leftBox.addEventListener("dragover",function (e) {
         e.preventDefault();
      })
      leftBox.addEventListener("drop",function () {
         leftBox.appendChild(selItem);
         selItem = null 
      })
   })
})

