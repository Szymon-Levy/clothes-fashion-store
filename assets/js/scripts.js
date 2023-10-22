/**
   * REMOVE ANIMATION FROM ELEMENT
    */

const removeAnimationFromElement = (el) =>{
  el.removeAttribute('style')
  el.removeAttribute('data-sr-id')
}

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
  scale: 0.8,
}

ScrollReveal().reveal('[data-image-slide-from-left]', imageSlideFromLeft);

const newsletterCallToActionAppear = {
  delay: 500,
  useDelay: 'onload',
  duration: 1500,
  scale: 0.8,
  rotate: {
    z: -20
  }
}

ScrollReveal().reveal('[data-newsletter-appear]', newsletterCallToActionAppear);


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
   * MOBILE MENU TOGGLE
    */

const offcanvasMenu = document.querySelector('[data-offcanvas-menu]'),
      offcanvasMenuOpen = document.querySelector('[data-offcanvas-open]'),
      offcanvasMenuClose = document.querySelector('[data-offcanvas-close]')

if( offcanvasMenuOpen ){

  const logoFromLeft = {
    delay: 200,
    duration: 700,
    scale: 0.3,
    rotate: {
      z: 180
    },
    easing: 'ease'
  }

  const navigationFromBottom = {
    delay: 400,
    duration: 900,
    distance: '200px',
    origin: 'bottom',
    easing: 'ease'
  }

  const imageFromRight = {
    delay: 600,
    duration: 900,
    distance: '200px',
    origin: 'right',
    easing: 'ease'
  }

  const closeFromTop = {
    delay: 800,
    duration: 900,
    distance: '200px',
    origin: 'top',
    easing: 'ease'
  }

  offcanvasMenu.classList.add('inactive')

  const header = document.querySelector('[data-header]')
  const offcanvasLogo = document.querySelector('.offcanvas-logo img')
  const offcanvasNav = document.querySelector('.offcanvas-navigation')
  const offcanvasImage = document.querySelector('.offvanvas-image')

  offcanvasMenuOpen.addEventListener('click', () =>{
    offcanvasMenu.classList.toggle('active')
    offcanvasMenu.classList.toggle('inactive')
    header.classList.toggle('active-offcanvas')
    document.body.style.overflow = 'hidden'
    ScrollReveal().reveal(offcanvasLogo, logoFromLeft)
    ScrollReveal().reveal(offcanvasNav, navigationFromBottom)
    ScrollReveal().reveal(offcanvasImage, imageFromRight)
    ScrollReveal().reveal(offcanvasMenuClose, closeFromTop)
  })

  offcanvasMenuClose.addEventListener('click', () =>{
    offcanvasMenu.classList.toggle('active')
    offcanvasMenu.classList.toggle('inactive')
    header.classList.toggle('active-offcanvas')
    document.body.style.overflow = ''
    removeAnimationFromElement(offcanvasLogo)
    removeAnimationFromElement(offcanvasNav)
    removeAnimationFromElement(offcanvasImage)
    removeAnimationFromElement(offcanvasMenuClose)
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
    videoPopup.classList.add('popup-wrapper')
    videoPopup.classList.add('video-popup-wrapper')
    const newVideoPopupHtml = `
        <div class="popup-container">
          <button class="popup-close close-modal" data-video-popup-close></button>
          <video controls muted loop>
            <source src="${videoSrc}" type="video/mp4" />
            Video doesn't work
          </video>
        </div>
    `
    videoPopup.innerHTML = newVideoPopupHtml

    $openPopupButton.addEventListener('click', () => {
      document.body.insertBefore(videoPopup, document.querySelector('script'))

      const halfwindowHeight = window.innerHeight / 2
      const popupFadeIn = {
        delay: 200,
        duration: 1000,
        distance: '80px',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease',
        viewOffset: {
          top: -halfwindowHeight,
          bottom: -halfwindowHeight,
        }
      }
      ScrollReveal().reveal('.popup-container', popupFadeIn);
      videoPopup.querySelector('video').load()
      videoPopup.querySelector('video').play()

      const popupContainer = document.querySelector('.popup-container')
      const $closePopupButton = document.querySelector('[data-video-popup-close]')
      const $videoPopupWrapper = document.querySelector('[data-video-popup-wrapper]')
      
      $videoPopupWrapper.addEventListener('click', e => {
        if ( e.target.hasAttribute('data-video-popup-wrapper') || e.target.hasAttribute('data-video-popup-close') ) {
          removeAnimationFromElement(popupContainer)
          $videoPopupWrapper.remove()
        }
      })
    })
  })
}


