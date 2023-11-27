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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,SAAS;EACT,6BAA6B;AAC/B;AACA;EACE,iDAAiD;EACjD,yCAAyC;AAC3C;AACA;EACE,iDAAiD;EACjD,yCAAyC;AAC3C;AACA;EACE,sBAAsB;EACtB,kDAAkD;EAClD,0CAA0C;AAC5C;AACA;EACE,2BAA2B;EAC3B,8CAA8C;EAC9C,sCAAsC;AACxC;AACA;EACE,sDAAsD;EACtD,8CAA8C;AAChD;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF;AACA;EACE;IACE,WAAW;IACX,SAAS;EACX;EACA;IACE,WAAW;IACX,UAAU;IACV,eAAe;EACjB;AACF;AACA;EACE;IACE,WAAW;IACX,SAAS;EACX;EACA;IACE,WAAW;IACX,UAAU;IACV,eAAe;EACjB;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,QAAQ;IACR,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,QAAQ;IACR,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,UAAU;IACV;;;;;;wBAMoB;EACtB;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV;;;;;;8BAM0B;EAC5B;AACF;AACA;EACE;IACE,UAAU;IACV;;;;;;wBAMoB;EACtB;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV;;;;;;8BAM0B;EAC5B;AACF;;AAEA,yBAAyB;AACzB;EACE;IACE,+BAA+B;IAC/B,uBAAuB;EACzB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,0BAA0B;IAC1B,kBAAkB;EACpB;AACF;AACA;EACE;IACE,+BAA+B;IAC/B,uBAAuB;EACzB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;EACA;IACE,8BAA8B;IAC9B,sBAAsB;EACxB;EACA;IACE,0BAA0B;IAC1B,kBAAkB;EACpB;AACF;AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,iDAAiD;EACjD,yCAAyC;EACzC,oCAAoC;EACpC,gCAAgC;EAChC,wBAAwB;AAC1B;AACA;;;EAGE,sCAAsC;EACtC,8BAA8B;EAC9B,8BAA8B;EAC9B,sBAAsB;EACtB,8CAA8C;EAC9C,sCAAsC;EACtC,oCAAoC;EACpC,4BAA4B;AAC9B;;AAEA,sBAAsB;AACtB;EACE,8BAA8B,EAAE,wDAAwD;EACxF,wBAAwB,EAAE,oCAAoC;EAC9D,mCAAmC,EAAE,yBAAyB;EAC9D,yBAAyB,EAAE,sCAAsC;EACjE,qBAAqB;AACvB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,wBAAwB;EAC1B,EAAE,yFAAyF;EAC3F;IACE,wBAAwB;EAC1B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,uBAAuB;EACzB,EAAE,qCAAqC;EACvC;IACE,uBAAuB;EACzB;AACF;;AAEA,gBAAgB;AAChB;EACE,qBAAqB;EACrB,sBAAsB;EACtB,iDAAiD;EACjD,yCAAyC;EACzC,oCAAoC;EACpC,iCAAiC;EACjC,yBAAyB;EACzB,kDAAkD;EAClD,0CAA0C;AAC5C;AACA;;;EAGE,gDAAgD;EAChD,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;AACA;EACE;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;;;;GAIG","sourcesContent":["/* CSS for ToDo List */\n* {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  list-style-type: none;\n  box-sizing: border-box;\n  font-family: 'Nunito';\n}\n\n:root {\n  --gradient_bg_color: #ede5fd;\n  --gradient_spot1_color: #e1cbfb;\n  --gradient_spot1_w: 75%;\n  --gradient_spot1_h: 75%;\n  --gradient_spot1_x: 0%;\n  --gradient_spot1_y: 0%;\n  --gradient_spot2_color: #ffe0d6;\n  --gradient_spot2_w: 75%;\n  --gradient_spot2_h: 75%;\n  --gradient_spot2_x: 100%;\n  --gradient_spot2_y: 0%;\n  --gradient_spot3_color: #ebe0ff;\n  --gradient_spot3_w: 75%;\n  --gradient_spot3_h: 75%;\n  --gradient_spot3_x: 100%;\n  --gradient_spot3_y: 100%;\n\n  --gradient_spot4_color: #ffdbf3;\n  --gradient_spot4_w: 75%;\n  --gradient_spot4_h: 75%;\n  --gradient_spot4_x: 0%;\n  --gradient_spot4_y: 100%;\n\n  --gradient_spot2_w: 100%;\n  --gradient_spot2_x: 94%;\n  --gradient_spot2_h: 44%;\n  --gradient_spot1_w: 51%;\n  --gradient_spot1_h: 64%;\n  --gradient_spot1_x: 7%;\n  --gradient_spot3_w: 100%;\n  --gradient_spot3_h: 82%;\n  --gradient_spot3_x: 90%;\n  --gradient_spot4_w: 64%;\n  --gradient_spot4_x: 0%;\n  --gradient_spot4_y: 45%;\n\n  /* Project Colours */\n  --project_color1: #ffedd6;\n  --project_color2: #ffcb9a;\n  --project_color3: #f8aef9;\n  --project_color4: #b8dbfd;\n  --project_color5: #c8bafa;\n  --project_color6: #8fe4e9;\n\n  --darkGrey: #252b3d;\n  --medGrey: #94969b;\n  --lightGrey: #eee;\n}\n\n.welcome-text {\n  color: var(--lightGrey);\n  /* background: linear-gradient(45deg, var(--project_color4) 30%, var(--project_color6) 100%); */\n  text-align: center;\n  padding: 10px;\n\n  /* background: -webkit-linear-gradient(#fa83fc, #cabcfb); */\n  /* background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; */\n  color: var(--lightGrey);\n}\n\n@font-face {\n  font-family: 'Nunito';\n  src:\n    url('./fonts/Nunito-VariableFont_wght.ttf') format('opentype'),\n    url('./fonts/Nunito-Italic-VariableFont_wght.ttf') format('opentype');\n  font-style: normal;\n}\n\n.fancy-gradient {\n  background-color: var(--gradient_bg_color);\n  background-image: radial-gradient(\n      var(--gradient_spot1_w) var(--gradient_spot1_h) at left\n        var(--gradient_spot1_x) top var(--gradient_spot1_y),\n      var(--gradient_spot1_color),\n      transparent\n    ),\n    radial-gradient(\n      var(--gradient_spot2_w) var(--gradient_spot2_h) at left\n        var(--gradient_spot2_x) top var(--gradient_spot2_y),\n      var(--gradient_spot2_color),\n      transparent\n    ),\n    radial-gradient(\n      var(--gradient_spot3_w) var(--gradient_spot3_h) at left\n        var(--gradient_spot3_x) top var(--gradient_spot3_y),\n      var(--gradient_spot3_color),\n      transparent\n    ),\n    radial-gradient(\n      var(--gradient_spot4_w) var(--gradient_spot4_h) at left\n        var(--gradient_spot4_x) top var(--gradient_spot4_y),\n      var(--gradient_spot4_color),\n      transparent\n    );\n}\n\n/* \n  .animated {\n    animation-fill-mode: both;\n  }\n@keyframes chameleon {\n\n    0% {\n      color: var(--project_color1);\n    }\n    14.2999% {\n      color: var(--project_color2);\n    }\n    28.5999% {\n      color: var(--project_color3);\n    }\n    42.8998% {\n      color: var(--project_color4);\n    }\n    57.1996% {\n      color: var(--project_color5);\n    }\n    71.4995% {\n      color: var(--project_color6);\n    }\n    85.7994% {\n      color: violet;\n    }\n    100% {\n      color: red;\n    }\n  }\n  .chameleon {\n    animation-name: chameleon;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n  }  */\n/* TO USE, ADD CLASS ANIMATE AND CLASS CHAMELEON */\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #222;\n  position: relative;\n  min-height: 100vh;\n  overflow: hidden;\n  cursor: url('./images/cursor16.png'), auto;\n}\n\n.container {\n  padding: 20px;\n  border-radius: 20px;\n  margin: auto;\n  height: 85vh;\n  width: 85vw;\n  background-color: rgba(246, 243, 248, 0.622);\n  background-color: rgb(246 243 248 / 56%); /* gradient blend into bg  */\n  box-shadow: 0px 0px 0px 1px floralwhite;\n  display: grid;\n  overflow: auto;\n  grid-template-columns: 1fr 3fr 2fr;\n  grid-template-rows: 0.5fr 1.5fr 0.5fr 3fr;\n  grid-template-areas:\n    'nav hello projheading'\n    'nav info project'\n    'nav heading project'\n    'nav taskbox project';\n  box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n    0 41.8px 33.4px rgba(0, 0, 0, 0.086);\n}\n\n.nav {\n  grid-area: nav;\n  border-radius: 10px;\n  margin: 0px 30px 0px 20px;\n  background-color: var(--darkGrey);\n  box-shadow: 0px 0px 10px 3px lightgray;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.nav .logo {\n  align-self: center;\n  margin: 5px auto;\n}\n\n/* stying of buttons on dash */\n.btn {\n  display: inline-block;\n  display: flex;\n  gap: 10px;\n  padding: 0.8rem;\n  background: transparent;\n  border: solid 5px transparent;\n  color: #94969b;\n  cursor: pointer;\n  transition: 0.3s ease;\n  font-size: 0.9rem;\n  width: 100%;\n  text-align: left;\n  align-items: center;\n}\n\n.btn-github a {\n  color: #94969b;\n}\n\n.btn:hover,\n.btn-github:hover {\n  background-color: #464b5b;\n  color: #fff;\n  border-left: solid 5px #ff94ea;\n}\n\n.btn img {\n  margin-right: 5px;\n}\n\n.hello {\n  grid-area: hello;\n  /* background-color: #e1cbfb; */\n  color: #302b2b;\n  color: var(--darkGrey);\n  font-size: 40px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n}\n\n.img-hand {\n  /* width: 17%; */\n  width: 75px;\n  padding: 0px 10px;\n  margin-bottom: 5px;\n}\n\n.info {\n  grid-area: info;\n\n  /* background: linear-gradient(0deg, rgba(236,224,253,1) 51%, rgba(238,238,238,1) 99%);  */\n  background: linear-gradient(\n    0deg,\n    rgba(236, 224, 253, 1) 51%,\n    rgba(246, 237, 243, 1) 99%\n  );\n  display: flex;\n  border-radius: 10px;\n  /* background-color: #ebe0ff; */\n  position: relative;\n  /* box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072);  */\n}\n\n.info::before {\n  content: '';\n  background-image: linear-gradient(\n      0deg,\n      rgba(236, 224, 253, 0.1) 11%,\n      rgba(246, 237, 243, 1) 99%\n    ),\n    url('/src/images/low-poly-grid-haikei.png');\n\n  background-size: contain;\n  background-position: 100px 0px;\n  border-radius: 10px;\n  /* border: solid 1px #c6adf2; */\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.5;\n}\n\n.info-item {\n  padding: 10px;\n  margin: 20px 10px;\n  width: 100px;\n  background-color: #c8aef8; /* best colour on macmini  */\n  background-color: #af76f3; /* best color on macbook */\n  border-left: solid 2px #c6adf2;\n  border-bottom: solid 2px #c6adf2;\n  color: whitesmoke;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  transition: 0.3s ease;\n  position: relative;\n  box-shadow:\n    0 2px 4px #3a474e26,\n    0 1px 2px #3a474e26;\n  font-size: 30px;\n}\n.info span {\n  font-size: 19px;\n}\n\n.info-item:hover {\n  transform: translateY(-5px);\n  background-color: #c6adf2;\n  /* background-color: #b491f1; */\n  box-shadow: 0px 0px 8px 5px whitesmoke;\n  border-left: solid 2px #d1bcf8;\n  border-bottom: solid 2px #d1bcf8;\n}\n\n.heading {\n  grid-area: heading;\n  /* background-color:#ede5fd; */\n  margin-top: 10px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n}\n\n/* ALL PROJECTS DISPLAY */\n.taskbox {\n  grid-area: taskbox;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n\n  perspective: 60rem;\n}\n\n.project-item {\n  border-radius: 10px;\n  height: 140px;\n  cursor: pointer;\n  margin: 8px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */\n  /* box-shadow:\n    0 2px 4px #3a474e26,\n    0 1px 2px #3a474e26; */\n\n    align-items: center;\n  background: linear-gradient(143deg, rgba(204,169,226,1) 0%, rgba(227,159,209,0.7637648809523809) 46%, rgba(253,147,190,1) 100%);\n\n  background: linear-gradient(143deg, rgba(204,169,226,1) 0%, rgba(227,159,209,0.7637648809523809) 46%, #fee0d7 100%);\n  /* #ffd3c6 */\n\n  /* border-left: solid 2px #fbded7;\n  border-bottom: solid 2px #fbded7; */\n\n  box-shadow: 0 2px 4px #3a474e26, 0 1px 2px #3a474e26;\n  transition: 0.4s ease;\n\n  transition:\n    rotate 400ms,\n    scale 200ms;\n}\n\n.project-item:hover  {\n  rotate: y 20deg;\n  scale: 1.05;\n    }\n\n.project-item h5 {\n  font-size: 20px;\n  color: #4f346b;\n  padding-left: 5px;\n  align-self: flex-start;\n  z-index: 5;\n  margin-bottom: 5px;\n}\n\np.project-item-taskno {\n  color: #fff;\n  font-weight: 200;\n  font-size: 14px;\n  letter-spacing: 0.1px;\n  align-self: flex-start;\n  line-height: 1.4;\n}\np.project-item-taskno:nth-child(2) {\n  /* border-bottom: 2px solid; */\n  font-size: 18px;\n  align-self: center;\n  font-style: italic;\n  margin-top: -10px;\n  margin-bottom: 10px;\n}\n\n\n\n\ndiv.project-item-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  align-self: end;\n \n}\nbutton.project-item-delbtn {\n  border: solid 1px transparent;\n  transition: 0.3s;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n\n\n/* PROJECT SECTION ------------------------------------- */\n.projheading {\n  grid-area: projheading;\n  background-color: white;\n  color: var(--darkGrey);\n  display: flex;\n\n  align-items: center;\n  gap: 5px;\n  margin-top: -20px;\n  margin-right: -20px;\n  margin-left: 40px;\n\n  border-top-right-radius: 20px;\n  border-top-left-radius: 15px;\n  padding-left: 20px;\n  z-index: 1;\n}\n\n.project {\n  grid-area: project;\n  background-color: #fff;\n  margin-right: -20px;\n  margin-left: 40px;\n  margin-bottom: -20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 15px;\n  box-shadow: -5px -46px 58px -20px lightgrey;\n  padding: 10px;\n  background-image: url('/src/images/crystals.png');\n  background-repeat: no-repeat;\n  background-position: 95% 95%;\n  overflow-y: scroll;\n}\n\nh2.project-heading {\n  text-align: center;\n}\n\n.project h3,\n.gradient-h3 {\n  padding: 10px 0px 0px 10px;\n  margin-top: 20px;\n  /* color: var(--project_color5); */\n  font-weight: 500;\n  /* text-decoration: underline;\n    text-decoration-color: var(--lightGrey); */\n\n  background: -webkit-linear-gradient(#fa83fc, #cabcfb);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n/* details */\n.project-task-item {\n  background: #eeeeee;\n  /* background: rgb(250, 248, 208);  postit colour */\n  border-radius: 10px;\n  margin: 10px 10px;\n  padding: 10px 5px 10px 15px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  position: relative;\n  box-shadow:\n    0 2px 4px #3a474e26,\n    0 1px 2px #3a474e26;\n}\n\n.project-task-item label,\n.project-task-item p,\n.project-task-item p span {\n  outline: none;\n  border-bottom: solid 2px transparent;\n}\n.project-task-item label:focus-visible,\n.project-task-item p:focus-visible,\n.project-task-item span:focus-visible {\n  outline: none;\n  border-bottom: solid 2px #fa83fc;\n}\n\n*[contenteditable='true'] {\n  background-color: #fbfbfb;\n  border-radius: 3px;\n  box-shadow: 3px 3px 2px -4px;\n  caret-color: #af76f3;\n  transition: 0.3s;\n}\n\nsummary {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  pointer-events: none;\n  gap: 5px;\n}\n.taskcheckbox {\n  pointer-events: auto;\n}\n.project-task-priority {\n  background-color: var(--project_color6);\n  color: #008b92;\n  font-size: 12px;\n  border-radius: 20px;\n  padding: 1px 15px;\n\n  color: #fff;\n  box-shadow: 0 1px 1px #0000002e;\n  text-shadow: 0 1px 0px #79485f7a;\n  border-radius: 50px;\n  border: transparent;\n}\n\ndetails.edit-mode .project-task-priority {\n  /* transform: rotate(45deg); */\n  pointer-events: none;\n}\n\n.edit-mode {\n  cursor: text;\n}\nlabel {\n  font-size: 13px;\n  display: flex;\n}\n.lowPriority {\n  background-color: var(--project_color4);\n  background-image: linear-gradient(180deg, #95d891, #74bbad);\n}\n\n.highPriority {\n  background-color: var(--project_color3);\n  background-image: linear-gradient(180deg, #f8aef9, #cabcfb);\n}\n\n.medPriority {\n  background-color: var(--project_color6);\n  background-image: linear-gradient(180deg, #43a3e8, #0edbdd);\n}\n\n.project-task-description {\n  font-size: 13px;\n  margin: 10px 10px 10px 0px;\n  font-style: italic;\n  padding: 10px;\n}\n\n.project-task-duedate {\n  font-size: 13px;\n  line-height: 1;\n  display: flex;\n  flex-direction: column;\n  margin-right: auto;\n  color: #cd8cfe;\n  color: #9d4ed8;\n}\n.project-task-duedate span {\n  padding: 5px 0px;\n}\n\n.date-padding {\n  padding: 5px 5px !important;\n}\n\n.project-task-img {\n  vertical-align: top;\n  padding-right: 5px;\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n.project-task-footer {\n  display: flex;\n  align-items: self-end;\n  justify-content: flex-end;\n  margin-bottom: -5px;\n}\n\n.project-task-footer img {\n  padding: 8px;\n  transition: 0.2s ease;\n}\n\n.project-task-footer img:hover {\n  border-radius: 11px;\n  background: whitesmoke;\n  cursor: pointer;\n}\n\ninput[type='checkbox'] {\n  margin-right: 11px;\n  accent-color: var(--darkGrey);\n}\n\ninput[type='checkbox']:checked + label,\ninput[type='checkbox']:checked {\n  color: var(--medGrey);\n  text-decoration: line-through !important;\n}\n\n/* POP UPS/ MODALS  */\n\n/* Create/ Add New...  */\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n  width: 350px;\n  /* padding: 1.3rem; */\n  min-height: 250px;\n  position: absolute;\n  /* top: 20%; */\n  background-color: white;\n\n  border: 3px solid #fbd4fc;\n  border-radius: 15px;\n  z-index: 2;\n\n  box-shadow:\n    0px 43px 79px -20px #af86c0,\n    34px -12px 80px -20px #fcd7e4d4;\n\n  box-shadow:\n    -31px 20px 63px -20px #af86c0,\n    13px -35px 63px -2px #fcd7e4fa;\n}\n\n.create-modal-icon {\n  position: absolute;\n  top: -52px;\n  left: 44%;\n  background: white;\n  border: solid 4px #fbd4fc;\n  padding: 5px;\n  height: 70px;\n  width: 70px;\n  border-radius: 50px;\n}\n\n.modal h3 {\n  margin: 20px auto 10px;\n}\n\n.modal .flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.create-modal-input-area {\n  margin-left: 22%;\n  margin-bottom: 20px;\n}\n\n.modal input,\nselect#projDropdown {\n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n  width: 200px;\n  height: 35px;\n}\n\n.modal p {\n  font-size: 0.9rem;\n  color: #777;\n  margin: 0.4rem 0 0.2rem;\n}\n\n.create-modal-buttons {\n  display: flex;\n}\n\nselect#projDropdown {\n  /* width: 200px; */\n  height: 35px;\n  padding: 5px;\n}\n\n.create-modal-buttons button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 0.8rem;\n  background-color: white;\n  color: #fbd4fc;\n  text-align: center;\n  font-size: 1.3em;\n  cursor: pointer;\n  border: none;\n  font-weight: 600;\n  width: 100%;\n  border-top: solid 3px;\n  border-bottom-left-radius: 20px;\n  transition: 0.3s;\n}\n\n.create-modal-buttons button:hover {\n  background: -webkit-linear-gradient(#43a3e8, #0edbdd);\n  transition: 0.3s;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.create-modal-buttons button img {\n  width: 25px;\n}\n\nbutton[type='submit'] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 20px;\n  border-left: solid 3px #fbd4fc;\n}\n\n.btn-close {\n  padding: 0;\n  background: transparent;\n  border-radius: 50%;\n  border: none;\n  margin-left: auto;\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  cursor: pointer;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(105, 97, 82, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\ninput#taskDuedate {\n  width: 47%;\n}\n\n/* PRIORITY RADIO IN NEWTASK FORM */\n.taskPriority_radio {\n  background: #454857;\n  padding: 4px;\n  border-radius: 50px;\n  box-shadow:\n    inset 0 0 0 3px rgba(35, 33, 45, 0.3),\n    0 0 0 3px rgba(185, 185, 185, 0.3);\n  position: relative;\n  width: 200px;\n  margin: 20px 0px -10px;\n  display: flex;\n  justify-content: center;\n}\n\n.taskEditPriority {\n  margin: 10px 0px;\n  width: auto;\n  background: transparent;\n  box-shadow: unset;\n  gap: 5px;\n}\n\n.taskPriority_radio input {\n  width: auto;\n  height: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: 50px;\n  padding: 4px 10px;\n\n  background: #454857;\n  color: #bdbdbdbd;\n  border: transparent;\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    'Helvetica Neue',\n    Arial,\n    'Noto Sans',\n    sans-serif,\n    'Apple Color Emoji',\n    'Segoe UI Emoji',\n    'Segoe UI Symbol',\n    'Noto Color Emoji';\n  transition: all 100ms linear;\n  /* transition: all 0.3s ease; */\n}\n\n.taskPriority_radio input:checked {\n  background-image: linear-gradient(180deg, #95d891, #74bbad);\n  color: #fff;\n  box-shadow: 0 1px 1px #0000002e;\n  text-shadow: 0 1px 0px #79485f7a;\n  border-radius: 50px;\n}\n\n.taskPriority_radio input#taskPriority_med:checked {\n  background-image: linear-gradient(180deg, #43a3e8, #0edbdd);\n}\n\n.taskPriority_radio input#taskPriority_high:checked {\n  background-image: linear-gradient(180deg, #f8aef9, #cabcfb);\n}\n\n.taskPriority_radio input:before {\n  content: attr(label);\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton.gradient-h3 {\n  margin-top: 0px;\n}\n\n/* Task/Project Switcher inside Modal */\ndiv.create-modal-select-type {\n  border-radius: 50px;\n  box-shadow:\n    inset 0 0 0 3px rgb(35 33 45 / 0%),\n    0 0 0 3px rgb(185 185 185 / 16%);\n}\n\n/*selected side*/\nlabel {\n  font-size: 13px;\n  color: #424242;\n  font-weight: 500;\n}\n\n/*  bg of Task when not selected*/\nlabel.toggleInput-switch-inner {\n  margin: 0px;\n  width: 140px;\n  height: 30px;\n  background: #e0e0e0;\n  background: linear-gradient(90deg, pink, lavender);\n  border-radius: 26px;\n  overflow: hidden;\n  position: relative;\n  transition: all 0.3s ease;\n  display: block;\n  cursor: pointer;\n}\n/* text of Task when not selected  */\nlabel.toggleInput-switch-inner::before {\n  content: attr(data-on); /* Task */\n  position: absolute;\n  font-size: 13px;\n  font-weight: 500;\n  top: 7px;\n  right: 20px;\n  color: grey;\n}\n\n/*  project selected */\nlabel.toggleInput-switch-inner::after {\n  content: attr(data-off); /* Project */\n  width: 70px;\n  height: 16px;\n  background: #fff;\n  border-radius: 26px;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  text-align: center;\n  transition: all 0.3s ease;\n  /* box-shadow: 0px 0px 6px -2px #111; */\n  padding: 5px 0px;\n}\n\ninput#toggleInput[type='checkbox'] {\n  cursor: pointer;\n  width: 50px;\n  height: 25px;\n  opacity: 0;\n  position: absolute;\n  top: 68px;\n  left: 44%;\n  z-index: 1;\n  margin: 0px;\n}\n\n/*  set bg and text on project, not selected */\ninput#toggleInput[type='checkbox']:checked + label.toggleInput-switch-inner {\n  background: linear-gradient(90deg, pink, lavender);\n  color: grey;\n}\n\n/*  Sets bg of Task when selected*/\ninput#toggleInput[type='checkbox']:checked\n  + label.toggleInput-switch-inner:after {\n  content: attr(data-on); /*Tasks*/\n  left: 68px;\n  background: white;\n  color: black;\n}\n\ninput#toggleInput[type='checkbox']:checked\n  + label.toggleInput-switch-inner:before {\n  content: attr(data-off); /*Project */\n  right: auto;\n  left: 20px;\n}\n\n.create-modal-input-area input[type='text']:focus-visible {\n  outline: solid 3px #af76f333;\n  border: solid 1.5px rgba(234, 100, 217, 0.4);\n  /* border-radius: 12px; */\n}\n\n/* Task Checked Off Toggle */\n.task-checkbox {\n  --text: #414856;\n  --check: #af76f3;\n  --disabled: #c3c8de;\n  --border-radius: 10px;\n  border-radius: var(--border-radius);\n  position: relative;\n  padding: 0px 5px;\n  align-items: center;\n  display: flex;\n}\n.task-checkbox label {\n  color: var(--text);\n  position: relative;\n  cursor: pointer;\n  padding: 5px;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: color 0.3s ease;\n  font-weight: 900;\n  font-size: 15px;\n}\n.task-checkbox label::before, /* dash */\n.task-checkbox label::after {\n  /* tick */\n  content: '';\n  position: absolute;\n}\n.task-checkbox label::before {\n  /* dash */\n  height: 2px;\n  width: 13px;\n  left: -27px;\n  background: var(--check);\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.task-checkbox label:after {\n  /* tick */\n  height: 4px;\n  width: 4px;\n  top: 8px;\n  left: -25px;\n  border-radius: 50%;\n}\n.task-checkbox input[type='checkbox'] {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: 15px;\n  width: 15px;\n  outline: none;\n  border: 0;\n  margin: 0 15px 0 0;\n  cursor: pointer;\n  background: var(--background);\n  align-items: center;\n}\n.task-checkbox input[type='checkbox']::before,\n.task-checkbox input[type='checkbox']::after {\n  content: '';\n  position: absolute;\n  height: 2px;\n  top: auto;\n  background: var(--check);\n  border-radius: 2px;\n}\n.task-checkbox input[type='checkbox']::before {\n  width: 0px;\n  right: 60%;\n  transform-origin: right bottom;\n}\n.task-checkbox input[type='checkbox']::after {\n  width: 0px;\n  left: 40%;\n  transform-origin: left bottom;\n}\n.task-checkbox input[type='checkbox']:checked::before {\n  -webkit-animation: check-01-11 0.4s ease forwards;\n  animation: check-01-11 0.4s ease forwards;\n}\n.task-checkbox input[type='checkbox']:checked::after {\n  -webkit-animation: check-02-11 0.4s ease forwards;\n  animation: check-02-11 0.4s ease forwards;\n}\n.task-checkbox input[type='checkbox']:checked + label {\n  color: var(--disabled);\n  -webkit-animation: move-11 0.3s ease 0.1s forwards;\n  animation: move-11 0.3s ease 0.1s forwards;\n}\n.task-checkbox input[type='checkbox']:checked + label::before {\n  background: var(--disabled);\n  -webkit-animation: slice-11 0.4s ease forwards;\n  animation: slice-11 0.4s ease forwards;\n}\n.task-checkbox input[type='checkbox']:checked + label::after {\n  -webkit-animation: firework-11 0.5s ease forwards 0.1s;\n  animation: firework-11 0.5s ease forwards 0.1s;\n}\n\n@-webkit-keyframes move-11 {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n\n@keyframes move-11 {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n@-webkit-keyframes slice-11 {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@keyframes slice-11 {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@-webkit-keyframes check-01-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n@keyframes check-01-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n@-webkit-keyframes check-02-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n@keyframes check-02-11 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n@-webkit-keyframes firework-11 {\n  0% {\n    opacity: 1;\n    box-shadow:\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow:\n      0 -15px 0 0px #4f29f0,\n      14px -8px 0 0px #4f29f0,\n      14px 8px 0 0px #4f29f0,\n      0 15px 0 0px #4f29f0,\n      -14px 8px 0 0px #4f29f0,\n      -14px -8px 0 0px #4f29f0;\n  }\n}\n@keyframes firework-11 {\n  0% {\n    opacity: 1;\n    box-shadow:\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow:\n      0 -15px 0 0px #4f29f0,\n      14px -8px 0 0px #4f29f0,\n      14px 8px 0 0px #4f29f0,\n      0 15px 0 0px #4f29f0,\n      -14px 8px 0 0px #4f29f0,\n      -14px -8px 0 0px #4f29f0;\n  }\n}\n\n/* WOBBLE EFFECT ON BIN */\n@-webkit-keyframes hvr-wobble-top {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n@keyframes hvr-wobble-top {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n.hvr-wobble-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n.hvr-wobble-top:hover,\n.hvr-wobble-top:focus,\n.hvr-wobble-top:active {\n  -webkit-animation-name: hvr-wobble-top;\n  animation-name: hvr-wobble-top;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Waving Hand Hover */\n.wave:hover {\n  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */\n  animation-duration: 2.5s; /* Change to speed up or slow down */\n  animation-iteration-count: infinite; /* Never stop waving :) */\n  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */\n  display: inline-block;\n}\n\n@keyframes wave-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(14deg);\n  } /* The following five values can be played with to make the waving more or less extreme */\n  20% {\n    transform: rotate(-8deg);\n  }\n  30% {\n    transform: rotate(14deg);\n  }\n  40% {\n    transform: rotate(-4deg);\n  }\n  50% {\n    transform: rotate(10deg);\n  }\n  60% {\n    transform: rotate(0deg);\n  } /* Reset for the last half to pause */\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n/* Grow Shadow */\n.hvr-grow-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow, transform;\n  transition-property: box-shadow, transform;\n}\n.hvr-grow-shadow:hover,\n.hvr-grow-shadow:focus,\n.hvr-grow-shadow:active {\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\nheader.hello {\n  font-size: 30px;\n}\n@media screen and (max-width: 1065px) {\n  div.container {\n    width: 98vw;\n    height: 98vh;\n  }\n}\n\n/* @media screen and (max-width: 1200px) {\n  header.hello {\n    font-size: 30px;\n  }\n} */\n"],"sourceRoot":""}]);
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
/* harmony export */   createNewTask: () => (/* binding */ createNewTask)
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

// export function imageFactory(image){
// 	const myImage = new Image();
// 	myImage.src = image;
// 	return myImage;
// }




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
/* harmony import */ var _src_images_downgrey16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/images/downgrey16.png */ "./src/images/downgrey16.png");
/* harmony import */ var _images_diskette24_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/diskette24.png */ "./src/images/diskette24.png");
/* harmony import */ var _images_edit24_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/edit24.png */ "./src/images/edit24.png");
/* harmony import */ var _images_bin24_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/bin24.png */ "./src/images/bin24.png");
//displayProject module (view)


