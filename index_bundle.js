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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cursor16.png */ "./src/images/cursor16.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/images/low-poly-grid-haikei.png */ "./src/images/low-poly-grid-haikei.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/images/crystals.png */ "./src/images/crystals.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* CSS for ToDo List */
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  box-sizing: border-box;
  font-family: 'Nunito';
}

:root {
  --gradient_bg_color: #ede5fd;
  --gradient_spot1_color: #e1cbfb;
  --gradient_spot1_w: 75%;
  --gradient_spot1_h: 75%;
  --gradient_spot1_x: 0%;
  --gradient_spot1_y: 0%;
  --gradient_spot2_color: #ffe0d6;
  --gradient_spot2_w: 75%;
  --gradient_spot2_h: 75%;
  --gradient_spot2_x: 100%;
  --gradient_spot2_y: 0%;
  --gradient_spot3_color: #ebe0ff;
  --gradient_spot3_w: 75%;
  --gradient_spot3_h: 75%;
  --gradient_spot3_x: 100%;
  --gradient_spot3_y: 100%;

  --gradient_spot4_color: #ffdbf3;
  --gradient_spot4_w: 75%;
  --gradient_spot4_h: 75%;
  --gradient_spot4_x: 0%;
  --gradient_spot4_y: 100%;

  --gradient_spot2_w: 100%;
  --gradient_spot2_x: 94%;
  --gradient_spot2_h: 44%;
  --gradient_spot1_w: 51%;
  --gradient_spot1_h: 64%;
  --gradient_spot1_x: 7%;
  --gradient_spot3_w: 100%;
  --gradient_spot3_h: 82%;
  --gradient_spot3_x: 90%;
  --gradient_spot4_w: 64%;
  --gradient_spot4_x: 0%;
  --gradient_spot4_y: 45%;

  /* Project Colours */
  --project_color1: #ffedd6;
  --project_color2: #ffcb9a;
  --project_color3: #f8aef9;
  --project_color4: #b8dbfd;
  --project_color5: #c8bafa;
  --project_color6: #8fe4e9;

  --darkGrey: #252b3d;
  --medGrey: #94969b;
  --lightGrey: #eee;
}

.welcome-text {
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
  src:
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('opentype'),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('opentype');
  font-style: normal;
}

.fancy-gradient {
  background-color: var(--gradient_bg_color);
  background-image: radial-gradient(
      var(--gradient_spot1_w) var(--gradient_spot1_h) at left
        var(--gradient_spot1_x) top var(--gradient_spot1_y),
      var(--gradient_spot1_color),
      transparent
    ),
    radial-gradient(
      var(--gradient_spot2_w) var(--gradient_spot2_h) at left
        var(--gradient_spot2_x) top var(--gradient_spot2_y),
      var(--gradient_spot2_color),
      transparent
    ),
    radial-gradient(
      var(--gradient_spot3_w) var(--gradient_spot3_h) at left
        var(--gradient_spot3_x) top var(--gradient_spot3_y),
      var(--gradient_spot3_color),
      transparent
    ),
    radial-gradient(
      var(--gradient_spot4_w) var(--gradient_spot4_h) at left
        var(--gradient_spot4_x) top var(--gradient_spot4_y),
      var(--gradient_spot4_color),
      transparent
    );
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

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  cursor: url(${___CSS_LOADER_URL_REPLACEMENT_2___}), auto;
}

.container {
  padding: 20px;
  border-radius: 20px;
  margin: auto;
  height: 85vh;
  width: 85vw;
  background-color: rgba(246, 243, 248, 0.622);
  background-color: rgb(246 243 248 / 56%); /* gradient blend into bg  */
  box-shadow: 0px 0px 0px 1px floralwhite;
  display: grid;
  overflow: auto;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: 0.5fr 1.5fr 0.5fr 3fr;
  grid-template-areas:
    'nav hello projheading'
    'nav info project'
    'nav heading project'
    'nav taskbox project';
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086);
}

.nav {
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

.nav .logo {
  align-self: center;
  margin: 5px auto;
}

/* stying of buttons on dash */
.btn {
  display: inline-block;
  display: flex;
  gap: 10px;
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

.btn-github a {
  color: #94969b;
}

.btn:hover,
.btn-github:hover {
  background-color: #464b5b;
  color: #fff;
  border-left: solid 5px #ff94ea;
}

.btn img {
  margin-right: 5px;
}

.hello {
  grid-area: hello;
  /* background-color: #e1cbfb; */
  color: #302b2b;
  color: var(--darkGrey);
  font-size: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.img-hand {
  /* width: 17%; */
  width: 75px;
  padding: 0px 10px;
  margin-bottom: 5px;
}

.info {
  grid-area: info;

  /* background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(238,238,238,1) 99%);  */
  background: linear-gradient(
    0deg,
    rgba(236, 224, 253, 1) 51%,
    rgba(246, 237, 243, 1) 99%
  );
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

.info::before {
  content: '';
  background-image: linear-gradient(
      0deg,
      rgba(236, 224, 253, 0.1) 11%,
      rgba(246, 237, 243, 1) 99%
    ),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___});

  background-size: contain;
  background-position: 100px 0px;
  border-radius: 10px;
  /* border: solid 1px #c6adf2; */
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.5;
}

.info-item {
  padding: 10px;
  margin: 20px 10px;
  width: 100px;
  background-color: #c8aef8; /* best colour on macmini  */
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
  box-shadow:
    0 2px 4px #3a474e26,
    0 1px 2px #3a474e26;
  font-size: 30px;
}
.info span {
  font-size: 19px;
}

.info-item:hover {
  transform: translateY(-5px);
  background-color: #c6adf2;
  /* background-color: #b491f1; */
  box-shadow: 0px 0px 8px 5px whitesmoke;
  border-left: solid 2px #d1bcf8;
  border-bottom: solid 2px #d1bcf8;
}

.heading {
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
.taskbox {
  grid-area: taskbox;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  perspective: 60rem;
}

.project-item {
  border-radius: 10px;
  height: 140px;
  cursor: pointer;
  margin: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  /* box-shadow:
    0 2px 4px #3a474e26,
    0 1px 2px #3a474e26; */

    align-items: center;
  background: linear-gradient(143deg, rgba(204,169,226,1) 0%, rgba(227,159,209,0.7637648809523809) 46%, rgba(253,147,190,1) 100%);

  background: linear-gradient(143deg, rgba(204,169,226,1) 0%, rgba(227,159,209,0.7637648809523809) 46%, #fee0d7 100%);
  /* #ffd3c6 */

  /* border-left: solid 2px #fbded7;
  border-bottom: solid 2px #fbded7; */

  box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;
  transition: 0.4s ease;

  transition:
    rotate 400ms,
    scale 200ms;
}

.project-item:hover  {
  rotate: y 20deg;
  scale: 1.05;
    }

.project-item h5 {
  font-size: 20px;
  color: #4f346b;
  padding-left: 5px;
  align-self: flex-start;
  z-index: 5;
  margin-bottom: 5px;
}

p.project-item-taskno {
  color: #fff;
  font-weight: 200;
  font-size: 14px;
  letter-spacing: 0.1px;
  align-self: flex-start;
  line-height: 1.4;
}
p.project-item-taskno:nth-child(2) {
  /* border-bottom: 2px solid; */
  font-size: 18px;
  align-self: center;
  font-style: italic;
  margin-top: -10px;
  margin-bottom: 10px;
}




div.project-item-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: end;
 
}
button.project-item-delbtn {
  border: solid 1px transparent;
  transition: 0.3s;
  background-color: transparent;
  cursor: pointer;
}



/* PROJECT SECTION ------------------------------------- */
.projheading {
  grid-area: projheading;
  background-color: white;
  color: var(--darkGrey);
  display: flex;

  align-items: center;
  gap: 5px;
  margin-top: -20px;
  margin-right: -20px;
  margin-left: 40px;

  border-top-right-radius: 20px;
  border-top-left-radius: 15px;
  padding-left: 20px;
  z-index: 1;
}

.project {
  grid-area: project;
  background-color: #fff;
  margin-right: -20px;
  margin-left: 40px;
  margin-bottom: -20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 15px;
  box-shadow: -5px -46px 58px -20px lightgrey;
  padding: 10px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-repeat: no-repeat;
  background-position: 95% 95%;
  overflow-y: scroll;
}

h2.project-heading {
  text-align: center;
}

.project h3,
.gradient-h3 {
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
.project-task-item {
  background: #eeeeee;
  /* background: rgb(250, 248, 208);  postit colour */
  border-radius: 10px;
  margin: 10px 10px;
  padding: 10px 5px 10px 15px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  position: relative;
  box-shadow:
    0 2px 4px #3a474e26,
    0 1px 2px #3a474e26;
}

.project-task-item label,
.project-task-item p,
.project-task-item p span {
  outline: none;
  border-bottom: solid 2px transparent;
}
.project-task-item label:focus-visible,
.project-task-item p:focus-visible,
.project-task-item span:focus-visible {
  outline: none;
  border-bottom: solid 2px #fa83fc;
}

*[contenteditable='true'] {
  background-color: #fbfbfb;
  border-radius: 3px;
  box-shadow: 3px 3px 2px -4px;
  caret-color: #af76f3;
  transition: 0.3s;
}

summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  gap: 5px;
}
.taskcheckbox {
  pointer-events: auto;
}
.project-task-priority {
  background-color: var(--project_color6);
  color: #008b92;
  font-size: 12px;
  border-radius: 20px;
  padding: 1px 15px;

  color: #fff;
  box-shadow: 0 1px 1px #0000002e;
  text-shadow: 0 1px 0px #79485f7a;
  border-radius: 50px;
  border: transparent;
}

details.edit-mode .project-task-priority {
  /* transform: rotate(45deg); */
  pointer-events: none;
}

.edit-mode {
  cursor: text;
}
label {
  font-size: 13px;
  display: flex;
}
.lowPriority {
  background-color: var(--project_color4);
  background-image: linear-gradient(180deg, #95d891, #74bbad);
}

.highPriority {
  background-color: var(--project_color3);
  background-image: linear-gradient(180deg, #f8aef9, #cabcfb);
}

.medPriority {
  background-color: var(--project_color6);
  background-image: linear-gradient(180deg, #43a3e8, #0edbdd);
}

.project-task-description {
  font-size: 13px;
  margin: 10px 10px 10px 0px;
  font-style: italic;
  padding: 10px;
}

.project-task-duedate {
  font-size: 13px;
  line-height: 1;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  color: #cd8cfe;
  color: #9d4ed8;
}
.project-task-duedate span {
  padding: 5px 0px;
}

.date-padding {
  padding: 5px 5px !important;
}

.project-task-img {
  vertical-align: top;
  padding-right: 5px;
  pointer-events: auto;
  cursor: pointer;
}

.project-task-footer {
  display: flex;
  align-items: self-end;
  justify-content: flex-end;
  margin-bottom: -5px;
}

.project-task-footer img {
  padding: 8px;
  transition: 0.2s ease;
}

.project-task-footer img:hover {
  border-radius: 11px;
  background: whitesmoke;
  cursor: pointer;
}

input[type='checkbox'] {
  margin-right: 11px;
  accent-color: var(--darkGrey);
}

input[type='checkbox']:checked + label,
input[type='checkbox']:checked {
  color: var(--medGrey);
  text-decoration: line-through !important;
}

/* POP UPS/ MODALS  */

/* Create/ Add New...  */
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 350px;
  /* padding: 1.3rem; */
  min-height: 250px;
  position: absolute;
  /* top: 20%; */
  background-color: white;

  border: 3px solid #fbd4fc;
  border-radius: 15px;
  z-index: 2;

  box-shadow:
    0px 43px 79px -20px #af86c0,
    34px -12px 80px -20px #fcd7e4d4;

  box-shadow:
    -31px 20px 63px -20px #af86c0,
    13px -35px 63px -2px #fcd7e4fa;
}

.create-modal-icon {
  position: absolute;
  top: -52px;
  left: 44%;
  background: white;
  border: solid 4px #fbd4fc;
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
  margin-left: 22%;
  margin-bottom: 20px;
}

.modal input,
select#projDropdown {
  padding: 0.7rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9em;
  width: 200px;
  height: 35px;
}

.modal p {
  font-size: 0.9rem;
  color: #777;
  margin: 0.4rem 0 0.2rem;
}

.create-modal-buttons {
  display: flex;
}

select#projDropdown {
  /* width: 200px; */
  height: 35px;
  padding: 5px;
}

.create-modal-buttons button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0.8rem;
  background-color: white;
  color: #fbd4fc;
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
  background: -webkit-linear-gradient(#43a3e8, #0edbdd);
  transition: 0.3s;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.create-modal-buttons button img {
  width: 25px;
}

button[type='submit'] {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 20px;
  border-left: solid 3px #fbd4fc;
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
  box-shadow:
    inset 0 0 0 3px rgba(35, 33, 45, 0.3),
    0 0 0 3px rgba(185, 185, 185, 0.3);
  position: relative;
  width: 200px;
  margin: 20px 0px -10px;
  display: flex;
  justify-content: center;
}

.taskEditPriority {
  margin: 10px 0px;
  width: auto;
  background: transparent;
  box-shadow: unset;
  gap: 5px;
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
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
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
  background-image: linear-gradient(180deg, #43a3e8, #0edbdd);
}

.taskPriority_radio input#taskPriority_high:checked {
  background-image: linear-gradient(180deg, #f8aef9, #cabcfb);
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

button.gradient-h3 {
  margin-top: 0px;
}

/* Task/Project Switcher inside Modal */
div.create-modal-select-type {
  border-radius: 50px;
  box-shadow:
    inset 0 0 0 3px rgb(35 33 45 / 0%),
    0 0 0 3px rgb(185 185 185 / 16%);
}

/*selected side*/
label {
  font-size: 13px;
  color: #424242;
  font-weight: 500;
}

/*  bg of Task when not selected*/
label.toggleInput-switch-inner {
  margin: 0px;
  width: 140px;
  height: 30px;
  background: #e0e0e0;
  background: linear-gradient(90deg, pink, lavender);
  border-radius: 26px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  display: block;
  cursor: pointer;
}
/* text of Task when not selected  */
label.toggleInput-switch-inner::before {
  content: attr(data-on); /* Task */
  position: absolute;
  font-size: 13px;
  font-weight: 500;
  top: 7px;
  right: 20px;
  color: grey;
}

/*  project selected */
label.toggleInput-switch-inner::after {
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

input#toggleInput[type='checkbox'] {
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
input#toggleInput[type='checkbox']:checked + label.toggleInput-switch-inner {
  background: linear-gradient(90deg, pink, lavender);
  color: grey;
}

/*  Sets bg of Task when selected*/
input#toggleInput[type='checkbox']:checked
  + label.toggleInput-switch-inner:after {
  content: attr(data-on); /*Tasks*/
  left: 68px;
  background: white;
  color: black;
}

input#toggleInput[type='checkbox']:checked
  + label.toggleInput-switch-inner:before {
  content: attr(data-off); /*Project */
  right: auto;
  left: 20px;
}

.create-modal-input-area input[type='text']:focus-visible {
  outline: solid 3px #af76f333;
  border: solid 1.5px rgba(234, 100, 217, 0.4);
  /* border-radius: 12px; */
}

/* Task Checked Off Toggle */
.task-checkbox {
  --text: #414856;
  --check: #af76f3;
  --disabled: #c3c8de;
  --border-radius: 10px;
  border-radius: var(--border-radius);
  position: relative;
  padding: 0px 5px;
  align-items: center;
  display: flex;
}
.task-checkbox label {
  color: var(--text);
  position: relative;
  cursor: pointer;
  padding: 5px;
  align-items: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  transition: color 0.3s ease;
  font-weight: 900;
  font-size: 15px;
}
.task-checkbox label::before, /* dash */
.task-checkbox label::after {
  /* tick */
  content: '';
  position: absolute;
}
.task-checkbox label::before {
  /* dash */
  height: 2px;
  width: 13px;
  left: -27px;
  background: var(--check);
  border-radius: 2px;
  transition: background 0.3s ease;
}
.task-checkbox label:after {
  /* tick */
  height: 4px;
  width: 4px;
  top: 8px;
  left: -25px;
  border-radius: 50%;
}
.task-checkbox input[type='checkbox'] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  height: 15px;
  width: 15px;
  outline: none;
  border: 0;
  margin: 0 15px 0 0;
  cursor: pointer;
  background: var(--background);
  align-items: center;
}
.task-checkbox input[type='checkbox']::before,
.task-checkbox input[type='checkbox']::after {
  content: '';
  position: absolute;
  height: 2px;
  top: auto;
  background: var(--check);
  border-radius: 2px;
}
.task-checkbox input[type='checkbox']::before {
  width: 0px;
  right: 60%;
  transform-origin: right bottom;
}
.task-checkbox input[type='checkbox']::after {
  width: 0px;
  left: 40%;
  transform-origin: left bottom;
}
.task-checkbox input[type='checkbox']:checked::before {
  -webkit-animation: check-01-11 0.4s ease forwards;
  animation: check-01-11 0.4s ease forwards;
}
.task-checkbox input[type='checkbox']:checked::after {
  -webkit-animation: check-02-11 0.4s ease forwards;
  animation: check-02-11 0.4s ease forwards;
}
.task-checkbox input[type='checkbox']:checked + label {
  color: var(--disabled);
  -webkit-animation: move-11 0.3s ease 0.1s forwards;
  animation: move-11 0.3s ease 0.1s forwards;
}
.task-checkbox input[type='checkbox']:checked + label::before {
  background: var(--disabled);
  -webkit-animation: slice-11 0.4s ease forwards;
  animation: slice-11 0.4s ease forwards;
}
.task-checkbox input[type='checkbox']:checked + label::after {
  -webkit-animation: firework-11 0.5s ease forwards 0.1s;
  animation: firework-11 0.5s ease forwards 0.1s;
}

@-webkit-keyframes move-11 {
  50% {
    padding-left: 8px;
    padding-right: 0px;
  }
  100% {
    padding-right: 4px;
  }
}

@keyframes move-11 {
  50% {
    padding-left: 8px;
    padding-right: 0px;
  }
  100% {
    padding-right: 4px;
  }
}
@-webkit-keyframes slice-11 {
  60% {
    width: 100%;
    left: 4px;
  }
  100% {
    width: 100%;
    left: -2px;
    padding-left: 0;
  }
}
@keyframes slice-11 {
  60% {
    width: 100%;
    left: 4px;
  }
  100% {
    width: 100%;
    left: -2px;
    padding-left: 0;
  }
}
@-webkit-keyframes check-01-11 {
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }
  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }
  51% {
    width: 0px;
    top: 8px;
    transform: rotate(45deg);
  }
  100% {
    width: 5px;
    top: 8px;
    transform: rotate(45deg);
  }
}
@keyframes check-01-11 {
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }
  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }
  51% {
    width: 0px;
    top: 8px;
    transform: rotate(45deg);
  }
  100% {
    width: 5px;
    top: 8px;
    transform: rotate(45deg);
  }
}
@-webkit-keyframes check-02-11 {
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }
  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }
  51% {
    width: 0px;
    top: 8px;
    transform: rotate(-45deg);
  }
  100% {
    width: 10px;
    top: 8px;
    transform: rotate(-45deg);
  }
}
@keyframes check-02-11 {
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }
  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }
  51% {
    width: 0px;
    top: 8px;
    transform: rotate(-45deg);
  }
  100% {
    width: 10px;
    top: 8px;
    transform: rotate(-45deg);
  }
}
@-webkit-keyframes firework-11 {
  0% {
    opacity: 1;
    box-shadow:
      0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    box-shadow:
      0 -15px 0 0px #4f29f0,
      14px -8px 0 0px #4f29f0,
      14px 8px 0 0px #4f29f0,
      0 15px 0 0px #4f29f0,
      -14px 8px 0 0px #4f29f0,
      -14px -8px 0 0px #4f29f0;
  }
}
@keyframes firework-11 {
  0% {
    opacity: 1;
    box-shadow:
      0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    box-shadow:
      0 -15px 0 0px #4f29f0,
      14px -8px 0 0px #4f29f0,
      14px 8px 0 0px #4f29f0,
      0 15px 0 0px #4f29f0,
      -14px 8px 0 0px #4f29f0,
      -14px -8px 0 0px #4f29f0;
  }
}

