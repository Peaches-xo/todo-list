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
      color: red;
    }
    14.2999% {
      color: orange;
    }
    28.5999% {
      color: yellow;
    }
    42.8998% {
      color: green;
    }
    57.1996% {
      color: blue;
    }
    71.4995% {
      color: indigo;
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
  } TO USE, ADD CLASS ANIMATE AND CLASS CHAMELEON*/
  

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

.project h3{
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
   
  .modal input {
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



  
  .create-modal-buttons button {
    display: inline-block;
    padding: 0.8rem;
    background-color: white;
    color: pink;
    /* border-radius: 5px; */
    text-align: center;
    font-size: 1em;
    cursor: pointer;
    border: none;
    font-weight: 600;
    width: 100%;
    border-top: solid 3px;
    border-bottom-left-radius: 20px;
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

  .hidden {
    display: none;
  }
/* CURRENT TASK  - remove all references to label.btn-color-mode-switch  */



  /* Task/Project Switcher inside Modal */
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
    box-shadow: 0px 0px 6px -2px #111;
    padding: 5px 0px;
}


/* .btn-color-mode-switch input[type="checkbox"]{ */
  input#color_mode[type="checkbox"] {
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
input#color_mode[type="checkbox"]:checked + label.btn-color-mode-switch-inner{
  background: linear-gradient(90deg,pink, lavender);
  color: grey;
}

/*  Sets bg of Task when selected*/
input#color_mode[type="checkbox"]:checked + label.btn-color-mode-switch-inner:after{
  content: attr(data-on); /*Tasks*/
  left: 68px;
  background: white;
  color: black;
}

input#color_mode[type="checkbox"]:checked + label.btn-color-mode-switch-inner:before{
    content: attr(data-off); /*Project */
    right: auto;
    left: 20px;
}


.create-modal-input-area input[type="text"]:focus-visible{
  outline: solid 1px #af76f3;
 
}











