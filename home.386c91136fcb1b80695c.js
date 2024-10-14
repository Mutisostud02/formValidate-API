"use strict";
(self["webpackChunkformvalidate"] = self["webpackChunkformvalidate"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   docContent: () => (/* binding */ docContent)
/* harmony export */ });
function docContent() {
  const imageHolder = document.createElement('div');
  imageHolder.classList.add('imageHolder');
  const label = document.createElement('label');
  const searchInput = document.createElement('input');
  searchInput.setAttribute('id', 'search');
  searchInput.setAttribute('placeHolder', 'search...');
  searchInput.setAttribute('style', 'cursor:pointer;');
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("height", "21");
  svg.setAttribute("viewBox", "0 -960 960 960");
  svg.setAttribute("width", "21");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z");
  const img = document.createElement('div');
  img.classList.add('image');
  img.setAttribute('style', 'display:flex;flex-wrap:wrap;gap:0.2vw;margin-top:1rem;');
  svg.appendChild(path);
  label.appendChild(searchInput);
  label.appendChild(svg);
  label.appendChild(img);
  imageHolder.appendChild(label);
  document.body.appendChild(imageHolder);
  return {
    img,
    searchInput,
    svg
  };
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS4zODZjOTExMzZmY2IxYjgwNjk1Yy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0EsVUFBVUEsQ0FBQSxFQUFHO0VBQ3pCLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2pERixXQUFXLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUN4QyxNQUFNQyxLQUFLLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUM3QyxNQUFNSSxXQUFXLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNuREksV0FBVyxDQUFDQyxZQUFZLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQztFQUN2Q0QsV0FBVyxDQUFDQyxZQUFZLENBQUMsYUFBYSxFQUFDLFdBQVcsQ0FBQztFQUNuREQsV0FBVyxDQUFDQyxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDO0VBQ3BELE1BQU1DLEdBQUcsR0FBR1AsUUFBUSxDQUFDUSxlQUFlLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDO0VBQ3pFRCxHQUFHLENBQUNELFlBQVksQ0FBQyxPQUFPLEVBQUUsNEJBQTRCLENBQUM7RUFDdkRDLEdBQUcsQ0FBQ0QsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7RUFDaENDLEdBQUcsQ0FBQ0QsWUFBWSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztFQUM3Q0MsR0FBRyxDQUFDRCxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztFQUUvQixNQUFNRyxJQUFJLEdBQUdULFFBQVEsQ0FBQ1EsZUFBZSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQztFQUMzRUMsSUFBSSxDQUFDSCxZQUFZLENBQUMsR0FBRyxFQUFFLDZQQUE2UCxDQUFDO0VBQ3JSLE1BQU1JLEdBQUcsR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pDUyxHQUFHLENBQUNSLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUMxQk8sR0FBRyxDQUFDSixZQUFZLENBQUMsT0FBTyxFQUFFLHdEQUF3RCxDQUFDO0VBQ25GQyxHQUFHLENBQUNJLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDO0VBQ3JCTCxLQUFLLENBQUNPLFdBQVcsQ0FBQ04sV0FBVyxDQUFDO0VBQzlCRCxLQUFLLENBQUNPLFdBQVcsQ0FBQ0osR0FBRyxDQUFDO0VBRXRCSCxLQUFLLENBQUNPLFdBQVcsQ0FBQ0QsR0FBRyxDQUFDO0VBQ3RCWCxXQUFXLENBQUNZLFdBQVcsQ0FBQ1AsS0FBSyxDQUFDO0VBQzlCSixRQUFRLENBQUNZLElBQUksQ0FBQ0QsV0FBVyxDQUFDWixXQUFXLENBQUM7RUFDdEMsT0FBTztJQUFDVyxHQUFHO0lBQUNMLFdBQVc7SUFBQ0U7RUFBRyxDQUFDO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRvY0NvbnRlbnQoKSB7XG4gICAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZUhvbGRlci5jbGFzc0xpc3QuYWRkKCdpbWFnZUhvbGRlcicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3NlYXJjaCcpO1xuICAgIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2VIb2xkZXInLCdzZWFyY2guLi4nKVxuICAgIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3Vyc29yOnBvaW50ZXI7Jyk7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjIxXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAtOTYwIDk2MCA5NjBcIik7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjFcIik7XG5cbiAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBcIk03ODQtMTIwIDUzMi0zNzJxLTMwIDI0LTY5IDM4dC04MyAxNHEtMTA5IDAtMTg0LjUtNzUuNVQxMjAtNTgwcTAtMTA5IDc1LjUtMTg0LjVUMzgwLTg0MHExMDkgMCAxODQuNSA3NS41VDY0MC01ODBxMCA0NC0xNCA4M3QtMzggNjlsMjUyIDI1Mi01NiA1NlpNMzgwLTQwMHE3NSAwIDEyNy41LTUyLjVUNTYwLTU4MHEwLTc1LTUyLjUtMTI3LjVUMzgwLTc2MHEtNzUgMC0xMjcuNSA1Mi41VDIwMC01ODBxMCA3NSA1Mi41IDEyNy41VDM4MC00MDBaXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWFnZScpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6MC4ydnc7bWFyZ2luLXRvcDoxcmVtOycpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBpbWFnZUhvbGRlci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltYWdlSG9sZGVyKTtcbiAgICByZXR1cm4ge2ltZyxzZWFyY2hJbnB1dCxzdmd9O1xuICAgIH1cblxuICAgICJdLCJuYW1lcyI6WyJkb2NDb250ZW50IiwiaW1hZ2VIb2xkZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsYWJlbCIsInNlYXJjaElucHV0Iiwic2V0QXR0cmlidXRlIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwicGF0aCIsImltZyIsImFwcGVuZENoaWxkIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=