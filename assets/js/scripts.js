/**
   * HIDE PRELOADER
    */
const $preloader = document.querySelector('#preloader')
let isPreloader = true
let animationDelay = 0

if ($preloader){
  setTimeout(() => {
    $preloader.classList.add('active')
  }, 300)
}


/**
       * SCROLL ANIMATIONS
        */

const headingSlideFromLeft = {
  delay: 500,
  useDelay: 'onload',
  distance: '50px',
  duration: 1900,
  origin: 'left',
}

ScrollReveal().reveal('[data-heading-slide-from-left]', headingSlideFromLeft);

const headingSlideFromRight = {
  delay: 500,
  useDelay: 'onload',
  distance: '50px',
  duration: 1900,
  origin: 'right',
}

ScrollReveal().reveal('[data-heading-slide-from-right]', headingSlideFromRight);

const textContentSlideFromBottom = {
  delay: 500,
  useDelay: 'onload',
  distance: '50px',
  duration: 2500,
  origin: 'bottom',
}

ScrollReveal().reveal('[data-text-content-slide-from-bottom]', textContentSlideFromBottom);

const imageSlideFromRight = {
  delay: 500,
  useDelay: 'onload',
  distance: '80px',
  duration: 1900,
  origin: 'right',
  scale: 0.8
}

ScrollReveal().reveal('[data-image-slide-from-right]', imageSlideFromRight);

const imageSlideFromLeft = {
  delay: 500,
  useDelay: 'onload',
  distance: '80px',
  duration: 1900,
  origin: 'left',
  scale: 0.8
}

ScrollReveal().reveal('[data-image-slide-from-left]', imageSlideFromLeft);


/**
   * SET SIDE SPACE
    */

function getSideSpace (){
  const sideSpace = Math.floor(document.body.clientWidth / 8);

  let $root = document.documentElement;
  $root.style.setProperty('--side-space-dynamic', sideSpace + 'px');

}

getSideSpace()

window.addEventListener('resize', function(event){
  getSideSpace()
});


/**
   * MOBILE MENU
    */

const offcanvasMenu = document.querySelector('[data-offcanvas-menu]'),
      offcanvasMenuToggler = document.querySelector('[data-offcanvas-toggler]')

if( offcanvasMenuToggler ){
  offcanvasMenu.classList.add('inactive')
  offcanvasMenuToggler.addEventListener('click', () =>{
    offcanvasMenu.classList.toggle('active')
    offcanvasMenu.classList.toggle('inactive')

    const header = document.querySelector('[data-header]')
    header.classList.toggle('active-offcanvas')
  })
}


/**
   * VIDEO POPUPS
    */

const $videoPopupsImagesElements = document.querySelectorAll('[data-video-popup-image]')

if ( $videoPopupsImagesElements.length ){
  $videoPopupsImagesElements.forEach(popupImage => {
    const videoSrc = popupImage.getAttribute('data-popup-video-src')
    const $openPopupButton = popupImage.querySelector('[data-video-popup-open]')

    const videoPopup = document.createElement('div')
    videoPopup.setAttribute('data-video-popup-wrapper', '')
    videoPopup.classList.add('video-popup-wrapper')
    const newVideoPopupHtml = `
        <div class="video-popup-container">
          <button class="video-popup-close" data-video-popup-close></button>
          <video controls loop>
            <source src="${videoSrc}" type="video/mp4" />
            Video doesn't work
          </video>
        </div>
    `
    videoPopup.innerHTML = newVideoPopupHtml

    $openPopupButton.addEventListener('click', () => {
      document.body.append(videoPopup)

      const $closePopupButton = document.querySelector('[data-video-popup-close]')
      $closePopupButton.addEventListener('click', () => {
        $closePopupButton.parentElement.parentElement.remove()
      })
      
      const $videoPopupWrapper = document.querySelector('[data-video-popup-wrapper]')
      $videoPopupWrapper.addEventListener('click', e => {
        if ( e.target.hasAttribute('data-video-popup-wrapper') ) {
          $videoPopupWrapper.remove()
        }
      })
    })
    
  })
}