/* WOBBLE EFFECT ON BIN */
@-webkit-keyframes hvr-wobble-top {
  16.65% {
    -webkit-transform: skew(-12deg);
    transform: skew(-12deg);
  }
  33.3% {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }
  49.95% {
    -webkit-transform: skew(-6deg);
    transform: skew(-6deg);
  }
  66.6% {
    -webkit-transform: skew(4deg);
    transform: skew(4deg);
  }
  83.25% {
    -webkit-transform: skew(-2deg);
    transform: skew(-2deg);
  }
  100% {
    -webkit-transform: skew(0);
    transform: skew(0);
  }
}
@keyframes hvr-wobble-top {
  16.65% {
    -webkit-transform: skew(-12deg);
    transform: skew(-12deg);
  }
  33.3% {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }
  49.95% {
    -webkit-transform: skew(-6deg);
    transform: skew(-6deg);
  }
  66.6% {
    -webkit-transform: skew(4deg);
    transform: skew(4deg);
  }
  83.25% {
    -webkit-transform: skew(-2deg);
    transform: skew(-2deg);
  }
  100% {
    -webkit-transform: skew(0);
    transform: skew(0);
  }
}
.hvr-wobble-top {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.hvr-wobble-top:hover,
.hvr-wobble-top:focus,
.hvr-wobble-top:active {
  -webkit-animation-name: hvr-wobble-top;
  animation-name: hvr-wobble-top;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* Waving Hand Hover */
.wave:hover {
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}

/* Grow Shadow */
.hvr-grow-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.hvr-grow-shadow:hover,
.hvr-grow-shadow:focus,
.hvr-grow-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

header.hello {
  font-size: 30px;
}
@media screen and (max-width: 1065px) {
  div.container {
    width: 98vw;
    height: 98vh;
  }
}

/* @media screen and (max-width: 1200px) {
  header.hello {
    font-size: 30px;
  }
} */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,4BAA4B;EAC5B,+BAA+B;EAC/B,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;EACtB,+BAA+B;EAC/B,uBAAuB;EACvB,uBAAuB;EACvB,wBAAwB;EACxB,sBAAsB;EACtB,+BAA+B;EAC/B,uBAAuB;EACvB,uBAAuB;EACvB,wBAAwB;EACxB,wBAAwB;;EAExB,+BAA+B;EAC/B,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;EACtB,wBAAwB;;EAExB,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;EACtB,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;EACtB,uBAAuB;;EAEvB,oBAAoB;EACpB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;;EAEzB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,+FAA+F;EAC/F,kBAAkB;EAClB,aAAa;;EAEb,2DAA2D;EAC3D;;2CAEyC;EACzC,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB;;8DAEuE;EACvE,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C;;;;;;;;;;;;;;;;;;;;;;;KAuBG;AACL;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmCM;AACN,kDAAkD;;AAElD;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,qDAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,4CAA4C;EAC5C,wCAAwC,EAAE,4BAA4B;EACtE,uCAAuC;EACvC,aAAa;EACb,cAAc;EACd,kCAAkC;EAClC,yCAAyC;EACzC;;;;yBAIuB;EACvB;;;;;wCAKsC;AACxC;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,yBAAyB;EACzB,iCAAiC;EACjC,sCAAsC;EACtC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,8BAA8B;AAC9B;EACE,qBAAqB;EACrB,aAAa;EACb,SAAS;EACT,eAAe;EACf,uBAAuB;EACvB,6BAA6B;EAC7B,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,yBAAyB;EACzB,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;;EAEf,0FAA0F;EAC1F;;;;GAIC;EACD,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;EAClB;;;;4CAI0C;AAC5C;;AAEA;EACE,WAAW;EACX;;;;;2CAK6C;;EAE7C,wBAAwB;EACxB,8BAA8B;EAC9B,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,WAAW;EACX,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,yBAAyB,EAAE,4BAA4B;EACvD,yBAAyB,EAAE,0BAA0B;EACrD,8BAA8B;EAC9B,gCAAgC;EAChC,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB;;uBAEqB;EACrB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,yBAAyB;EACzB,+BAA+B;EAC/B,sCAAsC;EACtC,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;AACV;;AAEA,yBAAyB;AACzB;EACE,kBAAkB;EAClB,aAAa;EACb,kCAAkC;;EAElC,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,uDAAuD;EACvD;;0BAEwB;;IAEtB,mBAAmB;EACrB,+HAA+H;;EAE/H,mHAAmH;EACnH,YAAY;;EAEZ;qCACmC;;EAEnC,oDAAoD;EACpD,qBAAqB;;EAErB;;eAEa;AACf;;AAEA;EACE,eAAe;EACf,WAAW;IACT;;AAEJ;EACE,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,sBAAsB;EACtB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,qBAAqB;EACrB,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,8BAA8B;EAC9B,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;;;;AAKA;EACE,aAAa;EACb,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;;AAEjB;AACA;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,6BAA6B;EAC7B,eAAe;AACjB;;;;AAIA,0DAA0D;AAC1D;EACE,sBAAsB;EACtB,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;;EAEb,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;;EAEjB,6BAA6B;EAC7B,4BAA4B;EAC5B,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,gCAAgC;EAChC,+BAA+B;EAC/B,2CAA2C;EAC3C,aAAa;EACb,yDAAiD;EACjD,4BAA4B;EAC5B,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,0BAA0B;EAC1B,gBAAgB;EAChB,kCAAkC;EAClC,gBAAgB;EAChB;8CAC4C;;EAE5C,qDAAqD;EACrD,qBAAqB;EACrB,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA,YAAY;AACZ;EACE,mBAAmB;EACnB,mDAAmD;EACnD,mBAAmB;EACnB,iBAAiB;EACjB,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB;;uBAEqB;AACvB;;AAEA;;;EAGE,aAAa;EACb,oCAAoC;AACtC;AACA;;;EAGE,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,4BAA4B;EAC5B,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,QAAQ;AACV;AACA;EACE,oBAAoB;AACtB;AACA;EACE,uCAAuC;EACvC,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,iBAAiB;;EAEjB,WAAW;EACX,+BAA+B;EAC/B,gCAAgC;EAChC,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;AACA;EACE,eAAe;EACf,aAAa;AACf;AACA;EACE,uCAAuC;EACvC,2DAA2D;AAC7D;;AAEA;EACE,uCAAuC;EACvC,2DAA2D;AAC7D;;AAEA;EACE,uCAAuC;EACvC,2DAA2D;AAC7D;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;EACd,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;;EAEE,qBAAqB;EACrB,wCAAwC;AAC1C;;AAEA,qBAAqB;;AAErB,wBAAwB;AACxB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,uBAAuB;;EAEvB,yBAAyB;EACzB,mBAAmB;EACnB,UAAU;;EAEV;;mCAEiC;;EAEjC;;kCAEgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;;EAEE,oBAAoB;EACpB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,uBAAuB;EACvB,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,qBAAqB;EACrB,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,qDAAqD;EACrD,gBAAgB;EAChB,qBAAqB;EACrB,6BAA6B;EAC7B,oCAAoC;AACtC;AACA;EACE,WAAW;AACb;;AAEA;EACE,4BAA4B;EAC5B,gCAAgC;EAChC,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,kCAAkC;EAClC,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA,mCAAmC;AACnC;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB;;sCAEoC;EACpC,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,iBAAiB;;EAEjB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB;;;;;;;;;;;;;sBAaoB;EACpB,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,2DAA2D;EAC3D,WAAW;EACX,+BAA+B;EAC/B,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,2DAA2D;AAC7D;;AAEA;EACE,2DAA2D;AAC7D;;AAEA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA,uCAAuC;AACvC;EACE,mBAAmB;EACnB;;oCAEkC;AACpC;;AAEA,gBAAgB;AAChB;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;;AAEA,iCAAiC;AACjC;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,kDAAkD;EAClD,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;AACA,oCAAoC;AACpC;EACE,sBAAsB,EAAE,SAAS;EACjC,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,QAAQ;EACR,WAAW;EACX,WAAW;AACb;;AAEA,sBAAsB;AACtB;EACE,uBAAuB,EAAE,YAAY;EACrC,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,kBAAkB;EAClB,yBAAyB;EACzB,uCAAuC;EACvC,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,UAAU;EACV,WAAW;AACb;;AAEA,8CAA8C;AAC9C;EACE,kDAAkD;EAClD,WAAW;AACb;;AAEA,kCAAkC;AAClC;;EAEE,sBAAsB,EAAE,QAAQ;EAChC,UAAU;EACV,iBAAiB;EACjB,YAAY;AACd;;AAEA;;EAEE,uBAAuB,EAAE,WAAW;EACpC,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,4BAA4B;EAC5B,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA,4BAA4B;AAC5B;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;EACrB,mCAAmC;EACnC,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,uBAAuB;EACvB,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;AACjB;AACA;;EAEE,SAAS;EACT,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,WAAW;EACX,WAAW;EACX,WAAW;EACX,wBAAwB;EACxB,kBAAkB;EAClB,gCAAgC;AAClC;AACA;EACE,SAAS;EACT,WAAW;EACX,UAAU;EACV,QAAQ;EACR,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,SAAS;EACT,6BAA6B;AAC/B;AACA;EACE,iDAAiD;EACjD,yCAAyC;AAC3C;AACA;EACE,iDAAiD;EACjD,yCAAyC;AAC3C;AACA;EACE,sBAAsB;EACtB,kDAAkD;EAClD,0CAA0C;AAC5C;AACA;EACE,2BAA2B;EAC3B,8CAA8C;EAC9C,sCAAsC;AACxC;AACA;EACE,sDAAsD;EACtD,8CAA8C;AAChD;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF;AACA;EACE;IACE,WAAW;IACX,SAAS;EACX;EACA;IACE,WAAW;IACX,UAAU;IACV,eAAe;EACjB;AACF;AACA;EACE;IACE,WAAW;IACX,SAAS;EACX;EACA;IACE,WAAW;IACX,UAAU;IACV,eAAe;EACjB;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,QAAQ;IACR,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,QAAQ;IACR,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,UAAU;IACV;;;;;;wBAMoB;EACtB;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV;;;;;;8BAM0B;EAC5B;AACF;AACA;EACE;IACE,UAAU;IACV;;;;;;wBAMoB;EACtB;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV;;;;;;8BAM0B;EAC5B;AACF;;AAEA,yBAAyB;AACzB;EACE;IACE,+BAA+B;IAC/B,uBAAuB;EACzB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,0BAA0B;IAC1B,kBAAkB;EACpB;AACF;AACA;EACE;IACE,+BAA+B;IAC/B,uBAAuB;EACzB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,0BAA0B;IAC1B,kBAAkB;EACpB;AACF;AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,iDAAiD;EACjD,yCAAyC;EACzC,oCAAoC;EACpC,gCAAgC;EAChC,wBAAwB;AAC1B;AACA;;;EAGE,sCAAsC;EACtC,8BAA8B;EAC9B,8BAA8B;EAC9B,sBAAsB;EACtB,8CAA8C;EAC9C,sCAAsC;EACtC,oCAAoC;EACpC,4BAA4B;AAC9B;;AAEA,sBAAsB;AACtB;EACE,8BAA8B,EAAE,wDAAwD;EACxF,wBAAwB,EAAE,oCAAoC;EAC9D,mCAAmC,EAAE,yBAAyB;EAC9D,yBAAyB,EAAE,sCAAsC;EACjE,qBAAqB;AACvB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,wBAAwB;EAC1B,EAAE,yFAAyF;EAC3F;IACE,wBAAwB;EAC1B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,uBAAuB;EACzB,EAAE,qCAAqC;EACvC;IACE,uBAAuB;EACzB;AACF;;AAEA,gBAAgB;AAChB;EACE,qBAAqB;EACrB,sBAAsB;EACtB,iDAAiD;EACjD,yCAAyC;EACzC,oCAAoC;EACpC,iCAAiC;EACjC,yBAAyB;EACzB,kDAAkD;EAClD,0CAA0C;AAC5C;AACA;;;EAGE,gDAAgD;EAChD,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;AACA;EACE;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;;;;GAIG","sourcesContent":["/* CSS for ToDo List */\n* {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  list-style-type: none;\n  box-sizing: border-box;\n  font-family: 'Nunito';\n}\n\n:root {\n  --gradient_bg_color: #ede5fd;\n  --gradient_spot1_color: #e1cbfb;\n  --gradient_spot1_w: 75%;\n  --gradient_spot1_h: 75%;\n  --gradient_spot1_x: 0%;\n  --gradient_spot1_y: 0%;\n  --gradient_spot2_color: #ffe0d6;\n  --gradient_spot2_w: 75%;\n  --gradient_spot2_h: 75%;\n  --gradient_spot2_x: 100%;\n  --gradient_spot2_y: 0%;\n  --gradient_spot3_color: #ebe0ff;\n  --gradient_spot3_w: 75%;\n  --gradient_spot3_h: 75%;\n  --gradient_spot3_x: 100%;\n  --gradient_spot3_y: 100%;\n\n  --gradient_spot4_color: #ffdbf3;\n  --gradient_spot4_w: 75%;\n  --gradient_spot4_h: 75%;\n  --gradient_spot4_x: 0%;\n  --gradient_spot4_y: 100%;\n\n  --gradient_spot2_w: 100%;\n  --gradient_spot2_x: 94%;\n  --gradient_spot2_h: 44%;\n  --gradient_spot1_w: 51%;\n  --gradient_spot1_h: 64%;\n  --gradient_spot1_x: 7%;\n  --gradient_spot3_w: 100%;\n  --gradient_spot3_h: 82%;\n  --gradient_spot3_x: 90%;\n  --gradient_spot4_w: 64%;\n  --gradient_spot4_x: 0%;\n  --gradient_spot4_y: 45%;\n\n  /* Project Colours */\n  --project_color1: #ffedd6;\n  --project_color2: #ffcb9a;\n  --project_color3: #f8aef9;\n  --project_color4: #b8dbfd;\n  --project_color5: #c8bafa;\n  --project_color6: #8fe4e9;\n\n  --darkGrey: #252b3d;\n  --medGrey: #94969b;\n  --lightGrey: #eee;\n}\n\n.welcome-text {\n  color: var(--lightGrey);\n  /* background: linear-gradient(45deg, var(--project_color4) 30%, var(--project_color6) 100%); */\n  text-align: center;\n  padding: 10px;\n\n  /* background: -webkit-linear-gradient(#fa83fc, #cabcfb); */\n  /* background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; */\n  color: var(--lightGrey);\n}\n\n@font-face {\n  font-family: 'Nunito';\n  src:\n    url('./fonts/Nunito-VariableFont_wght.ttf') format('opentype'),\n    url('./fonts/Nunito-Italic-VariableFont_wght.ttf') format('opentype');\n  font-style: normal;\n}\n\n.fancy-gradient {\n  background-color: var(--gradient_bg_color);\n  background-image: radial-gradient(\n      var(--gradient_spot1_w) var(--gradient_spot1_h) at left\n        var(--gradient_spot1_x) top var(--gradient_spot1_y),\n      var(--gradient_spot1_color),\n      transparent\n    ),\n    radial-gradient(\n      var(--gradient_spot2_w) var(--gradient_spot2_h) at left\n        var(--gradient_spot2_x) top var(--gradient_spot2_y),\n      var(--gradient_spot2_color),\n      transparent\n    ),\n    radial-gradient(\n      var(--gradient_spot3_w) var(--gradient_spot3_h) at left\n        var(--gradient_spot3_x) top var(--gradient_spot3_y),\n      var(--gradient_spot3_color),\n      transparent\n    ),\n    radial-gradient(\n      var(--gradient_spot4_w) var(--gradient_spot4_h) at left\n        var(--gradient_spot4_x) top var(--gradient_spot4_y),\n      var(--gradient_spot4_color),\n      transparent\n    );\n}\n\n/* \n  .animated {\n    animation-fill-mode: both;\n  }\n@keyframes chameleon {\n\n    0% {\n      color: var(--project_color1);\n    }\n    14.2999% {\n      color: var(--project_color2);\n    }\n    28.5999% {\n      color: var(--project_color3);\n    }\n    42.8998% {\n      color: var(--project_color4);\n    }\n    57.1996% {\n      color: var(--project_color5);\n    }\n    71.4995% {\n      color: var(--project_color6);\n    }\n    85.7994% {\n      color: violet;\n    }\n    100% {\n      color: red;\n    }\n  }\n  .chameleon {\n    animation-name: chameleon;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n  }  */\n/* TO USE, ADD CLASS ANIMATE AND CLASS CHAMELEON */\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #222;\n  position: relative;\n  min-height: 100vh;\n  overflow: hidden;\n  cursor: url('./images/cursor16.png'), auto;\n}\n\n.container {\n  padding: 20px;\n  border-radius: 20px;\n  margin: auto;\n  height: 85vh;\n  width: 85vw;\n  background-color: rgba(246, 243, 248, 0.622);\n  background-color: rgb(246 243 248 / 56%); /* gradient blend into bg  */\n  box-shadow: 0px 0px 0px 1px floralwhite;\n  display: grid;\n  overflow: auto;\n  grid-template-columns: 1fr 3fr 2fr;\n  grid-template-rows: 0.5fr 1.5fr 0.5fr 3fr;\n  grid-template-areas:\n    'nav hello projheading'\n    'nav info project'\n    'nav heading project'\n    'nav taskbox project';\n  box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n    0 41.8px 33.4px rgba(0, 0, 0, 0.086);\n}\n\n.nav {\n  grid-area: nav;\n  border-radius: 10px;\n  margin: 0px 30px 0px 20px;\n  background-color: var(--darkGrey);\n  box-shadow: 0px 0px 10px 3px lightgray;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.nav .logo {\n  align-self: center;\n  margin: 5px auto;\n}\n\n/* stying of buttons on dash */\n.btn {\n  display: inline-block;\n  display: flex;\n  gap: 10px;\n  padding: 0.8rem;\n  background: transparent;\n  border: solid 5px transparent;\n  color: #94969b;\n  cursor: pointer;\n  transition: 0.3s ease;\n  font-size: 0.9rem;\n  width: 100%;\n  text-align: left;\n  align-items: center;\n}\n\n.btn-github a {\n  color: #94969b;\n}\n\n.btn:hover,\n.btn-github:hover {\n  background-color: #464b5b;\n  color: #fff;\n  border-left: solid 5px #ff94ea;\n}\n\n.btn img {\n  margin-right: 5px;\n}\n\n.hello {\n  grid-area: hello;\n  /* background-color: #e1cbfb; */\n  color: #302b2b;\n  color: var(--darkGrey);\n  font-size: 40px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n}\n\n.img-hand {\n  /* width: 17%; */\n  width: 75px;\n  padding: 0px 10px;\n  margin-bottom: 5px;\n}\n\n.info {\n  grid-area: info;\n\n  /* background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(238,238,238,1) 99%);  */\n  background: linear-gradient(\n    0deg,\n    rgba(236, 224, 253, 1) 51%,\n    rgba(246, 237, 243, 1) 99%\n  );\n  display: flex;\n  border-radius: 10px;\n  /* background-color: #ebe0ff; */\n  position: relative;\n  /* box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072);  */\n}\n\n.info::before {\n  content: '';\n  background-image: linear-gradient(\n      0deg,\n      rgba(236, 224, 253, 0.1) 11%,\n      rgba(246, 237, 243, 1) 99%\n    ),\n    url('/src/images/low-poly-grid-haikei.png');\n\n  background-size: contain;\n  background-position: 100px 0px;\n  border-radius: 10px;\n  /* border: solid 1px #c6adf2; */\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.5;\n}\n\n.info-item {\n  padding: 10px;\n  margin: 20px 10px;\n  width: 100px;\n  background-color: #c8aef8; /* best colour on macmini  */\n  background-color: #af76f3; /* best color on macbook */\n  border-left: solid 2px #c6adf2;\n  border-bottom: solid 2px #c6adf2;\n  color: whitesmoke;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  transition: 0.3s ease;\n  position: relative;\n  box-shadow:\n    0 2px 4px #3a474e26,\n    0 1px 2px #3a474e26;\n  font-size: 30px;\n}\n.info span {\n  font-size: 19px;\n}\n\n.info-item:hover {\n  transform: translateY(-5px);\n  background-color: #c6adf2;\n  /* background-color: #b491f1; */\n  box-shadow: 0px 0px 8px 5px whitesmoke;\n  border-left: solid 2px #d1bcf8;\n  border-bottom: solid 2px #d1bcf8;\n}\n\n.heading {\n  grid-area: heading;\n  /* background-color:#ede5fd; */\n  margin-top: 10px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n}\n\n/* ALL PROJECTS DISPLAY */\n.taskbox {\n  grid-area: taskbox;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n\n  perspective: 60rem;\n}\n\n.project-item {\n  border-radius: 10px;\n  height: 140px;\n  cursor: pointer;\n  margin: 8px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */\n  /* box-shadow:\n    0 2px 4px #3a474e26,\n    0 1px 2px #3a474e26; */\n\n    align-items: center;\n  background: linear-gradient(143deg, rgba(204,169,226,1) 0%, rgba(227,159,209,0.7637648809523809) 46%, rgba(253,147,190,1) 100%);\n\n  background: linear-gradient(143deg, rgba(204,169,226,1) 0%, rgba(227,159,209,0.7637648809523809) 46%, #fee0d7 100%);\n  /* #ffd3c6 */\n\n  /* border-left: solid 2px #fbded7;\n  border-bottom: solid 2px #fbded7; */\n\n  box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n  transition: 0.4s ease;\n\n  transition:\n    rotate 400ms,\n    scale 200ms;\n}\n\n.project-item:hover  {\n  rotate: y 20deg;\n  scale: 1.05;\n    }\n\n.project-item h5 {\n  font-size: 20px;\n  color: #4f346b;\n  padding-left: 5px;\n  align-self: flex-start;\n  z-index: 5;\n  margin-bottom: 5px;\n}\n\np.project-item-taskno {\n  color: #fff;\n  font-weight: 200;\n  font-size: 14px;\n  letter-spacing: 0.1px;\n  align-self: flex-start;\n  line-height: 1.4;\n}\np.project-item-taskno:nth-child(2) {\n  /* border-bottom: 2px solid; */\n  font-size: 18px;\n  align-self: center;\n  font-style: italic;\n  margin-top: -10px;\n  margin-bottom: 10px;\n}\n\n\n\n\ndiv.project-item-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  align-self: end;\n \n}\nbutton.project-item-delbtn {\n  border: solid 1px transparent;\n  transition: 0.3s;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n\n\n/* PROJECT SECTION ------------------------------------- */\n.projheading {\n  grid-area: projheading;\n  background-color: white;\n  color: var(--darkGrey);\n  display: flex;\n\n  align-items: center;\n  gap: 5px;\n  margin-top: -20px;\n  margin-right: -20px;\n  margin-left: 40px;\n\n  border-top-right-radius: 20px;\n  border-top-left-radius: 15px;\n  padding-left: 20px;\n  z-index: 1;\n}\n\n.project {\n  grid-area: project;\n  background-color: #fff;\n  margin-right: -20px;\n  margin-left: 40px;\n  margin-bottom: -20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 15px;\n  box-shadow: -5px -46px 58px -20px lightgrey;\n  padding: 10px;\n  background-image: url('/src/images/crystals.png');\n  background-repeat: no-repeat;\n  background-position: 95% 95%;\n  overflow-y: scroll;\n}\n\nh2.project-heading {\n  text-align: center;\n}\n\n.project h3,\n.gradient-h3 {\n  padding: 10px 0px 0px 10px;\n  margin-top: 20px;\n  /* color: var(--project_color5); */\n  font-weight: 500;\n  /* text-decoration: underline;\n    text-decoration-color: var(--lightGrey); */\n\n  background: -webkit-linear-gradient(#fa83fc, #cabcfb);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n/* details */\n.project-task-item {\n  background: #eeeeee;\n  /* background: rgb(250, 248, 208);  postit colour */\n  border-radius: 10px;\n  margin: 10px 10px;\n  padding: 10px 5px 10px 15px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  position: relative;\n  box-shadow:\n    0 2px 4px #3a474e26,\n    0 1px 2px #3a474e26;\n}\n\n.project-task-item label,\n.project-task-item p,\n.project-task-item p span {\n  outline: none;\n  border-bottom: solid 2px transparent;\n}\n.project-task-item label:focus-visible,\n.project-task-item p:focus-visible,\n.project-task-item span:focus-visible {\n  outline: none;\n  border-bottom: solid 2px #fa83fc;\n}\n\n*[contenteditable='true'] {\n  background-color: #fbfbfb;\n  border-radius: 3px;\n  box-shadow: 3px 3px 2px -4px;\n  caret-color: #af76f3;\n  transition: 0.3s;\n}\n\nsummary {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  pointer-events: none;\n  gap: 5px;\n}\n.taskcheckbox {\n  pointer-events: auto;\n}\n.project-task-priority {\n  background-color: var(--project_color6);\n  color: #008b92;\n  font-size: 12px;\n  border-radius: 20px;\n  padding: 1px 15px;\n\n  color: #fff;\n  box-shadow: 0 1px 1px #0000002e;\n  text-shadow: 0 1px 0px #79485f7a;\n  border-radius: 50px;\n  border: transparent;\n}\n\ndetails.edit-mode .project-task-priority {\n  /* transform: rotate(45deg); */\n  pointer-events: none;\n}\n\n.edit-mode {\n  cursor: text;\n}\nlabel {\n  font-size: 13px;\n  display: flex;\n}\n.lowPriority {\n  background-color: var(--project_color4);\n  background-image: linear-gradient(180deg, #95d891, #74bbad);\n}\n\n.highPriority {\n  background-color: var(--project_color3);\n  background-image: linear-gradient(180deg, #f8aef9, #cabcfb);\n}\n\n.medPriority {\n  background-color: var(--project_color6);\n  background-image: linear-gradient(180deg, #43a3e8, #0edbdd);\n}\n\n.project-task-description {\n  font-size: 13px;\n  margin: 10px 10px 10px 0px;\n  font-style: italic;\n  padding: 10px;\n}\n\n.project-task-duedate {\n  font-size: 13px;\n  line-height: 1;\n  display: flex;\n  flex-direction: column;\n  margin-right: auto;\n  color: #cd8cfe;\n  color: #9d4ed8;\n}\n.project-task-duedate span {\n  padding: 5px 0px;\n}\n\n.date-padding {\n  padding: 5px 5px !important;\n}\n\n.project-task-img {\n  vertical-align: top;\n  padding-right: 5px;\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n.project-task-footer {\n  display: flex;\n  align-items: self-end;\n  justify-content: flex-end;\n  margin-bottom: -5px;\n}\n\n.project-task-footer img {\n  padding: 8px;\n  transition: 0.2s ease;\n}\n\n.project-task-footer img:hover {\n  border-radius: 11px;\n  background: whitesmoke;\n  cursor: pointer;\n}\n\ninput[type='checkbox'] {\n  margin-right: 11px;\n  accent-color: var(--darkGrey);\n}\n\ninput[type='checkbox']:checked + label,\ninput[type='checkbox']:checked {\n  color: var(--medGrey);\n  text-decoration: line-through !important;\n}\n\n/* POP UPS/ MODALS  */\n\n/* Create/ Add New...  */\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n  width: 350px;\n  /* padding: 1.3rem; */\n  min-height: 250px;\n  position: absolute;\n  /* top: 20%; */\n  background-color: white;\n\n  border: 3px solid #fbd4fc;\n  border-radius: 15px;\n  z-index: 2;\n\n  box-shadow:\n    0px 43px 79px -20px #af86c0,\n    34px -12px 80px -20px #fcd7e4d4;\n\n  box-shadow:\n    -31px 20px 63px -20px #af86c0,\n    13px -35px 63px -2px #fcd7e4fa;\n}\n\n.create-modal-icon {\n  position: absolute;\n  top: -52px;\n  left: 44%;\n  background: white;\n  border: solid 4px #fbd4fc;\n  padding: 5px;\n  height: 70px;\n  width: 70px;\n  border-radius: 50px;\n}\n\n.modal h3 {\n  margin: 20px auto 10px;\n}\n\n.modal .flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.create-modal-input-area {\n  margin-left: 22%;\n  margin-bottom: 20px;\n}\n\n.modal input,\nselect#projDropdown {\n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n  width: 200px;\n  height: 35px;\n}\n\n.modal p {\n  font-size: 0.9rem;\n  color: #777;\n  margin: 0.4rem 0 0.2rem;\n}\n\n.create-modal-buttons {\n  display: flex;\n}\n\nselect#projDropdown {\n  /* width: 200px; */\n  height: 35px;\n  padding: 5px;\n}\n\n.create-modal-buttons button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 0.8rem;\n  background-color: white;\n  color: #fbd4fc;\n  text-align: center;\n  font-size: 1.3em;\n  cursor: pointer;\n  border: none;\n  font-weight: 600;\n  width: 100%;\n  border-top: solid 3px;\n  border-bottom-left-radius: 20px;\n  transition: 0.3s;\n}\n\n.create-modal-buttons button:hover {\n  background: -webkit-linear-gradient(#43a3e8, #0edbdd);\n  transition: 0.3s;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.create-modal-buttons button img {\n  width: 25px;\n}\n\nbutton[type='submit'] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 20px;\n  border-left: solid 3px #fbd4fc;\n}\n\n.btn-close {\n  padding: 0;\n  background: transparent;\n  border-radius: 50%;\n  border: none;\n  margin-left: auto;\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  cursor: pointer;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(105, 97, 82, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\ninput#taskDuedate {\n  width: 47%;\n}\n\n/* PRIORITY RADIO IN NEWTASK FORM */\n.taskPriority_radio {\n  background: #454857;\n  padding: 4px;\n  border-radius: 50px;\n  box-shadow:\n    inset 0 0 0 3px rgba(35, 33, 45, 0.3),\n    0 0 0 3px rgba(185, 185, 185, 0.3);\n  position: relative;\n  width: 200px;\n  margin: 20px 0px -10px;\n  display: flex;\n  justify-content: center;\n}\n\n.taskEditPriority {\n  margin: 10px 0px;\n  width: auto;\n  background: transparent;\n  box-shadow: unset;\n  gap: 5px;\n}\n\n.taskPriority_radio input {\n  width: auto;\n  height: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: 50px;\n  padding: 4px 10px;\n\n  background: #454857;\n  color: #bdbdbdbd;\n  border: transparent;\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    'Helvetica Neue',\n    Arial,\n    'Noto Sans',\n    sans-serif,\n    'Apple Color Emoji',\n    'Segoe UI Emoji',\n    'Segoe UI Symbol',\n    'Noto Color Emoji';\n  transition: all 100ms linear;\n  /* transition: all 0.3s ease; */\n}\n\n.taskPriority_radio input:checked {\n  background-image: linear-gradient(180deg, #95d891, #74bbad);\n  color: #fff;\n  box-shadow: 0 1px 1px #0000002e;\n  text-shadow: 0 1px 0px #79485f7a;\n  border-radius: 50px;\n}\n\n.taskPriority_radio input#taskPriority_med:checked {\n  background-image: linear-gradient(180deg, #43a3e8, #0edbdd);\n}\n\n.taskPriority_radio input#taskPriority_high:checked {\n  background-image: linear-gradient(180deg, #f8aef9, #cabcfb);\n}\n\n.taskPriority_radio input:before {\n  content: attr(label);\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton.gradient-h3 {\n  margin-top: 0px;\n}\n\n/* Task/Project Switcher inside Modal */\ndiv.create-modal-select-type {\n  border-radius: 50px;\n  box-shadow:\n    inset 0 0 0 3px rgb(35 33 45 / 0%),\n    0 0 0 3px rgb(185 185 185 / 16%);\n}\n\n/*selected side*/\nlabel {\n  font-size: 13px;\n  color: #424242;\n  font-weight: 500;\n}\n\n/*  bg of Task when not selected*/\nlabel.toggleInput-switch-inner {\n  margin: 0px;\n  width: 140px;\n  height: 30px;\n  background: #e0e0e0;\n  background: linear-gradient(90deg, pink, lavender);\n  border-radius: 26px;\n  overflow: hidden;\n  position: relative;\n  transition: all 0.3s ease;\n  display: block;\n  cursor: pointer;\n}\n/* text of Task when not selected  */\nlabel.toggleInput-switch-inner::before {\n  content: attr(data-on); /* Task */\n  position: absolute;\n  font-size: 13px;\n  font-weight: 500;\n  top: 7px;\n  right: 20px;\n  color: grey;\n}\n\n/*  project selected */\nlabel.toggleInput-switch-inner::after {\n  content: attr(data-off); /* Project */\n  width: 70px;\n  height: 16px;\n  background: #fff;\n  border-radius: 26px;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  text-align: center;\n  transition: all 0.3s ease;\n  /* box-shadow: 0px 0px 6px -2px #111; */\n  padding: 5px 0px;\n}\n\ninput#toggleInput[type='checkbox'] {\n  cursor: pointer;\n  width: 50px;\n  height: 25px;\n  opacity: 0;\n  position: absolute;\n  top: 68px;\n  left: 44%;\n  z-index: 1;\n  margin: 0px;\n}\n\n/*  set bg and text on project, not selected */\ninput#toggleInput[type='checkbox']:checked + label.toggleInput-switch-inner {\n  background: linear-gradient(90deg, pink, lavender);\n  color: grey;\n}\n\n/*  Sets bg of Task when selected*/\ninput#toggleInput[type='checkbox']:checked\n  + label.toggleInput-switch-inner:after {\n  content: attr(data-on); /*Tasks*/\n  left: 68px;\n  background: white;\n  color: black;\n}\n\ninput#toggleInput[type='checkbox']:checked\n  + label.toggleInput-switch-inner:before {\n  content: attr(data-off); /*Project */\n  right: auto;\n  left: 20px;\n}\n\n.create-modal-input-area input[type='text']:focus-visible {\n  outline: solid 3px #af76f333;\n  border: solid 1.5px rgba(234, 100, 217, 0.4);\n  /* border-radius: 12px; */\n}\n\n/* Task Checked Off Toggle */\n.task-checkbox {\n  --text: #414856;\n  --check: #af76f3;\n  --disabled: #c3c8de;\n  --border-radius: 10px;\n  border-radius: var(--border-radius);\n  position: relative;\n  padding: 0px 5px;\n  align-items: center;\n  display: flex;\n}\n.task-checkbox label {\n  color: var(--text);\n  position: relative;\n  cursor: pointer;\n  padding: 5px;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: color 0.3s ease;\n  font-weight: 900;\n  font-size: 15px;\n}\n.task-checkbox label::before, /* dash */\n.task-checkbox label::after {\n  /* tick */\n  content: '';\n  position: absolute;\n}\n.task-checkbox label::before {\n  /* dash */\n  height: 2px;\n  width: 13px;\n  left: -27px;\n  background: var(--check);\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.task-checkbox label:after {\n  /* tick */\n  height: 4px;\n  width: 4px;\n  top: 8px;\n  left: -25px;\n  border-radius: 50%;\n}\n.task-checkbox input[type='checkbox'] {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: 15px;\n  width: 15px;\n  outline: none;\n  border: 0;\n  margin: 0 15px 0 0;\n  cursor: pointer;\n  background: var(--background);\n  align-items: center;\n}\n.task-checkbox input[type='checkbox']::before,\n.task-checkbox input[type='checkbox']::after {\n  content: '';\n  position: absolute;\n  height: 2px;\n  top: auto;\n  background: var(--check);\n  border-radius: 2px;\n}\n.task-checkbox input[type='checkbox']::before {\n  width: 0px;\n  right: 60%;\n  transform-origin: right bottom;\n}\n.task-checkbox input[type='checkbox']::after {\n  width: 0px;\n  left: 40%;\n  transform-origin: left bottom;\n}\n.task-checkbox input[type='checkbox']:checked::before {\n  -webkit-animation: check-01-11 0.4s ease forwards;\n  animation: check-01-11 0.4s ease forwards;\n}\n.task-checkbox input[type='checkbox']:checked::after {\n  -webkit-animation: check-02-11 0.4s ease forwards;\n  animation: check-02-11 0.4s ease forwards;\n}\n.task-checkbox input[type='checkbox']:checked + label {\n  color: var(--disabled);\n  -webkit-animation: move-11 0.3s ease 0.1s forwards;\n  animation: move-11 0.3s ease 0.1s forwards;\n}\n.task-checkbox input[type='checkbox']:checked + label::before {\n  background: var(--disabled);\n  -webkit-animation: slice-11 0.4s ease forwards;\n  animation: slice-11 0.4s ease forwards;\n}\n.task-checkbox input[type='checkbox']:checked + label::after {\n  -webkit-animation: firework-11 0.5s ease forwards 0.1s;\n  animation: firework-11 0.5s ease forwards 0.1s;\n}\n\n@-webkit-keyframes move-11 {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n\n@keyframes move-11 {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n@-webkit-keyframes slice-11 {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@keyframes slice-11 {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@-webkit-keyframes check-01-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n@keyframes check-01-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n@-webkit-keyframes check-02-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n@keyframes check-02-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n@-webkit-keyframes firework-11 {\n  0% {\n    opacity: 1;\n    box-shadow:\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow:\n      0 -15px 0 0px #4f29f0,\n      14px -8px 0 0px #4f29f0,\n      14px 8px 0 0px #4f29f0,\n      0 15px 0 0px #4f29f0,\n      -14px 8px 0 0px #4f29f0,\n      -14px -8px 0 0px #4f29f0;\n  }\n}\n@keyframes firework-11 {\n  0% {\n    opacity: 1;\n    box-shadow:\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow:\n      0 -15px 0 0px #4f29f0,\n      14px -8px 0 0px #4f29f0,\n      14px 8px 0 0px #4f29f0,\n      0 15px 0 0px #4f29f0,\n      -14px 8px 0 0px #4f29f0,\n      -14px -8px 0 0px #4f29f0;\n  }\n}\n\n/* WOBBLE EFFECT ON BIN */\n@-webkit-keyframes hvr-wobble-top {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n@keyframes hvr-wobble-top {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n.hvr-wobble-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n.hvr-wobble-top:hover,\n.hvr-wobble-top:focus,\n.hvr-wobble-top:active {\n  -webkit-animation-name: hvr-wobble-top;\n  animation-name: hvr-wobble-top;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Waving Hand Hover */\n.wave:hover {\n  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */\n  animation-duration: 2.5s; /* Change to speed up or slow down */\n  animation-iteration-count: infinite; /* Never stop waving :) */\n  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */\n  display: inline-block;\n}\n\n@keyframes wave-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(14deg);\n  } /* The following five values can be played with to make the waving more or less extreme */\n  20% {\n    transform: rotate(-8deg);\n  }\n  30% {\n    transform: rotate(14deg);\n  }\n  40% {\n    transform: rotate(-4deg);\n  }\n  50% {\n    transform: rotate(10deg);\n  }\n  60% {\n    transform: rotate(0deg);\n  } /* Reset for the last half to pause */\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n/* Grow Shadow */\n.hvr-grow-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow, transform;\n  transition-property: box-shadow, transform;\n}\n.hvr-grow-shadow:hover,\n.hvr-grow-shadow:focus,\n.hvr-grow-shadow:active {\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\nheader.hello {\n  font-size: 30px;\n}\n@media screen and (max-width: 1065px) {\n  div.container {\n    width: 98vw;\n    height: 98vh;\n  }\n}\n\n/* @media screen and (max-width: 1200px) {\n  header.hello {\n    font-size: 30px;\n  }\n} */\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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
/* harmony export */   createNewTask: () => (/* binding */ createNewTask),
/* harmony export */   imageFactory: () => (/* binding */ imageFactory)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ "./src/model.js");


//Our main file - handles requests.
//Tells MODEL what to do (logic wise),
//tells VIEW what do to (display wise)
//Controls and decides how data is displayed












//generate ID
const generateUUID = function b(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};

//function that runs when submit button is clicked
function createNewProject(projName) {
  //call to a function inside model, passing the projName, model will create the object and return the object to controller to be passed to the view to render the display

  let createdProject = (0,_model_js__WEBPACK_IMPORTED_MODULE_2__.createNewProjectModel)(projName, generateUUID()); //in model
}

function createNewTask(
  taskName,
  taskDesc,
  taskDue,
  taskPriority,
  projectName,
  projID,
) {
  let task = (0,_model_js__WEBPACK_IMPORTED_MODULE_2__.createNewTaskModel)(
    taskName,
    taskDesc,
    taskDue,
    taskPriority,
    projectName,
    projID,
    generateUUID(),
  ); //in model
  return task;
}

function imageFactory(image){
	const myImage = new Image();
	myImage.src = image;
	return myImage;
}




// export const pubSub = {
//   events: {},
//   subscribe: function (evName, fn) {
//     console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
//     //add an event with a name as new or to existing list
//     this.events[evName] = this.events[evName] || [];
//     this.events[evName].push(fn);
//   },
//   unsubscribe: function (evName, fn) {
//     console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
//     //remove an event function by name
//     if (this.events[evName]) {
//       this.events[evName] = this.events[evName].filter((f) => f !== fn);
//     }
//   },
//   publish: function (evName, data) {
//     console.log(`PUBSUB: Making a broadcast about ${evName} with ${data}`);
//     //emit/publish the event to anyone who is subscribed
//     if (this.events[evName]) {
//       this.events[evName].forEach((f) => {
//         f(data);
//       });
//     }
//   },
// };


/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProject: () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _src_images_downgrey16_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/images/downgrey16.png */ "./src/images/downgrey16.png");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/images/diskette24.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/images/edit24.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/images/bin24.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//displayProject module (view)









let displayProject = {
  //dom elements
  section: document.querySelector('.project'),

  clearSection() {
    //loop through allProjArr and change isCurrentProj to false
    _model__WEBPACK_IMPORTED_MODULE_0__.allProjectsArr.forEach((project) => (project.isCurrentProj = false));

    if (displayProject.section.hasChildNodes) {
      while (displayProject.section.firstChild) {
        displayProject.section.removeChild(displayProject.section.firstChild);
      }
    }
  },

  display(projectObj) {
    //takes in project and creates dom element for each task
    //may need to refactor to smaller functions as contains some logic

    //create elements
    let headingh2 = document.createElement('h2');
    headingh2.classList.add('project-heading');
    headingh2.textContent = projectObj.name;
    this.section.appendChild(headingh2);

    let headingh3 = document.createElement('h3');
    headingh3.classList.add('gradient-text');
    headingh3.textContent = 'To do';
    this.section.appendChild(headingh3);

    //if taskArr not empty
    if (projectObj.taskArr.length > 0) {
      //create element for each item in task array
      projectObj.taskArr.forEach(createTaskElement);
    }

    //could this fn be moved up a level?
    function createTaskElement(item, index) {
      // console.log(item); //task object
      //console.log(index); //0

      let details = document.createElement('details');
      details.classList.add('project-task-item');
      details.setAttribute('data-taskID', item.id);
      let summary = document.createElement('summary');

      let div = document.createElement('div');
      div.classList.add('task-checkbox');

      let checkbox = document.createElement('input');
      checkbox.setAttribute('id', `task${index}`);
      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('checkbox', 'taskcheckbox');

      console.log(item.isComplete);
      if (item.isComplete == true) {
        checkbox.setAttribute('checked', 'true');
      }

      let updatedTaskData = {};
      checkbox.addEventListener('change', () => {
        checkboxHandler(updatedTaskData);
      });

      let label = document.createElement('label');
      label.setAttribute('for', `task${index}`);
      label.textContent = item.name;
      div.appendChild(checkbox);
      div.appendChild(label);
      summary.appendChild(div);

      let priorityspan = document.createElement('span');
      priorityspan.classList.add(
        'project-task-priority',
        `${item.priority}Priority`,
      );
      priorityspan.textContent = item.priority;
      summary.appendChild(priorityspan);

      let arrow = document.createElement('img');
      arrow.classList.add('project-task-img');
    //   arrow.setAttribute('src', '/src/images/downgrey16.png');
      arrow.src = _src_images_downgrey16_png__WEBPACK_IMPORTED_MODULE_3__;


      summary.appendChild(arrow);

      details.appendChild(summary);

      let taskdesc = document.createElement('p');
      taskdesc.classList.add('project-task-description');
      taskdesc.textContent = item.description;
      details.appendChild(taskdesc);

      let taskFooter = document.createElement('div');
      taskFooter.classList.add('project-task-footer');
      details.appendChild(taskFooter);

      taskFooter.addEventListener('click', function taskClickHandler(e) {
        //DELETE BTN CLICKED
        if (e.target == taskDelIcon) {
          //remove task
          // console.log(this); //footer element
          projectObj.deleteTask(item.id);

          //EDIT BTN CLICKED
        } else if (e.target == taskEditIcon) {
          //if pencil icon showing
          if (taskEditIcon.getAttribute('src') == '/src/images/edit24.png') {
            //move priority to inside desc
            summary.removeChild(priorityspan);

            //put this in a function to be exported btween newTaskForm.js and here

            function createPriorityPicker(currentPriority) {
              console.log('current priority: ', currentPriority); //high
              let taskPriorityWrapper = document.createElement('div');
              let taskPriorityInput_low = document.createElement('input');
              let taskPriorityInput_med = document.createElement('input');
              let taskPriorityInput_high = document.createElement('input');

              taskPriorityWrapper.classList.add(
                'taskPriority_radio',
                'taskEditPriority',
              );
              taskPriorityInput_low.setAttribute('label', 'Low');
              taskPriorityInput_low.setAttribute('type', 'radio');
              taskPriorityInput_low.setAttribute('id', 'taskPriority_low');
              taskPriorityInput_low.setAttribute('name', 'taskPriority');
              taskPriorityInput_low.setAttribute('value', 'low');

              taskPriorityInput_med.setAttribute('label', 'Medium');
              taskPriorityInput_med.setAttribute('type', 'radio');
              taskPriorityInput_med.setAttribute('id', 'taskPriority_med');
              taskPriorityInput_med.setAttribute('name', 'taskPriority');
              taskPriorityInput_med.setAttribute('value', 'med');

              taskPriorityInput_high.setAttribute('label', 'High');
              taskPriorityInput_high.setAttribute('type', 'radio');
              taskPriorityInput_high.setAttribute('id', 'taskPriority_high');
              taskPriorityInput_high.setAttribute('name', 'taskPriority');
              taskPriorityInput_high.setAttribute('value', 'high');

              if (currentPriority == 'high') {
                taskPriorityInput_high.setAttribute('checked', 'true');
              } else if (currentPriority == 'med') {
                taskPriorityInput_med.setAttribute('checked', 'true');
              } else if (currentPriority == 'low') {
                taskPriorityInput_low.setAttribute('checked', 'true');
              }

              taskPriorityWrapper.appendChild(taskPriorityInput_low);
              taskPriorityWrapper.appendChild(taskPriorityInput_med);
              taskPriorityWrapper.appendChild(taskPriorityInput_high);

              return taskPriorityWrapper;
            }

            details.insertBefore(createPriorityPicker(item.priority), taskdesc);

            //add padding class to date
            date.classList.add('date-padding');

            //add class of edit-mode to task related inputs (if needed)
            details.classList.add('edit-mode');

            //set content-editable to true
            label.setAttribute('contentEditable', 'true');
            taskdesc.setAttribute('contentEditable', 'true');
            date.setAttribute('contentEditable', 'true');

            //this pencil icon needs to change to a save icon
            // taskEditIcon.setAttribute('src', '/src/images/diskette24.png');
            // taskEditIcon.setAttribute('src', diskette24);
            taskEditIcon.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/images/diskette24.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

            //if SAVE  icon
          } else if (
            // taskEditIcon.getAttribute('src') == '/src/images/diskette24.png'
            taskEditIcon.getAttribute('src') == Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/images/diskette24.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
          ) {
            // //get new values
            let updatedTaskData = {
              name: label.textContent,
              desc: taskdesc.textContent,
              date: date.textContent,
              priority: getRadioValue(),
              isComplete: item.isComplete,
            };

            //MOVE TO model
            function getRadioValue() {
              let radio = document.getElementsByName('taskPriority');
              for (let i = 0; i < radio.length; i++) {
                if (radio[i].checked) {
                  console.log('priority from getRadioValue:', radio[i].value);
                  return radio[i].value;
                }
              }
            }

            //change save icon back to pencil
            // taskEditIcon.setAttribute('src', '/src/images/edit24.png');
            taskEditIcon.setAttribute('src', Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/images/edit24.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

            //remove edit-mode class
            details.classList.remove('edit-mode');

            //remove padding class to date
            date.classList.remove('date-padding');

            //set content-editable to false
            label.setAttribute('contentEditable', 'false');
            taskdesc.setAttribute('contentEditable', 'false');
            date.setAttribute('contentEditable', 'false');

            //move selected priority bubble back to summary
            let taskPriorityWrapper = document.querySelector(
              'div.taskEditPriority',
            );

            //remove old class & add updated class
            priorityspan.classList.remove(`${item.priority}Priority`);
            priorityspan.classList.add(`${updatedTaskData.priority}Priority`);
            priorityspan.textContent = updatedTaskData.priority;

            // add priority span back to summary
            summary.insertBefore(priorityspan, arrow);

            //remove priority selector
            taskPriorityWrapper.remove();

            console.log(
              'priority in displayProject: ',
              updatedTaskData.priority,
            );

            //if save clicked, call with new values
            item.editTask(updatedTaskData);
          }
        }
      }); //taskfooter event listener close

      let dateWrapper = document.createElement('p');
      dateWrapper.textContent = ` Due Date:`;
      dateWrapper.classList.add('project-task-duedate');

      let date = document.createElement('span');

      date.textContent = item.dueDate;
      dateWrapper.appendChild(date);

      taskFooter.appendChild(dateWrapper);

      let taskDelIcon = document.createElement('img');
    //   taskDelIcon.setAttribute('src', '/src/images/bin24.png');
      taskDelIcon.setAttribute('src', Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/images/bin24.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      taskFooter.appendChild(taskDelIcon);

      let taskEditIcon = document.createElement('img');
      taskEditIcon.classList.add('project-task-editbtn');
      taskEditIcon.setAttribute('src', '/src/images/edit24.png');
      taskEditIcon.setAttribute('src', Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/images/edit24.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

      taskFooter.appendChild(taskEditIcon);
      displayProject.section.appendChild(details);

      function checkboxHandler(updatedTaskData) {
        if (checkbox.checked) {
          updatedTaskData.isComplete = true;
          item.isComplete = true;
          console.log(updatedTaskData);
          //update active task #s
        } else {
          updatedTaskData.isComplete = false;
          item.isComplete = false;
        }

        item.editTask(updatedTaskData);
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.renderProjectCards)();
      }
    } //end of createTaskElement
  },
};


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
/* harmony export */   createNewTaskModel: () => (/* binding */ createNewTaskModel),
/* harmony export */   formatDateValue: () => (/* binding */ formatDateValue),
/* harmony export */   getRadioValue: () => (/* binding */ getRadioValue),
/* harmony export */   projectActions: () => (/* binding */ projectActions),
/* harmony export */   taskActions: () => (/* binding */ taskActions)
/* harmony export */ });
/* harmony import */ var _newProjectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectForm */ "./src/newProjectForm.js");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject */ "./src/displayProject.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
//the model handles all the data and logic
// import { addProjectToDropdown } from './model';






