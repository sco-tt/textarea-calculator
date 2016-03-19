/*jshint latedef: nofunc */
(function(window, document, undefined){
  'use strict';
  var app = {
    init: function() {
      this.cacheDom();
      this.bind();
      //this.processInput();
    }, 

    cacheDom: function() {
      this.button = document.getElementById('submit');
      this.output = document.getElementById('js-output');
      this.input = document.getElementById('js-input');
    }, 

    bind: function() {
      this.button.addEventListener('click', this.processInput.bind(this), false);
    },

    processInput: function() {
      this.lines = this.input.value;
      this.storedArr = this.lines.split('\n');
      this.compute();
    }, 
    compute: function(numbers) {
     this.arr = (numbers) ? numbers : this.storedArr;
     this.total = 0;
     for (var i = 0, len = this.arr.length; i < len; i++) {
      this.total += Number(this.arr[i]);
    }
    this.outVal = Math.round((this.total + 0.00001) * 100) / 100;
    this.render();
  },

  render: function() {
    this.output.innerHTML = this.outVal;
  },

};
app.init();

})(window, document, undefined);