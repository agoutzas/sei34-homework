// // const cat = document.getElementsByTagName('img');
// // img.style.postiion = 'absolute';
//




const img = document.getElementsByTagName('img')[0];
  img.style.position = 'absolute';
  img.style.left = '0px';
  let catWalk = function() {
    let oldleft = parseInt(img.style.left);
    let newleft = oldleft + 1;
    img.style.left = newleft + 'px';


};
window.setInterval(catWalk, 50);
