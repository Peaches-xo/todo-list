/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Nunito-VariableFont_wght.ttf */ "./src/fonts/Nunito-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Nunito-Italic-VariableFont_wght.ttf */ "./src/fonts/Nunito-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/images/low-poly-grid-haikei.png */ "./src/images/low-poly-grid-haikei.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/images/crystals.png */ "./src/images/crystals.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* CSS for ToDo List */
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    font-family: 'Nunito';
}

:root {
    --gradient_bg_color:#ede5fd;
    --gradient_spot1_color:#e1cbfb;
    --gradient_spot1_w: 75%;
    --gradient_spot1_h: 75%;
    --gradient_spot1_x: 0%;
    --gradient_spot1_y: 0%;
    --gradient_spot2_color:#ffe0d6;
    --gradient_spot2_w: 75%;
    --gradient_spot2_h: 75%;
    --gradient_spot2_x: 100%;
    --gradient_spot2_y: 0%;
    --gradient_spot3_color:#ebe0ff;
    --gradient_spot3_w: 75%;
    --gradient_spot3_h: 75%;
    --gradient_spot3_x: 100%;
    --gradient_spot3_y: 100%;
    
    --gradient_spot4_color:#ffdbf3;
    --gradient_spot4_w: 75%;
    --gradient_spot4_h: 75%;
    --gradient_spot4_x: 0%;
    --gradient_spot4_y: 100%;
    
    --gradient_spot2_w:100%;
    --gradient_spot2_x:94%;
    --gradient_spot2_h:44%;
    --gradient_spot1_w:51%;
    --gradient_spot1_h:64%;
    --gradient_spot1_x:7%;
    --gradient_spot3_w:100%;
    --gradient_spot3_h:82%;
    --gradient_spot3_x:90%;
    --gradient_spot4_w:64%;
    --gradient_spot4_x:0%;
    --gradient_spot4_y:45%;

    /* Project Colours */
    --project_color1: #FFEDD6;
    --project_color2: #FFCB9A;
    --project_color3: #F8AEF9;
    --project_color4: #B8DBFD;
    --project_color5: #C8BAFA;
    --project_color6: #8FE4E9;

    --darkGrey: #252B3D;
    --medGrey: #94969b;
    --lightGrey: #eee;

  }

  .welcome-text{
    color: var(--lightGrey);
    /* background: linear-gradient(45deg, var(--project_color4) 30%, var(--project_color6) 100%); */
    text-align: center;
    padding: 10px;

    /* background: -webkit-linear-gradient(#fa83fc, #cabcfb); */
    /* background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: var(--lightGrey);
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('opentype'),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('opentype');
    font-style: normal;
}
  
  .fancy-gradient {
    background-color: var(--gradient_bg_color);
    background-image: radial-gradient(var(--gradient_spot1_w) var(--gradient_spot1_h) at left var(--gradient_spot1_x) top var(--gradient_spot1_y), var(--gradient_spot1_color), transparent), radial-gradient(var(--gradient_spot2_w) var(--gradient_spot2_h) at left var(--gradient_spot2_x) top var(--gradient_spot2_y), var(--gradient_spot2_color), transparent), radial-gradient(var(--gradient_spot3_w) var(--gradient_spot3_h) at left var(--gradient_spot3_x) top var(--gradient_spot3_y), var(--gradient_spot3_color), transparent), radial-gradient(var(--gradient_spot4_w) var(--gradient_spot4_h) at left var(--gradient_spot4_x) top var(--gradient_spot4_y), var(--gradient_spot4_color), transparent);
  }

 
  
/* 
  .animated {
    animation-fill-mode: both;
  }
@keyframes chameleon {

    0% {
      color: var(--project_color1);
    }
    14.2999% {
      color: var(--project_color2);
    }
    28.5999% {
      color: var(--project_color3);
    }
    42.8998% {
      color: var(--project_color4);
    }
    57.1996% {
      color: var(--project_color5);
    }
    71.4995% {
      color: var(--project_color6);
    }
    85.7994% {
      color: violet;
    }
    100% {
      color: red;
    }
  }
  .chameleon {
    animation-name: chameleon;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }  */
  /* TO USE, ADD CLASS ANIMATE AND CLASS CHAMELEON */
  

body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #222;
    position: relative;
    min-height: 100vh;
    overflow:hidden;

    /* font-size: 1.125rem; 
  line-height: 1.5;  */


}

.container{
    padding: 20px;
    border-radius: 20px;
    margin: auto;
    height: 85vh;
    width: 85vw;
    background-color: rgba(246, 243, 248, 0.622); 
    background-color:rgb(246 243 248 / 56%); /* gradient blend into bg  */
    box-shadow: 0px 0px 0px 1px floralwhite;
    display:grid;
    overflow: auto;
    grid-template-columns: 1fr 3fr 2fr;
    grid-template-rows: 0.5fr 1.5fr 0.5fr 3fr;
    grid-template-areas: "nav hello projheading"
                         "nav info project"
                         "nav heading project"
                         "nav taskbox project";
                         box-shadow:
                         0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                         0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                         0 12.5px 10px rgba(0, 0, 0, 0.06),
                         0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                         0 41.8px 33.4px rgba(0, 0, 0, 0.086);
}

.nav{
    grid-area: nav;
    border-radius: 10px;
    margin: 0px 30px 0px 20px;
    background-color: var(--darkGrey);
    box-shadow: 0px 0px 10px 3px lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.nav .logo{
  align-self: center;
  margin: 5px auto;
}

   /* stying of buttons on dash */
  .btn{
    display: inline-block;
    display:flex;
    gap:10px;
    padding: 0.8rem;
    background: transparent;
    border: solid 5px transparent;
    color: #94969b;
    cursor: pointer;
    transition: 0.3s ease;
    font-size: 0.9rem;
    width: 100%;
    text-align: left;
    align-items: center;
  }

  .btn:hover{
    background-color: #464B5B;
    /* color: #ff94ea; */
    color: #fff;
    border-left: solid 5px #ff94ea;
    /* outline: 3px solid #F8AEF9; */
  }

  .btn img{
    margin-right: 5px;
  
  }

.hello{
    grid-area: hello;
    /* background-color: #e1cbfb; */
    color: #302b2b;
    color: var(--darkGrey);
    font-size: 40px;
    font-weight: bold;
    display:flex;
    align-items: center;
}
.img-hand{
    width: 11%;
    padding: 0px 10px;
}

.info{
    grid-area: info;
  
    /* background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(238,238,238,1) 99%);  */
    background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(246,237,243,1) 99%); 
    display: flex;
    border-radius: 10px;
    /* background-color: #ebe0ff; */
    position: relative;
    /* box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072);  */
   

}

.info::before{
    content: "";
    background-image: linear-gradient(0deg, rgba(236,224,253,0.1) 11%, rgba(246,237,243,1) 99%), url(${___CSS_LOADER_URL_REPLACEMENT_2___}); 
    
    background-size: contain;
    background-position: 100px 0px;
    border-radius:10px;
    /* border: solid 1px #c6adf2; */
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
}


.info-item{
    padding: 10px;
    margin: 20px 10px;
    width: 100px;
    background-color:#c8aef8;/* best colour on macmini  */
    background-color: #af76f3; /* best color on macbook */
    border-left: solid 2px #c6adf2;
    border-bottom: solid 2px #c6adf2;
    color: whitesmoke;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: 0.3s ease;
    position: relative;
    box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;

}
.info strong{
    font-size: 30px;
   
}

.info-item:hover{
    transform: translateY(-5px);
    background-color: #c6adf2;
    /* background-color: #b491f1; */
    box-shadow: 0px 0px 8px 5px whitesmoke;
    border-left: solid 2px #d1bcf8;
    border-bottom: solid 2px #d1bcf8;
}

.heading{
    grid-area: heading;
    /* background-color:#ede5fd; */
    margin-top: 10px;
    font-weight: 400;
    display: flex;
    align-items: center;
    padding-left: 10px;
    gap: 5px;
}

/* ALL PROJECTS DISPLAY */
.taskbox{
    grid-area: taskbox;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
}

    .project-item{
        border-radius: 10px;
        margin: 8px;
        padding: 10px;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
        box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;
        background-color:#FDE1DB;
        border-left: solid 2px #fbded7;
        border-bottom: solid 2px #fbded7;
        transition: 0.4s ease;
    }

    .project-item h5{
        font-size: 18px;
        color: var(--darkGrey);
        padding-left: 5px;
    }

    p.project-item-taskno {
        padding-left: 10px;
        color: var(--medGrey);
        font-weight: 200;
        font-style: italic;
        font-size: 14px;
        letter-spacing: 0.1px;
        margin-top: -7px;
        margin-bottom: 7px;
    }
    div.project-item-wrapper{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
    button.project-item-editbtn{
        border: solid 1px transparent;
        transition: 0.3s;
        background-color: transparent;
    }
  
    /* project-item hovers */
    .project-item:hover{
        border-left: solid 2px #f8ece9;
        border-bottom: solid 2px #f8ece9;
    }
    button.project-item-editbtn:hover{
        cursor: pointer;
        transform: translateY(-2px);
    }






/* PROJECT SECTION ------------------------------------- */
.projheading{
    grid-area: projheading;
    background-color: white;
    color: var(--darkGrey);
    display:flex;

    align-items:center;
    gap: 5px;
    margin-top:-20px;
    margin-right: -20px;
    margin-left: 40px;

    border-top-right-radius: 20px;
    border-top-left-radius: 15px;
    padding-left: 20px;
    z-index:1;

}
    

.project{
    grid-area: project;
    background-color: #fff;
    margin-right: -20px;
    margin-left: 40px;
    margin-bottom: -20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 15px;
    box-shadow: -5px -46px 58px -20px lightgrey;
    padding: 10px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-repeat: no-repeat;
    background-position: 95% 95%;
}

h2.project-heading {
  text-align: center;
}

.project h3,
.gradient-h3{
    padding: 10px 0px 0px 10px;
    margin-top: 20px;
    /* color: var(--project_color5); */
    font-weight: 500;
    /* text-decoration: underline;
    text-decoration-color: var(--lightGrey); */

    background: -webkit-linear-gradient(#fa83fc, #cabcfb);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* details */
.project-task-item{
    background:#eeeeee;
    border-radius: 10px;
    margin: 10px 10px;
    padding: 5px 5px 5px 15px;
    display:flex;
    justify-content: center;
    flex-wrap: nowrap;
    position: relative;
    box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;
}


img.project-task-editbtn {
    margin-left: auto;
}


summary {
    display:flex;
    justify-content: space-between;
    align-items:center;
}

.project-task-priority{
    background-color: var(--project_color6);
    color: #008b92;
    font-size: 12px;
    border-radius: 20px;
    padding: 1px 15px;
}
label{
    font-size: 13px;
    display: flex;
}
.lowPriority{
    /* background-color: var(--project_color6);
    color: #008b92; */
    background-color: var(--project_color4);
    color: #0080fd;
}

.highPriority{
    background-color: var(--project_color3);
    color:#d002d4;
}

.medPriority{
    background-color: var(--project_color2);
    color: #e16d01;
}

.project-task-description{
    font-size: 13px;
    margin: 10px 0px;
    font-style: italic;
}



.project-task-img{
    vertical-align: top;
}
input[type="checkbox"] {
    margin-right: 11px;
}

input[type="checkbox"]:checked + label,
input[type="checkbox"]:checked {
    color: var(--medGrey);
    text-decoration: line-through !important;
} 
    





/* POP UPS/ MODALS  */

/* Create/ Add New...  */
.modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.4rem;
    width: 450px;
    /* padding: 1.3rem; */
    min-height: 250px;
    position: absolute;
    top: 20%;
    background-color: white;
    border: 3px solid #ddd;
    border: 3px solid pink;
    border-radius: 15px;
    z-index: 2;

    box-shadow: 
          0px 43px 79px -20px #af86c0, 
          34px -12px 80px -20px #fcd7e4d4;

          box-shadow: 
          -31px 20px 63px -20px #af86c0, 
          13px -35px 63px -2px #fcd7e4fa;

  }

  .create-modal-icon{
    position: absolute;
    top: -52px;
    left: 44%;
    background: white;
    border: solid 4px pink;
    padding: 5px;
    height: 70px;
    width: 70px;
    border-radius: 50px;
  }

  .modal h3 {
    margin: 20px auto 10px;
}
  
   .modal .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  } 


.create-modal-input-area {
  padding-left: 15px;
  margin-bottom: 20px;
}
   
  .modal input,
  select#projDropdown {
    padding: 0.7rem 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 0.9em;
  }
  
  .modal p {
    font-size: 0.9rem;
    color: #777;
    margin: 0.4rem 0 0.2rem;
  }
  
  .create-modal-buttons{
    display: flex;
  }

  select#projDropdown {
    width: 47%;
    height: 35px;
    padding: 5px;
    /* font-size: 16px;
    border: solid 1px lightgrey;
    border-radius: 3px; */
}

  
  .create-modal-buttons button {
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 8px;
    padding: 0.8rem;
    background-color: white;
    color: pink;
    text-align: center;
    font-size: 1.3em;
    cursor: pointer;
    border: none;
    font-weight: 600;
    width: 100%;
    border-top: solid 3px;
    border-bottom-left-radius: 20px;
   transition: 0.3s;
  }

  .create-modal-buttons button:hover {
    background: -webkit-linear-gradient(#43A3E8, #0EDBDD);
    transition: 0.3s;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
.create-modal-buttons button img{
  width: 25px;
}


  button[type="submit"]{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    border-left: solid 3px pink;
  }
  
  .btn-close {
    padding: 0;
    background: transparent;
    border-radius: 50%;
    border: none;
    margin-left: auto;
    position: absolute;
    top: 10px;
    right: 12px;
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(105, 97, 82, 0.5);
    
    backdrop-filter: blur(3px);
    z-index: 1;
  }

  input#taskDuedate {
    width: 47%;
}

/* PRIORITY RADIO IN NEWTASK FORM */
.taskPriority_radio {
	background: #454857;
	padding: 4px;
	border-radius: 50px;
	box-shadow: inset 0 0 0 3px rgba(35, 33, 45, 0.3),
		0 0 0 3px rgba(185, 185, 185, 0.3);
	position: relative;
  width: 47%;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
}

.taskPriority_radio input {
	width: auto;
	height: 100%;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	cursor: pointer;
	border-radius: 50px;
	padding: 4px 10px;
 
	background: #454857;
	color: #bdbdbdbd;
  border: transparent;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
	transition: all 100ms linear;
  /* transition: all 0.3s ease; */
}

.taskPriority_radio input:checked {
	background-image: linear-gradient(180deg, #95d891, #74bbad);
	color: #fff;
	box-shadow: 0 1px 1px #0000002e;
	text-shadow: 0 1px 0px #79485f7a;
	border-radius: 50px;
}

.taskPriority_radio input#taskPriority_med:checked {
	background-image: linear-gradient(180deg, #43A3E8, #0EDBDD);
}

.taskPriority_radio input#taskPriority_high:checked {
	background-image: linear-gradient(180deg, #F8AEF9, #cabcfb);
}

.taskPriority_radio input:before {
	content: attr(label);
	display: inline-block;
	text-align: center;
	width: 100%;
}











  .hidden {
    display: none;
  }
/* CURRENT TASK  - remove all references to label.btn-color-mode-switch  */




  /* Task/Project Switcher inside Modal */
div.create-modal-select-type{
  border-radius: 50px;
  box-shadow: inset 0 0 0 3px rgb(35 33 45 / 0%), 0 0 0 3px rgb(185 185 185 / 16%);
}

/*selected side*/
label {
    font-size: 13px;
    color: #424242;
    font-weight: 500;
}

/*  bg of Task when not selected*/
/* .btn-color-mode-switch > label.btn-color-mode-switch-inner{ */
                            label.btn-color-mode-switch-inner{
    margin: 0px;
    width: 140px;
    height: 30px;
    background: #E0E0E0;
    background: linear-gradient(90deg,pink, lavender);
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    display: block;
    cursor: pointer;
}
/* text of Task when not selected  */
/* .btn-color-mode-switch > label.btn-color-mode-switch-inner:before{ */
                        label.btn-color-mode-switch-inner::before{
    content: attr(data-on); /* Task */
    position: absolute;
    font-size: 13px;
    font-weight: 500;
    top: 7px;
    right: 20px;
    color: grey;
}

/*  project selected */
/* .btn-color-mode-switch > label.btn-color-mode-switch-inner:after{  */
                          label.btn-color-mode-switch-inner::after{
    content: attr(data-off); /* Project */
    width: 70px;
    height: 16px;
    background: #fff;
    border-radius: 26px;
    position: absolute;
    left: 2px;
    top: 2px;
    text-align: center;
    transition: all 0.3s ease;
    /* box-shadow: 0px 0px 6px -2px #111; */
    padding: 5px 0px;
}


/* .btn-color-mode-switch input[type="checkbox"]{ */
  input#toggleInput[type="checkbox"] {
    cursor: pointer;
    width: 50px;
    height: 25px;
    opacity: 0;
    position: absolute;
    top: 68px;
    left: 44%;
    z-index: 1;
    margin: 0px;
}

/*  set bg and text on project, not selected */
input#toggleInput[type="checkbox"]:checked + label.btn-color-mode-switch-inner{
  background: linear-gradient(90deg,pink, lavender);
  color: grey;
}