// import { imageFactory } from './controller';






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
      arrow.setAttribute('src', '/src/images/downgrey16.png');

    function imageFactory(image){
        const myImage = new Image();
        myImage.src = image;
        return myImage;
    }

    //   arrow.setAttribute('src', downgrey16);
     

    //   summary.appendChild(arrow);
    summary.appendChild(imageFactory(_src_images_downgrey16_png__WEBPACK_IMPORTED_MODULE_2__));
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
            taskEditIcon.setAttribute('src', _images_diskette24_png__WEBPACK_IMPORTED_MODULE_3__);

            //if SAVE  icon
          } else if (
            // taskEditIcon.getAttribute('src') == '/src/images/diskette24.png'
            taskEditIcon.getAttribute('src') == _images_diskette24_png__WEBPACK_IMPORTED_MODULE_3__
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
            taskEditIcon.setAttribute('src', _images_edit24_png__WEBPACK_IMPORTED_MODULE_4__);

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
      taskDelIcon.setAttribute('src', _images_bin24_png__WEBPACK_IMPORTED_MODULE_5__);
      taskFooter.appendChild(taskDelIcon);

      let taskEditIcon = document.createElement('img');
      taskEditIcon.classList.add('project-task-editbtn');
      taskEditIcon.setAttribute('src', '/src/images/edit24.png');
      taskEditIcon.setAttribute('src', _images_edit24_png__WEBPACK_IMPORTED_MODULE_4__);

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

/***/ "./src/images/bin24.png":
/*!******************************!*\
  !*** ./src/images/bin24.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ee63707446c5e01f4ef.png";

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

/***/ "./src/images/diskette24.png":
/*!***********************************!*\
  !*** ./src/images/diskette24.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa2d4b4a078e8453dfef.png";

/***/ }),

/***/ "./src/images/downgrey16.png":
/*!***********************************!*\
  !*** ./src/images/downgrey16.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4531776403cf8b07f8ac.png";

/***/ }),

