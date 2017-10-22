// Navigation Variables
var caret = $(".fa.fa-caret-down");
var box = $(".account-box").hide();

var nav = $(".fa.fa-bars");
var menu = $(".menu").hide();

// Trigger Click Event For Navigation
caret.click(function(e) {

  e.preventDefault();

  box.fadeToggle();

  function httpGetAsync(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        console.log(JSON.parse(xmlHttp.responseText).transactions.length);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.withCredentials = false;
    xmlHttp.send(null);
  }

  httpGetAsync('http://localhost:3000/transactions')

});

nav.click(function() {

  menu.fadeToggle();

});

// Line Chart
var lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [{
    label: "My First dataset",
    fillColor: "rgba(41, 128, 185, 0.5)",
    strokeColor: "none",
    pointColor: "rgba(41, 128, 185, 0.9)",
    pointStrokeColor: "rgba(41, 128, 185, 0)",
    pointHighlightFill: "rgba(41, 128, 185, 0.9)",
    pointHighlightStroke: "rgba(41, 128, 185, 0)",
    data: [100, 70, 20, 100, 120, 50, 70, 50, 50, 100, 50, 90]
  }, {
    label: "My Second dataset",
    fillColor: "rgba(155, 89, 182, 0.5)",
    strokeColor: "none",
    pointColor: "rgba(155, 89, 182, 0.9)",
    pointStrokeColor: "rgba(231, 76, 60, 255, 0)",
    pointHighlightFill: "rgba(155, 89, 182, 0.9)",
    pointHighlightStroke: "rgba(231, 76, 60, 0)",
    data: [28, 48, 40, 19, 86, 27, 20, 90, 50, 20, 90, 20]
  }]
};

window.onload = function() {
  var ctx1 = document.getElementById("myChart").getContext("2d");
  window.myLine = new Chart(ctx1).Line(lineChartData, {

    responsive: true
  });
};

Chart.defaults.global = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    // Possible effects are:
    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeOutQuart",

    // Boolean - If we should show the scale at all
    showScale: false,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: false,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: null,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: null,
    // Number - The scale starting value
    scaleStartValue: null,

    // String - Colour of the scale line
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - Pixel width of the scale line
    scaleLineWidth: 1,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 12,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: false,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
    customTooltips: false,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for multiple tooltips
    multiTooltipTemplate: "<%= value %>",

    // Function - Will fire on animation progression.
    onAnimationProgress: function(){},

    // Function - Will fire on animation completion.
    onAnimationComplete: function(){}
}


var container = document.getElementById('container');
var graphMeasurement = document.getElementById('graph-measurement');

var allCircles = document.getElementsByTagName('circle');
var allLines = document.getElementsByTagName('line');

//console.log(topSVGNode)



var destArray = [15,52,28,170,105,93,44, 122, 179, 170, 220];


TweenMax.set(allCircles, {
  attr:{fill:'#954CE9', r:5},
  transformOrigin:'50% 50%',
  scale:0
})
TweenMax.set([allLines], {
  attr:{stroke:'#18B5DD'},
  drawSVG:'100% 100%',
  strokeWidth:2
})
TweenMax.set([graphMeasurement], {
  attr:{stroke:'#18B5DD'},
  drawSVG:'100% 100%',
  strokeWidth:1
})

TweenMax.set([allCircles, allLines], {
  y:'+=300'
})

TweenMax.set(graphMeasurement, {
  y:'+=280',
  alpha:0.3
})
TweenMax.to(graphMeasurement,3, {
  drawSVG:'0% 100%',
  delay:1,
    ease:Power2.easeInOut
})
TweenMax.set('svg', {
  alpha:1
})
for(var i = 0; i < allCircles.length; i++){

  TweenMax.to(allCircles[i], 2, {
    attr:{cy:'-=' + destArray[i]},
    onUpdate:moveLines,
    onUpdateParams:[i],
    delay:i/5,
    ease:Power4.easeInOut
  })
  	if(allLines[i]){

      TweenMax.to(allLines[i], 1, {
        drawSVG:'400',
        delay:i/5,
        ease:Power4.easeInOut
      })
    }

    TweenMax.to(allCircles[i], 1, {
     scale:1,
      delay:i/5,
    ease:Power4.easeInOut
   })

}

function moveLines(i){

  if(allLines[i]){

    TweenMax.set(allLines[i], {
       attr:{
         'x2':allCircles[i].getAttribute('cx'), 'y2':allCircles[i].getAttribute('cy')
       }
     })
   TweenMax.set(allLines[i], {
       attr:{
         'x1':allCircles[i+1].getAttribute('cx'), 'y1':allCircles[i+1].getAttribute('cy')
       }
     })


}
}
