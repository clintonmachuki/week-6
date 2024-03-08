//excersise 9 question 1
document.addEventListener('keydown', function(event) {
    var elm = document.getElementById('circle');
    var computedStyle = window.getComputedStyle(elm);
    var circleMarginTop = parseFloat(computedStyle.marginTop);
    var circleMarginLeft = parseFloat(computedStyle.marginLeft);
    if (event.keyCode === 37) { // Left arrow key
      elm.style.marginLeft = (circleMarginLeft - 10) + 'px';
    }
    if (event.keyCode === 38) { // Up arrow key
      elm.style.marginTop = (circleMarginTop - 10) + 'px';
    } 
    if (event.keyCode === 39) { // Right arrow key
      elm.style.marginLeft = (circleMarginLeft + 10) + 'px';
    }
    if (event.keyCode === 40) { // Down arrow key
      elm.style.marginTop = (circleMarginTop + 10) + 'px';
    }
  });
  