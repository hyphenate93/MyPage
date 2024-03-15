
 

// Smooth Scroll Function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

console.log("Hello this is an easteregg!"); 
document.addEventListener("DOMContentLoaded", function() {
const downloadButton = document.getElementById("download-button");
downloadButton.addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "./Cv_eng.pdf";
  link.download = "My Resume.pdf";
  link.target = "_blank";
  link.click();
});  });