let allProjectsArr = []; //export to controller and view (try to remove from view)

function ProjectFactory(projName, projID) {
  let project = Object.create(projectActions);
  project.name = projName || 'default';
  project.id = projID;
  project.taskArr = [];
  project.isCurrentProj = false;
  return project;
}

let projectActions = {
  getProjectName() {
    return this.name;
  },
  getProjectID() {
    return this.id;
  },
  addProjToAllProjArr() {
    allProjectsArr.push(this);
    return allProjectsArr;
  },
  getNoOfTasks() {
    let noOfTasks = this.taskArr.length;
    return noOfTasks;
  },
  getNoOfActiveTasks() {
    console.log('getNoOfActiveTasks() reached');

    let noOfActiveTasks = this.taskArr.filter(
      (task) => task.isComplete == false,
    );

    return noOfActiveTasks.length;
  },
  getNoOfCompletedTasks() {
    console.log('getNoOfCompletedTasks reached');
    let noOfCompletedTasks = this.taskArr.filter(
      (task) => task.isComplete == true,
    );
    return noOfCompletedTasks.length;
  },
  addToLocalStorage() {
    //SAVE ALLPROJARR TO LS
    console.log('add to local storage reached');
    let allProjArrLS = JSON.stringify(allProjectsArr);
    localStorage.setItem('allProjArrLS', allProjArrLS);
    (0,_view_js__WEBPACK_IMPORTED_MODULE_2__.renderInfoCards)(allProjectsArr);
  },
  deleteTask(taskid) {
    //find task id in this.taskArr that == taskid, remove from taskArr
    let index = this.taskArr.findIndex((taskobj) => taskobj.id == taskid);
    if (index > -1) {
      this.taskArr.splice(index, 1);
    }

    //get project, call addToLocalStorage() to refresh LS
    this.addToLocalStorage();

    //Clear project section
    _displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProject.clearSection();
    //update # of tasks on proj card
    this.getNoOfTasks();
    //rerender proj cards
    (0,_view_js__WEBPACK_IMPORTED_MODULE_2__.renderProjectCards)();
    //rerender proj section
    _displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProject.display(this);
  },
};

function createNewProjectModel(projName, projID) {
  //export to controller
  let newprojName = ProjectFactory(projName, projID);

  newprojName.addProjToAllProjArr();
  newprojName.getNoOfTasks();
  newprojName.addToLocalStorage();

  return newprojName;
}

function TaskFactory(
  taskName,
  taskDesc,
  taskDue,
  taskPriority,
  projectName,
  projID,
  taskID,
) {
  let task = Object.create(taskActions);
  task.name = taskName;
  task.id = taskID;
  task.description = taskDesc;
  task.dueDate = taskDue || new Date().toDateString();
  task.priority = taskPriority;
  task.isComplete = false;
  task.projName = projectName;
  task.projID = projID;
  return task;
}

let taskActions = {
  getTaskName() {
    return this.name;
  },
  getTaskID() {
    return this.id;
  },
  getTaskDescription() {
    return this.description;
  },
  getTaskDueDate() {
    return this.dueDate;
  },
  getTaskPriority() {
    return this.priority;
  },
  getTaskIsComplete() {
    return this.isComplete;
  },
  getTaskProjectName() {
    return this.projName;
  },
  getTaskProjectID() {
    return this.projID;
  },
  addTask() {
    //this method finds the projectID and pushes the task to the taskArr within the corresponding Project
    //should this be a method on the project?

    //get corresponding project id
    let currentProj = this.getTaskProjectID();
    var result = allProjectsArr.find((project) => project.id === currentProj);

    if (result !== undefined) {
      result.taskArr.push(this);
    }
    //re-calculate # of active tasks & rerender display
    result.getNoOfTasks();
    result.getNoOfActiveTasks();
    result.getNoOfCompletedTasks();
    result.addToLocalStorage();
  },
  editTask(updatedTaskData) {
    // update values
    this.name = updatedTaskData.name || this.name;
    this.description = updatedTaskData.desc || this.description;
    this.priority = updatedTaskData.priority || this.priority;
    this.dueDate = updatedTaskData.date || this.dueDate;
    this.isComplete = updatedTaskData.isComplete || this.isComplete;

    console.log('priority in editTask method: ', this.priority);
    console.log('updatedTaskData.priority: ', updatedTaskData.priority); //undefined
    let currentProj = this.getTaskProjectID();

    let result = allProjectsArr.find((project) => project.id === currentProj);

    result.addToLocalStorage();
  },
};

function createNewTaskModel(
  taskName,
  taskDesc,
  taskDue,
  taskPriority,
  projName,
  projID,
  taskID,
) {
  //call to task Factory
  let newTask = TaskFactory(
    taskName,
    taskDesc,
    taskDue,
    taskPriority,
    projName,
    projID,
    taskID,
  );

  newTask.addTask();

  return newTask;
}

function formatDateValue(date) {
  //date rec as string
  date = date.split('-');
  console.log(date); //['2023', '10','03']
  let formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(
    new Date(date[0], date[1] - 1, date[2]),
    'eee do MMM, yyyy',
  );

  return formattedDate;
}

function getRadioValue() {
  let radio = document.getElementsByName('taskPriority');
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      console.log('priority from getRadioValue:', radio[i].value);
      return radio[i].value;
    }
  }
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

let div = document.querySelector('div.create-modal-input-area');

//create elements
let label = document.createElement('label');
let input = document.createElement('input');

// Set attributes
label.setAttribute('for', 'projName');
label.textContent = 'Project Name:';
input.setAttribute('type', 'text');
input.classList.add('name');
input.setAttribute('id', 'projName');
input.setAttribute('autocomplete', 'off');

function newProjectForm() {
  //toggle display
  div.classList.add('showProjModule');
  div.classList.remove('showTaskModule');

  //append elements to div
  div.appendChild(label);
  div.appendChild(input);
}

 //to view


/***/ }),

/***/ "./src/newTaskForm.js":
/*!****************************!*\
  !*** ./src/newTaskForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newTaskForm: () => (/* binding */ newTaskForm),
/* harmony export */   populateDropdown: () => (/* binding */ populateDropdown)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
//modal display - create New Task
//contains code to create dom elements and append them inside Add New... modal



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
projDropdownLabel.setAttribute('for', 'projDropdown');
projDropdownLabel.textContent = 'Project: ';
projDropdown.setAttribute('id', 'projDropdown');
projDropdown.setAttribute('name', 'projDropdown');

taskLabel.setAttribute('for', 'taskName');
taskLabel.textContent = 'Task Name:';
taskInput.setAttribute('type', 'text');
taskInput.classList.add('taskName');
taskInput.setAttribute('id', 'taskName');

taskDescriptionLabel.setAttribute('for', 'taskDesc');
taskDescriptionLabel.textContent = 'Task Description:';
taskDescriptionInput.setAttribute('type', 'text');
taskDescriptionInput.classList.add('taskDesc');
taskDescriptionInput.setAttribute('id', 'taskDesc');

taskDueDateLabel.setAttribute('for', 'taskDueDate');
taskDueDateLabel.textContent = 'Task Due Date:';
taskDueDateInput.setAttribute('type', 'date');
taskDueDateInput.setAttribute('id', 'taskDueDate');

taskPriorityWrapper.classList.add('taskPriority_radio');
taskPriorityInput_low.setAttribute('label', 'Low');
taskPriorityInput_low.setAttribute('type', 'radio');
taskPriorityInput_low.setAttribute('id', 'taskPriority_low');
taskPriorityInput_low.setAttribute('name', 'taskPriority');
taskPriorityInput_low.setAttribute('value', 'low');

taskPriorityInput_med.setAttribute('label', 'Medium');
taskPriorityInput_med.setAttribute('type', 'radio');
taskPriorityInput_med.setAttribute('id', 'taskPriority_med');
taskPriorityInput_med.setAttribute('name', 'taskPriority');
taskPriorityInput_med.setAttribute('value', 'med');

taskPriorityInput_high.setAttribute('label', 'High');
taskPriorityInput_high.setAttribute('type', 'radio');
taskPriorityInput_high.setAttribute('id', 'taskPriority_high');
taskPriorityInput_high.setAttribute('name', 'taskPriority');
taskPriorityInput_high.setAttribute('value', 'high');

taskPriorityWrapper.appendChild(taskPriorityInput_low);
taskPriorityWrapper.appendChild(taskPriorityInput_med);
taskPriorityWrapper.appendChild(taskPriorityInput_high);

function populateDropdown(allProjectsArr) {
  //remove all values and rerender
  clearDropdownOptions();

  //get values from proj array and create option tag for each
  if (allProjectsArr.length > 0) {
    for (let i = 0; i <= allProjectsArr.length - 1; i++) {
      projDropdown.appendChild(createDropdownOptions(allProjectsArr[i]));
    }
  }
}

function clearDropdownOptions() {
  //if div has children, remove children

  if (projDropdown.hasChildNodes) {
    while (projDropdown.firstChild) {
      projDropdown.removeChild(projDropdown.firstChild);
    }
  }
}

function createDropdownOptions(project) {
  let option = document.createElement('option');
  option.setAttribute('value', project.name);
  option.setAttribute('data-projectid', project.id);
  option.textContent = project.name;
  return option;
}

function newTaskForm() {
  //toggle display
  div.classList.add('showTaskModule');
  div.classList.remove('showProjModule');

  //clear elements
  taskInput.value = '';

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
/* harmony export */   renderInfoCards: () => (/* binding */ renderInfoCards),
/* harmony export */   renderProjectCards: () => (/* binding */ renderProjectCards)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _newProjectForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectForm.js */ "./src/newProjectForm.js");
/* harmony import */ var _newTaskForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTaskForm.js */ "./src/newTaskForm.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _displayProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayProject.js */ "./src/displayProject.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
//the view handles how the UI is displayed. Only talks to controller.




 //maybe move









//export function thisistheview(){
let domCachedElements = {
  container: document.querySelector('.container'),
  nav: document.querySelector('.nav'),
  homeBtn: document.querySelector('.btn-home'),
  addBtn: document.querySelector('.btn-add'),
  viewAllProjectsBtn: document.querySelector('.btn-allproj'),
  taskbox: document.querySelector('.taskbox'),
  activeInfoItem: document.querySelector('.info-item-active'),
  completedInfoItem: document.querySelector('.info-item-completed'),
};