/*  Sets bg of Task when selected*/
input#toggleInput[type="checkbox"]:checked + label.btn-color-mode-switch-inner:after{
  content: attr(data-on); /*Tasks*/
  left: 68px;
  background: white;
  color: black;
}

input#toggleInput[type="checkbox"]:checked + label.btn-color-mode-switch-inner:before{
    content: attr(data-off); /*Project */
    right: auto;
    left: 20px;
}


.create-modal-input-area input[type="text"]:focus-visible{
  outline: solid 1px #af76f3;
 
}




@media screen and (max-width: 1065px){

  div.container{
    width: 98vw;
    height: 98vh;
  }
}






`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;IACI,SAAS;IACT,UAAU;IACV,qBAAqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,2BAA2B;IAC3B,8BAA8B;IAC9B,uBAAuB;IACvB,uBAAuB;IACvB,sBAAsB;IACtB,sBAAsB;IACtB,8BAA8B;IAC9B,uBAAuB;IACvB,uBAAuB;IACvB,wBAAwB;IACxB,sBAAsB;IACtB,8BAA8B;IAC9B,uBAAuB;IACvB,uBAAuB;IACvB,wBAAwB;IACxB,wBAAwB;;IAExB,8BAA8B;IAC9B,uBAAuB;IACvB,uBAAuB;IACvB,sBAAsB;IACtB,wBAAwB;;IAExB,uBAAuB;IACvB,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;IACtB,qBAAqB;IACrB,sBAAsB;;IAEtB,oBAAoB;IACpB,yBAAyB;IACzB,yBAAyB;IACzB,yBAAyB;IACzB,yBAAyB;IACzB,yBAAyB;IACzB,yBAAyB;;IAEzB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;;EAEnB;;EAEA;IACE,uBAAuB;IACvB,+FAA+F;IAC/F,kBAAkB;IAClB,aAAa;;IAEb,2DAA2D;IAC3D;;2CAEuC;IACvC,uBAAuB;EACzB;;EAEA;IACE,qBAAqB;IACrB;8DACqE;IACrE,kBAAkB;AACtB;;EAEE;IACE,0CAA0C;IAC1C,grBAAgrB;EAClrB;;;;AAIF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmCM;EACJ,kDAAkD;;;AAGpD;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;;IAEf;sBACkB;;;AAGtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,4CAA4C;IAC5C,uCAAuC,EAAE,4BAA4B;IACrE,uCAAuC;IACvC,YAAY;IACZ,cAAc;IACd,kCAAkC;IAClC,yCAAyC;IACzC;;;8CAG0C;yBACrB;;;;;6DAKoC;AAC7D;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,yBAAyB;IACzB,iCAAiC;IACjC,sCAAsC;IACtC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;GAEG,8BAA8B;EAC/B;IACE,qBAAqB;IACrB,YAAY;IACZ,QAAQ;IACR,eAAe;IACf,uBAAuB;IACvB,6BAA6B;IAC7B,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,iBAAiB;IACjB,WAAW;IACX,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,yBAAyB;IACzB,oBAAoB;IACpB,WAAW;IACX,8BAA8B;IAC9B,gCAAgC;EAClC;;EAEA;IACE,iBAAiB;;EAEnB;;AAEF;IACI,gBAAgB;IAChB,+BAA+B;IAC/B,cAAc;IACd,sBAAsB;IACtB,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,eAAe;;IAEf,0FAA0F;IAC1F,mFAAmF;IACnF,aAAa;IACb,mBAAmB;IACnB,+BAA+B;IAC/B,kBAAkB;IAClB;;;;4CAIwC;;;AAG5C;;AAEA;IACI,WAAW;IACX,oIAAwI;;IAExI,wBAAwB;IACxB,8BAA8B;IAC9B,kBAAkB;IAClB,+BAA+B;IAC/B,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,WAAW;IACX,SAAS;IACT,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,wBAAwB,CAAC,4BAA4B;IACrD,yBAAyB,EAAE,0BAA0B;IACrD,8BAA8B;IAC9B,gCAAgC;IAChC,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,oDAAoD;;AAExD;AACA;IACI,eAAe;;AAEnB;;AAEA;IACI,2BAA2B;IAC3B,yBAAyB;IACzB,+BAA+B;IAC/B,sCAAsC;IACtC,8BAA8B;IAC9B,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;AACZ;;AAEA,yBAAyB;AACzB;IACI,kBAAkB;IAClB,YAAY;IACZ,kCAAkC;AACtC;;IAEI;QACI,mBAAmB;QACnB,WAAW;QACX,aAAa;QACb,aAAa;QACb,qBAAqB;QACrB,8BAA8B;QAC9B,uDAAuD;QACvD,oDAAoD;QACpD,wBAAwB;QACxB,8BAA8B;QAC9B,gCAAgC;QAChC,qBAAqB;IACzB;;IAEA;QACI,eAAe;QACf,sBAAsB;QACtB,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;QAClB,qBAAqB;QACrB,gBAAgB;QAChB,kBAAkB;QAClB,eAAe;QACf,qBAAqB;QACrB,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,yBAAyB;QACzB,qBAAqB;IACzB;IACA;QACI,6BAA6B;QAC7B,gBAAgB;QAChB,6BAA6B;IACjC;;IAEA,wBAAwB;IACxB;QACI,8BAA8B;QAC9B,gCAAgC;IACpC;IACA;QACI,eAAe;QACf,2BAA2B;IAC/B;;;;;;;AAOJ,0DAA0D;AAC1D;IACI,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;IACtB,YAAY;;IAEZ,kBAAkB;IAClB,QAAQ;IACR,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;;IAEjB,6BAA6B;IAC7B,4BAA4B;IAC5B,kBAAkB;IAClB,SAAS;;AAEb;;;AAGA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,gCAAgC;IAChC,+BAA+B;IAC/B,2CAA2C;IAC3C,aAAa;IACb,yDAAiD;IACjD,4BAA4B;IAC5B,4BAA4B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;IAEI,0BAA0B;IAC1B,gBAAgB;IAChB,kCAAkC;IAClC,gBAAgB;IAChB;8CAC0C;;IAE1C,qDAAqD;IACrD,qBAAqB;IACrB,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA,YAAY;AACZ;IACI,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,YAAY;IACZ,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,oDAAoD;AACxD;;;AAGA;IACI,iBAAiB;AACrB;;;AAGA;IACI,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;IACvC,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI;qBACiB;IACjB,uCAAuC;IACvC,cAAc;AAClB;;AAEA;IACI,uCAAuC;IACvC,aAAa;AACjB;;AAEA;IACI,uCAAuC;IACvC,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;;;AAIA;IACI,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,qBAAqB;IACrB,wCAAwC;AAC5C;;;;;;;AAOA,qBAAqB;;AAErB,wBAAwB;AACxB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,uBAAuB;IACvB,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;;IAEV;;yCAEqC;;UAE/B;;wCAE8B;;EAEtC;;EAEA;IACE,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,iBAAiB;IACjB,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;AAC1B;;GAEG;IACC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;;AAGF;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;EAEE;;IAEE,oBAAoB;IACpB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;IACjB,WAAW;IACX,uBAAuB;EACzB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,YAAY;IACZ;;yBAEqB;AACzB;;;EAGE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,eAAe;IACf,uBAAuB;IACvB,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,qBAAqB;IACrB,+BAA+B;GAChC,gBAAgB;EACjB;;EAEA;IACE,qDAAqD;IACrD,gBAAgB;IAChB,qBAAqB;IACrB,6BAA6B;IAC7B,oCAAoC;EACtC;AACF;EACE,WAAW;AACb;;;EAGE;IACE,4BAA4B;IAC5B,gCAAgC;IAChC,2BAA2B;EAC7B;;EAEA;IACE,UAAU;IACV,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,kCAAkC;;IAElC,0BAA0B;IAC1B,UAAU;EACZ;;EAEA;IACE,UAAU;AACd;;AAEA,mCAAmC;AACnC;CACC,mBAAmB;CACnB,YAAY;CACZ,mBAAmB;CACnB;oCACmC;CACnC,kBAAkB;EACjB,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,uBAAuB;AACzB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,wBAAwB;CACxB,qBAAqB;CACrB,gBAAgB;CAChB,aAAa;CACb,eAAe;CACf,mBAAmB;CACnB,iBAAiB;;CAEjB,mBAAmB;CACnB,gBAAgB;EACf,mBAAmB;CACpB;;yDAEwD;CACxD,4BAA4B;EAC3B,+BAA+B;AACjC;;AAEA;CACC,2DAA2D;CAC3D,WAAW;CACX,+BAA+B;CAC/B,gCAAgC;CAChC,mBAAmB;AACpB;;AAEA;CACC,2DAA2D;AAC5D;;AAEA;CACC,2DAA2D;AAC5D;;AAEA;CACC,oBAAoB;CACpB,qBAAqB;CACrB,kBAAkB;CAClB,WAAW;AACZ;;;;;;;;;;;;EAYE;IACE,aAAa;EACf;AACF,0EAA0E;;;;;EAKxE,uCAAuC;AACzC;EACE,mBAAmB;EACnB,gFAAgF;AAClF;;AAEA,gBAAgB;AAChB;IACI,eAAe;IACf,cAAc;IACd,gBAAgB;AACpB;;AAEA,iCAAiC;AACjC,gEAAgE;4BACpC;IACxB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,iDAAiD;IACjD,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,eAAe;AACnB;AACA,oCAAoC;AACpC,uEAAuE;wBAC/C;IACpB,sBAAsB,EAAE,SAAS;IACjC,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,QAAQ;IACR,WAAW;IACX,WAAW;AACf;;AAEA,sBAAsB;AACtB,uEAAuE;0BAC7C;IACtB,uBAAuB,EAAE,YAAY;IACrC,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,kBAAkB;IAClB,yBAAyB;IACzB,uCAAuC;IACvC,gBAAgB;AACpB;;;AAGA,mDAAmD;EACjD;IACE,eAAe;IACf,WAAW;IACX,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,UAAU;IACV,WAAW;AACf;;AAEA,8CAA8C;AAC9C;EACE,iDAAiD;EACjD,WAAW;AACb;;AAEA,kCAAkC;AAClC;EACE,sBAAsB,EAAE,QAAQ;EAChC,UAAU;EACV,iBAAiB;EACjB,YAAY;AACd;;AAEA;IACI,uBAAuB,EAAE,WAAW;IACpC,WAAW;IACX,UAAU;AACd;;;AAGA;EACE,0BAA0B;;AAE5B;;;;;AAKA;;EAEE;IACE,WAAW;IACX,YAAY;EACd;AACF","sourcesContent":["/* CSS for ToDo List */\n*{\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    list-style-type: none;\n    box-sizing: border-box;\n    font-family: 'Nunito';\n}\n\n:root {\n    --gradient_bg_color:#ede5fd;\n    --gradient_spot1_color:#e1cbfb;\n    --gradient_spot1_w: 75%;\n    --gradient_spot1_h: 75%;\n    --gradient_spot1_x: 0%;\n    --gradient_spot1_y: 0%;\n    --gradient_spot2_color:#ffe0d6;\n    --gradient_spot2_w: 75%;\n    --gradient_spot2_h: 75%;\n    --gradient_spot2_x: 100%;\n    --gradient_spot2_y: 0%;\n    --gradient_spot3_color:#ebe0ff;\n    --gradient_spot3_w: 75%;\n    --gradient_spot3_h: 75%;\n    --gradient_spot3_x: 100%;\n    --gradient_spot3_y: 100%;\n    \n    --gradient_spot4_color:#ffdbf3;\n    --gradient_spot4_w: 75%;\n    --gradient_spot4_h: 75%;\n    --gradient_spot4_x: 0%;\n    --gradient_spot4_y: 100%;\n    \n    --gradient_spot2_w:100%;\n    --gradient_spot2_x:94%;\n    --gradient_spot2_h:44%;\n    --gradient_spot1_w:51%;\n    --gradient_spot1_h:64%;\n    --gradient_spot1_x:7%;\n    --gradient_spot3_w:100%;\n    --gradient_spot3_h:82%;\n    --gradient_spot3_x:90%;\n    --gradient_spot4_w:64%;\n    --gradient_spot4_x:0%;\n    --gradient_spot4_y:45%;\n\n    /* Project Colours */\n    --project_color1: #FFEDD6;\n    --project_color2: #FFCB9A;\n    --project_color3: #F8AEF9;\n    --project_color4: #B8DBFD;\n    --project_color5: #C8BAFA;\n    --project_color6: #8FE4E9;\n\n    --darkGrey: #252B3D;\n    --medGrey: #94969b;\n    --lightGrey: #eee;\n\n  }\n\n  .welcome-text{\n    color: var(--lightGrey);\n    /* background: linear-gradient(45deg, var(--project_color4) 30%, var(--project_color6) 100%); */\n    text-align: center;\n    padding: 10px;\n\n    /* background: -webkit-linear-gradient(#fa83fc, #cabcfb); */\n    /* background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; */\n    color: var(--lightGrey);\n  }\n\n  @font-face {\n    font-family: 'Nunito';\n    src: url('./fonts/Nunito-VariableFont_wght.ttf') format('opentype'),\n    url('./fonts/Nunito-Italic-VariableFont_wght.ttf') format('opentype');\n    font-style: normal;\n}\n  \n  .fancy-gradient {\n    background-color: var(--gradient_bg_color);\n    background-image: radial-gradient(var(--gradient_spot1_w) var(--gradient_spot1_h) at left var(--gradient_spot1_x) top var(--gradient_spot1_y), var(--gradient_spot1_color), transparent), radial-gradient(var(--gradient_spot2_w) var(--gradient_spot2_h) at left var(--gradient_spot2_x) top var(--gradient_spot2_y), var(--gradient_spot2_color), transparent), radial-gradient(var(--gradient_spot3_w) var(--gradient_spot3_h) at left var(--gradient_spot3_x) top var(--gradient_spot3_y), var(--gradient_spot3_color), transparent), radial-gradient(var(--gradient_spot4_w) var(--gradient_spot4_h) at left var(--gradient_spot4_x) top var(--gradient_spot4_y), var(--gradient_spot4_color), transparent);\n  }\n\n \n  \n/* \n  .animated {\n    animation-fill-mode: both;\n  }\n@keyframes chameleon {\n\n    0% {\n      color: var(--project_color1);\n    }\n    14.2999% {\n      color: var(--project_color2);\n    }\n    28.5999% {\n      color: var(--project_color3);\n    }\n    42.8998% {\n      color: var(--project_color4);\n    }\n    57.1996% {\n      color: var(--project_color5);\n    }\n    71.4995% {\n      color: var(--project_color6);\n    }\n    85.7994% {\n      color: violet;\n    }\n    100% {\n      color: red;\n    }\n  }\n  .chameleon {\n    animation-name: chameleon;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n  }  */\n  /* TO USE, ADD CLASS ANIMATE AND CLASS CHAMELEON */\n  \n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: #222;\n    position: relative;\n    min-height: 100vh;\n    overflow:hidden;\n\n    /* font-size: 1.125rem; \n  line-height: 1.5;  */\n\n\n}\n\n.container{\n    padding: 20px;\n    border-radius: 20px;\n    margin: auto;\n    height: 85vh;\n    width: 85vw;\n    background-color: rgba(246, 243, 248, 0.622); \n    background-color:rgb(246 243 248 / 56%); /* gradient blend into bg  */\n    box-shadow: 0px 0px 0px 1px floralwhite;\n    display:grid;\n    overflow: auto;\n    grid-template-columns: 1fr 3fr 2fr;\n    grid-template-rows: 0.5fr 1.5fr 0.5fr 3fr;\n    grid-template-areas: \"nav hello projheading\"\n                         \"nav info project\"\n                         \"nav heading project\"\n                         \"nav taskbox project\";\n                         box-shadow:\n                         0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n                         0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n                         0 12.5px 10px rgba(0, 0, 0, 0.06),\n                         0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n                         0 41.8px 33.4px rgba(0, 0, 0, 0.086);\n}\n\n.nav{\n    grid-area: nav;\n    border-radius: 10px;\n    margin: 0px 30px 0px 20px;\n    background-color: var(--darkGrey);\n    box-shadow: 0px 0px 10px 3px lightgray;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.nav .logo{\n  align-self: center;\n  margin: 5px auto;\n}\n\n   /* stying of buttons on dash */\n  .btn{\n    display: inline-block;\n    display:flex;\n    gap:10px;\n    padding: 0.8rem;\n    background: transparent;\n    border: solid 5px transparent;\n    color: #94969b;\n    cursor: pointer;\n    transition: 0.3s ease;\n    font-size: 0.9rem;\n    width: 100%;\n    text-align: left;\n    align-items: center;\n  }\n\n  .btn:hover{\n    background-color: #464B5B;\n    /* color: #ff94ea; */\n    color: #fff;\n    border-left: solid 5px #ff94ea;\n    /* outline: 3px solid #F8AEF9; */\n  }\n\n  .btn img{\n    margin-right: 5px;\n  \n  }\n\n.hello{\n    grid-area: hello;\n    /* background-color: #e1cbfb; */\n    color: #302b2b;\n    color: var(--darkGrey);\n    font-size: 40px;\n    font-weight: bold;\n    display:flex;\n    align-items: center;\n}\n.img-hand{\n    width: 11%;\n    padding: 0px 10px;\n}\n\n.info{\n    grid-area: info;\n  \n    /* background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(238,238,238,1) 99%);  */\n    background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(246,237,243,1) 99%); \n    display: flex;\n    border-radius: 10px;\n    /* background-color: #ebe0ff; */\n    position: relative;\n    /* box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072);  */\n   \n\n}\n\n.info::before{\n    content: \"\";\n    background-image: linear-gradient(0deg, rgba(236,224,253,0.1) 11%, rgba(246,237,243,1) 99%), url('/src/images/low-poly-grid-haikei.png'); \n    \n    background-size: contain;\n    background-position: 100px 0px;\n    border-radius:10px;\n    /* border: solid 1px #c6adf2; */\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.5;\n}\n\n\n.info-item{\n    padding: 10px;\n    margin: 20px 10px;\n    width: 100px;\n    background-color:#c8aef8;/* best colour on macmini  */\n    background-color: #af76f3; /* best color on macbook */\n    border-left: solid 2px #c6adf2;\n    border-bottom: solid 2px #c6adf2;\n    color: whitesmoke;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    transition: 0.3s ease;\n    position: relative;\n    box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n\n}\n.info strong{\n    font-size: 30px;\n   \n}\n\n.info-item:hover{\n    transform: translateY(-5px);\n    background-color: #c6adf2;\n    /* background-color: #b491f1; */\n    box-shadow: 0px 0px 8px 5px whitesmoke;\n    border-left: solid 2px #d1bcf8;\n    border-bottom: solid 2px #d1bcf8;\n}\n\n.heading{\n    grid-area: heading;\n    /* background-color:#ede5fd; */\n    margin-top: 10px;\n    font-weight: 400;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    gap: 5px;\n}\n\n/* ALL PROJECTS DISPLAY */\n.taskbox{\n    grid-area: taskbox;\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n    .project-item{\n        border-radius: 10px;\n        margin: 8px;\n        padding: 10px;\n        display: flex;\n        flex-direction:column;\n        justify-content: space-between;\n        /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */\n        box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n        background-color:#FDE1DB;\n        border-left: solid 2px #fbded7;\n        border-bottom: solid 2px #fbded7;\n        transition: 0.4s ease;\n    }\n\n    .project-item h5{\n        font-size: 18px;\n        color: var(--darkGrey);\n        padding-left: 5px;\n    }\n\n    p.project-item-taskno {\n        padding-left: 10px;\n        color: var(--medGrey);\n        font-weight: 200;\n        font-style: italic;\n        font-size: 14px;\n        letter-spacing: 0.1px;\n        margin-top: -7px;\n        margin-bottom: 7px;\n    }\n    div.project-item-wrapper{\n        display: flex;\n        justify-content: flex-end;\n        align-items: flex-end;\n    }\n    button.project-item-editbtn{\n        border: solid 1px transparent;\n        transition: 0.3s;\n        background-color: transparent;\n    }\n  \n    /* project-item hovers */\n    .project-item:hover{\n        border-left: solid 2px #f8ece9;\n        border-bottom: solid 2px #f8ece9;\n    }\n    button.project-item-editbtn:hover{\n        cursor: pointer;\n        transform: translateY(-2px);\n    }\n\n\n\n\n\n\n/* PROJECT SECTION ------------------------------------- */\n.projheading{\n    grid-area: projheading;\n    background-color: white;\n    color: var(--darkGrey);\n    display:flex;\n\n    align-items:center;\n    gap: 5px;\n    margin-top:-20px;\n    margin-right: -20px;\n    margin-left: 40px;\n\n    border-top-right-radius: 20px;\n    border-top-left-radius: 15px;\n    padding-left: 20px;\n    z-index:1;\n\n}\n    \n\n.project{\n    grid-area: project;\n    background-color: #fff;\n    margin-right: -20px;\n    margin-left: 40px;\n    margin-bottom: -20px;\n    border-bottom-right-radius: 20px;\n    border-bottom-left-radius: 15px;\n    box-shadow: -5px -46px 58px -20px lightgrey;\n    padding: 10px;\n    background-image: url(\"/src/images/crystals.png\");\n    background-repeat: no-repeat;\n    background-position: 95% 95%;\n}\n\nh2.project-heading {\n  text-align: center;\n}\n\n.project h3,\n.gradient-h3{\n    padding: 10px 0px 0px 10px;\n    margin-top: 20px;\n    /* color: var(--project_color5); */\n    font-weight: 500;\n    /* text-decoration: underline;\n    text-decoration-color: var(--lightGrey); */\n\n    background: -webkit-linear-gradient(#fa83fc, #cabcfb);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n/* details */\n.project-task-item{\n    background:#eeeeee;\n    border-radius: 10px;\n    margin: 10px 10px;\n    padding: 5px 5px 5px 15px;\n    display:flex;\n    justify-content: center;\n    flex-wrap: nowrap;\n    position: relative;\n    box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n}\n\n\nimg.project-task-editbtn {\n    margin-left: auto;\n}\n\n\nsummary {\n    display:flex;\n    justify-content: space-between;\n    align-items:center;\n}\n\n.project-task-priority{\n    background-color: var(--project_color6);\n    color: #008b92;\n    font-size: 12px;\n    border-radius: 20px;\n    padding: 1px 15px;\n}\nlabel{\n    font-size: 13px;\n    display: flex;\n}\n.lowPriority{\n    /* background-color: var(--project_color6);\n    color: #008b92; */\n    background-color: var(--project_color4);\n    color: #0080fd;\n}\n\n.highPriority{\n    background-color: var(--project_color3);\n    color:#d002d4;\n}\n\n.medPriority{\n    background-color: var(--project_color2);\n    color: #e16d01;\n}\n\n.project-task-description{\n    font-size: 13px;\n    margin: 10px 0px;\n    font-style: italic;\n}\n\n\n\n.project-task-img{\n    vertical-align: top;\n}\ninput[type=\"checkbox\"] {\n    margin-right: 11px;\n}\n\ninput[type=\"checkbox\"]:checked + label,\ninput[type=\"checkbox\"]:checked {\n    color: var(--medGrey);\n    text-decoration: line-through !important;\n} \n    \n\n\n\n\n\n/* POP UPS/ MODALS  */\n\n/* Create/ Add New...  */\n.modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1.4rem;\n    width: 450px;\n    /* padding: 1.3rem; */\n    min-height: 250px;\n    position: absolute;\n    top: 20%;\n    background-color: white;\n    border: 3px solid #ddd;\n    border: 3px solid pink;\n    border-radius: 15px;\n    z-index: 2;\n\n    box-shadow: \n          0px 43px 79px -20px #af86c0, \n          34px -12px 80px -20px #fcd7e4d4;\n\n          box-shadow: \n          -31px 20px 63px -20px #af86c0, \n          13px -35px 63px -2px #fcd7e4fa;\n\n  }\n\n  .create-modal-icon{\n    position: absolute;\n    top: -52px;\n    left: 44%;\n    background: white;\n    border: solid 4px pink;\n    padding: 5px;\n    height: 70px;\n    width: 70px;\n    border-radius: 50px;\n  }\n\n  .modal h3 {\n    margin: 20px auto 10px;\n}\n  \n   .modal .flex {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  } \n\n\n.create-modal-input-area {\n  padding-left: 15px;\n  margin-bottom: 20px;\n}\n   \n  .modal input,\n  select#projDropdown {\n    padding: 0.7rem 1rem;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 0.9em;\n  }\n  \n  .modal p {\n    font-size: 0.9rem;\n    color: #777;\n    margin: 0.4rem 0 0.2rem;\n  }\n  \n  .create-modal-buttons{\n    display: flex;\n  }\n\n  select#projDropdown {\n    width: 47%;\n    height: 35px;\n    padding: 5px;\n    /* font-size: 16px;\n    border: solid 1px lightgrey;\n    border-radius: 3px; */\n}\n\n  \n  .create-modal-buttons button {\n    display: flex;\n    justify-content:center;\n    align-items: center;\n    gap: 8px;\n    padding: 0.8rem;\n    background-color: white;\n    color: pink;\n    text-align: center;\n    font-size: 1.3em;\n    cursor: pointer;\n    border: none;\n    font-weight: 600;\n    width: 100%;\n    border-top: solid 3px;\n    border-bottom-left-radius: 20px;\n   transition: 0.3s;\n  }\n\n  .create-modal-buttons button:hover {\n    background: -webkit-linear-gradient(#43A3E8, #0EDBDD);\n    transition: 0.3s;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n.create-modal-buttons button img{\n  width: 25px;\n}\n\n\n  button[type=\"submit\"]{\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 20px;\n    border-left: solid 3px pink;\n  }\n  \n  .btn-close {\n    padding: 0;\n    background: transparent;\n    border-radius: 50%;\n    border: none;\n    margin-left: auto;\n    position: absolute;\n    top: 10px;\n    right: 12px;\n    cursor: pointer;\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(105, 97, 82, 0.5);\n    \n    backdrop-filter: blur(3px);\n    z-index: 1;\n  }\n\n  input#taskDuedate {\n    width: 47%;\n}\n\n/* PRIORITY RADIO IN NEWTASK FORM */\n.taskPriority_radio {\n\tbackground: #454857;\n\tpadding: 4px;\n\tborder-radius: 50px;\n\tbox-shadow: inset 0 0 0 3px rgba(35, 33, 45, 0.3),\n\t\t0 0 0 3px rgba(185, 185, 185, 0.3);\n\tposition: relative;\n  width: 47%;\n  margin: 10px 0px;\n  display: flex;\n  justify-content: center;\n}\n\n.taskPriority_radio input {\n\twidth: auto;\n\theight: 100%;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n\toutline: none;\n\tcursor: pointer;\n\tborder-radius: 50px;\n\tpadding: 4px 10px;\n \n\tbackground: #454857;\n\tcolor: #bdbdbdbd;\n  border: transparent;\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n\t\t\"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\",\n\t\t\"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\ttransition: all 100ms linear;\n  /* transition: all 0.3s ease; */\n}\n\n.taskPriority_radio input:checked {\n\tbackground-image: linear-gradient(180deg, #95d891, #74bbad);\n\tcolor: #fff;\n\tbox-shadow: 0 1px 1px #0000002e;\n\ttext-shadow: 0 1px 0px #79485f7a;\n\tborder-radius: 50px;\n}\n\n.taskPriority_radio input#taskPriority_med:checked {\n\tbackground-image: linear-gradient(180deg, #43A3E8, #0EDBDD);\n}\n\n.taskPriority_radio input#taskPriority_high:checked {\n\tbackground-image: linear-gradient(180deg, #F8AEF9, #cabcfb);\n}\n\n.taskPriority_radio input:before {\n\tcontent: attr(label);\n\tdisplay: inline-block;\n\ttext-align: center;\n\twidth: 100%;\n}\n\n\n\n\n\n\n\n\n\n\n\n  .hidden {\n    display: none;\n  }\n/* CURRENT TASK  - remove all references to label.btn-color-mode-switch  */\n\n\n\n\n  /* Task/Project Switcher inside Modal */\ndiv.create-modal-select-type{\n  border-radius: 50px;\n  box-shadow: inset 0 0 0 3px rgb(35 33 45 / 0%), 0 0 0 3px rgb(185 185 185 / 16%);\n}\n\n/*selected side*/\nlabel {\n    font-size: 13px;\n    color: #424242;\n    font-weight: 500;\n}\n\n/*  bg of Task when not selected*/\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner{ */\n                            label.btn-color-mode-switch-inner{\n    margin: 0px;\n    width: 140px;\n    height: 30px;\n    background: #E0E0E0;\n    background: linear-gradient(90deg,pink, lavender);\n    border-radius: 26px;\n    overflow: hidden;\n    position: relative;\n    transition: all 0.3s ease;\n    display: block;\n    cursor: pointer;\n}\n/* text of Task when not selected  */\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner:before{ */\n                        label.btn-color-mode-switch-inner::before{\n    content: attr(data-on); /* Task */\n    position: absolute;\n    font-size: 13px;\n    font-weight: 500;\n    top: 7px;\n    right: 20px;\n    color: grey;\n}\n\n/*  project selected */\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner:after{  */\n                          label.btn-color-mode-switch-inner::after{\n    content: attr(data-off); /* Project */\n    width: 70px;\n    height: 16px;\n    background: #fff;\n    border-radius: 26px;\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    text-align: center;\n    transition: all 0.3s ease;\n    /* box-shadow: 0px 0px 6px -2px #111; */\n    padding: 5px 0px;\n}\n\n\n/* .btn-color-mode-switch input[type=\"checkbox\"]{ */\n  input#toggleInput[type=\"checkbox\"] {\n    cursor: pointer;\n    width: 50px;\n    height: 25px;\n    opacity: 0;\n    position: absolute;\n    top: 68px;\n    left: 44%;\n    z-index: 1;\n    margin: 0px;\n}\n\n/*  set bg and text on project, not selected */\ninput#toggleInput[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner{\n  background: linear-gradient(90deg,pink, lavender);\n  color: grey;\n}\n\n/*  Sets bg of Task when selected*/\ninput#toggleInput[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner:after{\n  content: attr(data-on); /*Tasks*/\n  left: 68px;\n  background: white;\n  color: black;\n}\n\ninput#toggleInput[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner:before{\n    content: attr(data-off); /*Project */\n    right: auto;\n    left: 20px;\n}\n\n\n.create-modal-input-area input[type=\"text\"]:focus-visible{\n  outline: solid 1px #af76f3;\n \n}\n\n\n\n\n@media screen and (max-width: 1065px){\n\n  div.container{\n    width: 98vw;\n    height: 98vh;\n  }\n}\n\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   createNewTask: () => (/* binding */ createNewTask)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ "./src/model.js");

//Our main file - handles requests. 
//Tells MODEL what to do (logic wise), 
//tells VIEW what do to (display wise)
//Controls and decides how data is displayed







//inititation function/ loads the view
(0,_view_js__WEBPACK_IMPORTED_MODULE_1__.thisistheview)();








//function that runs when submit button is clicked
 function createNewProject(projName){
    //this should be a call to a function inside model, passing the projName, model will create the object and return the object to controller
    (0,_model_js__WEBPACK_IMPORTED_MODULE_2__.createNewProjectModel)(projName); //in model

    //pass newly created obj to view to add card
}
 
//when project is created, pass no of tasks to view to display


function createNewTask(taskName, taskDesc, taskDue, taskPriority, isComplete, projectName){

    (0,_model_js__WEBPACK_IMPORTED_MODULE_2__.createNewTaskModel)(taskName, taskDesc, taskDue, taskPriority, isComplete, projectName); //in model

}

























// export const pubSub = {
//   events: {},
//   subscribe: function(evName, fn){
//     console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
//     //add an event with a name as new or to existing list
//     this.events[evName] = this.events[evName] || [];
//     this.events[evName].push(fn);
//   },
//   unsubscribe: function(evName, fn){
//     console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
//     //remove an event function by name
//     if (this.events[evName]){
//         this.events[evName] = this.events[evName].filter(f => f !== fn);
//     }
//   },
//   publish: function(evName, data){
//     console.log(`PUBSUB: Making a broadcast about ${evName} with ${data}`);
//     //emit/publish the event to anyone who is subscribed
//     if (this.events[evName]){
//         this.events[evName].forEach(f => {
//             f(data);
//         });
//     }
//   }
// };





/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allProjectsArr: () => (/* binding */ allProjectsArr),
/* harmony export */   createNewProjectModel: () => (/* binding */ createNewProjectModel),
/* harmony export */   createNewTaskModel: () => (/* binding */ createNewTaskModel)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _newProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectForm */ "./src/newProjectForm.js");
//the model handles all the data and logic 



//array of all projects, each project is an object
let allProjectsArr = []; //export to controller and view (try to remove from view)

function ProjectFactory(projName){
    let project = Object.create(projectActions);
    project.name = projName;
    project.taskArr = [];  //set task array to empty array (arr of objects)
    return project;
}

let projectActions = {
    getProjectName(){
        return this.name;
    },
    addProjToAllProjArr(){
        allProjectsArr.push(this);
        // let lengthofArr = allProjectsArr.length;
        // console.log("Number of Projects in allProjectsArr: " + lengthofArr);
        // console.log("allProjectsArr: " + allProjectsArr[lengthofArr-1].name);
    },
    getNoOfTasks(){
        let noOfTasks = this.taskArr.length;
        console.log("No Of Tasks: (from tasksArr.length) " + this.taskArr.length);
        return noOfTasks;
    },
    // addTask(taskObj){
    //     //adds taskObj to this.taskArr
    //     taskArr.push(taskObj);
    //     let lastTask = taskArr.length-1;
    //     console.log(taskArr[lastTask]);
    // }
};

    //set up default project as FACTORY
    let defaultproj = ProjectFactory('default');
    defaultproj.addProjToAllProjArr();




    function createNewProjectModel(projName){  //export to controller
         let newprojName = ProjectFactory(projName);
         //working
         //console.log("newprojname: " + newprojName.getProjectName());
         newprojName.addProjToAllProjArr();
         //newprojName.getNoOfTasks();
     }

     function TaskFactory(taskName, taskDesc, taskDue, taskPriority, isComplete, projectName){
        let task = Object.create(taskActions);
        task.name = taskName;
        task.description = taskDesc;
        task.dueDate = taskDue;
        task.priority = taskPriority;
        task.isComplete = isComplete;
        task.projName = projectName;
        return task;
    }

    let taskActions = {
        getTaskName(){
            return this.name;
        },
        getTaskDescription(){
            return this.description;
        },
        getTaskDueDate(){
            return this.dueDate;
        },
        getTaskPriority(){
            return this.priority;
        },
        getTaskIsComplete(){
            return this.isComplete;
        },
        getTaskProjectName(){
            return this.projName;
        },

        addTask(taskObj){
            //adds taskObj to this.taskArr
            taskArr.push(taskObj);
            let lastTask = taskArr.length-1;
            console.log(taskArr[lastTask]);
        }
    }




    function createNewTaskModel(taskName, taskDesc, taskDue, taskPriority, isComplete, projName){
        //call to task Factory
        let newTask = TaskFactory(taskName, taskDesc, taskDue, taskPriority, isComplete, projName);
    }





/***/ }),

/***/ "./src/newProjectForm.js":
/*!*******************************!*\
  !*** ./src/newProjectForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newProjectForm: () => (/* binding */ newProjectForm)
/* harmony export */ });
//modal display - create New Project
//contains code to create dom elements and append them inside modal 

let div = document.querySelector("div.create-modal-input-area");

//create elements 
let label = document.createElement("label");
let input = document.createElement("input");

// Set attributes
label.setAttribute("for","projName");
label.textContent="Project Name:";
input.setAttribute("type", "text");
input.classList.add("name");
input.setAttribute("id", "projName");
input.setAttribute("autocomplete", "off");

function newProjectForm(){
    //toggle display
    div.classList.add("showProjModule");
    div.classList.remove("showTaskModule");

    //append elements to div
    div.appendChild(label);
    div.appendChild(input);
};

 //to view

/***/ }),

/***/ "./src/newTaskForm.js":
/*!****************************!*\
  !*** ./src/newTaskForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newTaskForm: () => (/* binding */ newTaskForm)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
//modal display - create New Task
//contains code to create dom elements and append them inside modal 



let div = document.querySelector('div.create-modal-input-area');

//create elements
let projDropdownLabel = document.createElement('label');
let projDropdown = document.createElement('select');

let taskLabel = document.createElement('label');
let taskInput = document.createElement('input');

let taskDescriptionLabel = document.createElement('label');
let taskDescriptionInput = document.createElement('input');

let taskDueDateLabel = document.createElement('label');
let taskDueDateInput = document.createElement('input');

let taskPriorityWrapper = document.createElement('div');
let taskPriorityInput_low = document.createElement('input');
let taskPriorityInput_med = document.createElement('input');
let taskPriorityInput_high = document.createElement('input');


// Set attributes
projDropdownLabel.setAttribute("for", "projDropdown");
projDropdownLabel.textContent = "Project: ";
projDropdown.setAttribute("id", "projDropdown");
projDropdown.setAttribute("name", "projDropdown");

taskLabel.setAttribute("for","taskName");
taskLabel.textContent="Task Name:";
taskInput.setAttribute("type", "text");
taskInput.classList.add("taskName");
taskInput.setAttribute("id", "taskName");

taskDescriptionLabel.setAttribute("for","taskDesc");
taskDescriptionLabel.textContent="Task Description:";
taskDescriptionInput.setAttribute("type", "text");
taskDescriptionInput.classList.add("taskDesc");
taskDescriptionInput.setAttribute("id", "taskDesc");

taskDueDateLabel.setAttribute('for', 'taskDueDate');
taskDueDateLabel.textContent = 'Task Due Date:';
taskDueDateInput.setAttribute('type', 'date');
taskDueDateInput.setAttribute('id', 'taskDueDate');

taskPriorityWrapper.classList.add('taskPriority_radio'); 
taskPriorityInput_low.setAttribute('label','Low');
taskPriorityInput_low.setAttribute('type','radio');
taskPriorityInput_low.setAttribute('id','taskPriority_low');
taskPriorityInput_low.setAttribute('name','taskPriority');
taskPriorityInput_low.setAttribute('value','low');

taskPriorityInput_med.setAttribute('label','Medium');
taskPriorityInput_med.setAttribute('type','radio');
taskPriorityInput_med.setAttribute('id','taskPriority_med');
taskPriorityInput_med.setAttribute('name','taskPriority');
taskPriorityInput_med.setAttribute('value','med');

taskPriorityInput_high.setAttribute('label','High');
taskPriorityInput_high.setAttribute('type','radio');
taskPriorityInput_high.setAttribute('id','taskPriority_high');
taskPriorityInput_high.setAttribute('name','taskPriority');
taskPriorityInput_high.setAttribute('value','high');

taskPriorityWrapper.appendChild(taskPriorityInput_low);
taskPriorityWrapper.appendChild(taskPriorityInput_med);
taskPriorityWrapper.appendChild(taskPriorityInput_high);


function populateDropdown(allProjectsArr){
    //remove all values and rerender
    clearDropdownOptions();

    //get values from proj array and create option tag for each
    if (allProjectsArr.length > 0){
        for (let i = 0; i <= allProjectsArr.length-1; i++){
            projDropdown.appendChild(createDropdownOptions(allProjectsArr[i].name)); 
        }
    }
};

function clearDropdownOptions(){
 //if div has children, remove children

    if (projDropdown.hasChildNodes){
        while (projDropdown.firstChild) {
            projDropdown.removeChild(projDropdown.firstChild);
        }
    }
};

function createDropdownOptions(item){
    let option = document.createElement("option");
        option.setAttribute("value", item); 
        option.textContent= item;  
    return option;
};

function newTaskForm(){
    //toggle display
    div.classList.add("showTaskModule");
    div.classList.remove("showProjModule");

    //clear elements 
    taskInput.value = "";

    populateDropdown(_model__WEBPACK_IMPORTED_MODULE_0__.allProjectsArr);
    div.appendChild(projDropdownLabel);
    div.appendChild(projDropdown);
    div.appendChild(taskLabel);
    div.appendChild(taskInput);
    div.appendChild(taskDescriptionLabel);
    div.appendChild(taskDescriptionInput);
    div.appendChild(taskDueDateLabel);
    div.appendChild(taskDueDateInput);
    div.appendChild(taskPriorityWrapper);
}



/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   thisistheview: () => (/* binding */ thisistheview)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _newProjectForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectForm.js */ "./src/newProjectForm.js");
/* harmony import */ var _newTaskForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTaskForm.js */ "./src/newTaskForm.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
//the view handles how the UI is displayed. Only talks to controller. 



 //maybe move


function thisistheview(){

    let domCachedElements = {
        container: document.querySelector(".container"),
        addbutton: document.querySelector(".btn-add"),
        viewAllProjectsBtn: document.querySelector(".btn-allproj"),
        taskbox: document.querySelector(".taskbox"),
   }

   domCachedElements.viewAllProjectsBtn.addEventListener("click", viewAllProjects);

   function viewAllProjects(){
        //1. clears project display area 
        removeChildren(domCachedElements.taskbox);
        //2. loops over all projects array (if arr not empty) & creates project card for each project & append to taskbox
        if (_model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr.length != 0){
            _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr.forEach(createProjectItemCard);
        }
   }

//callback from foreach above
   function createProjectItemCard (item, index){
        //create elements, 
        let projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        let projectTitle = document.createElement("h5");
        projectTitle.textContent = _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr[index].name; 
        projectItem.appendChild(projectTitle);

        let projectTaskNo = document.createElement("p");
        projectTaskNo.classList.add("project-item-taskno");
        projectTaskNo.textContent = "7 active tasks"; /*This will be updated to fetch number */
        //call 

        //how to access value of 'name' key from object in array 
   
       
   
   // get the keys from first object in array
// const keys = Object.keys(allProjectsArr[0]);
// console.log("keys: " + keys);

// for (const obj of allProjectsArr) {
//   // get values for current object
//   const values = Object.values(obj);
//   console.log(`Object: ${JSON.stringify(obj)}, Keys: ${keys}, Values: 
// ${values}`);
// }



        projectItem.appendChild(projectTaskNo);

        let projectItemWrapper = document.createElement("div");
        projectItemWrapper.classList.add("project-item-wrapper");
        projectItem.appendChild(projectItemWrapper);

            let projectItemEditBtn = document.createElement("button");
            projectItemEditBtn.classList.add("project-item-editbtn");

                let projectItemEditIcon = document.createElement("img");
                projectItemEditIcon.setAttribute("src", "/src/images/edit.png");
                projectItemEditBtn.appendChild(projectItemEditIcon);

            projectItemWrapper.appendChild(projectItemEditBtn);
            //code to add project due date if including?

            //3. append each project cards to  display area (domCachedElements.taskbox)
            domCachedElements.taskbox.appendChild(projectItem);
   }



















