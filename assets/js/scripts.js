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