//add event delegation for home, add new, view all and gitub//
domCachedElements.nav.addEventListener('click', function navClickHandler(e) {
  if (e.target == domCachedElements.homeBtn) {
    _displayProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject.clearSection();
  } else if (e.target == domCachedElements.addBtn) {
    openModal();
  } else if (e.target == domCachedElements.viewAllProjectsBtn) {
    renderProjectCards();
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  //greeting
  let today = document.querySelector('.today');
  today.textContent = ` ` + (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 'eeee');

  //check if LS contains anything
  let allProjArrLS;
  if (localStorage.getItem('allProjArrLS')) {
    allProjArrLS = JSON.parse(localStorage.getItem('allProjArrLS'));
  } else {
    allProjArrLS = [];
    (0,_controller_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)('default');
  }

  //loop over allProjArrLS and push each obj to allProjectsArr,
  allProjArrLS.forEach((obj) => _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr.push(obj));

  // loop over allProjectsArr and set prototypes to be able to use methods
  _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr.forEach((obj) => Object.setPrototypeOf(obj, _model_js__WEBPACK_IMPORTED_MODULE_3__.projectActions));

  //set protos on tasks
  //loop through proj arr & do something to each proj obj
  for (let project of _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr) {
    for (let task of project.taskArr) {
      Object.setPrototypeOf(task, _model_js__WEBPACK_IMPORTED_MODULE_3__.taskActions);
    }
  }

  renderProjectCards();
  renderInfoCards(_model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr);
});

function renderProjectCards() {
  //1. clears project display area
  removeChildren(domCachedElements.taskbox);
  //2. loops over all projects array (if arr not empty) & creates project card for each project & append to taskbox
  if (_model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr.length > 0) {
    _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr.forEach(createProjectItemCard);
  }
}

//callback from foreach above
//called on page load and also when new project is created
function createProjectItemCard(item, index) {
  // console.log('createProjectItemCard item: ', item); //project
  // console.log('createProjectItemCard index: ', index); //index in allprojarr

  //create elements
  let projectItem = document.createElement('div');

  projectItem.addEventListener('click', function projClickHandler(e) {
    if (e.target == projectItemDelIcon) {
      // console.log('allProjArr: ', allProjectsArr);
      // console.log('item: ', item);
      // console.log('index: ', index);
      // console.log(this); //the card div that has been clicked on

      //remove proj
      deleteProject(projectItem, _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr[index]); //in view. might need to move to proj.prototype
    } else {
      //clear section
      _displayProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject.clearSection();
      //toggle currentProj boolean in project
      _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr[index].isCurrentProj = true;

      //display project in white section
      _displayProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject.display(_model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr[index]);
    }
  });

  // projectItem.classList.add("project-item", "hvr-grow-shadow");
  projectItem.classList.add('project-item');

  let projectTitle = document.createElement('h5');
  projectTitle.textContent = _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr[index].name;
  projectItem.appendChild(projectTitle);

  let projectTaskNo = document.createElement('p');
  projectTaskNo.classList.add('project-item-taskno');

  let projectActiveTaskNo = document.createElement('p');
  projectActiveTaskNo.classList.add('project-item-taskno');

  let projectCompletedTaskNo = document.createElement('p');
  projectCompletedTaskNo.classList.add('project-item-taskno');

  let noOfTasks = item.getNoOfTasks();

  if (noOfTasks === 1) {
    projectTaskNo.textContent = `${noOfTasks} task`;
  } else {
    projectTaskNo.textContent = `${noOfTasks} tasks`;
  }

  let noOfActiveTasks = item.getNoOfActiveTasks();
  if (noOfActiveTasks === 1) {
    projectActiveTaskNo.textContent = `${noOfActiveTasks} active task`;
  } else {
    projectActiveTaskNo.textContent = `${noOfActiveTasks} active tasks`;
  }

  let noOfCompletedTasks = item.getNoOfCompletedTasks();
  if (noOfCompletedTasks === 1) {
    projectCompletedTaskNo.textContent = `${noOfCompletedTasks} completed task`;
  } else {
    projectCompletedTaskNo.textContent = `${noOfCompletedTasks} completed tasks`;
  }

  projectItem.appendChild(projectTaskNo);
  projectItem.appendChild(projectActiveTaskNo);
  projectItem.appendChild(projectCompletedTaskNo);

  let projectItemWrapper = document.createElement('div');
  projectItemWrapper.classList.add('project-item-wrapper');
  projectItem.appendChild(projectItemWrapper);

  let projectItemDelBtn = document.createElement('button');
  projectItemDelBtn.classList.add('project-item-delbtn');

  let projectItemDelIcon = document.createElement('img');
  projectItemDelIcon.setAttribute('src', '/src/images/bin24.png');
  projectItemDelIcon.classList.add('hvr-wobble-top');
  projectItemDelBtn.appendChild(projectItemDelIcon);

  projectItemWrapper.appendChild(projectItemDelBtn);

  //3. append each project cards to  display area
  domCachedElements.taskbox.appendChild(projectItem);
}

function deleteProject(projectItem, projObj) {
  //remove project card from All Projects area

  //PROJECTITEM IS THE DIV
  //PROJECTOBJ IS THE OBJ

  //removes card
  domCachedElements.taskbox.removeChild(projectItem);

  //find index of projObj in arr
  let indexOfProjObj = _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr.findIndex((object) => object === projObj);

  //remove project from allProjectsArr
  _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr.splice(indexOfProjObj, 1);

  //re-send arr to localstorage to be up to date
  projObj.addToLocalStorage();

  //remove project from white section if current proj
  if ((projObj.isCurrentProj = true)) {
    _displayProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject.clearSection();
    projObj.isCurrentProj = false;
  }

  //remove project name from dropdown in modal
  (0,_newTaskForm_js__WEBPACK_IMPORTED_MODULE_2__.populateDropdown)(_model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr);
  //rerender display
  renderProjectCards();
}

function renderInfoCards(allProjArr) {
  //this function will display the current number of ACTIVE, COMPLETED and OVERDUE tasks
  //this function will need to be called upon starting & also whenever a new task is created, deleted, date changed or marked complete

  //ACTIVE
  let result = allProjArr.reduce(function (acc, obj) {
    return acc + obj.getNoOfActiveTasks();
  }, 0);

  let active = document.createElement('span');
  active.textContent = ` Active`;
  domCachedElements.activeInfoItem.textContent = `${result}`;
  domCachedElements.activeInfoItem.appendChild(active);

  // COMPLETED TASKS
  //loop over all proj arr, for each proj, loop over tasksArr and count how many are isComplete = true, add total number of tasks
  // update card

  let completed = allProjArr.reduce(function (acc, obj) {
    return acc + obj.getNoOfCompletedTasks();
  }, 0);

  let completeSpan = document.createElement('span');
  completeSpan.textContent = ` Complete`;
  domCachedElements.completedInfoItem.textContent = `${completed}`;
  domCachedElements.completedInfoItem.appendChild(completeSpan);

  //OVERDUE TASKS
  //loop over all proj arr, for each proj, loop over tasksArr and count how many have due date in the past(less than current date), add total number of tasks
  // update card
}

// --------- CREATE NEW - MODAL ----------------
let modalElements = {
  submitButton: document.querySelector('button[type="submit"]'),
  clearButton: document.querySelector('button.clear-btn'),
  modal: document.querySelector('.modal'),
  overlay: document.querySelector('.overlay'),
  closeModalBtn: document.querySelector('.btn-close'),
};

//opens modal to create new project/task
const openModal = function () {
  modalElements.modal.classList.remove('hidden');
  modalElements.overlay.classList.remove('hidden');
  clearInputValues();
};
//add event listener to open modal on click
//domCachedElements.addBtn.addEventListener("click", openModal);

//closes modal
const closeModal = function () {
  modalElements.modal.classList.add('hidden');
  modalElements.overlay.classList.add('hidden');
};
//add event listener to close modal on click
modalElements.closeModalBtn.addEventListener('click', closeModal);
modalElements.overlay.addEventListener('click', closeModal);
modalElements.submitButton.addEventListener('click', closeModal);

// PUBSUB - not working

// modalElements.submitButton.addEventListener('click', () => {
//     pubSub.publish('event:name-changed', {name: input.value});
//   });

//   pubSub.subscribe('event:name-changed', data => {
//     console.log(`Your name is: ${data.name}`);
//   });

let projNameInput = document.querySelector('#projName');

let selectedProject = document.querySelector('#projDropdown');
let taskNameInput = document.querySelector('#taskName');
let taskDescriptionInput = document.querySelector('#taskDesc');
let taskDueDateInput = document.querySelector('#taskDueDate');
let taskPriorityInput = document.querySelector('.taskPriority_radio');

let div = document.querySelector('div.create-modal-input-area');

let createNewElements = {
  toggleInput: document.querySelector('input#toggleInput[type="checkbox"]'),

  toggleModalDisplay: function () {
    let div = document.querySelector('div.create-modal-input-area');

    if (createNewElements.toggleInput.checked) {
      //Add New Task shows (toggle checked)
      clearInputValues();
      removeChildren(div);
      (0,_newTaskForm_js__WEBPACK_IMPORTED_MODULE_2__.newTaskForm)(); //load New Task Inputs
    } else {
      //Add New Project Shows (toggle not checked)
      clearInputValues();
      removeChildren(div);
      (0,_newProjectForm_js__WEBPACK_IMPORTED_MODULE_1__.newProjectForm)();
    }
  },
};

function removeChildren(element) {
  if (element.hasChildNodes) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}
//project/task toggle
createNewElements.toggleInput.addEventListener(
  'click',
  createNewElements.toggleModalDisplay,
);

//SUBMIT BUTTON
modalElements.submitButton.addEventListener('click', function (event) {
  //this function may need to be moved to controller
  //get the value from the inputs, pass to controller
  //(controller will pass to model, to display on screen )
  event.preventDefault();
  //get latest values
  projNameInput = document.querySelector('#projName');

  if (div.classList.contains('showTaskModule')) {
    //get task data
    selectedProject = document.querySelector('#projDropdown');
    taskNameInput = document.querySelector('#taskName');
    taskDescriptionInput = document.querySelector('#taskDesc');
    taskDueDateInput = document.querySelector('#taskDueDate');
    taskPriorityInput = document.querySelector('.taskPriority_radio');

    //save values
    let selectedProjName = selectedProject.value || 'default';
    let projID =
      selectedProject.options[selectedProject.selectedIndex].dataset.projectid;
    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    // let taskDueDate = taskDueDateInput.value;

    let taskDueDate = (0,_model_js__WEBPACK_IMPORTED_MODULE_3__.formatDateValue)(taskDueDateInput.value);

    let taskPriority = (0,_model_js__WEBPACK_IMPORTED_MODULE_3__.getRadioValue)();

    //create task
    let createdTask = (0,_controller_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask)(
      taskName,
      taskDescription,
      taskDueDate,
      taskPriority,
      selectedProjName,
      projID,
    ); //in controller

    //find project in AllProjArr
    let foundProj = _model_js__WEBPACK_IMPORTED_MODULE_3__.allProjectsArr.find((project) => project.id === projID);
    // console.log('foundProj: ', foundProj);

    //Clear project section
    _displayProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject.clearSection();

    //rerender project section with current project
    _displayProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject.display(foundProj);

    //else if div has class of project
  } else if (div.classList.contains('showProjModule')) {
    let projectName = projNameInput.value;
    (0,_controller_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projectName); //in controller
    renderProjectCards();
  }

  renderProjectCards();
});

//CLEAR BUTTON
modalElements.clearButton.addEventListener('click', clearInputValues);

function clearInputValues() {
  //get latest values
  console.log('clearInputValues called');
  taskNameInput = document.querySelector('#taskName');
  taskDescriptionInput = document.querySelector('#taskDesc');
  projNameInput = document.querySelector('#projName');

  if (taskNameInput !== null && taskDescriptionInput !== null) {
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
  } else if (projNameInput.value !== null) {
    projNameInput.value = '';
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

/***/ "./src/images/cursor16.png":
/*!*********************************!*\
  !*** ./src/images/cursor16.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bda6631ef1b031902c21.png";

/***/ }),

/***/ "./src/images/downgrey16.png":
/*!***********************************!*\
  !*** ./src/images/downgrey16.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4531776403cf8b07f8ac.png";

/***/ }),

