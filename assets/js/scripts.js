/**
   * HIDE PRELOADER
    */
const $preloader = document.querySelector('#preloader')

if ($preloader){
  setTimeout(() => {
    $preloader.classList.add('active')

    /**
       * SCROLL ANIMATIONS
        */

    ScrollReveal().reveal('.home-section .image-column', { 
      delay: 400,
      distance: '80px',
      duration: 1000,
      origin: 'right',
      scale: 0.8
    });

    ScrollReveal().reveal('.home-section .section-title', { 
      delay: 400,
      distance: '50px',
      duration: 1000,
      origin: 'left',
    });

    ScrollReveal().reveal('.home-section .content-column p', { 
      delay: 400,
      distance: '50px',
      duration: 1200,
      origin: 'right',
    });

  }, 300)
}


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


/**
   * SCROLL ANIMATIONS
    */

// ScrollReveal().reveal('.home-section .image-column', { 
//   delay: 700,
//   distance: '80px',
//   duration: 1000,
//   origin: 'right',
//   scale: 0.8
// });

// ScrollReveal().reveal('.home-section .section-title', { 
//   delay: 700,
//   distance: '50px',
//   duration: 1000,
//   origin: 'left',
// });

// ScrollReveal().reveal('.home-section .content-column p', { 
//   delay: 700,
//   distance: '50px',
//   duration: 1200,
//   origin: 'right',
// });