/**
   * NEWSLETTER SIGN UP POPUP
    */

const $openNewsletterSignUpBtn = document.querySelector('[data-newsletter-popup-open]')

if ( $openNewsletterSignUpBtn ){
  const addEmailSubmit = (e)=>{
    const showError = (input, message)=> {
      const existingError = input.closest('.form-field-wrapper').querySelector('.input-error')
      if( existingError == null ){
        const error = document.createElement('span')
        error.classList.add('input-error')
        error.textContent = message
        input.closest('.form-field-wrapper').append(error)
      } else{
        existingError.textContent = message
      }
    }

    e.preventDefault()
    const form = e.target
    const emailInput = form.querySelector('[data-email]')
    const submittedValue = emailInput.value.trim().toLowerCase()


    if (submittedValue == ''){
      showError(emailInput, 'Field cannot be empty.')
    }else{
      const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      if ( submittedValue.match(emailRegex) ){
        const emailsList = localStorage.getItem('emails-list')
        const showSuccesMessage = () =>{
          'informacja o tym że email został dodany do newslettera'
        }
        
        if ( emailsList == null ){
          const emailList = JSON.stringify([submittedValue])
          localStorage.setItem('emails-list', emailList)
          showSuccesMessage()
        } else{
          const currentList = JSON.parse(emailsList)
          if ( currentList.includes(submittedValue) ) {
            showError(emailInput, 'Email already added to list.')
          }else{
            currentList.push(submittedValue)
            const emailList = JSON.stringify(currentList)
            localStorage.setItem('emails-list', emailList)
            showSuccesMessage()
          }
        }
      } else{showError(emailInput, 'Incorrect email format.')}
    }
  }

  const openNewsletterSignUpPopup = () => {
    
    const newsletterPopup = document.createElement('div')
    newsletterPopup.setAttribute('data-newsletter-popup-wrapper', '')
    newsletterPopup.classList.add('popup-wrapper')
    newsletterPopup.classList.add('newsletter-popup-wrapper')
    const newsletterPopupHtml = `
        <div class="popup-container">
          <div class="newsletter-row">
            <div class="content-column">
              <div class="heading">
                <p class="title-300">We have special offer for You!</p>
                <h3 class="section-title title-400">
                Sign up to our Newsletter and <span>receive 15% off</span>.
                </h3>
              </div>

              <form action="" method="get">
                <p>Enter your email for your exclusive offer:</p>
                <div class="form-row">
                  <div class="form-field-wrapper">
                    <input type="text" name="email" placeholder="Your e-mail" data-email>
                  </div>
                </div>

                <div class="form-row submit-row">
                  <button type="submit" class="filled-btn" data-newsletter-button>Sign me up</button>
                </div>
              </form>
            </div>

            <div class="image-column">
              <img src="/assets/images/logo/logo.svg" class="logo-image" alt="logo">
              <img src="/assets/images/newsletter-image.webp" class="main-image" alt="woman in white dress">
            </div>
          </div>
          <button class="popup-close close-modal" data-newsletter-popup-close></button>
        </div>
    `
    newsletterPopup.innerHTML = newsletterPopupHtml
    document.body.insertBefore(newsletterPopup, document.querySelector('script'))
    newsletterPopup.classList.add('animate')

    const newsletterForm = newsletterPopup.querySelector('form')
    newsletterForm.addEventListener('submit', e => {
      addEmailSubmit(e)
    })
    
    newsletterPopup.addEventListener('click', e => {
      if ( e.target.hasAttribute('data-newsletter-popup-wrapper') || e.target.hasAttribute('data-newsletter-popup-close') ) {
        newsletterPopup.remove()
      }
    })

  }

  $openNewsletterSignUpBtn.addEventListener('click', openNewsletterSignUpPopup)
}