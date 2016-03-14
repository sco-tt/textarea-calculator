/*jshint latedef: nofunc */
var app = (function(window, document, undefined){
  'use strict';
  
  // Values from form
  var storedArr = [];
  //Cache DOM
  var button = document.getElementById('submit');
  var output = document.getElementById('js-output');
  var input = document.getElementById('js-input');
  // Bind Events
  button.addEventListener('click', processInput, false);

  function processInput() {
    var lines = input.value;
    storedArr = lines.split('\n');
    compute();
  }

  function compute(numbers) {
    var arr = (numbers) ? numbers : storedArr;
     var total = 0;
     for (var i = 0, len = arr.length; i < len; i++) {
      total += Number(arr[i]);
    }
    var outVal = Math.round((total + 0.00001) * 100) / 100;
    return outVal;
  }
  
  function render(outVal) {
    output.innerHTML = compute();
  }

  return {
    compute: compute
  };

})(window, document, undefined);

