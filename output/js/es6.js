"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
    interval: 3000,
    indicators: false
  });
  var elems2 = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems2);
  var mb = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(mb);
  var elems3 = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems3);
});
var btn_pintar = document.getElementById('btn_pintar');
var kervis_pintar = document.getElementById('kervis-pintar');

if (btn_pintar) {
  var kervis = function kervis() {
    kervis_pintar.style.display = 'block';
  };

  btn_pintar.addEventListener('click', kervis);
}