// --------- CREATE NEW - MODAL ----------------
    let modalElements = {
        submitButton: document.querySelector('button[type="submit"]'),
        clearButton: document.querySelector('button.clear-btn'),
        modal: document.querySelector(".modal"),
        overlay: document.querySelector(".overlay"),
        closeModalBtn: document.querySelector(".btn-close")
    }

   //opens modal to create new project/task
   const openModal = function () {
        modalElements.modal.classList.remove("hidden");
        modalElements.overlay.classList.remove("hidden");
        clearInputValues();
    };
    //add event listener to open modal on click
    domCachedElements.addbutton.addEventListener("click", openModal);

    //closes modal
    const closeModal = function () {
        modalElements.modal.classList.add("hidden");
        modalElements.overlay.classList.add("hidden");
    };
    //add event listener to close modal on click
    modalElements.closeModalBtn.addEventListener("click", closeModal);
    modalElements.overlay.addEventListener("click", closeModal);
    modalElements.submitButton.addEventListener("click", closeModal);





    let projNameInput =  document.querySelector("#projName");

    let selectedProject = document.querySelector('#projDropdown'); 
    let taskNameInput = document.querySelector("#taskName");
    let taskDescriptionInput = document.querySelector('#taskDesc');
    let taskDueDateInput = document.querySelector('#taskDueDate');
    let taskPriority = document.querySelector('.taskPriority_radio');

    let div = document.querySelector("div.create-modal-input-area");



    let createNewElements = {
        toggleInput: document.querySelector('input#toggleInput[type="checkbox"]'),
        
        toggleModalDisplay: function (){
            let div = document.querySelector("div.create-modal-input-area");

            if (createNewElements.toggleInput.checked){ //Add New Task shows (toggle checked)
                clearInputValues();
                removeChildren(div);
                (0,_newTaskForm_js__WEBPACK_IMPORTED_MODULE_2__.newTaskForm)(); //load New Task Inputs
              } else { //Add New Project Shows (toggle not checked)
                clearInputValues();
                removeChildren(div);
                (0,_newProjectForm_js__WEBPACK_IMPORTED_MODULE_1__.newProjectForm)();
              };
        }
    }

    function removeChildren(element){
        if (element.hasChildNodes){
            while (element.firstChild) {
                element.removeChild(element.firstChild);
              }
        }
    }
    //project/task toggle
    createNewElements.toggleInput.addEventListener("click", createNewElements.toggleModalDisplay);



    //SUBMIT BUTTON
    modalElements.submitButton.addEventListener('click', function(event){
    //this function may need to be moved to controller
    //get the value from the inputs, pass to controller 
    //(controller wil pass to model, to display on screen )
        event.preventDefault();
        //get latest values
        projNameInput =  document.querySelector("#projName");
        
        if (div.classList.contains("showTaskModule")){
            //get task data
            selectedProject = document.querySelector('#projDropdown'); 
            taskNameInput = document.querySelector("#taskName");
            taskDescriptionInput = document.querySelector('#taskDesc');
            taskDueDateInput = document.querySelector('#taskDueDate');
            taskPriority = document.querySelector('.taskPriority_radio'); //how to get selected value


            let selectedProjName = selectedProject.value;  //needs to get selected project name and save to variable. If none selected, use default. 
            let taskName = taskNameInput.value;
            let taskDescription = taskDescriptionInput.value;
            let taskDueDate = taskDueDateInput.value;

            console.log ("selectedProject: " + selectedProjName);
            console.log ("taskName: " + taskName);
            console.log ("taskDescription: " + taskDescription);
            console.log ("taskDueDate: " + taskDueDate);



        //else if div has class of project
        } else if (div.classList.contains("showProjModule")){
            let projectName = projNameInput.value;
            (0,_controller_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projectName); //in controller
            viewAllProjects();
        }
    });
 
    //CLEAR BUTTON
    modalElements.clearButton.addEventListener('click', clearInputValues);

    function clearInputValues(){
        //get latest values
        taskNameInput = document.querySelector("#taskName");
        taskDescriptionInput = document.querySelector('#taskDesc');
        projNameInput =  document.querySelector("#projName");

        if (taskNameInput !== null && taskDescriptionInput !==null){
            taskNameInput.value = "";
            taskDescriptionInput.value = "";
        } else if (projNameInput.value !== null){
            projNameInput.value = "";
        }
    }
}


