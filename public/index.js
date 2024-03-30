document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    const delay = 500; 
    for (var i = 0; i < boxes.length; i++) {
      (function(index) {
        setTimeout(function() {
          boxes[index].style.opacity = 1;
          boxes[index].style.transform = "translateX(0)";
        }, delay * index);
      })(i);
    }
  });
  