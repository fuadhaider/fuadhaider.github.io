// responsive menu drop down
function dropMenu() {
  var x = document.getElementById('menu-div');
  if (x.className === 'menu-div') {
    x.className += (' menu-drop'); //add menu dropping class
  } else {
    x.className = 'menu-div';
  }
}
//menu hides by clicking outside menu
var nav = document.getElementById('nav');
var menuDiv = document.getElementById('menu-div');
document.addEventListener('click', function(event) {
  var clickOut = nav.contains(event.target);
  if (!clickOut) {
    if (menuDiv.classList.contains('menu-drop')) {
      menuDiv.classList.remove('menu-drop');
    }
  }
});
// auto scroll to sections
var scrollY = 0;
var distance = 40;
var scrollSpeed = 10;
var bottomSection;
function autoScrollTo(section, g) {
  var scrollPos = window.pageYOffset; //scroll position from top
  var targetPos = document.getElementById(section).offsetTop - g;
  //top of the destination element from parent
  bottomSection = document.body.offsetHeight - window.innerHeight - 40;
  //webpage height - window height - scroll distance;
  if (scrollPos < targetPos) {
    scrollDown(targetPos);
  }
  else {
    scrollUp(targetPos);
  }
}
// For scrolling down
function scrollDown(targetPos) {
  var scrollPos = window.pageYOffset; //updating scroll position in recursion
  var animator = setTimeout('scrollDown(\''+targetPos+'\')', scrollSpeed);
  //calling function in recursion by delay
  //checking destination reach before next recursion call
  if (targetPos > scrollPos && scrollPos < bottomSection) {
    scrollY = scrollPos + distance;
    window.scroll(0, scrollY); //Scroll function
  }
  else {
    clearTimeout(animator);
  }
}
//For scrolling up
function scrollUp(targetPos) {
  var scrollPos = window.pageYOffset;
  var animator = setTimeout('scrollUp(\''+targetPos+'\')', scrollSpeed);
  if (scrollPos > targetPos) {
    scrollY = scrollPos - distance;
    window.scroll(0, scrollY);
  }
  else {
    clearTimeout(animator);
  }
}
// Parallax effect for achievement-section
function parallax() {
  // Scroll icon hides
  document.getElementById('scroll-icon').style.display = 'none';
  // For mobile screen
  if (document.documentElement.clientWidth < 600) {
    var achievement = document.getElementById('achievement-section');
    var triggerAchievement = achievement.offsetTop - 400; //trigger point
    var interest = document.getElementById('interest-section-1');
    var triggerInterest = interest.offsetTop - 400;
    var currentY = window.pageYOffset; //scroll position of current document from top
    //Parallax in Achievements Section
    if (currentY > triggerAchievement && currentY < triggerInterest) {
      var achievementImage01 = document.getElementById('achievement-image-1');
      var achievementImage02 = document.getElementById('achievement-image-2');
      achievementImage01.style.bottom = -(currentY - triggerAchievement)*0.25 + 'px';
      achievementImage02.style.bottom = -(currentY - triggerAchievement)*0.15 + 'px';
    }
    //Interests sections
    //car goes left
    if (currentY > triggerInterest) {
      var car = document.getElementById('car-image');
      car.style.left = -(currentY - triggerInterest)*0.15 + 'px';
    }
    //Suits go up
    if (currentY > triggerInterest) {
      var suits = document.getElementById('suits-image');
      suits.style.top = -(currentY - triggerInterest)*0.15 + 'px';
    }
    //Djokovic goes right
    if (currentY > triggerInterest) {
      var djokovic = document.getElementById('djokovic');
      djokovic.style.right = -(currentY - triggerInterest)*0.15 + 'px';
    }
    //Sketch goes bottom
    if (currentY > triggerInterest) {
      var sketch = document.getElementById('sketch-image');
      sketch.style.bottom = -(currentY - triggerInterest)*0.15 + 'px';
    }
  }
  // For bigger screen
  else {
    var achievement = document.getElementById('achievement-section');
    var triggerAchievement = achievement.offsetTop - 600; //trigger point
    var interest = document.getElementById('interest-section-1');
    var triggerInterest = interest.offsetTop - 600;
    var currentY = window.pageYOffset; //scroll position of current document from top
    //Parallax in Achievements Section
    if (currentY > triggerAchievement && currentY < triggerInterest) {
      var achievementImage01 = document.getElementById('achievement-image-1');
      var achievementImage02 = document.getElementById('achievement-image-2');
      achievementImage01.style.bottom = -(currentY - triggerAchievement)*0.25 + 'px';
      achievementImage02.style.bottom = -(currentY - triggerAchievement)*0.15 + 'px';
    }
    //Interests sections
    if (currentY > triggerInterest) {
      //car goes left
      var car = document.getElementById('car-image');
      car.style.left = -(currentY - triggerInterest)*0.15 + 'px';
      //Suits go up
      var suits = document.getElementById('suits-image');
      suits.style.top = -(currentY - triggerInterest)*0.15 + 'px';
      //Djokovic goes right
      var djokovic = document.getElementById('djokovic');
      djokovic.style.right = -(currentY - triggerInterest)*0.15 + 'px';
      //Sketch goes bottom
      var sketch = document.getElementById('sketch-image');
      sketch.style.bottom = -(currentY - triggerInterest)*0.15 + 'px';
     }
  }
}
//Calling parallax function on scroll
window.addEventListener('scroll', parallax, false);