`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS for ToDo List */\n*{\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    list-style-type: none;\n    box-sizing: border-box;\n    font-family: 'Nunito';\n}\n\n:root {\n    --gradient_bg_color:#ede5fd;\n    --gradient_spot1_color:#e1cbfb;\n    --gradient_spot1_w: 75%;\n    --gradient_spot1_h: 75%;\n    --gradient_spot1_x: 0%;\n    --gradient_spot1_y: 0%;\n    --gradient_spot2_color:#ffe0d6;\n    --gradient_spot2_w: 75%;\n    --gradient_spot2_h: 75%;\n    --gradient_spot2_x: 100%;\n    --gradient_spot2_y: 0%;\n    --gradient_spot3_color:#ebe0ff;\n    --gradient_spot3_w: 75%;\n    --gradient_spot3_h: 75%;\n    --gradient_spot3_x: 100%;\n    --gradient_spot3_y: 100%;\n    \n    --gradient_spot4_color:#ffdbf3;\n    --gradient_spot4_w: 75%;\n    --gradient_spot4_h: 75%;\n    --gradient_spot4_x: 0%;\n    --gradient_spot4_y: 100%;\n    \n    --gradient_spot2_w:100%;\n    --gradient_spot2_x:94%;\n    --gradient_spot2_h:44%;\n    --gradient_spot1_w:51%;\n    --gradient_spot1_h:64%;\n    --gradient_spot1_x:7%;\n    --gradient_spot3_w:100%;\n    --gradient_spot3_h:82%;\n    --gradient_spot3_x:90%;\n    --gradient_spot4_w:64%;\n    --gradient_spot4_x:0%;\n    --gradient_spot4_y:45%;\n\n    /* Project Colours */\n    --project_color1: #FFEDD6;\n    --project_color2: #FFCB9A;\n    --project_color3: #F8AEF9;\n    --project_color4: #B8DBFD;\n    --project_color5: #C8BAFA;\n    --project_color6: #8FE4E9;\n\n    --darkGrey: #252B3D;\n    --medGrey: #94969b;\n    --lightGrey: #eee;\n\n  }\n\n  @font-face {\n    font-family: 'Nunito';\n    src: url('./fonts/Nunito-VariableFont_wght.ttf') format('opentype'),\n    url('./fonts/Nunito-Italic-VariableFont_wght.ttf') format('opentype');\n    font-style: normal;\n}\n  \n  .fancy-gradient {\n    background-color: var(--gradient_bg_color);\n    background-image: radial-gradient(var(--gradient_spot1_w) var(--gradient_spot1_h) at left var(--gradient_spot1_x) top var(--gradient_spot1_y), var(--gradient_spot1_color), transparent), radial-gradient(var(--gradient_spot2_w) var(--gradient_spot2_h) at left var(--gradient_spot2_x) top var(--gradient_spot2_y), var(--gradient_spot2_color), transparent), radial-gradient(var(--gradient_spot3_w) var(--gradient_spot3_h) at left var(--gradient_spot3_x) top var(--gradient_spot3_y), var(--gradient_spot3_color), transparent), radial-gradient(var(--gradient_spot4_w) var(--gradient_spot4_h) at left var(--gradient_spot4_x) top var(--gradient_spot4_y), var(--gradient_spot4_color), transparent);\n  }\n\n \n  \n/*  \n  .animated {\n    animation-fill-mode: both;\n  }\n@keyframes chameleon {\n\n    0% {\n      color: red;\n    }\n    14.2999% {\n      color: orange;\n    }\n    28.5999% {\n      color: yellow;\n    }\n    42.8998% {\n      color: green;\n    }\n    57.1996% {\n      color: blue;\n    }\n    71.4995% {\n      color: indigo;\n    }\n    85.7994% {\n      color: violet;\n    }\n    100% {\n      color: red;\n    }\n  }\n  .chameleon {\n    animation-name: chameleon;\n    animation-duration: 5s;\n  } TO USE, ADD CLASS ANIMATE AND CLASS CHAMELEON*/\n  \n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: #222;\n    position: relative;\n    min-height: 100vh;\n    overflow:hidden;\n\n    /* font-size: 1.125rem; \n  line-height: 1.5;  */\n\n\n}\n\n.container{\n    padding: 20px;\n    border-radius: 20px;\n    margin: auto;\n    height: 85vh;\n    width: 85vw;\n    background-color: rgba(246, 243, 248, 0.622); \n    background-color:rgb(246 243 248 / 56%); /* gradient blend into bg  */\n    box-shadow: 0px 0px 0px 1px floralwhite;\n    display:grid;\n    overflow: auto;\n    grid-template-columns: 1fr 3fr 2fr;\n    grid-template-rows: 0.5fr 1.5fr 0.5fr 3fr;\n    grid-template-areas: \"nav hello projheading\"\n                         \"nav info project\"\n                         \"nav heading project\"\n                         \"nav taskbox project\";\n                         box-shadow:\n                         0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n                         0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n                         0 12.5px 10px rgba(0, 0, 0, 0.06),\n                         0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n                         0 41.8px 33.4px rgba(0, 0, 0, 0.086);\n}\n\n.nav{\n    grid-area: nav;\n    border-radius: 10px;\n    margin: 0px 30px 0px 20px;\n    background-color: var(--darkGrey);\n    box-shadow: 0px 0px 10px 3px lightgray;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.nav .logo{\n  align-self: center;\n  margin: 5px auto;\n}\n\n   /* stying of buttons on dash */\n  .btn{\n    display: inline-block;\n    display:flex;\n    gap:10px;\n    padding: 0.8rem;\n    background: transparent;\n    border: solid 5px transparent;\n    color: #94969b;\n    cursor: pointer;\n    transition: 0.3s ease;\n    font-size: 0.9rem;\n    width: 100%;\n    text-align: left;\n    align-items: center;\n  }\n\n  .btn:hover{\n    background-color: #464B5B;\n    /* color: #ff94ea; */\n    color: #fff;\n    border-left: solid 5px #ff94ea;\n    /* outline: 3px solid #F8AEF9; */\n  }\n\n  .btn img{\n    margin-right: 5px;\n  \n  }\n\n.hello{\n    grid-area: hello;\n    /* background-color: #e1cbfb; */\n    color: #302b2b;\n    color: var(--darkGrey);\n    font-size: 40px;\n    font-weight: bold;\n    display:flex;\n    align-items: center;\n}\n.img-hand{\n    width: 11%;\n    padding: 0px 10px;\n}\n\n.info{\n    grid-area: info;\n  \n    /* background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(238,238,238,1) 99%);  */\n    background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(246,237,243,1) 99%); \n    display: flex;\n    border-radius: 10px;\n    /* background-color: #ebe0ff; */\n    position: relative;\n    /* box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072);  */\n   \n\n}\n\n.info::before{\n    content: \"\";\n    background-image: linear-gradient(0deg, rgba(236,224,253,0.1) 11%, rgba(246,237,243,1) 99%), url('/src/images/low-poly-grid-haikei.png'); \n    \n    background-size: contain;\n    background-position: 100px 0px;\n    border-radius:10px;\n    /* border: solid 1px #c6adf2; */\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.5;\n}\n\n\n.info-item{\n    padding: 10px;\n    margin: 20px 10px;\n    width: 100px;\n    background-color:#c8aef8;/* best colour on macmini  */\n    background-color: #af76f3; /* best color on macbook */\n    border-left: solid 2px #c6adf2;\n    border-bottom: solid 2px #c6adf2;\n    color: whitesmoke;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    transition: 0.3s ease;\n    position: relative;\n    box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n\n}\n.info strong{\n    font-size: 30px;\n   \n}\n\n.info-item:hover{\n    transform: translateY(-5px);\n    background-color: #c6adf2;\n    /* background-color: #b491f1; */\n    box-shadow: 0px 0px 8px 5px whitesmoke;\n    border-left: solid 2px #d1bcf8;\n    border-bottom: solid 2px #d1bcf8;\n}\n\n.heading{\n    grid-area: heading;\n    /* background-color:#ede5fd; */\n    margin-top: 10px;\n    font-weight: 400;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    gap: 5px;\n}\n\n/* ALL PROJECTS DISPLAY */\n.taskbox{\n    grid-area: taskbox;\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n    .project-item{\n        border-radius: 10px;\n        margin: 8px;\n        padding: 10px;\n        display: flex;\n        flex-direction:column;\n        justify-content: space-between;\n        /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */\n        box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n        background-color:#FDE1DB;\n        border-left: solid 2px #fbded7;\n        border-bottom: solid 2px #fbded7;\n        transition: 0.4s ease;\n    }\n\n    .project-item h5{\n        font-size: 18px;\n        color: var(--darkGrey);\n        padding-left: 5px;\n    }\n\n    p.project-item-taskno {\n        padding-left: 10px;\n        color: var(--medGrey);\n        font-weight: 200;\n        font-style: italic;\n        font-size: 14px;\n        letter-spacing: 0.1px;\n        margin-top: -7px;\n        margin-bottom: 7px;\n    }\n    div.project-item-wrapper{\n        display: flex;\n        justify-content: flex-end;\n        align-items: flex-end;\n    }\n    button.project-item-editbtn{\n        border: solid 1px transparent;\n        transition: 0.3s;\n        background-color: transparent;\n    }\n  \n    /* project-item hovers */\n    .project-item:hover{\n        border-left: solid 2px #f8ece9;\n        border-bottom: solid 2px #f8ece9;\n    }\n    button.project-item-editbtn:hover{\n        cursor: pointer;\n        transform: translateY(-2px);\n    }\n\n\n\n\n\n\n/* PROJECT SECTION ------------------------------------- */\n.projheading{\n    grid-area: projheading;\n    background-color: white;\n    color: var(--darkGrey);\n    display:flex;\n\n    align-items:center;\n    gap: 5px;\n    margin-top:-20px;\n    margin-right: -20px;\n    margin-left: 40px;\n\n    border-top-right-radius: 20px;\n    border-top-left-radius: 15px;\n    padding-left: 20px;\n    z-index:1;\n\n}\n    \n\n.project{\n    grid-area: project;\n    background-color: #fff;\n    margin-right: -20px;\n    margin-left: 40px;\n    margin-bottom: -20px;\n    border-bottom-right-radius: 20px;\n    border-bottom-left-radius: 15px;\n    box-shadow: -5px -46px 58px -20px lightgrey;\n    padding: 10px;\n    background-image: url(\"/src/images/crystals.png\");\n    background-repeat: no-repeat;\n    background-position: 95% 95%;\n}\n\nh2.project-heading {\n  text-align: center;\n}\n\n.project h3{\n    padding: 10px 0px 0px 10px;\n    margin-top: 20px;\n    /* color: var(--project_color5); */\n    font-weight: 500;\n    /* text-decoration: underline;\n    text-decoration-color: var(--lightGrey); */\n\n    background: -webkit-linear-gradient(#fa83fc, #cabcfb);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n/* details */\n.project-task-item{\n    background:#eeeeee;\n    border-radius: 10px;\n    margin: 10px 10px;\n    padding: 5px 5px 5px 15px;\n    display:flex;\n    justify-content: center;\n    flex-wrap: nowrap;\n    position: relative;\n    box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n}\n\n\nimg.project-task-editbtn {\n    margin-left: auto;\n}\n\n\nsummary {\n    display:flex;\n    justify-content: space-between;\n    align-items:center;\n}\n\n.project-task-priority{\n    background-color: var(--project_color6);\n    color: #008b92;\n    font-size: 12px;\n    border-radius: 20px;\n    padding: 1px 15px;\n}\nlabel{\n    font-size: 13px;\n    display: flex;\n}\n.lowPriority{\n    /* background-color: var(--project_color6);\n    color: #008b92; */\n    background-color: var(--project_color4);\n    color: #0080fd;\n}\n\n.highPriority{\n    background-color: var(--project_color3);\n    color:#d002d4;\n}\n\n.medPriority{\n    background-color: var(--project_color2);\n    color: #e16d01;\n}\n\n.project-task-description{\n    font-size: 13px;\n    margin: 10px 0px;\n    font-style: italic;\n}\n\n\n\n.project-task-img{\n    vertical-align: top;\n}\ninput[type=\"checkbox\"] {\n    margin-right: 11px;\n}\n\ninput[type=\"checkbox\"]:checked + label,\ninput[type=\"checkbox\"]:checked {\n    color: var(--medGrey);\n    text-decoration: line-through !important;\n} \n    \n\n\n\n\n\n/* POP UPS/ MODALS  */\n\n/* Create/ Add New...  */\n.modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1.4rem;\n    width: 450px;\n    /* padding: 1.3rem; */\n    min-height: 250px;\n    position: absolute;\n    top: 20%;\n    background-color: white;\n    border: 3px solid #ddd;\n    border: 3px solid pink;\n    border-radius: 15px;\n    z-index: 2;\n\n    box-shadow: \n          0px 43px 79px -20px #af86c0, \n          34px -12px 80px -20px #fcd7e4d4;\n\n          box-shadow: \n          -31px 20px 63px -20px #af86c0, \n          13px -35px 63px -2px #fcd7e4fa;\n\n  }\n\n  .create-modal-icon{\n    position: absolute;\n    top: -52px;\n    left: 44%;\n    background: white;\n    border: solid 4px pink;\n    padding: 5px;\n    height: 70px;\n    width: 70px;\n    border-radius: 50px;\n  }\n\n  .modal h3 {\n    margin: 20px auto 10px;\n}\n  \n   .modal .flex {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  } \n\n\n.create-modal-input-area {\n  padding-left: 15px;\n  margin-bottom: 20px;\n}\n   \n  .modal input {\n    padding: 0.7rem 1rem;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 0.9em;\n  }\n  \n  .modal p {\n    font-size: 0.9rem;\n    color: #777;\n    margin: 0.4rem 0 0.2rem;\n  }\n  \n  .create-modal-buttons{\n    display: flex;\n  }\n\n\n\n  \n  .create-modal-buttons button {\n    display: inline-block;\n    padding: 0.8rem;\n    background-color: white;\n    color: pink;\n    /* border-radius: 5px; */\n    text-align: center;\n    font-size: 1em;\n    cursor: pointer;\n    border: none;\n    font-weight: 600;\n    width: 100%;\n    border-top: solid 3px;\n    border-bottom-left-radius: 20px;\n  }\n\n  button[type=\"submit\"]{\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 20px;\n    border-left: solid 3px pink;\n  }\n  \n  .btn-close {\n    padding: 0;\n    background: transparent;\n    border-radius: 50%;\n    border: none;\n    margin-left: auto;\n    position: absolute;\n    top: 10px;\n    right: 12px;\n    cursor: pointer;\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(105, 97, 82, 0.5);\n    \n    backdrop-filter: blur(3px);\n    z-index: 1;\n  }\n\n  .hidden {\n    display: none;\n  }\n/* CURRENT TASK  - remove all references to label.btn-color-mode-switch  */\n\n\n\n  /* Task/Project Switcher inside Modal */\n/*selected side*/\nlabel {\n    font-size: 13px;\n    color: #424242;\n    font-weight: 500;\n}\n\n/*  bg of Task when not selected*/\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner{ */\n                            label.btn-color-mode-switch-inner{\n    margin: 0px;\n    width: 140px;\n    height: 30px;\n    background: #E0E0E0;\n    background: linear-gradient(90deg,pink, lavender);\n    border-radius: 26px;\n    overflow: hidden;\n    position: relative;\n    transition: all 0.3s ease;\n    display: block;\n    cursor: pointer;\n}\n/* text of Task when not selected  */\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner:before{ */\n                        label.btn-color-mode-switch-inner::before{\n    content: attr(data-on); /* Task */\n    position: absolute;\n    font-size: 13px;\n    font-weight: 500;\n    top: 7px;\n    right: 20px;\n    color: grey;\n}\n\n/*  project selected */\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner:after{  */\n                          label.btn-color-mode-switch-inner::after{\n    content: attr(data-off); /* Project */\n    width: 70px;\n    height: 16px;\n    background: #fff;\n    border-radius: 26px;\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    text-align: center;\n    transition: all 0.3s ease;\n    box-shadow: 0px 0px 6px -2px #111;\n    padding: 5px 0px;\n}\n\n\n/* .btn-color-mode-switch input[type=\"checkbox\"]{ */\n  input#color_mode[type=\"checkbox\"] {\n    cursor: pointer;\n    width: 50px;\n    height: 25px;\n    opacity: 0;\n    position: absolute;\n    top: 68px;\n    left: 44%;\n    z-index: 1;\n    margin: 0px;\n}\n\n/*  set bg and text on project, not selected */\ninput#color_mode[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner{\n  background: linear-gradient(90deg,pink, lavender);\n  color: grey;\n}\n\n/*  Sets bg of Task when selected*/\ninput#color_mode[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner:after{\n  content: attr(data-on); /*Tasks*/\n  left: 68px;\n  background: white;\n  color: black;\n}\n\ninput#color_mode[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner:before{\n    content: attr(data-off); /*Project */\n    right: auto;\n    left: 20px;\n}\n\n\n.create-modal-input-area input[type=\"text\"]:focus-visible{\n  outline: solid 1px #af76f3;\n \n}\n\n\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   pubSub: () => (/* binding */ pubSub)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ "./src/model.js");

//Our main file - handles requests. Tells model what to do (logic wise), 
//tells view what do to.
//Controls and decides how data is displayed





//inititation function 
(0,_view_js__WEBPACK_IMPORTED_MODULE_1__.thisistheview)();
(0,_model_js__WEBPACK_IMPORTED_MODULE_2__.modelfunc)();



//function that runs when submit button is clicked
function createNewProject(projName){
    console.log('createNewProject firing');
    console.log(projName);    //pass projname to model to create new project 
 

    //this should be a call to a function inside model, passing the projName
    createNewProjFactory(projName);

}

const pubSub = {
  events: {},
  subscribe: function(evName, fn){
    console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
    //add an event with a name as new or to existing list
    this.events[evName] = this.events[evName] || [];
    this.events[evName].push(fn);
  },
  unsubscribe: function(evName, fn){
    console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
    //remove an event function by name
    if (this.events[evName]){
        this.events[evName] = this.events[evName].filter(f => f !== fn);
    }
  },
  publish: function(evName, data){
    console.log(`PUBSUB: Making a broadcast about ${evName} with ${data}`);
    //emit/publish the event to anyone who is subscribed
    if (this.events[evName]){
        this.events[evName].forEach(f => {
            f(data);
        });
    }
  }
};





/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modelfunc: () => (/* binding */ modelfunc)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
//the model handles all the data and logic 




function modelfunc(){
    //console.log('testing from modelfunc()');
    // //array of all projects
    let allProjectsArr = [];


    class Project {
        constructor(name){ 
            this.name = name;
        }
        tasks = [];
        createProj(){
            //creates new project and put in projects array - currently uses name of proj but would id# system be better?
            allProjectsArr.push(this.name);
            console.log(allProjectsArr);
        }
        deleteProj(){
            //modal pop up 'are you sure' if yes,
            //find proj in projs array and deletes. proj arrray is updated.
        }
    }
    //set up default project
    let defaultproj = new Project('default');
    defaultproj.createProj();

     function createNewProjFactory(projName){
        let newprojName = new Project (projName);
        newprojName.createProj();
    }
  

  

    // class Task {
    //     constructor(name, description, project, priority, duedate){
    //         this.name = name,
    //         this.icon = icon,
    //         this.tasks = tasks
    //     }
    // }





















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
//the view handles how the UI is displayed. Only talks to controller. 

function thisistheview(){

    let domCachedElements = {
        container: document.querySelector(".container"),
        addbutton: document.querySelector(".btn-add"),
   }

    let modalElements = {
        name: document.querySelector("#name"),
        submitbutton: document.querySelector('button[type="submit"]'),
        modal: document.querySelector(".modal"),
        overlay: document.querySelector(".overlay"),
        closeModalBtn: document.querySelector(".btn-close")
    }

  

   //opens modal to create new project/task
   const openModal = function () {
        modalElements.modal.classList.remove("hidden");
        modalElements.overlay.classList.remove("hidden");
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
    modalElements.submitbutton.addEventListener("click", closeModal);




    modalElements.submitbutton.addEventListener('click', function(event){
    //this function may need to be moved to controller
    //get the value from the input, display on screen 

     event.preventDefault();


     let projname = modalElements.name.value;

    //createNewProject(projname);
    //currently wipes all content from container and displays projname, instead needs to:
    //          pass name to controller 
    //          controller received name and passes to model
    //          model receives name and creates new project and adds it to the project array
    //          passes project array back to controller
    //          controller passes project to view to display 
     domCachedElements.container.textContent = projname;
   });




//    


        let createNewProjElements = {
            nameInput: document.querySelector('input#color_mode[type="checkbox"]'),
            toggleModalDisplay: function (){
                console.log("function toggleModalDisplay reached");
             
                if (createNewProjElements.nameInput.checked){
                    console.log("toggle is checked/ Add new TASK");
                    //function that returns element - will be its own module?
                    //append returned element to div


                    let label = document.createElement("label");
                    let input = document.createElement("input");
                    let div = document.querySelector("div.create-modal-input-area");

                    //if div has children, remove children
                    if (div.hasChildNodes){
                        while (div.firstChild) {
                            div.removeChild(div.firstChild);
                          }
                    }

                

                    label.setAttribute("for","name");
                    label.textContent="Task Name:";
                    input.setAttribute("type", "text");
                    input.classList.add("name");
                    input.setAttribute("id", "name");

                    div.appendChild(label);
                    div.appendChild(input);






                  } else {
                    console.log("toggle not checked/ Add new PROJECT");


                    //function that returns element - will be its own module?
                    //append returned element to div

                    let label = document.createElement("label");
                    let input = document.createElement("input");
                    let div = document.querySelector("div.create-modal-input-area");

                    //if div has children, remove children
                    if (div.hasChildNodes){
                        while (div.firstChild) {
                            div.removeChild(div.firstChild);
                          }
                    }

                    label.setAttribute("for","projName");
                    label.textContent="Project Name:";
                    input.setAttribute("type", "text");
                    input.classList.add("name");
                    input.setAttribute("id", "projName");

                    div.appendChild(label);
                    div.appendChild(input);



                  };
        
            }
        }
       



        createNewProjElements.nameInput.addEventListener("click", createNewProjElements.toggleModalDisplay);

      
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyx1RkFBdUYsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxlQUFlLFVBQVUsc0NBQXNDLFVBQVUsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksS0FBSyxTQUFTLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSx5QkFBeUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxTQUFTLFNBQVMsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyx3QkFBd0IseUJBQXlCLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sUUFBUSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssT0FBTyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sUUFBUSxPQUFPLFFBQVEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssZUFBZSxhQUFhLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksYUFBYSxPQUFPLFdBQVcsVUFBVSxVQUFVLFlBQVks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O1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL051bml0by1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL051bml0by1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvbG93LXBvbHktZ3JpZC1oYWlrZWkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvY3J5c3RhbHMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDU1MgZm9yIFRvRG8gTGlzdCAqL1xuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xufVxuXG46cm9vdCB7XG4gICAgLS1ncmFkaWVudF9iZ19jb2xvcjojZWRlNWZkO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfY29sb3I6I2UxY2JmYjtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3c6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX2g6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3g6IDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfeTogMCU7XG4gICAgLS1ncmFkaWVudF9zcG90Ml9jb2xvcjojZmZlMGQ2O1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfdzogNzUlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfaDogNzUlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfeDogMTAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3k6IDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDNfY29sb3I6I2ViZTBmZjtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3c6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2g6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3g6IDEwMCU7XG4gICAgLS1ncmFkaWVudF9zcG90M195OiAxMDAlO1xuICAgIFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfY29sb3I6I2ZmZGJmMztcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3c6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X2g6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3g6IDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDRfeTogMTAwJTtcbiAgICBcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3c6MTAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3g6OTQlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfaDo0NCU7XG4gICAgLS1ncmFkaWVudF9zcG90MV93OjUxJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX2g6NjQlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfeDo3JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3c6MTAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2g6ODIlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDNfeDo5MCU7XG4gICAgLS1ncmFkaWVudF9zcG90NF93OjY0JTtcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3g6MCU7XG4gICAgLS1ncmFkaWVudF9zcG90NF95OjQ1JTtcblxuICAgIC8qIFByb2plY3QgQ29sb3VycyAqL1xuICAgIC0tcHJvamVjdF9jb2xvcjE6ICNGRkVERDY7XG4gICAgLS1wcm9qZWN0X2NvbG9yMjogI0ZGQ0I5QTtcbiAgICAtLXByb2plY3RfY29sb3IzOiAjRjhBRUY5O1xuICAgIC0tcHJvamVjdF9jb2xvcjQ6ICNCOERCRkQ7XG4gICAgLS1wcm9qZWN0X2NvbG9yNTogI0M4QkFGQTtcbiAgICAtLXByb2plY3RfY29sb3I2OiAjOEZFNEU5O1xuXG4gICAgLS1kYXJrR3JleTogIzI1MkIzRDtcbiAgICAtLW1lZEdyZXk6ICM5NDk2OWI7XG4gICAgLS1saWdodEdyZXk6ICNlZWU7XG5cbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ29wZW50eXBlJyksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnb3BlbnR5cGUnKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4gIFxuICAuZmFuY3ktZ3JhZGllbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYWRpZW50X2JnX2NvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQodmFyKC0tZ3JhZGllbnRfc3BvdDFfdykgdmFyKC0tZ3JhZGllbnRfc3BvdDFfaCkgYXQgbGVmdCB2YXIoLS1ncmFkaWVudF9zcG90MV94KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDFfeSksIHZhcigtLWdyYWRpZW50X3Nwb3QxX2NvbG9yKSwgdHJhbnNwYXJlbnQpLCByYWRpYWwtZ3JhZGllbnQodmFyKC0tZ3JhZGllbnRfc3BvdDJfdykgdmFyKC0tZ3JhZGllbnRfc3BvdDJfaCkgYXQgbGVmdCB2YXIoLS1ncmFkaWVudF9zcG90Ml94KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDJfeSksIHZhcigtLWdyYWRpZW50X3Nwb3QyX2NvbG9yKSwgdHJhbnNwYXJlbnQpLCByYWRpYWwtZ3JhZGllbnQodmFyKC0tZ3JhZGllbnRfc3BvdDNfdykgdmFyKC0tZ3JhZGllbnRfc3BvdDNfaCkgYXQgbGVmdCB2YXIoLS1ncmFkaWVudF9zcG90M194KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDNfeSksIHZhcigtLWdyYWRpZW50X3Nwb3QzX2NvbG9yKSwgdHJhbnNwYXJlbnQpLCByYWRpYWwtZ3JhZGllbnQodmFyKC0tZ3JhZGllbnRfc3BvdDRfdykgdmFyKC0tZ3JhZGllbnRfc3BvdDRfaCkgYXQgbGVmdCB2YXIoLS1ncmFkaWVudF9zcG90NF94KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDRfeSksIHZhcigtLWdyYWRpZW50X3Nwb3Q0X2NvbG9yKSwgdHJhbnNwYXJlbnQpO1xuICB9XG5cbiBcbiAgXG4vKiAgXG4gIC5hbmltYXRlZCB7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuQGtleWZyYW1lcyBjaGFtZWxlb24ge1xuXG4gICAgMCUge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gICAgMTQuMjk5OSUge1xuICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICB9XG4gICAgMjguNTk5OSUge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICB9XG4gICAgNDIuODk5OCUge1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICA1Ny4xOTk2JSB7XG4gICAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG4gICAgNzEuNDk5NSUge1xuICAgICAgY29sb3I6IGluZGlnbztcbiAgICB9XG4gICAgODUuNzk5NCUge1xuICAgICAgY29sb3I6IHZpb2xldDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxuICAuY2hhbWVsZW9uIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2hhbWVsZW9uO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIH0gVE8gVVNFLCBBREQgQ0xBU1MgQU5JTUFURSBBTkQgQ0xBU1MgQ0hBTUVMRU9OKi9cbiAgXG5cbmJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcblxuICAgIC8qIGZvbnQtc2l6ZTogMS4xMjVyZW07IFxuICBsaW5lLWhlaWdodDogMS41OyAgKi9cblxuXG59XG5cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDg1dmg7XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI0MywgMjQ4LCAwLjYyMik7IFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0NiAyNDMgMjQ4IC8gNTYlKTsgLyogZ3JhZGllbnQgYmxlbmQgaW50byBiZyAgKi9cbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggZmxvcmFsd2hpdGU7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAyZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxLjVmciAwLjVmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXYgaGVsbG8gcHJvamhlYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2IGluZm8gcHJvamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYgaGVhZGluZyBwcm9qZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hdiB0YXNrYm94IHByb2plY3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OlxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KTtcbn1cblxuLm5hdntcbiAgICBncmlkLWFyZWE6IG5hdjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMHB4IDMwcHggMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggbGlnaHRncmF5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLm5hdiAubG9nb3tcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4gICAvKiBzdHlpbmcgb2YgYnV0dG9ucyBvbiBkYXNoICovXG4gIC5idG57XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBnYXA6MTBweDtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM5NDk2OWI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjRCNUI7XG4gICAgLyogY29sb3I6ICNmZjk0ZWE7ICovXG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjZmY5NGVhO1xuICAgIC8qIG91dGxpbmU6IDNweCBzb2xpZCAjRjhBRUY5OyAqL1xuICB9XG5cbiAgLmJ0biBpbWd7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIFxuICB9XG5cbi5oZWxsb3tcbiAgICBncmlkLWFyZWE6IGhlbGxvO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMWNiZmI7ICovXG4gICAgY29sb3I6ICMzMDJiMmI7XG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW1nLWhhbmR7XG4gICAgd2lkdGg6IDExJTtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuLmluZm97XG4gICAgZ3JpZC1hcmVhOiBpbmZvO1xuICBcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywxKSA1MSUsIHJnYmEoMjM4LDIzOCwyMzgsMSkgOTklKTsgICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjM2LDIyNCwyNTMsMSkgNTElLCByZ2JhKDI0NiwyMzcsMjQzLDEpIDk5JSk7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlMGZmOyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBib3gtc2hhZG93OlxuICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXG4gICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcbiAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXG4gICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpOyAgKi9cbiAgIFxuXG59XG5cbi5pbmZvOjpiZWZvcmV7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywwLjEpIDExJSwgcmdiYSgyNDYsMjM3LDI0MywxKSA5OSUpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7IFxuICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDBweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIC8qIGJvcmRlcjogc29saWQgMXB4ICNjNmFkZjI7ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuXG4uaW5mby1pdGVte1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I2M4YWVmODsvKiBiZXN0IGNvbG91ciBvbiBtYWNtaW5pICAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZjc2ZjM7IC8qIGJlc3QgY29sb3Igb24gbWFjYm9vayAqL1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2M2YWRmMjtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2M2YWRmMjtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XG5cbn1cbi5pbmZvIHN0cm9uZ3tcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICBcbn1cblxuLmluZm8taXRlbTpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2YWRmMjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYjQ5MWYxOyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDVweCB3aGl0ZXNtb2tlO1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2QxYmNmODtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2QxYmNmODtcbn1cblxuLmhlYWRpbmd7XG4gICAgZ3JpZC1hcmVhOiBoZWFkaW5nO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6I2VkZTVmZDsgKi9cbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBnYXA6IDVweDtcbn1cblxuLyogQUxMIFBST0pFQ1RTIERJU1BMQVkgKi9cbi50YXNrYm94e1xuICAgIGdyaWQtYXJlYTogdGFza2JveDtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbn1cblxuICAgIC5wcm9qZWN0LWl0ZW17XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDsgKi9cbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4ICMzYTQ3NGUyNiwgMCAxcHggMnB4ICMzYTQ3NGUyNjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkRFMURCO1xuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNmYmRlZDc7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmJkZWQ3O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgfVxuXG4gICAgLnByb2plY3QtaXRlbSBoNXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFya0dyZXkpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB9XG5cbiAgICBwLnByb2plY3QtaXRlbS10YXNrbm8ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tZWRHcmV5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIH1cbiAgICBkaXYucHJvamVjdC1pdGVtLXdyYXBwZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgYnV0dG9uLnByb2plY3QtaXRlbS1lZGl0YnRue1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICBcbiAgICAvKiBwcm9qZWN0LWl0ZW0gaG92ZXJzICovXG4gICAgLnByb2plY3QtaXRlbTpob3ZlcntcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjZjhlY2U5O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2Y4ZWNlOTtcbiAgICB9XG4gICAgYnV0dG9uLnByb2plY3QtaXRlbS1lZGl0YnRuOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICB9XG5cblxuXG5cblxuXG4vKiBQUk9KRUNUIFNFQ1RJT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnByb2poZWFkaW5ne1xuICAgIGdyaWQtYXJlYTogcHJvamhlYWRpbmc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcbiAgICBkaXNwbGF5OmZsZXg7XG5cbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWFyZ2luLXRvcDotMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgei1pbmRleDoxO1xuXG59XG4gICAgXG5cbi5wcm9qZWN0e1xuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAtNXB4IC00NnB4IDU4cHggLTIwcHggbGlnaHRncmV5O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIDk1JTtcbn1cblxuaDIucHJvamVjdC1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdCBoM3tcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8qIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNSk7ICovXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7ICovXG5cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmE4M2ZjLCAjY2FiY2ZiKTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBkZXRhaWxzICovXG4ucHJvamVjdC10YXNrLWl0ZW17XG4gICAgYmFja2dyb3VuZDojZWVlZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTVweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XG59XG5cblxuaW1nLnByb2plY3QtdGFzay1lZGl0YnRuIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuXG5zdW1tYXJ5IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cblxuLnByb2plY3QtdGFzay1wcmlvcml0eXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XG4gICAgY29sb3I6ICMwMDhiOTI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMXB4IDE1cHg7XG59XG5sYWJlbHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5sb3dQcmlvcml0eXtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XG4gICAgY29sb3I6ICMwMDhiOTI7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjQpO1xuICAgIGNvbG9yOiAjMDA4MGZkO1xufVxuXG4uaGlnaFByaW9yaXR5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IzKTtcbiAgICBjb2xvcjojZDAwMmQ0O1xufVxuXG4ubWVkUHJpb3JpdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjIpO1xuICAgIGNvbG9yOiAjZTE2ZDAxO1xufVxuXG4ucHJvamVjdC10YXNrLWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuXG5cbi5wcm9qZWN0LXRhc2staW1ne1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgICBjb2xvcjogdmFyKC0tbWVkR3JleSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDtcbn0gXG4gICAgXG5cblxuXG5cblxuLyogUE9QIFVQUy8gTU9EQUxTICAqL1xuXG4vKiBDcmVhdGUvIEFkZCBOZXcuLi4gICovXG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEuNHJlbTtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgLyogcGFkZGluZzogMS4zcmVtOyAqL1xuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHBpbms7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgYm94LXNoYWRvdzogXG4gICAgICAgICAgMHB4IDQzcHggNzlweCAtMjBweCAjYWY4NmMwLCBcbiAgICAgICAgICAzNHB4IC0xMnB4IDgwcHggLTIwcHggI2ZjZDdlNGQ0O1xuXG4gICAgICAgICAgYm94LXNoYWRvdzogXG4gICAgICAgICAgLTMxcHggMjBweCA2M3B4IC0yMHB4ICNhZjg2YzAsIFxuICAgICAgICAgIDEzcHggLTM1cHggNjNweCAtMnB4ICNmY2Q3ZTRmYTtcblxuICB9XG5cbiAgLmNyZWF0ZS1tb2RhbC1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MnB4O1xuICAgIGxlZnQ6IDQ0JTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkIDRweCBwaW5rO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuXG4gIC5tb2RhbCBoMyB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMTBweDtcbn1cbiAgXG4gICAubW9kYWwgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfSBcblxuXG4uY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4gICBcbiAgLm1vZGFsIGlucHV0IHtcbiAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG4gIFxuICAubW9kYWwgcCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgbWFyZ2luOiAwLjRyZW0gMCAwLjJyZW07XG4gIH1cbiAgXG4gIC5jcmVhdGUtbW9kYWwtYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cblxuXG4gIFxuICAuY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBwaW5rO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDNweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICB9XG5cbiAgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl17XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItbGVmdDogc29saWQgM3B4IHBpbms7XG4gIH1cbiAgXG4gIC5idG4tY2xvc2Uge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgOTcsIDgyLCAwLjUpO1xuICAgIFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4vKiBDVVJSRU5UIFRBU0sgIC0gcmVtb3ZlIGFsbCByZWZlcmVuY2VzIHRvIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCAgKi9cblxuXG5cbiAgLyogVGFzay9Qcm9qZWN0IFN3aXRjaGVyIGluc2lkZSBNb2RhbCAqL1xuLypzZWxlY3RlZCBzaWRlKi9cbmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM0MjQyNDI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogIGJnIG9mIFRhc2sgd2hlbiBub3Qgc2VsZWN0ZWQqL1xuLyogLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCA+IGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcnsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXJ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxwaW5rLCBsYXZlbmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIHRleHQgb2YgVGFzayB3aGVuIG5vdCBzZWxlY3RlZCAgKi9cbi8qIC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggPiBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6YmVmb3JleyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOjpiZWZvcmV7XG4gICAgY29udGVudDogYXR0cihkYXRhLW9uKTsgLyogVGFzayAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0b3A6IDdweDtcbiAgICByaWdodDogMjBweDtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLyogIHByb2plY3Qgc2VsZWN0ZWQgKi9cbi8qIC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggPiBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6YWZ0ZXJ7ICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6OmFmdGVye1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpOyAvKiBQcm9qZWN0ICovXG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMnB4O1xuICAgIHRvcDogMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IC0ycHggIzExMTtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG5cbi8qIC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdeyAqL1xuICBpbnB1dCNjb2xvcl9tb2RlW3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDY4cHg7XG4gICAgbGVmdDogNDQlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi8qICBzZXQgYmcgYW5kIHRleHQgb24gcHJvamVjdCwgbm90IHNlbGVjdGVkICovXG5pbnB1dCNjb2xvcl9tb2RlW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVye1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscGluaywgbGF2ZW5kZXIpO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLyogIFNldHMgYmcgb2YgVGFzayB3aGVuIHNlbGVjdGVkKi9cbmlucHV0I2NvbG9yX21vZGVbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qVGFza3MqL1xuICBsZWZ0OiA2OHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dCNjb2xvcl9tb2RlW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmJlZm9yZXtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTsgLypQcm9qZWN0ICovXG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogMjBweDtcbn1cblxuXG4uY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMtdmlzaWJsZXtcbiAgb3V0bGluZTogc29saWQgMXB4ICNhZjc2ZjM7XG4gXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjtBQUN0QjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsd0JBQXdCOztJQUV4Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsd0JBQXdCOztJQUV4Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHNCQUFzQjs7SUFFdEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCOztJQUV6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7RUFFbkI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckI7OERBQ3FFO0lBQ3JFLGtCQUFrQjtBQUN0Qjs7RUFFRTtJQUNFLDBDQUEwQztJQUMxQyxnckJBQWdyQjtFQUNsckI7Ozs7QUFJRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Oztr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QUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBLG9DQUFvQztBQUNwQyx1RUFBdUU7d0JBQy9DO0lBQ3BCLHNCQUFzQixFQUFFLFNBQVM7SUFDakMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUEsc0JBQXNCO0FBQ3RCLHVFQUF1RTswQkFDN0M7SUFDdEIsdUJBQXVCLEVBQUUsWUFBWTtJQUNyQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCOzs7QUFHQSxtREFBbUQ7RUFDakQ7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQSw4Q0FBOEM7QUFDOUM7RUFDRSxpREFBaUQ7RUFDakQsV0FBVztBQUNiOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLHNCQUFzQixFQUFFLFFBQVE7RUFDaEMsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUIsRUFBRSxXQUFXO0lBQ3BDLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsMEJBQTBCOztBQUU1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDU1MgZm9yIFRvRG8gTGlzdCAqL1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWdyYWRpZW50X2JnX2NvbG9yOiNlZGU1ZmQ7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfY29sb3I6I2UxY2JmYjtcXG4gICAgLS1ncmFkaWVudF9zcG90MV93OiA3NSU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfaDogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3g6IDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3k6IDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX2NvbG9yOiNmZmUwZDY7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfdzogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX2g6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90Ml94OiAxMDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3k6IDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2NvbG9yOiNlYmUwZmY7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfdzogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2g6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90M194OiAxMDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3k6IDEwMCU7XFxuICAgIFxcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X2NvbG9yOiNmZmRiZjM7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfdzogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X2g6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90NF94OiAwJTtcXG4gICAgLS1ncmFkaWVudF9zcG90NF95OiAxMDAlO1xcbiAgICBcXG4gICAgLS1ncmFkaWVudF9zcG90Ml93OjEwMCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfeDo5NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfaDo0NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfdzo1MSU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfaDo2NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfeDo3JTtcXG4gICAgLS1ncmFkaWVudF9zcG90M193OjEwMCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfaDo4MiU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfeDo5MCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfdzo2NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfeDowJTtcXG4gICAgLS1ncmFkaWVudF9zcG90NF95OjQ1JTtcXG5cXG4gICAgLyogUHJvamVjdCBDb2xvdXJzICovXFxuICAgIC0tcHJvamVjdF9jb2xvcjE6ICNGRkVERDY7XFxuICAgIC0tcHJvamVjdF9jb2xvcjI6ICNGRkNCOUE7XFxuICAgIC0tcHJvamVjdF9jb2xvcjM6ICNGOEFFRjk7XFxuICAgIC0tcHJvamVjdF9jb2xvcjQ6ICNCOERCRkQ7XFxuICAgIC0tcHJvamVjdF9jb2xvcjU6ICNDOEJBRkE7XFxuICAgIC0tcHJvamVjdF9jb2xvcjY6ICM4RkU0RTk7XFxuXFxuICAgIC0tZGFya0dyZXk6ICMyNTJCM0Q7XFxuICAgIC0tbWVkR3JleTogIzk0OTY5YjtcXG4gICAgLS1saWdodEdyZXk6ICNlZWU7XFxuXFxuICB9XFxuXFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9OdW5pdG8tVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCdvcGVudHlwZScpLFxcbiAgICB1cmwoJy4vZm9udHMvTnVuaXRvLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuICBcXG4gIC5mYW5jeS1ncmFkaWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYWRpZW50X2JnX2NvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QxX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QxX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDFfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QxX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90MV9jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QyX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QyX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDJfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QyX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90Ml9jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QzX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QzX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDNfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QzX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90M19jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3Q0X3cpIHZhcigtLWdyYWRpZW50X3Nwb3Q0X2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDRfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3Q0X3kpLCB2YXIoLS1ncmFkaWVudF9zcG90NF9jb2xvciksIHRyYW5zcGFyZW50KTtcXG4gIH1cXG5cXG4gXFxuICBcXG4vKiAgXFxuICAuYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgfVxcbkBrZXlmcmFtZXMgY2hhbWVsZW9uIHtcXG5cXG4gICAgMCUge1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG4gICAgMTQuMjk5OSUge1xcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIH1cXG4gICAgMjguNTk5OSUge1xcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XFxuICAgIH1cXG4gICAgNDIuODk5OCUge1xcbiAgICAgIGNvbG9yOiBncmVlbjtcXG4gICAgfVxcbiAgICA1Ny4xOTk2JSB7XFxuICAgICAgY29sb3I6IGJsdWU7XFxuICAgIH1cXG4gICAgNzEuNDk5NSUge1xcbiAgICAgIGNvbG9yOiBpbmRpZ287XFxuICAgIH1cXG4gICAgODUuNzk5NCUge1xcbiAgICAgIGNvbG9yOiB2aW9sZXQ7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbiAgfVxcbiAgLmNoYW1lbGVvbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFtZWxlb247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICB9IFRPIFVTRSwgQUREIENMQVNTIEFOSU1BVEUgQU5EIENMQVNTIENIQU1FTEVPTiovXFxuICBcXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICMyMjI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG5cXG4gICAgLyogZm9udC1zaXplOiAxLjEyNXJlbTsgXFxuICBsaW5lLWhlaWdodDogMS41OyAgKi9cXG5cXG5cXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIHdpZHRoOiA4NXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQzLCAyNDgsIDAuNjIyKTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0NiAyNDMgMjQ4IC8gNTYlKTsgLyogZ3JhZGllbnQgYmxlbmQgaW50byBiZyAgKi9cXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IGZsb3JhbHdoaXRlO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDEuNWZyIDAuNWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm5hdiBoZWxsbyBwcm9qaGVhZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hdiBpbmZvIHByb2plY3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJuYXYgaGVhZGluZyBwcm9qZWN0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwibmF2IHRhc2tib3ggcHJvamVjdFxcXCI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6XFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4Nik7XFxufVxcblxcbi5uYXZ7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweCAzMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggbGlnaHRncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uYXYgLmxvZ297XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbn1cXG5cXG4gICAvKiBzdHlpbmcgb2YgYnV0dG9ucyBvbiBkYXNoICovXFxuICAuYnRue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzk0OTY5YjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjRCNUI7XFxuICAgIC8qIGNvbG9yOiAjZmY5NGVhOyAqL1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjZmY5NGVhO1xcbiAgICAvKiBvdXRsaW5lOiAzcHggc29saWQgI0Y4QUVGOTsgKi9cXG4gIH1cXG5cXG4gIC5idG4gaW1ne1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIFxcbiAgfVxcblxcbi5oZWxsb3tcXG4gICAgZ3JpZC1hcmVhOiBoZWxsbztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UxY2JmYjsgKi9cXG4gICAgY29sb3I6ICMzMDJiMmI7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmltZy1oYW5ke1xcbiAgICB3aWR0aDogMTElO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuXFxuLmluZm97XFxuICAgIGdyaWQtYXJlYTogaW5mbztcXG4gIFxcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywxKSA1MSUsIHJnYmEoMjM4LDIzOCwyMzgsMSkgOTklKTsgICovXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzNiwyMjQsMjUzLDEpIDUxJSwgcmdiYSgyNDYsMjM3LDI0MywxKSA5OSUpOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ViZTBmZjsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiBib3gtc2hhZG93OlxcbiAgICAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxcbiAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcbiAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxuICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKTsgICovXFxuICAgXFxuXFxufVxcblxcbi5pbmZvOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywwLjEpIDExJSwgcmdiYSgyNDYsMjM3LDI0MywxKSA5OSUpLCB1cmwoJy9zcmMvaW1hZ2VzL2xvdy1wb2x5LWdyaWQtaGFpa2VpLnBuZycpOyBcXG4gICAgXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwcHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4ICNjNmFkZjI7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuXFxuLmluZm8taXRlbXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzhhZWY4Oy8qIGJlc3QgY29sb3VyIG9uIG1hY21pbmkgICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZjc2ZjM7IC8qIGJlc3QgY29sb3Igb24gbWFjYm9vayAqL1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNjNmFkZjI7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjYzZhZGYyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XFxuXFxufVxcbi5pbmZvIHN0cm9uZ3tcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgIFxcbn1cXG5cXG4uaW5mby1pdGVtOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmFkZjI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNiNDkxZjE7ICovXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDVweCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNkMWJjZjg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZDFiY2Y4O1xcbn1cXG5cXG4uaGVhZGluZ3tcXG4gICAgZ3JpZC1hcmVhOiBoZWFkaW5nO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNlZGU1ZmQ7ICovXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi8qIEFMTCBQUk9KRUNUUyBESVNQTEFZICovXFxuLnRhc2tib3h7XFxuICAgIGdyaWQtYXJlYTogdGFza2JveDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4gICAgLnByb2plY3QtaXRlbXtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBtYXJnaW46IDhweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDsgKi9cXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGREUxREI7XFxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNmYmRlZDc7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZiZGVkNztcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1pdGVtIGg1e1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICB9XFxuXFxuICAgIHAucHJvamVjdC1pdGVtLXRhc2tubyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbWVkR3JleSk7XFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcXG4gICAgfVxcbiAgICBkaXYucHJvamVjdC1pdGVtLXdyYXBwZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgfVxcbiAgICBidXR0b24ucHJvamVjdC1pdGVtLWVkaXRidG57XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcbiAgXFxuICAgIC8qIHByb2plY3QtaXRlbSBob3ZlcnMgKi9cXG4gICAgLnByb2plY3QtaXRlbTpob3ZlcntcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2Y4ZWNlOTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZjhlY2U5O1xcbiAgICB9XFxuICAgIGJ1dHRvbi5wcm9qZWN0LWl0ZW0tZWRpdGJ0bjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gICAgfVxcblxcblxcblxcblxcblxcblxcbi8qIFBST0pFQ1QgU0VDVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLnByb2poZWFkaW5ne1xcbiAgICBncmlkLWFyZWE6IHByb2poZWFkaW5nO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOi0yMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG5cXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgei1pbmRleDoxO1xcblxcbn1cXG4gICAgXFxuXFxuLnByb2plY3R7XFxuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogLTVweCAtNDZweCA1OHB4IC0yMHB4IGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2ltYWdlcy9jcnlzdGFscy5wbmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIDk1JTtcXG59XFxuXFxuaDIucHJvamVjdC1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QgaDN7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAvKiBjb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjUpOyAqL1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpOyAqL1xcblxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmE4M2ZjLCAjY2FiY2ZiKTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBkZXRhaWxzICovXFxuLnByb2plY3QtdGFzay1pdGVte1xcbiAgICBiYWNrZ3JvdW5kOiNlZWVlZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggIzNhNDc0ZTI2LCAwIDFweCAycHggIzNhNDc0ZTI2O1xcbn1cXG5cXG5cXG5pbWcucHJvamVjdC10YXNrLWVkaXRidG4ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRhc2stcHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I2KTtcXG4gICAgY29sb3I6ICMwMDhiOTI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMXB4IDE1cHg7XFxufVxcbmxhYmVse1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5sb3dQcmlvcml0eXtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjYpO1xcbiAgICBjb2xvcjogIzAwOGI5MjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjQpO1xcbiAgICBjb2xvcjogIzAwODBmZDtcXG59XFxuXFxuLmhpZ2hQcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjMpO1xcbiAgICBjb2xvcjojZDAwMmQ0O1xcbn1cXG5cXG4ubWVkUHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IyKTtcXG4gICAgY29sb3I6ICNlMTZkMDE7XFxufVxcblxcbi5wcm9qZWN0LXRhc2stZGVzY3JpcHRpb257XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5cXG5cXG4ucHJvamVjdC10YXNrLWltZ3tcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTFweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwsXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXG4gICAgY29sb3I6IHZhcigtLW1lZEdyZXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50O1xcbn0gXFxuICAgIFxcblxcblxcblxcblxcblxcbi8qIFBPUCBVUFMvIE1PREFMUyAgKi9cXG5cXG4vKiBDcmVhdGUvIEFkZCBOZXcuLi4gICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMS40cmVtO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDEuM3JlbTsgKi9cXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBwaW5rO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB6LWluZGV4OiAyO1xcblxcbiAgICBib3gtc2hhZG93OiBcXG4gICAgICAgICAgMHB4IDQzcHggNzlweCAtMjBweCAjYWY4NmMwLCBcXG4gICAgICAgICAgMzRweCAtMTJweCA4MHB4IC0yMHB4ICNmY2Q3ZTRkNDtcXG5cXG4gICAgICAgICAgYm94LXNoYWRvdzogXFxuICAgICAgICAgIC0zMXB4IDIwcHggNjNweCAtMjBweCAjYWY4NmMwLCBcXG4gICAgICAgICAgMTNweCAtMzVweCA2M3B4IC0ycHggI2ZjZDdlNGZhO1xcblxcbiAgfVxcblxcbiAgLmNyZWF0ZS1tb2RhbC1pY29ue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTUycHg7XFxuICAgIGxlZnQ6IDQ0JTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlcjogc29saWQgNHB4IHBpbms7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIH1cXG5cXG4gIC5tb2RhbCBoMyB7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvIDEwcHg7XFxufVxcbiAgXFxuICAgLm1vZGFsIC5mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9IFxcblxcblxcbi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYSB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4gICBcXG4gIC5tb2RhbCBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICB9XFxuICBcXG4gIC5tb2RhbCBwIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiAjNzc3O1xcbiAgICBtYXJnaW46IDAuNHJlbSAwIDAuMnJlbTtcXG4gIH1cXG4gIFxcbiAgLmNyZWF0ZS1tb2RhbC1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcblxcblxcbiAgXFxuICAuY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcGluaztcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDNweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXG4gIH1cXG5cXG4gIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXXtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggcGluaztcXG4gIH1cXG4gIFxcbiAgLmJ0bi1jbG9zZSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDk3LCA4MiwgMC41KTtcXG4gICAgXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuLyogQ1VSUkVOVCBUQVNLICAtIHJlbW92ZSBhbGwgcmVmZXJlbmNlcyB0byBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggICovXFxuXFxuXFxuXFxuICAvKiBUYXNrL1Byb2plY3QgU3dpdGNoZXIgaW5zaWRlIE1vZGFsICovXFxuLypzZWxlY3RlZCBzaWRlKi9cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICM0MjQyNDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qICBiZyBvZiBUYXNrIHdoZW4gbm90IHNlbGVjdGVkKi9cXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoID4gbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyeyAqL1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXJ7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHBpbmssIGxhdmVuZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiB0ZXh0IG9mIFRhc2sgd2hlbiBub3Qgc2VsZWN0ZWQgICovXFxuLyogLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCA+IGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjpiZWZvcmV7ICovXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qIFRhc2sgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRvcDogN3B4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi8qICBwcm9qZWN0IHNlbGVjdGVkICovXFxuLyogLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCA+IGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjphZnRlcnsgICovXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6OmFmdGVye1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTsgLyogUHJvamVjdCAqL1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDJweDtcXG4gICAgdG9wOiAycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggLTJweCAjMTExO1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG5cXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17ICovXFxuICBpbnB1dCNjb2xvcl9tb2RlW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2OHB4O1xcbiAgICBsZWZ0OiA0NCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKiAgc2V0IGJnIGFuZCB0ZXh0IG9uIHByb2plY3QsIG5vdCBzZWxlY3RlZCAqL1xcbmlucHV0I2NvbG9yX21vZGVbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVye1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHBpbmssIGxhdmVuZGVyKTtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4vKiAgU2V0cyBiZyBvZiBUYXNrIHdoZW4gc2VsZWN0ZWQqL1xcbmlucHV0I2NvbG9yX21vZGVbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmFmdGVye1xcbiAgY29udGVudDogYXR0cihkYXRhLW9uKTsgLypUYXNrcyovXFxuICBsZWZ0OiA2OHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmlucHV0I2NvbG9yX21vZGVbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmJlZm9yZXtcXG4gICAgY29udGVudDogYXR0cihkYXRhLW9mZik7IC8qUHJvamVjdCAqL1xcbiAgICByaWdodDogYXV0bztcXG4gICAgbGVmdDogMjBweDtcXG59XFxuXFxuXFxuLmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cy12aXNpYmxle1xcbiAgb3V0bGluZTogc29saWQgMXB4ICNhZjc2ZjM7XFxuIFxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy9PdXIgbWFpbiBmaWxlIC0gaGFuZGxlcyByZXF1ZXN0cy4gVGVsbHMgbW9kZWwgd2hhdCB0byBkbyAobG9naWMgd2lzZSksIFxuLy90ZWxscyB2aWV3IHdoYXQgZG8gdG8uXG4vL0NvbnRyb2xzIGFuZCBkZWNpZGVzIGhvdyBkYXRhIGlzIGRpc3BsYXllZFxuaW1wb3J0IHsgdGhpc2lzdGhldmlldyB9IGZyb20gJy4vdmlldy5qcyc7XG5pbXBvcnQgeyBtb2RlbGZ1bmMgfSBmcm9tICcuL21vZGVsLmpzJztcblxuXG5cbi8vaW5pdGl0YXRpb24gZnVuY3Rpb24gXG50aGlzaXN0aGV2aWV3KCk7XG5tb2RlbGZ1bmMoKTtcblxuXG5cbi8vZnVuY3Rpb24gdGhhdCBydW5zIHdoZW4gc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qTmFtZSl7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0ZU5ld1Byb2plY3QgZmlyaW5nJyk7XG4gICAgY29uc29sZS5sb2cocHJvak5hbWUpOyAgICAvL3Bhc3MgcHJvam5hbWUgdG8gbW9kZWwgdG8gY3JlYXRlIG5ldyBwcm9qZWN0IFxuIFxuXG4gICAgLy90aGlzIHNob3VsZCBiZSBhIGNhbGwgdG8gYSBmdW5jdGlvbiBpbnNpZGUgbW9kZWwsIHBhc3NpbmcgdGhlIHByb2pOYW1lXG4gICAgY3JlYXRlTmV3UHJvakZhY3RvcnkocHJvak5hbWUpO1xuXG59XG5cbmV4cG9ydCBjb25zdCBwdWJTdWIgPSB7XG4gIGV2ZW50czoge30sXG4gIHN1YnNjcmliZTogZnVuY3Rpb24oZXZOYW1lLCBmbil7XG4gICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2TmFtZX1gKTtcbiAgICAvL2FkZCBhbiBldmVudCB3aXRoIGEgbmFtZSBhcyBuZXcgb3IgdG8gZXhpc3RpbmcgbGlzdFxuICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdIHx8IFtdO1xuICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0ucHVzaChmbik7XG4gIH0sXG4gIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKXtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3QgVU5zdWJzY3JpYmVkIGZyb20gJHtldk5hbWV9YCk7XG4gICAgLy9yZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxuICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKXtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0uZmlsdGVyKGYgPT4gZiAhPT0gZm4pO1xuICAgIH1cbiAgfSxcbiAgcHVibGlzaDogZnVuY3Rpb24oZXZOYW1lLCBkYXRhKXtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBNYWtpbmcgYSBicm9hZGNhc3QgYWJvdXQgJHtldk5hbWV9IHdpdGggJHtkYXRhfWApO1xuICAgIC8vZW1pdC9wdWJsaXNoIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSl7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIGYoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbiIsIi8vdGhlIG1vZGVsIGhhbmRsZXMgYWxsIHRoZSBkYXRhIGFuZCBsb2dpYyBcbmV4cG9ydCB7IG1vZGVsZnVuYyB9O1xuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5cblxuZnVuY3Rpb24gbW9kZWxmdW5jKCl7XG4gICAgLy9jb25zb2xlLmxvZygndGVzdGluZyBmcm9tIG1vZGVsZnVuYygpJyk7XG4gICAgLy8gLy9hcnJheSBvZiBhbGwgcHJvamVjdHNcbiAgICBsZXQgYWxsUHJvamVjdHNBcnIgPSBbXTtcblxuXG4gICAgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUpeyBcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGFza3MgPSBbXTtcbiAgICAgICAgY3JlYXRlUHJvaigpe1xuICAgICAgICAgICAgLy9jcmVhdGVzIG5ldyBwcm9qZWN0IGFuZCBwdXQgaW4gcHJvamVjdHMgYXJyYXkgLSBjdXJyZW50bHkgdXNlcyBuYW1lIG9mIHByb2ogYnV0IHdvdWxkIGlkIyBzeXN0ZW0gYmUgYmV0dGVyP1xuICAgICAgICAgICAgYWxsUHJvamVjdHNBcnIucHVzaCh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHNBcnIpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZVByb2ooKXtcbiAgICAgICAgICAgIC8vbW9kYWwgcG9wIHVwICdhcmUgeW91IHN1cmUnIGlmIHllcyxcbiAgICAgICAgICAgIC8vZmluZCBwcm9qIGluIHByb2pzIGFycmF5IGFuZCBkZWxldGVzLiBwcm9qIGFycnJheSBpcyB1cGRhdGVkLlxuICAgICAgICB9XG4gICAgfVxuICAgIC8vc2V0IHVwIGRlZmF1bHQgcHJvamVjdFxuICAgIGxldCBkZWZhdWx0cHJvaiA9IG5ldyBQcm9qZWN0KCdkZWZhdWx0Jyk7XG4gICAgZGVmYXVsdHByb2ouY3JlYXRlUHJvaigpO1xuXG4gICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2pGYWN0b3J5KHByb2pOYW1lKXtcbiAgICAgICAgbGV0IG5ld3Byb2pOYW1lID0gbmV3IFByb2plY3QgKHByb2pOYW1lKTtcbiAgICAgICAgbmV3cHJvak5hbWUuY3JlYXRlUHJvaigpO1xuICAgIH1cbiAgXG5cbiAgXG5cbiAgICAvLyBjbGFzcyBUYXNrIHtcbiAgICAvLyAgICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIHByaW9yaXR5LCBkdWVkYXRlKXtcbiAgICAvLyAgICAgICAgIHRoaXMubmFtZSA9IG5hbWUsXG4gICAgLy8gICAgICAgICB0aGlzLmljb24gPSBpY29uLFxuICAgIC8vICAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG59IiwiLy90aGUgdmlldyBoYW5kbGVzIGhvdyB0aGUgVUkgaXMgZGlzcGxheWVkLiBPbmx5IHRhbGtzIHRvIGNvbnRyb2xsZXIuIFxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiB0aGlzaXN0aGV2aWV3KCl7XG5cbiAgICBsZXQgZG9tQ2FjaGVkRWxlbWVudHMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIiksXG4gICAgICAgIGFkZGJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYWRkXCIpLFxuICAgfVxuXG4gICAgbGV0IG1vZGFsRWxlbWVudHMgPSB7XG4gICAgICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKSxcbiAgICAgICAgc3VibWl0YnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKSxcbiAgICAgICAgb3ZlcmxheTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpLFxuICAgICAgICBjbG9zZU1vZGFsQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jbG9zZVwiKVxuICAgIH1cblxuICBcblxuICAgLy9vcGVucyBtb2RhbCB0byBjcmVhdGUgbmV3IHByb2plY3QvdGFza1xuICAgY29uc3Qgb3Blbk1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb2RhbEVsZW1lbnRzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIG1vZGFsRWxlbWVudHMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH07XG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gb3BlbiBtb2RhbCBvbiBjbGlja1xuICAgIGRvbUNhY2hlZEVsZW1lbnRzLmFkZGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsKTtcblxuICAgIC8vY2xvc2VzIG1vZGFsXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW9kYWxFbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBtb2RhbEVsZW1lbnRzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9O1xuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIG1vZGFsIG9uIGNsaWNrXG4gICAgbW9kYWxFbGVtZW50cy5jbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbiAgICBtb2RhbEVsZW1lbnRzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAgIG1vZGFsRWxlbWVudHMuc3VibWl0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuXG5cblxuICAgIG1vZGFsRWxlbWVudHMuc3VibWl0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIC8vdGhpcyBmdW5jdGlvbiBtYXkgbmVlZCB0byBiZSBtb3ZlZCB0byBjb250cm9sbGVyXG4gICAgLy9nZXQgdGhlIHZhbHVlIGZyb20gdGhlIGlucHV0LCBkaXNwbGF5IG9uIHNjcmVlbiBcblxuICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICAgbGV0IHByb2puYW1lID0gbW9kYWxFbGVtZW50cy5uYW1lLnZhbHVlO1xuXG4gICAgLy9jcmVhdGVOZXdQcm9qZWN0KHByb2puYW1lKTtcbiAgICAvL2N1cnJlbnRseSB3aXBlcyBhbGwgY29udGVudCBmcm9tIGNvbnRhaW5lciBhbmQgZGlzcGxheXMgcHJvam5hbWUsIGluc3RlYWQgbmVlZHMgdG86XG4gICAgLy8gICAgICAgICAgcGFzcyBuYW1lIHRvIGNvbnRyb2xsZXIgXG4gICAgLy8gICAgICAgICAgY29udHJvbGxlciByZWNlaXZlZCBuYW1lIGFuZCBwYXNzZXMgdG8gbW9kZWxcbiAgICAvLyAgICAgICAgICBtb2RlbCByZWNlaXZlcyBuYW1lIGFuZCBjcmVhdGVzIG5ldyBwcm9qZWN0IGFuZCBhZGRzIGl0IHRvIHRoZSBwcm9qZWN0IGFycmF5XG4gICAgLy8gICAgICAgICAgcGFzc2VzIHByb2plY3QgYXJyYXkgYmFjayB0byBjb250cm9sbGVyXG4gICAgLy8gICAgICAgICAgY29udHJvbGxlciBwYXNzZXMgcHJvamVjdCB0byB2aWV3IHRvIGRpc3BsYXkgXG4gICAgIGRvbUNhY2hlZEVsZW1lbnRzLmNvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2puYW1lO1xuICAgfSk7XG5cblxuXG5cbi8vICAgIFxuXG5cbiAgICAgICAgbGV0IGNyZWF0ZU5ld1Byb2pFbGVtZW50cyA9IHtcbiAgICAgICAgICAgIG5hbWVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjY29sb3JfbW9kZVt0eXBlPVwiY2hlY2tib3hcIl0nKSxcbiAgICAgICAgICAgIHRvZ2dsZU1vZGFsRGlzcGxheTogZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmdW5jdGlvbiB0b2dnbGVNb2RhbERpc3BsYXkgcmVhY2hlZFwiKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlTmV3UHJvakVsZW1lbnRzLm5hbWVJbnB1dC5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2dnbGUgaXMgY2hlY2tlZC8gQWRkIG5ldyBUQVNLXCIpO1xuICAgICAgICAgICAgICAgICAgICAvL2Z1bmN0aW9uIHRoYXQgcmV0dXJucyBlbGVtZW50IC0gd2lsbCBiZSBpdHMgb3duIG1vZHVsZT9cbiAgICAgICAgICAgICAgICAgICAgLy9hcHBlbmQgcmV0dXJuZWQgZWxlbWVudCB0byBkaXZcblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvL2lmIGRpdiBoYXMgY2hpbGRyZW4sIHJlbW92ZSBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGl2Lmhhc0NoaWxkTm9kZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGRpdi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50PVwiVGFzayBOYW1lOlwiO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmFtZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2dnbGUgbm90IGNoZWNrZWQvIEFkZCBuZXcgUFJPSkVDVFwiKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVsZW1lbnQgLSB3aWxsIGJlIGl0cyBvd24gbW9kdWxlP1xuICAgICAgICAgICAgICAgICAgICAvL2FwcGVuZCByZXR1cm5lZCBlbGVtZW50IHRvIGRpdlxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvL2lmIGRpdiBoYXMgY2hpbGRyZW4sIHJlbW92ZSBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGl2Lmhhc0NoaWxkTm9kZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGRpdi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJwcm9qTmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQ9XCJQcm9qZWN0IE5hbWU6XCI7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qTmFtZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICBcblxuXG5cbiAgICAgICAgY3JlYXRlTmV3UHJvakVsZW1lbnRzLm5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3UHJvakVsZW1lbnRzLnRvZ2dsZU1vZGFsRGlzcGxheSk7XG5cbiAgICAgIFxuICAgIFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb250cm9sbGVyLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9