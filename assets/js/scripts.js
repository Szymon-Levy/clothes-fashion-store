function getSideSpace (){
  const sideSpace = Math.floor(document.body.clientWidth / 7);

  let root = document.documentElement;
  root.style.setProperty('--side-space-dynamic', sideSpace + 'px');

}

getSideSpace()

window.addEventListener('resize', function(event){
  getSideSpace()
});