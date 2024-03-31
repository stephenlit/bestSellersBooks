// document.addEventListener("DOMContentLoaded", function() {
//     const boxes = document.querySelectorAll(".box");
//     const delay = 500; 
//     for (const i = 0; i < boxes.length; i++) {
//       (function(index) {
//         setTimeout(function() {
//           boxes[index].style.opacity = 1;
//           boxes[index].style.transform = "translateX(0)";
//         }, delay * index);
//       })(i);
//     }
//   });
  

 function modifyAnimation() {
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      box.style.setProperty("animation", `1s forwards ${i * 500}ms slideIn`);
  }
}

window.addEventListener("load", () => {
  modifyAnimation();                    
})