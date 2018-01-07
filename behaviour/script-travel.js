function parallax() {
  document.getElementById('scroll-icon').style.display = 'none';

  var currentY = window.pageYOffset;
  var travelImage1 = document.getElementById('travel-image-1');
  var travelImage2 = document.getElementById('travel-image-2');
  travelImage1.style.bottom = -(currentY)*0.25 + 'px';
  travelImage2.style.bottom = -(currentY)*0.15 + 'px';
}
window.addEventListener('scroll', parallax, false);
