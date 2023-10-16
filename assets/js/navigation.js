/**
   * Generate navigation list from navigation.json
    */

//generate DOM list
const generateNavList = (menuItems) => {
  const navList = document.createElement('ul')
  navList.classList.add('nav-list')

  let currentUrl = window.location.pathname
  console.log(currentUrl)

  menuItems.forEach(item => {
    const navItem = document.createElement('li')
    navItem.classList.add('nav-list-item')
    if ( item.url === currentUrl) { navItem.classList.add('active') }
    const navLink = document.createElement('a')
    navLink.classList.add('nav-list-link')
    navLink.innerText = item.name
    navLink.href = item.url
 
    

    navItem.append(navLink)
    navList.append(navItem)
  });

  return navList
}

// get nav containers and inject json data into them
const $navigationElements = document.querySelectorAll('[data-navigation]')

if ( $navigationElements.length ) {
  let navigationHTML

  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'assets/json/navigation.json')
  xhr.send()

  xhr.onreadystatechange = function () {
    if ( this.readyState == 4 && this.status == 200 ) {
      navigationHTML = generateNavList(JSON.parse(xhr.responseText))

      $navigationElements.forEach(navigation => {
        navigation.append(navigationHTML)
      })
    }
  }
}



