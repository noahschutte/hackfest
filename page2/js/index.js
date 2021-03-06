// Navigation Variables
var caret = $(".fa.fa-caret-down");
var box = $(".account-box").hide();

var nav = $(".fa.fa-bars");
var menu = $(".menu").hide();

// Trigger Click Event For Navigation
caret.click(function(e) {

  e.preventDefault();

  box.fadeToggle();

});

nav.click(function() {

  menu.fadeToggle();

});

window.onload = function() {
};

var container = document.getElementById('container');
var graphMeasurement = document.getElementById('graph-measurement');

var allCircles = document.getElementsByTagName('circle');
var allLines = document.getElementsByTagName('line');

//console.log(topSVGNode)



var destArray = [15,52,28,170,105,93,44, 122, 179, 170, 220];
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = true;
Chart.defaults.global.animation = true;
var data = {
  //Noah change this
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
  datasets: [{
    label: "My First dataset",
    fillColor: "rgba(220,220,220,0.3)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [5502, 5908, 6500, 8100, 8311, 7625, 6445, 5220, 4800]
    //  //Noah change this
  }, {
    //  //Noah change this
    label: "My Second dataset",
    fillColor: "rgba(90,170,225,0.4)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    data: [5902, 6208, 6700, 8000, 8711, 7925, 7045, 6220, 5800]
    //Noah change this
  }]
};
var data2 = {
  //Noah change this
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
  datasets: [{
    label: "My First dataset",
    fillColor: "rgba(220,220,220,0.3)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [55, 59, 65, 81, 83, 76, 64, 52, 48]
    //  //Noah change this
  }, {
    //  //Noah change this
    label: "My Second dataset",
    fillColor: "rgba(90,170,225,0.4)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    data: [52, 69, 75, 80, 82, 76, 71, 69, 55]
    //Noah change this
  }]
};
var ctx = document.getElementById("linechart").getContext("2d");
var ctx2 = document.getElementById("linechart2").getContext("2d");
var myLineChart = new Chart(ctx).Line(data, {
  pointDot: false,
  showScale: true,
  bezierCurveTension: 0.45,
  datasetStrokeWidth: 3,
  multiTooltipTemplate: "$<%= value %>",
  pointHitDetectionRadius: 60,
});
var myLineChart2 = new Chart(ctx2).Line(data2, {
  pointDot: false,
  showScale: true,
  bezierCurveTension: 0.45,
  datasetStrokeWidth: 3,
  multiTooltipTemplate: "<%= value %>",
  pointHitDetectionRadius: 60,
});

//order scroll script
var orderItemH = document.getElementById('order-item').clientHeight;
console.log(orderItemH);
var orderContainer = document.getElementById('order-container');
var statsElementH = document.getElementById('stats-element').clientHeight;
var initialAmount = Math.floor((statsElementH - 150) / orderItemH);
var totalAmount = document.getElementsByClassName('order-item').length + 1;
console.log(initialAmount + ' items can be displayed');
orderContainer.style.height = (initialAmount * (orderItemH + 10)) + 'px';

document.getElementById('order-scrolldown').addEventListener('click', function() {
  scrollOrder(orderContainer.scrollTop + orderItemH + 14);
});
document.getElementById('order-scrollup').addEventListener('click', function() {
  scrollOrderUp(orderContainer.scrollTop - orderItemH - 14);
});

window.onresize = function() {
  orderItemH = document.getElementById('order-item').clientHeight;
  statsElementH = document.getElementById('stats-element').clientHeight;
  initialAmount = Math.floor((statsElementH) / orderItemH);
  totalAmount = document.getElementsByClassName('order-item').length + 1;
  orderContainer.style.height = (initialAmount * (orderItemH + 15)) + 'px';
}

function scrollOrder(max) {
  if (orderContainer.scrollTop <= max && max < (totalAmount - initialAmount) * orderItemH) {
    console.log(orderItemH)
    window.setTimeout(function() {
      orderContainer.scrollTop += 5;
      scrollOrder(max);
    }, 2)
  }
}

function scrollOrderUp(goal) {
  if (orderContainer.scrollTop >= goal && orderContainer.scrollTop > 0) {
    orderContainer.scrollTop -= 5;
    window.setTimeout(function() {
      scrollOrderUp(goal);
    }, 2)
  }
}
