/**
 *  v 2.1
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'img_blq_01',
            type:'image',
            rect:['-240px','50px','738px','333px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"img_blq_01.png",'0px','0px']
         },
         {
            id:'img_blq_03',
            type:'image',
            rect:['-96px','148px','440px','226px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"img_blq_03.png",'0px','0px']
         },
         {
            id:'img_blq_02',
            type:'image',
            rect:['-42px','34px','430px','355px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"img_blq_02.png",'0px','0px']
         },
         {
            id:'img_blq_logo',
            type:'image',
            rect:['15px','30px','241px','311px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"img_blq_logo.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_img_blq_03}": [
            ["style", "top", '148px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '-96px']
         ],
         "${_img_blq_logo}": [
            ["style", "height", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '15px'],
            ["style", "top", '30px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '434px'],
            ["style", "height", '500px'],
            ["style", "overflow", 'visible']
         ],
         "${_img_blq_01}": [
            ["style", "top", '232px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '214px'],
            ["style", "width", '0px']
         ],
         "${_img_blq_02}": [
            ["style", "top", '34px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["style", "opacity", '1'],
            ["style", "left", '-42px'],
            ["style", "width", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 53250,
         autoPlay: true,
         timeline: [
            { id: "eid42", tween: [ "style", "${_img_blq_logo}", "top", '70px', { fromValue: '30px'}], position: 27000, duration: 2000 },
            { id: "eid43", tween: [ "style", "${_img_blq_logo}", "top", '30px', { fromValue: '70px'}], position: 29000, duration: 2000 },
            { id: "eid44", tween: [ "style", "${_img_blq_logo}", "top", '-10px', { fromValue: '30px'}], position: 31000, duration: 2000 },
            { id: "eid45", tween: [ "style", "${_img_blq_logo}", "top", '30px', { fromValue: '-10px'}], position: 33000, duration: 2000 },
            { id: "eid86", tween: [ "style", "${_img_blq_01}", "top", '50px', { fromValue: '232px'}], position: 0, duration: 1819, easing: "easeOutBack" },
            { id: "eid84", tween: [ "style", "${_img_blq_01}", "top", '50px', { fromValue: '50px'}], position: 2000, duration: 0, easing: "easeOutBack" },
            { id: "eid125", tween: [ "style", "${_img_blq_03}", "left", '-96px', { fromValue: '-96px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid26", tween: [ "style", "${_img_blq_03}", "left", '-160px', { fromValue: '-96px'}], position: 18000, duration: 2000 },
            { id: "eid28", tween: [ "style", "${_img_blq_03}", "left", '-50px', { fromValue: '-160px'}], position: 20000, duration: 5000 },
            { id: "eid30", tween: [ "style", "${_img_blq_03}", "left", '-129px', { fromValue: '-50px'}], position: 25000, duration: 3000 },
            { id: "eid85", tween: [ "style", "${_img_blq_01}", "left", '-240px', { fromValue: '214px'}], position: 0, duration: 1819, easing: "easeOutBack" },
            { id: "eid83", tween: [ "style", "${_img_blq_01}", "left", '-240px', { fromValue: '-240px'}], position: 2000, duration: 0, easing: "easeOutBack" },
            { id: "eid95", tween: [ "transform", "${_img_blq_02}", "skewY", '5deg', { fromValue: '0deg'}], position: 17750, duration: 2000 },
            { id: "eid96", tween: [ "transform", "${_img_blq_02}", "skewY", '0deg', { fromValue: '5deg'}], position: 19750, duration: 1500 },
            { id: "eid34", tween: [ "transform", "${_img_blq_02}", "skewY", '5deg', { fromValue: '0deg'}], position: 26500, duration: 2000 },
            { id: "eid36", tween: [ "transform", "${_img_blq_02}", "skewY", '0deg', { fromValue: '5deg'}], position: 28500, duration: 1500 },
            { id: "eid46", tween: [ "transform", "${_img_blq_02}", "skewY", '5deg', { fromValue: '0deg'}], position: 34000, duration: 2000 },
            { id: "eid47", tween: [ "transform", "${_img_blq_02}", "skewY", '0deg', { fromValue: '5deg'}], position: 36000, duration: 1500 },
            { id: "eid79", tween: [ "transform", "${_img_blq_03}", "skewY", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_img_blq_01}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 10000, duration: 2500 },
            { id: "eid23", tween: [ "transform", "${_img_blq_01}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 12500, duration: 3500, easing: "easeOutBounce" },
            { id: "eid72", tween: [ "transform", "${_img_blq_01}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 29000, duration: 2500 },
            { id: "eid73", tween: [ "transform", "${_img_blq_01}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 31500, duration: 3500, easing: "easeOutBounce" },
            { id: "eid50", tween: [ "transform", "${_img_blq_01}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 39000, duration: 2500 },
            { id: "eid51", tween: [ "transform", "${_img_blq_01}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 41500, duration: 3500, easing: "easeOutBounce" },
            { id: "eid17", tween: [ "style", "${_img_blq_02}", "width", '430px', { fromValue: '0px'}], position: 3500, duration: 1500, easing: "easeOutBack" },
            { id: "eid62", tween: [ "style", "${_img_blq_02}", "width", '0px', { fromValue: '430px'}], position: 50750, duration: 1000 },
            { id: "eid6", tween: [ "style", "${_img_blq_01}", "width", '738px', { fromValue: '0px'}], position: 0, duration: 2000, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_img_blq_01}", "width", '0px', { fromValue: '738px'}], position: 52250, duration: 1000 },
            { id: "eid20", tween: [ "style", "${_img_blq_logo}", "height", '311px', { fromValue: '0px'}], position: 5000, duration: 1500, easing: "easeOutBounce" },
            { id: "eid90", tween: [ "style", "${_img_blq_logo}", "height", '243px', { fromValue: '311px'}], position: 11000, duration: 1000 },
            { id: "eid91", tween: [ "style", "${_img_blq_logo}", "height", '311px', { fromValue: '243px'}], position: 12000, duration: 1500, easing: "easeOutBounce" },
            { id: "eid93", tween: [ "style", "${_img_blq_logo}", "height", '243px', { fromValue: '311px'}], position: 42319, duration: 1000 },
            { id: "eid94", tween: [ "style", "${_img_blq_logo}", "height", '311px', { fromValue: '243px'}], position: 43319, duration: 1500, easing: "easeOutBounce" },
            { id: "eid56", tween: [ "style", "${_img_blq_logo}", "height", '0px', { fromValue: '311px'}], position: 50000, duration: 1000 },
            { id: "eid97", tween: [ "transform", "${_img_blq_02}", "skewX", '5deg', { fromValue: '0deg'}], position: 17750, duration: 2000 },
            { id: "eid98", tween: [ "transform", "${_img_blq_02}", "skewX", '0deg', { fromValue: '5deg'}], position: 19750, duration: 1500 },
            { id: "eid33", tween: [ "transform", "${_img_blq_02}", "skewX", '5deg', { fromValue: '0deg'}], position: 26500, duration: 2000 },
            { id: "eid35", tween: [ "transform", "${_img_blq_02}", "skewX", '0deg', { fromValue: '5deg'}], position: 28500, duration: 1500 },
            { id: "eid48", tween: [ "transform", "${_img_blq_02}", "skewX", '5deg', { fromValue: '0deg'}], position: 34000, duration: 2000 },
            { id: "eid49", tween: [ "transform", "${_img_blq_02}", "skewX", '0deg', { fromValue: '5deg'}], position: 36000, duration: 1500 },
            { id: "eid78", tween: [ "transform", "${_img_blq_03}", "skewX", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid100", tween: [ "style", "${_img_blq_01}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_img_blq_01}", "height", '333px', { fromValue: '0px'}], position: 0, duration: 2000, easing: "easeInQuad" },
            { id: "eid82", tween: [ "style", "${_img_blq_03}", "height", '226px', { fromValue: '0px'}], position: 2000, duration: 1500, easing: "easeOutBack" },
            { id: "eid67", tween: [ "style", "${_img_blq_03}", "height", '0px', { fromValue: '226px'}], position: 51500, duration: 1000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "logotipo-cq");