/***/ }),

/***/ "./src/fonts/Nunito-Italic-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/Nunito-Italic-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c3b61b77fee2ba4b6db.ttf";

/***/ }),

/***/ "./src/fonts/Nunito-VariableFont_wght.ttf":
/*!************************************************!*\
  !*** ./src/fonts/Nunito-VariableFont_wght.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a3eef3e0a61b7eb3eda.ttf";

/***/ }),

/***/ "./src/images/crystals.png":
/*!*********************************!*\
  !*** ./src/images/crystals.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be219d064e2a29934bc2.png";

/***/ }),

/***/ "./src/images/low-poly-grid-haikei.png":
/*!*********************************************!*\
  !*** ./src/images/low-poly-grid-haikei.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32c8df3341cc222f503a.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/controller.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBOzs7QUFHQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0EsT0FBTyx1RkFBdUYsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLGVBQWUsVUFBVSx1Q0FBdUMsTUFBTSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLEtBQUssU0FBUyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVkseUJBQXlCLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsU0FBUyxTQUFTLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsd0JBQXdCLHlCQUF5QixhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFFBQVEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLFFBQVEsT0FBTyxRQUFRLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxPQUFPLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLFlBQVksT0FBTyxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixL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QSxVQUFVO0FBQ1Y7QUFDQSxZQUFZLGdFQUFnQixlQUFlO0FBQzNDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pPQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvTnVuaXRvLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvTnVuaXRvLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltYWdlcy9sb3ctcG9seS1ncmlkLWhhaWtlaS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2ltYWdlcy9jcnlzdGFscy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIENTUyBmb3IgVG9EbyBMaXN0ICovXG4qe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ051bml0byc7XG59XG5cbjpyb290IHtcbiAgICAtLWdyYWRpZW50X2JnX2NvbG9yOiNlZGU1ZmQ7XG4gICAgLS1ncmFkaWVudF9zcG90MV9jb2xvcjojZTFjYmZiO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfdzogNzUlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfaDogNzUlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfeDogMCU7XG4gICAgLS1ncmFkaWVudF9zcG90MV95OiAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QyX2NvbG9yOiNmZmUwZDY7XG4gICAgLS1ncmFkaWVudF9zcG90Ml93OiA3NSU7XG4gICAgLS1ncmFkaWVudF9zcG90Ml9oOiA3NSU7XG4gICAgLS1ncmFkaWVudF9zcG90Ml94OiAxMDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfeTogMCU7XG4gICAgLS1ncmFkaWVudF9zcG90M19jb2xvcjojZWJlMGZmO1xuICAgIC0tZ3JhZGllbnRfc3BvdDNfdzogNzUlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDNfaDogNzUlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDNfeDogMTAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3k6IDEwMCU7XG4gICAgXG4gICAgLS1ncmFkaWVudF9zcG90NF9jb2xvcjojZmZkYmYzO1xuICAgIC0tZ3JhZGllbnRfc3BvdDRfdzogNzUlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDRfaDogNzUlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDRfeDogMCU7XG4gICAgLS1ncmFkaWVudF9zcG90NF95OiAxMDAlO1xuICAgIFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfdzoxMDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfeDo5NCU7XG4gICAgLS1ncmFkaWVudF9zcG90Ml9oOjQ0JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3c6NTElO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfaDo2NCU7XG4gICAgLS1ncmFkaWVudF9zcG90MV94OjclO1xuICAgIC0tZ3JhZGllbnRfc3BvdDNfdzoxMDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDNfaDo4MiU7XG4gICAgLS1ncmFkaWVudF9zcG90M194OjkwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3c6NjQlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDRfeDowJTtcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3k6NDUlO1xuXG4gICAgLyogUHJvamVjdCBDb2xvdXJzICovXG4gICAgLS1wcm9qZWN0X2NvbG9yMTogI0ZGRURENjtcbiAgICAtLXByb2plY3RfY29sb3IyOiAjRkZDQjlBO1xuICAgIC0tcHJvamVjdF9jb2xvcjM6ICNGOEFFRjk7XG4gICAgLS1wcm9qZWN0X2NvbG9yNDogI0I4REJGRDtcbiAgICAtLXByb2plY3RfY29sb3I1OiAjQzhCQUZBO1xuICAgIC0tcHJvamVjdF9jb2xvcjY6ICM4RkU0RTk7XG5cbiAgICAtLWRhcmtHcmV5OiAjMjUyQjNEO1xuICAgIC0tbWVkR3JleTogIzk0OTY5YjtcbiAgICAtLWxpZ2h0R3JleTogI2VlZTtcblxuICB9XG5cbiAgLndlbGNvbWUtdGV4dHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLXByb2plY3RfY29sb3I0KSAzMCUsIHZhcigtLXByb2plY3RfY29sb3I2KSAxMDAlKTsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIC8qIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmYTgzZmMsICNjYWJjZmIpOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XG4gIH1cblxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ051bml0byc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCdvcGVudHlwZScpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ29wZW50eXBlJyk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuICBcbiAgLmZhbmN5LWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmFkaWVudF9iZ19jb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QxX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QxX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDFfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QxX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90MV9jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QyX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QyX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDJfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QyX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90Ml9jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QzX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QzX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDNfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QzX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90M19jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3Q0X3cpIHZhcigtLWdyYWRpZW50X3Nwb3Q0X2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDRfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3Q0X3kpLCB2YXIoLS1ncmFkaWVudF9zcG90NF9jb2xvciksIHRyYW5zcGFyZW50KTtcbiAgfVxuXG4gXG4gIFxuLyogXG4gIC5hbmltYXRlZCB7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuQGtleWZyYW1lcyBjaGFtZWxlb24ge1xuXG4gICAgMCUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IxKTtcbiAgICB9XG4gICAgMTQuMjk5OSUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IyKTtcbiAgICB9XG4gICAgMjguNTk5OSUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IzKTtcbiAgICB9XG4gICAgNDIuODk5OCUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I0KTtcbiAgICB9XG4gICAgNTcuMTk5NiUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I1KTtcbiAgICB9XG4gICAgNzEuNDk5NSUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I2KTtcbiAgICB9XG4gICAgODUuNzk5NCUge1xuICAgICAgY29sb3I6IHZpb2xldDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxuICAuY2hhbWVsZW9uIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2hhbWVsZW9uO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIH0gICovXG4gIC8qIFRPIFVTRSwgQUREIENMQVNTIEFOSU1BVEUgQU5EIENMQVNTIENIQU1FTEVPTiAqL1xuICBcblxuYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuXG4gICAgLyogZm9udC1zaXplOiAxLjEyNXJlbTsgXG4gIGxpbmUtaGVpZ2h0OiAxLjU7ICAqL1xuXG5cbn1cblxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogODV2aDtcbiAgICB3aWR0aDogODV2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQzLCAyNDgsIDAuNjIyKTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQ2IDI0MyAyNDggLyA1NiUpOyAvKiBncmFkaWVudCBibGVuZCBpbnRvIGJnICAqL1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCBmbG9yYWx3aGl0ZTtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDJmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDEuNWZyIDAuNWZyIDNmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdiBoZWxsbyBwcm9qaGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYgaW5mbyBwcm9qZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hdiBoZWFkaW5nIHByb2plY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2IHRhc2tib3ggcHJvamVjdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6XG4gICAgICAgICAgICAgICAgICAgICAgICAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpO1xufVxuXG4ubmF2e1xuICAgIGdyaWQtYXJlYTogbmF2O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAwcHggMzBweCAwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCBsaWdodGdyYXk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubmF2IC5sb2dve1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbiAgIC8qIHN0eWluZyBvZiBidXR0b25zIG9uIGRhc2ggKi9cbiAgLmJ0bntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGdhcDoxMHB4O1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzk0OTY5YjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NEI1QjtcbiAgICAvKiBjb2xvcjogI2ZmOTRlYTsgKi9cbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItbGVmdDogc29saWQgNXB4ICNmZjk0ZWE7XG4gICAgLyogb3V0bGluZTogM3B4IHNvbGlkICNGOEFFRjk7ICovXG4gIH1cblxuICAuYnRuIGltZ3tcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgXG4gIH1cblxuLmhlbGxve1xuICAgIGdyaWQtYXJlYTogaGVsbG87XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UxY2JmYjsgKi9cbiAgICBjb2xvcjogIzMwMmIyYjtcbiAgICBjb2xvcjogdmFyKC0tZGFya0dyZXkpO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbWctaGFuZHtcbiAgICB3aWR0aDogMTElO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG4uaW5mb3tcbiAgICBncmlkLWFyZWE6IGluZm87XG4gIFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzNiwyMjQsMjUzLDEpIDUxJSwgcmdiYSgyMzgsMjM4LDIzOCwxKSA5OSUpOyAgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywxKSA1MSUsIHJnYmEoMjQ2LDIzNywyNDMsMSkgOTklKTsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlYmUwZmY7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJveC1zaGFkb3c6XG4gICAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcbiAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxuICAgIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcbiAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3Mik7ICAqL1xuICAgXG5cbn1cblxuLmluZm86OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzNiwyMjQsMjUzLDAuMSkgMTElLCByZ2JhKDI0NiwyMzcsMjQzLDEpIDk5JSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTsgXG4gICAgXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggI2M2YWRmMjsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG5cbi5pbmZvLWl0ZW17XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzhhZWY4Oy8qIGJlc3QgY29sb3VyIG9uIG1hY21pbmkgICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmNzZmMzsgLyogYmVzdCBjb2xvciBvbiBtYWNib29rICovXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjYzZhZGYyO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjYzZhZGYyO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4ICMzYTQ3NGUyNiwgMCAxcHggMnB4ICMzYTQ3NGUyNjtcblxufVxuLmluZm8gc3Ryb25ne1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgIFxufVxuXG4uaW5mby1pdGVtOmhvdmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZhZGYyO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNiNDkxZjE7ICovXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggNXB4IHdoaXRlc21va2U7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjZDFiY2Y4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZDFiY2Y4O1xufVxuXG4uaGVhZGluZ3tcbiAgICBncmlkLWFyZWE6IGhlYWRpbmc7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjojZWRlNWZkOyAqL1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGdhcDogNXB4O1xufVxuXG4vKiBBTEwgUFJPSkVDVFMgRElTUExBWSAqL1xuLnRhc2tib3h7XG4gICAgZ3JpZC1hcmVhOiB0YXNrYm94O1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xufVxuXG4gICAgLnByb2plY3QtaXRlbXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAvKiBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4OyAqL1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggIzNhNDc0ZTI2LCAwIDFweCAycHggIzNhNDc0ZTI2O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGREUxREI7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2ZiZGVkNztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmYmRlZDc7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgICB9XG5cbiAgICAucHJvamVjdC1pdGVtIGg1e1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIH1cblxuICAgIHAucHJvamVjdC1pdGVtLXRhc2tubyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLW1lZEdyZXkpO1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgfVxuICAgIGRpdi5wcm9qZWN0LWl0ZW0td3JhcHBlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cbiAgICBidXR0b24ucHJvamVjdC1pdGVtLWVkaXRidG57XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIFxuICAgIC8qIHByb2plY3QtaXRlbSBob3ZlcnMgKi9cbiAgICAucHJvamVjdC1pdGVtOmhvdmVye1xuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNmOGVjZTk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZjhlY2U5O1xuICAgIH1cbiAgICBidXR0b24ucHJvamVjdC1pdGVtLWVkaXRidG46aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIH1cblxuXG5cblxuXG5cbi8qIFBST0pFQ1QgU0VDVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4ucHJvamhlYWRpbmd7XG4gICAgZ3JpZC1hcmVhOiBwcm9qaGVhZGluZztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogdmFyKC0tZGFya0dyZXkpO1xuICAgIGRpc3BsYXk6ZmxleDtcblxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW4tdG9wOi0yMHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG5cbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB6LWluZGV4OjE7XG5cbn1cbiAgICBcblxuLnByb2plY3R7XG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IC01cHggLTQ2cHggNThweCAtMjBweCBsaWdodGdyZXk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgOTUlO1xufVxuXG5oMi5wcm9qZWN0LWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0IGgzLFxuLmdyYWRpZW50LWgze1xuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLyogY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I1KTsgKi9cbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTsgKi9cblxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmYTgzZmMsICNjYWJjZmIpO1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIGRldGFpbHMgKi9cbi5wcm9qZWN0LXRhc2staXRlbXtcbiAgICBiYWNrZ3JvdW5kOiNlZWVlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4ICMzYTQ3NGUyNiwgMCAxcHggMnB4ICMzYTQ3NGUyNjtcbn1cblxuXG5pbWcucHJvamVjdC10YXNrLWVkaXRidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5cbnN1bW1hcnkge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xufVxuXG4ucHJvamVjdC10YXNrLXByaW9yaXR5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I2KTtcbiAgICBjb2xvcjogIzAwOGI5MjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAxcHggMTVweDtcbn1cbmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmxvd1ByaW9yaXR5e1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I2KTtcbiAgICBjb2xvcjogIzAwOGI5MjsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNCk7XG4gICAgY29sb3I6ICMwMDgwZmQ7XG59XG5cbi5oaWdoUHJpb3JpdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjMpO1xuICAgIGNvbG9yOiNkMDAyZDQ7XG59XG5cbi5tZWRQcmlvcml0eXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMik7XG4gICAgY29sb3I6ICNlMTZkMDE7XG59XG5cbi5wcm9qZWN0LXRhc2stZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5cblxuLnByb2plY3QtdGFzay1pbWd7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xuICAgIGNvbG9yOiB2YXIoLS1tZWRHcmV5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50O1xufSBcbiAgICBcblxuXG5cblxuXG4vKiBQT1AgVVBTLyBNT0RBTFMgICovXG5cbi8qIENyZWF0ZS8gQWRkIE5ldy4uLiAgKi9cbi5tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMS40cmVtO1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICAvKiBwYWRkaW5nOiAxLjNyZW07ICovXG4gICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcGluaztcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICBib3gtc2hhZG93OiBcbiAgICAgICAgICAwcHggNDNweCA3OXB4IC0yMHB4ICNhZjg2YzAsIFxuICAgICAgICAgIDM0cHggLTEycHggODBweCAtMjBweCAjZmNkN2U0ZDQ7XG5cbiAgICAgICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgICAtMzFweCAyMHB4IDYzcHggLTIwcHggI2FmODZjMCwgXG4gICAgICAgICAgMTNweCAtMzVweCA2M3B4IC0ycHggI2ZjZDdlNGZhO1xuXG4gIH1cblxuICAuY3JlYXRlLW1vZGFsLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTUycHg7XG4gICAgbGVmdDogNDQlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogc29saWQgNHB4IHBpbms7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG5cbiAgLm1vZGFsIGgzIHtcbiAgICBtYXJnaW46IDIwcHggYXV0byAxMHB4O1xufVxuICBcbiAgIC5tb2RhbCAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9IFxuXG5cbi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiAgIFxuICAubW9kYWwgaW5wdXQsXG4gIHNlbGVjdCNwcm9qRHJvcGRvd24ge1xuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cbiAgXG4gIC5tb2RhbCBwIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogIzc3NztcbiAgICBtYXJnaW46IDAuNHJlbSAwIDAuMnJlbTtcbiAgfVxuICBcbiAgLmNyZWF0ZS1tb2RhbC1idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBzZWxlY3QjcHJvakRyb3Bkb3duIHtcbiAgICB3aWR0aDogNDclO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgLyogZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4IGxpZ2h0Z3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7ICovXG59XG5cbiAgXG4gIC5jcmVhdGUtbW9kYWwtYnV0dG9ucyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogcGluaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogc29saWQgM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG5cbiAgLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzQzQTNFOCwgIzBFREJERCk7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4uY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uIGltZ3tcbiAgd2lkdGg6IDI1cHg7XG59XG5cblxuICBidXR0b25bdHlwZT1cInN1Ym1pdFwiXXtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggcGluaztcbiAgfVxuICBcbiAgLmJ0bi1jbG9zZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA1LCA5NywgODIsIDAuNSk7XG4gICAgXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIGlucHV0I3Rhc2tEdWVkYXRlIHtcbiAgICB3aWR0aDogNDclO1xufVxuXG4vKiBQUklPUklUWSBSQURJTyBJTiBORVdUQVNLIEZPUk0gKi9cbi50YXNrUHJpb3JpdHlfcmFkaW8ge1xuXHRiYWNrZ3JvdW5kOiAjNDU0ODU3O1xuXHRwYWRkaW5nOiA0cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDNweCByZ2JhKDM1LCAzMywgNDUsIDAuMyksXG5cdFx0MCAwIDAgM3B4IHJnYmEoMTg1LCAxODUsIDE4NSwgMC4zKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDclO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhc2tQcmlvcml0eV9yYWRpbyBpbnB1dCB7XG5cdHdpZHRoOiBhdXRvO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdHBhZGRpbmc6IDRweCAxMHB4O1xuIFxuXHRiYWNrZ3JvdW5kOiAjNDU0ODU3O1xuXHRjb2xvcjogI2JkYmRiZGJkO1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuXHRmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuXHRcdFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcblx0XHRcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuXHR0cmFuc2l0aW9uOiBhbGwgMTAwbXMgbGluZWFyO1xuICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyAqL1xufVxuXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0OmNoZWNrZWQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTVkODkxLCAjNzRiYmFkKTtcblx0Y29sb3I6ICNmZmY7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDFweCAjMDAwMDAwMmU7XG5cdHRleHQtc2hhZG93OiAwIDFweCAwcHggIzc5NDg1ZjdhO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0I3Rhc2tQcmlvcml0eV9tZWQ6Y2hlY2tlZCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0M0EzRTgsICMwRURCREQpO1xufVxuXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0I3Rhc2tQcmlvcml0eV9oaWdoOmNoZWNrZWQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRjhBRUY5LCAjY2FiY2ZiKTtcbn1cblxuLnRhc2tQcmlvcml0eV9yYWRpbyBpbnB1dDpiZWZvcmUge1xuXHRjb250ZW50OiBhdHRyKGxhYmVsKTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuLyogQ1VSUkVOVCBUQVNLICAtIHJlbW92ZSBhbGwgcmVmZXJlbmNlcyB0byBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggICovXG5cblxuXG5cbiAgLyogVGFzay9Qcm9qZWN0IFN3aXRjaGVyIGluc2lkZSBNb2RhbCAqL1xuZGl2LmNyZWF0ZS1tb2RhbC1zZWxlY3QtdHlwZXtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4IHJnYigzNSAzMyA0NSAvIDAlKSwgMCAwIDAgM3B4IHJnYigxODUgMTg1IDE4NSAvIDE2JSk7XG59XG5cbi8qc2VsZWN0ZWQgc2lkZSovXG5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qICBiZyBvZiBUYXNrIHdoZW4gbm90IHNlbGVjdGVkKi9cbi8qIC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggPiBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXJ7ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVye1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscGluaywgbGF2ZW5kZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiB0ZXh0IG9mIFRhc2sgd2hlbiBub3Qgc2VsZWN0ZWQgICovXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoID4gbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmJlZm9yZXsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qIFRhc2sgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdG9wOiA3cHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi8qICBwcm9qZWN0IHNlbGVjdGVkICovXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoID4gbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmFmdGVyeyAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOjphZnRlcntcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTsgLyogUHJvamVjdCAqL1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDJweDtcbiAgICB0b3A6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDZweCAtMnB4ICMxMTE7ICovXG4gICAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXsgKi9cbiAgaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjhweDtcbiAgICBsZWZ0OiA0NCU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLyogIHNldCBiZyBhbmQgdGV4dCBvbiBwcm9qZWN0LCBub3Qgc2VsZWN0ZWQgKi9cbmlucHV0I3RvZ2dsZUlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVye1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscGluaywgbGF2ZW5kZXIpO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLyogIFNldHMgYmcgb2YgVGFzayB3aGVuIHNlbGVjdGVkKi9cbmlucHV0I3RvZ2dsZUlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmFmdGVye1xuICBjb250ZW50OiBhdHRyKGRhdGEtb24pOyAvKlRhc2tzKi9cbiAgbGVmdDogNjhweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpOyAvKlByb2plY3QgKi9cbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAyMHB4O1xufVxuXG5cbi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cy12aXNpYmxle1xuICBvdXRsaW5lOiBzb2xpZCAxcHggI2FmNzZmMztcbiBcbn1cblxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2NXB4KXtcblxuICBkaXYuY29udGFpbmVye1xuICAgIHdpZHRoOiA5OHZ3O1xuICAgIGhlaWdodDogOTh2aDtcbiAgfVxufVxuXG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjtBQUN0QjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsd0JBQXdCOztJQUV4Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsd0JBQXdCOztJQUV4Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHNCQUFzQjs7SUFFdEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCOztJQUV6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7RUFFbkI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsK0ZBQStGO0lBQy9GLGtCQUFrQjtJQUNsQixhQUFhOztJQUViLDJEQUEyRDtJQUMzRDs7MkNBRXVDO0lBQ3ZDLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQjs4REFD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Q2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQSxvQ0FBb0M7QUFDcEMsdUVBQXVFO3dCQUMvQztJQUNwQixzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBLHNCQUFzQjtBQUN0Qix1RUFBdUU7MEJBQzdDO0lBQ3RCLHVCQUF1QixFQUFFLFlBQVk7SUFDckMsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtBQUNwQjs7O0FBR0EsbURBQW1EO0VBQ2pEO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUEsOENBQThDO0FBQzlDO0VBQ0UsaURBQWlEO0VBQ2pELFdBQVc7QUFDYjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxzQkFBc0IsRUFBRSxRQUFRO0VBQ2hDLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCLEVBQUUsV0FBVztJQUNwQyxXQUFXO0lBQ1gsVUFBVTtBQUNkOzs7QUFHQTtFQUNFLDBCQUEwQjs7QUFFNUI7Ozs7O0FBS0E7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1NTIGZvciBUb0RvIExpc3QgKi9cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ051bml0byc7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1ncmFkaWVudF9iZ19jb2xvcjojZWRlNWZkO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX2NvbG9yOiNlMWNiZmI7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfdzogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX2g6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90MV94OiAwJTtcXG4gICAgLS1ncmFkaWVudF9zcG90MV95OiAwJTtcXG4gICAgLS1ncmFkaWVudF9zcG90Ml9jb2xvcjojZmZlMGQ2O1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3c6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90Ml9oOiA3NSU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfeDogMTAwJTtcXG4gICAgLS1ncmFkaWVudF9zcG90Ml95OiAwJTtcXG4gICAgLS1ncmFkaWVudF9zcG90M19jb2xvcjojZWJlMGZmO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3c6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90M19oOiA3NSU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfeDogMTAwJTtcXG4gICAgLS1ncmFkaWVudF9zcG90M195OiAxMDAlO1xcbiAgICBcXG4gICAgLS1ncmFkaWVudF9zcG90NF9jb2xvcjojZmZkYmYzO1xcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3c6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90NF9oOiA3NSU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfeDogMCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfeTogMTAwJTtcXG4gICAgXFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfdzoxMDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3g6OTQlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX2g6NDQlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3c6NTElO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX2g6NjQlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3g6NyU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfdzoxMDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2g6ODIlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3g6OTAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3c6NjQlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3g6MCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfeTo0NSU7XFxuXFxuICAgIC8qIFByb2plY3QgQ29sb3VycyAqL1xcbiAgICAtLXByb2plY3RfY29sb3IxOiAjRkZFREQ2O1xcbiAgICAtLXByb2plY3RfY29sb3IyOiAjRkZDQjlBO1xcbiAgICAtLXByb2plY3RfY29sb3IzOiAjRjhBRUY5O1xcbiAgICAtLXByb2plY3RfY29sb3I0OiAjQjhEQkZEO1xcbiAgICAtLXByb2plY3RfY29sb3I1OiAjQzhCQUZBO1xcbiAgICAtLXByb2plY3RfY29sb3I2OiAjOEZFNEU5O1xcblxcbiAgICAtLWRhcmtHcmV5OiAjMjUyQjNEO1xcbiAgICAtLW1lZEdyZXk6ICM5NDk2OWI7XFxuICAgIC0tbGlnaHRHcmV5OiAjZWVlO1xcblxcbiAgfVxcblxcbiAgLndlbGNvbWUtdGV4dHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tcHJvamVjdF9jb2xvcjQpIDMwJSwgdmFyKC0tcHJvamVjdF9jb2xvcjYpIDEwMCUpOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIC8qIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmYTgzZmMsICNjYWJjZmIpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcbiAgfVxcblxcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvTnVuaXRvLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgnb3BlbnR5cGUnKSxcXG4gICAgdXJsKCcuL2ZvbnRzL051bml0by1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCdvcGVudHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbiAgXFxuICAuZmFuY3ktZ3JhZGllbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmFkaWVudF9iZ19jb2xvcik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCh2YXIoLS1ncmFkaWVudF9zcG90MV93KSB2YXIoLS1ncmFkaWVudF9zcG90MV9oKSBhdCBsZWZ0IHZhcigtLWdyYWRpZW50X3Nwb3QxX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90MV95KSwgdmFyKC0tZ3JhZGllbnRfc3BvdDFfY29sb3IpLCB0cmFuc3BhcmVudCksIHJhZGlhbC1ncmFkaWVudCh2YXIoLS1ncmFkaWVudF9zcG90Ml93KSB2YXIoLS1ncmFkaWVudF9zcG90Ml9oKSBhdCBsZWZ0IHZhcigtLWdyYWRpZW50X3Nwb3QyX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90Ml95KSwgdmFyKC0tZ3JhZGllbnRfc3BvdDJfY29sb3IpLCB0cmFuc3BhcmVudCksIHJhZGlhbC1ncmFkaWVudCh2YXIoLS1ncmFkaWVudF9zcG90M193KSB2YXIoLS1ncmFkaWVudF9zcG90M19oKSBhdCBsZWZ0IHZhcigtLWdyYWRpZW50X3Nwb3QzX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90M195KSwgdmFyKC0tZ3JhZGllbnRfc3BvdDNfY29sb3IpLCB0cmFuc3BhcmVudCksIHJhZGlhbC1ncmFkaWVudCh2YXIoLS1ncmFkaWVudF9zcG90NF93KSB2YXIoLS1ncmFkaWVudF9zcG90NF9oKSBhdCBsZWZ0IHZhcigtLWdyYWRpZW50X3Nwb3Q0X3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90NF95KSwgdmFyKC0tZ3JhZGllbnRfc3BvdDRfY29sb3IpLCB0cmFuc3BhcmVudCk7XFxuICB9XFxuXFxuIFxcbiAgXFxuLyogXFxuICAuYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgfVxcbkBrZXlmcmFtZXMgY2hhbWVsZW9uIHtcXG5cXG4gICAgMCUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMSk7XFxuICAgIH1cXG4gICAgMTQuMjk5OSUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMik7XFxuICAgIH1cXG4gICAgMjguNTk5OSUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMyk7XFxuICAgIH1cXG4gICAgNDIuODk5OCUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNCk7XFxuICAgIH1cXG4gICAgNTcuMTk5NiUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNSk7XFxuICAgIH1cXG4gICAgNzEuNDk5NSUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XFxuICAgIH1cXG4gICAgODUuNzk5NCUge1xcbiAgICAgIGNvbG9yOiB2aW9sZXQ7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbiAgfVxcbiAgLmNoYW1lbGVvbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFtZWxlb247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgfSAgKi9cXG4gIC8qIFRPIFVTRSwgQUREIENMQVNTIEFOSU1BVEUgQU5EIENMQVNTIENIQU1FTEVPTiAqL1xcbiAgXFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMjIyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxuXFxuICAgIC8qIGZvbnQtc2l6ZTogMS4xMjVyZW07IFxcbiAgbGluZS1oZWlnaHQ6IDEuNTsgICovXFxuXFxuXFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICB3aWR0aDogODV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI0MywgMjQ4LCAwLjYyMik7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDYgMjQzIDI0OCAvIDU2JSk7IC8qIGdyYWRpZW50IGJsZW5kIGludG8gYmcgICovXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCBmbG9yYWx3aGl0ZTtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxLjVmciAwLjVmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJuYXYgaGVsbG8gcHJvamhlYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJuYXYgaW5mbyBwcm9qZWN0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwibmF2IGhlYWRpbmcgcHJvamVjdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hdiB0YXNrYm94IHByb2plY3RcXFwiO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpO1xcbn1cXG5cXG4ubmF2e1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAwcHggMzBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IGxpZ2h0Z3JheTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubmF2IC5sb2dve1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG59XFxuXFxuICAgLyogc3R5aW5nIG9mIGJ1dHRvbnMgb24gZGFzaCAqL1xcbiAgLmJ0bntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDoxMHB4O1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICM5NDk2OWI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0QjVCO1xcbiAgICAvKiBjb2xvcjogI2ZmOTRlYTsgKi9cXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggI2ZmOTRlYTtcXG4gICAgLyogb3V0bGluZTogM3B4IHNvbGlkICNGOEFFRjk7ICovXFxuICB9XFxuXFxuICAuYnRuIGltZ3tcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBcXG4gIH1cXG5cXG4uaGVsbG97XFxuICAgIGdyaWQtYXJlYTogaGVsbG87XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMWNiZmI7ICovXFxuICAgIGNvbG9yOiAjMzAyYjJiO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5pbWctaGFuZHtcXG4gICAgd2lkdGg6IDExJTtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcblxcbi5pbmZve1xcbiAgICBncmlkLWFyZWE6IGluZm87XFxuICBcXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjM2LDIyNCwyNTMsMSkgNTElLCByZ2JhKDIzOCwyMzgsMjM4LDEpIDk5JSk7ICAqL1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywxKSA1MSUsIHJnYmEoMjQ2LDIzNywyNDMsMSkgOTklKTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlYmUwZmY7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogYm94LXNoYWRvdzpcXG4gICAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXG4gICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcXG4gICAgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxcbiAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3Mik7ICAqL1xcbiAgIFxcblxcbn1cXG5cXG4uaW5mbzo6YmVmb3Jle1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjM2LDIyNCwyNTMsMC4xKSAxMSUsIHJnYmEoMjQ2LDIzNywyNDMsMSkgOTklKSwgdXJsKCcvc3JjL2ltYWdlcy9sb3ctcG9seS1ncmlkLWhhaWtlaS5wbmcnKTsgXFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMHB4IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCAjYzZhZGYyOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICBib3R0b206IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcblxcbi5pbmZvLWl0ZW17XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2M4YWVmODsvKiBiZXN0IGNvbG91ciBvbiBtYWNtaW5pICAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY3NmYzOyAvKiBiZXN0IGNvbG9yIG9uIG1hY2Jvb2sgKi9cXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjYzZhZGYyO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2M2YWRmMjtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggIzNhNDc0ZTI2LCAwIDFweCAycHggIzNhNDc0ZTI2O1xcblxcbn1cXG4uaW5mbyBzdHJvbmd7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICBcXG59XFxuXFxuLmluZm8taXRlbTpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZhZGYyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYjQ5MWYxOyAqL1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA1cHggd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjZDFiY2Y4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2QxYmNmODtcXG59XFxuXFxuLmhlYWRpbmd7XFxuICAgIGdyaWQtYXJlYTogaGVhZGluZztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjojZWRlNWZkOyAqL1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4vKiBBTEwgUFJPSkVDVFMgRElTUExBWSAqL1xcbi50YXNrYm94e1xcbiAgICBncmlkLWFyZWE6IHRhc2tib3g7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG59XFxuXFxuICAgIC5wcm9qZWN0LWl0ZW17XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luOiA4cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7ICovXFxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggIzNhNDc0ZTI2LCAwIDFweCAycHggIzNhNDc0ZTI2O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkRFMURCO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjZmJkZWQ3O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmYmRlZDc7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtaXRlbSBoNXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgfVxcblxcbiAgICBwLnByb2plY3QtaXRlbS10YXNrbm8ge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLW1lZEdyZXkpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC03cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XFxuICAgIH1cXG4gICAgZGl2LnByb2plY3QtaXRlbS13cmFwcGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIH1cXG4gICAgYnV0dG9uLnByb2plY3QtaXRlbS1lZGl0YnRue1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG4gIFxcbiAgICAvKiBwcm9qZWN0LWl0ZW0gaG92ZXJzICovXFxuICAgIC5wcm9qZWN0LWl0ZW06aG92ZXJ7XFxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNmOGVjZTk7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2Y4ZWNlOTtcXG4gICAgfVxcbiAgICBidXR0b24ucHJvamVjdC1pdGVtLWVkaXRidG46aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICAgIH1cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBQUk9KRUNUIFNFQ1RJT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5wcm9qaGVhZGluZ3tcXG4gICAgZ3JpZC1hcmVhOiBwcm9qaGVhZGluZztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luLXRvcDotMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHotaW5kZXg6MTtcXG5cXG59XFxuICAgIFxcblxcbi5wcm9qZWN0e1xcbiAgICBncmlkLWFyZWE6IHByb2plY3Q7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IC01cHggLTQ2cHggNThweCAtMjBweCBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9pbWFnZXMvY3J5c3RhbHMucG5nXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk1JSA5NSU7XFxufVxcblxcbmgyLnByb2plY3QtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0IGgzLFxcbi5ncmFkaWVudC1oM3tcXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIC8qIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNSk7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7ICovXFxuXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmYTgzZmMsICNjYWJjZmIpO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIGRldGFpbHMgKi9cXG4ucHJvamVjdC10YXNrLWl0ZW17XFxuICAgIGJhY2tncm91bmQ6I2VlZWVlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDE1cHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XFxufVxcblxcblxcbmltZy5wcm9qZWN0LXRhc2stZWRpdGJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGFzay1wcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjYpO1xcbiAgICBjb2xvcjogIzAwOGI5MjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxcHggMTVweDtcXG59XFxubGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmxvd1ByaW9yaXR5e1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XFxuICAgIGNvbG9yOiAjMDA4YjkyOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNCk7XFxuICAgIGNvbG9yOiAjMDA4MGZkO1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMyk7XFxuICAgIGNvbG9yOiNkMDAyZDQ7XFxufVxcblxcbi5tZWRQcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjIpO1xcbiAgICBjb2xvcjogI2UxNmQwMTtcXG59XFxuXFxuLnByb2plY3QtdGFzay1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcblxcblxcbi5wcm9qZWN0LXRhc2staW1ne1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCxcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgICBjb2xvcjogdmFyKC0tbWVkR3JleSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7XFxufSBcXG4gICAgXFxuXFxuXFxuXFxuXFxuXFxuLyogUE9QIFVQUy8gTU9EQUxTICAqL1xcblxcbi8qIENyZWF0ZS8gQWRkIE5ldy4uLiAgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjRyZW07XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgLyogcGFkZGluZzogMS4zcmVtOyAqL1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHBpbms7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHotaW5kZXg6IDI7XFxuXFxuICAgIGJveC1zaGFkb3c6IFxcbiAgICAgICAgICAwcHggNDNweCA3OXB4IC0yMHB4ICNhZjg2YzAsIFxcbiAgICAgICAgICAzNHB4IC0xMnB4IDgwcHggLTIwcHggI2ZjZDdlNGQ0O1xcblxcbiAgICAgICAgICBib3gtc2hhZG93OiBcXG4gICAgICAgICAgLTMxcHggMjBweCA2M3B4IC0yMHB4ICNhZjg2YzAsIFxcbiAgICAgICAgICAxM3B4IC0zNXB4IDYzcHggLTJweCAjZmNkN2U0ZmE7XFxuXFxuICB9XFxuXFxuICAuY3JlYXRlLW1vZGFsLWljb257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNTJweDtcXG4gICAgbGVmdDogNDQlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggcGluaztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgfVxcblxcbiAgLm1vZGFsIGgzIHtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMTBweDtcXG59XFxuICBcXG4gICAubW9kYWwgLmZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH0gXFxuXFxuXFxuLmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhIHtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbiAgIFxcbiAgLm1vZGFsIGlucHV0LFxcbiAgc2VsZWN0I3Byb2pEcm9wZG93biB7XFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICB9XFxuICBcXG4gIC5tb2RhbCBwIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiAjNzc3O1xcbiAgICBtYXJnaW46IDAuNHJlbSAwIDAuMnJlbTtcXG4gIH1cXG4gIFxcbiAgLmNyZWF0ZS1tb2RhbC1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgc2VsZWN0I3Byb2pEcm9wZG93biB7XFxuICAgIHdpZHRoOiA0NyU7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICAvKiBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyAqL1xcbn1cXG5cXG4gIFxcbiAgLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcGluaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDNweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXG4gICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM0M0EzRTgsICMwRURCREQpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbiBpbWd7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuXFxuICBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl17XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItbGVmdDogc29saWQgM3B4IHBpbms7XFxuICB9XFxuICBcXG4gIC5idG4tY2xvc2Uge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA1LCA5NywgODIsIDAuNSk7XFxuICAgIFxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIGlucHV0I3Rhc2tEdWVkYXRlIHtcXG4gICAgd2lkdGg6IDQ3JTtcXG59XFxuXFxuLyogUFJJT1JJVFkgUkFESU8gSU4gTkVXVEFTSyBGT1JNICovXFxuLnRhc2tQcmlvcml0eV9yYWRpbyB7XFxuXFx0YmFja2dyb3VuZDogIzQ1NDg1NztcXG5cXHRwYWRkaW5nOiA0cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTBweDtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggcmdiYSgzNSwgMzMsIDQ1LCAwLjMpLFxcblxcdFxcdDAgMCAwIDNweCByZ2JhKDE4NSwgMTg1LCAxODUsIDAuMyk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQ3JTtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrUHJpb3JpdHlfcmFkaW8gaW5wdXQge1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTBweDtcXG5cXHRwYWRkaW5nOiA0cHggMTBweDtcXG4gXFxuXFx0YmFja2dyb3VuZDogIzQ1NDg1NztcXG5cXHRjb2xvcjogI2JkYmRiZGJkO1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG5cXHRmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG5cXHRcXHRcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuXFx0XFx0XFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMTAwbXMgbGluZWFyO1xcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgKi9cXG59XFxuXFxuLnRhc2tQcmlvcml0eV9yYWRpbyBpbnB1dDpjaGVja2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTVkODkxLCAjNzRiYmFkKTtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAxcHggIzAwMDAwMDJlO1xcblxcdHRleHQtc2hhZG93OiAwIDFweCAwcHggIzc5NDg1ZjdhO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi50YXNrUHJpb3JpdHlfcmFkaW8gaW5wdXQjdGFza1ByaW9yaXR5X21lZDpjaGVja2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDNBM0U4LCAjMEVEQkREKTtcXG59XFxuXFxuLnRhc2tQcmlvcml0eV9yYWRpbyBpbnB1dCN0YXNrUHJpb3JpdHlfaGlnaDpjaGVja2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRjhBRUY5LCAjY2FiY2ZiKTtcXG59XFxuXFxuLnRhc2tQcmlvcml0eV9yYWRpbyBpbnB1dDpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IGF0dHIobGFiZWwpO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbiAgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuLyogQ1VSUkVOVCBUQVNLICAtIHJlbW92ZSBhbGwgcmVmZXJlbmNlcyB0byBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggICovXFxuXFxuXFxuXFxuXFxuICAvKiBUYXNrL1Byb2plY3QgU3dpdGNoZXIgaW5zaWRlIE1vZGFsICovXFxuZGl2LmNyZWF0ZS1tb2RhbC1zZWxlY3QtdHlwZXtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggcmdiKDM1IDMzIDQ1IC8gMCUpLCAwIDAgMCAzcHggcmdiKDE4NSAxODUgMTg1IC8gMTYlKTtcXG59XFxuXFxuLypzZWxlY3RlZCBzaWRlKi9cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICM0MjQyNDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qICBiZyBvZiBUYXNrIHdoZW4gbm90IHNlbGVjdGVkKi9cXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoID4gbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyeyAqL1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXJ7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHBpbmssIGxhdmVuZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiB0ZXh0IG9mIFRhc2sgd2hlbiBub3Qgc2VsZWN0ZWQgICovXFxuLyogLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCA+IGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjpiZWZvcmV7ICovXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qIFRhc2sgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRvcDogN3B4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi8qICBwcm9qZWN0IHNlbGVjdGVkICovXFxuLyogLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCA+IGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjphZnRlcnsgICovXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6OmFmdGVye1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTsgLyogUHJvamVjdCAqL1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDJweDtcXG4gICAgdG9wOiAycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCA2cHggLTJweCAjMTExOyAqL1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG5cXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17ICovXFxuICBpbnB1dCN0b2dnbGVJbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjhweDtcXG4gICAgbGVmdDogNDQlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLyogIHNldCBiZyBhbmQgdGV4dCBvbiBwcm9qZWN0LCBub3Qgc2VsZWN0ZWQgKi9cXG5pbnB1dCN0b2dnbGVJbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXJ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscGluaywgbGF2ZW5kZXIpO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi8qICBTZXRzIGJnIG9mIFRhc2sgd2hlbiBzZWxlY3RlZCovXFxuaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmFmdGVye1xcbiAgY29udGVudDogYXR0cihkYXRhLW9uKTsgLypUYXNrcyovXFxuICBsZWZ0OiA2OHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmlucHV0I3RvZ2dsZUlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpOyAvKlByb2plY3QgKi9cXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDIwcHg7XFxufVxcblxcblxcbi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMtdmlzaWJsZXtcXG4gIG91dGxpbmU6IHNvbGlkIDFweCAjYWY3NmYzO1xcbiBcXG59XFxuXFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2NXB4KXtcXG5cXG4gIGRpdi5jb250YWluZXJ7XFxuICAgIHdpZHRoOiA5OHZ3O1xcbiAgICBoZWlnaHQ6IDk4dmg7XFxuICB9XFxufVxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vL091ciBtYWluIGZpbGUgLSBoYW5kbGVzIHJlcXVlc3RzLiBcbi8vVGVsbHMgTU9ERUwgd2hhdCB0byBkbyAobG9naWMgd2lzZSksIFxuLy90ZWxscyBWSUVXIHdoYXQgZG8gdG8gKGRpc3BsYXkgd2lzZSlcbi8vQ29udHJvbHMgYW5kIGRlY2lkZXMgaG93IGRhdGEgaXMgZGlzcGxheWVkXG5pbXBvcnQgeyB0aGlzaXN0aGV2aWV3IH0gZnJvbSAnLi92aWV3LmpzJztcbmltcG9ydCB7IGFsbFByb2plY3RzQXJyIH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0TW9kZWwgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2tNb2RlbCB9IGZyb20gJy4vbW9kZWwuanMnO1xuXG5cblxuLy9pbml0aXRhdGlvbiBmdW5jdGlvbi8gbG9hZHMgdGhlIHZpZXdcbnRoaXNpc3RoZXZpZXcoKTtcblxuXG5cblxuXG5cblxuXG4vL2Z1bmN0aW9uIHRoYXQgcnVucyB3aGVuIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZFxuIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2pOYW1lKXtcbiAgICAvL3RoaXMgc2hvdWxkIGJlIGEgY2FsbCB0byBhIGZ1bmN0aW9uIGluc2lkZSBtb2RlbCwgcGFzc2luZyB0aGUgcHJvak5hbWUsIG1vZGVsIHdpbGwgY3JlYXRlIHRoZSBvYmplY3QgYW5kIHJldHVybiB0aGUgb2JqZWN0IHRvIGNvbnRyb2xsZXJcbiAgICBjcmVhdGVOZXdQcm9qZWN0TW9kZWwocHJvak5hbWUpOyAvL2luIG1vZGVsXG5cbiAgICAvL3Bhc3MgbmV3bHkgY3JlYXRlZCBvYmogdG8gdmlldyB0byBhZGQgY2FyZFxufVxuIFxuLy93aGVuIHByb2plY3QgaXMgY3JlYXRlZCwgcGFzcyBubyBvZiB0YXNrcyB0byB2aWV3IHRvIGRpc3BsYXlcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3VGFzayh0YXNrTmFtZSwgdGFza0Rlc2MsIHRhc2tEdWUsIHRhc2tQcmlvcml0eSwgaXNDb21wbGV0ZSwgcHJvamVjdE5hbWUpe1xuXG4gICAgY3JlYXRlTmV3VGFza01vZGVsKHRhc2tOYW1lLCB0YXNrRGVzYywgdGFza0R1ZSwgdGFza1ByaW9yaXR5LCBpc0NvbXBsZXRlLCBwcm9qZWN0TmFtZSk7IC8vaW4gbW9kZWxcblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBleHBvcnQgY29uc3QgcHViU3ViID0ge1xuLy8gICBldmVudHM6IHt9LFxuLy8gICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pe1xuLy8gICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldk5hbWV9YCk7XG4vLyAgICAgLy9hZGQgYW4gZXZlbnQgd2l0aCBhIG5hbWUgYXMgbmV3IG9yIHRvIGV4aXN0aW5nIGxpc3Rcbi8vICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXSB8fCBbXTtcbi8vICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLnB1c2goZm4pO1xuLy8gICB9LFxuLy8gICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZOYW1lLCBmbil7XG4vLyAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IFVOc3Vic2NyaWJlZCBmcm9tICR7ZXZOYW1lfWApO1xuLy8gICAgIC8vcmVtb3ZlIGFuIGV2ZW50IGZ1bmN0aW9uIGJ5IG5hbWVcbi8vICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSl7XG4vLyAgICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcihmID0+IGYgIT09IGZuKTtcbi8vICAgICB9XG4vLyAgIH0sXG4vLyAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2TmFtZSwgZGF0YSl7XG4vLyAgICAgY29uc29sZS5sb2coYFBVQlNVQjogTWFraW5nIGEgYnJvYWRjYXN0IGFib3V0ICR7ZXZOYW1lfSB3aXRoICR7ZGF0YX1gKTtcbi8vICAgICAvL2VtaXQvcHVibGlzaCB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4vLyAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pe1xuLy8gICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLmZvckVhY2goZiA9PiB7XG4vLyAgICAgICAgICAgICBmKGRhdGEpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH07XG5cblxuXG4iLCIvL3RoZSBtb2RlbCBoYW5kbGVzIGFsbCB0aGUgZGF0YSBhbmQgbG9naWMgXG5pbXBvcnQgeyBhZGRQcm9qZWN0VG9Ecm9wZG93biB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgbmV3UHJvamVjdEZvcm0gfSBmcm9tICcuL25ld1Byb2plY3RGb3JtJztcblxuLy9hcnJheSBvZiBhbGwgcHJvamVjdHMsIGVhY2ggcHJvamVjdCBpcyBhbiBvYmplY3RcbmV4cG9ydCBsZXQgYWxsUHJvamVjdHNBcnIgPSBbXTsgLy9leHBvcnQgdG8gY29udHJvbGxlciBhbmQgdmlldyAodHJ5IHRvIHJlbW92ZSBmcm9tIHZpZXcpXG5cbmZ1bmN0aW9uIFByb2plY3RGYWN0b3J5KHByb2pOYW1lKXtcbiAgICBsZXQgcHJvamVjdCA9IE9iamVjdC5jcmVhdGUocHJvamVjdEFjdGlvbnMpO1xuICAgIHByb2plY3QubmFtZSA9IHByb2pOYW1lO1xuICAgIHByb2plY3QudGFza0FyciA9IFtdOyAgLy9zZXQgdGFzayBhcnJheSB0byBlbXB0eSBhcnJheSAoYXJyIG9mIG9iamVjdHMpXG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmxldCBwcm9qZWN0QWN0aW9ucyA9IHtcbiAgICBnZXRQcm9qZWN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH0sXG4gICAgYWRkUHJvalRvQWxsUHJvakFycigpe1xuICAgICAgICBhbGxQcm9qZWN0c0Fyci5wdXNoKHRoaXMpO1xuICAgICAgICAvLyBsZXQgbGVuZ3Rob2ZBcnIgPSBhbGxQcm9qZWN0c0Fyci5sZW5ndGg7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIFByb2plY3RzIGluIGFsbFByb2plY3RzQXJyOiBcIiArIGxlbmd0aG9mQXJyKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbGxQcm9qZWN0c0FycjogXCIgKyBhbGxQcm9qZWN0c0FycltsZW5ndGhvZkFyci0xXS5uYW1lKTtcbiAgICB9LFxuICAgIGdldE5vT2ZUYXNrcygpe1xuICAgICAgICBsZXQgbm9PZlRhc2tzID0gdGhpcy50YXNrQXJyLmxlbmd0aDtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBPZiBUYXNrczogKGZyb20gdGFza3NBcnIubGVuZ3RoKSBcIiArIHRoaXMudGFza0Fyci5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gbm9PZlRhc2tzO1xuICAgIH0sXG4gICAgLy8gYWRkVGFzayh0YXNrT2JqKXtcbiAgICAvLyAgICAgLy9hZGRzIHRhc2tPYmogdG8gdGhpcy50YXNrQXJyXG4gICAgLy8gICAgIHRhc2tBcnIucHVzaCh0YXNrT2JqKTtcbiAgICAvLyAgICAgbGV0IGxhc3RUYXNrID0gdGFza0Fyci5sZW5ndGgtMTtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGFza0FycltsYXN0VGFza10pO1xuICAgIC8vIH1cbn07XG5cbiAgICAvL3NldCB1cCBkZWZhdWx0IHByb2plY3QgYXMgRkFDVE9SWVxuICAgIGxldCBkZWZhdWx0cHJvaiA9IFByb2plY3RGYWN0b3J5KCdkZWZhdWx0Jyk7XG4gICAgZGVmYXVsdHByb2ouYWRkUHJvalRvQWxsUHJvakFycigpO1xuXG5cblxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RNb2RlbChwcm9qTmFtZSl7ICAvL2V4cG9ydCB0byBjb250cm9sbGVyXG4gICAgICAgICBsZXQgbmV3cHJvak5hbWUgPSBQcm9qZWN0RmFjdG9yeShwcm9qTmFtZSk7XG4gICAgICAgICAvL3dvcmtpbmdcbiAgICAgICAgIC8vY29uc29sZS5sb2coXCJuZXdwcm9qbmFtZTogXCIgKyBuZXdwcm9qTmFtZS5nZXRQcm9qZWN0TmFtZSgpKTtcbiAgICAgICAgIG5ld3Byb2pOYW1lLmFkZFByb2pUb0FsbFByb2pBcnIoKTtcbiAgICAgICAgIC8vbmV3cHJvak5hbWUuZ2V0Tm9PZlRhc2tzKCk7XG4gICAgIH1cblxuICAgICBmdW5jdGlvbiBUYXNrRmFjdG9yeSh0YXNrTmFtZSwgdGFza0Rlc2MsIHRhc2tEdWUsIHRhc2tQcmlvcml0eSwgaXNDb21wbGV0ZSwgcHJvamVjdE5hbWUpe1xuICAgICAgICBsZXQgdGFzayA9IE9iamVjdC5jcmVhdGUodGFza0FjdGlvbnMpO1xuICAgICAgICB0YXNrLm5hbWUgPSB0YXNrTmFtZTtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjO1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSB0YXNrRHVlO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xuICAgICAgICB0YXNrLnByb2pOYW1lID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cblxuICAgIGxldCB0YXNrQWN0aW9ucyA9IHtcbiAgICAgICAgZ2V0VGFza05hbWUoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRhc2tEZXNjcmlwdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRhc2tEdWVEYXRlKCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUYXNrUHJpb3JpdHkoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgICAgICB9LFxuICAgICAgICBnZXRUYXNrSXNDb21wbGV0ZSgpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGFza1Byb2plY3ROYW1lKCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qTmFtZTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRUYXNrKHRhc2tPYmope1xuICAgICAgICAgICAgLy9hZGRzIHRhc2tPYmogdG8gdGhpcy50YXNrQXJyXG4gICAgICAgICAgICB0YXNrQXJyLnB1c2godGFza09iaik7XG4gICAgICAgICAgICBsZXQgbGFzdFRhc2sgPSB0YXNrQXJyLmxlbmd0aC0xO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0FycltsYXN0VGFza10pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tNb2RlbCh0YXNrTmFtZSwgdGFza0Rlc2MsIHRhc2tEdWUsIHRhc2tQcmlvcml0eSwgaXNDb21wbGV0ZSwgcHJvak5hbWUpe1xuICAgICAgICAvL2NhbGwgdG8gdGFzayBGYWN0b3J5XG4gICAgICAgIGxldCBuZXdUYXNrID0gVGFza0ZhY3RvcnkodGFza05hbWUsIHRhc2tEZXNjLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHksIGlzQ29tcGxldGUsIHByb2pOYW1lKTtcbiAgICB9XG5cblxuXG4iLCIvL21vZGFsIGRpc3BsYXkgLSBjcmVhdGUgTmV3IFByb2plY3Rcbi8vY29udGFpbnMgY29kZSB0byBjcmVhdGUgZG9tIGVsZW1lbnRzIGFuZCBhcHBlbmQgdGhlbSBpbnNpZGUgbW9kYWwgXG5cbmxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhXCIpO1xuXG4vL2NyZWF0ZSBlbGVtZW50cyBcbmxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gU2V0IGF0dHJpYnV0ZXNcbmxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwicHJvak5hbWVcIik7XG5sYWJlbC50ZXh0Q29udGVudD1cIlByb2plY3QgTmFtZTpcIjtcbmlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuaW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2pOYW1lXCIpO1xuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpe1xuICAgIC8vdG9nZ2xlIGRpc3BsYXlcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNob3dQcm9qTW9kdWxlXCIpO1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1Rhc2tNb2R1bGVcIik7XG5cbiAgICAvL2FwcGVuZCBlbGVtZW50cyB0byBkaXZcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG59O1xuXG5leHBvcnQgeyBuZXdQcm9qZWN0Rm9ybSB9IDsgLy90byB2aWV3IiwiLy9tb2RhbCBkaXNwbGF5IC0gY3JlYXRlIE5ldyBUYXNrXG4vL2NvbnRhaW5zIGNvZGUgdG8gY3JlYXRlIGRvbSBlbGVtZW50cyBhbmQgYXBwZW5kIHRoZW0gaW5zaWRlIG1vZGFsIFxuXG5pbXBvcnQgeyBhbGxQcm9qZWN0c0FyciB9IGZyb20gJy4vbW9kZWwnO1xuXG5sZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhJyk7XG5cbi8vY3JlYXRlIGVsZW1lbnRzXG5sZXQgcHJvakRyb3Bkb3duTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGV0IHByb2pEcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG5sZXQgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmxldCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG5sZXQgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGV0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxubGV0IHRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGV0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG5sZXQgdGFza1ByaW9yaXR5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubGV0IHRhc2tQcmlvcml0eUlucHV0X2xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5sZXQgdGFza1ByaW9yaXR5SW5wdXRfbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmxldCB0YXNrUHJpb3JpdHlJbnB1dF9oaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuXG4vLyBTZXQgYXR0cmlidXRlc1xucHJvakRyb3Bkb3duTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvakRyb3Bkb3duXCIpO1xucHJvakRyb3Bkb3duTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6IFwiO1xucHJvakRyb3Bkb3duLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvakRyb3Bkb3duXCIpO1xucHJvakRyb3Bkb3duLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qRHJvcGRvd25cIik7XG5cbnRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRhc2tOYW1lXCIpO1xudGFza0xhYmVsLnRleHRDb250ZW50PVwiVGFzayBOYW1lOlwiO1xudGFza0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xudGFza0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrTmFtZVwiKTtcbnRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tOYW1lXCIpO1xuXG50YXNrRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRhc2tEZXNjXCIpO1xudGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQ9XCJUYXNrIERlc2NyaXB0aW9uOlwiO1xudGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG50YXNrRGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFza0Rlc2NcIik7XG50YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEZXNjXCIpO1xuXG50YXNrRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2tEdWVEYXRlJyk7XG50YXNrRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgRHVlIERhdGU6JztcbnRhc2tEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbnRhc2tEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrRHVlRGF0ZScpO1xuXG50YXNrUHJpb3JpdHlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tQcmlvcml0eV9yYWRpbycpOyBcbnRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywnTG93Jyk7XG50YXNrUHJpb3JpdHlJbnB1dF9sb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcbnRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ2lkJywndGFza1ByaW9yaXR5X2xvdycpO1xudGFza1ByaW9yaXR5SW5wdXRfbG93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Rhc2tQcmlvcml0eScpO1xudGFza1ByaW9yaXR5SW5wdXRfbG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdsb3cnKTtcblxudGFza1ByaW9yaXR5SW5wdXRfbWVkLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCdNZWRpdW0nKTtcbnRhc2tQcmlvcml0eUlucHV0X21lZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xudGFza1ByaW9yaXR5SW5wdXRfbWVkLnNldEF0dHJpYnV0ZSgnaWQnLCd0YXNrUHJpb3JpdHlfbWVkJyk7XG50YXNrUHJpb3JpdHlJbnB1dF9tZWQuc2V0QXR0cmlidXRlKCduYW1lJywndGFza1ByaW9yaXR5Jyk7XG50YXNrUHJpb3JpdHlJbnB1dF9tZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ21lZCcpO1xuXG50YXNrUHJpb3JpdHlJbnB1dF9oaWdoLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCdIaWdoJyk7XG50YXNrUHJpb3JpdHlJbnB1dF9oaWdoLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG50YXNrUHJpb3JpdHlJbnB1dF9oaWdoLnNldEF0dHJpYnV0ZSgnaWQnLCd0YXNrUHJpb3JpdHlfaGlnaCcpO1xudGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0YXNrUHJpb3JpdHknKTtcbnRhc2tQcmlvcml0eUlucHV0X2hpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2hpZ2gnKTtcblxudGFza1ByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dF9sb3cpO1xudGFza1ByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dF9tZWQpO1xudGFza1ByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dF9oaWdoKTtcblxuXG5mdW5jdGlvbiBwb3B1bGF0ZURyb3Bkb3duKGFsbFByb2plY3RzQXJyKXtcbiAgICAvL3JlbW92ZSBhbGwgdmFsdWVzIGFuZCByZXJlbmRlclxuICAgIGNsZWFyRHJvcGRvd25PcHRpb25zKCk7XG5cbiAgICAvL2dldCB2YWx1ZXMgZnJvbSBwcm9qIGFycmF5IGFuZCBjcmVhdGUgb3B0aW9uIHRhZyBmb3IgZWFjaFxuICAgIGlmIChhbGxQcm9qZWN0c0Fyci5sZW5ndGggPiAwKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYWxsUHJvamVjdHNBcnIubGVuZ3RoLTE7IGkrKyl7XG4gICAgICAgICAgICBwcm9qRHJvcGRvd24uYXBwZW5kQ2hpbGQoY3JlYXRlRHJvcGRvd25PcHRpb25zKGFsbFByb2plY3RzQXJyW2ldLm5hbWUpKTsgXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjbGVhckRyb3Bkb3duT3B0aW9ucygpe1xuIC8vaWYgZGl2IGhhcyBjaGlsZHJlbiwgcmVtb3ZlIGNoaWxkcmVuXG5cbiAgICBpZiAocHJvakRyb3Bkb3duLmhhc0NoaWxkTm9kZXMpe1xuICAgICAgICB3aGlsZSAocHJvakRyb3Bkb3duLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2pEcm9wZG93bi5yZW1vdmVDaGlsZChwcm9qRHJvcGRvd24uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bk9wdGlvbnMoaXRlbSl7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpdGVtKTsgXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudD0gaXRlbTsgIFxuICAgIHJldHVybiBvcHRpb247XG59O1xuXG5mdW5jdGlvbiBuZXdUYXNrRm9ybSgpe1xuICAgIC8vdG9nZ2xlIGRpc3BsYXlcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNob3dUYXNrTW9kdWxlXCIpO1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1Byb2pNb2R1bGVcIik7XG5cbiAgICAvL2NsZWFyIGVsZW1lbnRzIFxuICAgIHRhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgICBwb3B1bGF0ZURyb3Bkb3duKGFsbFByb2plY3RzQXJyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvakRyb3Bkb3duTGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwcm9qRHJvcGRvd24pO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVMYWJlbCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlSW5wdXQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlXcmFwcGVyKTtcbn1cblxuZXhwb3J0IHsgbmV3VGFza0Zvcm0gfTsiLCIvL3RoZSB2aWV3IGhhbmRsZXMgaG93IHRoZSBVSSBpcyBkaXNwbGF5ZWQuIE9ubHkgdGFsa3MgdG8gY29udHJvbGxlci4gXG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IG5ld1Byb2plY3RGb3JtIH0gZnJvbSAnLi9uZXdQcm9qZWN0Rm9ybS5qcyc7XG5pbXBvcnQgeyBuZXdUYXNrRm9ybSB9IGZyb20gJy4vbmV3VGFza0Zvcm0uanMnO1xuaW1wb3J0IHsgYWxsUHJvamVjdHNBcnIgfSBmcm9tICcuL21vZGVsLmpzJzsgLy9tYXliZSBtb3ZlXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXNpc3RoZXZpZXcoKXtcblxuICAgIGxldCBkb21DYWNoZWRFbGVtZW50cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKSxcbiAgICAgICAgYWRkYnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1hZGRcIiksXG4gICAgICAgIHZpZXdBbGxQcm9qZWN0c0J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYWxscHJvalwiKSxcbiAgICAgICAgdGFza2JveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrYm94XCIpLFxuICAgfVxuXG4gICBkb21DYWNoZWRFbGVtZW50cy52aWV3QWxsUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHZpZXdBbGxQcm9qZWN0cyk7XG5cbiAgIGZ1bmN0aW9uIHZpZXdBbGxQcm9qZWN0cygpe1xuICAgICAgICAvLzEuIGNsZWFycyBwcm9qZWN0IGRpc3BsYXkgYXJlYSBcbiAgICAgICAgcmVtb3ZlQ2hpbGRyZW4oZG9tQ2FjaGVkRWxlbWVudHMudGFza2JveCk7XG4gICAgICAgIC8vMi4gbG9vcHMgb3ZlciBhbGwgcHJvamVjdHMgYXJyYXkgKGlmIGFyciBub3QgZW1wdHkpICYgY3JlYXRlcyBwcm9qZWN0IGNhcmQgZm9yIGVhY2ggcHJvamVjdCAmIGFwcGVuZCB0byB0YXNrYm94XG4gICAgICAgIGlmIChhbGxQcm9qZWN0c0Fyci5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICBhbGxQcm9qZWN0c0Fyci5mb3JFYWNoKGNyZWF0ZVByb2plY3RJdGVtQ2FyZCk7XG4gICAgICAgIH1cbiAgIH1cblxuLy9jYWxsYmFjayBmcm9tIGZvcmVhY2ggYWJvdmVcbiAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJdGVtQ2FyZCAoaXRlbSwgaW5kZXgpe1xuICAgICAgICAvL2NyZWF0ZSBlbGVtZW50cywgXG4gICAgICAgIGxldCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG5cbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNBcnJbaW5kZXhdLm5hbWU7IFxuICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0VGFza05vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2plY3RUYXNrTm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS10YXNrbm9cIik7XG4gICAgICAgIHByb2plY3RUYXNrTm8udGV4dENvbnRlbnQgPSBcIjcgYWN0aXZlIHRhc2tzXCI7IC8qVGhpcyB3aWxsIGJlIHVwZGF0ZWQgdG8gZmV0Y2ggbnVtYmVyICovXG4gICAgICAgIC8vY2FsbCBcblxuICAgICAgICAvL2hvdyB0byBhY2Nlc3MgdmFsdWUgb2YgJ25hbWUnIGtleSBmcm9tIG9iamVjdCBpbiBhcnJheSBcbiAgIFxuICAgICAgIFxuICAgXG4gICAvLyBnZXQgdGhlIGtleXMgZnJvbSBmaXJzdCBvYmplY3QgaW4gYXJyYXlcbi8vIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhbGxQcm9qZWN0c0FyclswXSk7XG4vLyBjb25zb2xlLmxvZyhcImtleXM6IFwiICsga2V5cyk7XG5cbi8vIGZvciAoY29uc3Qgb2JqIG9mIGFsbFByb2plY3RzQXJyKSB7XG4vLyAgIC8vIGdldCB2YWx1ZXMgZm9yIGN1cnJlbnQgb2JqZWN0XG4vLyAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqKTtcbi8vICAgY29uc29sZS5sb2coYE9iamVjdDogJHtKU09OLnN0cmluZ2lmeShvYmopfSwgS2V5czogJHtrZXlzfSwgVmFsdWVzOiBcbi8vICR7dmFsdWVzfWApO1xuLy8gfVxuXG5cblxuICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0VGFza05vKTtcblxuICAgICAgICBsZXQgcHJvamVjdEl0ZW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdEl0ZW1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW0td3JhcHBlclwiKTtcbiAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1XcmFwcGVyKTtcblxuICAgICAgICAgICAgbGV0IHByb2plY3RJdGVtRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBwcm9qZWN0SXRlbUVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS1lZGl0YnRuXCIpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RJdGVtRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIHByb2plY3RJdGVtRWRpdEljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL3NyYy9pbWFnZXMvZWRpdC5wbmdcIik7XG4gICAgICAgICAgICAgICAgcHJvamVjdEl0ZW1FZGl0QnRuLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRWRpdEljb24pO1xuXG4gICAgICAgICAgICBwcm9qZWN0SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1FZGl0QnRuKTtcbiAgICAgICAgICAgIC8vY29kZSB0byBhZGQgcHJvamVjdCBkdWUgZGF0ZSBpZiBpbmNsdWRpbmc/XG5cbiAgICAgICAgICAgIC8vMy4gYXBwZW5kIGVhY2ggcHJvamVjdCBjYXJkcyB0byAgZGlzcGxheSBhcmVhIChkb21DYWNoZWRFbGVtZW50cy50YXNrYm94KVxuICAgICAgICAgICAgZG9tQ2FjaGVkRWxlbWVudHMudGFza2JveC5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIC0tLS0tLS0tLSBDUkVBVEUgTkVXIC0gTU9EQUwgLS0tLS0tLS0tLS0tLS0tLVxuICAgIGxldCBtb2RhbEVsZW1lbnRzID0ge1xuICAgICAgICBzdWJtaXRCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIGNsZWFyQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2xlYXItYnRuJyksXG4gICAgICAgIG1vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpLFxuICAgICAgICBvdmVybGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIiksXG4gICAgICAgIGNsb3NlTW9kYWxCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNsb3NlXCIpXG4gICAgfVxuXG4gICAvL29wZW5zIG1vZGFsIHRvIGNyZWF0ZSBuZXcgcHJvamVjdC90YXNrXG4gICBjb25zdCBvcGVuTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vZGFsRWxlbWVudHMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgbW9kYWxFbGVtZW50cy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNsZWFySW5wdXRWYWx1ZXMoKTtcbiAgICB9O1xuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVyIHRvIG9wZW4gbW9kYWwgb24gY2xpY2tcbiAgICBkb21DYWNoZWRFbGVtZW50cy5hZGRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Nb2RhbCk7XG5cbiAgICAvL2Nsb3NlcyBtb2RhbFxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vZGFsRWxlbWVudHMubW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgbW9kYWxFbGVtZW50cy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfTtcbiAgICAvL2FkZCBldmVudCBsaXN0ZW5lciB0byBjbG9zZSBtb2RhbCBvbiBjbGlja1xuICAgIG1vZGFsRWxlbWVudHMuY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gICAgbW9kYWxFbGVtZW50cy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbiAgICBtb2RhbEVsZW1lbnRzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cblxuXG5cblxuICAgIGxldCBwcm9qTmFtZUlucHV0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvak5hbWVcIik7XG5cbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2pEcm9wZG93bicpOyBcbiAgICBsZXQgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza05hbWVcIik7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEZXNjJyk7XG4gICAgbGV0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0R1ZURhdGUnKTtcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQcmlvcml0eV9yYWRpbycpO1xuXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY3JlYXRlLW1vZGFsLWlucHV0LWFyZWFcIik7XG5cblxuXG4gICAgbGV0IGNyZWF0ZU5ld0VsZW1lbnRzID0ge1xuICAgICAgICB0b2dnbGVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyksXG4gICAgICAgIFxuICAgICAgICB0b2dnbGVNb2RhbERpc3BsYXk6IGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY3JlYXRlLW1vZGFsLWlucHV0LWFyZWFcIik7XG5cbiAgICAgICAgICAgIGlmIChjcmVhdGVOZXdFbGVtZW50cy50b2dnbGVJbnB1dC5jaGVja2VkKXsgLy9BZGQgTmV3IFRhc2sgc2hvd3MgKHRvZ2dsZSBjaGVja2VkKVxuICAgICAgICAgICAgICAgIGNsZWFySW5wdXRWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihkaXYpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tGb3JtKCk7IC8vbG9hZCBOZXcgVGFzayBJbnB1dHNcbiAgICAgICAgICAgICAgfSBlbHNlIHsgLy9BZGQgTmV3IFByb2plY3QgU2hvd3MgKHRvZ2dsZSBub3QgY2hlY2tlZClcbiAgICAgICAgICAgICAgICBjbGVhcklucHV0VmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4oZGl2KTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4oZWxlbWVudCl7XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMpe1xuICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vcHJvamVjdC90YXNrIHRvZ2dsZVxuICAgIGNyZWF0ZU5ld0VsZW1lbnRzLnRvZ2dsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVOZXdFbGVtZW50cy50b2dnbGVNb2RhbERpc3BsYXkpO1xuXG5cblxuICAgIC8vU1VCTUlUIEJVVFRPTlxuICAgIG1vZGFsRWxlbWVudHMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIC8vdGhpcyBmdW5jdGlvbiBtYXkgbmVlZCB0byBiZSBtb3ZlZCB0byBjb250cm9sbGVyXG4gICAgLy9nZXQgdGhlIHZhbHVlIGZyb20gdGhlIGlucHV0cywgcGFzcyB0byBjb250cm9sbGVyIFxuICAgIC8vKGNvbnRyb2xsZXIgd2lsIHBhc3MgdG8gbW9kZWwsIHRvIGRpc3BsYXkgb24gc2NyZWVuIClcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9nZXQgbGF0ZXN0IHZhbHVlc1xuICAgICAgICBwcm9qTmFtZUlucHV0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvak5hbWVcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcInNob3dUYXNrTW9kdWxlXCIpKXtcbiAgICAgICAgICAgIC8vZ2V0IHRhc2sgZGF0YVxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2pEcm9wZG93bicpOyBcbiAgICAgICAgICAgIHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lXCIpO1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2MnKTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0R1ZURhdGUnKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUHJpb3JpdHlfcmFkaW8nKTsgLy9ob3cgdG8gZ2V0IHNlbGVjdGVkIHZhbHVlXG5cblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkUHJvak5hbWUgPSBzZWxlY3RlZFByb2plY3QudmFsdWU7ICAvL25lZWRzIHRvIGdldCBzZWxlY3RlZCBwcm9qZWN0IG5hbWUgYW5kIHNhdmUgdG8gdmFyaWFibGUuIElmIG5vbmUgc2VsZWN0ZWQsIHVzZSBkZWZhdWx0LiBcbiAgICAgICAgICAgIGxldCB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBsZXQgdGFza0R1ZURhdGUgPSB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJzZWxlY3RlZFByb2plY3Q6IFwiICsgc2VsZWN0ZWRQcm9qTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJ0YXNrTmFtZTogXCIgKyB0YXNrTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJ0YXNrRGVzY3JpcHRpb246IFwiICsgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcInRhc2tEdWVEYXRlOiBcIiArIHRhc2tEdWVEYXRlKTtcblxuXG5cbiAgICAgICAgLy9lbHNlIGlmIGRpdiBoYXMgY2xhc3Mgb2YgcHJvamVjdFxuICAgICAgICB9IGVsc2UgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93UHJvak1vZHVsZVwiKSl7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qTmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSk7IC8vaW4gY29udHJvbGxlclxuICAgICAgICAgICAgdmlld0FsbFByb2plY3RzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiBcbiAgICAvL0NMRUFSIEJVVFRPTlxuICAgIG1vZGFsRWxlbWVudHMuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhcklucHV0VmFsdWVzKTtcblxuICAgIGZ1bmN0aW9uIGNsZWFySW5wdXRWYWx1ZXMoKXtcbiAgICAgICAgLy9nZXQgbGF0ZXN0IHZhbHVlc1xuICAgICAgICB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZVwiKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2MnKTtcbiAgICAgICAgcHJvak5hbWVJbnB1dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOYW1lXCIpO1xuXG4gICAgICAgIGlmICh0YXNrTmFtZUlucHV0ICE9PSBudWxsICYmIHRhc2tEZXNjcmlwdGlvbklucHV0ICE9PW51bGwpe1xuICAgICAgICAgICAgdGFza05hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvak5hbWVJbnB1dC52YWx1ZSAhPT0gbnVsbCl7XG4gICAgICAgICAgICBwcm9qTmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29udHJvbGxlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==