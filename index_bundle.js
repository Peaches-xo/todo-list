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











`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS for ToDo List */\n*{\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    list-style-type: none;\n    box-sizing: border-box;\n    font-family: 'Nunito';\n}\n\n:root {\n    --gradient_bg_color:#ede5fd;\n    --gradient_spot1_color:#e1cbfb;\n    --gradient_spot1_w: 75%;\n    --gradient_spot1_h: 75%;\n    --gradient_spot1_x: 0%;\n    --gradient_spot1_y: 0%;\n    --gradient_spot2_color:#ffe0d6;\n    --gradient_spot2_w: 75%;\n    --gradient_spot2_h: 75%;\n    --gradient_spot2_x: 100%;\n    --gradient_spot2_y: 0%;\n    --gradient_spot3_color:#ebe0ff;\n    --gradient_spot3_w: 75%;\n    --gradient_spot3_h: 75%;\n    --gradient_spot3_x: 100%;\n    --gradient_spot3_y: 100%;\n    \n    --gradient_spot4_color:#ffdbf3;\n    --gradient_spot4_w: 75%;\n    --gradient_spot4_h: 75%;\n    --gradient_spot4_x: 0%;\n    --gradient_spot4_y: 100%;\n    \n    --gradient_spot2_w:100%;\n    --gradient_spot2_x:94%;\n    --gradient_spot2_h:44%;\n    --gradient_spot1_w:51%;\n    --gradient_spot1_h:64%;\n    --gradient_spot1_x:7%;\n    --gradient_spot3_w:100%;\n    --gradient_spot3_h:82%;\n    --gradient_spot3_x:90%;\n    --gradient_spot4_w:64%;\n    --gradient_spot4_x:0%;\n    --gradient_spot4_y:45%;\n\n    /* Project Colours */\n    --project_color1: #FFEDD6;\n    --project_color2: #FFCB9A;\n    --project_color3: #F8AEF9;\n    --project_color4: #B8DBFD;\n    --project_color5: #C8BAFA;\n    --project_color6: #8FE4E9;\n\n    --darkGrey: #252B3D;\n    --medGrey: #94969b;\n    --lightGrey: #eee;\n\n  }\n\n  @font-face {\n    font-family: 'Nunito';\n    src: url('./fonts/Nunito-VariableFont_wght.ttf') format('opentype'),\n    url('./fonts/Nunito-Italic-VariableFont_wght.ttf') format('opentype');\n    font-style: normal;\n}\n  \n  .fancy-gradient {\n    background-color: var(--gradient_bg_color);\n    background-image: radial-gradient(var(--gradient_spot1_w) var(--gradient_spot1_h) at left var(--gradient_spot1_x) top var(--gradient_spot1_y), var(--gradient_spot1_color), transparent), radial-gradient(var(--gradient_spot2_w) var(--gradient_spot2_h) at left var(--gradient_spot2_x) top var(--gradient_spot2_y), var(--gradient_spot2_color), transparent), radial-gradient(var(--gradient_spot3_w) var(--gradient_spot3_h) at left var(--gradient_spot3_x) top var(--gradient_spot3_y), var(--gradient_spot3_color), transparent), radial-gradient(var(--gradient_spot4_w) var(--gradient_spot4_h) at left var(--gradient_spot4_x) top var(--gradient_spot4_y), var(--gradient_spot4_color), transparent);\n  }\n\n \n  \n/*  \n  .animated {\n    animation-fill-mode: both;\n  }\n@keyframes chameleon {\n\n    0% {\n      color: red;\n    }\n    14.2999% {\n      color: orange;\n    }\n    28.5999% {\n      color: yellow;\n    }\n    42.8998% {\n      color: green;\n    }\n    57.1996% {\n      color: blue;\n    }\n    71.4995% {\n      color: indigo;\n    }\n    85.7994% {\n      color: violet;\n    }\n    100% {\n      color: red;\n    }\n  }\n  .chameleon {\n    animation-name: chameleon;\n    animation-duration: 5s;\n  } TO USE, ADD CLASS ANIMATE AND CLASS CHAMELEON*/\n  \n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: #222;\n    position: relative;\n    min-height: 100vh;\n    overflow:hidden;\n\n    /* font-size: 1.125rem; \n  line-height: 1.5;  */\n\n\n}\n\n.container{\n    padding: 20px;\n    border-radius: 20px;\n    margin: auto;\n    height: 85vh;\n    width: 85vw;\n    background-color: rgba(246, 243, 248, 0.622); \n    background-color:rgb(246 243 248 / 56%); /* gradient blend into bg  */\n    box-shadow: 0px 0px 0px 1px floralwhite;\n    display:grid;\n    overflow: auto;\n    grid-template-columns: 1fr 3fr 2fr;\n    grid-template-rows: 0.5fr 1.5fr 0.5fr 3fr;\n    grid-template-areas: \"nav hello projheading\"\n                         \"nav info project\"\n                         \"nav heading project\"\n                         \"nav taskbox project\";\n                         box-shadow:\n                         0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n                         0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n                         0 12.5px 10px rgba(0, 0, 0, 0.06),\n                         0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n                         0 41.8px 33.4px rgba(0, 0, 0, 0.086);\n}\n\n.nav{\n    grid-area: nav;\n    border-radius: 10px;\n    margin: 0px 30px 0px 20px;\n    background-color: var(--darkGrey);\n    box-shadow: 0px 0px 10px 3px lightgray;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.nav .logo{\n  align-self: center;\n  margin: 5px auto;\n}\n\n   /* stying of buttons on dash */\n  .btn{\n    display: inline-block;\n    display:flex;\n    gap:10px;\n    padding: 0.8rem;\n    background: transparent;\n    border: solid 5px transparent;\n    color: #94969b;\n    cursor: pointer;\n    transition: 0.3s ease;\n    font-size: 0.9rem;\n    width: 100%;\n    text-align: left;\n    align-items: center;\n  }\n\n  .btn:hover{\n    background-color: #464B5B;\n    /* color: #ff94ea; */\n    color: #fff;\n    border-left: solid 5px #ff94ea;\n    /* outline: 3px solid #F8AEF9; */\n  }\n\n  .btn img{\n    margin-right: 5px;\n  \n  }\n\n.hello{\n    grid-area: hello;\n    /* background-color: #e1cbfb; */\n    color: #302b2b;\n    color: var(--darkGrey);\n    font-size: 40px;\n    font-weight: bold;\n    display:flex;\n    align-items: center;\n}\n.img-hand{\n    width: 11%;\n    padding: 0px 10px;\n}\n\n.info{\n    grid-area: info;\n  \n    /* background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(238,238,238,1) 99%);  */\n    background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(246,237,243,1) 99%); \n    display: flex;\n    border-radius: 10px;\n    /* background-color: #ebe0ff; */\n    position: relative;\n    /* box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072);  */\n   \n\n}\n\n.info::before{\n    content: \"\";\n    background-image: linear-gradient(0deg, rgba(236,224,253,0.1) 11%, rgba(246,237,243,1) 99%), url('/src/images/low-poly-grid-haikei.png'); \n    \n    background-size: contain;\n    background-position: 100px 0px;\n    border-radius:10px;\n    /* border: solid 1px #c6adf2; */\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.5;\n}\n\n\n.info-item{\n    padding: 10px;\n    margin: 20px 10px;\n    width: 100px;\n    background-color:#c8aef8;/* best colour on macmini  */\n    background-color: #af76f3; /* best color on macbook */\n    border-left: solid 2px #c6adf2;\n    border-bottom: solid 2px #c6adf2;\n    color: whitesmoke;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    transition: 0.3s ease;\n    position: relative;\n    box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n\n}\n.info strong{\n    font-size: 30px;\n   \n}\n\n.info-item:hover{\n    transform: translateY(-5px);\n    background-color: #c6adf2;\n    /* background-color: #b491f1; */\n    box-shadow: 0px 0px 8px 5px whitesmoke;\n    border-left: solid 2px #d1bcf8;\n    border-bottom: solid 2px #d1bcf8;\n}\n\n.heading{\n    grid-area: heading;\n    /* background-color:#ede5fd; */\n    margin-top: 10px;\n    font-weight: 400;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    gap: 5px;\n}\n\n/* ALL PROJECTS DISPLAY */\n.taskbox{\n    grid-area: taskbox;\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n    .project-item{\n        border-radius: 10px;\n        margin: 8px;\n        padding: 10px;\n        display: flex;\n        flex-direction:column;\n        justify-content: space-between;\n        /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */\n        box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n        background-color:#FDE1DB;\n        border-left: solid 2px #fbded7;\n        border-bottom: solid 2px #fbded7;\n        transition: 0.4s ease;\n    }\n\n    .project-item h5{\n        font-size: 18px;\n        color: var(--darkGrey);\n        padding-left: 5px;\n    }\n\n    p.project-item-taskno {\n        padding-left: 10px;\n        color: var(--medGrey);\n        font-weight: 200;\n        font-style: italic;\n        font-size: 14px;\n        letter-spacing: 0.1px;\n        margin-top: -7px;\n        margin-bottom: 7px;\n    }\n    div.project-item-wrapper{\n        display: flex;\n        justify-content: flex-end;\n        align-items: flex-end;\n    }\n    button.project-item-editbtn{\n        border: solid 1px transparent;\n        transition: 0.3s;\n        background-color: transparent;\n    }\n  \n    /* project-item hovers */\n    .project-item:hover{\n        border-left: solid 2px #f8ece9;\n        border-bottom: solid 2px #f8ece9;\n    }\n    button.project-item-editbtn:hover{\n        cursor: pointer;\n        transform: translateY(-2px);\n    }\n\n\n\n\n\n\n/* PROJECT SECTION ------------------------------------- */\n.projheading{\n    grid-area: projheading;\n    background-color: white;\n    color: var(--darkGrey);\n    display:flex;\n\n    align-items:center;\n    gap: 5px;\n    margin-top:-20px;\n    margin-right: -20px;\n    margin-left: 40px;\n\n    border-top-right-radius: 20px;\n    border-top-left-radius: 15px;\n    padding-left: 20px;\n    z-index:1;\n\n}\n    \n\n.project{\n    grid-area: project;\n    background-color: #fff;\n    margin-right: -20px;\n    margin-left: 40px;\n    margin-bottom: -20px;\n    border-bottom-right-radius: 20px;\n    border-bottom-left-radius: 15px;\n    box-shadow: -5px -46px 58px -20px lightgrey;\n    padding: 10px;\n    background-image: url(\"/src/images/crystals.png\");\n    background-repeat: no-repeat;\n    background-position: 95% 95%;\n}\n\nh2.project-heading {\n  text-align: center;\n}\n\n.project h3,\n.gradient-h3{\n    padding: 10px 0px 0px 10px;\n    margin-top: 20px;\n    /* color: var(--project_color5); */\n    font-weight: 500;\n    /* text-decoration: underline;\n    text-decoration-color: var(--lightGrey); */\n\n    background: -webkit-linear-gradient(#fa83fc, #cabcfb);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n/* details */\n.project-task-item{\n    background:#eeeeee;\n    border-radius: 10px;\n    margin: 10px 10px;\n    padding: 5px 5px 5px 15px;\n    display:flex;\n    justify-content: center;\n    flex-wrap: nowrap;\n    position: relative;\n    box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n}\n\n\nimg.project-task-editbtn {\n    margin-left: auto;\n}\n\n\nsummary {\n    display:flex;\n    justify-content: space-between;\n    align-items:center;\n}\n\n.project-task-priority{\n    background-color: var(--project_color6);\n    color: #008b92;\n    font-size: 12px;\n    border-radius: 20px;\n    padding: 1px 15px;\n}\nlabel{\n    font-size: 13px;\n    display: flex;\n}\n.lowPriority{\n    /* background-color: var(--project_color6);\n    color: #008b92; */\n    background-color: var(--project_color4);\n    color: #0080fd;\n}\n\n.highPriority{\n    background-color: var(--project_color3);\n    color:#d002d4;\n}\n\n.medPriority{\n    background-color: var(--project_color2);\n    color: #e16d01;\n}\n\n.project-task-description{\n    font-size: 13px;\n    margin: 10px 0px;\n    font-style: italic;\n}\n\n\n\n.project-task-img{\n    vertical-align: top;\n}\ninput[type=\"checkbox\"] {\n    margin-right: 11px;\n}\n\ninput[type=\"checkbox\"]:checked + label,\ninput[type=\"checkbox\"]:checked {\n    color: var(--medGrey);\n    text-decoration: line-through !important;\n} \n    \n\n\n\n\n\n/* POP UPS/ MODALS  */\n\n/* Create/ Add New...  */\n.modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1.4rem;\n    width: 450px;\n    /* padding: 1.3rem; */\n    min-height: 250px;\n    position: absolute;\n    top: 20%;\n    background-color: white;\n    border: 3px solid #ddd;\n    border: 3px solid pink;\n    border-radius: 15px;\n    z-index: 2;\n\n    box-shadow: \n          0px 43px 79px -20px #af86c0, \n          34px -12px 80px -20px #fcd7e4d4;\n\n          box-shadow: \n          -31px 20px 63px -20px #af86c0, \n          13px -35px 63px -2px #fcd7e4fa;\n\n  }\n\n  .create-modal-icon{\n    position: absolute;\n    top: -52px;\n    left: 44%;\n    background: white;\n    border: solid 4px pink;\n    padding: 5px;\n    height: 70px;\n    width: 70px;\n    border-radius: 50px;\n  }\n\n  .modal h3 {\n    margin: 20px auto 10px;\n}\n  \n   .modal .flex {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  } \n\n\n.create-modal-input-area {\n  padding-left: 15px;\n  margin-bottom: 20px;\n}\n   \n  .modal input {\n    padding: 0.7rem 1rem;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 0.9em;\n  }\n  \n  .modal p {\n    font-size: 0.9rem;\n    color: #777;\n    margin: 0.4rem 0 0.2rem;\n  }\n  \n  .create-modal-buttons{\n    display: flex;\n  }\n\n\n\n  \n  .create-modal-buttons button {\n    display: flex;\n    justify-content:center;\n    align-items: center;\n    gap: 8px;\n    padding: 0.8rem;\n    background-color: white;\n    color: pink;\n    text-align: center;\n    font-size: 1.3em;\n    cursor: pointer;\n    border: none;\n    font-weight: 600;\n    width: 100%;\n    border-top: solid 3px;\n    border-bottom-left-radius: 20px;\n   transition: 0.3s;\n  }\n\n  .create-modal-buttons button:hover {\n    background: -webkit-linear-gradient(#43A3E8, #0EDBDD);\n    transition: 0.3s;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n.create-modal-buttons button img{\n  width: 25px;\n}\n\n\n  button[type=\"submit\"]{\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 20px;\n    border-left: solid 3px pink;\n  }\n  \n  .btn-close {\n    padding: 0;\n    background: transparent;\n    border-radius: 50%;\n    border: none;\n    margin-left: auto;\n    position: absolute;\n    top: 10px;\n    right: 12px;\n    cursor: pointer;\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(105, 97, 82, 0.5);\n    \n    backdrop-filter: blur(3px);\n    z-index: 1;\n  }\n\n  .hidden {\n    display: none;\n  }\n/* CURRENT TASK  - remove all references to label.btn-color-mode-switch  */\n\n\n\n  /* Task/Project Switcher inside Modal */\n/*selected side*/\nlabel {\n    font-size: 13px;\n    color: #424242;\n    font-weight: 500;\n}\n\n/*  bg of Task when not selected*/\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner{ */\n                            label.btn-color-mode-switch-inner{\n    margin: 0px;\n    width: 140px;\n    height: 30px;\n    background: #E0E0E0;\n    background: linear-gradient(90deg,pink, lavender);\n    border-radius: 26px;\n    overflow: hidden;\n    position: relative;\n    transition: all 0.3s ease;\n    display: block;\n    cursor: pointer;\n}\n/* text of Task when not selected  */\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner:before{ */\n                        label.btn-color-mode-switch-inner::before{\n    content: attr(data-on); /* Task */\n    position: absolute;\n    font-size: 13px;\n    font-weight: 500;\n    top: 7px;\n    right: 20px;\n    color: grey;\n}\n\n/*  project selected */\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner:after{  */\n                          label.btn-color-mode-switch-inner::after{\n    content: attr(data-off); /* Project */\n    width: 70px;\n    height: 16px;\n    background: #fff;\n    border-radius: 26px;\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    text-align: center;\n    transition: all 0.3s ease;\n    box-shadow: 0px 0px 6px -2px #111;\n    padding: 5px 0px;\n}\n\n\n/* .btn-color-mode-switch input[type=\"checkbox\"]{ */\n  input#color_mode[type=\"checkbox\"] {\n    cursor: pointer;\n    width: 50px;\n    height: 25px;\n    opacity: 0;\n    position: absolute;\n    top: 68px;\n    left: 44%;\n    z-index: 1;\n    margin: 0px;\n}\n\n/*  set bg and text on project, not selected */\ninput#color_mode[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner{\n  background: linear-gradient(90deg,pink, lavender);\n  color: grey;\n}\n\n/*  Sets bg of Task when selected*/\ninput#color_mode[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner:after{\n  content: attr(data-on); /*Tasks*/\n  left: 68px;\n  background: white;\n  color: black;\n}\n\ninput#color_mode[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner:before{\n    content: attr(data-off); /*Project */\n    right: auto;\n    left: 20px;\n}\n\n\n.create-modal-input-area input[type=\"text\"]:focus-visible{\n  outline: solid 1px #af76f3;\n \n}\n\n\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   createNewProject: () => (/* binding */ createNewProject)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ "./src/model.js");

//Our main file - handles requests. 
//Tells MODEL what to do (logic wise), 
//tells VIEW what do to (display wise)
//Controls and decides how data is displayed




//inititation function 
(0,_view_js__WEBPACK_IMPORTED_MODULE_1__.thisistheview)();
(0,_model_js__WEBPACK_IMPORTED_MODULE_2__.model)();







//function that runs when submit button is clicked

 
 
 function createNewProject(projName){
    console.log('createNewProject in controller firing');

    //this should be a call to a function inside model, passing the projName
    createNewProjectModel(projName); //needs to call model but isnt

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
/* harmony export */   model: () => (/* binding */ model)
/* harmony export */ });
//the model handles all the data and logic 
// potentially import something from CONTROLLER? 


function model(){

    //array of all projects, each project is an object
   let allProjectsArr = [];

    const projectFactory = (projName) => {
        let tasks = [];

        const createProject = () => {
            //creates new project and put in projects array - currently uses name of proj but would id# system be better?
            allProjectsArr.push(projName);
            //add project to list in 'create new task' modal 
            addProjectToDropdown(projName);
        }
        const deleteProject = () => {
            //modal pop up 'are you sure' if yes,
            //find proj in projs array and deletes. proj arrray is updated.
        }
        return { projName, createProject };
    }


    //set up default project as FACTORY
    let defaultproj = projectFactory('default');
    defaultproj.createProject();


     function createNewProjectModel(projName){ 
         let newprojName = projectFactory(projName);
         newprojName.createProject();
     }

    //function that runs when proj is created
    function addProjectToDropdown(projname){
    //receives project name
    //checks if already in dropdown
        //if not, create item & append to dropdown & pass to view to rerender dropdown
        console.log("addProjectToDropdown accessed" + projname); 
  }

return allProjectsArr, createNewProjectModel;
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

//contains code to create dom elements and append them to modal 

function newProjectForm(){

    console.log("testing from inside newProjectForm");
 
};

 

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
//the view handles how the UI is displayed. Only talks to controller. 





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
             //if div has children, remove children
             if (domCachedElements.taskbox.hasChildNodes){
                while (domCachedElements.taskbox.firstChild) {
                    domCachedElements.taskbox.removeChild(domCachedElements.taskbox.firstChild);
                  }
            }
        //2. loops over all projects array (if arr not empty) & creates project card for each project & append to taskbox
        if (allProjectsArr.length != 0){
            allProjectsArr.forEach(createProjectItemCard);
        }
   }


   function createProjectItemCard (item, index){
        //create elements, 
        let projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        let projectTitle = document.createElement("h5");
        projectTitle.textContent = allProjectsArr[index]; 
        projectItem.appendChild(projectTitle);

        let projectTaskNo = document.createElement("p");
        projectTaskNo.classList.add("project-item-taskno");
        projectTaskNo.textContent = "7 active tasks"; /*This will be updated to fetch number */
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
        submitbutton: document.querySelector('button[type="submit"]'),
        clearButton: document.querySelector('button.clear-btn'),
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






    //call functions on click of Submit button
    modalElements.submitbutton.addEventListener('click', function(event){
    //this function may need to be moved to controller
    //get the value from the input, pass to controller to pass to model, display on screen 
        event.preventDefault();

        const taskName = document.querySelector("#name");
        const projName =  document.querySelector("#projName");

        if (taskName !== null){
            console.log("task name: " + taskName.value);
        }

        if (projName !== null){
            console.log("project name: " + projName.value);
            (0,_controller_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projName.value); //in controller
            viewAllProjects();
            (0,_newProjectForm_js__WEBPACK_IMPORTED_MODULE_1__.newProjectForm)();
        }
   });


        let createNewProjElements = {
            nameInput: document.querySelector('input#color_mode[type="checkbox"]'),
    
            toggleModalDisplay: function (){
             
                if (createNewProjElements.nameInput.checked){
                    console.log("toggle is checked/ Add new TASK");
                    //function that returns element - will be its own module?
                    //append returned element to div

                    let projDropdown = document.createElement("select");
                    let projDropdownLabel = document.createElement("label");

                    let taskLabel = document.createElement("label");
                    let taskInput = document.createElement("input");
                    let div = document.querySelector("div.create-modal-input-area");


                    //if div has children, remove children
                    if (div.hasChildNodes){
                        while (div.firstChild) {
                            div.removeChild(div.firstChild);
                          }
                    }

                    // Set attributes
                    projDropdownLabel.setAttribute("for", "projDropdown");
                    projDropdownLabel.textContent = "Project: ";

                    projDropdown.setAttribute("id", "projDropdown");
                    projDropdown.setAttribute("name", "projDropdown");

                    //get values from proj array and create option tag for each
                    if (allProjectsArr.length != 0){
                    //    allProjectsArr.forEach(createDropdownOptions);
                       for (let i = 0; i <= allProjectsArr.length; i++){
                        
                        projDropdown.appendChild(createDropdownOptions(allProjectsArr)); 
                       }
                    }
                  

                    taskLabel.setAttribute("for","name");//change name to something descriptive
                    taskLabel.textContent="Task Name:";
                    taskInput.setAttribute("type", "text");
                    taskInput.classList.add("name"); //change name to something descriptive
                    taskInput.setAttribute("id", "name");//change name to something descriptive


                    div.appendChild(projDropdownLabel);
                    div.appendChild(projDropdown);
                    div.appendChild(taskLabel);
                    div.appendChild(taskInput);


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

                     // Set attributes
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
       


        //project/task toggle
        createNewProjElements.nameInput.addEventListener("click", createNewProjElements.toggleModalDisplay);


        function createDropdownOptions(index,item){

            let option = document.createElement("option");
            option.setAttribute("value", item); //undefined - how to get project name 
            option.textContent= item; //undefined 
            return option;
          
        };
      
    
        //clear inputs on click of clearn btn
        modalElements.clearButton.addEventListener("click", clearInputs);


        function clearInputs(){
            //if on task page, clear task inputs

            //else clear all project inputs
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sdUZBQXVGLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksZUFBZSxVQUFVLHNDQUFzQyxVQUFVLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLEtBQUssU0FBUyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVkseUJBQXlCLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsU0FBUyxTQUFTLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsd0JBQXdCLHlCQUF5QixhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFFBQVEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLFFBQVEsT0FBTyxRQUFRLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxV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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9OdW5pdG8tVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9OdW5pdG8tSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL2xvdy1wb2x5LWdyaWQtaGFpa2VpLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL2NyeXN0YWxzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQ1NTIGZvciBUb0RvIExpc3QgKi9cbip7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcbn1cblxuOnJvb3Qge1xuICAgIC0tZ3JhZGllbnRfYmdfY29sb3I6I2VkZTVmZDtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX2NvbG9yOiNlMWNiZmI7XG4gICAgLS1ncmFkaWVudF9zcG90MV93OiA3NSU7XG4gICAgLS1ncmFkaWVudF9zcG90MV9oOiA3NSU7XG4gICAgLS1ncmFkaWVudF9zcG90MV94OiAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3k6IDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfY29sb3I6I2ZmZTBkNjtcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3c6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QyX2g6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3g6IDEwMCU7XG4gICAgLS1ncmFkaWVudF9zcG90Ml95OiAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2NvbG9yOiNlYmUwZmY7XG4gICAgLS1ncmFkaWVudF9zcG90M193OiA3NSU7XG4gICAgLS1ncmFkaWVudF9zcG90M19oOiA3NSU7XG4gICAgLS1ncmFkaWVudF9zcG90M194OiAxMDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDNfeTogMTAwJTtcbiAgICBcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X2NvbG9yOiNmZmRiZjM7XG4gICAgLS1ncmFkaWVudF9zcG90NF93OiA3NSU7XG4gICAgLS1ncmFkaWVudF9zcG90NF9oOiA3NSU7XG4gICAgLS1ncmFkaWVudF9zcG90NF94OiAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3k6IDEwMCU7XG4gICAgXG4gICAgLS1ncmFkaWVudF9zcG90Ml93OjEwMCU7XG4gICAgLS1ncmFkaWVudF9zcG90Ml94Ojk0JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QyX2g6NDQlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfdzo1MSU7XG4gICAgLS1ncmFkaWVudF9zcG90MV9oOjY0JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3g6NyU7XG4gICAgLS1ncmFkaWVudF9zcG90M193OjEwMCU7XG4gICAgLS1ncmFkaWVudF9zcG90M19oOjgyJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3g6OTAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDRfdzo2NCU7XG4gICAgLS1ncmFkaWVudF9zcG90NF94OjAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDRfeTo0NSU7XG5cbiAgICAvKiBQcm9qZWN0IENvbG91cnMgKi9cbiAgICAtLXByb2plY3RfY29sb3IxOiAjRkZFREQ2O1xuICAgIC0tcHJvamVjdF9jb2xvcjI6ICNGRkNCOUE7XG4gICAgLS1wcm9qZWN0X2NvbG9yMzogI0Y4QUVGOTtcbiAgICAtLXByb2plY3RfY29sb3I0OiAjQjhEQkZEO1xuICAgIC0tcHJvamVjdF9jb2xvcjU6ICNDOEJBRkE7XG4gICAgLS1wcm9qZWN0X2NvbG9yNjogIzhGRTRFOTtcblxuICAgIC0tZGFya0dyZXk6ICMyNTJCM0Q7XG4gICAgLS1tZWRHcmV5OiAjOTQ5NjliO1xuICAgIC0tbGlnaHRHcmV5OiAjZWVlO1xuXG4gIH1cblxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ051bml0byc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCdvcGVudHlwZScpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ29wZW50eXBlJyk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuICBcbiAgLmZhbmN5LWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmFkaWVudF9iZ19jb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QxX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QxX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDFfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QxX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90MV9jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QyX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QyX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDJfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QyX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90Ml9jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QzX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QzX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDNfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QzX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90M19jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3Q0X3cpIHZhcigtLWdyYWRpZW50X3Nwb3Q0X2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDRfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3Q0X3kpLCB2YXIoLS1ncmFkaWVudF9zcG90NF9jb2xvciksIHRyYW5zcGFyZW50KTtcbiAgfVxuXG4gXG4gIFxuLyogIFxuICAuYW5pbWF0ZWQge1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cbkBrZXlmcmFtZXMgY2hhbWVsZW9uIHtcblxuICAgIDAlIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICAgIDE0LjI5OTklIHtcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgfVxuICAgIDI4LjU5OTklIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuICAgIDQyLjg5OTglIHtcbiAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG4gICAgNTcuMTk5NiUge1xuICAgICAgY29sb3I6IGJsdWU7XG4gICAgfVxuICAgIDcxLjQ5OTUlIHtcbiAgICAgIGNvbG9yOiBpbmRpZ287XG4gICAgfVxuICAgIDg1Ljc5OTQlIHtcbiAgICAgIGNvbG9yOiB2aW9sZXQ7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gIH1cbiAgLmNoYW1lbGVvbiB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW1lbGVvbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICB9IFRPIFVTRSwgQUREIENMQVNTIEFOSU1BVEUgQU5EIENMQVNTIENIQU1FTEVPTiovXG4gIFxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG5cbiAgICAvKiBmb250LXNpemU6IDEuMTI1cmVtOyBcbiAgbGluZS1oZWlnaHQ6IDEuNTsgICovXG5cblxufVxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIHdpZHRoOiA4NXZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCAyNDMsIDI0OCwgMC42MjIpOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDYgMjQzIDI0OCAvIDU2JSk7IC8qIGdyYWRpZW50IGJsZW5kIGludG8gYmcgICovXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IGZsb3JhbHdoaXRlO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMmZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMS41ZnIgMC41ZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2IGhlbGxvIHByb2poZWFkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hdiBpbmZvIHByb2plY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2IGhlYWRpbmcgcHJvamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYgdGFza2JveCBwcm9qZWN0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4Nik7XG59XG5cbi5uYXZ7XG4gICAgZ3JpZC1hcmVhOiBuYXY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDBweCAzMHB4IDBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IGxpZ2h0Z3JheTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5uYXYgLmxvZ297XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuICAgLyogc3R5aW5nIG9mIGJ1dHRvbnMgb24gZGFzaCAqL1xuICAuYnRue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZ2FwOjEwcHg7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjOTQ5NjliO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0QjVCO1xuICAgIC8qIGNvbG9yOiAjZmY5NGVhOyAqL1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggI2ZmOTRlYTtcbiAgICAvKiBvdXRsaW5lOiAzcHggc29saWQgI0Y4QUVGOTsgKi9cbiAgfVxuXG4gIC5idG4gaW1ne1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICBcbiAgfVxuXG4uaGVsbG97XG4gICAgZ3JpZC1hcmVhOiBoZWxsbztcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFjYmZiOyAqL1xuICAgIGNvbG9yOiAjMzAyYjJiO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmltZy1oYW5ke1xuICAgIHdpZHRoOiAxMSU7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5pbmZve1xuICAgIGdyaWQtYXJlYTogaW5mbztcbiAgXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjM2LDIyNCwyNTMsMSkgNTElLCByZ2JhKDIzOCwyMzgsMjM4LDEpIDk5JSk7ICAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzNiwyMjQsMjUzLDEpIDUxJSwgcmdiYSgyNDYsMjM3LDI0MywxKSA5OSUpOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ViZTBmZjsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogYm94LXNoYWRvdzpcbiAgICAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxuICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXG4gICAgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxuICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKTsgICovXG4gICBcblxufVxuXG4uaW5mbzo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjM2LDIyNCwyNTMsMC4xKSAxMSUsIHJnYmEoMjQ2LDIzNywyNDMsMSkgOTklKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pOyBcbiAgICBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCAjYzZhZGYyOyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cblxuLmluZm8taXRlbXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjOGFlZjg7LyogYmVzdCBjb2xvdXIgb24gbWFjbWluaSAgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY3NmYzOyAvKiBiZXN0IGNvbG9yIG9uIG1hY2Jvb2sgKi9cbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNjNmFkZjI7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNjNmFkZjI7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggIzNhNDc0ZTI2LCAwIDFweCAycHggIzNhNDc0ZTI2O1xuXG59XG4uaW5mbyBzdHJvbmd7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgXG59XG5cbi5pbmZvLWl0ZW06aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmFkZjI7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2I0OTFmMTsgKi9cbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA1cHggd2hpdGVzbW9rZTtcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNkMWJjZjg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNkMWJjZjg7XG59XG5cbi5oZWFkaW5ne1xuICAgIGdyaWQtYXJlYTogaGVhZGluZztcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNlZGU1ZmQ7ICovXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi8qIEFMTCBQUk9KRUNUUyBESVNQTEFZICovXG4udGFza2JveHtcbiAgICBncmlkLWFyZWE6IHRhc2tib3g7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG59XG5cbiAgICAucHJvamVjdC1pdGVte1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7ICovXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZERTFEQjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjZmJkZWQ3O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZiZGVkNztcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgIH1cblxuICAgIC5wcm9qZWN0LWl0ZW0gaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgcC5wcm9qZWN0LWl0ZW0tdGFza25vIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbWVkR3JleSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICB9XG4gICAgZGl2LnByb2plY3QtaXRlbS13cmFwcGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIGJ1dHRvbi5wcm9qZWN0LWl0ZW0tZWRpdGJ0bntcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgXG4gICAgLyogcHJvamVjdC1pdGVtIGhvdmVycyAqL1xuICAgIC5wcm9qZWN0LWl0ZW06aG92ZXJ7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2Y4ZWNlOTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmOGVjZTk7XG4gICAgfVxuICAgIGJ1dHRvbi5wcm9qZWN0LWl0ZW0tZWRpdGJ0bjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuXG5cblxuXG5cblxuLyogUFJPSkVDVCBTRUNUSU9OIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5wcm9qaGVhZGluZ3tcbiAgICBncmlkLWFyZWE6IHByb2poZWFkaW5nO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XG4gICAgZGlzcGxheTpmbGV4O1xuXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbi10b3A6LTIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcblxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHotaW5kZXg6MTtcblxufVxuICAgIFxuXG4ucHJvamVjdHtcbiAgICBncmlkLWFyZWE6IHByb2plY3Q7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogLTVweCAtNDZweCA1OHB4IC0yMHB4IGxpZ2h0Z3JleTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk1JSA5NSU7XG59XG5cbmgyLnByb2plY3QtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3QgaDMsXG4uZ3JhZGllbnQtaDN7XG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAvKiBjb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjUpOyAqL1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpOyAqL1xuXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZhODNmYywgI2NhYmNmYik7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyogZGV0YWlscyAqL1xuLnByb2plY3QtdGFzay1pdGVte1xuICAgIGJhY2tncm91bmQ6I2VlZWVlZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDE1cHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggIzNhNDc0ZTI2LCAwIDFweCAycHggIzNhNDc0ZTI2O1xufVxuXG5cbmltZy5wcm9qZWN0LXRhc2stZWRpdGJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cblxuc3VtbWFyeSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXRhc2stcHJpb3JpdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjYpO1xuICAgIGNvbG9yOiAjMDA4YjkyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDFweCAxNXB4O1xufVxubGFiZWx7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubG93UHJpb3JpdHl7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjYpO1xuICAgIGNvbG9yOiAjMDA4YjkyOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I0KTtcbiAgICBjb2xvcjogIzAwODBmZDtcbn1cblxuLmhpZ2hQcmlvcml0eXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMyk7XG4gICAgY29sb3I6I2QwMDJkNDtcbn1cblxuLm1lZFByaW9yaXR5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IyKTtcbiAgICBjb2xvcjogI2UxNmQwMTtcbn1cblxuLnByb2plY3QtdGFzay1kZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cblxuXG4ucHJvamVjdC10YXNrLWltZ3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwsXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XG4gICAgY29sb3I6IHZhcigtLW1lZEdyZXkpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7XG59IFxuICAgIFxuXG5cblxuXG5cbi8qIFBPUCBVUFMvIE1PREFMUyAgKi9cblxuLyogQ3JlYXRlLyBBZGQgTmV3Li4uICAqL1xuLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxLjRyZW07XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIC8qIHBhZGRpbmc6IDEuM3JlbTsgKi9cbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2RkZDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBwaW5rO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgei1pbmRleDogMjtcblxuICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAgIDBweCA0M3B4IDc5cHggLTIwcHggI2FmODZjMCwgXG4gICAgICAgICAgMzRweCAtMTJweCA4MHB4IC0yMHB4ICNmY2Q3ZTRkNDtcblxuICAgICAgICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAgIC0zMXB4IDIwcHggNjNweCAtMjBweCAjYWY4NmMwLCBcbiAgICAgICAgICAxM3B4IC0zNXB4IDYzcHggLTJweCAjZmNkN2U0ZmE7XG5cbiAgfVxuXG4gIC5jcmVhdGUtbW9kYWwtaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNTJweDtcbiAgICBsZWZ0OiA0NCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiBzb2xpZCA0cHggcGluaztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cblxuICAubW9kYWwgaDMge1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDEwcHg7XG59XG4gIFxuICAgLm1vZGFsIC5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH0gXG5cblxuLmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuICAgXG4gIC5tb2RhbCBpbnB1dCB7XG4gICAgcGFkZGluZzogMC43cmVtIDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBcbiAgLm1vZGFsIHAge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIG1hcmdpbjogMC40cmVtIDAgMC4ycmVtO1xuICB9XG4gIFxuICAuY3JlYXRlLW1vZGFsLWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG5cblxuICBcbiAgLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBwaW5rO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cblxuICAuY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjNDNBM0U4LCAjMEVEQkREKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbi5jcmVhdGUtbW9kYWwtYnV0dG9ucyBidXR0b24gaW1ne1xuICB3aWR0aDogMjVweDtcbn1cblxuXG4gIGJ1dHRvblt0eXBlPVwic3VibWl0XCJde1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCBwaW5rO1xuICB9XG4gIFxuICAuYnRuLWNsb3NlIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDk3LCA4MiwgMC41KTtcbiAgICBcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuLyogQ1VSUkVOVCBUQVNLICAtIHJlbW92ZSBhbGwgcmVmZXJlbmNlcyB0byBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggICovXG5cblxuXG4gIC8qIFRhc2svUHJvamVjdCBTd2l0Y2hlciBpbnNpZGUgTW9kYWwgKi9cbi8qc2VsZWN0ZWQgc2lkZSovXG5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qICBiZyBvZiBUYXNrIHdoZW4gbm90IHNlbGVjdGVkKi9cbi8qIC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggPiBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXJ7ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVye1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscGluaywgbGF2ZW5kZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiB0ZXh0IG9mIFRhc2sgd2hlbiBub3Qgc2VsZWN0ZWQgICovXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoID4gbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmJlZm9yZXsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qIFRhc2sgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdG9wOiA3cHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi8qICBwcm9qZWN0IHNlbGVjdGVkICovXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoID4gbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmFmdGVyeyAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOjphZnRlcntcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTsgLyogUHJvamVjdCAqL1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDJweDtcbiAgICB0b3A6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAtMnB4ICMxMTE7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXsgKi9cbiAgaW5wdXQjY29sb3JfbW9kZVt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2OHB4O1xuICAgIGxlZnQ6IDQ0JTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4vKiAgc2V0IGJnIGFuZCB0ZXh0IG9uIHByb2plY3QsIG5vdCBzZWxlY3RlZCAqL1xuaW5wdXQjY29sb3JfbW9kZVt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHBpbmssIGxhdmVuZGVyKTtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi8qICBTZXRzIGJnIG9mIFRhc2sgd2hlbiBzZWxlY3RlZCovXG5pbnB1dCNjb2xvcl9tb2RlW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmFmdGVye1xuICBjb250ZW50OiBhdHRyKGRhdGEtb24pOyAvKlRhc2tzKi9cbiAgbGVmdDogNjhweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW5wdXQjY29sb3JfbW9kZVt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjpiZWZvcmV7XG4gICAgY29udGVudDogYXR0cihkYXRhLW9mZik7IC8qUHJvamVjdCAqL1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDIwcHg7XG59XG5cblxuLmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLXZpc2libGV7XG4gIG91dGxpbmU6IHNvbGlkIDFweCAjYWY3NmYzO1xuIFxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFBc0I7QUFDdEI7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHdCQUF3Qjs7SUFFeEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHdCQUF3Qjs7SUFFeEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHFCQUFx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QUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQSw4Q0FBOEM7QUFDOUM7RUFDRSxpREFBaUQ7RUFDakQsV0FBVztBQUNiOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLHNCQUFzQixFQUFFLFFBQVE7RUFDaEMsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUIsRUFBRSxXQUFXO0lBQ3BDLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsMEJBQTBCOztBQUU1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDU1MgZm9yIFRvRG8gTGlzdCAqL1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWdyYWRpZW50X2JnX2NvbG9yOiNlZGU1ZmQ7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfY29sb3I6I2UxY2JmYjtcXG4gICAgLS1ncmFkaWVudF9zcG90MV93OiA3NSU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfaDogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3g6IDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3k6IDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX2NvbG9yOiNmZmUwZDY7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfdzogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX2g6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90Ml94OiAxMDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3k6IDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2NvbG9yOiNlYmUwZmY7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfdzogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2g6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90M194OiAxMDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3k6IDEwMCU7XFxuICAgIFxcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X2NvbG9yOiNmZmRiZjM7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfdzogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X2g6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90NF94OiAwJTtcXG4gICAgLS1ncmFkaWVudF9zcG90NF95OiAxMDAlO1xcbiAgICBcXG4gICAgLS1ncmFkaWVudF9zcG90Ml93OjEwMCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfeDo5NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfaDo0NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfdzo1MSU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfaDo2NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfeDo3JTtcXG4gICAgLS1ncmFkaWVudF9zcG90M193OjEwMCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfaDo4MiU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfeDo5MCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfdzo2NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfeDowJTtcXG4gICAgLS1ncmFkaWVudF9zcG90NF95OjQ1JTtcXG5cXG4gICAgLyogUHJvamVjdCBDb2xvdXJzICovXFxuICAgIC0tcHJvamVjdF9jb2xvcjE6ICNGRkVERDY7XFxuICAgIC0tcHJvamVjdF9jb2xvcjI6ICNGRkNCOUE7XFxuICAgIC0tcHJvamVjdF9jb2xvcjM6ICNGOEFFRjk7XFxuICAgIC0tcHJvamVjdF9jb2xvcjQ6ICNCOERCRkQ7XFxuICAgIC0tcHJvamVjdF9jb2xvcjU6ICNDOEJBRkE7XFxuICAgIC0tcHJvamVjdF9jb2xvcjY6ICM4RkU0RTk7XFxuXFxuICAgIC0tZGFya0dyZXk6ICMyNTJCM0Q7XFxuICAgIC0tbWVkR3JleTogIzk0OTY5YjtcXG4gICAgLS1saWdodEdyZXk6ICNlZWU7XFxuXFxuICB9XFxuXFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9OdW5pdG8tVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCdvcGVudHlwZScpLFxcbiAgICB1cmwoJy4vZm9udHMvTnVuaXRvLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuICBcXG4gIC5mYW5jeS1ncmFkaWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYWRpZW50X2JnX2NvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QxX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QxX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDFfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QxX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90MV9jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QyX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QyX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDJfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QyX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90Ml9jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QzX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QzX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDNfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QzX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90M19jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3Q0X3cpIHZhcigtLWdyYWRpZW50X3Nwb3Q0X2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDRfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3Q0X3kpLCB2YXIoLS1ncmFkaWVudF9zcG90NF9jb2xvciksIHRyYW5zcGFyZW50KTtcXG4gIH1cXG5cXG4gXFxuICBcXG4vKiAgXFxuICAuYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgfVxcbkBrZXlmcmFtZXMgY2hhbWVsZW9uIHtcXG5cXG4gICAgMCUge1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG4gICAgMTQuMjk5OSUge1xcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIH1cXG4gICAgMjguNTk5OSUge1xcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XFxuICAgIH1cXG4gICAgNDIuODk5OCUge1xcbiAgICAgIGNvbG9yOiBncmVlbjtcXG4gICAgfVxcbiAgICA1Ny4xOTk2JSB7XFxuICAgICAgY29sb3I6IGJsdWU7XFxuICAgIH1cXG4gICAgNzEuNDk5NSUge1xcbiAgICAgIGNvbG9yOiBpbmRpZ287XFxuICAgIH1cXG4gICAgODUuNzk5NCUge1xcbiAgICAgIGNvbG9yOiB2aW9sZXQ7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbiAgfVxcbiAgLmNoYW1lbGVvbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFtZWxlb247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICB9IFRPIFVTRSwgQUREIENMQVNTIEFOSU1BVEUgQU5EIENMQVNTIENIQU1FTEVPTiovXFxuICBcXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICMyMjI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG5cXG4gICAgLyogZm9udC1zaXplOiAxLjEyNXJlbTsgXFxuICBsaW5lLWhlaWdodDogMS41OyAgKi9cXG5cXG5cXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIHdpZHRoOiA4NXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQzLCAyNDgsIDAuNjIyKTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0NiAyNDMgMjQ4IC8gNTYlKTsgLyogZ3JhZGllbnQgYmxlbmQgaW50byBiZyAgKi9cXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IGZsb3JhbHdoaXRlO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDEuNWZyIDAuNWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm5hdiBoZWxsbyBwcm9qaGVhZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hdiBpbmZvIHByb2plY3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJuYXYgaGVhZGluZyBwcm9qZWN0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwibmF2IHRhc2tib3ggcHJvamVjdFxcXCI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6XFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4Nik7XFxufVxcblxcbi5uYXZ7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweCAzMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggbGlnaHRncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uYXYgLmxvZ297XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbn1cXG5cXG4gICAvKiBzdHlpbmcgb2YgYnV0dG9ucyBvbiBkYXNoICovXFxuICAuYnRue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzk0OTY5YjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjRCNUI7XFxuICAgIC8qIGNvbG9yOiAjZmY5NGVhOyAqL1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjZmY5NGVhO1xcbiAgICAvKiBvdXRsaW5lOiAzcHggc29saWQgI0Y4QUVGOTsgKi9cXG4gIH1cXG5cXG4gIC5idG4gaW1ne1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIFxcbiAgfVxcblxcbi5oZWxsb3tcXG4gICAgZ3JpZC1hcmVhOiBoZWxsbztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UxY2JmYjsgKi9cXG4gICAgY29sb3I6ICMzMDJiMmI7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmltZy1oYW5ke1xcbiAgICB3aWR0aDogMTElO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuXFxuLmluZm97XFxuICAgIGdyaWQtYXJlYTogaW5mbztcXG4gIFxcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywxKSA1MSUsIHJnYmEoMjM4LDIzOCwyMzgsMSkgOTklKTsgICovXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzNiwyMjQsMjUzLDEpIDUxJSwgcmdiYSgyNDYsMjM3LDI0MywxKSA5OSUpOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ViZTBmZjsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiBib3gtc2hhZG93OlxcbiAgICAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxcbiAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcbiAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxuICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKTsgICovXFxuICAgXFxuXFxufVxcblxcbi5pbmZvOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywwLjEpIDExJSwgcmdiYSgyNDYsMjM3LDI0MywxKSA5OSUpLCB1cmwoJy9zcmMvaW1hZ2VzL2xvdy1wb2x5LWdyaWQtaGFpa2VpLnBuZycpOyBcXG4gICAgXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwcHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4ICNjNmFkZjI7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuXFxuLmluZm8taXRlbXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzhhZWY4Oy8qIGJlc3QgY29sb3VyIG9uIG1hY21pbmkgICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZjc2ZjM7IC8qIGJlc3QgY29sb3Igb24gbWFjYm9vayAqL1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNjNmFkZjI7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjYzZhZGYyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XFxuXFxufVxcbi5pbmZvIHN0cm9uZ3tcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgIFxcbn1cXG5cXG4uaW5mby1pdGVtOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmFkZjI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNiNDkxZjE7ICovXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDVweCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNkMWJjZjg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZDFiY2Y4O1xcbn1cXG5cXG4uaGVhZGluZ3tcXG4gICAgZ3JpZC1hcmVhOiBoZWFkaW5nO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNlZGU1ZmQ7ICovXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi8qIEFMTCBQUk9KRUNUUyBESVNQTEFZICovXFxuLnRhc2tib3h7XFxuICAgIGdyaWQtYXJlYTogdGFza2JveDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4gICAgLnByb2plY3QtaXRlbXtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBtYXJnaW46IDhweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDsgKi9cXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGREUxREI7XFxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNmYmRlZDc7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZiZGVkNztcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1pdGVtIGg1e1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICB9XFxuXFxuICAgIHAucHJvamVjdC1pdGVtLXRhc2tubyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbWVkR3JleSk7XFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcXG4gICAgfVxcbiAgICBkaXYucHJvamVjdC1pdGVtLXdyYXBwZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgfVxcbiAgICBidXR0b24ucHJvamVjdC1pdGVtLWVkaXRidG57XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcbiAgXFxuICAgIC8qIHByb2plY3QtaXRlbSBob3ZlcnMgKi9cXG4gICAgLnByb2plY3QtaXRlbTpob3ZlcntcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2Y4ZWNlOTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZjhlY2U5O1xcbiAgICB9XFxuICAgIGJ1dHRvbi5wcm9qZWN0LWl0ZW0tZWRpdGJ0bjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gICAgfVxcblxcblxcblxcblxcblxcblxcbi8qIFBST0pFQ1QgU0VDVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLnByb2poZWFkaW5ne1xcbiAgICBncmlkLWFyZWE6IHByb2poZWFkaW5nO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOi0yMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG5cXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgei1pbmRleDoxO1xcblxcbn1cXG4gICAgXFxuXFxuLnByb2plY3R7XFxuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogLTVweCAtNDZweCA1OHB4IC0yMHB4IGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2ltYWdlcy9jcnlzdGFscy5wbmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIDk1JTtcXG59XFxuXFxuaDIucHJvamVjdC1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QgaDMsXFxuLmdyYWRpZW50LWgze1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgLyogY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I1KTsgKi9cXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTsgKi9cXG5cXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZhODNmYywgI2NhYmNmYik7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogZGV0YWlscyAqL1xcbi5wcm9qZWN0LXRhc2staXRlbXtcXG4gICAgYmFja2dyb3VuZDojZWVlZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTVweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4ICMzYTQ3NGUyNiwgMCAxcHggMnB4ICMzYTQ3NGUyNjtcXG59XFxuXFxuXFxuaW1nLnByb2plY3QtdGFzay1lZGl0YnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLXByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XFxuICAgIGNvbG9yOiAjMDA4YjkyO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDFweCAxNXB4O1xcbn1cXG5sYWJlbHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubG93UHJpb3JpdHl7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I2KTtcXG4gICAgY29sb3I6ICMwMDhiOTI7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I0KTtcXG4gICAgY29sb3I6ICMwMDgwZmQ7XFxufVxcblxcbi5oaWdoUHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IzKTtcXG4gICAgY29sb3I6I2QwMDJkNDtcXG59XFxuXFxuLm1lZFByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMik7XFxuICAgIGNvbG9yOiAjZTE2ZDAxO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuXFxuXFxuLnByb2plY3QtdGFzay1pbWd7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1tZWRHcmV5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDtcXG59IFxcbiAgICBcXG5cXG5cXG5cXG5cXG5cXG4vKiBQT1AgVVBTLyBNT0RBTFMgICovXFxuXFxuLyogQ3JlYXRlLyBBZGQgTmV3Li4uICAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEuNHJlbTtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICAvKiBwYWRkaW5nOiAxLjNyZW07ICovXFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcGluaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgei1pbmRleDogMjtcXG5cXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAgIDBweCA0M3B4IDc5cHggLTIwcHggI2FmODZjMCwgXFxuICAgICAgICAgIDM0cHggLTEycHggODBweCAtMjBweCAjZmNkN2U0ZDQ7XFxuXFxuICAgICAgICAgIGJveC1zaGFkb3c6IFxcbiAgICAgICAgICAtMzFweCAyMHB4IDYzcHggLTIwcHggI2FmODZjMCwgXFxuICAgICAgICAgIDEzcHggLTM1cHggNjNweCAtMnB4ICNmY2Q3ZTRmYTtcXG5cXG4gIH1cXG5cXG4gIC5jcmVhdGUtbW9kYWwtaWNvbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC01MnB4O1xcbiAgICBsZWZ0OiA0NCU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCBwaW5rO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB9XFxuXFxuICAubW9kYWwgaDMge1xcbiAgICBtYXJnaW46IDIwcHggYXV0byAxMHB4O1xcbn1cXG4gIFxcbiAgIC5tb2RhbCAuZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfSBcXG5cXG5cXG4uY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuICAgXFxuICAubW9kYWwgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgfVxcbiAgXFxuICAubW9kYWwgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogIzc3NztcXG4gICAgbWFyZ2luOiAwLjRyZW0gMCAwLjJyZW07XFxuICB9XFxuICBcXG4gIC5jcmVhdGUtbW9kYWwtYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG5cXG5cXG4gIFxcbiAgLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcGluaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDNweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXG4gICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM0M0EzRTgsICMwRURCREQpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbiBpbWd7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuXFxuICBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl17XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItbGVmdDogc29saWQgM3B4IHBpbms7XFxuICB9XFxuICBcXG4gIC5idG4tY2xvc2Uge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA1LCA5NywgODIsIDAuNSk7XFxuICAgIFxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbi8qIENVUlJFTlQgVEFTSyAgLSByZW1vdmUgYWxsIHJlZmVyZW5jZXMgdG8gbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoICAqL1xcblxcblxcblxcbiAgLyogVGFzay9Qcm9qZWN0IFN3aXRjaGVyIGluc2lkZSBNb2RhbCAqL1xcbi8qc2VsZWN0ZWQgc2lkZSovXFxubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGNvbG9yOiAjNDI0MjQyO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiAgYmcgb2YgVGFzayB3aGVuIG5vdCBzZWxlY3RlZCovXFxuLyogLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCA+IGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcnsgKi9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVye1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxwaW5rLCBsYXZlbmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogdGV4dCBvZiBUYXNrIHdoZW4gbm90IHNlbGVjdGVkICAqL1xcbi8qIC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggPiBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6YmVmb3JleyAqL1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjo6YmVmb3Jle1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtb24pOyAvKiBUYXNrICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB0b3A6IDdweDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4vKiAgcHJvamVjdCBzZWxlY3RlZCAqL1xcbi8qIC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggPiBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6YWZ0ZXJ7ICAqL1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOjphZnRlcntcXG4gICAgY29udGVudDogYXR0cihkYXRhLW9mZik7IC8qIFByb2plY3QgKi9cXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAycHg7XFxuICAgIHRvcDogMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IC0ycHggIzExMTtcXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG59XFxuXFxuXFxuLyogLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdeyAqL1xcbiAgaW5wdXQjY29sb3JfbW9kZVt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjhweDtcXG4gICAgbGVmdDogNDQlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLyogIHNldCBiZyBhbmQgdGV4dCBvbiBwcm9qZWN0LCBub3Qgc2VsZWN0ZWQgKi9cXG5pbnB1dCNjb2xvcl9tb2RlW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcntcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxwaW5rLCBsYXZlbmRlcik7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLyogIFNldHMgYmcgb2YgVGFzayB3aGVuIHNlbGVjdGVkKi9cXG5pbnB1dCNjb2xvcl9tb2RlW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjphZnRlcntcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qVGFza3MqL1xcbiAgbGVmdDogNjhweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5pbnB1dCNjb2xvcl9tb2RlW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpOyAvKlByb2plY3QgKi9cXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDIwcHg7XFxufVxcblxcblxcbi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMtdmlzaWJsZXtcXG4gIG91dGxpbmU6IHNvbGlkIDFweCAjYWY3NmYzO1xcbiBcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vT3VyIG1haW4gZmlsZSAtIGhhbmRsZXMgcmVxdWVzdHMuIFxuLy9UZWxscyBNT0RFTCB3aGF0IHRvIGRvIChsb2dpYyB3aXNlKSwgXG4vL3RlbGxzIFZJRVcgd2hhdCBkbyB0byAoZGlzcGxheSB3aXNlKVxuLy9Db250cm9scyBhbmQgZGVjaWRlcyBob3cgZGF0YSBpcyBkaXNwbGF5ZWRcbmltcG9ydCB7IHRoaXNpc3RoZXZpZXcgfSBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsLmpzJztcblxuXG4vL2luaXRpdGF0aW9uIGZ1bmN0aW9uIFxudGhpc2lzdGhldmlldygpO1xubW9kZWwoKTtcblxuXG5cblxuXG5cblxuLy9mdW5jdGlvbiB0aGF0IHJ1bnMgd2hlbiBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWRcblxuIFxuIFxuIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2pOYW1lKXtcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlTmV3UHJvamVjdCBpbiBjb250cm9sbGVyIGZpcmluZycpO1xuXG4gICAgLy90aGlzIHNob3VsZCBiZSBhIGNhbGwgdG8gYSBmdW5jdGlvbiBpbnNpZGUgbW9kZWwsIHBhc3NpbmcgdGhlIHByb2pOYW1lXG4gICAgY3JlYXRlTmV3UHJvamVjdE1vZGVsKHByb2pOYW1lKTsgLy9uZWVkcyB0byBjYWxsIG1vZGVsIGJ1dCBpc250XG5cbn1cbiBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGNvbnN0IHB1YlN1YiA9IHtcbi8vICAgZXZlbnRzOiB7fSxcbi8vICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKXtcbi8vICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3Qgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZOYW1lfWApO1xuLy8gICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4vLyAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4vLyAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKTtcbi8vICAgfSxcbi8vICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pe1xuLy8gICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBVTnN1YnNjcmliZWQgZnJvbSAke2V2TmFtZX1gKTtcbi8vICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4vLyAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pe1xuLy8gICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoZiA9PiBmICE9PSBmbik7XG4vLyAgICAgfVxuLy8gICB9LFxuLy8gICBwdWJsaXNoOiBmdW5jdGlvbihldk5hbWUsIGRhdGEpe1xuLy8gICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IE1ha2luZyBhIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4vLyAgICAgLy9lbWl0L3B1Ymxpc2ggdGhlIGV2ZW50IHRvIGFueW9uZSB3aG8gaXMgc3Vic2NyaWJlZFxuLy8gICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKXtcbi8vICAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5mb3JFYWNoKGYgPT4ge1xuLy8gICAgICAgICAgICAgZihkYXRhKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9O1xuXG5cblxuIiwiLy90aGUgbW9kZWwgaGFuZGxlcyBhbGwgdGhlIGRhdGEgYW5kIGxvZ2ljIFxuLy8gcG90ZW50aWFsbHkgaW1wb3J0IHNvbWV0aGluZyBmcm9tIENPTlRST0xMRVI/IFxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtb2RlbCgpe1xuXG4gICAgLy9hcnJheSBvZiBhbGwgcHJvamVjdHMsIGVhY2ggcHJvamVjdCBpcyBhbiBvYmplY3RcbiAgIGxldCBhbGxQcm9qZWN0c0FyciA9IFtdO1xuXG4gICAgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAocHJvak5hbWUpID0+IHtcbiAgICAgICAgbGV0IHRhc2tzID0gW107XG5cbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vY3JlYXRlcyBuZXcgcHJvamVjdCBhbmQgcHV0IGluIHByb2plY3RzIGFycmF5IC0gY3VycmVudGx5IHVzZXMgbmFtZSBvZiBwcm9qIGJ1dCB3b3VsZCBpZCMgc3lzdGVtIGJlIGJldHRlcj9cbiAgICAgICAgICAgIGFsbFByb2plY3RzQXJyLnB1c2gocHJvak5hbWUpO1xuICAgICAgICAgICAgLy9hZGQgcHJvamVjdCB0byBsaXN0IGluICdjcmVhdGUgbmV3IHRhc2snIG1vZGFsIFxuICAgICAgICAgICAgYWRkUHJvamVjdFRvRHJvcGRvd24ocHJvak5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAvL21vZGFsIHBvcCB1cCAnYXJlIHlvdSBzdXJlJyBpZiB5ZXMsXG4gICAgICAgICAgICAvL2ZpbmQgcHJvaiBpbiBwcm9qcyBhcnJheSBhbmQgZGVsZXRlcy4gcHJvaiBhcnJyYXkgaXMgdXBkYXRlZC5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwcm9qTmFtZSwgY3JlYXRlUHJvamVjdCB9O1xuICAgIH1cblxuXG4gICAgLy9zZXQgdXAgZGVmYXVsdCBwcm9qZWN0IGFzIEZBQ1RPUllcbiAgICBsZXQgZGVmYXVsdHByb2ogPSBwcm9qZWN0RmFjdG9yeSgnZGVmYXVsdCcpO1xuICAgIGRlZmF1bHRwcm9qLmNyZWF0ZVByb2plY3QoKTtcblxuXG4gICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RNb2RlbChwcm9qTmFtZSl7IFxuICAgICAgICAgbGV0IG5ld3Byb2pOYW1lID0gcHJvamVjdEZhY3RvcnkocHJvak5hbWUpO1xuICAgICAgICAgbmV3cHJvak5hbWUuY3JlYXRlUHJvamVjdCgpO1xuICAgICB9XG5cbiAgICAvL2Z1bmN0aW9uIHRoYXQgcnVucyB3aGVuIHByb2ogaXMgY3JlYXRlZFxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb0Ryb3Bkb3duKHByb2puYW1lKXtcbiAgICAvL3JlY2VpdmVzIHByb2plY3QgbmFtZVxuICAgIC8vY2hlY2tzIGlmIGFscmVhZHkgaW4gZHJvcGRvd25cbiAgICAgICAgLy9pZiBub3QsIGNyZWF0ZSBpdGVtICYgYXBwZW5kIHRvIGRyb3Bkb3duICYgcGFzcyB0byB2aWV3IHRvIHJlcmVuZGVyIGRyb3Bkb3duXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkUHJvamVjdFRvRHJvcGRvd24gYWNjZXNzZWRcIiArIHByb2puYW1lKTsgXG4gIH1cblxucmV0dXJuIGFsbFByb2plY3RzQXJyLCBjcmVhdGVOZXdQcm9qZWN0TW9kZWw7XG59IiwiLy9tb2RhbCBkaXNwbGF5IC0gY3JlYXRlIE5ldyBQcm9qZWN0XG5cbi8vY29udGFpbnMgY29kZSB0byBjcmVhdGUgZG9tIGVsZW1lbnRzIGFuZCBhcHBlbmQgdGhlbSB0byBtb2RhbCBcblxuZnVuY3Rpb24gbmV3UHJvamVjdEZvcm0oKXtcblxuICAgIGNvbnNvbGUubG9nKFwidGVzdGluZyBmcm9tIGluc2lkZSBuZXdQcm9qZWN0Rm9ybVwiKTtcbiBcbn07XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RGb3JtIH0gOyAiLCIvL3RoZSB2aWV3IGhhbmRsZXMgaG93IHRoZSBVSSBpcyBkaXNwbGF5ZWQuIE9ubHkgdGFsa3MgdG8gY29udHJvbGxlci4gXG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuXG5pbXBvcnQgeyBuZXdQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL25ld1Byb2plY3RGb3JtLmpzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXNpc3RoZXZpZXcoKXtcblxuICAgIGxldCBkb21DYWNoZWRFbGVtZW50cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKSxcbiAgICAgICAgYWRkYnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1hZGRcIiksXG4gICAgICAgIHZpZXdBbGxQcm9qZWN0c0J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYWxscHJvalwiKSxcbiAgICAgICAgdGFza2JveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrYm94XCIpLFxuICAgfVxuXG4gICBkb21DYWNoZWRFbGVtZW50cy52aWV3QWxsUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHZpZXdBbGxQcm9qZWN0cyk7XG5cbiAgIGZ1bmN0aW9uIHZpZXdBbGxQcm9qZWN0cygpe1xuICAgIC8vMS4gY2xlYXJzIHByb2plY3QgZGlzcGxheSBhcmVhIFxuICAgICAgICAgICAgIC8vaWYgZGl2IGhhcyBjaGlsZHJlbiwgcmVtb3ZlIGNoaWxkcmVuXG4gICAgICAgICAgICAgaWYgKGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3guaGFzQ2hpbGROb2Rlcyl7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3guZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBkb21DYWNoZWRFbGVtZW50cy50YXNrYm94LnJlbW92ZUNoaWxkKGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3guZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vMi4gbG9vcHMgb3ZlciBhbGwgcHJvamVjdHMgYXJyYXkgKGlmIGFyciBub3QgZW1wdHkpICYgY3JlYXRlcyBwcm9qZWN0IGNhcmQgZm9yIGVhY2ggcHJvamVjdCAmIGFwcGVuZCB0byB0YXNrYm94XG4gICAgICAgIGlmIChhbGxQcm9qZWN0c0Fyci5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICBhbGxQcm9qZWN0c0Fyci5mb3JFYWNoKGNyZWF0ZVByb2plY3RJdGVtQ2FyZCk7XG4gICAgICAgIH1cbiAgIH1cblxuXG4gICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0SXRlbUNhcmQgKGl0ZW0sIGluZGV4KXtcbiAgICAgICAgLy9jcmVhdGUgZWxlbWVudHMsIFxuICAgICAgICBsZXQgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzQXJyW2luZGV4XTsgXG4gICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgbGV0IHByb2plY3RUYXNrTm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvamVjdFRhc2tOby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtLXRhc2tub1wiKTtcbiAgICAgICAgcHJvamVjdFRhc2tOby50ZXh0Q29udGVudCA9IFwiNyBhY3RpdmUgdGFza3NcIjsgLypUaGlzIHdpbGwgYmUgdXBkYXRlZCB0byBmZXRjaCBudW1iZXIgKi9cbiAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tObyk7XG5cbiAgICAgICAgbGV0IHByb2plY3RJdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RJdGVtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtLXdyYXBwZXJcIik7XG4gICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtV3JhcHBlcik7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0SXRlbUVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgcHJvamVjdEl0ZW1FZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW0tZWRpdGJ0blwiKTtcblxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0SXRlbUVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SXRlbUVkaXRJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9zcmMvaW1hZ2VzL2VkaXQucG5nXCIpO1xuICAgICAgICAgICAgICAgIHByb2plY3RJdGVtRWRpdEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbUVkaXRJY29uKTtcblxuICAgICAgICAgICAgcHJvamVjdEl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRWRpdEJ0bik7XG4gICAgICAgICAgICAvL2NvZGUgdG8gYWRkIHByb2plY3QgZHVlIGRhdGUgaWYgaW5jbHVkaW5nP1xuXG4gICAgICAgICAgICAvLzMuIGFwcGVuZCBlYWNoIHByb2plY3QgY2FyZHMgdG8gIGRpc3BsYXkgYXJlYSAoZG9tQ2FjaGVkRWxlbWVudHMudGFza2JveClcbiAgICAgICAgICAgIGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3guYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0gQ1JFQVRFIE5FVyAtIE1PREFMIC0tLS0tLS0tLS0tLS0tLS1cbiAgICBsZXQgbW9kYWxFbGVtZW50cyA9IHtcbiAgICAgICAgc3VibWl0YnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICBjbGVhckJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmNsZWFyLWJ0bicpLFxuICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKSxcbiAgICAgICAgb3ZlcmxheTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpLFxuICAgICAgICBjbG9zZU1vZGFsQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jbG9zZVwiKVxuICAgIH1cblxuICAgLy9vcGVucyBtb2RhbCB0byBjcmVhdGUgbmV3IHByb2plY3QvdGFza1xuICAgY29uc3Qgb3Blbk1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb2RhbEVsZW1lbnRzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIG1vZGFsRWxlbWVudHMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH07XG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gb3BlbiBtb2RhbCBvbiBjbGlja1xuICAgIGRvbUNhY2hlZEVsZW1lbnRzLmFkZGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsKTtcblxuICAgIC8vY2xvc2VzIG1vZGFsXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW9kYWxFbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBtb2RhbEVsZW1lbnRzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9O1xuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIG1vZGFsIG9uIGNsaWNrXG4gICAgbW9kYWxFbGVtZW50cy5jbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbiAgICBtb2RhbEVsZW1lbnRzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAgIG1vZGFsRWxlbWVudHMuc3VibWl0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuXG5cblxuXG5cbiAgICAvL2NhbGwgZnVuY3Rpb25zIG9uIGNsaWNrIG9mIFN1Ym1pdCBidXR0b25cbiAgICBtb2RhbEVsZW1lbnRzLnN1Ym1pdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAvL3RoaXMgZnVuY3Rpb24gbWF5IG5lZWQgdG8gYmUgbW92ZWQgdG8gY29udHJvbGxlclxuICAgIC8vZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBpbnB1dCwgcGFzcyB0byBjb250cm9sbGVyIHRvIHBhc3MgdG8gbW9kZWwsIGRpc3BsYXkgb24gc2NyZWVuIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuICAgICAgICBjb25zdCBwcm9qTmFtZSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOYW1lXCIpO1xuXG4gICAgICAgIGlmICh0YXNrTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhc2sgbmFtZTogXCIgKyB0YXNrTmFtZS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvak5hbWUgIT09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0IG5hbWU6IFwiICsgcHJvak5hbWUudmFsdWUpO1xuICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdChwcm9qTmFtZS52YWx1ZSk7IC8vaW4gY29udHJvbGxlclxuICAgICAgICAgICAgdmlld0FsbFByb2plY3RzKCk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB9XG4gICB9KTtcblxuXG4gICAgICAgIGxldCBjcmVhdGVOZXdQcm9qRWxlbWVudHMgPSB7XG4gICAgICAgICAgICBuYW1lSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2NvbG9yX21vZGVbdHlwZT1cImNoZWNrYm94XCJdJyksXG4gICAgXG4gICAgICAgICAgICB0b2dnbGVNb2RhbERpc3BsYXk6IGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChjcmVhdGVOZXdQcm9qRWxlbWVudHMubmFtZUlucHV0LmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvZ2dsZSBpcyBjaGVja2VkLyBBZGQgbmV3IFRBU0tcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVsZW1lbnQgLSB3aWxsIGJlIGl0cyBvd24gbW9kdWxlP1xuICAgICAgICAgICAgICAgICAgICAvL2FwcGVuZCByZXR1cm5lZCBlbGVtZW50IHRvIGRpdlxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qRHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvakRyb3Bkb3duTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY3JlYXRlLW1vZGFsLWlucHV0LWFyZWFcIik7XG5cblxuICAgICAgICAgICAgICAgICAgICAvL2lmIGRpdiBoYXMgY2hpbGRyZW4sIHJlbW92ZSBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGl2Lmhhc0NoaWxkTm9kZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGRpdi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgcHJvakRyb3Bkb3duTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvakRyb3Bkb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qRHJvcGRvd25MYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvakRyb3Bkb3duLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvakRyb3Bkb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qRHJvcGRvd24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2pEcm9wZG93blwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvL2dldCB2YWx1ZXMgZnJvbSBwcm9qIGFycmF5IGFuZCBjcmVhdGUgb3B0aW9uIHRhZyBmb3IgZWFjaFxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsUHJvamVjdHNBcnIubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICBhbGxQcm9qZWN0c0Fyci5mb3JFYWNoKGNyZWF0ZURyb3Bkb3duT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGFsbFByb2plY3RzQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvakRyb3Bkb3duLmFwcGVuZENoaWxkKGNyZWF0ZURyb3Bkb3duT3B0aW9ucyhhbGxQcm9qZWN0c0FycikpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICB0YXNrTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJuYW1lXCIpOy8vY2hhbmdlIG5hbWUgdG8gc29tZXRoaW5nIGRlc2NyaXB0aXZlXG4gICAgICAgICAgICAgICAgICAgIHRhc2tMYWJlbC50ZXh0Q29udGVudD1cIlRhc2sgTmFtZTpcIjtcbiAgICAgICAgICAgICAgICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7IC8vY2hhbmdlIG5hbWUgdG8gc29tZXRoaW5nIGRlc2NyaXB0aXZlXG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVcIik7Ly9jaGFuZ2UgbmFtZSB0byBzb21ldGhpbmcgZGVzY3JpcHRpdmVcblxuXG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcm9qRHJvcGRvd25MYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcm9qRHJvcGRvd24pO1xuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2dnbGUgbm90IGNoZWNrZWQvIEFkZCBuZXcgUFJPSkVDVFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy9mdW5jdGlvbiB0aGF0IHJldHVybnMgZWxlbWVudCAtIHdpbGwgYmUgaXRzIG93biBtb2R1bGU/XG4gICAgICAgICAgICAgICAgICAgIC8vYXBwZW5kIHJldHVybmVkIGVsZW1lbnQgdG8gZGl2XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgZGl2IGhhcyBjaGlsZHJlbiwgcmVtb3ZlIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXYuaGFzQ2hpbGROb2Rlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJwcm9qTmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQ9XCJQcm9qZWN0IE5hbWU6XCI7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qTmFtZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuXG5cbiAgICAgICAgLy9wcm9qZWN0L3Rhc2sgdG9nZ2xlXG4gICAgICAgIGNyZWF0ZU5ld1Byb2pFbGVtZW50cy5uYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU5ld1Byb2pFbGVtZW50cy50b2dnbGVNb2RhbERpc3BsYXkpO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlRHJvcGRvd25PcHRpb25zKGluZGV4LGl0ZW0pe1xuXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpdGVtKTsgLy91bmRlZmluZWQgLSBob3cgdG8gZ2V0IHByb2plY3QgbmFtZSBcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudD0gaXRlbTsgLy91bmRlZmluZWQgXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgXG4gICAgXG4gICAgICAgIC8vY2xlYXIgaW5wdXRzIG9uIGNsaWNrIG9mIGNsZWFybiBidG5cbiAgICAgICAgbW9kYWxFbGVtZW50cy5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJJbnB1dHMpO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYXJJbnB1dHMoKXtcbiAgICAgICAgICAgIC8vaWYgb24gdGFzayBwYWdlLCBjbGVhciB0YXNrIGlucHV0c1xuXG4gICAgICAgICAgICAvL2Vsc2UgY2xlYXIgYWxsIHByb2plY3QgaW5wdXRzXG4gICAgICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29udHJvbGxlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==