const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//NEW SELECTORS


//body
const header = document.querySelector('header')
const banner = document.querySelector('.cta')
const mainContent = document.querySelector('.main-content')
const contact = document.querySelector('.contact')
const footer = document.querySelector('footer')


//header
const anchors = header.querySelector('nav a')
const logoImage = header.querySelector('#logo-img')

//a tags
const servicesNav = anchors
const productNav = servicesNav.nextElementSibling
const visionNav = productNav.nextElementSibling
const featuresNav = visionNav.nextElementSibling
const aboutNav = featuresNav.nextElementSibling
const contactNav = aboutNav.nextElementSibling 


//banner
const bannerHeader = banner.querySelector('h1')
const bannerButton = banner.querySelector('button')
const bannerImage = banner.querySelector('#cta-img')

//mainContent
const topMainContent = mainContent.querySelector('.top-content')
const mainContentImage = mainContent.querySelector('#middle-img')
const bottomMainContent = mainContent.querySelector('.bottom-content')

const topHeaderOne = topMainContent.querySelector('h4')
const topHeaderTwo = topHeaderOne.nextElementSibling
const topParagraphOne = topMainContent.querySelector('p')
const topParagraphTwo = topParagraphOne.nextElementSibling
console.log(topHeaderOne, topHeaderTwo)

const bottomHeaderOne = bottomMainContent.querySelector('h4')
const bottomHeaderTwo = bottomHeaderOne.nextElementSibling
const bottomParagraphOne = bottomMainContent.querySelector('p')
const bottomParagraphTwo = bottomParagraphOne.nextElementSibling
// const bottomHeaderThree = bottomHeaderTwo.nextElementSibling
// const bottomParagraphThree = bottomParagraphTwo.nextElementSibling

//contact
const contactHeader = contact.querySelector('h4')
const paragraphOne = contact.querySelector('p')
const paragraphTwo = paragraphOne.nextElementSibling
const paragraphThree = paragraphTwo.nextElementSibling

//footer
const footerParagraph = footer.querySelector('p')


//UPDATED HTML

servicesNav.textContent = 'Services'
productNav.textContent = 'Product'
visionNav.textContent = 'Vision'
featuresNav.textContent = 'Features'
aboutNav.textContent = 'About'
contactNav.textContent = 'Contact'

logoImage.src = 'img/logo.png'


bannerHeader.textContent = 'DOM Is Awesome' 
bannerButton.textContent = 'Get Started'
bannerImage.src = 'img/header-img.png' 


topHeaderOne.textContent = 'Features'
topParagraphOne.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
topHeaderTwo.textContent = 'About'
// topParagraphTwo.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

mainContentImage.src = 'img/mid-page-accent.jpg'

bottomHeaderOne.textContent = 'Services'
bottomHeaderTwo.textContent = 'Product'



contactHeader.textContent = 'Contact'
paragraphOne.textContent = '123 Way 456 Street Somewhere, USA'
paragraphTwo.textContent = '1 (888) 888-8888'
paragraphThree.textContent = 'sales@greatidea.io'

footerParagraph.textContent = 'Copyright Great Idea! 2018'
//NEW CONTENT