/***/ "./src/images/low-poly-grid-haikei.png":
/*!*********************************************!*\
  !*** ./src/images/low-poly-grid-haikei.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32c8df3341cc222f503a.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUpBQXVEO0FBQ25HLDRDQUE0QyxtS0FBOEQ7QUFDMUcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QywySUFBMkM7QUFDdkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1DQUFtQztBQUM3QyxVQUFVLG1DQUFtQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1DQUFtQztBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJGQUEyRjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQ0FBbUM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLDRCQUE0QjtBQUM1Qix1Q0FBdUM7QUFDdkMsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLE9BQU8sdUZBQXVGLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSw0QkFBNEIsTUFBTSxNQUFNLHVDQUF1QyxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVkseUJBQXlCLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxTQUFTLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLE9BQU8sT0FBTyxLQUFLLFVBQVUsU0FBUyxRQUFRLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLHdCQUF3Qix5QkFBeUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxhQUFhLGNBQWMsYUFBYSxZQUFZLEtBQUssUUFBUSxhQUFhLGNBQWMsT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsU0FBUyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFFBQVEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sT0FBTyxPQUFPLFVBQVUsWUFBWSxNQUFNLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLFFBQVEsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sT0FBTyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sc0JBQXNCLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLHNCQUFzQixXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLFlBQVksT0FBTyxzQkFBc0IsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLHNCQUFzQixXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1B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QSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNB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OztBQ2xZZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL051bml0by1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL051bml0by1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY3Vyc29yMTYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvbG93LXBvbHktZ3JpZC1oYWlrZWkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvY3J5c3RhbHMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQ1NTIGZvciBUb0RvIExpc3QgKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ051bml0byc7XG59XG5cbjpyb290IHtcbiAgLS1ncmFkaWVudF9iZ19jb2xvcjogI2VkZTVmZDtcbiAgLS1ncmFkaWVudF9zcG90MV9jb2xvcjogI2UxY2JmYjtcbiAgLS1ncmFkaWVudF9zcG90MV93OiA3NSU7XG4gIC0tZ3JhZGllbnRfc3BvdDFfaDogNzUlO1xuICAtLWdyYWRpZW50X3Nwb3QxX3g6IDAlO1xuICAtLWdyYWRpZW50X3Nwb3QxX3k6IDAlO1xuICAtLWdyYWRpZW50X3Nwb3QyX2NvbG9yOiAjZmZlMGQ2O1xuICAtLWdyYWRpZW50X3Nwb3QyX3c6IDc1JTtcbiAgLS1ncmFkaWVudF9zcG90Ml9oOiA3NSU7XG4gIC0tZ3JhZGllbnRfc3BvdDJfeDogMTAwJTtcbiAgLS1ncmFkaWVudF9zcG90Ml95OiAwJTtcbiAgLS1ncmFkaWVudF9zcG90M19jb2xvcjogI2ViZTBmZjtcbiAgLS1ncmFkaWVudF9zcG90M193OiA3NSU7XG4gIC0tZ3JhZGllbnRfc3BvdDNfaDogNzUlO1xuICAtLWdyYWRpZW50X3Nwb3QzX3g6IDEwMCU7XG4gIC0tZ3JhZGllbnRfc3BvdDNfeTogMTAwJTtcblxuICAtLWdyYWRpZW50X3Nwb3Q0X2NvbG9yOiAjZmZkYmYzO1xuICAtLWdyYWRpZW50X3Nwb3Q0X3c6IDc1JTtcbiAgLS1ncmFkaWVudF9zcG90NF9oOiA3NSU7XG4gIC0tZ3JhZGllbnRfc3BvdDRfeDogMCU7XG4gIC0tZ3JhZGllbnRfc3BvdDRfeTogMTAwJTtcblxuICAtLWdyYWRpZW50X3Nwb3QyX3c6IDEwMCU7XG4gIC0tZ3JhZGllbnRfc3BvdDJfeDogOTQlO1xuICAtLWdyYWRpZW50X3Nwb3QyX2g6IDQ0JTtcbiAgLS1ncmFkaWVudF9zcG90MV93OiA1MSU7XG4gIC0tZ3JhZGllbnRfc3BvdDFfaDogNjQlO1xuICAtLWdyYWRpZW50X3Nwb3QxX3g6IDclO1xuICAtLWdyYWRpZW50X3Nwb3QzX3c6IDEwMCU7XG4gIC0tZ3JhZGllbnRfc3BvdDNfaDogODIlO1xuICAtLWdyYWRpZW50X3Nwb3QzX3g6IDkwJTtcbiAgLS1ncmFkaWVudF9zcG90NF93OiA2NCU7XG4gIC0tZ3JhZGllbnRfc3BvdDRfeDogMCU7XG4gIC0tZ3JhZGllbnRfc3BvdDRfeTogNDUlO1xuXG4gIC8qIFByb2plY3QgQ29sb3VycyAqL1xuICAtLXByb2plY3RfY29sb3IxOiAjZmZlZGQ2O1xuICAtLXByb2plY3RfY29sb3IyOiAjZmZjYjlhO1xuICAtLXByb2plY3RfY29sb3IzOiAjZjhhZWY5O1xuICAtLXByb2plY3RfY29sb3I0OiAjYjhkYmZkO1xuICAtLXByb2plY3RfY29sb3I1OiAjYzhiYWZhO1xuICAtLXByb2plY3RfY29sb3I2OiAjOGZlNGU5O1xuXG4gIC0tZGFya0dyZXk6ICMyNTJiM2Q7XG4gIC0tbWVkR3JleTogIzk0OTY5YjtcbiAgLS1saWdodEdyZXk6ICNlZWU7XG59XG5cbi53ZWxjb21lLXRleHQge1xuICBjb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1wcm9qZWN0X2NvbG9yNCkgMzAlLCB2YXIoLS1wcm9qZWN0X2NvbG9yNikgMTAwJSk7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcblxuICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmE4M2ZjLCAjY2FiY2ZiKTsgKi9cbiAgLyogYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cbiAgY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ051bml0byc7XG4gIHNyYzpcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCdvcGVudHlwZScpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ29wZW50eXBlJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmZhbmN5LWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JhZGllbnRfYmdfY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90MV93KSB2YXIoLS1ncmFkaWVudF9zcG90MV9oKSBhdCBsZWZ0XG4gICAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QxX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90MV95KSxcbiAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QxX2NvbG9yKSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90Ml93KSB2YXIoLS1ncmFkaWVudF9zcG90Ml9oKSBhdCBsZWZ0XG4gICAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QyX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90Ml95KSxcbiAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QyX2NvbG9yKSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90M193KSB2YXIoLS1ncmFkaWVudF9zcG90M19oKSBhdCBsZWZ0XG4gICAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QzX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90M195KSxcbiAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QzX2NvbG9yKSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90NF93KSB2YXIoLS1ncmFkaWVudF9zcG90NF9oKSBhdCBsZWZ0XG4gICAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3Q0X3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90NF95KSxcbiAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3Q0X2NvbG9yKSxcbiAgICAgIHRyYW5zcGFyZW50XG4gICAgKTtcbn1cblxuLyogXG4gIC5hbmltYXRlZCB7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuQGtleWZyYW1lcyBjaGFtZWxlb24ge1xuXG4gICAgMCUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IxKTtcbiAgICB9XG4gICAgMTQuMjk5OSUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IyKTtcbiAgICB9XG4gICAgMjguNTk5OSUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IzKTtcbiAgICB9XG4gICAgNDIuODk5OCUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I0KTtcbiAgICB9XG4gICAgNTcuMTk5NiUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I1KTtcbiAgICB9XG4gICAgNzEuNDk5NSUge1xuICAgICAgY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I2KTtcbiAgICB9XG4gICAgODUuNzk5NCUge1xuICAgICAgY29sb3I6IHZpb2xldDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxuICAuY2hhbWVsZW9uIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2hhbWVsZW9uO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIH0gICovXG4vKiBUTyBVU0UsIEFERCBDTEFTUyBBTklNQVRFIEFORCBDTEFTUyBDSEFNRUxFT04gKi9cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzIyMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSksIGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogODV2aDtcbiAgd2lkdGg6IDg1dnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCAyNDMsIDI0OCwgMC42MjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2IDI0MyAyNDggLyA1NiUpOyAvKiBncmFkaWVudCBibGVuZCBpbnRvIGJnICAqL1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggZmxvcmFsd2hpdGU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDEuNWZyIDAuNWZyIDNmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnbmF2IGhlbGxvIHByb2poZWFkaW5nJ1xuICAgICduYXYgaW5mbyBwcm9qZWN0J1xuICAgICduYXYgaGVhZGluZyBwcm9qZWN0J1xuICAgICduYXYgdGFza2JveCBwcm9qZWN0JztcbiAgYm94LXNoYWRvdzpcbiAgICAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxuICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXG4gICAgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxuICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSxcbiAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4Nik7XG59XG5cbi5uYXYge1xuICBncmlkLWFyZWE6IG5hdjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAwcHggMzBweCAwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IGxpZ2h0Z3JheTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubmF2IC5sb2dvIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4vKiBzdHlpbmcgb2YgYnV0dG9ucyBvbiBkYXNoICovXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDAuOHJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzk0OTY5YjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ0bi1naXRodWIgYSB7XG4gIGNvbG9yOiAjOTQ5NjliO1xufVxuXG4uYnRuOmhvdmVyLFxuLmJ0bi1naXRodWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0YjViO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjZmY5NGVhO1xufVxuXG4uYnRuIGltZyB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaGVsbG8ge1xuICBncmlkLWFyZWE6IGhlbGxvO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFjYmZiOyAqL1xuICBjb2xvcjogIzMwMmIyYjtcbiAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltZy1oYW5kIHtcbiAgLyogd2lkdGg6IDE3JTsgKi9cbiAgd2lkdGg6IDc1cHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbmZvIHtcbiAgZ3JpZC1hcmVhOiBpbmZvO1xuXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzNiwyMjQsMjUzLDEpIDUxJSwgcmdiYSgyMzgsMjM4LDIzOCwxKSA5OSUpOyAgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyMzYsIDIyNCwgMjUzLCAxKSA1MSUsXG4gICAgcmdiYSgyNDYsIDIzNywgMjQzLCAxKSA5OSVcbiAgKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ViZTBmZjsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBib3gtc2hhZG93OlxuICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXG4gICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcbiAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXG4gICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpOyAgKi9cbn1cblxuLmluZm86OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAwZGVnLFxuICAgICAgcmdiYSgyMzYsIDIyNCwgMjUzLCAwLjEpIDExJSxcbiAgICAgIHJnYmEoMjQ2LCAyMzcsIDI0MywgMSkgOTklXG4gICAgKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG5cbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC8qIGJvcmRlcjogc29saWQgMXB4ICNjNmFkZjI7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmluZm8taXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGFlZjg7IC8qIGJlc3QgY29sb3VyIG9uIG1hY21pbmkgICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZjc2ZjM7IC8qIGJlc3QgY29sb3Igb24gbWFjYm9vayAqL1xuICBib3JkZXItbGVmdDogc29saWQgMnB4ICNjNmFkZjI7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjYzZhZGYyO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6XG4gICAgMCAycHggNHB4ICMzYTQ3NGUyNixcbiAgICAwIDFweCAycHggIzNhNDc0ZTI2O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uaW5mbyBzcGFuIHtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uaW5mby1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZhZGYyO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYjQ5MWYxOyAqL1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA1cHggd2hpdGVzbW9rZTtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjZDFiY2Y4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2QxYmNmODtcbn1cblxuLmhlYWRpbmcge1xuICBncmlkLWFyZWE6IGhlYWRpbmc7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6I2VkZTVmZDsgKi9cbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBnYXA6IDVweDtcbn1cblxuLyogQUxMIFBST0pFQ1RTIERJU1BMQVkgKi9cbi50YXNrYm94IHtcbiAgZ3JpZC1hcmVhOiB0YXNrYm94O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuXG4gIHBlcnNwZWN0aXZlOiA2MHJlbTtcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLyogYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDsgKi9cbiAgLyogYm94LXNoYWRvdzpcbiAgICAwIDJweCA0cHggIzNhNDc0ZTI2LFxuICAgIDAgMXB4IDJweCAjM2E0NzRlMjY7ICovXG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzZGVnLCByZ2JhKDIwNCwxNjksMjI2LDEpIDAlLCByZ2JhKDIyNywxNTksMjA5LDAuNzYzNzY0ODgwOTUyMzgwOSkgNDYlLCByZ2JhKDI1MywxNDcsMTkwLDEpIDEwMCUpO1xuXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDNkZWcsIHJnYmEoMjA0LDE2OSwyMjYsMSkgMCUsIHJnYmEoMjI3LDE1OSwyMDksMC43NjM3NjQ4ODA5NTIzODA5KSA0NiUsICNmZWUwZDcgMTAwJSk7XG4gIC8qICNmZmQzYzYgKi9cblxuICAvKiBib3JkZXItbGVmdDogc29saWQgMnB4ICNmYmRlZDc7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmJkZWQ3OyAqL1xuXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcblxuICB0cmFuc2l0aW9uOlxuICAgIHJvdGF0ZSA0MDBtcyxcbiAgICBzY2FsZSAyMDBtcztcbn1cblxuLnByb2plY3QtaXRlbTpob3ZlciAge1xuICByb3RhdGU6IHkgMjBkZWc7XG4gIHNjYWxlOiAxLjA1O1xuICAgIH1cblxuLnByb2plY3QtaXRlbSBoNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM0ZjM0NmI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB6LWluZGV4OiA1O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbnAucHJvamVjdC1pdGVtLXRhc2tubyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbnAucHJvamVjdC1pdGVtLXRhc2tubzpudGgtY2hpbGQoMikge1xuICAvKiBib3JkZXItYm90dG9tOiAycHggc29saWQ7ICovXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cblxuXG5kaXYucHJvamVjdC1pdGVtLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiBcbn1cbmJ1dHRvbi5wcm9qZWN0LWl0ZW0tZGVsYnRuIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4vKiBQUk9KRUNUIFNFQ1RJT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnByb2poZWFkaW5nIHtcbiAgZ3JpZC1hcmVhOiBwcm9qaGVhZGluZztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcblxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4ucHJvamVjdCB7XG4gIGdyaWQtYXJlYTogcHJvamVjdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogLTVweCAtNDZweCA1OHB4IC0yMHB4IGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgOTUlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbmgyLnByb2plY3QtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3QgaDMsXG4uZ3JhZGllbnQtaDMge1xuICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLyogY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I1KTsgKi9cbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpOyAqL1xuXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmYTgzZmMsICNjYWJjZmIpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIGRldGFpbHMgKi9cbi5wcm9qZWN0LXRhc2staXRlbSB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIC8qIGJhY2tncm91bmQ6IHJnYigyNTAsIDI0OCwgMjA4KTsgIHBvc3RpdCBjb2xvdXIgKi9cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6XG4gICAgMCAycHggNHB4ICMzYTQ3NGUyNixcbiAgICAwIDFweCAycHggIzNhNDc0ZTI2O1xufVxuXG4ucHJvamVjdC10YXNrLWl0ZW0gbGFiZWwsXG4ucHJvamVjdC10YXNrLWl0ZW0gcCxcbi5wcm9qZWN0LXRhc2staXRlbSBwIHNwYW4ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG59XG4ucHJvamVjdC10YXNrLWl0ZW0gbGFiZWw6Zm9jdXMtdmlzaWJsZSxcbi5wcm9qZWN0LXRhc2staXRlbSBwOmZvY3VzLXZpc2libGUsXG4ucHJvamVjdC10YXNrLWl0ZW0gc3Bhbjpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmYTgzZmM7XG59XG5cbipbY29udGVudGVkaXRhYmxlPSd0cnVlJ10ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC00cHg7XG4gIGNhcmV0LWNvbG9yOiAjYWY3NmYzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZ2FwOiA1cHg7XG59XG4udGFza2NoZWNrYm94IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4ucHJvamVjdC10YXNrLXByaW9yaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjYpO1xuICBjb2xvcjogIzAwOGI5MjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxcHggMTVweDtcblxuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4ICMwMDAwMDAyZTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDBweCAjNzk0ODVmN2E7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG59XG5cbmRldGFpbHMuZWRpdC1tb2RlIC5wcm9qZWN0LXRhc2stcHJpb3JpdHkge1xuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7ICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZWRpdC1tb2RlIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxubGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubG93UHJpb3JpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM5NWQ4OTEsICM3NGJiYWQpO1xufVxuXG4uaGlnaFByaW9yaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjMpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjhhZWY5LCAjY2FiY2ZiKTtcbn1cblxuLm1lZFByaW9yaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDNhM2U4LCAjMGVkYmRkKTtcbn1cblxuLnByb2plY3QtdGFzay1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnByb2plY3QtdGFzay1kdWVkYXRlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBjb2xvcjogI2NkOGNmZTtcbiAgY29sb3I6ICM5ZDRlZDg7XG59XG4ucHJvamVjdC10YXNrLWR1ZWRhdGUgc3BhbiB7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG5cbi5kYXRlLXBhZGRpbmcge1xuICBwYWRkaW5nOiA1cHggNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9qZWN0LXRhc2staW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC10YXNrLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzZWxmLWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbn1cblxuLnByb2plY3QtdGFzay1mb290ZXIgaW1nIHtcbiAgcGFkZGluZzogOHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5wcm9qZWN0LXRhc2stZm9vdGVyIGltZzpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsLFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcbiAgY29sb3I6IHZhcigtLW1lZEdyZXkpO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50O1xufVxuXG4vKiBQT1AgVVBTLyBNT0RBTFMgICovXG5cbi8qIENyZWF0ZS8gQWRkIE5ldy4uLiAgKi9cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiAzNTBweDtcbiAgLyogcGFkZGluZzogMS4zcmVtOyAqL1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiB0b3A6IDIwJTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgYm9yZGVyOiAzcHggc29saWQgI2ZiZDRmYztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgei1pbmRleDogMjtcblxuICBib3gtc2hhZG93OlxuICAgIDBweCA0M3B4IDc5cHggLTIwcHggI2FmODZjMCxcbiAgICAzNHB4IC0xMnB4IDgwcHggLTIwcHggI2ZjZDdlNGQ0O1xuXG4gIGJveC1zaGFkb3c6XG4gICAgLTMxcHggMjBweCA2M3B4IC0yMHB4ICNhZjg2YzAsXG4gICAgMTNweCAtMzVweCA2M3B4IC0ycHggI2ZjZDdlNGZhO1xufVxuXG4uY3JlYXRlLW1vZGFsLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTUycHg7XG4gIGxlZnQ6IDQ0JTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogc29saWQgNHB4ICNmYmQ0ZmM7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLm1vZGFsIGgzIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMTBweDtcbn1cblxuLm1vZGFsIC5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYSB7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tb2RhbCBpbnB1dCxcbnNlbGVjdCNwcm9qRHJvcGRvd24ge1xuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm1vZGFsIHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM3Nzc7XG4gIG1hcmdpbjogMC40cmVtIDAgMC4ycmVtO1xufVxuXG4uY3JlYXRlLW1vZGFsLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5zZWxlY3QjcHJvakRyb3Bkb3duIHtcbiAgLyogd2lkdGg6IDIwMHB4OyAqL1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICNmYmQ0ZmM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiBzb2xpZCAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jcmVhdGUtbW9kYWwtYnV0dG9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjNDNhM2U4LCAjMGVkYmRkKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbiBpbWcge1xuICB3aWR0aDogMjVweDtcbn1cblxuYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggI2ZiZDRmYztcbn1cblxuLmJ0bi1jbG9zZSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgOTcsIDgyLCAwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgei1pbmRleDogMTtcbn1cblxuaW5wdXQjdGFza0R1ZWRhdGUge1xuICB3aWR0aDogNDclO1xufVxuXG4vKiBQUklPUklUWSBSQURJTyBJTiBORVdUQVNLIEZPUk0gKi9cbi50YXNrUHJpb3JpdHlfcmFkaW8ge1xuICBiYWNrZ3JvdW5kOiAjNDU0ODU3O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6XG4gICAgaW5zZXQgMCAwIDAgM3B4IHJnYmEoMzUsIDMzLCA0NSwgMC4zKSxcbiAgICAwIDAgMCAzcHggcmdiYSgxODUsIDE4NSwgMTg1LCAwLjMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAyMHB4IDBweCAtMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YXNrRWRpdFByaW9yaXR5IHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiB1bnNldDtcbiAgZ2FwOiA1cHg7XG59XG5cbi50YXNrUHJpb3JpdHlfcmFkaW8gaW5wdXQge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcblxuICBiYWNrZ3JvdW5kOiAjNDU0ODU3O1xuICBjb2xvcjogI2JkYmRiZGJkO1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTpcbiAgICBzeXN0ZW0tdWksXG4gICAgLWFwcGxlLXN5c3RlbSxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgJ1NlZ29lIFVJJyxcbiAgICBSb2JvdG8sXG4gICAgJ0hlbHZldGljYSBOZXVlJyxcbiAgICBBcmlhbCxcbiAgICAnTm90byBTYW5zJyxcbiAgICBzYW5zLXNlcmlmLFxuICAgICdBcHBsZSBDb2xvciBFbW9qaScsXG4gICAgJ1NlZ29lIFVJIEVtb2ppJyxcbiAgICAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgICAnTm90byBDb2xvciBFbW9qaSc7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBsaW5lYXI7XG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7ICovXG59XG5cbi50YXNrUHJpb3JpdHlfcmFkaW8gaW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM5NWQ4OTEsICM3NGJiYWQpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4ICMwMDAwMDAyZTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDBweCAjNzk0ODVmN2E7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi50YXNrUHJpb3JpdHlfcmFkaW8gaW5wdXQjdGFza1ByaW9yaXR5X21lZDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQzYTNlOCwgIzBlZGJkZCk7XG59XG5cbi50YXNrUHJpb3JpdHlfcmFkaW8gaW5wdXQjdGFza1ByaW9yaXR5X2hpZ2g6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmOGFlZjksICNjYWJjZmIpO1xufVxuXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIobGFiZWwpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24uZ3JhZGllbnQtaDMge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi8qIFRhc2svUHJvamVjdCBTd2l0Y2hlciBpbnNpZGUgTW9kYWwgKi9cbmRpdi5jcmVhdGUtbW9kYWwtc2VsZWN0LXR5cGUge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OlxuICAgIGluc2V0IDAgMCAwIDNweCByZ2IoMzUgMzMgNDUgLyAwJSksXG4gICAgMCAwIDAgM3B4IHJnYigxODUgMTg1IDE4NSAvIDE2JSk7XG59XG5cbi8qc2VsZWN0ZWQgc2lkZSovXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM0MjQyNDI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qICBiZyBvZiBUYXNrIHdoZW4gbm90IHNlbGVjdGVkKi9cbmxhYmVsLnRvZ2dsZUlucHV0LXN3aXRjaC1pbm5lciB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBwaW5rLCBsYXZlbmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIHRleHQgb2YgVGFzayB3aGVuIG5vdCBzZWxlY3RlZCAgKi9cbmxhYmVsLnRvZ2dsZUlucHV0LXN3aXRjaC1pbm5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLW9uKTsgLyogVGFzayAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdG9wOiA3cHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLyogIHByb2plY3Qgc2VsZWN0ZWQgKi9cbmxhYmVsLnRvZ2dsZUlucHV0LXN3aXRjaC1pbm5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTsgLyogUHJvamVjdCAqL1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDJweDtcbiAgdG9wOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLyogYm94LXNoYWRvdzogMHB4IDBweCA2cHggLTJweCAjMTExOyAqL1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG5pbnB1dCN0b2dnbGVJbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjhweDtcbiAgbGVmdDogNDQlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDBweDtcbn1cblxuLyogIHNldCBiZyBhbmQgdGV4dCBvbiBwcm9qZWN0LCBub3Qgc2VsZWN0ZWQgKi9cbmlucHV0I3RvZ2dsZUlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsLnRvZ2dsZUlucHV0LXN3aXRjaC1pbm5lciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcGluaywgbGF2ZW5kZXIpO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLyogIFNldHMgYmcgb2YgVGFzayB3aGVuIHNlbGVjdGVkKi9cbmlucHV0I3RvZ2dsZUlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZFxuICArIGxhYmVsLnRvZ2dsZUlucHV0LXN3aXRjaC1pbm5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qVGFza3MqL1xuICBsZWZ0OiA2OHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dCN0b2dnbGVJbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWRcbiAgKyBsYWJlbC50b2dnbGVJbnB1dC1zd2l0Y2gtaW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLW9mZik7IC8qUHJvamVjdCAqL1xuICByaWdodDogYXV0bztcbiAgbGVmdDogMjBweDtcbn1cblxuLmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhIGlucHV0W3R5cGU9J3RleHQnXTpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogc29saWQgM3B4ICNhZjc2ZjMzMztcbiAgYm9yZGVyOiBzb2xpZCAxLjVweCByZ2JhKDIzNCwgMTAwLCAyMTcsIDAuNCk7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDEycHg7ICovXG59XG5cbi8qIFRhc2sgQ2hlY2tlZCBPZmYgVG9nZ2xlICovXG4udGFzay1jaGVja2JveCB7XG4gIC0tdGV4dDogIzQxNDg1NjtcbiAgLS1jaGVjazogI2FmNzZmMztcbiAgLS1kaXNhYmxlZDogI2MzYzhkZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRhc2stY2hlY2tib3ggbGFiZWwge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50YXNrLWNoZWNrYm94IGxhYmVsOjpiZWZvcmUsIC8qIGRhc2ggKi9cbi50YXNrLWNoZWNrYm94IGxhYmVsOjphZnRlciB7XG4gIC8qIHRpY2sgKi9cbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi50YXNrLWNoZWNrYm94IGxhYmVsOjpiZWZvcmUge1xuICAvKiBkYXNoICovXG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMTNweDtcbiAgbGVmdDogLTI3cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbn1cbi50YXNrLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgLyogdGljayAqL1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDRweDtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IC0yNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDAgMTVweCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUsXG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMnB4O1xuICB0b3A6IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcbiAgd2lkdGg6IDBweDtcbiAgcmlnaHQ6IDYwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xufVxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YWZ0ZXIge1xuICB3aWR0aDogMHB4O1xuICBsZWZ0OiA0MCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xufVxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2stMDEtMTEgMC40cyBlYXNlIGZvcndhcmRzO1xuICBhbmltYXRpb246IGNoZWNrLTAxLTExIDAuNHMgZWFzZSBmb3J3YXJkcztcbn1cbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2stMDItMTEgMC40cyBlYXNlIGZvcndhcmRzO1xuICBhbmltYXRpb246IGNoZWNrLTAyLTExIDAuNHMgZWFzZSBmb3J3YXJkcztcbn1cbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWRpc2FibGVkKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtMTEgMC4zcyBlYXNlIDAuMXMgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbjogbW92ZS0xMSAwLjNzIGVhc2UgMC4xcyBmb3J3YXJkcztcbn1cbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGljZS0xMSAwLjRzIGVhc2UgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbjogc2xpY2UtMTEgMC40cyBlYXNlIGZvcndhcmRzO1xufVxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZpcmV3b3JrLTExIDAuNXMgZWFzZSBmb3J3YXJkcyAwLjFzO1xuICBhbmltYXRpb246IGZpcmV3b3JrLTExIDAuNXMgZWFzZSBmb3J3YXJkcyAwLjFzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS0xMSB7XG4gIDUwJSB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmUtMTEge1xuICA1MCUge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzbGljZS0xMSB7XG4gIDYwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogNHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IC0ycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWNlLTExIHtcbiAgNjAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiA0cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogLTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBjaGVjay0wMS0xMSB7XG4gIDAlIHtcbiAgICB3aWR0aDogNHB4O1xuICAgIHRvcDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUxJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0b3A6IDhweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDVweDtcbiAgICB0b3A6IDhweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2hlY2stMDEtMTEge1xuICAwJSB7XG4gICAgd2lkdGg6IDRweDtcbiAgICB0b3A6IGF1dG87XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRvcDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICA1MSUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgdG9wOiA4cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiA1cHg7XG4gICAgdG9wOiA4cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgY2hlY2stMDItMTEge1xuICAwJSB7XG4gICAgd2lkdGg6IDRweDtcbiAgICB0b3A6IGF1dG87XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRvcDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICA1MSUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgdG9wOiA4cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICB0b3A6IDhweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNoZWNrLTAyLTExIHtcbiAgMCUge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0b3A6IGF1dG87XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgNTElIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRvcDogOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgdG9wOiA4cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZpcmV3b3JrLTExIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm94LXNoYWRvdzpcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMDtcbiAgfVxuICAzMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3gtc2hhZG93OlxuICAgICAgMCAtMTVweCAwIDBweCAjNGYyOWYwLFxuICAgICAgMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjAsXG4gICAgICAxNHB4IDhweCAwIDBweCAjNGYyOWYwLFxuICAgICAgMCAxNXB4IDAgMHB4ICM0ZjI5ZjAsXG4gICAgICAtMTRweCA4cHggMCAwcHggIzRmMjlmMCxcbiAgICAgIC0xNHB4IC04cHggMCAwcHggIzRmMjlmMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmaXJld29yay0xMSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJveC1zaGFkb3c6XG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjA7XG4gIH1cbiAgMzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm94LXNoYWRvdzpcbiAgICAgIDAgLTE1cHggMCAwcHggIzRmMjlmMCxcbiAgICAgIDE0cHggLThweCAwIDBweCAjNGYyOWYwLFxuICAgICAgMTRweCA4cHggMCAwcHggIzRmMjlmMCxcbiAgICAgIDAgMTVweCAwIDBweCAjNGYyOWYwLFxuICAgICAgLTE0cHggOHB4IDAgMHB4ICM0ZjI5ZjAsXG4gICAgICAtMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjA7XG4gIH1cbn1cblxuLyogV09CQkxFIEVGRkVDVCBPTiBCSU4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBodnItd29iYmxlLXRvcCB7XG4gIDE2LjY1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcbiAgfVxuICAzMy4zJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMTBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tldygxMGRlZyk7XG4gIH1cbiAgNDkuOTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtNmRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3KC02ZGVnKTtcbiAgfVxuICA2Ni42JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoNGRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xuICB9XG4gIDgzLjI1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTJkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tldygtMmRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMCk7XG4gICAgdHJhbnNmb3JtOiBza2V3KDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGh2ci13b2JibGUtdG9wIHtcbiAgMTYuNjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMTJkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tldygtMTJkZWcpO1xuICB9XG4gIDMzLjMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygxMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3KDEwZGVnKTtcbiAgfVxuICA0OS45NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC02ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTZkZWcpO1xuICB9XG4gIDY2LjYlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldyg0ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoNGRlZyk7XG4gIH1cbiAgODMuMjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMmRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0yZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygwKTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoMCk7XG4gIH1cbn1cbi5odnItd29iYmxlLXRvcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbn1cbi5odnItd29iYmxlLXRvcDpob3Zlcixcbi5odnItd29iYmxlLXRvcDpmb2N1cyxcbi5odnItd29iYmxlLXRvcDphY3RpdmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBodnItd29iYmxlLXRvcDtcbiAgYW5pbWF0aW9uLW5hbWU6IGh2ci13b2JibGUtdG9wO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG59XG5cbi8qIFdhdmluZyBIYW5kIEhvdmVyICovXG4ud2F2ZTpob3ZlciB7XG4gIGFuaW1hdGlvbi1uYW1lOiB3YXZlLWFuaW1hdGlvbjsgLyogUmVmZXJzIHRvIHRoZSBuYW1lIG9mIHlvdXIgQGtleWZyYW1lcyBlbGVtZW50IGJlbG93ICovXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMi41czsgLyogQ2hhbmdlIHRvIHNwZWVkIHVwIG9yIHNsb3cgZG93biAqL1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgLyogTmV2ZXIgc3RvcCB3YXZpbmcgOikgKi9cbiAgdHJhbnNmb3JtLW9yaWdpbjogNzAlIDcwJTsgLyogUGl2b3QgYXJvdW5kIHRoZSBib3R0b20tbGVmdCBwYWxtICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuQGtleWZyYW1lcyB3YXZlLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTtcbiAgfSAvKiBUaGUgZm9sbG93aW5nIGZpdmUgdmFsdWVzIGNhbiBiZSBwbGF5ZWQgd2l0aCB0byBtYWtlIHRoZSB3YXZpbmcgbW9yZSBvciBsZXNzIGV4dHJlbWUgKi9cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNGRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfSAvKiBSZXNldCBmb3IgdGhlIGxhc3QgaGFsZiB0byBwYXVzZSAqL1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuXG4vKiBHcm93IFNoYWRvdyAqL1xuLmh2ci1ncm93LXNoYWRvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgdHJhbnNmb3JtO1xufVxuLmh2ci1ncm93LXNoYWRvdzpob3Zlcixcbi5odnItZ3Jvdy1zaGFkb3c6Zm9jdXMsXG4uaHZyLWdyb3ctc2hhZG93OmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuaGVhZGVyLmhlbGxvIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2NXB4KSB7XG4gIGRpdi5jb250YWluZXIge1xuICAgIHdpZHRoOiA5OHZ3O1xuICAgIGhlaWdodDogOTh2aDtcbiAgfVxufVxuXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgaGVhZGVyLmhlbGxvIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFBc0I7QUFDdEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHdCQUF3Qjs7RUFFeEIsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHdCQUF3Qjs7RUFFeEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIs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WTtFQUNkO0FBQ0Y7O0FBRUE7Ozs7R0FJR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDU1MgZm9yIFRvRG8gTGlzdCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ051bml0byc7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZ3JhZGllbnRfYmdfY29sb3I6ICNlZGU1ZmQ7XFxuICAtLWdyYWRpZW50X3Nwb3QxX2NvbG9yOiAjZTFjYmZiO1xcbiAgLS1ncmFkaWVudF9zcG90MV93OiA3NSU7XFxuICAtLWdyYWRpZW50X3Nwb3QxX2g6IDc1JTtcXG4gIC0tZ3JhZGllbnRfc3BvdDFfeDogMCU7XFxuICAtLWdyYWRpZW50X3Nwb3QxX3k6IDAlO1xcbiAgLS1ncmFkaWVudF9zcG90Ml9jb2xvcjogI2ZmZTBkNjtcXG4gIC0tZ3JhZGllbnRfc3BvdDJfdzogNzUlO1xcbiAgLS1ncmFkaWVudF9zcG90Ml9oOiA3NSU7XFxuICAtLWdyYWRpZW50X3Nwb3QyX3g6IDEwMCU7XFxuICAtLWdyYWRpZW50X3Nwb3QyX3k6IDAlO1xcbiAgLS1ncmFkaWVudF9zcG90M19jb2xvcjogI2ViZTBmZjtcXG4gIC0tZ3JhZGllbnRfc3BvdDNfdzogNzUlO1xcbiAgLS1ncmFkaWVudF9zcG90M19oOiA3NSU7XFxuICAtLWdyYWRpZW50X3Nwb3QzX3g6IDEwMCU7XFxuICAtLWdyYWRpZW50X3Nwb3QzX3k6IDEwMCU7XFxuXFxuICAtLWdyYWRpZW50X3Nwb3Q0X2NvbG9yOiAjZmZkYmYzO1xcbiAgLS1ncmFkaWVudF9zcG90NF93OiA3NSU7XFxuICAtLWdyYWRpZW50X3Nwb3Q0X2g6IDc1JTtcXG4gIC0tZ3JhZGllbnRfc3BvdDRfeDogMCU7XFxuICAtLWdyYWRpZW50X3Nwb3Q0X3k6IDEwMCU7XFxuXFxuICAtLWdyYWRpZW50X3Nwb3QyX3c6IDEwMCU7XFxuICAtLWdyYWRpZW50X3Nwb3QyX3g6IDk0JTtcXG4gIC0tZ3JhZGllbnRfc3BvdDJfaDogNDQlO1xcbiAgLS1ncmFkaWVudF9zcG90MV93OiA1MSU7XFxuICAtLWdyYWRpZW50X3Nwb3QxX2g6IDY0JTtcXG4gIC0tZ3JhZGllbnRfc3BvdDFfeDogNyU7XFxuICAtLWdyYWRpZW50X3Nwb3QzX3c6IDEwMCU7XFxuICAtLWdyYWRpZW50X3Nwb3QzX2g6IDgyJTtcXG4gIC0tZ3JhZGllbnRfc3BvdDNfeDogOTAlO1xcbiAgLS1ncmFkaWVudF9zcG90NF93OiA2NCU7XFxuICAtLWdyYWRpZW50X3Nwb3Q0X3g6IDAlO1xcbiAgLS1ncmFkaWVudF9zcG90NF95OiA0NSU7XFxuXFxuICAvKiBQcm9qZWN0IENvbG91cnMgKi9cXG4gIC0tcHJvamVjdF9jb2xvcjE6ICNmZmVkZDY7XFxuICAtLXByb2plY3RfY29sb3IyOiAjZmZjYjlhO1xcbiAgLS1wcm9qZWN0X2NvbG9yMzogI2Y4YWVmOTtcXG4gIC0tcHJvamVjdF9jb2xvcjQ6ICNiOGRiZmQ7XFxuICAtLXByb2plY3RfY29sb3I1OiAjYzhiYWZhO1xcbiAgLS1wcm9qZWN0X2NvbG9yNjogIzhmZTRlOTtcXG5cXG4gIC0tZGFya0dyZXk6ICMyNTJiM2Q7XFxuICAtLW1lZEdyZXk6ICM5NDk2OWI7XFxuICAtLWxpZ2h0R3JleTogI2VlZTtcXG59XFxuXFxuLndlbGNvbWUtdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tcHJvamVjdF9jb2xvcjQpIDMwJSwgdmFyKC0tcHJvamVjdF9jb2xvcjYpIDEwMCUpOyAqL1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG5cXG4gIC8qIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmYTgzZmMsICNjYWJjZmIpOyAqL1xcbiAgLyogYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyAqL1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbiAgc3JjOlxcbiAgICB1cmwoJy4vZm9udHMvTnVuaXRvLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgnb3BlbnR5cGUnKSxcXG4gICAgdXJsKCcuL2ZvbnRzL051bml0by1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCdvcGVudHlwZScpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uZmFuY3ktZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JhZGllbnRfYmdfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QxX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QxX2gpIGF0IGxlZnRcXG4gICAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QxX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90MV95KSxcXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90MV9jb2xvciksXFxuICAgICAgdHJhbnNwYXJlbnRcXG4gICAgKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QyX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QyX2gpIGF0IGxlZnRcXG4gICAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QyX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90Ml95KSxcXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90Ml9jb2xvciksXFxuICAgICAgdHJhbnNwYXJlbnRcXG4gICAgKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QzX3cpIHZhcigtLWdyYWRpZW50X3Nwb3QzX2gpIGF0IGxlZnRcXG4gICAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3QzX3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90M195KSxcXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90M19jb2xvciksXFxuICAgICAgdHJhbnNwYXJlbnRcXG4gICAgKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3Q0X3cpIHZhcigtLWdyYWRpZW50X3Nwb3Q0X2gpIGF0IGxlZnRcXG4gICAgICAgIHZhcigtLWdyYWRpZW50X3Nwb3Q0X3gpIHRvcCB2YXIoLS1ncmFkaWVudF9zcG90NF95KSxcXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90NF9jb2xvciksXFxuICAgICAgdHJhbnNwYXJlbnRcXG4gICAgKTtcXG59XFxuXFxuLyogXFxuICAuYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgfVxcbkBrZXlmcmFtZXMgY2hhbWVsZW9uIHtcXG5cXG4gICAgMCUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMSk7XFxuICAgIH1cXG4gICAgMTQuMjk5OSUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMik7XFxuICAgIH1cXG4gICAgMjguNTk5OSUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMyk7XFxuICAgIH1cXG4gICAgNDIuODk5OCUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNCk7XFxuICAgIH1cXG4gICAgNTcuMTk5NiUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNSk7XFxuICAgIH1cXG4gICAgNzEuNDk5NSUge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XFxuICAgIH1cXG4gICAgODUuNzk5NCUge1xcbiAgICAgIGNvbG9yOiB2aW9sZXQ7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbiAgfVxcbiAgLmNoYW1lbGVvbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFtZWxlb247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgfSAgKi9cXG4vKiBUTyBVU0UsIEFERCBDTEFTUyBBTklNQVRFIEFORCBDTEFTUyBDSEFNRUxFT04gKi9cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6ICMyMjI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjdXJzb3I6IHVybCgnLi9pbWFnZXMvY3Vyc29yMTYucG5nJyksIGF1dG87XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDg1dmg7XFxuICB3aWR0aDogODV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCAyNDMsIDI0OCwgMC42MjIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiAyNDMgMjQ4IC8gNTYlKTsgLyogZ3JhZGllbnQgYmxlbmQgaW50byBiZyAgKi9cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCBmbG9yYWx3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDEuNWZyIDAuNWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICduYXYgaGVsbG8gcHJvamhlYWRpbmcnXFxuICAgICduYXYgaW5mbyBwcm9qZWN0J1xcbiAgICAnbmF2IGhlYWRpbmcgcHJvamVjdCdcXG4gICAgJ25hdiB0YXNrYm94IHByb2plY3QnO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXG4gICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcXG4gICAgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxcbiAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXFxuICAgIDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KTtcXG59XFxuXFxuLm5hdiB7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW46IDBweCAzMHB4IDBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCBsaWdodGdyYXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uYXYgLmxvZ28ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG59XFxuXFxuLyogc3R5aW5nIG9mIGJ1dHRvbnMgb24gZGFzaCAqL1xcbi5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzk0OTY5YjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1naXRodWIgYSB7XFxuICBjb2xvcjogIzk0OTY5YjtcXG59XFxuXFxuLmJ0bjpob3ZlcixcXG4uYnRuLWdpdGh1Yjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0YjViO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItbGVmdDogc29saWQgNXB4ICNmZjk0ZWE7XFxufVxcblxcbi5idG4gaW1nIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgZ3JpZC1hcmVhOiBoZWxsbztcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMWNiZmI7ICovXFxuICBjb2xvcjogIzMwMmIyYjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1nLWhhbmQge1xcbiAgLyogd2lkdGg6IDE3JTsgKi9cXG4gIHdpZHRoOiA3NXB4O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5pbmZvIHtcXG4gIGdyaWQtYXJlYTogaW5mbztcXG5cXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzNiwyMjQsMjUzLDEpIDUxJSwgcmdiYSgyMzgsMjM4LDIzOCwxKSA5OSUpOyAgKi9cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMGRlZyxcXG4gICAgcmdiYSgyMzYsIDIyNCwgMjUzLCAxKSA1MSUsXFxuICAgIHJnYmEoMjQ2LCAyMzcsIDI0MywgMSkgOTklXFxuICApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlMGZmOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLyogYm94LXNoYWRvdzpcXG4gICAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXG4gICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcXG4gICAgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxcbiAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3Mik7ICAqL1xcbn1cXG5cXG4uaW5mbzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDBkZWcsXFxuICAgICAgcmdiYSgyMzYsIDIyNCwgMjUzLCAwLjEpIDExJSxcXG4gICAgICByZ2JhKDI0NiwgMjM3LCAyNDMsIDEpIDk5JVxcbiAgICApLFxcbiAgICB1cmwoJy9zcmMvaW1hZ2VzL2xvdy1wb2x5LWdyaWQtaGFpa2VpLnBuZycpO1xcblxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwcHggMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC8qIGJvcmRlcjogc29saWQgMXB4ICNjNmFkZjI7ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBib3R0b206IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmluZm8taXRlbSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhhZWY4OyAvKiBiZXN0IGNvbG91ciBvbiBtYWNtaW5pICAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmNzZmMzsgLyogYmVzdCBjb2xvciBvbiBtYWNib29rICovXFxuICBib3JkZXItbGVmdDogc29saWQgMnB4ICNjNmFkZjI7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2M2YWRmMjtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgMCAycHggNHB4ICMzYTQ3NGUyNixcXG4gICAgMCAxcHggMnB4ICMzYTQ3NGUyNjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLmluZm8gc3BhbiB7XFxuICBmb250LXNpemU6IDE5cHg7XFxufVxcblxcbi5pbmZvLWl0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2YWRmMjtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNiNDkxZjE7ICovXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA1cHggd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2QxYmNmODtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZDFiY2Y4O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBncmlkLWFyZWE6IGhlYWRpbmc7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNlZGU1ZmQ7ICovXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi8qIEFMTCBQUk9KRUNUUyBESVNQTEFZICovXFxuLnRhc2tib3gge1xcbiAgZ3JpZC1hcmVhOiB0YXNrYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFxuICBwZXJzcGVjdGl2ZTogNjByZW07XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDhweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC8qIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7ICovXFxuICAvKiBib3gtc2hhZG93OlxcbiAgICAwIDJweCA0cHggIzNhNDc0ZTI2LFxcbiAgICAwIDFweCAycHggIzNhNDc0ZTI2OyAqL1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0M2RlZywgcmdiYSgyMDQsMTY5LDIyNiwxKSAwJSwgcmdiYSgyMjcsMTU5LDIwOSwwLjc2Mzc2NDg4MDk1MjM4MDkpIDQ2JSwgcmdiYSgyNTMsMTQ3LDE5MCwxKSAxMDAlKTtcXG5cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDNkZWcsIHJnYmEoMjA0LDE2OSwyMjYsMSkgMCUsIHJnYmEoMjI3LDE1OSwyMDksMC43NjM3NjQ4ODA5NTIzODA5KSA0NiUsICNmZWUwZDcgMTAwJSk7XFxuICAvKiAjZmZkM2M2ICovXFxuXFxuICAvKiBib3JkZXItbGVmdDogc29saWQgMnB4ICNmYmRlZDc7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZiZGVkNzsgKi9cXG5cXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjM2E0NzRlMjYsIDAgMXB4IDJweCAjM2E0NzRlMjY7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxuXFxuICB0cmFuc2l0aW9uOlxcbiAgICByb3RhdGUgNDAwbXMsXFxuICAgIHNjYWxlIDIwMG1zO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyICB7XFxuICByb3RhdGU6IHkgMjBkZWc7XFxuICBzY2FsZTogMS4wNTtcXG4gICAgfVxcblxcbi5wcm9qZWN0LWl0ZW0gaDUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICM0ZjM0NmI7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB6LWluZGV4OiA1O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5wLnByb2plY3QtaXRlbS10YXNrbm8ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxufVxcbnAucHJvamVjdC1pdGVtLXRhc2tubzpudGgtY2hpbGQoMikge1xcbiAgLyogYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkOyAqL1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5kaXYucHJvamVjdC1pdGVtLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuIFxcbn1cXG5idXR0b24ucHJvamVjdC1pdGVtLWRlbGJ0biB7XFxuICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuLyogUFJPSkVDVCBTRUNUSU9OIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4ucHJvamhlYWRpbmcge1xcbiAgZ3JpZC1hcmVhOiBwcm9qaGVhZGluZztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG5cXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGdyaWQtYXJlYTogcHJvamVjdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IC01cHggLTQ2cHggNThweCAtMjBweCBsaWdodGdyZXk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2ltYWdlcy9jcnlzdGFscy5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgOTUlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5oMi5wcm9qZWN0LWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdCBoMyxcXG4uZ3JhZGllbnQtaDMge1xcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgLyogY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I1KTsgKi9cXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpOyAqL1xcblxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZhODNmYywgI2NhYmNmYik7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogZGV0YWlscyAqL1xcbi5wcm9qZWN0LXRhc2staXRlbSB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xcbiAgLyogYmFja2dyb3VuZDogcmdiKDI1MCwgMjQ4LCAyMDgpOyAgcG9zdGl0IGNvbG91ciAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogMTBweCAxMHB4O1xcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OlxcbiAgICAwIDJweCA0cHggIzNhNDc0ZTI2LFxcbiAgICAwIDFweCAycHggIzNhNDc0ZTI2O1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLWl0ZW0gbGFiZWwsXFxuLnByb2plY3QtdGFzay1pdGVtIHAsXFxuLnByb2plY3QtdGFzay1pdGVtIHAgc3BhbiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJvamVjdC10YXNrLWl0ZW0gbGFiZWw6Zm9jdXMtdmlzaWJsZSxcXG4ucHJvamVjdC10YXNrLWl0ZW0gcDpmb2N1cy12aXNpYmxlLFxcbi5wcm9qZWN0LXRhc2staXRlbSBzcGFuOmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmE4M2ZjO1xcbn1cXG5cXG4qW2NvbnRlbnRlZGl0YWJsZT0ndHJ1ZSddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtNHB4O1xcbiAgY2FyZXQtY29sb3I6ICNhZjc2ZjM7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBnYXA6IDVweDtcXG59XFxuLnRhc2tjaGVja2JveCB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLnByb2plY3QtdGFzay1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XFxuICBjb2xvcjogIzAwOGI5MjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxcHggMTVweDtcXG5cXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4ICMwMDAwMDAyZTtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAwcHggIzc5NDg1ZjdhO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmRldGFpbHMuZWRpdC1tb2RlIC5wcm9qZWN0LXRhc2stcHJpb3JpdHkge1xcbiAgLyogdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAqL1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5lZGl0LW1vZGUge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubG93UHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjQpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzk1ZDg5MSwgIzc0YmJhZCk7XFxufVxcblxcbi5oaWdoUHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjMpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y4YWVmOSwgI2NhYmNmYik7XFxufVxcblxcbi5tZWRQcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDNhM2U4LCAjMGVkYmRkKTtcXG59XFxuXFxuLnByb2plY3QtdGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDBweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRhc2stZHVlZGF0ZSB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgY29sb3I6ICNjZDhjZmU7XFxuICBjb2xvcjogIzlkNGVkODtcXG59XFxuLnByb2plY3QtdGFzay1kdWVkYXRlIHNwYW4ge1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG59XFxuXFxuLmRhdGUtcGFkZGluZyB7XFxuICBwYWRkaW5nOiA1cHggNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcm9qZWN0LXRhc2staW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGFzay1mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzZWxmLWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLWZvb3RlciBpbWcge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLWZvb3RlciBpbWc6aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsLFxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XFxuICBjb2xvcjogdmFyKC0tbWVkR3JleSk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBQT1AgVVBTLyBNT0RBTFMgICovXFxuXFxuLyogQ3JlYXRlLyBBZGQgTmV3Li4uICAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgLyogcGFkZGluZzogMS4zcmVtOyAqL1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvKiB0b3A6IDIwJTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZiZDRmYztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB6LWluZGV4OiAyO1xcblxcbiAgYm94LXNoYWRvdzpcXG4gICAgMHB4IDQzcHggNzlweCAtMjBweCAjYWY4NmMwLFxcbiAgICAzNHB4IC0xMnB4IDgwcHggLTIwcHggI2ZjZDdlNGQ0O1xcblxcbiAgYm94LXNoYWRvdzpcXG4gICAgLTMxcHggMjBweCA2M3B4IC0yMHB4ICNhZjg2YzAsXFxuICAgIDEzcHggLTM1cHggNjNweCAtMnB4ICNmY2Q3ZTRmYTtcXG59XFxuXFxuLmNyZWF0ZS1tb2RhbC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTUycHg7XFxuICBsZWZ0OiA0NCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQgNHB4ICNmYmQ0ZmM7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogNzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5tb2RhbCBoMyB7XFxuICBtYXJnaW46IDIwcHggYXV0byAxMHB4O1xcbn1cXG5cXG4ubW9kYWwgLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMiU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWwgaW5wdXQsXFxuc2VsZWN0I3Byb2pEcm9wZG93biB7XFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4ubW9kYWwgcCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgbWFyZ2luOiAwLjRyZW0gMCAwLjJyZW07XFxufVxcblxcbi5jcmVhdGUtbW9kYWwtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5zZWxlY3QjcHJvakRyb3Bkb3duIHtcXG4gIC8qIHdpZHRoOiAyMDBweDsgKi9cXG4gIGhlaWdodDogMzVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiAjZmJkNGZjO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDNweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM0M2EzZTgsICMwZWRiZGQpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uIGltZyB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggI2ZiZDRmYztcXG59XFxuXFxuLmJ0bi1jbG9zZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA1LCA5NywgODIsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbmlucHV0I3Rhc2tEdWVkYXRlIHtcXG4gIHdpZHRoOiA0NyU7XFxufVxcblxcbi8qIFBSSU9SSVRZIFJBRElPIElOIE5FV1RBU0sgRk9STSAqL1xcbi50YXNrUHJpb3JpdHlfcmFkaW8ge1xcbiAgYmFja2dyb3VuZDogIzQ1NDg1NztcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3gtc2hhZG93OlxcbiAgICBpbnNldCAwIDAgMCAzcHggcmdiYSgzNSwgMzMsIDQ1LCAwLjMpLFxcbiAgICAwIDAgMCAzcHggcmdiYSgxODUsIDE4NSwgMTg1LCAwLjMpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IDBweCAtMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tFZGl0UHJpb3JpdHkge1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiB1bnNldDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxuXFxuICBiYWNrZ3JvdW5kOiAjNDU0ODU3O1xcbiAgY29sb3I6ICNiZGJkYmRiZDtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTpcXG4gICAgc3lzdGVtLXVpLFxcbiAgICAtYXBwbGUtc3lzdGVtLFxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgICdTZWdvZSBVSScsXFxuICAgIFJvYm90byxcXG4gICAgJ0hlbHZldGljYSBOZXVlJyxcXG4gICAgQXJpYWwsXFxuICAgICdOb3RvIFNhbnMnLFxcbiAgICBzYW5zLXNlcmlmLFxcbiAgICAnQXBwbGUgQ29sb3IgRW1vamknLFxcbiAgICAnU2Vnb2UgVUkgRW1vamknLFxcbiAgICAnU2Vnb2UgVUkgU3ltYm9sJyxcXG4gICAgJ05vdG8gQ29sb3IgRW1vamknO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGxpbmVhcjtcXG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7ICovXFxufVxcblxcbi50YXNrUHJpb3JpdHlfcmFkaW8gaW5wdXQ6Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTVkODkxLCAjNzRiYmFkKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4ICMwMDAwMDAyZTtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAwcHggIzc5NDg1ZjdhO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLnRhc2tQcmlvcml0eV9yYWRpbyBpbnB1dCN0YXNrUHJpb3JpdHlfbWVkOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQzYTNlOCwgIzBlZGJkZCk7XFxufVxcblxcbi50YXNrUHJpb3JpdHlfcmFkaW8gaW5wdXQjdGFza1ByaW9yaXR5X2hpZ2g6Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjhhZWY5LCAjY2FiY2ZiKTtcXG59XFxuXFxuLnRhc2tQcmlvcml0eV9yYWRpbyBpbnB1dDpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihsYWJlbCk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24uZ3JhZGllbnQtaDMge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG4vKiBUYXNrL1Byb2plY3QgU3dpdGNoZXIgaW5zaWRlIE1vZGFsICovXFxuZGl2LmNyZWF0ZS1tb2RhbC1zZWxlY3QtdHlwZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgaW5zZXQgMCAwIDAgM3B4IHJnYigzNSAzMyA0NSAvIDAlKSxcXG4gICAgMCAwIDAgM3B4IHJnYigxODUgMTg1IDE4NSAvIDE2JSk7XFxufVxcblxcbi8qc2VsZWN0ZWQgc2lkZSovXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6ICM0MjQyNDI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiAgYmcgb2YgVGFzayB3aGVuIG5vdCBzZWxlY3RlZCovXFxubGFiZWwudG9nZ2xlSW5wdXQtc3dpdGNoLWlubmVyIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcGluaywgbGF2ZW5kZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIHRleHQgb2YgVGFzayB3aGVuIG5vdCBzZWxlY3RlZCAgKi9cXG5sYWJlbC50b2dnbGVJbnB1dC1zd2l0Y2gtaW5uZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtb24pOyAvKiBUYXNrICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMjBweDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4vKiAgcHJvamVjdCBzZWxlY3RlZCAqL1xcbmxhYmVsLnRvZ2dsZUlucHV0LXN3aXRjaC1pbm5lcjo6YWZ0ZXIge1xcbiAgY29udGVudDogYXR0cihkYXRhLW9mZik7IC8qIFByb2plY3QgKi9cXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAycHg7XFxuICB0b3A6IDJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDZweCAtMnB4ICMxMTE7ICovXFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG5pbnB1dCN0b2dnbGVJbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNjhweDtcXG4gIGxlZnQ6IDQ0JTtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLyogIHNldCBiZyBhbmQgdGV4dCBvbiBwcm9qZWN0LCBub3Qgc2VsZWN0ZWQgKi9cXG5pbnB1dCN0b2dnbGVJbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbC50b2dnbGVJbnB1dC1zd2l0Y2gtaW5uZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBwaW5rLCBsYXZlbmRlcik7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLyogIFNldHMgYmcgb2YgVGFzayB3aGVuIHNlbGVjdGVkKi9cXG5pbnB1dCN0b2dnbGVJbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWRcXG4gICsgbGFiZWwudG9nZ2xlSW5wdXQtc3dpdGNoLWlubmVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qVGFza3MqL1xcbiAgbGVmdDogNjhweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5pbnB1dCN0b2dnbGVJbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWRcXG4gICsgbGFiZWwudG9nZ2xlSW5wdXQtc3dpdGNoLWlubmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtb2ZmKTsgLypQcm9qZWN0ICovXFxuICByaWdodDogYXV0bztcXG4gIGxlZnQ6IDIwcHg7XFxufVxcblxcbi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYSBpbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lOiBzb2xpZCAzcHggI2FmNzZmMzMzO1xcbiAgYm9yZGVyOiBzb2xpZCAxLjVweCByZ2JhKDIzNCwgMTAwLCAyMTcsIDAuNCk7XFxuICAvKiBib3JkZXItcmFkaXVzOiAxMnB4OyAqL1xcbn1cXG5cXG4vKiBUYXNrIENoZWNrZWQgT2ZmIFRvZ2dsZSAqL1xcbi50YXNrLWNoZWNrYm94IHtcXG4gIC0tdGV4dDogIzQxNDg1NjtcXG4gIC0tY2hlY2s6ICNhZjc2ZjM7XFxuICAtLWRpc2FibGVkOiAjYzNjOGRlO1xcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwcHggNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50YXNrLWNoZWNrYm94IGxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLnRhc2stY2hlY2tib3ggbGFiZWw6OmJlZm9yZSwgLyogZGFzaCAqL1xcbi50YXNrLWNoZWNrYm94IGxhYmVsOjphZnRlciB7XFxuICAvKiB0aWNrICovXFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnRhc2stY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XFxuICAvKiBkYXNoICovXFxuICBoZWlnaHQ6IDJweDtcXG4gIHdpZHRoOiAxM3B4O1xcbiAgbGVmdDogLTI3cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcXG59XFxuLnRhc2stY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xcbiAgLyogdGljayAqL1xcbiAgaGVpZ2h0OiA0cHg7XFxuICB3aWR0aDogNHB4O1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiAtMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUsXFxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRvcDogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gIHdpZHRoOiAwcHg7XFxuICByaWdodDogNjAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbn1cXG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOjphZnRlciB7XFxuICB3aWR0aDogMHB4O1xcbiAgbGVmdDogNDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxufVxcbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVjay0wMS0xMSAwLjRzIGVhc2UgZm9yd2FyZHM7XFxuICBhbmltYXRpb246IGNoZWNrLTAxLTExIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjphZnRlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2stMDItMTEgMC40cyBlYXNlIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uOiBjaGVjay0wMi0xMSAwLjRzIGVhc2UgZm9yd2FyZHM7XFxufVxcbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1kaXNhYmxlZCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS0xMSAwLjNzIGVhc2UgMC4xcyBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbjogbW92ZS0xMSAwLjNzIGVhc2UgMC4xcyBmb3J3YXJkcztcXG59XFxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpY2UtMTEgMC40cyBlYXNlIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uOiBzbGljZS0xMSAwLjRzIGVhc2UgZm9yd2FyZHM7XFxufVxcbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmlyZXdvcmstMTEgMC41cyBlYXNlIGZvcndhcmRzIDAuMXM7XFxuICBhbmltYXRpb246IGZpcmV3b3JrLTExIDAuNXMgZWFzZSBmb3J3YXJkcyAwLjFzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS0xMSB7XFxuICA1MCUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlLTExIHtcXG4gIDUwJSB7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpY2UtMTEge1xcbiAgNjAlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDRweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogLTJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWNlLTExIHtcXG4gIDYwJSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiA0cHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IC0ycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGNoZWNrLTAxLTExIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MSUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY2hlY2stMDEtMTEge1xcbiAgMCUge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUxJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGNoZWNrLTAyLTExIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MSUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY2hlY2stMDItMTEge1xcbiAgMCUge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUxJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZpcmV3b3JrLTExIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm94LXNoYWRvdzpcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMDtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm94LXNoYWRvdzpcXG4gICAgICAwIC0xNXB4IDAgMHB4ICM0ZjI5ZjAsXFxuICAgICAgMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjAsXFxuICAgICAgMTRweCA4cHggMCAwcHggIzRmMjlmMCxcXG4gICAgICAwIDE1cHggMCAwcHggIzRmMjlmMCxcXG4gICAgICAtMTRweCA4cHggMCAwcHggIzRmMjlmMCxcXG4gICAgICAtMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmlyZXdvcmstMTEge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3gtc2hhZG93OlxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3gtc2hhZG93OlxcbiAgICAgIDAgLTE1cHggMCAwcHggIzRmMjlmMCxcXG4gICAgICAxNHB4IC04cHggMCAwcHggIzRmMjlmMCxcXG4gICAgICAxNHB4IDhweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIDAgMTVweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIC0xNHB4IDhweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIC0xNHB4IC04cHggMCAwcHggIzRmMjlmMDtcXG4gIH1cXG59XFxuXFxuLyogV09CQkxFIEVGRkVDVCBPTiBCSU4gKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgaHZyLXdvYmJsZS10b3Age1xcbiAgMTYuNjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3KC0xMmRlZyk7XFxuICB9XFxuICAzMy4zJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDEwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3KDEwZGVnKTtcXG4gIH1cXG4gIDQ5Ljk1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC02ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3KC02ZGVnKTtcXG4gIH1cXG4gIDY2LjYlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoNGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tldyg0ZGVnKTtcXG4gIH1cXG4gIDgzLjI1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0yZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3KC0yZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygwKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3KDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGh2ci13b2JibGUtdG9wIHtcXG4gIDE2LjY1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0xMmRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tldygtMTJkZWcpO1xcbiAgfVxcbiAgMzMuMyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tldygxMGRlZyk7XFxuICB9XFxuICA0OS45NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtNmRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tldygtNmRlZyk7XFxuICB9XFxuICA2Ni42JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXcoNGRlZyk7XFxuICB9XFxuICA4My4yNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMmRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tldygtMmRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMCk7XFxuICAgIHRyYW5zZm9ybTogc2tldygwKTtcXG4gIH1cXG59XFxuLmh2ci13b2JibGUtdG9wIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcXG59XFxuLmh2ci13b2JibGUtdG9wOmhvdmVyLFxcbi5odnItd29iYmxlLXRvcDpmb2N1cyxcXG4uaHZyLXdvYmJsZS10b3A6YWN0aXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGh2ci13b2JibGUtdG9wO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGh2ci13b2JibGUtdG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxufVxcblxcbi8qIFdhdmluZyBIYW5kIEhvdmVyICovXFxuLndhdmU6aG92ZXIge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHdhdmUtYW5pbWF0aW9uOyAvKiBSZWZlcnMgdG8gdGhlIG5hbWUgb2YgeW91ciBAa2V5ZnJhbWVzIGVsZW1lbnQgYmVsb3cgKi9cXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMi41czsgLyogQ2hhbmdlIHRvIHNwZWVkIHVwIG9yIHNsb3cgZG93biAqL1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IC8qIE5ldmVyIHN0b3Agd2F2aW5nIDopICovXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA3MCUgNzAlOyAvKiBQaXZvdCBhcm91bmQgdGhlIGJvdHRvbS1sZWZ0IHBhbG0gKi9cXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuQGtleWZyYW1lcyB3YXZlLWFuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTRkZWcpO1xcbiAgfSAvKiBUaGUgZm9sbG93aW5nIGZpdmUgdmFsdWVzIGNhbiBiZSBwbGF5ZWQgd2l0aCB0byBtYWtlIHRoZSB3YXZpbmcgbW9yZSBvciBsZXNzIGV4dHJlbWUgKi9cXG4gIDIwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00ZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfSAvKiBSZXNldCBmb3IgdGhlIGxhc3QgaGFsZiB0byBwYXVzZSAqL1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBHcm93IFNoYWRvdyAqL1xcbi5odnItZ3Jvdy1zaGFkb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcXG59XFxuLmh2ci1ncm93LXNoYWRvdzpob3ZlcixcXG4uaHZyLWdyb3ctc2hhZG93OmZvY3VzLFxcbi5odnItZ3Jvdy1zaGFkb3c6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5oZWFkZXIuaGVsbG8ge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDY1cHgpIHtcXG4gIGRpdi5jb250YWluZXIge1xcbiAgICB3aWR0aDogOTh2dztcXG4gICAgaGVpZ2h0OiA5OHZoO1xcbiAgfVxcbn1cXG5cXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIGhlYWRlci5oZWxsbyB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gIH1cXG59ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG4gIHZhciBkYXRlVGltZUZvcm1hdDtcbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy9PdXIgbWFpbiBmaWxlIC0gaGFuZGxlcyByZXF1ZXN0cy5cbi8vVGVsbHMgTU9ERUwgd2hhdCB0byBkbyAobG9naWMgd2lzZSksXG4vL3RlbGxzIFZJRVcgd2hhdCBkbyB0byAoZGlzcGxheSB3aXNlKVxuLy9Db250cm9scyBhbmQgZGVjaWRlcyBob3cgZGF0YSBpcyBkaXNwbGF5ZWRcbmltcG9ydCB7fSBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0IHsgYWxsUHJvamVjdHNBcnIgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RNb2RlbCB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFza01vZGVsIH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5cblxuXG5cblxuXG5cblxuLy9nZW5lcmF0ZSBJRFxuY29uc3QgZ2VuZXJhdGVVVUlEID0gZnVuY3Rpb24gYihhKSB7XG4gIHJldHVybiBhXG4gICAgPyAoYSBeICgoTWF0aC5yYW5kb20oKSAqIDE2KSA+PiAoYSAvIDQpKSkudG9TdHJpbmcoMTYpXG4gICAgOiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYik7XG59O1xuXG4vL2Z1bmN0aW9uIHRoYXQgcnVucyB3aGVuIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QocHJvak5hbWUpIHtcbiAgLy9jYWxsIHRvIGEgZnVuY3Rpb24gaW5zaWRlIG1vZGVsLCBwYXNzaW5nIHRoZSBwcm9qTmFtZSwgbW9kZWwgd2lsbCBjcmVhdGUgdGhlIG9iamVjdCBhbmQgcmV0dXJuIHRoZSBvYmplY3QgdG8gY29udHJvbGxlciB0byBiZSBwYXNzZWQgdG8gdGhlIHZpZXcgdG8gcmVuZGVyIHRoZSBkaXNwbGF5XG5cbiAgbGV0IGNyZWF0ZWRQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdE1vZGVsKHByb2pOYW1lLCBnZW5lcmF0ZVVVSUQoKSk7IC8vaW4gbW9kZWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2soXG4gIHRhc2tOYW1lLFxuICB0YXNrRGVzYyxcbiAgdGFza0R1ZSxcbiAgdGFza1ByaW9yaXR5LFxuICBwcm9qZWN0TmFtZSxcbiAgcHJvaklELFxuKSB7XG4gIGxldCB0YXNrID0gY3JlYXRlTmV3VGFza01vZGVsKFxuICAgIHRhc2tOYW1lLFxuICAgIHRhc2tEZXNjLFxuICAgIHRhc2tEdWUsXG4gICAgdGFza1ByaW9yaXR5LFxuICAgIHByb2plY3ROYW1lLFxuICAgIHByb2pJRCxcbiAgICBnZW5lcmF0ZVVVSUQoKSxcbiAgKTsgLy9pbiBtb2RlbFxuICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlRmFjdG9yeShpbWFnZSl7XG5cdGNvbnN0IG15SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0bXlJbWFnZS5zcmMgPSBpbWFnZTtcblx0cmV0dXJuIG15SW1hZ2U7XG59XG5cblxuXG5cbi8vIGV4cG9ydCBjb25zdCBwdWJTdWIgPSB7XG4vLyAgIGV2ZW50czoge30sXG4vLyAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGV2TmFtZSwgZm4pIHtcbi8vICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3Qgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZOYW1lfWApO1xuLy8gICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4vLyAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4vLyAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKTtcbi8vICAgfSxcbi8vICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIChldk5hbWUsIGZuKSB7XG4vLyAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IFVOc3Vic2NyaWJlZCBmcm9tICR7ZXZOYW1lfWApO1xuLy8gICAgIC8vcmVtb3ZlIGFuIGV2ZW50IGZ1bmN0aW9uIGJ5IG5hbWVcbi8vICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuLy8gICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0uZmlsdGVyKChmKSA9PiBmICE9PSBmbik7XG4vLyAgICAgfVxuLy8gICB9LFxuLy8gICBwdWJsaXNoOiBmdW5jdGlvbiAoZXZOYW1lLCBkYXRhKSB7XG4vLyAgICAgY29uc29sZS5sb2coYFBVQlNVQjogTWFraW5nIGEgYnJvYWRjYXN0IGFib3V0ICR7ZXZOYW1lfSB3aXRoICR7ZGF0YX1gKTtcbi8vICAgICAvL2VtaXQvcHVibGlzaCB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4vLyAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbi8vICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaCgoZikgPT4ge1xuLy8gICAgICAgICBmKGRhdGEpO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfVxuLy8gICB9LFxuLy8gfTtcbiIsIi8vZGlzcGxheVByb2plY3QgbW9kdWxlICh2aWV3KVxuaW1wb3J0IHsgYWxsUHJvamVjdHNBcnIgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHJlbmRlclByb2plY3RDYXJkcyB9IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgeyBpbWFnZUZhY3RvcnkgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG5pbXBvcnQgZG93bmdyZXkxNiBmcm9tICcvc3JjL2ltYWdlcy9kb3duZ3JleTE2LnBuZyc7XG5pbXBvcnQgZGlza2V0dGUyNCBmcm9tICdzcmMvaW1hZ2VzL2Rpc2tldHRlMjQucG5nJztcbmltcG9ydCBlZGl0MjQgZnJvbSAnc3JjL2ltYWdlcy9lZGl0MjQucG5nJztcbmltcG9ydCBiaW4yNCBmcm9tICdzcmMvaW1hZ2VzL2JpbjI0LnBuZyc7XG5cbmV4cG9ydCBsZXQgZGlzcGxheVByb2plY3QgPSB7XG4gIC8vZG9tIGVsZW1lbnRzXG4gIHNlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JyksXG5cbiAgY2xlYXJTZWN0aW9uKCkge1xuICAgIC8vbG9vcCB0aHJvdWdoIGFsbFByb2pBcnIgYW5kIGNoYW5nZSBpc0N1cnJlbnRQcm9qIHRvIGZhbHNlXG4gICAgYWxsUHJvamVjdHNBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4gKHByb2plY3QuaXNDdXJyZW50UHJvaiA9IGZhbHNlKSk7XG5cbiAgICBpZiAoZGlzcGxheVByb2plY3Quc2VjdGlvbi5oYXNDaGlsZE5vZGVzKSB7XG4gICAgICB3aGlsZSAoZGlzcGxheVByb2plY3Quc2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0LnNlY3Rpb24ucmVtb3ZlQ2hpbGQoZGlzcGxheVByb2plY3Quc2VjdGlvbi5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZGlzcGxheShwcm9qZWN0T2JqKSB7XG4gICAgLy90YWtlcyBpbiBwcm9qZWN0IGFuZCBjcmVhdGVzIGRvbSBlbGVtZW50IGZvciBlYWNoIHRhc2tcbiAgICAvL21heSBuZWVkIHRvIHJlZmFjdG9yIHRvIHNtYWxsZXIgZnVuY3Rpb25zIGFzIGNvbnRhaW5zIHNvbWUgbG9naWNcblxuICAgIC8vY3JlYXRlIGVsZW1lbnRzXG4gICAgbGV0IGhlYWRpbmdoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZ2gyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGluZycpO1xuICAgIGhlYWRpbmdoMi50ZXh0Q29udGVudCA9IHByb2plY3RPYmoubmFtZTtcbiAgICB0aGlzLnNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZ2gyKTtcblxuICAgIGxldCBoZWFkaW5naDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmdoMy5jbGFzc0xpc3QuYWRkKCdncmFkaWVudC10ZXh0Jyk7XG4gICAgaGVhZGluZ2gzLnRleHRDb250ZW50ID0gJ1RvIGRvJztcbiAgICB0aGlzLnNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZ2gzKTtcblxuICAgIC8vaWYgdGFza0FyciBub3QgZW1wdHlcbiAgICBpZiAocHJvamVjdE9iai50YXNrQXJyLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vY3JlYXRlIGVsZW1lbnQgZm9yIGVhY2ggaXRlbSBpbiB0YXNrIGFycmF5XG4gICAgICBwcm9qZWN0T2JqLnRhc2tBcnIuZm9yRWFjaChjcmVhdGVUYXNrRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy9jb3VsZCB0aGlzIGZuIGJlIG1vdmVkIHVwIGEgbGV2ZWw/XG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQoaXRlbSwgaW5kZXgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pOyAvL3Rhc2sgb2JqZWN0XG4gICAgICAvL2NvbnNvbGUubG9nKGluZGV4KTsgLy8wXG5cbiAgICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGV0YWlscycpO1xuICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2staXRlbScpO1xuICAgICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0lEJywgaXRlbS5pZCk7XG4gICAgICBsZXQgc3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N1bW1hcnknKTtcblxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2hlY2tib3gnKTtcblxuICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzayR7aW5kZXh9YCk7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JywgJ3Rhc2tjaGVja2JveCcpO1xuXG4gICAgICBjb25zb2xlLmxvZyhpdGVtLmlzQ29tcGxldGUpO1xuICAgICAgaWYgKGl0ZW0uaXNDb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCB1cGRhdGVkVGFza0RhdGEgPSB7fTtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY2hlY2tib3hIYW5kbGVyKHVwZGF0ZWRUYXNrRGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRhc2ske2luZGV4fWApO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIHN1bW1hcnkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgbGV0IHByaW9yaXR5c3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHByaW9yaXR5c3Bhbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAncHJvamVjdC10YXNrLXByaW9yaXR5JyxcbiAgICAgICAgYCR7aXRlbS5wcmlvcml0eX1Qcmlvcml0eWAsXG4gICAgICApO1xuICAgICAgcHJpb3JpdHlzcGFuLnRleHRDb250ZW50ID0gaXRlbS5wcmlvcml0eTtcbiAgICAgIHN1bW1hcnkuYXBwZW5kQ2hpbGQocHJpb3JpdHlzcGFuKTtcblxuICAgICAgbGV0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2staW1nJyk7XG4gICAgLy8gICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltYWdlcy9kb3duZ3JleTE2LnBuZycpO1xuICAgICAgYXJyb3cuc3JjID0gZG93bmdyZXkxNjtcblxuXG4gICAgICBzdW1tYXJ5LmFwcGVuZENoaWxkKGFycm93KTtcblxuICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChzdW1tYXJ5KTtcblxuICAgICAgbGV0IHRhc2tkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGFza2Rlc2MuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICB0YXNrZGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tkZXNjKTtcblxuICAgICAgbGV0IHRhc2tGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tGb290ZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLWZvb3RlcicpO1xuICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRm9vdGVyKTtcblxuICAgICAgdGFza0Zvb3Rlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHRhc2tDbGlja0hhbmRsZXIoZSkge1xuICAgICAgICAvL0RFTEVURSBCVE4gQ0xJQ0tFRFxuICAgICAgICBpZiAoZS50YXJnZXQgPT0gdGFza0RlbEljb24pIHtcbiAgICAgICAgICAvL3JlbW92ZSB0YXNrXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7IC8vZm9vdGVyIGVsZW1lbnRcbiAgICAgICAgICBwcm9qZWN0T2JqLmRlbGV0ZVRhc2soaXRlbS5pZCk7XG5cbiAgICAgICAgICAvL0VESVQgQlROIENMSUNLRURcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PSB0YXNrRWRpdEljb24pIHtcbiAgICAgICAgICAvL2lmIHBlbmNpbCBpY29uIHNob3dpbmdcbiAgICAgICAgICBpZiAodGFza0VkaXRJY29uLmdldEF0dHJpYnV0ZSgnc3JjJykgPT0gJy9zcmMvaW1hZ2VzL2VkaXQyNC5wbmcnKSB7XG4gICAgICAgICAgICAvL21vdmUgcHJpb3JpdHkgdG8gaW5zaWRlIGRlc2NcbiAgICAgICAgICAgIHN1bW1hcnkucmVtb3ZlQ2hpbGQocHJpb3JpdHlzcGFuKTtcblxuICAgICAgICAgICAgLy9wdXQgdGhpcyBpbiBhIGZ1bmN0aW9uIHRvIGJlIGV4cG9ydGVkIGJ0d2VlbiBuZXdUYXNrRm9ybS5qcyBhbmQgaGVyZVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eVBpY2tlcihjdXJyZW50UHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgcHJpb3JpdHk6ICcsIGN1cnJlbnRQcmlvcml0eSk7IC8vaGlnaFxuICAgICAgICAgICAgICBsZXQgdGFza1ByaW9yaXR5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBsZXQgdGFza1ByaW9yaXR5SW5wdXRfbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgbGV0IHRhc2tQcmlvcml0eUlucHV0X21lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgIGxldCB0YXNrUHJpb3JpdHlJbnB1dF9oaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgJ3Rhc2tQcmlvcml0eV9yYWRpbycsXG4gICAgICAgICAgICAgICAgJ3Rhc2tFZGl0UHJpb3JpdHknLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dF9sb3cuc2V0QXR0cmlidXRlKCdsYWJlbCcsICdMb3cnKTtcbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfbG93LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dF9sb3cuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrUHJpb3JpdHlfbG93Jyk7XG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza1ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuXG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X21lZC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgJ01lZGl1bScpO1xuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dF9tZWQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X21lZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQcmlvcml0eV9tZWQnKTtcbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfbWVkLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrUHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfbWVkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkJyk7XG5cbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgJ0hpZ2gnKTtcbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQcmlvcml0eV9oaWdoJyk7XG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X2hpZ2guc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tQcmlvcml0eScpO1xuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dF9oaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuXG4gICAgICAgICAgICAgIGlmIChjdXJyZW50UHJpb3JpdHkgPT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQcmlvcml0eSA9PSAnbWVkJykge1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X21lZC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQcmlvcml0eSA9PSAnbG93Jykge1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dF9sb3cpO1xuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUlucHV0X21lZCk7XG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRfaGlnaCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRhc2tQcmlvcml0eVdyYXBwZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRldGFpbHMuaW5zZXJ0QmVmb3JlKGNyZWF0ZVByaW9yaXR5UGlja2VyKGl0ZW0ucHJpb3JpdHkpLCB0YXNrZGVzYyk7XG5cbiAgICAgICAgICAgIC8vYWRkIHBhZGRpbmcgY2xhc3MgdG8gZGF0ZVxuICAgICAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlLXBhZGRpbmcnKTtcblxuICAgICAgICAgICAgLy9hZGQgY2xhc3Mgb2YgZWRpdC1tb2RlIHRvIHRhc2sgcmVsYXRlZCBpbnB1dHMgKGlmIG5lZWRlZClcbiAgICAgICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZWRpdC1tb2RlJyk7XG5cbiAgICAgICAgICAgIC8vc2V0IGNvbnRlbnQtZWRpdGFibGUgdG8gdHJ1ZVxuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgdGFza2Rlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsICd0cnVlJyk7XG5cbiAgICAgICAgICAgIC8vdGhpcyBwZW5jaWwgaWNvbiBuZWVkcyB0byBjaGFuZ2UgdG8gYSBzYXZlIGljb25cbiAgICAgICAgICAgIC8vIHRhc2tFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltYWdlcy9kaXNrZXR0ZTI0LnBuZycpO1xuICAgICAgICAgICAgLy8gdGFza0VkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgZGlza2V0dGUyNCk7XG4gICAgICAgICAgICB0YXNrRWRpdEljb24uc3JjID0gZGlza2V0dGUyNDtcblxuICAgICAgICAgICAgLy9pZiBTQVZFICBpY29uXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIC8vIHRhc2tFZGl0SWNvbi5nZXRBdHRyaWJ1dGUoJ3NyYycpID09ICcvc3JjL2ltYWdlcy9kaXNrZXR0ZTI0LnBuZydcbiAgICAgICAgICAgIHRhc2tFZGl0SWNvbi5nZXRBdHRyaWJ1dGUoJ3NyYycpID09IGRpc2tldHRlMjRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIC8vZ2V0IG5ldyB2YWx1ZXNcbiAgICAgICAgICAgIGxldCB1cGRhdGVkVGFza0RhdGEgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGxhYmVsLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICBkZXNjOiB0YXNrZGVzYy50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgZGF0ZTogZGF0ZS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgcHJpb3JpdHk6IGdldFJhZGlvVmFsdWUoKSxcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZTogaXRlbS5pc0NvbXBsZXRlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy9NT1ZFIFRPIG1vZGVsXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRSYWRpb1ZhbHVlKCkge1xuICAgICAgICAgICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGFza1ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocmFkaW9baV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ByaW9yaXR5IGZyb20gZ2V0UmFkaW9WYWx1ZTonLCByYWRpb1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmFkaW9baV0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vY2hhbmdlIHNhdmUgaWNvbiBiYWNrIHRvIHBlbmNpbFxuICAgICAgICAgICAgLy8gdGFza0VkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvaW1hZ2VzL2VkaXQyNC5wbmcnKTtcbiAgICAgICAgICAgIHRhc2tFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXQyNCk7XG5cbiAgICAgICAgICAgIC8vcmVtb3ZlIGVkaXQtbW9kZSBjbGFzc1xuICAgICAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0LW1vZGUnKTtcblxuICAgICAgICAgICAgLy9yZW1vdmUgcGFkZGluZyBjbGFzcyB0byBkYXRlXG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2RhdGUtcGFkZGluZycpO1xuXG4gICAgICAgICAgICAvL3NldCBjb250ZW50LWVkaXRhYmxlIHRvIGZhbHNlXG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsICdmYWxzZScpO1xuICAgICAgICAgICAgdGFza2Rlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgLy9tb3ZlIHNlbGVjdGVkIHByaW9yaXR5IGJ1YmJsZSBiYWNrIHRvIHN1bW1hcnlcbiAgICAgICAgICAgIGxldCB0YXNrUHJpb3JpdHlXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ2Rpdi50YXNrRWRpdFByaW9yaXR5JyxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vcmVtb3ZlIG9sZCBjbGFzcyAmIGFkZCB1cGRhdGVkIGNsYXNzXG4gICAgICAgICAgICBwcmlvcml0eXNwYW4uY2xhc3NMaXN0LnJlbW92ZShgJHtpdGVtLnByaW9yaXR5fVByaW9yaXR5YCk7XG4gICAgICAgICAgICBwcmlvcml0eXNwYW4uY2xhc3NMaXN0LmFkZChgJHt1cGRhdGVkVGFza0RhdGEucHJpb3JpdHl9UHJpb3JpdHlgKTtcbiAgICAgICAgICAgIHByaW9yaXR5c3Bhbi50ZXh0Q29udGVudCA9IHVwZGF0ZWRUYXNrRGF0YS5wcmlvcml0eTtcblxuICAgICAgICAgICAgLy8gYWRkIHByaW9yaXR5IHNwYW4gYmFjayB0byBzdW1tYXJ5XG4gICAgICAgICAgICBzdW1tYXJ5Lmluc2VydEJlZm9yZShwcmlvcml0eXNwYW4sIGFycm93KTtcblxuICAgICAgICAgICAgLy9yZW1vdmUgcHJpb3JpdHkgc2VsZWN0b3JcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eVdyYXBwZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAncHJpb3JpdHkgaW4gZGlzcGxheVByb2plY3Q6ICcsXG4gICAgICAgICAgICAgIHVwZGF0ZWRUYXNrRGF0YS5wcmlvcml0eSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vaWYgc2F2ZSBjbGlja2VkLCBjYWxsIHdpdGggbmV3IHZhbHVlc1xuICAgICAgICAgICAgaXRlbS5lZGl0VGFzayh1cGRhdGVkVGFza0RhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7IC8vdGFza2Zvb3RlciBldmVudCBsaXN0ZW5lciBjbG9zZVxuXG4gICAgICBsZXQgZGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkYXRlV3JhcHBlci50ZXh0Q29udGVudCA9IGAgRHVlIERhdGU6YDtcbiAgICAgIGRhdGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFzay1kdWVkYXRlJyk7XG5cbiAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuICAgICAgZGF0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgIHRhc2tGb290ZXIuYXBwZW5kQ2hpbGQoZGF0ZVdyYXBwZXIpO1xuXG4gICAgICBsZXQgdGFza0RlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvLyAgIHRhc2tEZWxJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvaW1hZ2VzL2JpbjI0LnBuZycpO1xuICAgICAgdGFza0RlbEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBiaW4yNCk7XG4gICAgICB0YXNrRm9vdGVyLmFwcGVuZENoaWxkKHRhc2tEZWxJY29uKTtcblxuICAgICAgbGV0IHRhc2tFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgdGFza0VkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFzay1lZGl0YnRuJyk7XG4gICAgICB0YXNrRWRpdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9pbWFnZXMvZWRpdDI0LnBuZycpO1xuICAgICAgdGFza0VkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgZWRpdDI0KTtcblxuICAgICAgdGFza0Zvb3Rlci5hcHBlbmRDaGlsZCh0YXNrRWRpdEljb24pO1xuICAgICAgZGlzcGxheVByb2plY3Quc2VjdGlvbi5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICAgICAgZnVuY3Rpb24gY2hlY2tib3hIYW5kbGVyKHVwZGF0ZWRUYXNrRGF0YSkge1xuICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgIHVwZGF0ZWRUYXNrRGF0YS5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICBpdGVtLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRUYXNrRGF0YSk7XG4gICAgICAgICAgLy91cGRhdGUgYWN0aXZlIHRhc2sgI3NcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVkVGFza0RhdGEuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgIGl0ZW0uaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5lZGl0VGFzayh1cGRhdGVkVGFza0RhdGEpO1xuICAgICAgICByZW5kZXJQcm9qZWN0Q2FyZHMoKTtcbiAgICAgIH1cbiAgICB9IC8vZW5kIG9mIGNyZWF0ZVRhc2tFbGVtZW50XG4gIH0sXG59O1xuIiwiLy90aGUgbW9kZWwgaGFuZGxlcyBhbGwgdGhlIGRhdGEgYW5kIGxvZ2ljXG4vLyBpbXBvcnQgeyBhZGRQcm9qZWN0VG9Ecm9wZG93biB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgbmV3UHJvamVjdEZvcm0gfSBmcm9tICcuL25ld1Byb2plY3RGb3JtJztcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0IH0gZnJvbSAnLi9kaXNwbGF5UHJvamVjdCc7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0Q2FyZHMgfSBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgcmVuZGVySW5mb0NhcmRzIH0gZnJvbSAnLi92aWV3LmpzJztcblxuZXhwb3J0IGxldCBhbGxQcm9qZWN0c0FyciA9IFtdOyAvL2V4cG9ydCB0byBjb250cm9sbGVyIGFuZCB2aWV3ICh0cnkgdG8gcmVtb3ZlIGZyb20gdmlldylcblxuZnVuY3Rpb24gUHJvamVjdEZhY3RvcnkocHJvak5hbWUsIHByb2pJRCkge1xuICBsZXQgcHJvamVjdCA9IE9iamVjdC5jcmVhdGUocHJvamVjdEFjdGlvbnMpO1xuICBwcm9qZWN0Lm5hbWUgPSBwcm9qTmFtZSB8fCAnZGVmYXVsdCc7XG4gIHByb2plY3QuaWQgPSBwcm9qSUQ7XG4gIHByb2plY3QudGFza0FyciA9IFtdO1xuICBwcm9qZWN0LmlzQ3VycmVudFByb2ogPSBmYWxzZTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBsZXQgcHJvamVjdEFjdGlvbnMgPSB7XG4gIGdldFByb2plY3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH0sXG4gIGdldFByb2plY3RJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfSxcbiAgYWRkUHJvalRvQWxsUHJvakFycigpIHtcbiAgICBhbGxQcm9qZWN0c0Fyci5wdXNoKHRoaXMpO1xuICAgIHJldHVybiBhbGxQcm9qZWN0c0FycjtcbiAgfSxcbiAgZ2V0Tm9PZlRhc2tzKCkge1xuICAgIGxldCBub09mVGFza3MgPSB0aGlzLnRhc2tBcnIubGVuZ3RoO1xuICAgIHJldHVybiBub09mVGFza3M7XG4gIH0sXG4gIGdldE5vT2ZBY3RpdmVUYXNrcygpIHtcbiAgICBjb25zb2xlLmxvZygnZ2V0Tm9PZkFjdGl2ZVRhc2tzKCkgcmVhY2hlZCcpO1xuXG4gICAgbGV0IG5vT2ZBY3RpdmVUYXNrcyA9IHRoaXMudGFza0Fyci5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gdGFzay5pc0NvbXBsZXRlID09IGZhbHNlLFxuICAgICk7XG5cbiAgICByZXR1cm4gbm9PZkFjdGl2ZVRhc2tzLmxlbmd0aDtcbiAgfSxcbiAgZ2V0Tm9PZkNvbXBsZXRlZFRhc2tzKCkge1xuICAgIGNvbnNvbGUubG9nKCdnZXROb09mQ29tcGxldGVkVGFza3MgcmVhY2hlZCcpO1xuICAgIGxldCBub09mQ29tcGxldGVkVGFza3MgPSB0aGlzLnRhc2tBcnIuZmlsdGVyKFxuICAgICAgKHRhc2spID0+IHRhc2suaXNDb21wbGV0ZSA9PSB0cnVlLFxuICAgICk7XG4gICAgcmV0dXJuIG5vT2ZDb21wbGV0ZWRUYXNrcy5sZW5ndGg7XG4gIH0sXG4gIGFkZFRvTG9jYWxTdG9yYWdlKCkge1xuICAgIC8vU0FWRSBBTExQUk9KQVJSIFRPIExTXG4gICAgY29uc29sZS5sb2coJ2FkZCB0byBsb2NhbCBzdG9yYWdlIHJlYWNoZWQnKTtcbiAgICBsZXQgYWxsUHJvakFyckxTID0gSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHNBcnIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qQXJyTFMnLCBhbGxQcm9qQXJyTFMpO1xuICAgIHJlbmRlckluZm9DYXJkcyhhbGxQcm9qZWN0c0Fycik7XG4gIH0sXG4gIGRlbGV0ZVRhc2sodGFza2lkKSB7XG4gICAgLy9maW5kIHRhc2sgaWQgaW4gdGhpcy50YXNrQXJyIHRoYXQgPT0gdGFza2lkLCByZW1vdmUgZnJvbSB0YXNrQXJyXG4gICAgbGV0IGluZGV4ID0gdGhpcy50YXNrQXJyLmZpbmRJbmRleCgodGFza29iaikgPT4gdGFza29iai5pZCA9PSB0YXNraWQpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnRhc2tBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvL2dldCBwcm9qZWN0LCBjYWxsIGFkZFRvTG9jYWxTdG9yYWdlKCkgdG8gcmVmcmVzaCBMU1xuICAgIHRoaXMuYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIC8vQ2xlYXIgcHJvamVjdCBzZWN0aW9uXG4gICAgZGlzcGxheVByb2plY3QuY2xlYXJTZWN0aW9uKCk7XG4gICAgLy91cGRhdGUgIyBvZiB0YXNrcyBvbiBwcm9qIGNhcmRcbiAgICB0aGlzLmdldE5vT2ZUYXNrcygpO1xuICAgIC8vcmVyZW5kZXIgcHJvaiBjYXJkc1xuICAgIHJlbmRlclByb2plY3RDYXJkcygpO1xuICAgIC8vcmVyZW5kZXIgcHJvaiBzZWN0aW9uXG4gICAgZGlzcGxheVByb2plY3QuZGlzcGxheSh0aGlzKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0TW9kZWwocHJvak5hbWUsIHByb2pJRCkge1xuICAvL2V4cG9ydCB0byBjb250cm9sbGVyXG4gIGxldCBuZXdwcm9qTmFtZSA9IFByb2plY3RGYWN0b3J5KHByb2pOYW1lLCBwcm9qSUQpO1xuXG4gIG5ld3Byb2pOYW1lLmFkZFByb2pUb0FsbFByb2pBcnIoKTtcbiAgbmV3cHJvak5hbWUuZ2V0Tm9PZlRhc2tzKCk7XG4gIG5ld3Byb2pOYW1lLmFkZFRvTG9jYWxTdG9yYWdlKCk7XG5cbiAgcmV0dXJuIG5ld3Byb2pOYW1lO1xufVxuXG5mdW5jdGlvbiBUYXNrRmFjdG9yeShcbiAgdGFza05hbWUsXG4gIHRhc2tEZXNjLFxuICB0YXNrRHVlLFxuICB0YXNrUHJpb3JpdHksXG4gIHByb2plY3ROYW1lLFxuICBwcm9qSUQsXG4gIHRhc2tJRCxcbikge1xuICBsZXQgdGFzayA9IE9iamVjdC5jcmVhdGUodGFza0FjdGlvbnMpO1xuICB0YXNrLm5hbWUgPSB0YXNrTmFtZTtcbiAgdGFzay5pZCA9IHRhc2tJRDtcbiAgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjO1xuICB0YXNrLmR1ZURhdGUgPSB0YXNrRHVlIHx8IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XG4gIHRhc2sucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gIHRhc2suaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB0YXNrLnByb2pOYW1lID0gcHJvamVjdE5hbWU7XG4gIHRhc2sucHJvaklEID0gcHJvaklEO1xuICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0IGxldCB0YXNrQWN0aW9ucyA9IHtcbiAgZ2V0VGFza05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfSxcbiAgZ2V0VGFza0lEKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9LFxuICBnZXRUYXNrRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH0sXG4gIGdldFRhc2tEdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH0sXG4gIGdldFRhc2tQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfSxcbiAgZ2V0VGFza0lzQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfSxcbiAgZ2V0VGFza1Byb2plY3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2pOYW1lO1xuICB9LFxuICBnZXRUYXNrUHJvamVjdElEKCkge1xuICAgIHJldHVybiB0aGlzLnByb2pJRDtcbiAgfSxcbiAgYWRkVGFzaygpIHtcbiAgICAvL3RoaXMgbWV0aG9kIGZpbmRzIHRoZSBwcm9qZWN0SUQgYW5kIHB1c2hlcyB0aGUgdGFzayB0byB0aGUgdGFza0FyciB3aXRoaW4gdGhlIGNvcnJlc3BvbmRpbmcgUHJvamVjdFxuICAgIC8vc2hvdWxkIHRoaXMgYmUgYSBtZXRob2Qgb24gdGhlIHByb2plY3Q/XG5cbiAgICAvL2dldCBjb3JyZXNwb25kaW5nIHByb2plY3QgaWRcbiAgICBsZXQgY3VycmVudFByb2ogPSB0aGlzLmdldFRhc2tQcm9qZWN0SUQoKTtcbiAgICB2YXIgcmVzdWx0ID0gYWxsUHJvamVjdHNBcnIuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gY3VycmVudFByb2opO1xuXG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQudGFza0Fyci5wdXNoKHRoaXMpO1xuICAgIH1cbiAgICAvL3JlLWNhbGN1bGF0ZSAjIG9mIGFjdGl2ZSB0YXNrcyAmIHJlcmVuZGVyIGRpc3BsYXlcbiAgICByZXN1bHQuZ2V0Tm9PZlRhc2tzKCk7XG4gICAgcmVzdWx0LmdldE5vT2ZBY3RpdmVUYXNrcygpO1xuICAgIHJlc3VsdC5nZXROb09mQ29tcGxldGVkVGFza3MoKTtcbiAgICByZXN1bHQuYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSxcbiAgZWRpdFRhc2sodXBkYXRlZFRhc2tEYXRhKSB7XG4gICAgLy8gdXBkYXRlIHZhbHVlc1xuICAgIHRoaXMubmFtZSA9IHVwZGF0ZWRUYXNrRGF0YS5uYW1lIHx8IHRoaXMubmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdXBkYXRlZFRhc2tEYXRhLmRlc2MgfHwgdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gdXBkYXRlZFRhc2tEYXRhLnByaW9yaXR5IHx8IHRoaXMucHJpb3JpdHk7XG4gICAgdGhpcy5kdWVEYXRlID0gdXBkYXRlZFRhc2tEYXRhLmRhdGUgfHwgdGhpcy5kdWVEYXRlO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IHVwZGF0ZWRUYXNrRGF0YS5pc0NvbXBsZXRlIHx8IHRoaXMuaXNDb21wbGV0ZTtcblxuICAgIGNvbnNvbGUubG9nKCdwcmlvcml0eSBpbiBlZGl0VGFzayBtZXRob2Q6ICcsIHRoaXMucHJpb3JpdHkpO1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVkVGFza0RhdGEucHJpb3JpdHk6ICcsIHVwZGF0ZWRUYXNrRGF0YS5wcmlvcml0eSk7IC8vdW5kZWZpbmVkXG4gICAgbGV0IGN1cnJlbnRQcm9qID0gdGhpcy5nZXRUYXNrUHJvamVjdElEKCk7XG5cbiAgICBsZXQgcmVzdWx0ID0gYWxsUHJvamVjdHNBcnIuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gY3VycmVudFByb2opO1xuXG4gICAgcmVzdWx0LmFkZFRvTG9jYWxTdG9yYWdlKCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3VGFza01vZGVsKFxuICB0YXNrTmFtZSxcbiAgdGFza0Rlc2MsXG4gIHRhc2tEdWUsXG4gIHRhc2tQcmlvcml0eSxcbiAgcHJvak5hbWUsXG4gIHByb2pJRCxcbiAgdGFza0lELFxuKSB7XG4gIC8vY2FsbCB0byB0YXNrIEZhY3RvcnlcbiAgbGV0IG5ld1Rhc2sgPSBUYXNrRmFjdG9yeShcbiAgICB0YXNrTmFtZSxcbiAgICB0YXNrRGVzYyxcbiAgICB0YXNrRHVlLFxuICAgIHRhc2tQcmlvcml0eSxcbiAgICBwcm9qTmFtZSxcbiAgICBwcm9qSUQsXG4gICAgdGFza0lELFxuICApO1xuXG4gIG5ld1Rhc2suYWRkVGFzaygpO1xuXG4gIHJldHVybiBuZXdUYXNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVZhbHVlKGRhdGUpIHtcbiAgLy9kYXRlIHJlYyBhcyBzdHJpbmdcbiAgZGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcbiAgY29uc29sZS5sb2coZGF0ZSk7IC8vWycyMDIzJywgJzEwJywnMDMnXVxuICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdChcbiAgICBuZXcgRGF0ZShkYXRlWzBdLCBkYXRlWzFdIC0gMSwgZGF0ZVsyXSksXG4gICAgJ2VlZSBkbyBNTU0sIHl5eXknLFxuICApO1xuXG4gIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgbGV0IHJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3Rhc2tQcmlvcml0eScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJhZGlvW2ldLmNoZWNrZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwcmlvcml0eSBmcm9tIGdldFJhZGlvVmFsdWU6JywgcmFkaW9baV0udmFsdWUpO1xuICAgICAgcmV0dXJuIHJhZGlvW2ldLnZhbHVlO1xuICAgIH1cbiAgfVxufVxuIiwiLy9tb2RhbCBkaXNwbGF5IC0gY3JlYXRlIE5ldyBQcm9qZWN0XG4vL2NvbnRhaW5zIGNvZGUgdG8gY3JlYXRlIGRvbSBlbGVtZW50cyBhbmQgYXBwZW5kIHRoZW0gaW5zaWRlIG1vZGFsXG5cbmxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEnKTtcblxuLy9jcmVhdGUgZWxlbWVudHNcbmxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4vLyBTZXQgYXR0cmlidXRlc1xubGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvak5hbWUnKTtcbmxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonO1xuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbmlucHV0LmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbmlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvak5hbWUnKTtcbmlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpIHtcbiAgLy90b2dnbGUgZGlzcGxheVxuICBkaXYuY2xhc3NMaXN0LmFkZCgnc2hvd1Byb2pNb2R1bGUnKTtcbiAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dUYXNrTW9kdWxlJyk7XG5cbiAgLy9hcHBlbmQgZWxlbWVudHMgdG8gZGl2XG4gIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RGb3JtIH07IC8vdG8gdmlld1xuIiwiLy9tb2RhbCBkaXNwbGF5IC0gY3JlYXRlIE5ldyBUYXNrXG4vL2NvbnRhaW5zIGNvZGUgdG8gY3JlYXRlIGRvbSBlbGVtZW50cyBhbmQgYXBwZW5kIHRoZW0gaW5zaWRlIEFkZCBOZXcuLi4gbW9kYWxcblxuaW1wb3J0IHsgYWxsUHJvamVjdHNBcnIgfSBmcm9tICcuL21vZGVsJztcblxubGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYScpO1xuXG4vL2NyZWF0ZSBlbGVtZW50c1xubGV0IHByb2pEcm9wZG93bkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmxldCBwcm9qRHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxubGV0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sZXQgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxubGV0IHRhc2tEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmxldCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbmxldCB0YXNrRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmxldCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxubGV0IHRhc2tQcmlvcml0eVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxldCB0YXNrUHJpb3JpdHlJbnB1dF9sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xubGV0IHRhc2tQcmlvcml0eUlucHV0X21lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5sZXQgdGFza1ByaW9yaXR5SW5wdXRfaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbi8vIFNldCBhdHRyaWJ1dGVzXG5wcm9qRHJvcGRvd25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qRHJvcGRvd24nKTtcbnByb2pEcm9wZG93bkxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6ICc7XG5wcm9qRHJvcGRvd24uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qRHJvcGRvd24nKTtcbnByb2pEcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvakRyb3Bkb3duJyk7XG5cbnRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrTmFtZScpO1xudGFza0xhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgTmFtZTonO1xudGFza0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG50YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza05hbWUnKTtcbnRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tOYW1lJyk7XG5cbnRhc2tEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2tEZXNjJyk7XG50YXNrRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIERlc2NyaXB0aW9uOic7XG50YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xudGFza0Rlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza0Rlc2MnKTtcbnRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0Rlc2MnKTtcblxudGFza0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrRHVlRGF0ZScpO1xudGFza0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIER1ZSBEYXRlOic7XG50YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG50YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0R1ZURhdGUnKTtcblxudGFza1ByaW9yaXR5V3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0YXNrUHJpb3JpdHlfcmFkaW8nKTtcbnRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgJ0xvdycpO1xudGFza1ByaW9yaXR5SW5wdXRfbG93LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xudGFza1ByaW9yaXR5SW5wdXRfbG93LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza1ByaW9yaXR5X2xvdycpO1xudGFza1ByaW9yaXR5SW5wdXRfbG93LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrUHJpb3JpdHknKTtcbnRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuXG50YXNrUHJpb3JpdHlJbnB1dF9tZWQuc2V0QXR0cmlidXRlKCdsYWJlbCcsICdNZWRpdW0nKTtcbnRhc2tQcmlvcml0eUlucHV0X21lZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbnRhc2tQcmlvcml0eUlucHV0X21lZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQcmlvcml0eV9tZWQnKTtcbnRhc2tQcmlvcml0eUlucHV0X21lZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza1ByaW9yaXR5Jyk7XG50YXNrUHJpb3JpdHlJbnB1dF9tZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWQnKTtcblxudGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgJ0hpZ2gnKTtcbnRhc2tQcmlvcml0eUlucHV0X2hpZ2guc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG50YXNrUHJpb3JpdHlJbnB1dF9oaWdoLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza1ByaW9yaXR5X2hpZ2gnKTtcbnRhc2tQcmlvcml0eUlucHV0X2hpZ2guc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tQcmlvcml0eScpO1xudGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcblxudGFza1ByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dF9sb3cpO1xudGFza1ByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dF9tZWQpO1xudGFza1ByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dF9oaWdoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlRHJvcGRvd24oYWxsUHJvamVjdHNBcnIpIHtcbiAgLy9yZW1vdmUgYWxsIHZhbHVlcyBhbmQgcmVyZW5kZXJcbiAgY2xlYXJEcm9wZG93bk9wdGlvbnMoKTtcblxuICAvL2dldCB2YWx1ZXMgZnJvbSBwcm9qIGFycmF5IGFuZCBjcmVhdGUgb3B0aW9uIHRhZyBmb3IgZWFjaFxuICBpZiAoYWxsUHJvamVjdHNBcnIubGVuZ3RoID4gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGFsbFByb2plY3RzQXJyLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgcHJvakRyb3Bkb3duLmFwcGVuZENoaWxkKGNyZWF0ZURyb3Bkb3duT3B0aW9ucyhhbGxQcm9qZWN0c0FycltpXSkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckRyb3Bkb3duT3B0aW9ucygpIHtcbiAgLy9pZiBkaXYgaGFzIGNoaWxkcmVuLCByZW1vdmUgY2hpbGRyZW5cblxuICBpZiAocHJvakRyb3Bkb3duLmhhc0NoaWxkTm9kZXMpIHtcbiAgICB3aGlsZSAocHJvakRyb3Bkb3duLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2pEcm9wZG93bi5yZW1vdmVDaGlsZChwcm9qRHJvcGRvd24uZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duT3B0aW9ucyhwcm9qZWN0KSB7XG4gIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0Lm5hbWUpO1xuICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3RpZCcsIHByb2plY3QuaWQpO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHJldHVybiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIG5ld1Rhc2tGb3JtKCkge1xuICAvL3RvZ2dsZSBkaXNwbGF5XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdzaG93VGFza01vZHVsZScpO1xuICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd1Byb2pNb2R1bGUnKTtcblxuICAvL2NsZWFyIGVsZW1lbnRzXG4gIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xuXG4gIHBvcHVsYXRlRHJvcGRvd24oYWxsUHJvamVjdHNBcnIpO1xuICBkaXYuYXBwZW5kQ2hpbGQocHJvakRyb3Bkb3duTGFiZWwpO1xuICBkaXYuYXBwZW5kQ2hpbGQocHJvakRyb3Bkb3duKTtcbiAgZGl2LmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gIGRpdi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uTGFiZWwpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVMYWJlbCk7XG4gIGRpdi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUlucHV0KTtcbiAgZGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVdyYXBwZXIpO1xufVxuXG5leHBvcnQgeyBuZXdUYXNrRm9ybSB9O1xuIiwiLy90aGUgdmlldyBoYW5kbGVzIGhvdyB0aGUgVUkgaXMgZGlzcGxheWVkLiBPbmx5IHRhbGtzIHRvIGNvbnRyb2xsZXIuXG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfSBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgbmV3UHJvamVjdEZvcm0gfSBmcm9tICcuL25ld1Byb2plY3RGb3JtLmpzJztcbmltcG9ydCB7IG5ld1Rhc2tGb3JtIH0gZnJvbSAnLi9uZXdUYXNrRm9ybS5qcyc7XG5pbXBvcnQgeyBhbGxQcm9qZWN0c0FyciB9IGZyb20gJy4vbW9kZWwuanMnOyAvL21heWJlIG1vdmVcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0IH0gZnJvbSAnLi9kaXNwbGF5UHJvamVjdC5qcyc7XG5pbXBvcnQgeyBwb3B1bGF0ZURyb3Bkb3duIH0gZnJvbSAnLi9uZXdUYXNrRm9ybS5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0QWN0aW9ucyB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IHsgdGFza0FjdGlvbnMgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB7IHB1YlN1YiB9IGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlVmFsdWUgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB7IGdldFJhZGlvVmFsdWUgfSBmcm9tICcuL21vZGVsLmpzJztcblxuLy9leHBvcnQgZnVuY3Rpb24gdGhpc2lzdGhldmlldygpe1xubGV0IGRvbUNhY2hlZEVsZW1lbnRzID0ge1xuICBjb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcbiAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JyksXG4gIGhvbWVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4taG9tZScpLFxuICBhZGRCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tYWRkJyksXG4gIHZpZXdBbGxQcm9qZWN0c0J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1hbGxwcm9qJyksXG4gIHRhc2tib3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrYm94JyksXG4gIGFjdGl2ZUluZm9JdGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1pdGVtLWFjdGl2ZScpLFxuICBjb21wbGV0ZWRJbmZvSXRlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8taXRlbS1jb21wbGV0ZWQnKSxcbn07XG5cbi8vYWRkIGV2ZW50IGRlbGVnYXRpb24gZm9yIGhvbWUsIGFkZCBuZXcsIHZpZXcgYWxsIGFuZCBnaXR1Yi8vXG5kb21DYWNoZWRFbGVtZW50cy5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBuYXZDbGlja0hhbmRsZXIoZSkge1xuICBpZiAoZS50YXJnZXQgPT0gZG9tQ2FjaGVkRWxlbWVudHMuaG9tZUJ0bikge1xuICAgIGRpc3BsYXlQcm9qZWN0LmNsZWFyU2VjdGlvbigpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09IGRvbUNhY2hlZEVsZW1lbnRzLmFkZEJ0bikge1xuICAgIG9wZW5Nb2RhbCgpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09IGRvbUNhY2hlZEVsZW1lbnRzLnZpZXdBbGxQcm9qZWN0c0J0bikge1xuICAgIHJlbmRlclByb2plY3RDYXJkcygpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICAvL2dyZWV0aW5nXG4gIGxldCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuICB0b2RheS50ZXh0Q29udGVudCA9IGAgYCArIGZvcm1hdChuZXcgRGF0ZSgpLCAnZWVlZScpO1xuXG4gIC8vY2hlY2sgaWYgTFMgY29udGFpbnMgYW55dGhpbmdcbiAgbGV0IGFsbFByb2pBcnJMUztcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qQXJyTFMnKSkge1xuICAgIGFsbFByb2pBcnJMUyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2pBcnJMUycpKTtcbiAgfSBlbHNlIHtcbiAgICBhbGxQcm9qQXJyTFMgPSBbXTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0KCdkZWZhdWx0Jyk7XG4gIH1cblxuICAvL2xvb3Agb3ZlciBhbGxQcm9qQXJyTFMgYW5kIHB1c2ggZWFjaCBvYmogdG8gYWxsUHJvamVjdHNBcnIsXG4gIGFsbFByb2pBcnJMUy5mb3JFYWNoKChvYmopID0+IGFsbFByb2plY3RzQXJyLnB1c2gob2JqKSk7XG5cbiAgLy8gbG9vcCBvdmVyIGFsbFByb2plY3RzQXJyIGFuZCBzZXQgcHJvdG90eXBlcyB0byBiZSBhYmxlIHRvIHVzZSBtZXRob2RzXG4gIGFsbFByb2plY3RzQXJyLmZvckVhY2goKG9iaikgPT4gT2JqZWN0LnNldFByb3RvdHlwZU9mKG9iaiwgcHJvamVjdEFjdGlvbnMpKTtcblxuICAvL3NldCBwcm90b3Mgb24gdGFza3NcbiAgLy9sb29wIHRocm91Z2ggcHJvaiBhcnIgJiBkbyBzb21ldGhpbmcgdG8gZWFjaCBwcm9qIG9ialxuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzQXJyKSB7XG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tBcnIpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXNrLCB0YXNrQWN0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUHJvamVjdENhcmRzKCk7XG4gIHJlbmRlckluZm9DYXJkcyhhbGxQcm9qZWN0c0Fycik7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RDYXJkcygpIHtcbiAgLy8xLiBjbGVhcnMgcHJvamVjdCBkaXNwbGF5IGFyZWFcbiAgcmVtb3ZlQ2hpbGRyZW4oZG9tQ2FjaGVkRWxlbWVudHMudGFza2JveCk7XG4gIC8vMi4gbG9vcHMgb3ZlciBhbGwgcHJvamVjdHMgYXJyYXkgKGlmIGFyciBub3QgZW1wdHkpICYgY3JlYXRlcyBwcm9qZWN0IGNhcmQgZm9yIGVhY2ggcHJvamVjdCAmIGFwcGVuZCB0byB0YXNrYm94XG4gIGlmIChhbGxQcm9qZWN0c0Fyci5sZW5ndGggPiAwKSB7XG4gICAgYWxsUHJvamVjdHNBcnIuZm9yRWFjaChjcmVhdGVQcm9qZWN0SXRlbUNhcmQpO1xuICB9XG59XG5cbi8vY2FsbGJhY2sgZnJvbSBmb3JlYWNoIGFib3ZlXG4vL2NhbGxlZCBvbiBwYWdlIGxvYWQgYW5kIGFsc28gd2hlbiBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SXRlbUNhcmQoaXRlbSwgaW5kZXgpIHtcbiAgLy8gY29uc29sZS5sb2coJ2NyZWF0ZVByb2plY3RJdGVtQ2FyZCBpdGVtOiAnLCBpdGVtKTsgLy9wcm9qZWN0XG4gIC8vIGNvbnNvbGUubG9nKCdjcmVhdGVQcm9qZWN0SXRlbUNhcmQgaW5kZXg6ICcsIGluZGV4KTsgLy9pbmRleCBpbiBhbGxwcm9qYXJyXG5cbiAgLy9jcmVhdGUgZWxlbWVudHNcbiAgbGV0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBwcm9qQ2xpY2tIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT0gcHJvamVjdEl0ZW1EZWxJY29uKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYWxsUHJvakFycjogJywgYWxsUHJvamVjdHNBcnIpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2l0ZW06ICcsIGl0ZW0pO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2luZGV4OiAnLCBpbmRleCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTsgLy90aGUgY2FyZCBkaXYgdGhhdCBoYXMgYmVlbiBjbGlja2VkIG9uXG5cbiAgICAgIC8vcmVtb3ZlIHByb2pcbiAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdEl0ZW0sIGFsbFByb2plY3RzQXJyW2luZGV4XSk7IC8vaW4gdmlldy4gbWlnaHQgbmVlZCB0byBtb3ZlIHRvIHByb2oucHJvdG90eXBlXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vY2xlYXIgc2VjdGlvblxuICAgICAgZGlzcGxheVByb2plY3QuY2xlYXJTZWN0aW9uKCk7XG4gICAgICAvL3RvZ2dsZSBjdXJyZW50UHJvaiBib29sZWFuIGluIHByb2plY3RcbiAgICAgIGFsbFByb2plY3RzQXJyW2luZGV4XS5pc0N1cnJlbnRQcm9qID0gdHJ1ZTtcblxuICAgICAgLy9kaXNwbGF5IHByb2plY3QgaW4gd2hpdGUgc2VjdGlvblxuICAgICAgZGlzcGxheVByb2plY3QuZGlzcGxheShhbGxQcm9qZWN0c0FycltpbmRleF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiLCBcImh2ci1ncm93LXNoYWRvd1wiKTtcbiAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG5cbiAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzQXJyW2luZGV4XS5uYW1lO1xuICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gIGxldCBwcm9qZWN0VGFza05vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qZWN0VGFza05vLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbS10YXNrbm8nKTtcblxuICBsZXQgcHJvamVjdEFjdGl2ZVRhc2tObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvamVjdEFjdGl2ZVRhc2tOby5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0tdGFza25vJyk7XG5cbiAgbGV0IHByb2plY3RDb21wbGV0ZWRUYXNrTm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2plY3RDb21wbGV0ZWRUYXNrTm8uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtLXRhc2tubycpO1xuXG4gIGxldCBub09mVGFza3MgPSBpdGVtLmdldE5vT2ZUYXNrcygpO1xuXG4gIGlmIChub09mVGFza3MgPT09IDEpIHtcbiAgICBwcm9qZWN0VGFza05vLnRleHRDb250ZW50ID0gYCR7bm9PZlRhc2tzfSB0YXNrYDtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0VGFza05vLnRleHRDb250ZW50ID0gYCR7bm9PZlRhc2tzfSB0YXNrc2A7XG4gIH1cblxuICBsZXQgbm9PZkFjdGl2ZVRhc2tzID0gaXRlbS5nZXROb09mQWN0aXZlVGFza3MoKTtcbiAgaWYgKG5vT2ZBY3RpdmVUYXNrcyA9PT0gMSkge1xuICAgIHByb2plY3RBY3RpdmVUYXNrTm8udGV4dENvbnRlbnQgPSBgJHtub09mQWN0aXZlVGFza3N9IGFjdGl2ZSB0YXNrYDtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0QWN0aXZlVGFza05vLnRleHRDb250ZW50ID0gYCR7bm9PZkFjdGl2ZVRhc2tzfSBhY3RpdmUgdGFza3NgO1xuICB9XG5cbiAgbGV0IG5vT2ZDb21wbGV0ZWRUYXNrcyA9IGl0ZW0uZ2V0Tm9PZkNvbXBsZXRlZFRhc2tzKCk7XG4gIGlmIChub09mQ29tcGxldGVkVGFza3MgPT09IDEpIHtcbiAgICBwcm9qZWN0Q29tcGxldGVkVGFza05vLnRleHRDb250ZW50ID0gYCR7bm9PZkNvbXBsZXRlZFRhc2tzfSBjb21wbGV0ZWQgdGFza2A7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdENvbXBsZXRlZFRhc2tOby50ZXh0Q29udGVudCA9IGAke25vT2ZDb21wbGV0ZWRUYXNrc30gY29tcGxldGVkIHRhc2tzYDtcbiAgfVxuXG4gIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RUYXNrTm8pO1xuICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0QWN0aXZlVGFza05vKTtcbiAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdENvbXBsZXRlZFRhc2tObyk7XG5cbiAgbGV0IHByb2plY3RJdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0SXRlbVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtLXdyYXBwZXInKTtcbiAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1XcmFwcGVyKTtcblxuICBsZXQgcHJvamVjdEl0ZW1EZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdEl0ZW1EZWxCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtLWRlbGJ0bicpO1xuXG4gIGxldCBwcm9qZWN0SXRlbURlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgcHJvamVjdEl0ZW1EZWxJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvaW1hZ2VzL2JpbjI0LnBuZycpO1xuICBwcm9qZWN0SXRlbURlbEljb24uY2xhc3NMaXN0LmFkZCgnaHZyLXdvYmJsZS10b3AnKTtcbiAgcHJvamVjdEl0ZW1EZWxCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1EZWxJY29uKTtcblxuICBwcm9qZWN0SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1EZWxCdG4pO1xuXG4gIC8vMy4gYXBwZW5kIGVhY2ggcHJvamVjdCBjYXJkcyB0byAgZGlzcGxheSBhcmVhXG4gIGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3guYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJdGVtLCBwcm9qT2JqKSB7XG4gIC8vcmVtb3ZlIHByb2plY3QgY2FyZCBmcm9tIEFsbCBQcm9qZWN0cyBhcmVhXG5cbiAgLy9QUk9KRUNUSVRFTSBJUyBUSEUgRElWXG4gIC8vUFJPSkVDVE9CSiBJUyBUSEUgT0JKXG5cbiAgLy9yZW1vdmVzIGNhcmRcbiAgZG9tQ2FjaGVkRWxlbWVudHMudGFza2JveC5yZW1vdmVDaGlsZChwcm9qZWN0SXRlbSk7XG5cbiAgLy9maW5kIGluZGV4IG9mIHByb2pPYmogaW4gYXJyXG4gIGxldCBpbmRleE9mUHJvak9iaiA9IGFsbFByb2plY3RzQXJyLmZpbmRJbmRleCgob2JqZWN0KSA9PiBvYmplY3QgPT09IHByb2pPYmopO1xuXG4gIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBhbGxQcm9qZWN0c0FyclxuICBhbGxQcm9qZWN0c0Fyci5zcGxpY2UoaW5kZXhPZlByb2pPYmosIDEpO1xuXG4gIC8vcmUtc2VuZCBhcnIgdG8gbG9jYWxzdG9yYWdlIHRvIGJlIHVwIHRvIGRhdGVcbiAgcHJvak9iai5hZGRUb0xvY2FsU3RvcmFnZSgpO1xuXG4gIC8vcmVtb3ZlIHByb2plY3QgZnJvbSB3aGl0ZSBzZWN0aW9uIGlmIGN1cnJlbnQgcHJvalxuICBpZiAoKHByb2pPYmouaXNDdXJyZW50UHJvaiA9IHRydWUpKSB7XG4gICAgZGlzcGxheVByb2plY3QuY2xlYXJTZWN0aW9uKCk7XG4gICAgcHJvak9iai5pc0N1cnJlbnRQcm9qID0gZmFsc2U7XG4gIH1cblxuICAvL3JlbW92ZSBwcm9qZWN0IG5hbWUgZnJvbSBkcm9wZG93biBpbiBtb2RhbFxuICBwb3B1bGF0ZURyb3Bkb3duKGFsbFByb2plY3RzQXJyKTtcbiAgLy9yZXJlbmRlciBkaXNwbGF5XG4gIHJlbmRlclByb2plY3RDYXJkcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySW5mb0NhcmRzKGFsbFByb2pBcnIpIHtcbiAgLy90aGlzIGZ1bmN0aW9uIHdpbGwgZGlzcGxheSB0aGUgY3VycmVudCBudW1iZXIgb2YgQUNUSVZFLCBDT01QTEVURUQgYW5kIE9WRVJEVUUgdGFza3NcbiAgLy90aGlzIGZ1bmN0aW9uIHdpbGwgbmVlZCB0byBiZSBjYWxsZWQgdXBvbiBzdGFydGluZyAmIGFsc28gd2hlbmV2ZXIgYSBuZXcgdGFzayBpcyBjcmVhdGVkLCBkZWxldGVkLCBkYXRlIGNoYW5nZWQgb3IgbWFya2VkIGNvbXBsZXRlXG5cbiAgLy9BQ1RJVkVcbiAgbGV0IHJlc3VsdCA9IGFsbFByb2pBcnIucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG9iaikge1xuICAgIHJldHVybiBhY2MgKyBvYmouZ2V0Tm9PZkFjdGl2ZVRhc2tzKCk7XG4gIH0sIDApO1xuXG4gIGxldCBhY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGFjdGl2ZS50ZXh0Q29udGVudCA9IGAgQWN0aXZlYDtcbiAgZG9tQ2FjaGVkRWxlbWVudHMuYWN0aXZlSW5mb0l0ZW0udGV4dENvbnRlbnQgPSBgJHtyZXN1bHR9YDtcbiAgZG9tQ2FjaGVkRWxlbWVudHMuYWN0aXZlSW5mb0l0ZW0uYXBwZW5kQ2hpbGQoYWN0aXZlKTtcblxuICAvLyBDT01QTEVURUQgVEFTS1NcbiAgLy9sb29wIG92ZXIgYWxsIHByb2ogYXJyLCBmb3IgZWFjaCBwcm9qLCBsb29wIG92ZXIgdGFza3NBcnIgYW5kIGNvdW50IGhvdyBtYW55IGFyZSBpc0NvbXBsZXRlID0gdHJ1ZSwgYWRkIHRvdGFsIG51bWJlciBvZiB0YXNrc1xuICAvLyB1cGRhdGUgY2FyZFxuXG4gIGxldCBjb21wbGV0ZWQgPSBhbGxQcm9qQXJyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBvYmopIHtcbiAgICByZXR1cm4gYWNjICsgb2JqLmdldE5vT2ZDb21wbGV0ZWRUYXNrcygpO1xuICB9LCAwKTtcblxuICBsZXQgY29tcGxldGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb21wbGV0ZVNwYW4udGV4dENvbnRlbnQgPSBgIENvbXBsZXRlYDtcbiAgZG9tQ2FjaGVkRWxlbWVudHMuY29tcGxldGVkSW5mb0l0ZW0udGV4dENvbnRlbnQgPSBgJHtjb21wbGV0ZWR9YDtcbiAgZG9tQ2FjaGVkRWxlbWVudHMuY29tcGxldGVkSW5mb0l0ZW0uYXBwZW5kQ2hpbGQoY29tcGxldGVTcGFuKTtcblxuICAvL09WRVJEVUUgVEFTS1NcbiAgLy9sb29wIG92ZXIgYWxsIHByb2ogYXJyLCBmb3IgZWFjaCBwcm9qLCBsb29wIG92ZXIgdGFza3NBcnIgYW5kIGNvdW50IGhvdyBtYW55IGhhdmUgZHVlIGRhdGUgaW4gdGhlIHBhc3QobGVzcyB0aGFuIGN1cnJlbnQgZGF0ZSksIGFkZCB0b3RhbCBudW1iZXIgb2YgdGFza3NcbiAgLy8gdXBkYXRlIGNhcmRcbn1cblxuLy8gLS0tLS0tLS0tIENSRUFURSBORVcgLSBNT0RBTCAtLS0tLS0tLS0tLS0tLS0tXG5sZXQgbW9kYWxFbGVtZW50cyA9IHtcbiAgc3VibWl0QnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLFxuICBjbGVhckJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmNsZWFyLWJ0bicpLFxuICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyksXG4gIG92ZXJsYXk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JyksXG4gIGNsb3NlTW9kYWxCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UnKSxcbn07XG5cbi8vb3BlbnMgbW9kYWwgdG8gY3JlYXRlIG5ldyBwcm9qZWN0L3Rhc2tcbmNvbnN0IG9wZW5Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kYWxFbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbW9kYWxFbGVtZW50cy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBjbGVhcklucHV0VmFsdWVzKCk7XG59O1xuLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gb3BlbiBtb2RhbCBvbiBjbGlja1xuLy9kb21DYWNoZWRFbGVtZW50cy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Nb2RhbCk7XG5cbi8vY2xvc2VzIG1vZGFsXG5jb25zdCBjbG9zZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuICBtb2RhbEVsZW1lbnRzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBtb2RhbEVsZW1lbnRzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59O1xuLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2xvc2UgbW9kYWwgb24gY2xpY2tcbm1vZGFsRWxlbWVudHMuY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xubW9kYWxFbGVtZW50cy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5tb2RhbEVsZW1lbnRzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG4vLyBQVUJTVUIgLSBub3Qgd29ya2luZ1xuXG4vLyBtb2RhbEVsZW1lbnRzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBwdWJTdWIucHVibGlzaCgnZXZlbnQ6bmFtZS1jaGFuZ2VkJywge25hbWU6IGlucHV0LnZhbHVlfSk7XG4vLyAgIH0pO1xuXG4vLyAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2V2ZW50Om5hbWUtY2hhbmdlZCcsIGRhdGEgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGBZb3VyIG5hbWUgaXM6ICR7ZGF0YS5uYW1lfWApO1xuLy8gICB9KTtcblxubGV0IHByb2pOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvak5hbWUnKTtcblxubGV0IHNlbGVjdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qRHJvcGRvd24nKTtcbmxldCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tOYW1lJyk7XG5sZXQgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2MnKTtcbmxldCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEdWVEYXRlJyk7XG5sZXQgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ByaW9yaXR5X3JhZGlvJyk7XG5cbmxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEnKTtcblxubGV0IGNyZWF0ZU5ld0VsZW1lbnRzID0ge1xuICB0b2dnbGVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyksXG5cbiAgdG9nZ2xlTW9kYWxEaXNwbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYScpO1xuXG4gICAgaWYgKGNyZWF0ZU5ld0VsZW1lbnRzLnRvZ2dsZUlucHV0LmNoZWNrZWQpIHtcbiAgICAgIC8vQWRkIE5ldyBUYXNrIHNob3dzICh0b2dnbGUgY2hlY2tlZClcbiAgICAgIGNsZWFySW5wdXRWYWx1ZXMoKTtcbiAgICAgIHJlbW92ZUNoaWxkcmVuKGRpdik7XG4gICAgICBuZXdUYXNrRm9ybSgpOyAvL2xvYWQgTmV3IFRhc2sgSW5wdXRzXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vQWRkIE5ldyBQcm9qZWN0IFNob3dzICh0b2dnbGUgbm90IGNoZWNrZWQpXG4gICAgICBjbGVhcklucHV0VmFsdWVzKCk7XG4gICAgICByZW1vdmVDaGlsZHJlbihkaXYpO1xuICAgICAgbmV3UHJvamVjdEZvcm0oKTtcbiAgICB9XG4gIH0sXG59O1xuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG4vL3Byb2plY3QvdGFzayB0b2dnbGVcbmNyZWF0ZU5ld0VsZW1lbnRzLnRvZ2dsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICdjbGljaycsXG4gIGNyZWF0ZU5ld0VsZW1lbnRzLnRvZ2dsZU1vZGFsRGlzcGxheSxcbik7XG5cbi8vU1VCTUlUIEJVVFRPTlxubW9kYWxFbGVtZW50cy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy90aGlzIGZ1bmN0aW9uIG1heSBuZWVkIHRvIGJlIG1vdmVkIHRvIGNvbnRyb2xsZXJcbiAgLy9nZXQgdGhlIHZhbHVlIGZyb20gdGhlIGlucHV0cywgcGFzcyB0byBjb250cm9sbGVyXG4gIC8vKGNvbnRyb2xsZXIgd2lsbCBwYXNzIHRvIG1vZGVsLCB0byBkaXNwbGF5IG9uIHNjcmVlbiApXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vZ2V0IGxhdGVzdCB2YWx1ZXNcbiAgcHJvak5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qTmFtZScpO1xuXG4gIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93VGFza01vZHVsZScpKSB7XG4gICAgLy9nZXQgdGFzayBkYXRhXG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2pEcm9wZG93bicpO1xuICAgIHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza05hbWUnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpO1xuICAgIHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0R1ZURhdGUnKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUHJpb3JpdHlfcmFkaW8nKTtcblxuICAgIC8vc2F2ZSB2YWx1ZXNcbiAgICBsZXQgc2VsZWN0ZWRQcm9qTmFtZSA9IHNlbGVjdGVkUHJvamVjdC52YWx1ZSB8fCAnZGVmYXVsdCc7XG4gICAgbGV0IHByb2pJRCA9XG4gICAgICBzZWxlY3RlZFByb2plY3Qub3B0aW9uc1tzZWxlY3RlZFByb2plY3Quc2VsZWN0ZWRJbmRleF0uZGF0YXNldC5wcm9qZWN0aWQ7XG4gICAgbGV0IHRhc2tOYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgLy8gbGV0IHRhc2tEdWVEYXRlID0gdGFza0R1ZURhdGVJbnB1dC52YWx1ZTtcblxuICAgIGxldCB0YXNrRHVlRGF0ZSA9IGZvcm1hdERhdGVWYWx1ZSh0YXNrRHVlRGF0ZUlucHV0LnZhbHVlKTtcblxuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBnZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAvL2NyZWF0ZSB0YXNrXG4gICAgbGV0IGNyZWF0ZWRUYXNrID0gY3JlYXRlTmV3VGFzayhcbiAgICAgIHRhc2tOYW1lLFxuICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgdGFza0R1ZURhdGUsXG4gICAgICB0YXNrUHJpb3JpdHksXG4gICAgICBzZWxlY3RlZFByb2pOYW1lLFxuICAgICAgcHJvaklELFxuICAgICk7IC8vaW4gY29udHJvbGxlclxuXG4gICAgLy9maW5kIHByb2plY3QgaW4gQWxsUHJvakFyclxuICAgIGxldCBmb3VuZFByb2ogPSBhbGxQcm9qZWN0c0Fyci5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qSUQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdmb3VuZFByb2o6ICcsIGZvdW5kUHJvaik7XG5cbiAgICAvL0NsZWFyIHByb2plY3Qgc2VjdGlvblxuICAgIGRpc3BsYXlQcm9qZWN0LmNsZWFyU2VjdGlvbigpO1xuXG4gICAgLy9yZXJlbmRlciBwcm9qZWN0IHNlY3Rpb24gd2l0aCBjdXJyZW50IHByb2plY3RcbiAgICBkaXNwbGF5UHJvamVjdC5kaXNwbGF5KGZvdW5kUHJvaik7XG5cbiAgICAvL2Vsc2UgaWYgZGl2IGhhcyBjbGFzcyBvZiBwcm9qZWN0XG4gIH0gZWxzZSBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucygnc2hvd1Byb2pNb2R1bGUnKSkge1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2pOYW1lSW5wdXQudmFsdWU7XG4gICAgY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSk7IC8vaW4gY29udHJvbGxlclxuICAgIHJlbmRlclByb2plY3RDYXJkcygpO1xuICB9XG5cbiAgcmVuZGVyUHJvamVjdENhcmRzKCk7XG59KTtcblxuLy9DTEVBUiBCVVRUT05cbm1vZGFsRWxlbWVudHMuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhcklucHV0VmFsdWVzKTtcblxuZnVuY3Rpb24gY2xlYXJJbnB1dFZhbHVlcygpIHtcbiAgLy9nZXQgbGF0ZXN0IHZhbHVlc1xuICBjb25zb2xlLmxvZygnY2xlYXJJbnB1dFZhbHVlcyBjYWxsZWQnKTtcbiAgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTmFtZScpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpO1xuICBwcm9qTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2pOYW1lJyk7XG5cbiAgaWYgKHRhc2tOYW1lSW5wdXQgIT09IG51bGwgJiYgdGFza0Rlc2NyaXB0aW9uSW5wdXQgIT09IG51bGwpIHtcbiAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgfSBlbHNlIGlmIChwcm9qTmFtZUlucHV0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgcHJvak5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29udHJvbGxlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==