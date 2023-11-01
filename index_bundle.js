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











`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS for ToDo List */\n*{\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    list-style-type: none;\n    box-sizing: border-box;\n    font-family: 'Nunito';\n}\n\n:root {\n    --gradient_bg_color:#ede5fd;\n    --gradient_spot1_color:#e1cbfb;\n    --gradient_spot1_w: 75%;\n    --gradient_spot1_h: 75%;\n    --gradient_spot1_x: 0%;\n    --gradient_spot1_y: 0%;\n    --gradient_spot2_color:#ffe0d6;\n    --gradient_spot2_w: 75%;\n    --gradient_spot2_h: 75%;\n    --gradient_spot2_x: 100%;\n    --gradient_spot2_y: 0%;\n    --gradient_spot3_color:#ebe0ff;\n    --gradient_spot3_w: 75%;\n    --gradient_spot3_h: 75%;\n    --gradient_spot3_x: 100%;\n    --gradient_spot3_y: 100%;\n    \n    --gradient_spot4_color:#ffdbf3;\n    --gradient_spot4_w: 75%;\n    --gradient_spot4_h: 75%;\n    --gradient_spot4_x: 0%;\n    --gradient_spot4_y: 100%;\n    \n    --gradient_spot2_w:100%;\n    --gradient_spot2_x:94%;\n    --gradient_spot2_h:44%;\n    --gradient_spot1_w:51%;\n    --gradient_spot1_h:64%;\n    --gradient_spot1_x:7%;\n    --gradient_spot3_w:100%;\n    --gradient_spot3_h:82%;\n    --gradient_spot3_x:90%;\n    --gradient_spot4_w:64%;\n    --gradient_spot4_x:0%;\n    --gradient_spot4_y:45%;\n\n    /* Project Colours */\n    --project_color1: #FFEDD6;\n    --project_color2: #FFCB9A;\n    --project_color3: #F8AEF9;\n    --project_color4: #B8DBFD;\n    --project_color5: #C8BAFA;\n    --project_color6: #8FE4E9;\n\n    --darkGrey: #252B3D;\n    --medGrey: #94969b;\n    --lightGrey: #eee;\n\n  }\n\n  .welcome-text{\n    color: var(--lightGrey);\n    /* background: linear-gradient(45deg, var(--project_color4) 30%, var(--project_color6) 100%); */\n    text-align: center;\n    padding: 10px;\n\n    /* background: -webkit-linear-gradient(#fa83fc, #cabcfb); */\n    /* background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; */\n    color: var(--lightGrey);\n  }\n\n  @font-face {\n    font-family: 'Nunito';\n    src: url('./fonts/Nunito-VariableFont_wght.ttf') format('opentype'),\n    url('./fonts/Nunito-Italic-VariableFont_wght.ttf') format('opentype');\n    font-style: normal;\n}\n  \n  .fancy-gradient {\n    background-color: var(--gradient_bg_color);\n    background-image: radial-gradient(var(--gradient_spot1_w) var(--gradient_spot1_h) at left var(--gradient_spot1_x) top var(--gradient_spot1_y), var(--gradient_spot1_color), transparent), radial-gradient(var(--gradient_spot2_w) var(--gradient_spot2_h) at left var(--gradient_spot2_x) top var(--gradient_spot2_y), var(--gradient_spot2_color), transparent), radial-gradient(var(--gradient_spot3_w) var(--gradient_spot3_h) at left var(--gradient_spot3_x) top var(--gradient_spot3_y), var(--gradient_spot3_color), transparent), radial-gradient(var(--gradient_spot4_w) var(--gradient_spot4_h) at left var(--gradient_spot4_x) top var(--gradient_spot4_y), var(--gradient_spot4_color), transparent);\n  }\n\n \n  \n/* \n  .animated {\n    animation-fill-mode: both;\n  }\n@keyframes chameleon {\n\n    0% {\n      color: var(--project_color1);\n    }\n    14.2999% {\n      color: var(--project_color2);\n    }\n    28.5999% {\n      color: var(--project_color3);\n    }\n    42.8998% {\n      color: var(--project_color4);\n    }\n    57.1996% {\n      color: var(--project_color5);\n    }\n    71.4995% {\n      color: var(--project_color6);\n    }\n    85.7994% {\n      color: violet;\n    }\n    100% {\n      color: red;\n    }\n  }\n  .chameleon {\n    animation-name: chameleon;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n  }  */\n  /* TO USE, ADD CLASS ANIMATE AND CLASS CHAMELEON */\n  \n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: #222;\n    position: relative;\n    min-height: 100vh;\n    overflow:hidden;\n\n    /* font-size: 1.125rem; \n  line-height: 1.5;  */\n\n\n}\n\n.container{\n    padding: 20px;\n    border-radius: 20px;\n    margin: auto;\n    height: 85vh;\n    width: 85vw;\n    background-color: rgba(246, 243, 248, 0.622); \n    background-color:rgb(246 243 248 / 56%); /* gradient blend into bg  */\n    box-shadow: 0px 0px 0px 1px floralwhite;\n    display:grid;\n    overflow: auto;\n    grid-template-columns: 1fr 3fr 2fr;\n    grid-template-rows: 0.5fr 1.5fr 0.5fr 3fr;\n    grid-template-areas: \"nav hello projheading\"\n                         \"nav info project\"\n                         \"nav heading project\"\n                         \"nav taskbox project\";\n                         box-shadow:\n                         0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n                         0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n                         0 12.5px 10px rgba(0, 0, 0, 0.06),\n                         0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n                         0 41.8px 33.4px rgba(0, 0, 0, 0.086);\n}\n\n.nav{\n    grid-area: nav;\n    border-radius: 10px;\n    margin: 0px 30px 0px 20px;\n    background-color: var(--darkGrey);\n    box-shadow: 0px 0px 10px 3px lightgray;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.nav .logo{\n  align-self: center;\n  margin: 5px auto;\n}\n\n   /* stying of buttons on dash */\n  .btn{\n    display: inline-block;\n    display:flex;\n    gap:10px;\n    padding: 0.8rem;\n    background: transparent;\n    border: solid 5px transparent;\n    color: #94969b;\n    cursor: pointer;\n    transition: 0.3s ease;\n    font-size: 0.9rem;\n    width: 100%;\n    text-align: left;\n    align-items: center;\n  }\n\n  .btn:hover{\n    background-color: #464B5B;\n    /* color: #ff94ea; */\n    color: #fff;\n    border-left: solid 5px #ff94ea;\n    /* outline: 3px solid #F8AEF9; */\n  }\n\n  .btn img{\n    margin-right: 5px;\n  \n  }\n\n.hello{\n    grid-area: hello;\n    /* background-color: #e1cbfb; */\n    color: #302b2b;\n    color: var(--darkGrey);\n    font-size: 40px;\n    font-weight: bold;\n    display:flex;\n    align-items: center;\n}\n.img-hand{\n    width: 11%;\n    padding: 0px 10px;\n}\n\n.info{\n    grid-area: info;\n  \n    /* background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(238,238,238,1) 99%);  */\n    background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(246,237,243,1) 99%); \n    display: flex;\n    border-radius: 10px;\n    /* background-color: #ebe0ff; */\n    position: relative;\n    /* box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072);  */\n   \n\n}\n\n.info::before{\n    content: \"\";\n    background-image: linear-gradient(0deg, rgba(236,224,253,0.1) 11%, rgba(246,237,243,1) 99%), url('/src/images/low-poly-grid-haikei.png'); \n    \n    background-size: contain;\n    background-position: 100px 0px;\n    border-radius:10px;\n    /* border: solid 1px #c6adf2; */\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.5;\n}\n\n\n.info-item{\n    padding: 10px;\n    margin: 20px 10px;\n    width: 100px;\n    background-color:#c8aef8;/* best colour on macmini  */\n    background-color: #af76f3; /* best color on macbook */\n    border-left: solid 2px #c6adf2;\n    border-bottom: solid 2px #c6adf2;\n    color: whitesmoke;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    transition: 0.3s ease;\n    position: relative;\n    box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n\n}\n.info strong{\n    font-size: 30px;\n   \n}\n\n.info-item:hover{\n    transform: translateY(-5px);\n    background-color: #c6adf2;\n    /* background-color: #b491f1; */\n    box-shadow: 0px 0px 8px 5px whitesmoke;\n    border-left: solid 2px #d1bcf8;\n    border-bottom: solid 2px #d1bcf8;\n}\n\n.heading{\n    grid-area: heading;\n    /* background-color:#ede5fd; */\n    margin-top: 10px;\n    font-weight: 400;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    gap: 5px;\n}\n\n/* ALL PROJECTS DISPLAY */\n.taskbox{\n    grid-area: taskbox;\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n    .project-item{\n        border-radius: 10px;\n        margin: 8px;\n        padding: 10px;\n        display: flex;\n        flex-direction:column;\n        justify-content: space-between;\n        /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */\n        box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n        background-color:#FDE1DB;\n        border-left: solid 2px #fbded7;\n        border-bottom: solid 2px #fbded7;\n        transition: 0.4s ease;\n    }\n\n    .project-item h5{\n        font-size: 18px;\n        color: var(--darkGrey);\n        padding-left: 5px;\n    }\n\n    p.project-item-taskno {\n        padding-left: 10px;\n        color: var(--medGrey);\n        font-weight: 200;\n        font-style: italic;\n        font-size: 14px;\n        letter-spacing: 0.1px;\n        margin-top: -7px;\n        margin-bottom: 7px;\n    }\n    div.project-item-wrapper{\n        display: flex;\n        justify-content: flex-end;\n        align-items: flex-end;\n    }\n    button.project-item-editbtn{\n        border: solid 1px transparent;\n        transition: 0.3s;\n        background-color: transparent;\n    }\n  \n    /* project-item hovers */\n    .project-item:hover{\n        border-left: solid 2px #f8ece9;\n        border-bottom: solid 2px #f8ece9;\n    }\n    button.project-item-editbtn:hover{\n        cursor: pointer;\n        transform: translateY(-2px);\n    }\n\n\n\n\n\n\n/* PROJECT SECTION ------------------------------------- */\n.projheading{\n    grid-area: projheading;\n    background-color: white;\n    color: var(--darkGrey);\n    display:flex;\n\n    align-items:center;\n    gap: 5px;\n    margin-top:-20px;\n    margin-right: -20px;\n    margin-left: 40px;\n\n    border-top-right-radius: 20px;\n    border-top-left-radius: 15px;\n    padding-left: 20px;\n    z-index:1;\n\n}\n    \n\n.project{\n    grid-area: project;\n    background-color: #fff;\n    margin-right: -20px;\n    margin-left: 40px;\n    margin-bottom: -20px;\n    border-bottom-right-radius: 20px;\n    border-bottom-left-radius: 15px;\n    box-shadow: -5px -46px 58px -20px lightgrey;\n    padding: 10px;\n    background-image: url(\"/src/images/crystals.png\");\n    background-repeat: no-repeat;\n    background-position: 95% 95%;\n}\n\nh2.project-heading {\n  text-align: center;\n}\n\n.project h3,\n.gradient-h3{\n    padding: 10px 0px 0px 10px;\n    margin-top: 20px;\n    /* color: var(--project_color5); */\n    font-weight: 500;\n    /* text-decoration: underline;\n    text-decoration-color: var(--lightGrey); */\n\n    background: -webkit-linear-gradient(#fa83fc, #cabcfb);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n/* details */\n.project-task-item{\n    background:#eeeeee;\n    border-radius: 10px;\n    margin: 10px 10px;\n    padding: 5px 5px 5px 15px;\n    display:flex;\n    justify-content: center;\n    flex-wrap: nowrap;\n    position: relative;\n    box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n}\n\n\nimg.project-task-editbtn {\n    margin-left: auto;\n}\n\n\nsummary {\n    display:flex;\n    justify-content: space-between;\n    align-items:center;\n}\n\n.project-task-priority{\n    background-color: var(--project_color6);\n    color: #008b92;\n    font-size: 12px;\n    border-radius: 20px;\n    padding: 1px 15px;\n}\nlabel{\n    font-size: 13px;\n    display: flex;\n}\n.lowPriority{\n    /* background-color: var(--project_color6);\n    color: #008b92; */\n    background-color: var(--project_color4);\n    color: #0080fd;\n}\n\n.highPriority{\n    background-color: var(--project_color3);\n    color:#d002d4;\n}\n\n.medPriority{\n    background-color: var(--project_color2);\n    color: #e16d01;\n}\n\n.project-task-description{\n    font-size: 13px;\n    margin: 10px 0px;\n    font-style: italic;\n}\n\n\n\n.project-task-img{\n    vertical-align: top;\n}\ninput[type=\"checkbox\"] {\n    margin-right: 11px;\n}\n\ninput[type=\"checkbox\"]:checked + label,\ninput[type=\"checkbox\"]:checked {\n    color: var(--medGrey);\n    text-decoration: line-through !important;\n} \n    \n\n\n\n\n\n/* POP UPS/ MODALS  */\n\n/* Create/ Add New...  */\n.modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1.4rem;\n    width: 450px;\n    /* padding: 1.3rem; */\n    min-height: 250px;\n    position: absolute;\n    top: 20%;\n    background-color: white;\n    border: 3px solid #ddd;\n    border: 3px solid pink;\n    border-radius: 15px;\n    z-index: 2;\n\n    box-shadow: \n          0px 43px 79px -20px #af86c0, \n          34px -12px 80px -20px #fcd7e4d4;\n\n          box-shadow: \n          -31px 20px 63px -20px #af86c0, \n          13px -35px 63px -2px #fcd7e4fa;\n\n  }\n\n  .create-modal-icon{\n    position: absolute;\n    top: -52px;\n    left: 44%;\n    background: white;\n    border: solid 4px pink;\n    padding: 5px;\n    height: 70px;\n    width: 70px;\n    border-radius: 50px;\n  }\n\n  .modal h3 {\n    margin: 20px auto 10px;\n}\n  \n   .modal .flex {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  } \n\n\n.create-modal-input-area {\n  padding-left: 15px;\n  margin-bottom: 20px;\n}\n   \n  .modal input,\n  select#projDropdown {\n    padding: 0.7rem 1rem;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 0.9em;\n  }\n  \n  .modal p {\n    font-size: 0.9rem;\n    color: #777;\n    margin: 0.4rem 0 0.2rem;\n  }\n  \n  .create-modal-buttons{\n    display: flex;\n  }\n\n  select#projDropdown {\n    width: 47%;\n    height: 35px;\n    padding: 5px;\n    /* font-size: 16px;\n    border: solid 1px lightgrey;\n    border-radius: 3px; */\n}\n\n  \n  .create-modal-buttons button {\n    display: flex;\n    justify-content:center;\n    align-items: center;\n    gap: 8px;\n    padding: 0.8rem;\n    background-color: white;\n    color: pink;\n    text-align: center;\n    font-size: 1.3em;\n    cursor: pointer;\n    border: none;\n    font-weight: 600;\n    width: 100%;\n    border-top: solid 3px;\n    border-bottom-left-radius: 20px;\n   transition: 0.3s;\n  }\n\n  .create-modal-buttons button:hover {\n    background: -webkit-linear-gradient(#43A3E8, #0EDBDD);\n    transition: 0.3s;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n.create-modal-buttons button img{\n  width: 25px;\n}\n\n\n  button[type=\"submit\"]{\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 20px;\n    border-left: solid 3px pink;\n  }\n  \n  .btn-close {\n    padding: 0;\n    background: transparent;\n    border-radius: 50%;\n    border: none;\n    margin-left: auto;\n    position: absolute;\n    top: 10px;\n    right: 12px;\n    cursor: pointer;\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(105, 97, 82, 0.5);\n    \n    backdrop-filter: blur(3px);\n    z-index: 1;\n  }\n\n  .hidden {\n    display: none;\n  }\n/* CURRENT TASK  - remove all references to label.btn-color-mode-switch  */\n\n\n\n  /* Task/Project Switcher inside Modal */\n/*selected side*/\nlabel {\n    font-size: 13px;\n    color: #424242;\n    font-weight: 500;\n}\n\n/*  bg of Task when not selected*/\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner{ */\n                            label.btn-color-mode-switch-inner{\n    margin: 0px;\n    width: 140px;\n    height: 30px;\n    background: #E0E0E0;\n    background: linear-gradient(90deg,pink, lavender);\n    border-radius: 26px;\n    overflow: hidden;\n    position: relative;\n    transition: all 0.3s ease;\n    display: block;\n    cursor: pointer;\n}\n/* text of Task when not selected  */\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner:before{ */\n                        label.btn-color-mode-switch-inner::before{\n    content: attr(data-on); /* Task */\n    position: absolute;\n    font-size: 13px;\n    font-weight: 500;\n    top: 7px;\n    right: 20px;\n    color: grey;\n}\n\n/*  project selected */\n/* .btn-color-mode-switch > label.btn-color-mode-switch-inner:after{  */\n                          label.btn-color-mode-switch-inner::after{\n    content: attr(data-off); /* Project */\n    width: 70px;\n    height: 16px;\n    background: #fff;\n    border-radius: 26px;\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    text-align: center;\n    transition: all 0.3s ease;\n    box-shadow: 0px 0px 6px -2px #111;\n    padding: 5px 0px;\n}\n\n\n/* .btn-color-mode-switch input[type=\"checkbox\"]{ */\n  input#color_mode[type=\"checkbox\"] {\n    cursor: pointer;\n    width: 50px;\n    height: 25px;\n    opacity: 0;\n    position: absolute;\n    top: 68px;\n    left: 44%;\n    z-index: 1;\n    margin: 0px;\n}\n\n/*  set bg and text on project, not selected */\ninput#color_mode[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner{\n  background: linear-gradient(90deg,pink, lavender);\n  color: grey;\n}\n\n/*  Sets bg of Task when selected*/\ninput#color_mode[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner:after{\n  content: attr(data-on); /*Tasks*/\n  left: 68px;\n  background: white;\n  color: black;\n}\n\ninput#color_mode[type=\"checkbox\"]:checked + label.btn-color-mode-switch-inner:before{\n    content: attr(data-off); /*Project */\n    right: auto;\n    left: 20px;\n}\n\n\n.create-modal-input-area input[type=\"text\"]:focus-visible{\n  outline: solid 1px #af76f3;\n \n}\n\n\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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





//inititation function/ loads the view
(0,_view_js__WEBPACK_IMPORTED_MODULE_1__.thisistheview)();








//function that runs when submit button is clicked
 function createNewProject(projName){

    //this should be a call to a function inside model, passing the projName, model will create the object and return the object to controller
    (0,_model_js__WEBPACK_IMPORTED_MODULE_2__.createNewProjectModel)(projName); //in model

    //pass newly created obj to view to add card
}
 
//when project is created, pass no of tasks to view to display

























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
/* harmony export */   createNewProjectModel: () => (/* binding */ createNewProjectModel)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _newProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectForm */ "./src/newProjectForm.js");
//the model handles all the data and logic 




    //array of all projects, each project is an object
  let allProjectsArr = []; //export to view

  const ProjectFactory = (projName) => {
  //create an object, set the project name to projName, set task array to empty, push projName to allprojarr, return obj
        // let obj = Object.create(projectFactory.proto);
        // obj.name = projName;

        let project = {};
        project.name = projName;

        let proj_tasksArr = [];  //arr of objects

        //potentially getter and setter for project name? 
        // const setProjectName = () => {
        //    const name = projName;
        // };
        // const getProjectName = () => projName;
        

       const createProject = () => {
            //creates new project and put in projects array - currently uses name of proj but would id# system be better?
   
            allProjectsArr.push(project);

        };




        const deleteProject = () => {
            //modal pop up 'are you sure' if yes,
            //find proj in projs array and deletes. proj arrray is updated.
        };

        const addTaskToProject = () => {}
        const removeTaskFromProject = () => {
            
        }

        const getNoOfTasks = () => {
            let noOfTasks = proj_tasksArr.length;
            console.log("No Of Tasks: (from proj_tasksArr.length) " + proj_tasksArr.length);
            return noOfTasks;
        }
 
        return { project, projName, createProject, getNoOfTasks };
     
    }

    // projectFactory.proto = {
    //     addtoArray: function(){
    //         console.log("addToArray called");
    //         allProjectsArr.push(this.name);
    //     } 
    // }


    //set up default project as FACTORY
    let defaultproj = ProjectFactory('default');
    defaultproj.createProject();


   function createNewProjectModel(projName){  //export to controller
         let newprojName = ProjectFactory(projName);
         newprojName.createProject();
         newprojName.getNoOfTasks();

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


function populateDropdown(allProjectsArr){
    //remove all values and rerender
    clearDropdownOptions();

    //get values from proj array and create option tag for each
    if (allProjectsArr.length > 0){
        for (let i = 0; i <= allProjectsArr.length-1; i++){
            projDropdown.appendChild(createDropdownOptions(allProjectsArr[i])); 
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
             //if div has children, remove children
             if (domCachedElements.taskbox.hasChildNodes){
                while (domCachedElements.taskbox.firstChild) {
                    domCachedElements.taskbox.removeChild(domCachedElements.taskbox.firstChild);
                  }
            }
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




    let taskNameInput = document.querySelector("#taskName");
    let taskDescriptionInput = document.querySelector('#taskDesc');
    let projNameInput =  document.querySelector("#projName");
    let div = document.querySelector("div.create-modal-input-area");







    let createNewProjElements = {
        nameInput: document.querySelector('input#color_mode[type="checkbox"]'),
        
        toggleModalDisplay: function (){
            let div = document.querySelector("div.create-modal-input-area");

            if (createNewProjElements.nameInput.checked){
                console.log("toggle checked/ Add new TASK");
                clearInputValues();
                // //if div has children, remove children
                if (div.hasChildNodes){
                    while (div.firstChild) {
                        div.removeChild(div.firstChild);
                      }
                }
                //load New Task Inputs
                (0,_newTaskForm_js__WEBPACK_IMPORTED_MODULE_2__.newTaskForm)();
              } else {
                console.log("toggle not checked/ Add new PROJECT");
                clearInputValues();
                // //if div has children, remove children
                if (div.hasChildNodes){
                    while (div.firstChild) {
                        div.removeChild(div.firstChild);
                      }
                }
                (0,_newProjectForm_js__WEBPACK_IMPORTED_MODULE_1__.newProjectForm)();
              };
        }
    }
    //project/task toggle
    createNewProjElements.nameInput.addEventListener("click", createNewProjElements.toggleModalDisplay);





    //SUBMIT BUTTON
    modalElements.submitButton.addEventListener('click', function(event){
    //this function may need to be moved to controller
    //get the value from the inputs, pass to controller 
    //(controller wil pass to model, to display on screen )
        event.preventDefault();
        //get latest values
         taskNameInput = document.querySelector("#taskName");
         taskDescriptionInput = document.querySelector('#taskDesc');
         projNameInput =  document.querySelector("#projName");


        if (div.classList.contains("showTaskModule")){

            //get task data
           // let projNameOption =  //get proj name from dropdown option.value
            let taskName = taskNameInput.value;
            let taskDescription = taskDescriptionInput.value;



            //console.log ("project selected: " + projName );
            console.log ("taskName: " + taskName);
            console.log ("taskDescription: " + taskDescription);

        //else if div has class of project
        } else if (div.classList.contains("showProjModule")){


            console.log("projNameInput.value: " + projNameInput.value);
            let projectName = projNameInput.value;

            console.log("projectName: "+ projectName);
            (0,_controller_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projectName); //in controller
         

            viewAllProjects();

        }
      
   });


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
    //clear input on click of Clear Button
        modalElements.clearButton.addEventListener('click', clearInputValues);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyx1RkFBdUYsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLGVBQWUsVUFBVSx1Q0FBdUMsTUFBTSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLEtBQUssU0FBUyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVkseUJBQXlCLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsU0FBUyxTQUFTLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsd0JBQXdCLHlCQUF5QixhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFFBQVEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLFFBQVEsT0FBTyxRQUFRLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxRQUFRLEtBQUssVUFB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QUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3UHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL051bml0by1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL051bml0by1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvbG93LXBvbHktZ3JpZC1oYWlrZWkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvY3J5c3RhbHMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDU1MgZm9yIFRvRG8gTGlzdCAqL1xuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xufVxuXG46cm9vdCB7XG4gICAgLS1ncmFkaWVudF9iZ19jb2xvcjojZWRlNWZkO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfY29sb3I6I2UxY2JmYjtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3c6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX2g6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3g6IDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfeTogMCU7XG4gICAgLS1ncmFkaWVudF9zcG90Ml9jb2xvcjojZmZlMGQ2O1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfdzogNzUlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfaDogNzUlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfeDogMTAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3k6IDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDNfY29sb3I6I2ViZTBmZjtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3c6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2g6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3g6IDEwMCU7XG4gICAgLS1ncmFkaWVudF9zcG90M195OiAxMDAlO1xuICAgIFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfY29sb3I6I2ZmZGJmMztcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3c6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X2g6IDc1JTtcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3g6IDAlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDRfeTogMTAwJTtcbiAgICBcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3c6MTAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3g6OTQlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDJfaDo0NCU7XG4gICAgLS1ncmFkaWVudF9zcG90MV93OjUxJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QxX2g6NjQlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDFfeDo3JTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3c6MTAwJTtcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2g6ODIlO1xuICAgIC0tZ3JhZGllbnRfc3BvdDNfeDo5MCU7XG4gICAgLS1ncmFkaWVudF9zcG90NF93OjY0JTtcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X3g6MCU7XG4gICAgLS1ncmFkaWVudF9zcG90NF95OjQ1JTtcblxuICAgIC8qIFByb2plY3QgQ29sb3VycyAqL1xuICAgIC0tcHJvamVjdF9jb2xvcjE6ICNGRkVERDY7XG4gICAgLS1wcm9qZWN0X2NvbG9yMjogI0ZGQ0I5QTtcbiAgICAtLXByb2plY3RfY29sb3IzOiAjRjhBRUY5O1xuICAgIC0tcHJvamVjdF9jb2xvcjQ6ICNCOERCRkQ7XG4gICAgLS1wcm9qZWN0X2NvbG9yNTogI0M4QkFGQTtcbiAgICAtLXByb2plY3RfY29sb3I2OiAjOEZFNEU5O1xuXG4gICAgLS1kYXJrR3JleTogIzI1MkIzRDtcbiAgICAtLW1lZEdyZXk6ICM5NDk2OWI7XG4gICAgLS1saWdodEdyZXk6ICNlZWU7XG5cbiAgfVxuXG4gIC53ZWxjb21lLXRleHR7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1wcm9qZWN0X2NvbG9yNCkgMzAlLCB2YXIoLS1wcm9qZWN0X2NvbG9yNikgMTAwJSk7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmE4M2ZjLCAjY2FiY2ZiKTsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyAqL1xuICAgIGNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnb3BlbnR5cGUnKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCdvcGVudHlwZScpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiAgXG4gIC5mYW5jeS1ncmFkaWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JhZGllbnRfYmdfY29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCh2YXIoLS1ncmFkaWVudF9zcG90MV93KSB2YXIoLS1ncmFkaWVudF9zcG90MV9oKSBhdCBsZWZ0IHZhcigtLWdyYWRpZW50X3Nwb3QxX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90MV95KSwgdmFyKC0tZ3JhZGllbnRfc3BvdDFfY29sb3IpLCB0cmFuc3BhcmVudCksIHJhZGlhbC1ncmFkaWVudCh2YXIoLS1ncmFkaWVudF9zcG90Ml93KSB2YXIoLS1ncmFkaWVudF9zcG90Ml9oKSBhdCBsZWZ0IHZhcigtLWdyYWRpZW50X3Nwb3QyX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90Ml95KSwgdmFyKC0tZ3JhZGllbnRfc3BvdDJfY29sb3IpLCB0cmFuc3BhcmVudCksIHJhZGlhbC1ncmFkaWVudCh2YXIoLS1ncmFkaWVudF9zcG90M193KSB2YXIoLS1ncmFkaWVudF9zcG90M19oKSBhdCBsZWZ0IHZhcigtLWdyYWRpZW50X3Nwb3QzX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90M195KSwgdmFyKC0tZ3JhZGllbnRfc3BvdDNfY29sb3IpLCB0cmFuc3BhcmVudCksIHJhZGlhbC1ncmFkaWVudCh2YXIoLS1ncmFkaWVudF9zcG90NF93KSB2YXIoLS1ncmFkaWVudF9zcG90NF9oKSBhdCBsZWZ0IHZhcigtLWdyYWRpZW50X3Nwb3Q0X3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90NF95KSwgdmFyKC0tZ3JhZGllbnRfc3BvdDRfY29sb3IpLCB0cmFuc3BhcmVudCk7XG4gIH1cblxuIFxuICBcbi8qIFxuICAuYW5pbWF0ZWQge1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cbkBrZXlmcmFtZXMgY2hhbWVsZW9uIHtcblxuICAgIDAlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMSk7XG4gICAgfVxuICAgIDE0LjI5OTklIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMik7XG4gICAgfVxuICAgIDI4LjU5OTklIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMyk7XG4gICAgfVxuICAgIDQyLjg5OTglIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNCk7XG4gICAgfVxuICAgIDU3LjE5OTYlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNSk7XG4gICAgfVxuICAgIDcxLjQ5OTUlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XG4gICAgfVxuICAgIDg1Ljc5OTQlIHtcbiAgICAgIGNvbG9yOiB2aW9sZXQ7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gIH1cbiAgLmNoYW1lbGVvbiB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW1lbGVvbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9ICAqL1xuICAvKiBUTyBVU0UsIEFERCBDTEFTUyBBTklNQVRFIEFORCBDTEFTUyBDSEFNRUxFT04gKi9cbiAgXG5cbmJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcblxuICAgIC8qIGZvbnQtc2l6ZTogMS4xMjVyZW07IFxuICBsaW5lLWhlaWdodDogMS41OyAgKi9cblxuXG59XG5cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDg1dmg7XG4gICAgd2lkdGg6IDg1dnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI0MywgMjQ4LCAwLjYyMik7IFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0NiAyNDMgMjQ4IC8gNTYlKTsgLyogZ3JhZGllbnQgYmxlbmQgaW50byBiZyAgKi9cbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggZmxvcmFsd2hpdGU7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAyZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxLjVmciAwLjVmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXYgaGVsbG8gcHJvamhlYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2IGluZm8gcHJvamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYgaGVhZGluZyBwcm9qZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hdiB0YXNrYm94IHByb2plY3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OlxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KTtcbn1cblxuLm5hdntcbiAgICBncmlkLWFyZWE6IG5hdjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMHB4IDMwcHggMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggbGlnaHRncmF5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLm5hdiAubG9nb3tcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4gICAvKiBzdHlpbmcgb2YgYnV0dG9ucyBvbiBkYXNoICovXG4gIC5idG57XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBnYXA6MTBweDtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM5NDk2OWI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjRCNUI7XG4gICAgLyogY29sb3I6ICNmZjk0ZWE7ICovXG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjZmY5NGVhO1xuICAgIC8qIG91dGxpbmU6IDNweCBzb2xpZCAjRjhBRUY5OyAqL1xuICB9XG5cbiAgLmJ0biBpbWd7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIFxuICB9XG5cbi5oZWxsb3tcbiAgICBncmlkLWFyZWE6IGhlbGxvO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMWNiZmI7ICovXG4gICAgY29sb3I6ICMzMDJiMmI7XG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW1nLWhhbmR7XG4gICAgd2lkdGg6IDExJTtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuLmluZm97XG4gICAgZ3JpZC1hcmVhOiBpbmZvO1xuICBcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywxKSA1MSUsIHJnYmEoMjM4LDIzOCwyMzgsMSkgOTklKTsgICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjM2LDIyNCwyNTMsMSkgNTElLCByZ2JhKDI0NiwyMzcsMjQzLDEpIDk5JSk7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlMGZmOyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBib3gtc2hhZG93OlxuICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXG4gICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcbiAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXG4gICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpOyAgKi9cbiAgIFxuXG59XG5cbi5pbmZvOjpiZWZvcmV7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywwLjEpIDExJSwgcmdiYSgyNDYsMjM3LDI0MywxKSA5OSUpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7IFxuICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDBweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIC8qIGJvcmRlcjogc29saWQgMXB4ICNjNmFkZjI7ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuXG4uaW5mby1pdGVte1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I2M4YWVmODsvKiBiZXN0IGNvbG91ciBvbiBtYWNtaW5pICAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZjc2ZjM7IC8qIGJlc3QgY29sb3Igb24gbWFjYm9vayAqL1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2M2YWRmMjtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2M2YWRmMjtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XG5cbn1cbi5pbmZvIHN0cm9uZ3tcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICBcbn1cblxuLmluZm8taXRlbTpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2YWRmMjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYjQ5MWYxOyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDVweCB3aGl0ZXNtb2tlO1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2QxYmNmODtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2QxYmNmODtcbn1cblxuLmhlYWRpbmd7XG4gICAgZ3JpZC1hcmVhOiBoZWFkaW5nO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6I2VkZTVmZDsgKi9cbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBnYXA6IDVweDtcbn1cblxuLyogQUxMIFBST0pFQ1RTIERJU1BMQVkgKi9cbi50YXNrYm94e1xuICAgIGdyaWQtYXJlYTogdGFza2JveDtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbn1cblxuICAgIC5wcm9qZWN0LWl0ZW17XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDsgKi9cbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4ICMzYTQ3NGUyNiwgMCAxcHggMnB4ICMzYTQ3NGUyNjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkRFMURCO1xuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNmYmRlZDc7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmJkZWQ3O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgfVxuXG4gICAgLnByb2plY3QtaXRlbSBoNXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFya0dyZXkpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB9XG5cbiAgICBwLnByb2plY3QtaXRlbS10YXNrbm8ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tZWRHcmV5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIH1cbiAgICBkaXYucHJvamVjdC1pdGVtLXdyYXBwZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgYnV0dG9uLnByb2plY3QtaXRlbS1lZGl0YnRue1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICBcbiAgICAvKiBwcm9qZWN0LWl0ZW0gaG92ZXJzICovXG4gICAgLnByb2plY3QtaXRlbTpob3ZlcntcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjZjhlY2U5O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2Y4ZWNlOTtcbiAgICB9XG4gICAgYnV0dG9uLnByb2plY3QtaXRlbS1lZGl0YnRuOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICB9XG5cblxuXG5cblxuXG4vKiBQUk9KRUNUIFNFQ1RJT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnByb2poZWFkaW5ne1xuICAgIGdyaWQtYXJlYTogcHJvamhlYWRpbmc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcbiAgICBkaXNwbGF5OmZsZXg7XG5cbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWFyZ2luLXRvcDotMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgei1pbmRleDoxO1xuXG59XG4gICAgXG5cbi5wcm9qZWN0e1xuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAtNXB4IC00NnB4IDU4cHggLTIwcHggbGlnaHRncmV5O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIDk1JTtcbn1cblxuaDIucHJvamVjdC1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdCBoMyxcbi5ncmFkaWVudC1oM3tcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8qIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNSk7ICovXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7ICovXG5cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmE4M2ZjLCAjY2FiY2ZiKTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBkZXRhaWxzICovXG4ucHJvamVjdC10YXNrLWl0ZW17XG4gICAgYmFja2dyb3VuZDojZWVlZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTVweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XG59XG5cblxuaW1nLnByb2plY3QtdGFzay1lZGl0YnRuIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuXG5zdW1tYXJ5IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cblxuLnByb2plY3QtdGFzay1wcmlvcml0eXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XG4gICAgY29sb3I6ICMwMDhiOTI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMXB4IDE1cHg7XG59XG5sYWJlbHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5sb3dQcmlvcml0eXtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XG4gICAgY29sb3I6ICMwMDhiOTI7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjQpO1xuICAgIGNvbG9yOiAjMDA4MGZkO1xufVxuXG4uaGlnaFByaW9yaXR5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IzKTtcbiAgICBjb2xvcjojZDAwMmQ0O1xufVxuXG4ubWVkUHJpb3JpdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjIpO1xuICAgIGNvbG9yOiAjZTE2ZDAxO1xufVxuXG4ucHJvamVjdC10YXNrLWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuXG5cbi5wcm9qZWN0LXRhc2staW1ne1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgICBjb2xvcjogdmFyKC0tbWVkR3JleSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDtcbn0gXG4gICAgXG5cblxuXG5cblxuLyogUE9QIFVQUy8gTU9EQUxTICAqL1xuXG4vKiBDcmVhdGUvIEFkZCBOZXcuLi4gICovXG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEuNHJlbTtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgLyogcGFkZGluZzogMS4zcmVtOyAqL1xuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHBpbms7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgYm94LXNoYWRvdzogXG4gICAgICAgICAgMHB4IDQzcHggNzlweCAtMjBweCAjYWY4NmMwLCBcbiAgICAgICAgICAzNHB4IC0xMnB4IDgwcHggLTIwcHggI2ZjZDdlNGQ0O1xuXG4gICAgICAgICAgYm94LXNoYWRvdzogXG4gICAgICAgICAgLTMxcHggMjBweCA2M3B4IC0yMHB4ICNhZjg2YzAsIFxuICAgICAgICAgIDEzcHggLTM1cHggNjNweCAtMnB4ICNmY2Q3ZTRmYTtcblxuICB9XG5cbiAgLmNyZWF0ZS1tb2RhbC1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MnB4O1xuICAgIGxlZnQ6IDQ0JTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkIDRweCBwaW5rO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuXG4gIC5tb2RhbCBoMyB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMTBweDtcbn1cbiAgXG4gICAubW9kYWwgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfSBcblxuXG4uY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4gICBcbiAgLm1vZGFsIGlucHV0LFxuICBzZWxlY3QjcHJvakRyb3Bkb3duIHtcbiAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG4gIFxuICAubW9kYWwgcCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgbWFyZ2luOiAwLjRyZW0gMCAwLjJyZW07XG4gIH1cbiAgXG4gIC5jcmVhdGUtbW9kYWwtYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgc2VsZWN0I3Byb2pEcm9wZG93biB7XG4gICAgd2lkdGg6IDQ3JTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8qIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyAqL1xufVxuXG4gIFxuICAuY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHBpbms7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDNweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuXG4gIC5jcmVhdGUtbW9kYWwtYnV0dG9ucyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM0M0EzRTgsICMwRURCREQpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbiBpbWd7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG5cbiAgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl17XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItbGVmdDogc29saWQgM3B4IHBpbms7XG4gIH1cbiAgXG4gIC5idG4tY2xvc2Uge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgOTcsIDgyLCAwLjUpO1xuICAgIFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4vKiBDVVJSRU5UIFRBU0sgIC0gcmVtb3ZlIGFsbCByZWZlcmVuY2VzIHRvIGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCAgKi9cblxuXG5cbiAgLyogVGFzay9Qcm9qZWN0IFN3aXRjaGVyIGluc2lkZSBNb2RhbCAqL1xuLypzZWxlY3RlZCBzaWRlKi9cbmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM0MjQyNDI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogIGJnIG9mIFRhc2sgd2hlbiBub3Qgc2VsZWN0ZWQqL1xuLyogLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCA+IGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcnsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXJ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxwaW5rLCBsYXZlbmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIHRleHQgb2YgVGFzayB3aGVuIG5vdCBzZWxlY3RlZCAgKi9cbi8qIC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggPiBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6YmVmb3JleyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOjpiZWZvcmV7XG4gICAgY29udGVudDogYXR0cihkYXRhLW9uKTsgLyogVGFzayAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0b3A6IDdweDtcbiAgICByaWdodDogMjBweDtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLyogIHByb2plY3Qgc2VsZWN0ZWQgKi9cbi8qIC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggPiBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6YWZ0ZXJ7ICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6OmFmdGVye1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpOyAvKiBQcm9qZWN0ICovXG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMnB4O1xuICAgIHRvcDogMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IC0ycHggIzExMTtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG5cbi8qIC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdeyAqL1xuICBpbnB1dCNjb2xvcl9tb2RlW3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDY4cHg7XG4gICAgbGVmdDogNDQlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi8qICBzZXQgYmcgYW5kIHRleHQgb24gcHJvamVjdCwgbm90IHNlbGVjdGVkICovXG5pbnB1dCNjb2xvcl9tb2RlW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVye1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscGluaywgbGF2ZW5kZXIpO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLyogIFNldHMgYmcgb2YgVGFzayB3aGVuIHNlbGVjdGVkKi9cbmlucHV0I2NvbG9yX21vZGVbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qVGFza3MqL1xuICBsZWZ0OiA2OHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dCNjb2xvcl9tb2RlW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmJlZm9yZXtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTsgLypQcm9qZWN0ICovXG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogMjBweDtcbn1cblxuXG4uY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMtdmlzaWJsZXtcbiAgb3V0bGluZTogc29saWQgMXB4ICNhZjc2ZjM7XG4gXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjtBQUN0QjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsd0JBQXdCOztJQUV4Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsd0JBQXdCOztJQUV4Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHNCQUFzQjs7SUFFdEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCOztJ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Q2YsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQSw4Q0FBOEM7QUFDOUM7RUFDRSxpREFBaUQ7RUFDakQsV0FBVztBQUNiOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLHNCQUFzQixFQUFFLFFBQVE7RUFDaEMsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUIsRUFBRSxXQUFXO0lBQ3BDLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsMEJBQTBCOztBQUU1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDU1MgZm9yIFRvRG8gTGlzdCAqL1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWdyYWRpZW50X2JnX2NvbG9yOiNlZGU1ZmQ7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfY29sb3I6I2UxY2JmYjtcXG4gICAgLS1ncmFkaWVudF9zcG90MV93OiA3NSU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfaDogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3g6IDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QxX3k6IDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX2NvbG9yOiNmZmUwZDY7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfdzogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX2g6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90Ml94OiAxMDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QyX3k6IDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2NvbG9yOiNlYmUwZmY7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfdzogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX2g6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90M194OiAxMDAlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3QzX3k6IDEwMCU7XFxuICAgIFxcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X2NvbG9yOiNmZmRiZjM7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfdzogNzUlO1xcbiAgICAtLWdyYWRpZW50X3Nwb3Q0X2g6IDc1JTtcXG4gICAgLS1ncmFkaWVudF9zcG90NF94OiAwJTtcXG4gICAgLS1ncmFkaWVudF9zcG90NF95OiAxMDAlO1xcbiAgICBcXG4gICAgLS1ncmFkaWVudF9zcG90Ml93OjEwMCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfeDo5NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDJfaDo0NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfdzo1MSU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfaDo2NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDFfeDo3JTtcXG4gICAgLS1ncmFkaWVudF9zcG90M193OjEwMCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfaDo4MiU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDNfeDo5MCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfdzo2NCU7XFxuICAgIC0tZ3JhZGllbnRfc3BvdDRfeDowJTtcXG4gICAgLS1ncmFkaWVudF9zcG90NF95OjQ1JTtcXG5cXG4gICAgLyogUHJvamVjdCBDb2xvdXJzICovXFxuICAgIC0tcHJvamVjdF9jb2xvcjE6ICNGRkVERDY7XFxuICAgIC0tcHJvamVjdF9jb2xvcjI6ICNGRkNCOUE7XFxuICAgIC0tcHJvamVjdF9jb2xvcjM6ICNGOEFFRjk7XFxuICAgIC0tcHJvamVjdF9jb2xvcjQ6ICNCOERCRkQ7XFxuICAgIC0tcHJvamVjdF9jb2xvcjU6ICNDOEJBRkE7XFxuICAgIC0tcHJvamVjdF9jb2xvcjY6ICM4RkU0RTk7XFxuXFxuICAgIC0tZGFya0dyZXk6ICMyNTJCM0Q7XFxuICAgIC0tbWVkR3JleTogIzk0OTY5YjtcXG4gICAgLS1saWdodEdyZXk6ICNlZWU7XFxuXFxuICB9XFxuXFxuICAud2VsY29tZS10ZXh0e1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1wcm9qZWN0X2NvbG9yNCkgMzAlLCB2YXIoLS1wcm9qZWN0X2NvbG9yNikgMTAwJSk7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLyogYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZhODNmYywgI2NhYmNmYik7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XFxuICB9XFxuXFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9OdW5pdG8tVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCdvcGVudHlwZScpLFxcbiAgICB1cmwoJy4vZm9udHMvTnVuaXRvLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuICBcXG4gIC5mYW5jeS1ncmFkaWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYWRpZW50X2JnX2NvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QxX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QxX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDFfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QxX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90MV9jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QyX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QyX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDJfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QyX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90Ml9jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3QzX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QzX2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDNfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3QzX3kpLCB2YXIoLS1ncmFkaWVudF9zcG90M19jb2xvciksIHRyYW5zcGFyZW50KSwgcmFkaWFsLWdyYWRpZW50KHZhcigtLWdyYWRpZW50X3Nwb3Q0X3cpIHZhcigtLWdyYWRpZW50X3Nwb3Q0X2gpIGF0IGxlZnQgdmFyKC0tZ3JhZGllbnRfc3BvdDRfeCkgdG9wIHZhcigtLWdyYWRpZW50X3Nwb3Q0X3kpLCB2YXIoLS1ncmFkaWVudF9zcG90NF9jb2xvciksIHRyYW5zcGFyZW50KTtcXG4gIH1cXG5cXG4gXFxuICBcXG4vKiBcXG4gIC5hbmltYXRlZCB7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICB9XFxuQGtleWZyYW1lcyBjaGFtZWxlb24ge1xcblxcbiAgICAwJSB7XFxuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IxKTtcXG4gICAgfVxcbiAgICAxNC4yOTk5JSB7XFxuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IyKTtcXG4gICAgfVxcbiAgICAyOC41OTk5JSB7XFxuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IzKTtcXG4gICAgfVxcbiAgICA0Mi44OTk4JSB7XFxuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I0KTtcXG4gICAgfVxcbiAgICA1Ny4xOTk2JSB7XFxuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I1KTtcXG4gICAgfVxcbiAgICA3MS40OTk1JSB7XFxuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I2KTtcXG4gICAgfVxcbiAgICA4NS43OTk0JSB7XFxuICAgICAgY29sb3I6IHZpb2xldDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICB9XFxuICB9XFxuICAuY2hhbWVsZW9uIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW1lbGVvbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICB9ICAqL1xcbiAgLyogVE8gVVNFLCBBREQgQ0xBU1MgQU5JTUFURSBBTkQgQ0xBU1MgQ0hBTUVMRU9OICovXFxuICBcXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICMyMjI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG5cXG4gICAgLyogZm9udC1zaXplOiAxLjEyNXJlbTsgXFxuICBsaW5lLWhlaWdodDogMS41OyAgKi9cXG5cXG5cXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIHdpZHRoOiA4NXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQzLCAyNDgsIDAuNjIyKTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0NiAyNDMgMjQ4IC8gNTYlKTsgLyogZ3JhZGllbnQgYmxlbmQgaW50byBiZyAgKi9cXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IGZsb3JhbHdoaXRlO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDEuNWZyIDAuNWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm5hdiBoZWxsbyBwcm9qaGVhZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hdiBpbmZvIHByb2plY3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJuYXYgaGVhZGluZyBwcm9qZWN0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwibmF2IHRhc2tib3ggcHJvamVjdFxcXCI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6XFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4Nik7XFxufVxcblxcbi5uYXZ7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweCAzMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggbGlnaHRncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uYXYgLmxvZ297XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbn1cXG5cXG4gICAvKiBzdHlpbmcgb2YgYnV0dG9ucyBvbiBkYXNoICovXFxuICAuYnRue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzk0OTY5YjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjRCNUI7XFxuICAgIC8qIGNvbG9yOiAjZmY5NGVhOyAqL1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjZmY5NGVhO1xcbiAgICAvKiBvdXRsaW5lOiAzcHggc29saWQgI0Y4QUVGOTsgKi9cXG4gIH1cXG5cXG4gIC5idG4gaW1ne1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIFxcbiAgfVxcblxcbi5oZWxsb3tcXG4gICAgZ3JpZC1hcmVhOiBoZWxsbztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UxY2JmYjsgKi9cXG4gICAgY29sb3I6ICMzMDJiMmI7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmltZy1oYW5ke1xcbiAgICB3aWR0aDogMTElO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuXFxuLmluZm97XFxuICAgIGdyaWQtYXJlYTogaW5mbztcXG4gIFxcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywxKSA1MSUsIHJnYmEoMjM4LDIzOCwyMzgsMSkgOTklKTsgICovXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzNiwyMjQsMjUzLDEpIDUxJSwgcmdiYSgyNDYsMjM3LDI0MywxKSA5OSUpOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ViZTBmZjsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiBib3gtc2hhZG93OlxcbiAgICAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxcbiAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcbiAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxuICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKTsgICovXFxuICAgXFxuXFxufVxcblxcbi5pbmZvOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywwLjEpIDExJSwgcmdiYSgyNDYsMjM3LDI0MywxKSA5OSUpLCB1cmwoJy9zcmMvaW1hZ2VzL2xvdy1wb2x5LWdyaWQtaGFpa2VpLnBuZycpOyBcXG4gICAgXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwcHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4ICNjNmFkZjI7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuXFxuLmluZm8taXRlbXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzhhZWY4Oy8qIGJlc3QgY29sb3VyIG9uIG1hY21pbmkgICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZjc2ZjM7IC8qIGJlc3QgY29sb3Igb24gbWFjYm9vayAqL1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNjNmFkZjI7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjYzZhZGYyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XFxuXFxufVxcbi5pbmZvIHN0cm9uZ3tcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgIFxcbn1cXG5cXG4uaW5mby1pdGVtOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmFkZjI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNiNDkxZjE7ICovXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDVweCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNkMWJjZjg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZDFiY2Y4O1xcbn1cXG5cXG4uaGVhZGluZ3tcXG4gICAgZ3JpZC1hcmVhOiBoZWFkaW5nO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNlZGU1ZmQ7ICovXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi8qIEFMTCBQUk9KRUNUUyBESVNQTEFZICovXFxuLnRhc2tib3h7XFxuICAgIGdyaWQtYXJlYTogdGFza2JveDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4gICAgLnByb2plY3QtaXRlbXtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBtYXJnaW46IDhweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDsgKi9cXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGREUxREI7XFxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICNmYmRlZDc7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZiZGVkNztcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1pdGVtIGg1e1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICB9XFxuXFxuICAgIHAucHJvamVjdC1pdGVtLXRhc2tubyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbWVkR3JleSk7XFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcXG4gICAgfVxcbiAgICBkaXYucHJvamVjdC1pdGVtLXdyYXBwZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgfVxcbiAgICBidXR0b24ucHJvamVjdC1pdGVtLWVkaXRidG57XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcbiAgXFxuICAgIC8qIHByb2plY3QtaXRlbSBob3ZlcnMgKi9cXG4gICAgLnByb2plY3QtaXRlbTpob3ZlcntcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2Y4ZWNlOTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZjhlY2U5O1xcbiAgICB9XFxuICAgIGJ1dHRvbi5wcm9qZWN0LWl0ZW0tZWRpdGJ0bjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gICAgfVxcblxcblxcblxcblxcblxcblxcbi8qIFBST0pFQ1QgU0VDVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLnByb2poZWFkaW5ne1xcbiAgICBncmlkLWFyZWE6IHByb2poZWFkaW5nO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOi0yMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG5cXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgei1pbmRleDoxO1xcblxcbn1cXG4gICAgXFxuXFxuLnByb2plY3R7XFxuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogLTVweCAtNDZweCA1OHB4IC0yMHB4IGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2ltYWdlcy9jcnlzdGFscy5wbmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIDk1JTtcXG59XFxuXFxuaDIucHJvamVjdC1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QgaDMsXFxuLmdyYWRpZW50LWgze1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgLyogY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I1KTsgKi9cXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTsgKi9cXG5cXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZhODNmYywgI2NhYmNmYik7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogZGV0YWlscyAqL1xcbi5wcm9qZWN0LXRhc2staXRlbXtcXG4gICAgYmFja2dyb3VuZDojZWVlZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTVweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4ICMzYTQ3NGUyNiwgMCAxcHggMnB4ICMzYTQ3NGUyNjtcXG59XFxuXFxuXFxuaW1nLnByb2plY3QtdGFzay1lZGl0YnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLXByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XFxuICAgIGNvbG9yOiAjMDA4YjkyO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDFweCAxNXB4O1xcbn1cXG5sYWJlbHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubG93UHJpb3JpdHl7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I2KTtcXG4gICAgY29sb3I6ICMwMDhiOTI7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I0KTtcXG4gICAgY29sb3I6ICMwMDgwZmQ7XFxufVxcblxcbi5oaWdoUHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IzKTtcXG4gICAgY29sb3I6I2QwMDJkNDtcXG59XFxuXFxuLm1lZFByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMik7XFxuICAgIGNvbG9yOiAjZTE2ZDAxO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuXFxuXFxuLnByb2plY3QtdGFzay1pbWd7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1tZWRHcmV5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDtcXG59IFxcbiAgICBcXG5cXG5cXG5cXG5cXG5cXG4vKiBQT1AgVVBTLyBNT0RBTFMgICovXFxuXFxuLyogQ3JlYXRlLyBBZGQgTmV3Li4uICAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEuNHJlbTtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICAvKiBwYWRkaW5nOiAxLjNyZW07ICovXFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcGluaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgei1pbmRleDogMjtcXG5cXG4gICAgYm94LXNoYWRvdzogXFxuICAgICAgICAgIDBweCA0M3B4IDc5cHggLTIwcHggI2FmODZjMCwgXFxuICAgICAgICAgIDM0cHggLTEycHggODBweCAtMjBweCAjZmNkN2U0ZDQ7XFxuXFxuICAgICAgICAgIGJveC1zaGFkb3c6IFxcbiAgICAgICAgICAtMzFweCAyMHB4IDYzcHggLTIwcHggI2FmODZjMCwgXFxuICAgICAgICAgIDEzcHggLTM1cHggNjNweCAtMnB4ICNmY2Q3ZTRmYTtcXG5cXG4gIH1cXG5cXG4gIC5jcmVhdGUtbW9kYWwtaWNvbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC01MnB4O1xcbiAgICBsZWZ0OiA0NCU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCBwaW5rO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB9XFxuXFxuICAubW9kYWwgaDMge1xcbiAgICBtYXJnaW46IDIwcHggYXV0byAxMHB4O1xcbn1cXG4gIFxcbiAgIC5tb2RhbCAuZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfSBcXG5cXG5cXG4uY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuICAgXFxuICAubW9kYWwgaW5wdXQsXFxuICBzZWxlY3QjcHJvakRyb3Bkb3duIHtcXG4gICAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gIH1cXG4gIFxcbiAgLm1vZGFsIHAge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6ICM3Nzc7XFxuICAgIG1hcmdpbjogMC40cmVtIDAgMC4ycmVtO1xcbiAgfVxcbiAgXFxuICAuY3JlYXRlLW1vZGFsLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICBzZWxlY3QjcHJvakRyb3Bkb3duIHtcXG4gICAgd2lkdGg6IDQ3JTtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIC8qIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7ICovXFxufVxcblxcbiAgXFxuICAuY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBwaW5rO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgM3B4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcbiAgIHRyYW5zaXRpb246IDAuM3M7XFxuICB9XFxuXFxuICAuY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzQzQTNFOCwgIzBFREJERCk7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4uY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uIGltZ3tcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG5cXG4gIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXXtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggcGluaztcXG4gIH1cXG4gIFxcbiAgLmJ0bi1jbG9zZSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDk3LCA4MiwgMC41KTtcXG4gICAgXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuLyogQ1VSUkVOVCBUQVNLICAtIHJlbW92ZSBhbGwgcmVmZXJlbmNlcyB0byBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2ggICovXFxuXFxuXFxuXFxuICAvKiBUYXNrL1Byb2plY3QgU3dpdGNoZXIgaW5zaWRlIE1vZGFsICovXFxuLypzZWxlY3RlZCBzaWRlKi9cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICM0MjQyNDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qICBiZyBvZiBUYXNrIHdoZW4gbm90IHNlbGVjdGVkKi9cXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoID4gbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyeyAqL1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXJ7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHBpbmssIGxhdmVuZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiB0ZXh0IG9mIFRhc2sgd2hlbiBub3Qgc2VsZWN0ZWQgICovXFxuLyogLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCA+IGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjpiZWZvcmV7ICovXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qIFRhc2sgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRvcDogN3B4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi8qICBwcm9qZWN0IHNlbGVjdGVkICovXFxuLyogLmJ0bi1jb2xvci1tb2RlLXN3aXRjaCA+IGxhYmVsLmJ0bi1jb2xvci1tb2RlLXN3aXRjaC1pbm5lcjphZnRlcnsgICovXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5idG4tY29sb3ItbW9kZS1zd2l0Y2gtaW5uZXI6OmFmdGVye1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTsgLyogUHJvamVjdCAqL1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDJweDtcXG4gICAgdG9wOiAycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggLTJweCAjMTExO1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG5cXG4vKiAuYnRuLWNvbG9yLW1vZGUtc3dpdGNoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17ICovXFxuICBpbnB1dCNjb2xvcl9tb2RlW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2OHB4O1xcbiAgICBsZWZ0OiA0NCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKiAgc2V0IGJnIGFuZCB0ZXh0IG9uIHByb2plY3QsIG5vdCBzZWxlY3RlZCAqL1xcbmlucHV0I2NvbG9yX21vZGVbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVye1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHBpbmssIGxhdmVuZGVyKTtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4vKiAgU2V0cyBiZyBvZiBUYXNrIHdoZW4gc2VsZWN0ZWQqL1xcbmlucHV0I2NvbG9yX21vZGVbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmFmdGVye1xcbiAgY29udGVudDogYXR0cihkYXRhLW9uKTsgLypUYXNrcyovXFxuICBsZWZ0OiA2OHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmlucHV0I2NvbG9yX21vZGVbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwuYnRuLWNvbG9yLW1vZGUtc3dpdGNoLWlubmVyOmJlZm9yZXtcXG4gICAgY29udGVudDogYXR0cihkYXRhLW9mZik7IC8qUHJvamVjdCAqL1xcbiAgICByaWdodDogYXV0bztcXG4gICAgbGVmdDogMjBweDtcXG59XFxuXFxuXFxuLmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cy12aXNpYmxle1xcbiAgb3V0bGluZTogc29saWQgMXB4ICNhZjc2ZjM7XFxuIFxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy9PdXIgbWFpbiBmaWxlIC0gaGFuZGxlcyByZXF1ZXN0cy4gXG4vL1RlbGxzIE1PREVMIHdoYXQgdG8gZG8gKGxvZ2ljIHdpc2UpLCBcbi8vdGVsbHMgVklFVyB3aGF0IGRvIHRvIChkaXNwbGF5IHdpc2UpXG4vL0NvbnRyb2xzIGFuZCBkZWNpZGVzIGhvdyBkYXRhIGlzIGRpc3BsYXllZFxuaW1wb3J0IHsgdGhpc2lzdGhldmlldyB9IGZyb20gJy4vdmlldy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0TW9kZWwgfSBmcm9tICcuL21vZGVsLmpzJztcblxuXG5cbi8vaW5pdGl0YXRpb24gZnVuY3Rpb24vIGxvYWRzIHRoZSB2aWV3XG50aGlzaXN0aGV2aWV3KCk7XG5cblxuXG5cblxuXG5cblxuLy9mdW5jdGlvbiB0aGF0IHJ1bnMgd2hlbiBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWRcbiBleHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qTmFtZSl7XG5cbiAgICAvL3RoaXMgc2hvdWxkIGJlIGEgY2FsbCB0byBhIGZ1bmN0aW9uIGluc2lkZSBtb2RlbCwgcGFzc2luZyB0aGUgcHJvak5hbWUsIG1vZGVsIHdpbGwgY3JlYXRlIHRoZSBvYmplY3QgYW5kIHJldHVybiB0aGUgb2JqZWN0IHRvIGNvbnRyb2xsZXJcbiAgICBjcmVhdGVOZXdQcm9qZWN0TW9kZWwocHJvak5hbWUpOyAvL2luIG1vZGVsXG5cbiAgICAvL3Bhc3MgbmV3bHkgY3JlYXRlZCBvYmogdG8gdmlldyB0byBhZGQgY2FyZFxufVxuIFxuLy93aGVuIHByb2plY3QgaXMgY3JlYXRlZCwgcGFzcyBubyBvZiB0YXNrcyB0byB2aWV3IHRvIGRpc3BsYXlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGNvbnN0IHB1YlN1YiA9IHtcbi8vICAgZXZlbnRzOiB7fSxcbi8vICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKXtcbi8vICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3Qgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZOYW1lfWApO1xuLy8gICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4vLyAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4vLyAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKTtcbi8vICAgfSxcbi8vICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pe1xuLy8gICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBVTnN1YnNjcmliZWQgZnJvbSAke2V2TmFtZX1gKTtcbi8vICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4vLyAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pe1xuLy8gICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoZiA9PiBmICE9PSBmbik7XG4vLyAgICAgfVxuLy8gICB9LFxuLy8gICBwdWJsaXNoOiBmdW5jdGlvbihldk5hbWUsIGRhdGEpe1xuLy8gICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IE1ha2luZyBhIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4vLyAgICAgLy9lbWl0L3B1Ymxpc2ggdGhlIGV2ZW50IHRvIGFueW9uZSB3aG8gaXMgc3Vic2NyaWJlZFxuLy8gICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKXtcbi8vICAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5mb3JFYWNoKGYgPT4ge1xuLy8gICAgICAgICAgICAgZihkYXRhKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9O1xuXG5cblxuIiwiLy90aGUgbW9kZWwgaGFuZGxlcyBhbGwgdGhlIGRhdGEgYW5kIGxvZ2ljIFxuaW1wb3J0IHsgYWRkUHJvamVjdFRvRHJvcGRvd24gfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IG5ld1Byb2plY3RGb3JtIH0gZnJvbSAnLi9uZXdQcm9qZWN0Rm9ybSc7XG5cblxuICAgIC8vYXJyYXkgb2YgYWxsIHByb2plY3RzLCBlYWNoIHByb2plY3QgaXMgYW4gb2JqZWN0XG4gIGV4cG9ydCBsZXQgYWxsUHJvamVjdHNBcnIgPSBbXTsgLy9leHBvcnQgdG8gdmlld1xuXG4gIGNvbnN0IFByb2plY3RGYWN0b3J5ID0gKHByb2pOYW1lKSA9PiB7XG4gIC8vY3JlYXRlIGFuIG9iamVjdCwgc2V0IHRoZSBwcm9qZWN0IG5hbWUgdG8gcHJvak5hbWUsIHNldCB0YXNrIGFycmF5IHRvIGVtcHR5LCBwdXNoIHByb2pOYW1lIHRvIGFsbHByb2phcnIsIHJldHVybiBvYmpcbiAgICAgICAgLy8gbGV0IG9iaiA9IE9iamVjdC5jcmVhdGUocHJvamVjdEZhY3RvcnkucHJvdG8pO1xuICAgICAgICAvLyBvYmoubmFtZSA9IHByb2pOYW1lO1xuXG4gICAgICAgIGxldCBwcm9qZWN0ID0ge307XG4gICAgICAgIHByb2plY3QubmFtZSA9IHByb2pOYW1lO1xuXG4gICAgICAgIGxldCBwcm9qX3Rhc2tzQXJyID0gW107ICAvL2FyciBvZiBvYmplY3RzXG5cbiAgICAgICAgLy9wb3RlbnRpYWxseSBnZXR0ZXIgYW5kIHNldHRlciBmb3IgcHJvamVjdCBuYW1lPyBcbiAgICAgICAgLy8gY29uc3Qgc2V0UHJvamVjdE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIC8vICAgIGNvbnN0IG5hbWUgPSBwcm9qTmFtZTtcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gY29uc3QgZ2V0UHJvamVjdE5hbWUgPSAoKSA9PiBwcm9qTmFtZTtcbiAgICAgICAgXG5cbiAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9jcmVhdGVzIG5ldyBwcm9qZWN0IGFuZCBwdXQgaW4gcHJvamVjdHMgYXJyYXkgLSBjdXJyZW50bHkgdXNlcyBuYW1lIG9mIHByb2ogYnV0IHdvdWxkIGlkIyBzeXN0ZW0gYmUgYmV0dGVyP1xuICAgXG4gICAgICAgICAgICBhbGxQcm9qZWN0c0Fyci5wdXNoKHByb2plY3QpO1xuXG4gICAgICAgIH07XG5cblxuXG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vbW9kYWwgcG9wIHVwICdhcmUgeW91IHN1cmUnIGlmIHllcyxcbiAgICAgICAgICAgIC8vZmluZCBwcm9qIGluIHByb2pzIGFycmF5IGFuZCBkZWxldGVzLiBwcm9qIGFycnJheSBpcyB1cGRhdGVkLlxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAoKSA9PiB7fVxuICAgICAgICBjb25zdCByZW1vdmVUYXNrRnJvbVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldE5vT2ZUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBub09mVGFza3MgPSBwcm9qX3Rhc2tzQXJyLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gT2YgVGFza3M6IChmcm9tIHByb2pfdGFza3NBcnIubGVuZ3RoKSBcIiArIHByb2pfdGFza3NBcnIubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBub09mVGFza3M7XG4gICAgICAgIH1cbiBcbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdCwgcHJvak5hbWUsIGNyZWF0ZVByb2plY3QsIGdldE5vT2ZUYXNrcyB9O1xuICAgICBcbiAgICB9XG5cbiAgICAvLyBwcm9qZWN0RmFjdG9yeS5wcm90byA9IHtcbiAgICAvLyAgICAgYWRkdG9BcnJheTogZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkVG9BcnJheSBjYWxsZWRcIik7XG4gICAgLy8gICAgICAgICBhbGxQcm9qZWN0c0Fyci5wdXNoKHRoaXMubmFtZSk7XG4gICAgLy8gICAgIH0gXG4gICAgLy8gfVxuXG5cbiAgICAvL3NldCB1cCBkZWZhdWx0IHByb2plY3QgYXMgRkFDVE9SWVxuICAgIGxldCBkZWZhdWx0cHJvaiA9IFByb2plY3RGYWN0b3J5KCdkZWZhdWx0Jyk7XG4gICAgZGVmYXVsdHByb2ouY3JlYXRlUHJvamVjdCgpO1xuXG5cbiAgIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0TW9kZWwocHJvak5hbWUpeyAgLy9leHBvcnQgdG8gY29udHJvbGxlclxuICAgICAgICAgbGV0IG5ld3Byb2pOYW1lID0gUHJvamVjdEZhY3RvcnkocHJvak5hbWUpO1xuICAgICAgICAgbmV3cHJvak5hbWUuY3JlYXRlUHJvamVjdCgpO1xuICAgICAgICAgbmV3cHJvak5hbWUuZ2V0Tm9PZlRhc2tzKCk7XG5cbiAgICAgfVxuXG5cblxuXG4iLCIvL21vZGFsIGRpc3BsYXkgLSBjcmVhdGUgTmV3IFByb2plY3Rcbi8vY29udGFpbnMgY29kZSB0byBjcmVhdGUgZG9tIGVsZW1lbnRzIGFuZCBhcHBlbmQgdGhlbSBpbnNpZGUgbW9kYWwgXG5cbmxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhXCIpO1xuXG4vL2NyZWF0ZSBlbGVtZW50cyBcbmxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gU2V0IGF0dHJpYnV0ZXNcbmxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwicHJvak5hbWVcIik7XG5sYWJlbC50ZXh0Q29udGVudD1cIlByb2plY3QgTmFtZTpcIjtcbmlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuaW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2pOYW1lXCIpO1xuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpe1xuICAgIC8vdG9nZ2xlIGRpc3BsYXlcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNob3dQcm9qTW9kdWxlXCIpO1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1Rhc2tNb2R1bGVcIik7XG5cbiAgICAvL2FwcGVuZCBlbGVtZW50cyB0byBkaXZcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG59O1xuXG5leHBvcnQgeyBuZXdQcm9qZWN0Rm9ybSB9IDsgLy90byB2aWV3IiwiLy9tb2RhbCBkaXNwbGF5IC0gY3JlYXRlIE5ldyBUYXNrXG4vL2NvbnRhaW5zIGNvZGUgdG8gY3JlYXRlIGRvbSBlbGVtZW50cyBhbmQgYXBwZW5kIHRoZW0gaW5zaWRlIG1vZGFsIFxuXG5pbXBvcnQgeyBhbGxQcm9qZWN0c0FyciB9IGZyb20gJy4vbW9kZWwnO1xuXG5sZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhJyk7XG5cbi8vY3JlYXRlIGVsZW1lbnRzXG5sZXQgcHJvakRyb3Bkb3duTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGV0IHByb2pEcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG5sZXQgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmxldCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG5sZXQgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGV0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuXG4vLyBTZXQgYXR0cmlidXRlc1xucHJvakRyb3Bkb3duTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvakRyb3Bkb3duXCIpO1xucHJvakRyb3Bkb3duTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6IFwiO1xucHJvakRyb3Bkb3duLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvakRyb3Bkb3duXCIpO1xucHJvakRyb3Bkb3duLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qRHJvcGRvd25cIik7XG5cbnRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRhc2tOYW1lXCIpO1xudGFza0xhYmVsLnRleHRDb250ZW50PVwiVGFzayBOYW1lOlwiO1xudGFza0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xudGFza0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrTmFtZVwiKTtcbnRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tOYW1lXCIpO1xuXG50YXNrRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInRhc2tEZXNjXCIpO1xudGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQ9XCJUYXNrIERlc2NyaXB0aW9uOlwiO1xudGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG50YXNrRGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFza0Rlc2NcIik7XG50YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEZXNjXCIpO1xuXG5cbmZ1bmN0aW9uIHBvcHVsYXRlRHJvcGRvd24oYWxsUHJvamVjdHNBcnIpe1xuICAgIC8vcmVtb3ZlIGFsbCB2YWx1ZXMgYW5kIHJlcmVuZGVyXG4gICAgY2xlYXJEcm9wZG93bk9wdGlvbnMoKTtcblxuICAgIC8vZ2V0IHZhbHVlcyBmcm9tIHByb2ogYXJyYXkgYW5kIGNyZWF0ZSBvcHRpb24gdGFnIGZvciBlYWNoXG4gICAgaWYgKGFsbFByb2plY3RzQXJyLmxlbmd0aCA+IDApe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhbGxQcm9qZWN0c0Fyci5sZW5ndGgtMTsgaSsrKXtcbiAgICAgICAgICAgIHByb2pEcm9wZG93bi5hcHBlbmRDaGlsZChjcmVhdGVEcm9wZG93bk9wdGlvbnMoYWxsUHJvamVjdHNBcnJbaV0pKTsgXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjbGVhckRyb3Bkb3duT3B0aW9ucygpe1xuIC8vaWYgZGl2IGhhcyBjaGlsZHJlbiwgcmVtb3ZlIGNoaWxkcmVuXG5cbiAgICBpZiAocHJvakRyb3Bkb3duLmhhc0NoaWxkTm9kZXMpe1xuICAgICAgICB3aGlsZSAocHJvakRyb3Bkb3duLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2pEcm9wZG93bi5yZW1vdmVDaGlsZChwcm9qRHJvcGRvd24uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bk9wdGlvbnMoaXRlbSl7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpdGVtKTsgXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudD0gaXRlbTsgIFxuICAgIHJldHVybiBvcHRpb247XG59O1xuXG5mdW5jdGlvbiBuZXdUYXNrRm9ybSgpe1xuICAgIC8vdG9nZ2xlIGRpc3BsYXlcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNob3dUYXNrTW9kdWxlXCIpO1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1Byb2pNb2R1bGVcIik7XG5cbiAgICAvL2NsZWFyIGVsZW1lbnRzIFxuICAgIHRhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgICBwb3B1bGF0ZURyb3Bkb3duKGFsbFByb2plY3RzQXJyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvakRyb3Bkb3duTGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwcm9qRHJvcGRvd24pO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbn1cblxuZXhwb3J0IHsgbmV3VGFza0Zvcm0gfTsiLCIvL3RoZSB2aWV3IGhhbmRsZXMgaG93IHRoZSBVSSBpcyBkaXNwbGF5ZWQuIE9ubHkgdGFsa3MgdG8gY29udHJvbGxlci4gXG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IG5ld1Byb2plY3RGb3JtIH0gZnJvbSAnLi9uZXdQcm9qZWN0Rm9ybS5qcyc7XG5pbXBvcnQgeyBuZXdUYXNrRm9ybSB9IGZyb20gJy4vbmV3VGFza0Zvcm0uanMnO1xuaW1wb3J0IHsgYWxsUHJvamVjdHNBcnIgfSBmcm9tICcuL21vZGVsLmpzJzsgLy9tYXliZSBtb3ZlXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXNpc3RoZXZpZXcoKXtcblxuICAgIGxldCBkb21DYWNoZWRFbGVtZW50cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKSxcbiAgICAgICAgYWRkYnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1hZGRcIiksXG4gICAgICAgIHZpZXdBbGxQcm9qZWN0c0J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYWxscHJvalwiKSxcbiAgICAgICAgdGFza2JveDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrYm94XCIpLFxuICAgfVxuXG4gICBkb21DYWNoZWRFbGVtZW50cy52aWV3QWxsUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHZpZXdBbGxQcm9qZWN0cyk7XG5cbiAgIGZ1bmN0aW9uIHZpZXdBbGxQcm9qZWN0cygpe1xuICAgIC8vMS4gY2xlYXJzIHByb2plY3QgZGlzcGxheSBhcmVhIFxuICAgICAgICAgICAgIC8vaWYgZGl2IGhhcyBjaGlsZHJlbiwgcmVtb3ZlIGNoaWxkcmVuXG4gICAgICAgICAgICAgaWYgKGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3guaGFzQ2hpbGROb2Rlcyl7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3guZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBkb21DYWNoZWRFbGVtZW50cy50YXNrYm94LnJlbW92ZUNoaWxkKGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3guZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vMi4gbG9vcHMgb3ZlciBhbGwgcHJvamVjdHMgYXJyYXkgKGlmIGFyciBub3QgZW1wdHkpICYgY3JlYXRlcyBwcm9qZWN0IGNhcmQgZm9yIGVhY2ggcHJvamVjdCAmIGFwcGVuZCB0byB0YXNrYm94XG4gICAgICAgIGlmIChhbGxQcm9qZWN0c0Fyci5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICBhbGxQcm9qZWN0c0Fyci5mb3JFYWNoKGNyZWF0ZVByb2plY3RJdGVtQ2FyZCk7XG4gICAgICAgIH1cbiAgIH1cblxuLy9jYWxsYmFjayBmcm9tIGZvcmVhY2ggYWJvdmVcbiAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJdGVtQ2FyZCAoaXRlbSwgaW5kZXgpe1xuICAgICAgICAvL2NyZWF0ZSBlbGVtZW50cywgXG4gICAgICAgIGxldCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG5cbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNBcnJbaW5kZXhdLm5hbWU7IFxuICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0VGFza05vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2plY3RUYXNrTm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS10YXNrbm9cIik7XG4gICAgICAgIHByb2plY3RUYXNrTm8udGV4dENvbnRlbnQgPSBcIjcgYWN0aXZlIHRhc2tzXCI7IC8qVGhpcyB3aWxsIGJlIHVwZGF0ZWQgdG8gZmV0Y2ggbnVtYmVyICovXG4gICAgICAgIC8vY2FsbCBcbiAgICAgXG5cbiAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tObyk7XG5cbiAgICAgICAgbGV0IHByb2plY3RJdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RJdGVtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtLXdyYXBwZXJcIik7XG4gICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtV3JhcHBlcik7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0SXRlbUVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgcHJvamVjdEl0ZW1FZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW0tZWRpdGJ0blwiKTtcblxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0SXRlbUVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SXRlbUVkaXRJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9zcmMvaW1hZ2VzL2VkaXQucG5nXCIpO1xuICAgICAgICAgICAgICAgIHByb2plY3RJdGVtRWRpdEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbUVkaXRJY29uKTtcblxuICAgICAgICAgICAgcHJvamVjdEl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRWRpdEJ0bik7XG4gICAgICAgICAgICAvL2NvZGUgdG8gYWRkIHByb2plY3QgZHVlIGRhdGUgaWYgaW5jbHVkaW5nP1xuXG4gICAgICAgICAgICAvLzMuIGFwcGVuZCBlYWNoIHByb2plY3QgY2FyZHMgdG8gIGRpc3BsYXkgYXJlYSAoZG9tQ2FjaGVkRWxlbWVudHMudGFza2JveClcbiAgICAgICAgICAgIGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3guYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0gQ1JFQVRFIE5FVyAtIE1PREFMIC0tLS0tLS0tLS0tLS0tLS1cbiAgICBsZXQgbW9kYWxFbGVtZW50cyA9IHtcbiAgICAgICAgc3VibWl0QnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICBjbGVhckJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmNsZWFyLWJ0bicpLFxuICAgICAgICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKSxcbiAgICAgICAgb3ZlcmxheTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpLFxuICAgICAgICBjbG9zZU1vZGFsQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jbG9zZVwiKVxuICAgIH1cblxuICAgLy9vcGVucyBtb2RhbCB0byBjcmVhdGUgbmV3IHByb2plY3QvdGFza1xuICAgY29uc3Qgb3Blbk1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb2RhbEVsZW1lbnRzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIG1vZGFsRWxlbWVudHMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBjbGVhcklucHV0VmFsdWVzKCk7XG4gICAgfTtcbiAgICAvL2FkZCBldmVudCBsaXN0ZW5lciB0byBvcGVuIG1vZGFsIG9uIGNsaWNrXG4gICAgZG9tQ2FjaGVkRWxlbWVudHMuYWRkYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xuXG4gICAgLy9jbG9zZXMgbW9kYWxcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb2RhbEVsZW1lbnRzLm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIG1vZGFsRWxlbWVudHMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH07XG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2xvc2UgbW9kYWwgb24gY2xpY2tcbiAgICBtb2RhbEVsZW1lbnRzLmNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAgIG1vZGFsRWxlbWVudHMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gICAgbW9kYWxFbGVtZW50cy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG5cblxuXG4gICAgbGV0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lXCIpO1xuICAgIGxldCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpO1xuICAgIGxldCBwcm9qTmFtZUlucHV0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvak5hbWVcIik7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY3JlYXRlLW1vZGFsLWlucHV0LWFyZWFcIik7XG5cblxuXG5cblxuXG5cbiAgICBsZXQgY3JlYXRlTmV3UHJvakVsZW1lbnRzID0ge1xuICAgICAgICBuYW1lSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2NvbG9yX21vZGVbdHlwZT1cImNoZWNrYm94XCJdJyksXG4gICAgICAgIFxuICAgICAgICB0b2dnbGVNb2RhbERpc3BsYXk6IGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY3JlYXRlLW1vZGFsLWlucHV0LWFyZWFcIik7XG5cbiAgICAgICAgICAgIGlmIChjcmVhdGVOZXdQcm9qRWxlbWVudHMubmFtZUlucHV0LmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9nZ2xlIGNoZWNrZWQvIEFkZCBuZXcgVEFTS1wiKTtcbiAgICAgICAgICAgICAgICBjbGVhcklucHV0VmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgLy8gLy9pZiBkaXYgaGFzIGNoaWxkcmVuLCByZW1vdmUgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICBpZiAoZGl2Lmhhc0NoaWxkTm9kZXMpe1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2xvYWQgTmV3IFRhc2sgSW5wdXRzXG4gICAgICAgICAgICAgICAgbmV3VGFza0Zvcm0oKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvZ2dsZSBub3QgY2hlY2tlZC8gQWRkIG5ldyBQUk9KRUNUXCIpO1xuICAgICAgICAgICAgICAgIGNsZWFySW5wdXRWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICAvLyAvL2lmIGRpdiBoYXMgY2hpbGRyZW4sIHJlbW92ZSBjaGlsZHJlblxuICAgICAgICAgICAgICAgIGlmIChkaXYuaGFzQ2hpbGROb2Rlcyl7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChkaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtKCk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9wcm9qZWN0L3Rhc2sgdG9nZ2xlXG4gICAgY3JlYXRlTmV3UHJvakVsZW1lbnRzLm5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3UHJvakVsZW1lbnRzLnRvZ2dsZU1vZGFsRGlzcGxheSk7XG5cblxuXG5cblxuICAgIC8vU1VCTUlUIEJVVFRPTlxuICAgIG1vZGFsRWxlbWVudHMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIC8vdGhpcyBmdW5jdGlvbiBtYXkgbmVlZCB0byBiZSBtb3ZlZCB0byBjb250cm9sbGVyXG4gICAgLy9nZXQgdGhlIHZhbHVlIGZyb20gdGhlIGlucHV0cywgcGFzcyB0byBjb250cm9sbGVyIFxuICAgIC8vKGNvbnRyb2xsZXIgd2lsIHBhc3MgdG8gbW9kZWwsIHRvIGRpc3BsYXkgb24gc2NyZWVuIClcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9nZXQgbGF0ZXN0IHZhbHVlc1xuICAgICAgICAgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza05hbWVcIik7XG4gICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpO1xuICAgICAgICAgcHJvak5hbWVJbnB1dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOYW1lXCIpO1xuXG5cbiAgICAgICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93VGFza01vZHVsZVwiKSl7XG5cbiAgICAgICAgICAgIC8vZ2V0IHRhc2sgZGF0YVxuICAgICAgICAgICAvLyBsZXQgcHJvak5hbWVPcHRpb24gPSAgLy9nZXQgcHJvaiBuYW1lIGZyb20gZHJvcGRvd24gb3B0aW9uLnZhbHVlXG4gICAgICAgICAgICBsZXQgdGFza05hbWUgPSB0YXNrTmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuXG5cblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyAoXCJwcm9qZWN0IHNlbGVjdGVkOiBcIiArIHByb2pOYW1lICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJ0YXNrTmFtZTogXCIgKyB0YXNrTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJ0YXNrRGVzY3JpcHRpb246IFwiICsgdGFza0Rlc2NyaXB0aW9uKTtcblxuICAgICAgICAvL2Vsc2UgaWYgZGl2IGhhcyBjbGFzcyBvZiBwcm9qZWN0XG4gICAgICAgIH0gZWxzZSBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcInNob3dQcm9qTW9kdWxlXCIpKXtcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2pOYW1lSW5wdXQudmFsdWU6IFwiICsgcHJvak5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qTmFtZUlucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2plY3ROYW1lOiBcIisgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSk7IC8vaW4gY29udHJvbGxlclxuICAgICAgICAgXG5cbiAgICAgICAgICAgIHZpZXdBbGxQcm9qZWN0cygpO1xuXG4gICAgICAgIH1cbiAgICAgIFxuICAgfSk7XG5cblxuICAgIGZ1bmN0aW9uIGNsZWFySW5wdXRWYWx1ZXMoKXtcbiAgICAgICAgLy9nZXQgbGF0ZXN0IHZhbHVlc1xuICAgICAgICB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZVwiKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2MnKTtcbiAgICAgICAgcHJvak5hbWVJbnB1dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOYW1lXCIpO1xuXG4gICAgICAgIGlmICh0YXNrTmFtZUlucHV0ICE9PSBudWxsICYmIHRhc2tEZXNjcmlwdGlvbklucHV0ICE9PW51bGwpe1xuICAgICAgICAgICAgdGFza05hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvak5hbWVJbnB1dC52YWx1ZSAhPT0gbnVsbCl7XG4gICAgICAgICAgICBwcm9qTmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2NsZWFyIGlucHV0IG9uIGNsaWNrIG9mIENsZWFyIEJ1dHRvblxuICAgICAgICBtb2RhbEVsZW1lbnRzLmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJJbnB1dFZhbHVlcyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbnRyb2xsZXIuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=