/***/ "./src/images/edit24.png":
/*!*******************************!*\
  !*** ./src/images/edit24.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9645dcb2379b22568947.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUpBQXVEO0FBQ25HLDRDQUE0QyxtS0FBOEQ7QUFDMUcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsbUtBQXVEO0FBQ25HLDRDQUE0QywySUFBMkM7QUFDdkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1DQUFtQztBQUM3QyxVQUFVLG1DQUFtQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1DQUFtQztBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJGQUEyRjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQ0FBbUM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLDRCQUE0QjtBQUM1Qix1Q0FBdUM7QUFDdkMsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLE9BQU8sdUZBQXVGLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSw0QkFBNEIsTUFBTSxNQUFNLHVDQUF1QyxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVkseUJBQXlCLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxTQUFTLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLE9BQU8sT0FBTyxLQUFLLFVBQVUsU0FBUyxRQUFRLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLHdCQUF3Qix5QkFBeUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxhQUFhLGNBQWMsYUFBYSxZQUFZLEtBQUssUUFBUSxhQUFhLGNBQWMsT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsU0FBUyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFFBQVEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sT0FBTyxPQUFPLFVBQVUsWUFBWSxNQUFNLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLFFBQVEsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sT0FBTyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sc0JBQXNCLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLHNCQUFzQixXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLFlBQVksT0FBTyxzQkFBc0IsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLHNCQUFzQixXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1B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QSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsWWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9OdW5pdG8tVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9OdW5pdG8tSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2N1cnNvcjE2LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL2xvdy1wb2x5LWdyaWQtaGFpa2VpLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL2NyeXN0YWxzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIENTUyBmb3IgVG9EbyBMaXN0ICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xufVxuXG46cm9vdCB7XG4gIC0tZ3JhZGllbnRfYmdfY29sb3I6ICNlZGU1ZmQ7XG4gIC0tZ3JhZGllbnRfc3BvdDFfY29sb3I6ICNlMWNiZmI7XG4gIC0tZ3JhZGllbnRfc3BvdDFfdzogNzUlO1xuICAtLWdyYWRpZW50X3Nwb3QxX2g6IDc1JTtcbiAgLS1ncmFkaWVudF9zcG90MV94OiAwJTtcbiAgLS1ncmFkaWVudF9zcG90MV95OiAwJTtcbiAgLS1ncmFkaWVudF9zcG90Ml9jb2xvcjogI2ZmZTBkNjtcbiAgLS1ncmFkaWVudF9zcG90Ml93OiA3NSU7XG4gIC0tZ3JhZGllbnRfc3BvdDJfaDogNzUlO1xuICAtLWdyYWRpZW50X3Nwb3QyX3g6IDEwMCU7XG4gIC0tZ3JhZGllbnRfc3BvdDJfeTogMCU7XG4gIC0tZ3JhZGllbnRfc3BvdDNfY29sb3I6ICNlYmUwZmY7XG4gIC0tZ3JhZGllbnRfc3BvdDNfdzogNzUlO1xuICAtLWdyYWRpZW50X3Nwb3QzX2g6IDc1JTtcbiAgLS1ncmFkaWVudF9zcG90M194OiAxMDAlO1xuICAtLWdyYWRpZW50X3Nwb3QzX3k6IDEwMCU7XG5cbiAgLS1ncmFkaWVudF9zcG90NF9jb2xvcjogI2ZmZGJmMztcbiAgLS1ncmFkaWVudF9zcG90NF93OiA3NSU7XG4gIC0tZ3JhZGllbnRfc3BvdDRfaDogNzUlO1xuICAtLWdyYWRpZW50X3Nwb3Q0X3g6IDAlO1xuICAtLWdyYWRpZW50X3Nwb3Q0X3k6IDEwMCU7XG5cbiAgLS1ncmFkaWVudF9zcG90Ml93OiAxMDAlO1xuICAtLWdyYWRpZW50X3Nwb3QyX3g6IDk0JTtcbiAgLS1ncmFkaWVudF9zcG90Ml9oOiA0NCU7XG4gIC0tZ3JhZGllbnRfc3BvdDFfdzogNTElO1xuICAtLWdyYWRpZW50X3Nwb3QxX2g6IDY0JTtcbiAgLS1ncmFkaWVudF9zcG90MV94OiA3JTtcbiAgLS1ncmFkaWVudF9zcG90M193OiAxMDAlO1xuICAtLWdyYWRpZW50X3Nwb3QzX2g6IDgyJTtcbiAgLS1ncmFkaWVudF9zcG90M194OiA5MCU7XG4gIC0tZ3JhZGllbnRfc3BvdDRfdzogNjQlO1xuICAtLWdyYWRpZW50X3Nwb3Q0X3g6IDAlO1xuICAtLWdyYWRpZW50X3Nwb3Q0X3k6IDQ1JTtcblxuICAvKiBQcm9qZWN0IENvbG91cnMgKi9cbiAgLS1wcm9qZWN0X2NvbG9yMTogI2ZmZWRkNjtcbiAgLS1wcm9qZWN0X2NvbG9yMjogI2ZmY2I5YTtcbiAgLS1wcm9qZWN0X2NvbG9yMzogI2Y4YWVmOTtcbiAgLS1wcm9qZWN0X2NvbG9yNDogI2I4ZGJmZDtcbiAgLS1wcm9qZWN0X2NvbG9yNTogI2M4YmFmYTtcbiAgLS1wcm9qZWN0X2NvbG9yNjogIzhmZTRlOTtcblxuICAtLWRhcmtHcmV5OiAjMjUyYjNkO1xuICAtLW1lZEdyZXk6ICM5NDk2OWI7XG4gIC0tbGlnaHRHcmV5OiAjZWVlO1xufVxuXG4ud2VsY29tZS10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tcHJvamVjdF9jb2xvcjQpIDMwJSwgdmFyKC0tcHJvamVjdF9jb2xvcjYpIDEwMCUpOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgLyogYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZhODNmYywgI2NhYmNmYik7ICovXG4gIC8qIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXG4gIGNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xuICBzcmM6XG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnb3BlbnR5cGUnKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCdvcGVudHlwZScpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5mYW5jeS1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYWRpZW50X2JnX2NvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgdmFyKC0tZ3JhZGllbnRfc3BvdDFfdykgdmFyKC0tZ3JhZGllbnRfc3BvdDFfaCkgYXQgbGVmdFxuICAgICAgICB2YXIoLS1ncmFkaWVudF9zcG90MV94KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDFfeSksXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90MV9jb2xvciksXG4gICAgICB0cmFuc3BhcmVudFxuICAgICksXG4gICAgcmFkaWFsLWdyYWRpZW50KFxuICAgICAgdmFyKC0tZ3JhZGllbnRfc3BvdDJfdykgdmFyKC0tZ3JhZGllbnRfc3BvdDJfaCkgYXQgbGVmdFxuICAgICAgICB2YXIoLS1ncmFkaWVudF9zcG90Ml94KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDJfeSksXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90Ml9jb2xvciksXG4gICAgICB0cmFuc3BhcmVudFxuICAgICksXG4gICAgcmFkaWFsLWdyYWRpZW50KFxuICAgICAgdmFyKC0tZ3JhZGllbnRfc3BvdDNfdykgdmFyKC0tZ3JhZGllbnRfc3BvdDNfaCkgYXQgbGVmdFxuICAgICAgICB2YXIoLS1ncmFkaWVudF9zcG90M194KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDNfeSksXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90M19jb2xvciksXG4gICAgICB0cmFuc3BhcmVudFxuICAgICksXG4gICAgcmFkaWFsLWdyYWRpZW50KFxuICAgICAgdmFyKC0tZ3JhZGllbnRfc3BvdDRfdykgdmFyKC0tZ3JhZGllbnRfc3BvdDRfaCkgYXQgbGVmdFxuICAgICAgICB2YXIoLS1ncmFkaWVudF9zcG90NF94KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDRfeSksXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90NF9jb2xvciksXG4gICAgICB0cmFuc3BhcmVudFxuICAgICk7XG59XG5cbi8qIFxuICAuYW5pbWF0ZWQge1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cbkBrZXlmcmFtZXMgY2hhbWVsZW9uIHtcblxuICAgIDAlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMSk7XG4gICAgfVxuICAgIDE0LjI5OTklIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMik7XG4gICAgfVxuICAgIDI4LjU5OTklIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yMyk7XG4gICAgfVxuICAgIDQyLjg5OTglIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNCk7XG4gICAgfVxuICAgIDU3LjE5OTYlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNSk7XG4gICAgfVxuICAgIDcxLjQ5OTUlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNik7XG4gICAgfVxuICAgIDg1Ljc5OTQlIHtcbiAgICAgIGNvbG9yOiB2aW9sZXQ7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gIH1cbiAgLmNoYW1lbGVvbiB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW1lbGVvbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9ICAqL1xuLyogVE8gVVNFLCBBREQgQ0xBU1MgQU5JTUFURSBBTkQgQ0xBU1MgQ0hBTUVMRU9OICovXG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICMyMjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pLCBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDg1dmg7XG4gIHdpZHRoOiA4NXZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQzLCAyNDgsIDAuNjIyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiAyNDMgMjQ4IC8gNTYlKTsgLyogZ3JhZGllbnQgYmxlbmQgaW50byBiZyAgKi9cbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IGZsb3JhbHdoaXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxLjVmciAwLjVmciAzZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ25hdiBoZWxsbyBwcm9qaGVhZGluZydcbiAgICAnbmF2IGluZm8gcHJvamVjdCdcbiAgICAnbmF2IGhlYWRpbmcgcHJvamVjdCdcbiAgICAnbmF2IHRhc2tib3ggcHJvamVjdCc7XG4gIGJveC1zaGFkb3c6XG4gICAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcbiAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxuICAgIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcbiAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXG4gICAgMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpO1xufVxuXG4ubmF2IHtcbiAgZ3JpZC1hcmVhOiBuYXY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMHB4IDMwcHggMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLm5hdiAubG9nbyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLyogc3R5aW5nIG9mIGJ1dHRvbnMgb24gZGFzaCAqL1xuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAwLjhyZW07XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM5NDk2OWI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG4tZ2l0aHViIGEge1xuICBjb2xvcjogIzk0OTY5Yjtcbn1cblxuLmJ0bjpob3Zlcixcbi5idG4tZ2l0aHViOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NGI1YjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggI2ZmOTRlYTtcbn1cblxuLmJ0biBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmhlbGxvIHtcbiAgZ3JpZC1hcmVhOiBoZWxsbztcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UxY2JmYjsgKi9cbiAgY29sb3I6ICMzMDJiMmI7XG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWctaGFuZCB7XG4gIC8qIHdpZHRoOiAxNyU7ICovXG4gIHdpZHRoOiA3NXB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaW5mbyB7XG4gIGdyaWQtYXJlYTogaW5mbztcblxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywxKSA1MSUsIHJnYmEoMjM4LDIzOCwyMzgsMSkgOTklKTsgICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAwZGVnLFxuICAgIHJnYmEoMjM2LCAyMjQsIDI1MywgMSkgNTElLFxuICAgIHJnYmEoMjQ2LCAyMzcsIDI0MywgMSkgOTklXG4gICk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlYmUwZmY7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogYm94LXNoYWRvdzpcbiAgICAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxuICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXG4gICAgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxuICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKTsgICovXG59XG5cbi5pbmZvOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMGRlZyxcbiAgICAgIHJnYmEoMjM2LCAyMjQsIDI1MywgMC4xKSAxMSUsXG4gICAgICByZ2JhKDI0NiwgMjM3LCAyNDMsIDEpIDk5JVxuICAgICksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvKiBib3JkZXI6IHNvbGlkIDFweCAjYzZhZGYyOyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5pbmZvLWl0ZW0ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDIwcHggMTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhhZWY4OyAvKiBiZXN0IGNvbG91ciBvbiBtYWNtaW5pICAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY3NmYzOyAvKiBiZXN0IGNvbG9yIG9uIG1hY2Jvb2sgKi9cbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjYzZhZGYyO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2M2YWRmMjtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OlxuICAgIDAgMnB4IDRweCAjM2E0NzRlMjYsXG4gICAgMCAxcHggMnB4ICMzYTQ3NGUyNjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmluZm8gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmluZm8taXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2YWRmMjtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2I0OTFmMTsgKi9cbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggNXB4IHdoaXRlc21va2U7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2QxYmNmODtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNkMWJjZjg7XG59XG5cbi5oZWFkaW5nIHtcbiAgZ3JpZC1hcmVhOiBoZWFkaW5nO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNlZGU1ZmQ7ICovXG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZ2FwOiA1cHg7XG59XG5cbi8qIEFMTCBQUk9KRUNUUyBESVNQTEFZICovXG4udGFza2JveCB7XG4gIGdyaWQtYXJlYTogdGFza2JveDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcblxuICBwZXJzcGVjdGl2ZTogNjByZW07XG59XG5cbi5wcm9qZWN0LWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7ICovXG4gIC8qIGJveC1zaGFkb3c6XG4gICAgMCAycHggNHB4ICMzYTQ3NGUyNixcbiAgICAwIDFweCAycHggIzNhNDc0ZTI2OyAqL1xuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0M2RlZywgcmdiYSgyMDQsMTY5LDIyNiwxKSAwJSwgcmdiYSgyMjcsMTU5LDIwOSwwLjc2Mzc2NDg4MDk1MjM4MDkpIDQ2JSwgcmdiYSgyNTMsMTQ3LDE5MCwxKSAxMDAlKTtcblxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzZGVnLCByZ2JhKDIwNCwxNjksMjI2LDEpIDAlLCByZ2JhKDIyNywxNTksMjA5LDAuNzYzNzY0ODgwOTUyMzgwOSkgNDYlLCAjZmVlMGQ3IDEwMCUpO1xuICAvKiAjZmZkM2M2ICovXG5cbiAgLyogYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjZmJkZWQ3O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZiZGVkNzsgKi9cblxuICBib3gtc2hhZG93OiAwIDJweCA0cHggIzNhNDc0ZTI2LCAwIDFweCAycHggIzNhNDc0ZTI2O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG5cbiAgdHJhbnNpdGlvbjpcbiAgICByb3RhdGUgNDAwbXMsXG4gICAgc2NhbGUgMjAwbXM7XG59XG5cbi5wcm9qZWN0LWl0ZW06aG92ZXIgIHtcbiAgcm90YXRlOiB5IDIwZGVnO1xuICBzY2FsZTogMS4wNTtcbiAgICB9XG5cbi5wcm9qZWN0LWl0ZW0gaDUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNGYzNDZiO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgei1pbmRleDogNTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5wLnByb2plY3QtaXRlbS10YXNrbm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5wLnByb2plY3QtaXRlbS10YXNrbm86bnRoLWNoaWxkKDIpIHtcbiAgLyogYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkOyAqL1xuICBmb250LXNpemU6IDE4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuXG5cblxuZGl2LnByb2plY3QtaXRlbS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gXG59XG5idXR0b24ucHJvamVjdC1pdGVtLWRlbGJ0biB7XG4gIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuLyogUFJPSkVDVCBTRUNUSU9OIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5wcm9qaGVhZGluZyB7XG4gIGdyaWQtYXJlYTogcHJvamhlYWRpbmc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0tZGFya0dyZXkpO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG5cbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnByb2plY3Qge1xuICBncmlkLWFyZWE6IHByb2plY3Q7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IC01cHggLTQ2cHggNThweCAtMjBweCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIDk1JTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5oMi5wcm9qZWN0LWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0IGgzLFxuLmdyYWRpZW50LWgzIHtcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC8qIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNSk7ICovXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTsgKi9cblxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmE4M2ZjLCAjY2FiY2ZiKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBkZXRhaWxzICovXG4ucHJvamVjdC10YXNrLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICAvKiBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNDgsIDIwOCk7ICBwb3N0aXQgY29sb3VyICovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OlxuICAgIDAgMnB4IDRweCAjM2E0NzRlMjYsXG4gICAgMCAxcHggMnB4ICMzYTQ3NGUyNjtcbn1cblxuLnByb2plY3QtdGFzay1pdGVtIGxhYmVsLFxuLnByb2plY3QtdGFzay1pdGVtIHAsXG4ucHJvamVjdC10YXNrLWl0ZW0gcCBzcGFuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHRyYW5zcGFyZW50O1xufVxuLnByb2plY3QtdGFzay1pdGVtIGxhYmVsOmZvY3VzLXZpc2libGUsXG4ucHJvamVjdC10YXNrLWl0ZW0gcDpmb2N1cy12aXNpYmxlLFxuLnByb2plY3QtdGFzay1pdGVtIHNwYW46Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmE4M2ZjO1xufVxuXG4qW2NvbnRlbnRlZGl0YWJsZT0ndHJ1ZSddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtNHB4O1xuICBjYXJldC1jb2xvcjogI2FmNzZmMztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGdhcDogNXB4O1xufVxuLnRhc2tjaGVja2JveCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnByb2plY3QtdGFzay1wcmlvcml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I2KTtcbiAgY29sb3I6ICMwMDhiOTI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMXB4IDE1cHg7XG5cbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAjMDAwMDAwMmU7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwcHggIzc5NDg1ZjdhO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xufVxuXG5kZXRhaWxzLmVkaXQtbW9kZSAucHJvamVjdC10YXNrLXByaW9yaXR5IHtcbiAgLyogdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmVkaXQtbW9kZSB7XG4gIGN1cnNvcjogdGV4dDtcbn1cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmxvd1ByaW9yaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTVkODkxLCAjNzRiYmFkKTtcbn1cblxuLmhpZ2hQcmlvcml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IzKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y4YWVmOSwgI2NhYmNmYik7XG59XG5cbi5tZWRQcmlvcml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I2KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQzYTNlOCwgIzBlZGJkZCk7XG59XG5cbi5wcm9qZWN0LXRhc2stZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9qZWN0LXRhc2stZHVlZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY29sb3I6ICNjZDhjZmU7XG4gIGNvbG9yOiAjOWQ0ZWQ4O1xufVxuLnByb2plY3QtdGFzay1kdWVkYXRlIHNwYW4ge1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG4uZGF0ZS1wYWRkaW5nIHtcbiAgcGFkZGluZzogNXB4IDVweCAhaW1wb3J0YW50O1xufVxuXG4ucHJvamVjdC10YXNrLWltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtdGFzay1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc2VsZi1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG59XG5cbi5wcm9qZWN0LXRhc2stZm9vdGVyIGltZyB7XG4gIHBhZGRpbmc6IDhweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4ucHJvamVjdC10YXNrLWZvb3RlciBpbWc6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIGFjY2VudC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xufVxuXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XG4gIGNvbG9yOiB2YXIoLS1tZWRHcmV5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDtcbn1cblxuLyogUE9QIFVQUy8gTU9EQUxTICAqL1xuXG4vKiBDcmVhdGUvIEFkZCBOZXcuLi4gICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogMzUwcHg7XG4gIC8qIHBhZGRpbmc6IDEuM3JlbTsgKi9cbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogdG9wOiAyMCU7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmYmQ0ZmM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHotaW5kZXg6IDI7XG5cbiAgYm94LXNoYWRvdzpcbiAgICAwcHggNDNweCA3OXB4IC0yMHB4ICNhZjg2YzAsXG4gICAgMzRweCAtMTJweCA4MHB4IC0yMHB4ICNmY2Q3ZTRkNDtcblxuICBib3gtc2hhZG93OlxuICAgIC0zMXB4IDIwcHggNjNweCAtMjBweCAjYWY4NmMwLFxuICAgIDEzcHggLTM1cHggNjNweCAtMnB4ICNmY2Q3ZTRmYTtcbn1cblxuLmNyZWF0ZS1tb2RhbC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MnB4O1xuICBsZWZ0OiA0NCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDRweCAjZmJkNGZjO1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5tb2RhbCBoMyB7XG4gIG1hcmdpbjogMjBweCBhdXRvIDEwcHg7XG59XG5cbi5tb2RhbCAuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEge1xuICBtYXJnaW4tbGVmdDogMjIlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubW9kYWwgaW5wdXQsXG5zZWxlY3QjcHJvakRyb3Bkb3duIHtcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5tb2RhbCBwIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjNzc3O1xuICBtYXJnaW46IDAuNHJlbSAwIDAuMnJlbTtcbn1cblxuLmNyZWF0ZS1tb2RhbC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuc2VsZWN0I3Byb2pEcm9wZG93biB7XG4gIC8qIHdpZHRoOiAyMDBweDsgKi9cbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jcmVhdGUtbW9kYWwtYnV0dG9ucyBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjZmJkNGZjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogc29saWQgM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uY3JlYXRlLW1vZGFsLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzQzYTNlOCwgIzBlZGJkZCk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5jcmVhdGUtbW9kYWwtYnV0dG9ucyBidXR0b24gaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbmJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItbGVmdDogc29saWQgM3B4ICNmYmQ0ZmM7XG59XG5cbi5idG4tY2xvc2Uge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDk3LCA4MiwgMC41KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbmlucHV0I3Rhc2tEdWVkYXRlIHtcbiAgd2lkdGg6IDQ3JTtcbn1cblxuLyogUFJJT1JJVFkgUkFESU8gSU4gTkVXVEFTSyBGT1JNICovXG4udGFza1ByaW9yaXR5X3JhZGlvIHtcbiAgYmFja2dyb3VuZDogIzQ1NDg1NztcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OlxuICAgIGluc2V0IDAgMCAwIDNweCByZ2JhKDM1LCAzMywgNDUsIDAuMyksXG4gICAgMCAwIDAgM3B4IHJnYmEoMTg1LCAxODUsIDE4NSwgMC4zKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMjBweCAwcHggLTEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGFza0VkaXRQcmlvcml0eSB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogdW5zZXQ7XG4gIGdhcDogNXB4O1xufVxuXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG5cbiAgYmFja2dyb3VuZDogIzQ1NDg1NztcbiAgY29sb3I6ICNiZGJkYmRiZDtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6XG4gICAgc3lzdGVtLXVpLFxuICAgIC1hcHBsZS1zeXN0ZW0sXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgICdTZWdvZSBVSScsXG4gICAgUm9ib3RvLFxuICAgICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgQXJpYWwsXG4gICAgJ05vdG8gU2FucycsXG4gICAgc2Fucy1zZXJpZixcbiAgICAnQXBwbGUgQ29sb3IgRW1vamknLFxuICAgICdTZWdvZSBVSSBFbW9qaScsXG4gICAgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICAgJ05vdG8gQ29sb3IgRW1vamknO1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgbGluZWFyO1xuICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyAqL1xufVxuXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0OmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTVkODkxLCAjNzRiYmFkKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAjMDAwMDAwMmU7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwcHggIzc5NDg1ZjdhO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0I3Rhc2tQcmlvcml0eV9tZWQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0M2EzZTgsICMwZWRiZGQpO1xufVxuXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0I3Rhc2tQcmlvcml0eV9oaWdoOmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjhhZWY5LCAjY2FiY2ZiKTtcbn1cblxuLnRhc2tQcmlvcml0eV9yYWRpbyBpbnB1dDpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGxhYmVsKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uLmdyYWRpZW50LWgzIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4vKiBUYXNrL1Byb2plY3QgU3dpdGNoZXIgaW5zaWRlIE1vZGFsICovXG5kaXYuY3JlYXRlLW1vZGFsLXNlbGVjdC10eXBlIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzpcbiAgICBpbnNldCAwIDAgMCAzcHggcmdiKDM1IDMzIDQ1IC8gMCUpLFxuICAgIDAgMCAwIDNweCByZ2IoMTg1IDE4NSAxODUgLyAxNiUpO1xufVxuXG4vKnNlbGVjdGVkIHNpZGUqL1xubGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNDI0MjQyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiAgYmcgb2YgVGFzayB3aGVuIG5vdCBzZWxlY3RlZCovXG5sYWJlbC50b2dnbGVJbnB1dC1zd2l0Y2gtaW5uZXIge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcGluaywgbGF2ZW5kZXIpO1xuICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiB0ZXh0IG9mIFRhc2sgd2hlbiBub3Qgc2VsZWN0ZWQgICovXG5sYWJlbC50b2dnbGVJbnB1dC1zd2l0Y2gtaW5uZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vbik7IC8qIFRhc2sgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRvcDogN3B4O1xuICByaWdodDogMjBweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi8qICBwcm9qZWN0IHNlbGVjdGVkICovXG5sYWJlbC50b2dnbGVJbnB1dC1zd2l0Y2gtaW5uZXI6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLW9mZik7IC8qIFByb2plY3QgKi9cbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAycHg7XG4gIHRvcDogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC8qIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IC0ycHggIzExMTsgKi9cbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDQ0JTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi8qICBzZXQgYmcgYW5kIHRleHQgb24gcHJvamVjdCwgbm90IHNlbGVjdGVkICovXG5pbnB1dCN0b2dnbGVJbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbC50b2dnbGVJbnB1dC1zd2l0Y2gtaW5uZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHBpbmssIGxhdmVuZGVyKTtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi8qICBTZXRzIGJnIG9mIFRhc2sgd2hlbiBzZWxlY3RlZCovXG5pbnB1dCN0b2dnbGVJbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWRcbiAgKyBsYWJlbC50b2dnbGVJbnB1dC1zd2l0Y2gtaW5uZXI6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtb24pOyAvKlRhc2tzKi9cbiAgbGVmdDogNjhweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkXG4gICsgbGFiZWwudG9nZ2xlSW5wdXQtc3dpdGNoLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpOyAvKlByb2plY3QgKi9cbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDIwcHg7XG59XG5cbi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYSBpbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IHNvbGlkIDNweCAjYWY3NmYzMzM7XG4gIGJvcmRlcjogc29saWQgMS41cHggcmdiYSgyMzQsIDEwMCwgMjE3LCAwLjQpO1xuICAvKiBib3JkZXItcmFkaXVzOiAxMnB4OyAqL1xufVxuXG4vKiBUYXNrIENoZWNrZWQgT2ZmIFRvZ2dsZSAqL1xuLnRhc2stY2hlY2tib3gge1xuICAtLXRleHQ6ICM0MTQ4NTY7XG4gIC0tY2hlY2s6ICNhZjc2ZjM7XG4gIC0tZGlzYWJsZWQ6ICNjM2M4ZGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YXNrLWNoZWNrYm94IGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udGFzay1jaGVja2JveCBsYWJlbDo6YmVmb3JlLCAvKiBkYXNoICovXG4udGFzay1jaGVja2JveCBsYWJlbDo6YWZ0ZXIge1xuICAvKiB0aWNrICovXG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4udGFzay1jaGVja2JveCBsYWJlbDo6YmVmb3JlIHtcbiAgLyogZGFzaCAqL1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDEzcHg7XG4gIGxlZnQ6IC0yN3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG4udGFzay1jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIC8qIHRpY2sgKi9cbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiA0cHg7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAtMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlLFxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDJweDtcbiAgdG9wOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZSB7XG4gIHdpZHRoOiAwcHg7XG4gIHJpZ2h0OiA2MCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbn1cbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106OmFmdGVyIHtcbiAgd2lkdGg6IDBweDtcbiAgbGVmdDogNDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbn1cbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrLTAxLTExIDAuNHMgZWFzZSBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBjaGVjay0wMS0xMSAwLjRzIGVhc2UgZm9yd2FyZHM7XG59XG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrLTAyLTExIDAuNHMgZWFzZSBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBjaGVjay0wMi0xMSAwLjRzIGVhc2UgZm9yd2FyZHM7XG59XG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1kaXNhYmxlZCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLTExIDAuM3MgZWFzZSAwLjFzIGZvcndhcmRzO1xuICBhbmltYXRpb246IG1vdmUtMTEgMC4zcyBlYXNlIDAuMXMgZm9yd2FyZHM7XG59XG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGlzYWJsZWQpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpY2UtMTEgMC40cyBlYXNlIGZvcndhcmRzO1xuICBhbmltYXRpb246IHNsaWNlLTExIDAuNHMgZWFzZSBmb3J3YXJkcztcbn1cbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmaXJld29yay0xMSAwLjVzIGVhc2UgZm9yd2FyZHMgMC4xcztcbiAgYW5pbWF0aW9uOiBmaXJld29yay0xMSAwLjVzIGVhc2UgZm9yd2FyZHMgMC4xcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtMTEge1xuICA1MCUge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlLTExIHtcbiAgNTAlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpY2UtMTEge1xuICA2MCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDRweDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAtMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGljZS0xMSB7XG4gIDYwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogNHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IC0ycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgY2hlY2stMDEtMTEge1xuICAwJSB7XG4gICAgd2lkdGg6IDRweDtcbiAgICB0b3A6IGF1dG87XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRvcDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICA1MSUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgdG9wOiA4cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiA1cHg7XG4gICAgdG9wOiA4cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNoZWNrLTAxLTExIHtcbiAgMCUge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0b3A6IGF1dG87XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgNTElIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRvcDogOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIHRvcDogOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGNoZWNrLTAyLTExIHtcbiAgMCUge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0b3A6IGF1dG87XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgNTElIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRvcDogOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgdG9wOiA4cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjaGVjay0wMi0xMSB7XG4gIDAlIHtcbiAgICB3aWR0aDogNHB4O1xuICAgIHRvcDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUxJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0b3A6IDhweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIHRvcDogOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmaXJld29yay0xMSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJveC1zaGFkb3c6XG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjA7XG4gIH1cbiAgMzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm94LXNoYWRvdzpcbiAgICAgIDAgLTE1cHggMCAwcHggIzRmMjlmMCxcbiAgICAgIDE0cHggLThweCAwIDBweCAjNGYyOWYwLFxuICAgICAgMTRweCA4cHggMCAwcHggIzRmMjlmMCxcbiAgICAgIDAgMTVweCAwIDBweCAjNGYyOWYwLFxuICAgICAgLTE0cHggOHB4IDAgMHB4ICM0ZjI5ZjAsXG4gICAgICAtMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmlyZXdvcmstMTEge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3gtc2hhZG93OlxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwO1xuICB9XG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJveC1zaGFkb3c6XG4gICAgICAwIC0xNXB4IDAgMHB4ICM0ZjI5ZjAsXG4gICAgICAxNHB4IC04cHggMCAwcHggIzRmMjlmMCxcbiAgICAgIDE0cHggOHB4IDAgMHB4ICM0ZjI5ZjAsXG4gICAgICAwIDE1cHggMCAwcHggIzRmMjlmMCxcbiAgICAgIC0xNHB4IDhweCAwIDBweCAjNGYyOWYwLFxuICAgICAgLTE0cHggLThweCAwIDBweCAjNGYyOWYwO1xuICB9XG59XG5cbi8qIFdPQkJMRSBFRkZFQ1QgT04gQklOICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgaHZyLXdvYmJsZS10b3Age1xuICAxNi42NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0xMmRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xMmRlZyk7XG4gIH1cbiAgMzMuMyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDEwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoMTBkZWcpO1xuICB9XG4gIDQ5Ljk1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTZkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tldygtNmRlZyk7XG4gIH1cbiAgNjYuNiUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tldyg0ZGVnKTtcbiAgfVxuICA4My4yNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTJkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDApO1xuICAgIHRyYW5zZm9ybTogc2tldygwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBodnItd29iYmxlLXRvcCB7XG4gIDE2LjY1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcbiAgfVxuICAzMy4zJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMTBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tldygxMGRlZyk7XG4gIH1cbiAgNDkuOTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtNmRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3KC02ZGVnKTtcbiAgfVxuICA2Ni42JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoNGRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xuICB9XG4gIDgzLjI1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTJkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tldygtMmRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMCk7XG4gICAgdHJhbnNmb3JtOiBza2V3KDApO1xuICB9XG59XG4uaHZyLXdvYmJsZS10b3Age1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG59XG4uaHZyLXdvYmJsZS10b3A6aG92ZXIsXG4uaHZyLXdvYmJsZS10b3A6Zm9jdXMsXG4uaHZyLXdvYmJsZS10b3A6YWN0aXZlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogaHZyLXdvYmJsZS10b3A7XG4gIGFuaW1hdGlvbi1uYW1lOiBodnItd29iYmxlLXRvcDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xufVxuXG4vKiBXYXZpbmcgSGFuZCBIb3ZlciAqL1xuLndhdmU6aG92ZXIge1xuICBhbmltYXRpb24tbmFtZTogd2F2ZS1hbmltYXRpb247IC8qIFJlZmVycyB0byB0aGUgbmFtZSBvZiB5b3VyIEBrZXlmcmFtZXMgZWxlbWVudCBiZWxvdyAqL1xuICBhbmltYXRpb24tZHVyYXRpb246IDIuNXM7IC8qIENoYW5nZSB0byBzcGVlZCB1cCBvciBzbG93IGRvd24gKi9cbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IC8qIE5ldmVyIHN0b3Agd2F2aW5nIDopICovXG4gIHRyYW5zZm9ybS1vcmlnaW46IDcwJSA3MCU7IC8qIFBpdm90IGFyb3VuZCB0aGUgYm90dG9tLWxlZnQgcGFsbSAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbkBrZXlmcmFtZXMgd2F2ZS1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNGRlZyk7XG4gIH0gLyogVGhlIGZvbGxvd2luZyBmaXZlIHZhbHVlcyBjYW4gYmUgcGxheWVkIHdpdGggdG8gbWFrZSB0aGUgd2F2aW5nIG1vcmUgb3IgbGVzcyBleHRyZW1lICovXG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTRkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH0gLyogUmVzZXQgZm9yIHRoZSBsYXN0IGhhbGYgdG8gcGF1c2UgKi9cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cblxuLyogR3JvdyBTaGFkb3cgKi9cbi5odnItZ3Jvdy1zaGFkb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcbn1cbi5odnItZ3Jvdy1zaGFkb3c6aG92ZXIsXG4uaHZyLWdyb3ctc2hhZG93OmZvY3VzLFxuLmh2ci1ncm93LXNoYWRvdzphY3RpdmUge1xuICBib3gtc2hhZG93OiAwIDEwcHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbmhlYWRlci5oZWxsbyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjVweCkge1xuICBkaXYuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTh2dztcbiAgICBoZWlnaHQ6IDk4dmg7XG4gIH1cbn1cblxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIGhlYWRlci5oZWxsbyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59ICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qix3QkFBd0I7O0VBRXhCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix3QkFBd0I7O0VBRXhCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtF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O0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGOztBQUVBOzs7O0dBSUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1NTIGZvciBUb0RvIExpc3QgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWdyYWRpZW50X2JnX2NvbG9yOiAjZWRlNWZkO1xcbiAgLS1ncmFkaWVudF9zcG90MV9jb2xvcjogI2UxY2JmYjtcXG4gIC0tZ3JhZGllbnRfc3BvdDFfdzogNzUlO1xcbiAgLS1ncmFkaWVudF9zcG90MV9oOiA3NSU7XFxuICAtLWdyYWRpZW50X3Nwb3QxX3g6IDAlO1xcbiAgLS1ncmFkaWVudF9zcG90MV95OiAwJTtcXG4gIC0tZ3JhZGllbnRfc3BvdDJfY29sb3I6ICNmZmUwZDY7XFxuICAtLWdyYWRpZW50X3Nwb3QyX3c6IDc1JTtcXG4gIC0tZ3JhZGllbnRfc3BvdDJfaDogNzUlO1xcbiAgLS1ncmFkaWVudF9zcG90Ml94OiAxMDAlO1xcbiAgLS1ncmFkaWVudF9zcG90Ml95OiAwJTtcXG4gIC0tZ3JhZGllbnRfc3BvdDNfY29sb3I6ICNlYmUwZmY7XFxuICAtLWdyYWRpZW50X3Nwb3QzX3c6IDc1JTtcXG4gIC0tZ3JhZGllbnRfc3BvdDNfaDogNzUlO1xcbiAgLS1ncmFkaWVudF9zcG90M194OiAxMDAlO1xcbiAgLS1ncmFkaWVudF9zcG90M195OiAxMDAlO1xcblxcbiAgLS1ncmFkaWVudF9zcG90NF9jb2xvcjogI2ZmZGJmMztcXG4gIC0tZ3JhZGllbnRfc3BvdDRfdzogNzUlO1xcbiAgLS1ncmFkaWVudF9zcG90NF9oOiA3NSU7XFxuICAtLWdyYWRpZW50X3Nwb3Q0X3g6IDAlO1xcbiAgLS1ncmFkaWVudF9zcG90NF95OiAxMDAlO1xcblxcbiAgLS1ncmFkaWVudF9zcG90Ml93OiAxMDAlO1xcbiAgLS1ncmFkaWVudF9zcG90Ml94OiA5NCU7XFxuICAtLWdyYWRpZW50X3Nwb3QyX2g6IDQ0JTtcXG4gIC0tZ3JhZGllbnRfc3BvdDFfdzogNTElO1xcbiAgLS1ncmFkaWVudF9zcG90MV9oOiA2NCU7XFxuICAtLWdyYWRpZW50X3Nwb3QxX3g6IDclO1xcbiAgLS1ncmFkaWVudF9zcG90M193OiAxMDAlO1xcbiAgLS1ncmFkaWVudF9zcG90M19oOiA4MiU7XFxuICAtLWdyYWRpZW50X3Nwb3QzX3g6IDkwJTtcXG4gIC0tZ3JhZGllbnRfc3BvdDRfdzogNjQlO1xcbiAgLS1ncmFkaWVudF9zcG90NF94OiAwJTtcXG4gIC0tZ3JhZGllbnRfc3BvdDRfeTogNDUlO1xcblxcbiAgLyogUHJvamVjdCBDb2xvdXJzICovXFxuICAtLXByb2plY3RfY29sb3IxOiAjZmZlZGQ2O1xcbiAgLS1wcm9qZWN0X2NvbG9yMjogI2ZmY2I5YTtcXG4gIC0tcHJvamVjdF9jb2xvcjM6ICNmOGFlZjk7XFxuICAtLXByb2plY3RfY29sb3I0OiAjYjhkYmZkO1xcbiAgLS1wcm9qZWN0X2NvbG9yNTogI2M4YmFmYTtcXG4gIC0tcHJvamVjdF9jb2xvcjY6ICM4ZmU0ZTk7XFxuXFxuICAtLWRhcmtHcmV5OiAjMjUyYjNkO1xcbiAgLS1tZWRHcmV5OiAjOTQ5NjliO1xcbiAgLS1saWdodEdyZXk6ICNlZWU7XFxufVxcblxcbi53ZWxjb21lLXRleHQge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XFxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLXByb2plY3RfY29sb3I0KSAzMCUsIHZhcigtLXByb2plY3RfY29sb3I2KSAxMDAlKTsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmE4M2ZjLCAjY2FiY2ZiKTsgKi9cXG4gIC8qIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cXG4gIGNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG4gIHNyYzpcXG4gICAgdXJsKCcuL2ZvbnRzL051bml0by1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ29wZW50eXBlJyksXFxuICAgIHVybCgnLi9mb250cy9OdW5pdG8tSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLmZhbmN5LWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYWRpZW50X2JnX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90MV93KSB2YXIoLS1ncmFkaWVudF9zcG90MV9oKSBhdCBsZWZ0XFxuICAgICAgICB2YXIoLS1ncmFkaWVudF9zcG90MV94KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDFfeSksXFxuICAgICAgdmFyKC0tZ3JhZGllbnRfc3BvdDFfY29sb3IpLFxcbiAgICAgIHRyYW5zcGFyZW50XFxuICAgICksXFxuICAgIHJhZGlhbC1ncmFkaWVudChcXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90Ml93KSB2YXIoLS1ncmFkaWVudF9zcG90Ml9oKSBhdCBsZWZ0XFxuICAgICAgICB2YXIoLS1ncmFkaWVudF9zcG90Ml94KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDJfeSksXFxuICAgICAgdmFyKC0tZ3JhZGllbnRfc3BvdDJfY29sb3IpLFxcbiAgICAgIHRyYW5zcGFyZW50XFxuICAgICksXFxuICAgIHJhZGlhbC1ncmFkaWVudChcXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90M193KSB2YXIoLS1ncmFkaWVudF9zcG90M19oKSBhdCBsZWZ0XFxuICAgICAgICB2YXIoLS1ncmFkaWVudF9zcG90M194KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDNfeSksXFxuICAgICAgdmFyKC0tZ3JhZGllbnRfc3BvdDNfY29sb3IpLFxcbiAgICAgIHRyYW5zcGFyZW50XFxuICAgICksXFxuICAgIHJhZGlhbC1ncmFkaWVudChcXG4gICAgICB2YXIoLS1ncmFkaWVudF9zcG90NF93KSB2YXIoLS1ncmFkaWVudF9zcG90NF9oKSBhdCBsZWZ0XFxuICAgICAgICB2YXIoLS1ncmFkaWVudF9zcG90NF94KSB0b3AgdmFyKC0tZ3JhZGllbnRfc3BvdDRfeSksXFxuICAgICAgdmFyKC0tZ3JhZGllbnRfc3BvdDRfY29sb3IpLFxcbiAgICAgIHRyYW5zcGFyZW50XFxuICAgICk7XFxufVxcblxcbi8qIFxcbiAgLmFuaW1hdGVkIHtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIH1cXG5Aa2V5ZnJhbWVzIGNoYW1lbGVvbiB7XFxuXFxuICAgIDAlIHtcXG4gICAgICBjb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjEpO1xcbiAgICB9XFxuICAgIDE0LjI5OTklIHtcXG4gICAgICBjb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjIpO1xcbiAgICB9XFxuICAgIDI4LjU5OTklIHtcXG4gICAgICBjb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjMpO1xcbiAgICB9XFxuICAgIDQyLjg5OTglIHtcXG4gICAgICBjb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjQpO1xcbiAgICB9XFxuICAgIDU3LjE5OTYlIHtcXG4gICAgICBjb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjUpO1xcbiAgICB9XFxuICAgIDcxLjQ5OTUlIHtcXG4gICAgICBjb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjYpO1xcbiAgICB9XFxuICAgIDg1Ljc5OTQlIHtcXG4gICAgICBjb2xvcjogdmlvbGV0O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG4gIH1cXG4gIC5jaGFtZWxlb24ge1xcbiAgICBhbmltYXRpb24tbmFtZTogY2hhbWVsZW9uO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIH0gICovXFxuLyogVE8gVVNFLCBBREQgQ0xBU1MgQU5JTUFURSBBTkQgQ0xBU1MgQ0hBTUVMRU9OICovXFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY3Vyc29yOiB1cmwoJy4vaW1hZ2VzL2N1cnNvcjE2LnBuZycpLCBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgd2lkdGg6IDg1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQzLCAyNDgsIDAuNjIyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYgMjQzIDI0OCAvIDU2JSk7IC8qIGdyYWRpZW50IGJsZW5kIGludG8gYmcgICovXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggZmxvcmFsd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxLjVmciAwLjVmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnbmF2IGhlbGxvIHByb2poZWFkaW5nJ1xcbiAgICAnbmF2IGluZm8gcHJvamVjdCdcXG4gICAgJ25hdiBoZWFkaW5nIHByb2plY3QnXFxuICAgICduYXYgdGFza2JveCBwcm9qZWN0JztcXG4gIGJveC1zaGFkb3c6XFxuICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxuICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXFxuICAgIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXG4gICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxcbiAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4Nik7XFxufVxcblxcbi5uYXYge1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiAwcHggMzBweCAwcHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggbGlnaHRncmF5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubmF2IC5sb2dvIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxufVxcblxcbi8qIHN0eWluZyBvZiBidXR0b25zIG9uIGRhc2ggKi9cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM5NDk2OWI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idG4tZ2l0aHViIGEge1xcbiAgY29sb3I6ICM5NDk2OWI7XFxufVxcblxcbi5idG46aG92ZXIsXFxuLmJ0bi1naXRodWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NGI1YjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCAjZmY5NGVhO1xcbn1cXG5cXG4uYnRuIGltZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmhlbGxvIHtcXG4gIGdyaWQtYXJlYTogaGVsbG87XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFjYmZiOyAqL1xcbiAgY29sb3I6ICMzMDJiMmI7XFxuICBjb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmltZy1oYW5kIHtcXG4gIC8qIHdpZHRoOiAxNyU7ICovXFxuICB3aWR0aDogNzVweDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uaW5mbyB7XFxuICBncmlkLWFyZWE6IGluZm87XFxuXFxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzYsMjI0LDI1MywxKSA1MSUsIHJnYmEoMjM4LDIzOCwyMzgsMSkgOTklKTsgICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDBkZWcsXFxuICAgIHJnYmEoMjM2LCAyMjQsIDI1MywgMSkgNTElLFxcbiAgICByZ2JhKDI0NiwgMjM3LCAyNDMsIDEpIDk5JVxcbiAgKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ViZTBmZjsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIGJveC1zaGFkb3c6XFxuICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxuICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXFxuICAgIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXG4gICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpOyAgKi9cXG59XFxuXFxuLmluZm86OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAwZGVnLFxcbiAgICAgIHJnYmEoMjM2LCAyMjQsIDI1MywgMC4xKSAxMSUsXFxuICAgICAgcmdiYSgyNDYsIDIzNywgMjQzLCAxKSA5OSVcXG4gICAgKSxcXG4gICAgdXJsKCcvc3JjL2ltYWdlcy9sb3ctcG9seS1ncmlkLWhhaWtlaS5wbmcnKTtcXG5cXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMHB4IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAvKiBib3JkZXI6IHNvbGlkIDFweCAjYzZhZGYyOyAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5pbmZvLWl0ZW0ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMjBweCAxMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YWVmODsgLyogYmVzdCBjb2xvdXIgb24gbWFjbWluaSAgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZjc2ZjM7IC8qIGJlc3QgY29sb3Igb24gbWFjYm9vayAqL1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjYzZhZGYyO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNjNmFkZjI7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6XFxuICAgIDAgMnB4IDRweCAjM2E0NzRlMjYsXFxuICAgIDAgMXB4IDJweCAjM2E0NzRlMjY7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5pbmZvIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbn1cXG5cXG4uaW5mby1pdGVtOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNmFkZjI7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYjQ5MWYxOyAqL1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggNXB4IHdoaXRlc21va2U7XFxuICBib3JkZXItbGVmdDogc29saWQgMnB4ICNkMWJjZjg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2QxYmNmODtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgZ3JpZC1hcmVhOiBoZWFkaW5nO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjojZWRlNWZkOyAqL1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4vKiBBTEwgUFJPSkVDVFMgRElTUExBWSAqL1xcbi50YXNrYm94IHtcXG4gIGdyaWQtYXJlYTogdGFza2JveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcblxcbiAgcGVyc3BlY3RpdmU6IDYwcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAvKiBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4OyAqL1xcbiAgLyogYm94LXNoYWRvdzpcXG4gICAgMCAycHggNHB4ICMzYTQ3NGUyNixcXG4gICAgMCAxcHggMnB4ICMzYTQ3NGUyNjsgKi9cXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDNkZWcsIHJnYmEoMjA0LDE2OSwyMjYsMSkgMCUsIHJnYmEoMjI3LDE1OSwyMDksMC43NjM3NjQ4ODA5NTIzODA5KSA0NiUsIHJnYmEoMjUzLDE0NywxOTAsMSkgMTAwJSk7XFxuXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzZGVnLCByZ2JhKDIwNCwxNjksMjI2LDEpIDAlLCByZ2JhKDIyNywxNTksMjA5LDAuNzYzNzY0ODgwOTUyMzgwOSkgNDYlLCAjZmVlMGQ3IDEwMCUpO1xcbiAgLyogI2ZmZDNjNiAqL1xcblxcbiAgLyogYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjZmJkZWQ3O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmYmRlZDc7ICovXFxuXFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggIzNhNDc0ZTI2LCAwIDFweCAycHggIzNhNDc0ZTI2O1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcblxcbiAgdHJhbnNpdGlvbjpcXG4gICAgcm90YXRlIDQwMG1zLFxcbiAgICBzY2FsZSAyMDBtcztcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciAge1xcbiAgcm90YXRlOiB5IDIwZGVnO1xcbiAgc2NhbGU6IDEuMDU7XFxuICAgIH1cXG5cXG4ucHJvamVjdC1pdGVtIGg1IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjNGYzNDZiO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgei1pbmRleDogNTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxucC5wcm9qZWN0LWl0ZW0tdGFza25vIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBsaW5lLWhlaWdodDogMS40O1xcbn1cXG5wLnByb2plY3QtaXRlbS10YXNrbm86bnRoLWNoaWxkKDIpIHtcXG4gIC8qIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDsgKi9cXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuZGl2LnByb2plY3QtaXRlbS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiBcXG59XFxuYnV0dG9uLnByb2plY3QtaXRlbS1kZWxidG4ge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbi8qIFBST0pFQ1QgU0VDVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLnByb2poZWFkaW5nIHtcXG4gIGdyaWQtYXJlYTogcHJvamhlYWRpbmc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBncmlkLWFyZWE6IHByb2plY3Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAtNXB4IC00NnB4IDU4cHggLTIwcHggbGlnaHRncmV5O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9pbWFnZXMvY3J5c3RhbHMucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIDk1JTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuaDIucHJvamVjdC1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QgaDMsXFxuLmdyYWRpZW50LWgzIHtcXG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIC8qIGNvbG9yOiB2YXIoLS1wcm9qZWN0X2NvbG9yNSk7ICovXFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTsgKi9cXG5cXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmYTgzZmMsICNjYWJjZmIpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIGRldGFpbHMgKi9cXG4ucHJvamVjdC10YXNrLWl0ZW0ge1xcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcXG4gIC8qIGJhY2tncm91bmQ6IHJnYigyNTAsIDI0OCwgMjA4KTsgIHBvc3RpdCBjb2xvdXIgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgMCAycHggNHB4ICMzYTQ3NGUyNixcXG4gICAgMCAxcHggMnB4ICMzYTQ3NGUyNjtcXG59XFxuXFxuLnByb2plY3QtdGFzay1pdGVtIGxhYmVsLFxcbi5wcm9qZWN0LXRhc2staXRlbSBwLFxcbi5wcm9qZWN0LXRhc2staXRlbSBwIHNwYW4ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcXG59XFxuLnByb2plY3QtdGFzay1pdGVtIGxhYmVsOmZvY3VzLXZpc2libGUsXFxuLnByb2plY3QtdGFzay1pdGVtIHA6Zm9jdXMtdmlzaWJsZSxcXG4ucHJvamVjdC10YXNrLWl0ZW0gc3Bhbjpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZhODNmYztcXG59XFxuXFxuKltjb250ZW50ZWRpdGFibGU9J3RydWUnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTRweDtcXG4gIGNhcmV0LWNvbG9yOiAjYWY3NmYzO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi50YXNrY2hlY2tib3gge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi5wcm9qZWN0LXRhc2stcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjYpO1xcbiAgY29sb3I6ICMwMDhiOTI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMXB4IDE1cHg7XFxuXFxuICBjb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAjMDAwMDAwMmU7XFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMHB4ICM3OTQ4NWY3YTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5kZXRhaWxzLmVkaXQtbW9kZSAucHJvamVjdC10YXNrLXByaW9yaXR5IHtcXG4gIC8qIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgKi9cXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZWRpdC1tb2RlIHtcXG4gIGN1cnNvcjogdGV4dDtcXG59XFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmxvd1ByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3I0KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM5NWQ4OTEsICM3NGJiYWQpO1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RfY29sb3IzKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmOGFlZjksICNjYWJjZmIpO1xcbn1cXG5cXG4ubWVkUHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdF9jb2xvcjYpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQzYTNlOCwgIzBlZGJkZCk7XFxufVxcblxcbi5wcm9qZWN0LXRhc2stZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLWR1ZWRhdGUge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGNvbG9yOiAjY2Q4Y2ZlO1xcbiAgY29sb3I6ICM5ZDRlZDg7XFxufVxcbi5wcm9qZWN0LXRhc2stZHVlZGF0ZSBzcGFuIHtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxufVxcblxcbi5kYXRlLXBhZGRpbmcge1xcbiAgcGFkZGluZzogNXB4IDVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJvamVjdC10YXNrLWltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRhc2stZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc2VsZi1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG59XFxuXFxuLnByb2plY3QtdGFzay1mb290ZXIgaW1nIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG59XFxuXFxuLnByb2plY3QtdGFzay1mb290ZXIgaW1nOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIG1hcmdpbi1yaWdodDogMTFweDtcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCxcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQge1xcbiAgY29sb3I6IHZhcigtLW1lZEdyZXkpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDtcXG59XFxuXFxuLyogUE9QIFVQUy8gTU9EQUxTICAqL1xcblxcbi8qIENyZWF0ZS8gQWRkIE5ldy4uLiAgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIC8qIHBhZGRpbmc6IDEuM3JlbTsgKi9cXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLyogdG9wOiAyMCU7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmYmQ0ZmM7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgei1pbmRleDogMjtcXG5cXG4gIGJveC1zaGFkb3c6XFxuICAgIDBweCA0M3B4IDc5cHggLTIwcHggI2FmODZjMCxcXG4gICAgMzRweCAtMTJweCA4MHB4IC0yMHB4ICNmY2Q3ZTRkNDtcXG5cXG4gIGJveC1zaGFkb3c6XFxuICAgIC0zMXB4IDIwcHggNjNweCAtMjBweCAjYWY4NmMwLFxcbiAgICAxM3B4IC0zNXB4IDYzcHggLTJweCAjZmNkN2U0ZmE7XFxufVxcblxcbi5jcmVhdGUtbW9kYWwtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01MnB4O1xcbiAgbGVmdDogNDQlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIDRweCAjZmJkNGZjO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IDcwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4ubW9kYWwgaDMge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMTBweDtcXG59XFxuXFxuLm1vZGFsIC5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jcmVhdGUtbW9kYWwtaW5wdXQtYXJlYSB7XFxuICBtYXJnaW4tbGVmdDogMjIlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1vZGFsIGlucHV0LFxcbnNlbGVjdCNwcm9qRHJvcGRvd24ge1xcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuLm1vZGFsIHAge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogIzc3NztcXG4gIG1hcmdpbjogMC40cmVtIDAgMC4ycmVtO1xcbn1cXG5cXG4uY3JlYXRlLW1vZGFsLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuc2VsZWN0I3Byb2pEcm9wZG93biB7XFxuICAvKiB3aWR0aDogMjAwcHg7ICovXFxuICBoZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jcmVhdGUtbW9kYWwtYnV0dG9ucyBidXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogI2ZiZDRmYztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiBzb2xpZCAzcHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjNDNhM2U4LCAjMGVkYmRkKTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmNyZWF0ZS1tb2RhbC1idXR0b25zIGJ1dHRvbiBpbWcge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbmJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXItbGVmdDogc29saWQgM3B4ICNmYmQ0ZmM7XFxufVxcblxcbi5idG4tY2xvc2Uge1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgOTcsIDgyLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5pbnB1dCN0YXNrRHVlZGF0ZSB7XFxuICB3aWR0aDogNDclO1xcbn1cXG5cXG4vKiBQUklPUklUWSBSQURJTyBJTiBORVdUQVNLIEZPUk0gKi9cXG4udGFza1ByaW9yaXR5X3JhZGlvIHtcXG4gIGJhY2tncm91bmQ6ICM0NTQ4NTc7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgaW5zZXQgMCAwIDAgM3B4IHJnYmEoMzUsIDMzLCA0NSwgMC4zKSxcXG4gICAgMCAwIDAgM3B4IHJnYmEoMTg1LCAxODUsIDE4NSwgMC4zKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1hcmdpbjogMjBweCAwcHggLTEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrRWRpdFByaW9yaXR5IHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogdW5zZXQ7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRhc2tQcmlvcml0eV9yYWRpbyBpbnB1dCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xcblxcbiAgYmFja2dyb3VuZDogIzQ1NDg1NztcXG4gIGNvbG9yOiAjYmRiZGJkYmQ7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHN5c3RlbS11aSxcXG4gICAgLWFwcGxlLXN5c3RlbSxcXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICAnU2Vnb2UgVUknLFxcbiAgICBSb2JvdG8sXFxuICAgICdIZWx2ZXRpY2EgTmV1ZScsXFxuICAgIEFyaWFsLFxcbiAgICAnTm90byBTYW5zJyxcXG4gICAgc2Fucy1zZXJpZixcXG4gICAgJ0FwcGxlIENvbG9yIEVtb2ppJyxcXG4gICAgJ1NlZ29lIFVJIEVtb2ppJyxcXG4gICAgJ1NlZ29lIFVJIFN5bWJvbCcsXFxuICAgICdOb3RvIENvbG9yIEVtb2ppJztcXG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBsaW5lYXI7XFxuICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyAqL1xcbn1cXG5cXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0OmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzk1ZDg5MSwgIzc0YmJhZCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAjMDAwMDAwMmU7XFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMHB4ICM3OTQ4NWY3YTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi50YXNrUHJpb3JpdHlfcmFkaW8gaW5wdXQjdGFza1ByaW9yaXR5X21lZDpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0M2EzZTgsICMwZWRiZGQpO1xcbn1cXG5cXG4udGFza1ByaW9yaXR5X3JhZGlvIGlucHV0I3Rhc2tQcmlvcml0eV9oaWdoOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y4YWVmOSwgI2NhYmNmYik7XFxufVxcblxcbi50YXNrUHJpb3JpdHlfcmFkaW8gaW5wdXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIobGFiZWwpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLmdyYWRpZW50LWgzIHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLyogVGFzay9Qcm9qZWN0IFN3aXRjaGVyIGluc2lkZSBNb2RhbCAqL1xcbmRpdi5jcmVhdGUtbW9kYWwtc2VsZWN0LXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJveC1zaGFkb3c6XFxuICAgIGluc2V0IDAgMCAwIDNweCByZ2IoMzUgMzMgNDUgLyAwJSksXFxuICAgIDAgMCAwIDNweCByZ2IoMTg1IDE4NSAxODUgLyAxNiUpO1xcbn1cXG5cXG4vKnNlbGVjdGVkIHNpZGUqL1xcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjNDI0MjQyO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLyogIGJnIG9mIFRhc2sgd2hlbiBub3Qgc2VsZWN0ZWQqL1xcbmxhYmVsLnRvZ2dsZUlucHV0LXN3aXRjaC1pbm5lciB7XFxuICBtYXJnaW46IDBweDtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHBpbmssIGxhdmVuZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiB0ZXh0IG9mIFRhc2sgd2hlbiBub3Qgc2VsZWN0ZWQgICovXFxubGFiZWwudG9nZ2xlSW5wdXQtc3dpdGNoLWlubmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLW9uKTsgLyogVGFzayAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRvcDogN3B4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLyogIHByb2plY3Qgc2VsZWN0ZWQgKi9cXG5sYWJlbC50b2dnbGVJbnB1dC1zd2l0Y2gtaW5uZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpOyAvKiBQcm9qZWN0ICovXFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMnB4O1xcbiAgdG9wOiAycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgLyogYm94LXNoYWRvdzogMHB4IDBweCA2cHggLTJweCAjMTExOyAqL1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG59XFxuXFxuaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDY4cHg7XFxuICBsZWZ0OiA0NCU7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi8qICBzZXQgYmcgYW5kIHRleHQgb24gcHJvamVjdCwgbm90IHNlbGVjdGVkICovXFxuaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgbGFiZWwudG9nZ2xlSW5wdXQtc3dpdGNoLWlubmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcGluaywgbGF2ZW5kZXIpO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi8qICBTZXRzIGJnIG9mIFRhc2sgd2hlbiBzZWxlY3RlZCovXFxuaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkXFxuICArIGxhYmVsLnRvZ2dsZUlucHV0LXN3aXRjaC1pbm5lcjphZnRlciB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtb24pOyAvKlRhc2tzKi9cXG4gIGxlZnQ6IDY4cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuaW5wdXQjdG9nZ2xlSW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkXFxuICArIGxhYmVsLnRvZ2dsZUlucHV0LXN3aXRjaC1pbm5lcjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLW9mZik7IC8qUHJvamVjdCAqL1xcbiAgcmlnaHQ6IGF1dG87XFxuICBsZWZ0OiAyMHB4O1xcbn1cXG5cXG4uY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEgaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogc29saWQgM3B4ICNhZjc2ZjMzMztcXG4gIGJvcmRlcjogc29saWQgMS41cHggcmdiYSgyMzQsIDEwMCwgMjE3LCAwLjQpO1xcbiAgLyogYm9yZGVyLXJhZGl1czogMTJweDsgKi9cXG59XFxuXFxuLyogVGFzayBDaGVja2VkIE9mZiBUb2dnbGUgKi9cXG4udGFzay1jaGVja2JveCB7XFxuICAtLXRleHQ6ICM0MTQ4NTY7XFxuICAtLWNoZWNrOiAjYWY3NmYzO1xcbiAgLS1kaXNhYmxlZDogI2MzYzhkZTtcXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMHB4IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGFzay1jaGVja2JveCBsYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi50YXNrLWNoZWNrYm94IGxhYmVsOjpiZWZvcmUsIC8qIGRhc2ggKi9cXG4udGFzay1jaGVja2JveCBsYWJlbDo6YWZ0ZXIge1xcbiAgLyogdGljayAqL1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi50YXNrLWNoZWNrYm94IGxhYmVsOjpiZWZvcmUge1xcbiAgLyogZGFzaCAqL1xcbiAgaGVpZ2h0OiAycHg7XFxuICB3aWR0aDogMTNweDtcXG4gIGxlZnQ6IC0yN3B4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hlY2spO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XFxufVxcbi50YXNrLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcXG4gIC8qIHRpY2sgKi9cXG4gIGhlaWdodDogNHB4O1xcbiAgd2lkdGg6IDRweDtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogLTI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlLFxcbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZSB7XFxuICB3aWR0aDogMHB4O1xcbiAgcmlnaHQ6IDYwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG59XFxuLnRhc2stY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YWZ0ZXIge1xcbiAgd2lkdGg6IDBweDtcXG4gIGxlZnQ6IDQwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbn1cXG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2stMDEtMTEgMC40cyBlYXNlIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uOiBjaGVjay0wMS0xMSAwLjRzIGVhc2UgZm9yd2FyZHM7XFxufVxcbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrLTAyLTExIDAuNHMgZWFzZSBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbjogY2hlY2stMDItMTEgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tZGlzYWJsZWQpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtMTEgMC4zcyBlYXNlIDAuMXMgZm9yd2FyZHM7XFxuICBhbmltYXRpb246IG1vdmUtMTEgMC4zcyBlYXNlIDAuMXMgZm9yd2FyZHM7XFxufVxcbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGlzYWJsZWQpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWNlLTExIDAuNHMgZWFzZSBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbjogc2xpY2UtMTEgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzay1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZpcmV3b3JrLTExIDAuNXMgZWFzZSBmb3J3YXJkcyAwLjFzO1xcbiAgYW5pbWF0aW9uOiBmaXJld29yay0xMSAwLjVzIGVhc2UgZm9yd2FyZHMgMC4xcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtMTEge1xcbiAgNTAlIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZS0xMSB7XFxuICA1MCUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWNlLTExIHtcXG4gIDYwJSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiA0cHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IC0ycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGljZS0xMSB7XFxuICA2MCUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogNHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAtMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBjaGVjay0wMS0xMSB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTElIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNoZWNrLTAxLTExIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MSUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBjaGVjay0wMi0xMSB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTElIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNoZWNrLTAyLTExIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MSUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmaXJld29yay0xMSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJveC1zaGFkb3c6XFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjA7XFxuICB9XFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJveC1zaGFkb3c6XFxuICAgICAgMCAtMTVweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIDE0cHggLThweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIDE0cHggOHB4IDAgMHB4ICM0ZjI5ZjAsXFxuICAgICAgMCAxNXB4IDAgMHB4ICM0ZjI5ZjAsXFxuICAgICAgLTE0cHggOHB4IDAgMHB4ICM0ZjI5ZjAsXFxuICAgICAgLTE0cHggLThweCAwIDBweCAjNGYyOWYwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZpcmV3b3JrLTExIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm94LXNoYWRvdzpcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCxcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsXFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLFxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMDtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm94LXNoYWRvdzpcXG4gICAgICAwIC0xNXB4IDAgMHB4ICM0ZjI5ZjAsXFxuICAgICAgMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjAsXFxuICAgICAgMTRweCA4cHggMCAwcHggIzRmMjlmMCxcXG4gICAgICAwIDE1cHggMCAwcHggIzRmMjlmMCxcXG4gICAgICAtMTRweCA4cHggMCAwcHggIzRmMjlmMCxcXG4gICAgICAtMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjA7XFxuICB9XFxufVxcblxcbi8qIFdPQkJMRSBFRkZFQ1QgT04gQklOICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGh2ci13b2JibGUtdG9wIHtcXG4gIDE2LjY1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0xMmRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tldygtMTJkZWcpO1xcbiAgfVxcbiAgMzMuMyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tldygxMGRlZyk7XFxuICB9XFxuICA0OS45NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtNmRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tldygtNmRlZyk7XFxuICB9XFxuICA2Ni42JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXcoNGRlZyk7XFxuICB9XFxuICA4My4yNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMmRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tldygtMmRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMCk7XFxuICAgIHRyYW5zZm9ybTogc2tldygwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBodnItd29iYmxlLXRvcCB7XFxuICAxNi42NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMTJkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcXG4gIH1cXG4gIDMzLjMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXcoMTBkZWcpO1xcbiAgfVxcbiAgNDkuOTUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTZkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTZkZWcpO1xcbiAgfVxcbiAgNjYuNiUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldyg0ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xcbiAgfVxcbiAgODMuMjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTJkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTJkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDApO1xcbiAgICB0cmFuc2Zvcm06IHNrZXcoMCk7XFxuICB9XFxufVxcbi5odnItd29iYmxlLXRvcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XFxufVxcbi5odnItd29iYmxlLXRvcDpob3ZlcixcXG4uaHZyLXdvYmJsZS10b3A6Zm9jdXMsXFxuLmh2ci13b2JibGUtdG9wOmFjdGl2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBodnItd29iYmxlLXRvcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBodnItd29iYmxlLXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbn1cXG5cXG4vKiBXYXZpbmcgSGFuZCBIb3ZlciAqL1xcbi53YXZlOmhvdmVyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiB3YXZlLWFuaW1hdGlvbjsgLyogUmVmZXJzIHRvIHRoZSBuYW1lIG9mIHlvdXIgQGtleWZyYW1lcyBlbGVtZW50IGJlbG93ICovXFxuICBhbmltYXRpb24tZHVyYXRpb246IDIuNXM7IC8qIENoYW5nZSB0byBzcGVlZCB1cCBvciBzbG93IGRvd24gKi9cXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyAvKiBOZXZlciBzdG9wIHdhdmluZyA6KSAqL1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNzAlIDcwJTsgLyogUGl2b3QgYXJvdW5kIHRoZSBib3R0b20tbGVmdCBwYWxtICovXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbkBrZXlmcmFtZXMgd2F2ZS1hbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTtcXG4gIH0gLyogVGhlIGZvbGxvd2luZyBmaXZlIHZhbHVlcyBjYW4gYmUgcGxheWVkIHdpdGggdG8gbWFrZSB0aGUgd2F2aW5nIG1vcmUgb3IgbGVzcyBleHRyZW1lICovXFxuICAyMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XFxuICB9XFxuICAzMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNGRlZyk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNGRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH0gLyogUmVzZXQgZm9yIHRoZSBsYXN0IGhhbGYgdG8gcGF1c2UgKi9cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogR3JvdyBTaGFkb3cgKi9cXG4uaHZyLWdyb3ctc2hhZG93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCB0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCB0cmFuc2Zvcm07XFxufVxcbi5odnItZ3Jvdy1zaGFkb3c6aG92ZXIsXFxuLmh2ci1ncm93LXNoYWRvdzpmb2N1cyxcXG4uaHZyLWdyb3ctc2hhZG93OmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuaGVhZGVyLmhlbGxvIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2NXB4KSB7XFxuICBkaXYuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDk4dnc7XFxuICAgIGhlaWdodDogOTh2aDtcXG4gIH1cXG59XFxuXFxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBoZWFkZXIuaGVsbG8ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vT3VyIG1haW4gZmlsZSAtIGhhbmRsZXMgcmVxdWVzdHMuXG4vL1RlbGxzIE1PREVMIHdoYXQgdG8gZG8gKGxvZ2ljIHdpc2UpLFxuLy90ZWxscyBWSUVXIHdoYXQgZG8gdG8gKGRpc3BsYXkgd2lzZSlcbi8vQ29udHJvbHMgYW5kIGRlY2lkZXMgaG93IGRhdGEgaXMgZGlzcGxheWVkXG5pbXBvcnQge30gZnJvbSAnLi92aWV3LmpzJztcbmltcG9ydCB7IGFsbFByb2plY3RzQXJyIH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0TW9kZWwgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2tNb2RlbCB9IGZyb20gJy4vbW9kZWwuanMnO1xuXG5cblxuXG5cblxuXG5cbi8vZ2VuZXJhdGUgSURcbmNvbnN0IGdlbmVyYXRlVVVJRCA9IGZ1bmN0aW9uIGIoYSkge1xuICByZXR1cm4gYVxuICAgID8gKGEgXiAoKE1hdGgucmFuZG9tKCkgKiAxNikgPj4gKGEgLyA0KSkpLnRvU3RyaW5nKDE2KVxuICAgIDogKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGIpO1xufTtcblxuLy9mdW5jdGlvbiB0aGF0IHJ1bnMgd2hlbiBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2pOYW1lKSB7XG4gIC8vY2FsbCB0byBhIGZ1bmN0aW9uIGluc2lkZSBtb2RlbCwgcGFzc2luZyB0aGUgcHJvak5hbWUsIG1vZGVsIHdpbGwgY3JlYXRlIHRoZSBvYmplY3QgYW5kIHJldHVybiB0aGUgb2JqZWN0IHRvIGNvbnRyb2xsZXIgdG8gYmUgcGFzc2VkIHRvIHRoZSB2aWV3IHRvIHJlbmRlciB0aGUgZGlzcGxheVxuXG4gIGxldCBjcmVhdGVkUHJvamVjdCA9IGNyZWF0ZU5ld1Byb2plY3RNb2RlbChwcm9qTmFtZSwgZ2VuZXJhdGVVVUlEKCkpOyAvL2luIG1vZGVsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrKFxuICB0YXNrTmFtZSxcbiAgdGFza0Rlc2MsXG4gIHRhc2tEdWUsXG4gIHRhc2tQcmlvcml0eSxcbiAgcHJvamVjdE5hbWUsXG4gIHByb2pJRCxcbikge1xuICBsZXQgdGFzayA9IGNyZWF0ZU5ld1Rhc2tNb2RlbChcbiAgICB0YXNrTmFtZSxcbiAgICB0YXNrRGVzYyxcbiAgICB0YXNrRHVlLFxuICAgIHRhc2tQcmlvcml0eSxcbiAgICBwcm9qZWN0TmFtZSxcbiAgICBwcm9qSUQsXG4gICAgZ2VuZXJhdGVVVUlEKCksXG4gICk7IC8vaW4gbW9kZWxcbiAgcmV0dXJuIHRhc2s7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBpbWFnZUZhY3RvcnkoaW1hZ2Upe1xuLy8gXHRjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4vLyBcdG15SW1hZ2Uuc3JjID0gaW1hZ2U7XG4vLyBcdHJldHVybiBteUltYWdlO1xuLy8gfVxuXG5cblxuXG4vLyBleHBvcnQgY29uc3QgcHViU3ViID0ge1xuLy8gICBldmVudHM6IHt9LFxuLy8gICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChldk5hbWUsIGZuKSB7XG4vLyAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2TmFtZX1gKTtcbi8vICAgICAvL2FkZCBhbiBldmVudCB3aXRoIGEgbmFtZSBhcyBuZXcgb3IgdG8gZXhpc3RpbmcgbGlzdFxuLy8gICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdIHx8IFtdO1xuLy8gICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0ucHVzaChmbik7XG4vLyAgIH0sXG4vLyAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoZXZOYW1lLCBmbikge1xuLy8gICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBVTnN1YnNjcmliZWQgZnJvbSAke2V2TmFtZX1gKTtcbi8vICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4vLyAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbi8vICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcigoZikgPT4gZiAhPT0gZm4pO1xuLy8gICAgIH1cbi8vICAgfSxcbi8vICAgcHVibGlzaDogZnVuY3Rpb24gKGV2TmFtZSwgZGF0YSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IE1ha2luZyBhIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4vLyAgICAgLy9lbWl0L3B1Ymxpc2ggdGhlIGV2ZW50IHRvIGFueW9uZSB3aG8gaXMgc3Vic2NyaWJlZFxuLy8gICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4vLyAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLmZvckVhY2goKGYpID0+IHtcbi8vICAgICAgICAgZihkYXRhKTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH1cbi8vICAgfSxcbi8vIH07XG4iLCIvL2Rpc3BsYXlQcm9qZWN0IG1vZHVsZSAodmlldylcbmltcG9ydCB7IGFsbFByb2plY3RzQXJyIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0Q2FyZHMgfSBmcm9tICcuL3ZpZXcnO1xuLy8gaW1wb3J0IHsgaW1hZ2VGYWN0b3J5IH0gZnJvbSAnLi9jb250cm9sbGVyJztcblxuaW1wb3J0IGRvd25ncmV5MTYgZnJvbSAnL3NyYy9pbWFnZXMvZG93bmdyZXkxNi5wbmcnO1xuaW1wb3J0IGRpc2tldHRlMjQgZnJvbSAnLi9pbWFnZXMvZGlza2V0dGUyNC5wbmcnO1xuaW1wb3J0IGVkaXQyNCBmcm9tICcuL2ltYWdlcy9lZGl0MjQucG5nJztcbmltcG9ydCBiaW4yNCBmcm9tICcuL2ltYWdlcy9iaW4yNC5wbmcnO1xuXG5leHBvcnQgbGV0IGRpc3BsYXlQcm9qZWN0ID0ge1xuICAvL2RvbSBlbGVtZW50c1xuICBzZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpLFxuXG4gIGNsZWFyU2VjdGlvbigpIHtcbiAgICAvL2xvb3AgdGhyb3VnaCBhbGxQcm9qQXJyIGFuZCBjaGFuZ2UgaXNDdXJyZW50UHJvaiB0byBmYWxzZVxuICAgIGFsbFByb2plY3RzQXJyLmZvckVhY2goKHByb2plY3QpID0+IChwcm9qZWN0LmlzQ3VycmVudFByb2ogPSBmYWxzZSkpO1xuXG4gICAgaWYgKGRpc3BsYXlQcm9qZWN0LnNlY3Rpb24uaGFzQ2hpbGROb2Rlcykge1xuICAgICAgd2hpbGUgKGRpc3BsYXlQcm9qZWN0LnNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICBkaXNwbGF5UHJvamVjdC5zZWN0aW9uLnJlbW92ZUNoaWxkKGRpc3BsYXlQcm9qZWN0LnNlY3Rpb24uZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRpc3BsYXkocHJvamVjdE9iaikge1xuICAgIC8vdGFrZXMgaW4gcHJvamVjdCBhbmQgY3JlYXRlcyBkb20gZWxlbWVudCBmb3IgZWFjaCB0YXNrXG4gICAgLy9tYXkgbmVlZCB0byByZWZhY3RvciB0byBzbWFsbGVyIGZ1bmN0aW9ucyBhcyBjb250YWlucyBzb21lIGxvZ2ljXG5cbiAgICAvL2NyZWF0ZSBlbGVtZW50c1xuICAgIGxldCBoZWFkaW5naDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmdoMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWRpbmcnKTtcbiAgICBoZWFkaW5naDIudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLm5hbWU7XG4gICAgdGhpcy5zZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmdoMik7XG5cbiAgICBsZXQgaGVhZGluZ2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5naDMuY2xhc3NMaXN0LmFkZCgnZ3JhZGllbnQtdGV4dCcpO1xuICAgIGhlYWRpbmdoMy50ZXh0Q29udGVudCA9ICdUbyBkbyc7XG4gICAgdGhpcy5zZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmdoMyk7XG5cbiAgICAvL2lmIHRhc2tBcnIgbm90IGVtcHR5XG4gICAgaWYgKHByb2plY3RPYmoudGFza0Fyci5sZW5ndGggPiAwKSB7XG4gICAgICAvL2NyZWF0ZSBlbGVtZW50IGZvciBlYWNoIGl0ZW0gaW4gdGFzayBhcnJheVxuICAgICAgcHJvamVjdE9iai50YXNrQXJyLmZvckVhY2goY3JlYXRlVGFza0VsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vY291bGQgdGhpcyBmbiBiZSBtb3ZlZCB1cCBhIGxldmVsP1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50KGl0ZW0sIGluZGV4KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTsgLy90YXNrIG9iamVjdFxuICAgICAgLy9jb25zb2xlLmxvZyhpbmRleCk7IC8vMFxuXG4gICAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RldGFpbHMnKTtcbiAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLWl0ZW0nKTtcbiAgICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJRCcsIGl0ZW0uaWQpO1xuICAgICAgbGV0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdW1tYXJ5Jyk7XG5cbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNoZWNrYm94Jyk7XG5cbiAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRhc2ske2luZGV4fWApO1xuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcsICd0YXNrY2hlY2tib3gnKTtcblxuICAgICAgY29uc29sZS5sb2coaXRlbS5pc0NvbXBsZXRlKTtcbiAgICAgIGlmIChpdGVtLmlzQ29tcGxldGUgPT0gdHJ1ZSkge1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXBkYXRlZFRhc2tEYXRhID0ge307XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNoZWNrYm94SGFuZGxlcih1cGRhdGVkVGFza0RhdGEpO1xuICAgICAgfSk7XG5cbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0YXNrJHtpbmRleH1gKTtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICBzdW1tYXJ5LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgIGxldCBwcmlvcml0eXNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBwcmlvcml0eXNwYW4uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgJ3Byb2plY3QtdGFzay1wcmlvcml0eScsXG4gICAgICAgIGAke2l0ZW0ucHJpb3JpdHl9UHJpb3JpdHlgLFxuICAgICAgKTtcbiAgICAgIHByaW9yaXR5c3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdHk7XG4gICAgICBzdW1tYXJ5LmFwcGVuZENoaWxkKHByaW9yaXR5c3Bhbik7XG5cbiAgICAgIGxldCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLWltZycpO1xuICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9pbWFnZXMvZG93bmdyZXkxNi5wbmcnKTtcblxuICAgIGZ1bmN0aW9uIGltYWdlRmFjdG9yeShpbWFnZSl7XG4gICAgICAgIGNvbnN0IG15SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbXlJbWFnZS5zcmMgPSBpbWFnZTtcbiAgICAgICAgcmV0dXJuIG15SW1hZ2U7XG4gICAgfVxuXG4gICAgLy8gICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRvd25ncmV5MTYpO1xuICAgICBcblxuICAgIC8vICAgc3VtbWFyeS5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgc3VtbWFyeS5hcHBlbmRDaGlsZChpbWFnZUZhY3RvcnkoZG93bmdyZXkxNikpO1xuICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChzdW1tYXJ5KTtcblxuICAgICAgbGV0IHRhc2tkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGFza2Rlc2MuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICB0YXNrZGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tkZXNjKTtcblxuICAgICAgbGV0IHRhc2tGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tGb290ZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrLWZvb3RlcicpO1xuICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRm9vdGVyKTtcblxuICAgICAgdGFza0Zvb3Rlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHRhc2tDbGlja0hhbmRsZXIoZSkge1xuICAgICAgICAvL0RFTEVURSBCVE4gQ0xJQ0tFRFxuICAgICAgICBpZiAoZS50YXJnZXQgPT0gdGFza0RlbEljb24pIHtcbiAgICAgICAgICAvL3JlbW92ZSB0YXNrXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7IC8vZm9vdGVyIGVsZW1lbnRcbiAgICAgICAgICBwcm9qZWN0T2JqLmRlbGV0ZVRhc2soaXRlbS5pZCk7XG5cbiAgICAgICAgICAvL0VESVQgQlROIENMSUNLRURcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PSB0YXNrRWRpdEljb24pIHtcbiAgICAgICAgICAvL2lmIHBlbmNpbCBpY29uIHNob3dpbmdcbiAgICAgICAgICBpZiAodGFza0VkaXRJY29uLmdldEF0dHJpYnV0ZSgnc3JjJykgPT0gJy9zcmMvaW1hZ2VzL2VkaXQyNC5wbmcnKSB7XG4gICAgICAgICAgICAvL21vdmUgcHJpb3JpdHkgdG8gaW5zaWRlIGRlc2NcbiAgICAgICAgICAgIHN1bW1hcnkucmVtb3ZlQ2hpbGQocHJpb3JpdHlzcGFuKTtcblxuICAgICAgICAgICAgLy9wdXQgdGhpcyBpbiBhIGZ1bmN0aW9uIHRvIGJlIGV4cG9ydGVkIGJ0d2VlbiBuZXdUYXNrRm9ybS5qcyBhbmQgaGVyZVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eVBpY2tlcihjdXJyZW50UHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgcHJpb3JpdHk6ICcsIGN1cnJlbnRQcmlvcml0eSk7IC8vaGlnaFxuICAgICAgICAgICAgICBsZXQgdGFza1ByaW9yaXR5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBsZXQgdGFza1ByaW9yaXR5SW5wdXRfbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgbGV0IHRhc2tQcmlvcml0eUlucHV0X21lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgIGxldCB0YXNrUHJpb3JpdHlJbnB1dF9oaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgJ3Rhc2tQcmlvcml0eV9yYWRpbycsXG4gICAgICAgICAgICAgICAgJ3Rhc2tFZGl0UHJpb3JpdHknLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dF9sb3cuc2V0QXR0cmlidXRlKCdsYWJlbCcsICdMb3cnKTtcbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfbG93LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dF9sb3cuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrUHJpb3JpdHlfbG93Jyk7XG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza1ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuXG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X21lZC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgJ01lZGl1bScpO1xuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dF9tZWQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X21lZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQcmlvcml0eV9tZWQnKTtcbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfbWVkLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrUHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfbWVkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkJyk7XG5cbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgJ0hpZ2gnKTtcbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQcmlvcml0eV9oaWdoJyk7XG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X2hpZ2guc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tQcmlvcml0eScpO1xuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dF9oaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuXG4gICAgICAgICAgICAgIGlmIChjdXJyZW50UHJpb3JpdHkgPT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQcmlvcml0eSA9PSAnbWVkJykge1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X21lZC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQcmlvcml0eSA9PSAnbG93Jykge1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGFza1ByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dF9sb3cpO1xuICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUlucHV0X21lZCk7XG4gICAgICAgICAgICAgIHRhc2tQcmlvcml0eVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRfaGlnaCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRhc2tQcmlvcml0eVdyYXBwZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRldGFpbHMuaW5zZXJ0QmVmb3JlKGNyZWF0ZVByaW9yaXR5UGlja2VyKGl0ZW0ucHJpb3JpdHkpLCB0YXNrZGVzYyk7XG5cbiAgICAgICAgICAgIC8vYWRkIHBhZGRpbmcgY2xhc3MgdG8gZGF0ZVxuICAgICAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlLXBhZGRpbmcnKTtcblxuICAgICAgICAgICAgLy9hZGQgY2xhc3Mgb2YgZWRpdC1tb2RlIHRvIHRhc2sgcmVsYXRlZCBpbnB1dHMgKGlmIG5lZWRlZClcbiAgICAgICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZWRpdC1tb2RlJyk7XG5cbiAgICAgICAgICAgIC8vc2V0IGNvbnRlbnQtZWRpdGFibGUgdG8gdHJ1ZVxuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgdGFza2Rlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsICd0cnVlJyk7XG5cbiAgICAgICAgICAgIC8vdGhpcyBwZW5jaWwgaWNvbiBuZWVkcyB0byBjaGFuZ2UgdG8gYSBzYXZlIGljb25cbiAgICAgICAgICAgIC8vIHRhc2tFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltYWdlcy9kaXNrZXR0ZTI0LnBuZycpO1xuICAgICAgICAgICAgdGFza0VkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgZGlza2V0dGUyNCk7XG5cbiAgICAgICAgICAgIC8vaWYgU0FWRSAgaWNvblxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAvLyB0YXNrRWRpdEljb24uZ2V0QXR0cmlidXRlKCdzcmMnKSA9PSAnL3NyYy9pbWFnZXMvZGlza2V0dGUyNC5wbmcnXG4gICAgICAgICAgICB0YXNrRWRpdEljb24uZ2V0QXR0cmlidXRlKCdzcmMnKSA9PSBkaXNrZXR0ZTI0XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyAvL2dldCBuZXcgdmFsdWVzXG4gICAgICAgICAgICBsZXQgdXBkYXRlZFRhc2tEYXRhID0ge1xuICAgICAgICAgICAgICBuYW1lOiBsYWJlbC50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgZGVzYzogdGFza2Rlc2MudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgIGRhdGU6IGRhdGUudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgIHByaW9yaXR5OiBnZXRSYWRpb1ZhbHVlKCksXG4gICAgICAgICAgICAgIGlzQ29tcGxldGU6IGl0ZW0uaXNDb21wbGV0ZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vTU9WRSBUTyBtb2RlbFxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICAgICAgICAgICAgbGV0IHJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3Rhc2tQcmlvcml0eScpO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhZGlvW2ldLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcmlvcml0eSBmcm9tIGdldFJhZGlvVmFsdWU6JywgcmFkaW9baV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJhZGlvW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2NoYW5nZSBzYXZlIGljb24gYmFjayB0byBwZW5jaWxcbiAgICAgICAgICAgIC8vIHRhc2tFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltYWdlcy9lZGl0MjQucG5nJyk7XG4gICAgICAgICAgICB0YXNrRWRpdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0MjQpO1xuXG4gICAgICAgICAgICAvL3JlbW92ZSBlZGl0LW1vZGUgY2xhc3NcbiAgICAgICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdC1tb2RlJyk7XG5cbiAgICAgICAgICAgIC8vcmVtb3ZlIHBhZGRpbmcgY2xhc3MgdG8gZGF0ZVxuICAgICAgICAgICAgZGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdkYXRlLXBhZGRpbmcnKTtcblxuICAgICAgICAgICAgLy9zZXQgY29udGVudC1lZGl0YWJsZSB0byBmYWxzZVxuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIHRhc2tkZXNjLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIC8vbW92ZSBzZWxlY3RlZCBwcmlvcml0eSBidWJibGUgYmFjayB0byBzdW1tYXJ5XG4gICAgICAgICAgICBsZXQgdGFza1ByaW9yaXR5V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICdkaXYudGFza0VkaXRQcmlvcml0eScsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvL3JlbW92ZSBvbGQgY2xhc3MgJiBhZGQgdXBkYXRlZCBjbGFzc1xuICAgICAgICAgICAgcHJpb3JpdHlzcGFuLmNsYXNzTGlzdC5yZW1vdmUoYCR7aXRlbS5wcmlvcml0eX1Qcmlvcml0eWApO1xuICAgICAgICAgICAgcHJpb3JpdHlzcGFuLmNsYXNzTGlzdC5hZGQoYCR7dXBkYXRlZFRhc2tEYXRhLnByaW9yaXR5fVByaW9yaXR5YCk7XG4gICAgICAgICAgICBwcmlvcml0eXNwYW4udGV4dENvbnRlbnQgPSB1cGRhdGVkVGFza0RhdGEucHJpb3JpdHk7XG5cbiAgICAgICAgICAgIC8vIGFkZCBwcmlvcml0eSBzcGFuIGJhY2sgdG8gc3VtbWFyeVxuICAgICAgICAgICAgc3VtbWFyeS5pbnNlcnRCZWZvcmUocHJpb3JpdHlzcGFuLCBhcnJvdyk7XG5cbiAgICAgICAgICAgIC8vcmVtb3ZlIHByaW9yaXR5IHNlbGVjdG9yXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHlXcmFwcGVyLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgJ3ByaW9yaXR5IGluIGRpc3BsYXlQcm9qZWN0OiAnLFxuICAgICAgICAgICAgICB1cGRhdGVkVGFza0RhdGEucHJpb3JpdHksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvL2lmIHNhdmUgY2xpY2tlZCwgY2FsbCB3aXRoIG5ldyB2YWx1ZXNcbiAgICAgICAgICAgIGl0ZW0uZWRpdFRhc2sodXBkYXRlZFRhc2tEYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pOyAvL3Rhc2tmb290ZXIgZXZlbnQgbGlzdGVuZXIgY2xvc2VcblxuICAgICAgbGV0IGRhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZGF0ZVdyYXBwZXIudGV4dENvbnRlbnQgPSBgIER1ZSBEYXRlOmA7XG4gICAgICBkYXRlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2stZHVlZGF0ZScpO1xuXG4gICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICAgIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICB0YXNrRm9vdGVyLmFwcGVuZENoaWxkKGRhdGVXcmFwcGVyKTtcblxuICAgICAgbGV0IHRhc2tEZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgLy8gICB0YXNrRGVsSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltYWdlcy9iaW4yNC5wbmcnKTtcbiAgICAgIHRhc2tEZWxJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYmluMjQpO1xuICAgICAgdGFza0Zvb3Rlci5hcHBlbmRDaGlsZCh0YXNrRGVsSWNvbik7XG5cbiAgICAgIGxldCB0YXNrRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHRhc2tFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2stZWRpdGJ0bicpO1xuICAgICAgdGFza0VkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvaW1hZ2VzL2VkaXQyNC5wbmcnKTtcbiAgICAgIHRhc2tFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXQyNCk7XG5cbiAgICAgIHRhc2tGb290ZXIuYXBwZW5kQ2hpbGQodGFza0VkaXRJY29uKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0LnNlY3Rpb24uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG5cbiAgICAgIGZ1bmN0aW9uIGNoZWNrYm94SGFuZGxlcih1cGRhdGVkVGFza0RhdGEpIHtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICB1cGRhdGVkVGFza0RhdGEuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgaXRlbS5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVkVGFza0RhdGEpO1xuICAgICAgICAgIC8vdXBkYXRlIGFjdGl2ZSB0YXNrICNzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlZFRhc2tEYXRhLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICBpdGVtLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uZWRpdFRhc2sodXBkYXRlZFRhc2tEYXRhKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdENhcmRzKCk7XG4gICAgICB9XG4gICAgfSAvL2VuZCBvZiBjcmVhdGVUYXNrRWxlbWVudFxuICB9LFxufTtcbiIsIi8vdGhlIG1vZGVsIGhhbmRsZXMgYWxsIHRoZSBkYXRhIGFuZCBsb2dpY1xuLy8gaW1wb3J0IHsgYWRkUHJvamVjdFRvRHJvcGRvd24gfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IG5ld1Byb2plY3RGb3JtIH0gZnJvbSAnLi9uZXdQcm9qZWN0Rm9ybSc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCB9IGZyb20gJy4vZGlzcGxheVByb2plY3QnO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdENhcmRzIH0gZnJvbSAnLi92aWV3LmpzJztcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IHJlbmRlckluZm9DYXJkcyB9IGZyb20gJy4vdmlldy5qcyc7XG5cbmV4cG9ydCBsZXQgYWxsUHJvamVjdHNBcnIgPSBbXTsgLy9leHBvcnQgdG8gY29udHJvbGxlciBhbmQgdmlldyAodHJ5IHRvIHJlbW92ZSBmcm9tIHZpZXcpXG5cbmZ1bmN0aW9uIFByb2plY3RGYWN0b3J5KHByb2pOYW1lLCBwcm9qSUQpIHtcbiAgbGV0IHByb2plY3QgPSBPYmplY3QuY3JlYXRlKHByb2plY3RBY3Rpb25zKTtcbiAgcHJvamVjdC5uYW1lID0gcHJvak5hbWUgfHwgJ2RlZmF1bHQnO1xuICBwcm9qZWN0LmlkID0gcHJvaklEO1xuICBwcm9qZWN0LnRhc2tBcnIgPSBbXTtcbiAgcHJvamVjdC5pc0N1cnJlbnRQcm9qID0gZmFsc2U7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgbGV0IHByb2plY3RBY3Rpb25zID0ge1xuICBnZXRQcm9qZWN0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9LFxuICBnZXRQcm9qZWN0SUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH0sXG4gIGFkZFByb2pUb0FsbFByb2pBcnIoKSB7XG4gICAgYWxsUHJvamVjdHNBcnIucHVzaCh0aGlzKTtcbiAgICByZXR1cm4gYWxsUHJvamVjdHNBcnI7XG4gIH0sXG4gIGdldE5vT2ZUYXNrcygpIHtcbiAgICBsZXQgbm9PZlRhc2tzID0gdGhpcy50YXNrQXJyLmxlbmd0aDtcbiAgICByZXR1cm4gbm9PZlRhc2tzO1xuICB9LFxuICBnZXROb09mQWN0aXZlVGFza3MoKSB7XG4gICAgY29uc29sZS5sb2coJ2dldE5vT2ZBY3RpdmVUYXNrcygpIHJlYWNoZWQnKTtcblxuICAgIGxldCBub09mQWN0aXZlVGFza3MgPSB0aGlzLnRhc2tBcnIuZmlsdGVyKFxuICAgICAgKHRhc2spID0+IHRhc2suaXNDb21wbGV0ZSA9PSBmYWxzZSxcbiAgICApO1xuXG4gICAgcmV0dXJuIG5vT2ZBY3RpdmVUYXNrcy5sZW5ndGg7XG4gIH0sXG4gIGdldE5vT2ZDb21wbGV0ZWRUYXNrcygpIHtcbiAgICBjb25zb2xlLmxvZygnZ2V0Tm9PZkNvbXBsZXRlZFRhc2tzIHJlYWNoZWQnKTtcbiAgICBsZXQgbm9PZkNvbXBsZXRlZFRhc2tzID0gdGhpcy50YXNrQXJyLmZpbHRlcihcbiAgICAgICh0YXNrKSA9PiB0YXNrLmlzQ29tcGxldGUgPT0gdHJ1ZSxcbiAgICApO1xuICAgIHJldHVybiBub09mQ29tcGxldGVkVGFza3MubGVuZ3RoO1xuICB9LFxuICBhZGRUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICAvL1NBVkUgQUxMUFJPSkFSUiBUTyBMU1xuICAgIGNvbnNvbGUubG9nKCdhZGQgdG8gbG9jYWwgc3RvcmFnZSByZWFjaGVkJyk7XG4gICAgbGV0IGFsbFByb2pBcnJMUyA9IEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzQXJyKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvakFyckxTJywgYWxsUHJvakFyckxTKTtcbiAgICByZW5kZXJJbmZvQ2FyZHMoYWxsUHJvamVjdHNBcnIpO1xuICB9LFxuICBkZWxldGVUYXNrKHRhc2tpZCkge1xuICAgIC8vZmluZCB0YXNrIGlkIGluIHRoaXMudGFza0FyciB0aGF0ID09IHRhc2tpZCwgcmVtb3ZlIGZyb20gdGFza0FyclxuICAgIGxldCBpbmRleCA9IHRoaXMudGFza0Fyci5maW5kSW5kZXgoKHRhc2tvYmopID0+IHRhc2tvYmouaWQgPT0gdGFza2lkKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy50YXNrQXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLy9nZXQgcHJvamVjdCwgY2FsbCBhZGRUb0xvY2FsU3RvcmFnZSgpIHRvIHJlZnJlc2ggTFNcbiAgICB0aGlzLmFkZFRvTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAvL0NsZWFyIHByb2plY3Qgc2VjdGlvblxuICAgIGRpc3BsYXlQcm9qZWN0LmNsZWFyU2VjdGlvbigpO1xuICAgIC8vdXBkYXRlICMgb2YgdGFza3Mgb24gcHJvaiBjYXJkXG4gICAgdGhpcy5nZXROb09mVGFza3MoKTtcbiAgICAvL3JlcmVuZGVyIHByb2ogY2FyZHNcbiAgICByZW5kZXJQcm9qZWN0Q2FyZHMoKTtcbiAgICAvL3JlcmVuZGVyIHByb2ogc2VjdGlvblxuICAgIGRpc3BsYXlQcm9qZWN0LmRpc3BsYXkodGhpcyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdE1vZGVsKHByb2pOYW1lLCBwcm9qSUQpIHtcbiAgLy9leHBvcnQgdG8gY29udHJvbGxlclxuICBsZXQgbmV3cHJvak5hbWUgPSBQcm9qZWN0RmFjdG9yeShwcm9qTmFtZSwgcHJvaklEKTtcblxuICBuZXdwcm9qTmFtZS5hZGRQcm9qVG9BbGxQcm9qQXJyKCk7XG4gIG5ld3Byb2pOYW1lLmdldE5vT2ZUYXNrcygpO1xuICBuZXdwcm9qTmFtZS5hZGRUb0xvY2FsU3RvcmFnZSgpO1xuXG4gIHJldHVybiBuZXdwcm9qTmFtZTtcbn1cblxuZnVuY3Rpb24gVGFza0ZhY3RvcnkoXG4gIHRhc2tOYW1lLFxuICB0YXNrRGVzYyxcbiAgdGFza0R1ZSxcbiAgdGFza1ByaW9yaXR5LFxuICBwcm9qZWN0TmFtZSxcbiAgcHJvaklELFxuICB0YXNrSUQsXG4pIHtcbiAgbGV0IHRhc2sgPSBPYmplY3QuY3JlYXRlKHRhc2tBY3Rpb25zKTtcbiAgdGFzay5uYW1lID0gdGFza05hbWU7XG4gIHRhc2suaWQgPSB0YXNrSUQ7XG4gIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzYztcbiAgdGFzay5kdWVEYXRlID0gdGFza0R1ZSB8fCBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xuICB0YXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xuICB0YXNrLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgdGFzay5wcm9qTmFtZSA9IHByb2plY3ROYW1lO1xuICB0YXNrLnByb2pJRCA9IHByb2pJRDtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCBsZXQgdGFza0FjdGlvbnMgPSB7XG4gIGdldFRhc2tOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH0sXG4gIGdldFRhc2tJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfSxcbiAgZ2V0VGFza0Rlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9LFxuICBnZXRUYXNrRHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9LFxuICBnZXRUYXNrUHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH0sXG4gIGdldFRhc2tJc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH0sXG4gIGdldFRhc2tQcm9qZWN0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qTmFtZTtcbiAgfSxcbiAgZ2V0VGFza1Byb2plY3RJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qSUQ7XG4gIH0sXG4gIGFkZFRhc2soKSB7XG4gICAgLy90aGlzIG1ldGhvZCBmaW5kcyB0aGUgcHJvamVjdElEIGFuZCBwdXNoZXMgdGhlIHRhc2sgdG8gdGhlIHRhc2tBcnIgd2l0aGluIHRoZSBjb3JyZXNwb25kaW5nIFByb2plY3RcbiAgICAvL3Nob3VsZCB0aGlzIGJlIGEgbWV0aG9kIG9uIHRoZSBwcm9qZWN0P1xuXG4gICAgLy9nZXQgY29ycmVzcG9uZGluZyBwcm9qZWN0IGlkXG4gICAgbGV0IGN1cnJlbnRQcm9qID0gdGhpcy5nZXRUYXNrUHJvamVjdElEKCk7XG4gICAgdmFyIHJlc3VsdCA9IGFsbFByb2plY3RzQXJyLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IGN1cnJlbnRQcm9qKTtcblxuICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0LnRhc2tBcnIucHVzaCh0aGlzKTtcbiAgICB9XG4gICAgLy9yZS1jYWxjdWxhdGUgIyBvZiBhY3RpdmUgdGFza3MgJiByZXJlbmRlciBkaXNwbGF5XG4gICAgcmVzdWx0LmdldE5vT2ZUYXNrcygpO1xuICAgIHJlc3VsdC5nZXROb09mQWN0aXZlVGFza3MoKTtcbiAgICByZXN1bHQuZ2V0Tm9PZkNvbXBsZXRlZFRhc2tzKCk7XG4gICAgcmVzdWx0LmFkZFRvTG9jYWxTdG9yYWdlKCk7XG4gIH0sXG4gIGVkaXRUYXNrKHVwZGF0ZWRUYXNrRGF0YSkge1xuICAgIC8vIHVwZGF0ZSB2YWx1ZXNcbiAgICB0aGlzLm5hbWUgPSB1cGRhdGVkVGFza0RhdGEubmFtZSB8fCB0aGlzLm5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVwZGF0ZWRUYXNrRGF0YS5kZXNjIHx8IHRoaXMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmlvcml0eSA9IHVwZGF0ZWRUYXNrRGF0YS5wcmlvcml0eSB8fCB0aGlzLnByaW9yaXR5O1xuICAgIHRoaXMuZHVlRGF0ZSA9IHVwZGF0ZWRUYXNrRGF0YS5kYXRlIHx8IHRoaXMuZHVlRGF0ZTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSB1cGRhdGVkVGFza0RhdGEuaXNDb21wbGV0ZSB8fCB0aGlzLmlzQ29tcGxldGU7XG5cbiAgICBjb25zb2xlLmxvZygncHJpb3JpdHkgaW4gZWRpdFRhc2sgbWV0aG9kOiAnLCB0aGlzLnByaW9yaXR5KTtcbiAgICBjb25zb2xlLmxvZygndXBkYXRlZFRhc2tEYXRhLnByaW9yaXR5OiAnLCB1cGRhdGVkVGFza0RhdGEucHJpb3JpdHkpOyAvL3VuZGVmaW5lZFxuICAgIGxldCBjdXJyZW50UHJvaiA9IHRoaXMuZ2V0VGFza1Byb2plY3RJRCgpO1xuXG4gICAgbGV0IHJlc3VsdCA9IGFsbFByb2plY3RzQXJyLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IGN1cnJlbnRQcm9qKTtcblxuICAgIHJlc3VsdC5hZGRUb0xvY2FsU3RvcmFnZSgpO1xuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tNb2RlbChcbiAgdGFza05hbWUsXG4gIHRhc2tEZXNjLFxuICB0YXNrRHVlLFxuICB0YXNrUHJpb3JpdHksXG4gIHByb2pOYW1lLFxuICBwcm9qSUQsXG4gIHRhc2tJRCxcbikge1xuICAvL2NhbGwgdG8gdGFzayBGYWN0b3J5XG4gIGxldCBuZXdUYXNrID0gVGFza0ZhY3RvcnkoXG4gICAgdGFza05hbWUsXG4gICAgdGFza0Rlc2MsXG4gICAgdGFza0R1ZSxcbiAgICB0YXNrUHJpb3JpdHksXG4gICAgcHJvak5hbWUsXG4gICAgcHJvaklELFxuICAgIHRhc2tJRCxcbiAgKTtcblxuICBuZXdUYXNrLmFkZFRhc2soKTtcblxuICByZXR1cm4gbmV3VGFzaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVWYWx1ZShkYXRlKSB7XG4gIC8vZGF0ZSByZWMgYXMgc3RyaW5nXG4gIGRhdGUgPSBkYXRlLnNwbGl0KCctJyk7XG4gIGNvbnNvbGUubG9nKGRhdGUpOyAvL1snMjAyMycsICcxMCcsJzAzJ11cbiAgbGV0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQoXG4gICAgbmV3IERhdGUoZGF0ZVswXSwgZGF0ZVsxXSAtIDEsIGRhdGVbMl0pLFxuICAgICdlZWUgZG8gTU1NLCB5eXl5JyxcbiAgKTtcblxuICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhZGlvVmFsdWUoKSB7XG4gIGxldCByYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0YXNrUHJpb3JpdHknKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYWRpby5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyYWRpb1tpXS5jaGVja2VkKSB7XG4gICAgICBjb25zb2xlLmxvZygncHJpb3JpdHkgZnJvbSBnZXRSYWRpb1ZhbHVlOicsIHJhZGlvW2ldLnZhbHVlKTtcbiAgICAgIHJldHVybiByYWRpb1tpXS52YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vbW9kYWwgZGlzcGxheSAtIGNyZWF0ZSBOZXcgUHJvamVjdFxuLy9jb250YWlucyBjb2RlIHRvIGNyZWF0ZSBkb20gZWxlbWVudHMgYW5kIGFwcGVuZCB0aGVtIGluc2lkZSBtb2RhbFxuXG5sZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhJyk7XG5cbi8vY3JlYXRlIGVsZW1lbnRzXG5sZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuLy8gU2V0IGF0dHJpYnV0ZXNcbmxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2pOYW1lJyk7XG5sYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6JztcbmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5pbnB1dC5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pOYW1lJyk7XG5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcblxuZnVuY3Rpb24gbmV3UHJvamVjdEZvcm0oKSB7XG4gIC8vdG9nZ2xlIGRpc3BsYXlcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Nob3dQcm9qTW9kdWxlJyk7XG4gIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93VGFza01vZHVsZScpO1xuXG4gIC8vYXBwZW5kIGVsZW1lbnRzIHRvIGRpdlxuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xufVxuXG5leHBvcnQgeyBuZXdQcm9qZWN0Rm9ybSB9OyAvL3RvIHZpZXdcbiIsIi8vbW9kYWwgZGlzcGxheSAtIGNyZWF0ZSBOZXcgVGFza1xuLy9jb250YWlucyBjb2RlIHRvIGNyZWF0ZSBkb20gZWxlbWVudHMgYW5kIGFwcGVuZCB0aGVtIGluc2lkZSBBZGQgTmV3Li4uIG1vZGFsXG5cbmltcG9ydCB7IGFsbFByb2plY3RzQXJyIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEnKTtcblxuLy9jcmVhdGUgZWxlbWVudHNcbmxldCBwcm9qRHJvcGRvd25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sZXQgcHJvakRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbmxldCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbmxldCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sZXQgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG5sZXQgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sZXQgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbmxldCB0YXNrUHJpb3JpdHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZXQgdGFza1ByaW9yaXR5SW5wdXRfbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmxldCB0YXNrUHJpb3JpdHlJbnB1dF9tZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xubGV0IHRhc2tQcmlvcml0eUlucHV0X2hpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4vLyBTZXQgYXR0cmlidXRlc1xucHJvakRyb3Bkb3duTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvakRyb3Bkb3duJyk7XG5wcm9qRHJvcGRvd25MYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiAnO1xucHJvakRyb3Bkb3duLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvakRyb3Bkb3duJyk7XG5wcm9qRHJvcGRvd24uc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2pEcm9wZG93bicpO1xuXG50YXNrTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza05hbWUnKTtcbnRhc2tMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIE5hbWU6JztcbnRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xudGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tOYW1lJyk7XG50YXNrSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrTmFtZScpO1xuXG50YXNrRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrRGVzYycpO1xudGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBEZXNjcmlwdGlvbjonO1xudGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbnRhc2tEZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjJyk7XG50YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tEZXNjJyk7XG5cbnRhc2tEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza0R1ZURhdGUnKTtcbnRhc2tEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBEdWUgRGF0ZTonO1xudGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xudGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tEdWVEYXRlJyk7XG5cbnRhc2tQcmlvcml0eVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFza1ByaW9yaXR5X3JhZGlvJyk7XG50YXNrUHJpb3JpdHlJbnB1dF9sb3cuc2V0QXR0cmlidXRlKCdsYWJlbCcsICdMb3cnKTtcbnRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbnRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQcmlvcml0eV9sb3cnKTtcbnRhc2tQcmlvcml0eUlucHV0X2xvdy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza1ByaW9yaXR5Jyk7XG50YXNrUHJpb3JpdHlJbnB1dF9sb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcblxudGFza1ByaW9yaXR5SW5wdXRfbWVkLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCAnTWVkaXVtJyk7XG50YXNrUHJpb3JpdHlJbnB1dF9tZWQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG50YXNrUHJpb3JpdHlJbnB1dF9tZWQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrUHJpb3JpdHlfbWVkJyk7XG50YXNrUHJpb3JpdHlJbnB1dF9tZWQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tQcmlvcml0eScpO1xudGFza1ByaW9yaXR5SW5wdXRfbWVkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkJyk7XG5cbnRhc2tQcmlvcml0eUlucHV0X2hpZ2guc2V0QXR0cmlidXRlKCdsYWJlbCcsICdIaWdoJyk7XG50YXNrUHJpb3JpdHlJbnB1dF9oaWdoLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xudGFza1ByaW9yaXR5SW5wdXRfaGlnaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQcmlvcml0eV9oaWdoJyk7XG50YXNrUHJpb3JpdHlJbnB1dF9oaWdoLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrUHJpb3JpdHknKTtcbnRhc2tQcmlvcml0eUlucHV0X2hpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG5cbnRhc2tQcmlvcml0eVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRfbG93KTtcbnRhc2tQcmlvcml0eVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRfbWVkKTtcbnRhc2tQcmlvcml0eVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRfaGlnaCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZURyb3Bkb3duKGFsbFByb2plY3RzQXJyKSB7XG4gIC8vcmVtb3ZlIGFsbCB2YWx1ZXMgYW5kIHJlcmVuZGVyXG4gIGNsZWFyRHJvcGRvd25PcHRpb25zKCk7XG5cbiAgLy9nZXQgdmFsdWVzIGZyb20gcHJvaiBhcnJheSBhbmQgY3JlYXRlIG9wdGlvbiB0YWcgZm9yIGVhY2hcbiAgaWYgKGFsbFByb2plY3RzQXJyLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhbGxQcm9qZWN0c0Fyci5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHByb2pEcm9wZG93bi5hcHBlbmRDaGlsZChjcmVhdGVEcm9wZG93bk9wdGlvbnMoYWxsUHJvamVjdHNBcnJbaV0pKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEcm9wZG93bk9wdGlvbnMoKSB7XG4gIC8vaWYgZGl2IGhhcyBjaGlsZHJlbiwgcmVtb3ZlIGNoaWxkcmVuXG5cbiAgaWYgKHByb2pEcm9wZG93bi5oYXNDaGlsZE5vZGVzKSB7XG4gICAgd2hpbGUgKHByb2pEcm9wZG93bi5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qRHJvcGRvd24ucmVtb3ZlQ2hpbGQocHJvakRyb3Bkb3duLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bk9wdGlvbnMocHJvamVjdCkge1xuICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJvamVjdC5uYW1lKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0aWQnLCBwcm9qZWN0LmlkKTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICByZXR1cm4gb3B0aW9uO1xufVxuXG5mdW5jdGlvbiBuZXdUYXNrRm9ybSgpIHtcbiAgLy90b2dnbGUgZGlzcGxheVxuICBkaXYuY2xhc3NMaXN0LmFkZCgnc2hvd1Rhc2tNb2R1bGUnKTtcbiAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dQcm9qTW9kdWxlJyk7XG5cbiAgLy9jbGVhciBlbGVtZW50c1xuICB0YXNrSW5wdXQudmFsdWUgPSAnJztcblxuICBwb3B1bGF0ZURyb3Bkb3duKGFsbFByb2plY3RzQXJyKTtcbiAgZGl2LmFwcGVuZENoaWxkKHByb2pEcm9wZG93bkxhYmVsKTtcbiAgZGl2LmFwcGVuZENoaWxkKHByb2pEcm9wZG93bik7XG4gIGRpdi5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcbiAgZGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkxhYmVsKTtcbiAgZGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgZGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlTGFiZWwpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVJbnB1dCk7XG4gIGRpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlXcmFwcGVyKTtcbn1cblxuZXhwb3J0IHsgbmV3VGFza0Zvcm0gfTtcbiIsIi8vdGhlIHZpZXcgaGFuZGxlcyBob3cgdGhlIFVJIGlzIGRpc3BsYXllZC4gT25seSB0YWxrcyB0byBjb250cm9sbGVyLlxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdUYXNrIH0gZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IG5ld1Byb2plY3RGb3JtIH0gZnJvbSAnLi9uZXdQcm9qZWN0Rm9ybS5qcyc7XG5pbXBvcnQgeyBuZXdUYXNrRm9ybSB9IGZyb20gJy4vbmV3VGFza0Zvcm0uanMnO1xuaW1wb3J0IHsgYWxsUHJvamVjdHNBcnIgfSBmcm9tICcuL21vZGVsLmpzJzsgLy9tYXliZSBtb3ZlXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCB9IGZyb20gJy4vZGlzcGxheVByb2plY3QuanMnO1xuaW1wb3J0IHsgcG9wdWxhdGVEcm9wZG93biB9IGZyb20gJy4vbmV3VGFza0Zvcm0uanMnO1xuaW1wb3J0IHsgcHJvamVjdEFjdGlvbnMgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB7IHRhc2tBY3Rpb25zIH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQgeyBwdWJTdWIgfSBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZVZhbHVlIH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQgeyBnZXRSYWRpb1ZhbHVlIH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5cbi8vZXhwb3J0IGZ1bmN0aW9uIHRoaXNpc3RoZXZpZXcoKXtcbmxldCBkb21DYWNoZWRFbGVtZW50cyA9IHtcbiAgY29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyksXG4gIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLFxuICBob21lQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWhvbWUnKSxcbiAgYWRkQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWFkZCcpLFxuICB2aWV3QWxsUHJvamVjdHNCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tYWxscHJvaicpLFxuICB0YXNrYm94OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2JveCcpLFxuICBhY3RpdmVJbmZvSXRlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8taXRlbS1hY3RpdmUnKSxcbiAgY29tcGxldGVkSW5mb0l0ZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWl0ZW0tY29tcGxldGVkJyksXG59O1xuXG4vL2FkZCBldmVudCBkZWxlZ2F0aW9uIGZvciBob21lLCBhZGQgbmV3LCB2aWV3IGFsbCBhbmQgZ2l0dWIvL1xuZG9tQ2FjaGVkRWxlbWVudHMubmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gbmF2Q2xpY2tIYW5kbGVyKGUpIHtcbiAgaWYgKGUudGFyZ2V0ID09IGRvbUNhY2hlZEVsZW1lbnRzLmhvbWVCdG4pIHtcbiAgICBkaXNwbGF5UHJvamVjdC5jbGVhclNlY3Rpb24oKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldCA9PSBkb21DYWNoZWRFbGVtZW50cy5hZGRCdG4pIHtcbiAgICBvcGVuTW9kYWwoKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldCA9PSBkb21DYWNoZWRFbGVtZW50cy52aWV3QWxsUHJvamVjdHNCdG4pIHtcbiAgICByZW5kZXJQcm9qZWN0Q2FyZHMoKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcbiAgLy9ncmVldGluZ1xuICBsZXQgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcbiAgdG9kYXkudGV4dENvbnRlbnQgPSBgIGAgKyBmb3JtYXQobmV3IERhdGUoKSwgJ2VlZWUnKTtcblxuICAvL2NoZWNrIGlmIExTIGNvbnRhaW5zIGFueXRoaW5nXG4gIGxldCBhbGxQcm9qQXJyTFM7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvakFyckxTJykpIHtcbiAgICBhbGxQcm9qQXJyTFMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qQXJyTFMnKSk7XG4gIH0gZWxzZSB7XG4gICAgYWxsUHJvakFyckxTID0gW107XG4gICAgY3JlYXRlTmV3UHJvamVjdCgnZGVmYXVsdCcpO1xuICB9XG5cbiAgLy9sb29wIG92ZXIgYWxsUHJvakFyckxTIGFuZCBwdXNoIGVhY2ggb2JqIHRvIGFsbFByb2plY3RzQXJyLFxuICBhbGxQcm9qQXJyTFMuZm9yRWFjaCgob2JqKSA9PiBhbGxQcm9qZWN0c0Fyci5wdXNoKG9iaikpO1xuXG4gIC8vIGxvb3Agb3ZlciBhbGxQcm9qZWN0c0FyciBhbmQgc2V0IHByb3RvdHlwZXMgdG8gYmUgYWJsZSB0byB1c2UgbWV0aG9kc1xuICBhbGxQcm9qZWN0c0Fyci5mb3JFYWNoKChvYmopID0+IE9iamVjdC5zZXRQcm90b3R5cGVPZihvYmosIHByb2plY3RBY3Rpb25zKSk7XG5cbiAgLy9zZXQgcHJvdG9zIG9uIHRhc2tzXG4gIC8vbG9vcCB0aHJvdWdoIHByb2ogYXJyICYgZG8gc29tZXRoaW5nIHRvIGVhY2ggcHJvaiBvYmpcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0c0Fycikge1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrQXJyKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGFzaywgdGFza0FjdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclByb2plY3RDYXJkcygpO1xuICByZW5kZXJJbmZvQ2FyZHMoYWxsUHJvamVjdHNBcnIpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0Q2FyZHMoKSB7XG4gIC8vMS4gY2xlYXJzIHByb2plY3QgZGlzcGxheSBhcmVhXG4gIHJlbW92ZUNoaWxkcmVuKGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3gpO1xuICAvLzIuIGxvb3BzIG92ZXIgYWxsIHByb2plY3RzIGFycmF5IChpZiBhcnIgbm90IGVtcHR5KSAmIGNyZWF0ZXMgcHJvamVjdCBjYXJkIGZvciBlYWNoIHByb2plY3QgJiBhcHBlbmQgdG8gdGFza2JveFxuICBpZiAoYWxsUHJvamVjdHNBcnIubGVuZ3RoID4gMCkge1xuICAgIGFsbFByb2plY3RzQXJyLmZvckVhY2goY3JlYXRlUHJvamVjdEl0ZW1DYXJkKTtcbiAgfVxufVxuXG4vL2NhbGxiYWNrIGZyb20gZm9yZWFjaCBhYm92ZVxuLy9jYWxsZWQgb24gcGFnZSBsb2FkIGFuZCBhbHNvIHdoZW4gbmV3IHByb2plY3QgaXMgY3JlYXRlZFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEl0ZW1DYXJkKGl0ZW0sIGluZGV4KSB7XG4gIC8vIGNvbnNvbGUubG9nKCdjcmVhdGVQcm9qZWN0SXRlbUNhcmQgaXRlbTogJywgaXRlbSk7IC8vcHJvamVjdFxuICAvLyBjb25zb2xlLmxvZygnY3JlYXRlUHJvamVjdEl0ZW1DYXJkIGluZGV4OiAnLCBpbmRleCk7IC8vaW5kZXggaW4gYWxscHJvamFyclxuXG4gIC8vY3JlYXRlIGVsZW1lbnRzXG4gIGxldCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gcHJvakNsaWNrSGFuZGxlcihlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09IHByb2plY3RJdGVtRGVsSWNvbikge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2FsbFByb2pBcnI6ICcsIGFsbFByb2plY3RzQXJyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpdGVtOiAnLCBpdGVtKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbmRleDogJywgaW5kZXgpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7IC8vdGhlIGNhcmQgZGl2IHRoYXQgaGFzIGJlZW4gY2xpY2tlZCBvblxuXG4gICAgICAvL3JlbW92ZSBwcm9qXG4gICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJdGVtLCBhbGxQcm9qZWN0c0FycltpbmRleF0pOyAvL2luIHZpZXcuIG1pZ2h0IG5lZWQgdG8gbW92ZSB0byBwcm9qLnByb3RvdHlwZVxuICAgIH0gZWxzZSB7XG4gICAgICAvL2NsZWFyIHNlY3Rpb25cbiAgICAgIGRpc3BsYXlQcm9qZWN0LmNsZWFyU2VjdGlvbigpO1xuICAgICAgLy90b2dnbGUgY3VycmVudFByb2ogYm9vbGVhbiBpbiBwcm9qZWN0XG4gICAgICBhbGxQcm9qZWN0c0FycltpbmRleF0uaXNDdXJyZW50UHJvaiA9IHRydWU7XG5cbiAgICAgIC8vZGlzcGxheSBwcm9qZWN0IGluIHdoaXRlIHNlY3Rpb25cbiAgICAgIGRpc3BsYXlQcm9qZWN0LmRpc3BsYXkoYWxsUHJvamVjdHNBcnJbaW5kZXhdKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIiwgXCJodnItZ3Jvdy1zaGFkb3dcIik7XG4gIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuXG4gIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c0FycltpbmRleF0ubmFtZTtcbiAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICBsZXQgcHJvamVjdFRhc2tObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvamVjdFRhc2tOby5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0tdGFza25vJyk7XG5cbiAgbGV0IHByb2plY3RBY3RpdmVUYXNrTm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2plY3RBY3RpdmVUYXNrTm8uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtLXRhc2tubycpO1xuXG4gIGxldCBwcm9qZWN0Q29tcGxldGVkVGFza05vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qZWN0Q29tcGxldGVkVGFza05vLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbS10YXNrbm8nKTtcblxuICBsZXQgbm9PZlRhc2tzID0gaXRlbS5nZXROb09mVGFza3MoKTtcblxuICBpZiAobm9PZlRhc2tzID09PSAxKSB7XG4gICAgcHJvamVjdFRhc2tOby50ZXh0Q29udGVudCA9IGAke25vT2ZUYXNrc30gdGFza2A7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdFRhc2tOby50ZXh0Q29udGVudCA9IGAke25vT2ZUYXNrc30gdGFza3NgO1xuICB9XG5cbiAgbGV0IG5vT2ZBY3RpdmVUYXNrcyA9IGl0ZW0uZ2V0Tm9PZkFjdGl2ZVRhc2tzKCk7XG4gIGlmIChub09mQWN0aXZlVGFza3MgPT09IDEpIHtcbiAgICBwcm9qZWN0QWN0aXZlVGFza05vLnRleHRDb250ZW50ID0gYCR7bm9PZkFjdGl2ZVRhc2tzfSBhY3RpdmUgdGFza2A7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdEFjdGl2ZVRhc2tOby50ZXh0Q29udGVudCA9IGAke25vT2ZBY3RpdmVUYXNrc30gYWN0aXZlIHRhc2tzYDtcbiAgfVxuXG4gIGxldCBub09mQ29tcGxldGVkVGFza3MgPSBpdGVtLmdldE5vT2ZDb21wbGV0ZWRUYXNrcygpO1xuICBpZiAobm9PZkNvbXBsZXRlZFRhc2tzID09PSAxKSB7XG4gICAgcHJvamVjdENvbXBsZXRlZFRhc2tOby50ZXh0Q29udGVudCA9IGAke25vT2ZDb21wbGV0ZWRUYXNrc30gY29tcGxldGVkIHRhc2tgO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RDb21wbGV0ZWRUYXNrTm8udGV4dENvbnRlbnQgPSBgJHtub09mQ29tcGxldGVkVGFza3N9IGNvbXBsZXRlZCB0YXNrc2A7XG4gIH1cblxuICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0VGFza05vKTtcbiAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdEFjdGl2ZVRhc2tObyk7XG4gIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RDb21wbGV0ZWRUYXNrTm8pO1xuXG4gIGxldCBwcm9qZWN0SXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdEl0ZW1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbS13cmFwcGVyJyk7XG4gIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtV3JhcHBlcik7XG5cbiAgbGV0IHByb2plY3RJdGVtRGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RJdGVtRGVsQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbS1kZWxidG4nKTtcblxuICBsZXQgcHJvamVjdEl0ZW1EZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHByb2plY3RJdGVtRGVsSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltYWdlcy9iaW4yNC5wbmcnKTtcbiAgcHJvamVjdEl0ZW1EZWxJY29uLmNsYXNzTGlzdC5hZGQoJ2h2ci13b2JibGUtdG9wJyk7XG4gIHByb2plY3RJdGVtRGVsQnRuLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRGVsSWNvbik7XG5cbiAgcHJvamVjdEl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRGVsQnRuKTtcblxuICAvLzMuIGFwcGVuZCBlYWNoIHByb2plY3QgY2FyZHMgdG8gIGRpc3BsYXkgYXJlYVxuICBkb21DYWNoZWRFbGVtZW50cy50YXNrYm94LmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SXRlbSwgcHJvak9iaikge1xuICAvL3JlbW92ZSBwcm9qZWN0IGNhcmQgZnJvbSBBbGwgUHJvamVjdHMgYXJlYVxuXG4gIC8vUFJPSkVDVElURU0gSVMgVEhFIERJVlxuICAvL1BST0pFQ1RPQkogSVMgVEhFIE9CSlxuXG4gIC8vcmVtb3ZlcyBjYXJkXG4gIGRvbUNhY2hlZEVsZW1lbnRzLnRhc2tib3gucmVtb3ZlQ2hpbGQocHJvamVjdEl0ZW0pO1xuXG4gIC8vZmluZCBpbmRleCBvZiBwcm9qT2JqIGluIGFyclxuICBsZXQgaW5kZXhPZlByb2pPYmogPSBhbGxQcm9qZWN0c0Fyci5maW5kSW5kZXgoKG9iamVjdCkgPT4gb2JqZWN0ID09PSBwcm9qT2JqKTtcblxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gYWxsUHJvamVjdHNBcnJcbiAgYWxsUHJvamVjdHNBcnIuc3BsaWNlKGluZGV4T2ZQcm9qT2JqLCAxKTtcblxuICAvL3JlLXNlbmQgYXJyIHRvIGxvY2Fsc3RvcmFnZSB0byBiZSB1cCB0byBkYXRlXG4gIHByb2pPYmouYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gd2hpdGUgc2VjdGlvbiBpZiBjdXJyZW50IHByb2pcbiAgaWYgKChwcm9qT2JqLmlzQ3VycmVudFByb2ogPSB0cnVlKSkge1xuICAgIGRpc3BsYXlQcm9qZWN0LmNsZWFyU2VjdGlvbigpO1xuICAgIHByb2pPYmouaXNDdXJyZW50UHJvaiA9IGZhbHNlO1xuICB9XG5cbiAgLy9yZW1vdmUgcHJvamVjdCBuYW1lIGZyb20gZHJvcGRvd24gaW4gbW9kYWxcbiAgcG9wdWxhdGVEcm9wZG93bihhbGxQcm9qZWN0c0Fycik7XG4gIC8vcmVyZW5kZXIgZGlzcGxheVxuICByZW5kZXJQcm9qZWN0Q2FyZHMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckluZm9DYXJkcyhhbGxQcm9qQXJyKSB7XG4gIC8vdGhpcyBmdW5jdGlvbiB3aWxsIGRpc3BsYXkgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIEFDVElWRSwgQ09NUExFVEVEIGFuZCBPVkVSRFVFIHRhc2tzXG4gIC8vdGhpcyBmdW5jdGlvbiB3aWxsIG5lZWQgdG8gYmUgY2FsbGVkIHVwb24gc3RhcnRpbmcgJiBhbHNvIHdoZW5ldmVyIGEgbmV3IHRhc2sgaXMgY3JlYXRlZCwgZGVsZXRlZCwgZGF0ZSBjaGFuZ2VkIG9yIG1hcmtlZCBjb21wbGV0ZVxuXG4gIC8vQUNUSVZFXG4gIGxldCByZXN1bHQgPSBhbGxQcm9qQXJyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBvYmopIHtcbiAgICByZXR1cm4gYWNjICsgb2JqLmdldE5vT2ZBY3RpdmVUYXNrcygpO1xuICB9LCAwKTtcblxuICBsZXQgYWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBhY3RpdmUudGV4dENvbnRlbnQgPSBgIEFjdGl2ZWA7XG4gIGRvbUNhY2hlZEVsZW1lbnRzLmFjdGl2ZUluZm9JdGVtLnRleHRDb250ZW50ID0gYCR7cmVzdWx0fWA7XG4gIGRvbUNhY2hlZEVsZW1lbnRzLmFjdGl2ZUluZm9JdGVtLmFwcGVuZENoaWxkKGFjdGl2ZSk7XG5cbiAgLy8gQ09NUExFVEVEIFRBU0tTXG4gIC8vbG9vcCBvdmVyIGFsbCBwcm9qIGFyciwgZm9yIGVhY2ggcHJvaiwgbG9vcCBvdmVyIHRhc2tzQXJyIGFuZCBjb3VudCBob3cgbWFueSBhcmUgaXNDb21wbGV0ZSA9IHRydWUsIGFkZCB0b3RhbCBudW1iZXIgb2YgdGFza3NcbiAgLy8gdXBkYXRlIGNhcmRcblxuICBsZXQgY29tcGxldGVkID0gYWxsUHJvakFyci5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgb2JqKSB7XG4gICAgcmV0dXJuIGFjYyArIG9iai5nZXROb09mQ29tcGxldGVkVGFza3MoKTtcbiAgfSwgMCk7XG5cbiAgbGV0IGNvbXBsZXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29tcGxldGVTcGFuLnRleHRDb250ZW50ID0gYCBDb21wbGV0ZWA7XG4gIGRvbUNhY2hlZEVsZW1lbnRzLmNvbXBsZXRlZEluZm9JdGVtLnRleHRDb250ZW50ID0gYCR7Y29tcGxldGVkfWA7XG4gIGRvbUNhY2hlZEVsZW1lbnRzLmNvbXBsZXRlZEluZm9JdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRlU3Bhbik7XG5cbiAgLy9PVkVSRFVFIFRBU0tTXG4gIC8vbG9vcCBvdmVyIGFsbCBwcm9qIGFyciwgZm9yIGVhY2ggcHJvaiwgbG9vcCBvdmVyIHRhc2tzQXJyIGFuZCBjb3VudCBob3cgbWFueSBoYXZlIGR1ZSBkYXRlIGluIHRoZSBwYXN0KGxlc3MgdGhhbiBjdXJyZW50IGRhdGUpLCBhZGQgdG90YWwgbnVtYmVyIG9mIHRhc2tzXG4gIC8vIHVwZGF0ZSBjYXJkXG59XG5cbi8vIC0tLS0tLS0tLSBDUkVBVEUgTkVXIC0gTU9EQUwgLS0tLS0tLS0tLS0tLS0tLVxubGV0IG1vZGFsRWxlbWVudHMgPSB7XG4gIHN1Ym1pdEJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgY2xlYXJCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jbGVhci1idG4nKSxcbiAgbW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLFxuICBvdmVybGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLFxuICBjbG9zZU1vZGFsQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsb3NlJyksXG59O1xuXG4vL29wZW5zIG1vZGFsIHRvIGNyZWF0ZSBuZXcgcHJvamVjdC90YXNrXG5jb25zdCBvcGVuTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsRWxlbWVudHMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG1vZGFsRWxlbWVudHMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgY2xlYXJJbnB1dFZhbHVlcygpO1xufTtcbi8vYWRkIGV2ZW50IGxpc3RlbmVyIHRvIG9wZW4gbW9kYWwgb24gY2xpY2tcbi8vZG9tQ2FjaGVkRWxlbWVudHMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xuXG4vL2Nsb3NlcyBtb2RhbFxuY29uc3QgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kYWxFbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgbW9kYWxFbGVtZW50cy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufTtcbi8vYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIG1vZGFsIG9uIGNsaWNrXG5tb2RhbEVsZW1lbnRzLmNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbm1vZGFsRWxlbWVudHMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xubW9kYWxFbGVtZW50cy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcblxuLy8gUFVCU1VCIC0gbm90IHdvcmtpbmdcblxuLy8gbW9kYWxFbGVtZW50cy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgcHViU3ViLnB1Ymxpc2goJ2V2ZW50Om5hbWUtY2hhbmdlZCcsIHtuYW1lOiBpbnB1dC52YWx1ZX0pO1xuLy8gICB9KTtcblxuLy8gICBwdWJTdWIuc3Vic2NyaWJlKCdldmVudDpuYW1lLWNoYW5nZWQnLCBkYXRhID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhgWW91ciBuYW1lIGlzOiAke2RhdGEubmFtZX1gKTtcbi8vICAgfSk7XG5cbmxldCBwcm9qTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2pOYW1lJyk7XG5cbmxldCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvakRyb3Bkb3duJyk7XG5sZXQgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTmFtZScpO1xubGV0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEZXNjJyk7XG5sZXQgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRHVlRGF0ZScpO1xubGV0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQcmlvcml0eV9yYWRpbycpO1xuXG5sZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNyZWF0ZS1tb2RhbC1pbnB1dC1hcmVhJyk7XG5cbmxldCBjcmVhdGVOZXdFbGVtZW50cyA9IHtcbiAgdG9nZ2xlSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3RvZ2dsZUlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLFxuXG4gIHRvZ2dsZU1vZGFsRGlzcGxheTogZnVuY3Rpb24gKCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY3JlYXRlLW1vZGFsLWlucHV0LWFyZWEnKTtcblxuICAgIGlmIChjcmVhdGVOZXdFbGVtZW50cy50b2dnbGVJbnB1dC5jaGVja2VkKSB7XG4gICAgICAvL0FkZCBOZXcgVGFzayBzaG93cyAodG9nZ2xlIGNoZWNrZWQpXG4gICAgICBjbGVhcklucHV0VmFsdWVzKCk7XG4gICAgICByZW1vdmVDaGlsZHJlbihkaXYpO1xuICAgICAgbmV3VGFza0Zvcm0oKTsgLy9sb2FkIE5ldyBUYXNrIElucHV0c1xuICAgIH0gZWxzZSB7XG4gICAgICAvL0FkZCBOZXcgUHJvamVjdCBTaG93cyAodG9nZ2xlIG5vdCBjaGVja2VkKVxuICAgICAgY2xlYXJJbnB1dFZhbHVlcygpO1xuICAgICAgcmVtb3ZlQ2hpbGRyZW4oZGl2KTtcbiAgICAgIG5ld1Byb2plY3RGb3JtKCk7XG4gICAgfVxuICB9LFxufTtcblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4oZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuLy9wcm9qZWN0L3Rhc2sgdG9nZ2xlXG5jcmVhdGVOZXdFbGVtZW50cy50b2dnbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAnY2xpY2snLFxuICBjcmVhdGVOZXdFbGVtZW50cy50b2dnbGVNb2RhbERpc3BsYXksXG4pO1xuXG4vL1NVQk1JVCBCVVRUT05cbm1vZGFsRWxlbWVudHMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vdGhpcyBmdW5jdGlvbiBtYXkgbmVlZCB0byBiZSBtb3ZlZCB0byBjb250cm9sbGVyXG4gIC8vZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBpbnB1dHMsIHBhc3MgdG8gY29udHJvbGxlclxuICAvLyhjb250cm9sbGVyIHdpbGwgcGFzcyB0byBtb2RlbCwgdG8gZGlzcGxheSBvbiBzY3JlZW4gKVxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2dldCBsYXRlc3QgdmFsdWVzXG4gIHByb2pOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvak5hbWUnKTtcblxuICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucygnc2hvd1Rhc2tNb2R1bGUnKSkge1xuICAgIC8vZ2V0IHRhc2sgZGF0YVxuICAgIHNlbGVjdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qRHJvcGRvd24nKTtcbiAgICB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tOYW1lJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2MnKTtcbiAgICB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEdWVEYXRlJyk7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ByaW9yaXR5X3JhZGlvJyk7XG5cbiAgICAvL3NhdmUgdmFsdWVzXG4gICAgbGV0IHNlbGVjdGVkUHJvak5hbWUgPSBzZWxlY3RlZFByb2plY3QudmFsdWUgfHwgJ2RlZmF1bHQnO1xuICAgIGxldCBwcm9qSUQgPVxuICAgICAgc2VsZWN0ZWRQcm9qZWN0Lm9wdGlvbnNbc2VsZWN0ZWRQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQucHJvamVjdGlkO1xuICAgIGxldCB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgIC8vIGxldCB0YXNrRHVlRGF0ZSA9IHRhc2tEdWVEYXRlSW5wdXQudmFsdWU7XG5cbiAgICBsZXQgdGFza0R1ZURhdGUgPSBmb3JtYXREYXRlVmFsdWUodGFza0R1ZURhdGVJbnB1dC52YWx1ZSk7XG5cbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgLy9jcmVhdGUgdGFza1xuICAgIGxldCBjcmVhdGVkVGFzayA9IGNyZWF0ZU5ld1Rhc2soXG4gICAgICB0YXNrTmFtZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgdGFza1ByaW9yaXR5LFxuICAgICAgc2VsZWN0ZWRQcm9qTmFtZSxcbiAgICAgIHByb2pJRCxcbiAgICApOyAvL2luIGNvbnRyb2xsZXJcblxuICAgIC8vZmluZCBwcm9qZWN0IGluIEFsbFByb2pBcnJcbiAgICBsZXQgZm91bmRQcm9qID0gYWxsUHJvamVjdHNBcnIuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvaklEKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZm91bmRQcm9qOiAnLCBmb3VuZFByb2opO1xuXG4gICAgLy9DbGVhciBwcm9qZWN0IHNlY3Rpb25cbiAgICBkaXNwbGF5UHJvamVjdC5jbGVhclNlY3Rpb24oKTtcblxuICAgIC8vcmVyZW5kZXIgcHJvamVjdCBzZWN0aW9uIHdpdGggY3VycmVudCBwcm9qZWN0XG4gICAgZGlzcGxheVByb2plY3QuZGlzcGxheShmb3VuZFByb2opO1xuXG4gICAgLy9lbHNlIGlmIGRpdiBoYXMgY2xhc3Mgb2YgcHJvamVjdFxuICB9IGVsc2UgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3dQcm9qTW9kdWxlJykpIHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qTmFtZUlucHV0LnZhbHVlO1xuICAgIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpOyAvL2luIGNvbnRyb2xsZXJcbiAgICByZW5kZXJQcm9qZWN0Q2FyZHMoKTtcbiAgfVxuXG4gIHJlbmRlclByb2plY3RDYXJkcygpO1xufSk7XG5cbi8vQ0xFQVIgQlVUVE9OXG5tb2RhbEVsZW1lbnRzLmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJJbnB1dFZhbHVlcyk7XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXRWYWx1ZXMoKSB7XG4gIC8vZ2V0IGxhdGVzdCB2YWx1ZXNcbiAgY29uc29sZS5sb2coJ2NsZWFySW5wdXRWYWx1ZXMgY2FsbGVkJyk7XG4gIHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza05hbWUnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Rlc2MnKTtcbiAgcHJvak5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qTmFtZScpO1xuXG4gIGlmICh0YXNrTmFtZUlucHV0ICE9PSBudWxsICYmIHRhc2tEZXNjcmlwdGlvbklucHV0ICE9PSBudWxsKSB7XG4gICAgdGFza05hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJyc7XG4gIH0gZWxzZSBpZiAocHJvak5hbWVJbnB1dC52YWx1ZSAhPT0gbnVsbCkge1xuICAgIHByb2pOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbnRyb2xsZXIuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=