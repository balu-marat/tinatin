
(function () {
  "use strict";

  var click = document.getElementById('btn1');
  // var click2 = document.getElementById('btn2');

  click.addEventListener('click', function () {
    this.style.background = 'yellow';
    this.style.color = 'red';
  });


}());