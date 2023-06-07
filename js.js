const pointCount = 7;
const circleRadius = 160;
const startAnimDelta = 5;
const circumference = Math.PI * circleRadius * 2;

var selectedItemIndex = -0.1;

var circlePath;


document.addEventListener('DOMContentLoaded', function () {
    circlePath = document.getElementById('mask-circle');
    console.log(circlePath)
  }, false);
/**
 * @description On Mouse Leave event handler for points
 */
const onMouseLeave = () => {
	let index = (selectedItemIndex !== 0) ? selectedItemIndex : 0;
	calculateOffset(index);
};

/**
 * @description On Click event handler for points
 * @param {Number} index - Index of list item
 */
const onClick = (index) => {

};

/**
 * @description - Calculate offset for circle path by index of list item
 * @param {Number} index - Index of list item
 */
const calculateOffset = (index=0) => {
	let offset = 0;

	if (index !== 0) offset = (circumference / pointCount) * (pointCount - index);
	
	circlePath.style.strokeDashoffset = `${offset}px`;
};

// INTRO

let buffer = 500;
let delay = 1000 * (1 + (pointCount / startAnimDelta) - (1 / startAnimDelta)) + buffer;

setTimeout(() => onClick(1), delay);



function opennav() {
    //console.log(document.getElementsByTagName("body"))
    document.getElementById("main").style.opacity = 1
    document.getElementById("main").style.visibility = "visible"
    document.body.style.overflow = "hidden"
}

function closenav() {
    //console.log("test")
    document.getElementById("main").style.opacity = 0
    document.getElementById("main").style.visibility = "hidden"
    document.body.style.overflow = "auto"
}


function scrollWin() {
	window.scrollTo(0, 700);
  }
