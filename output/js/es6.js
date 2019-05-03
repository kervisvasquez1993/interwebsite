 

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
      interval: 3000,
      height:400,
      indicators : false
    });
    var elems2 =document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems2);
  });