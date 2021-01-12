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
const links = document.querySelectorAll('a')
const logoImage = header.querySelector('#logo-img')

//a tags

links[0].textContent = 'Services'
links[1].textContent = 'Product'
links[2].textContent = 'Vision'
links[3].textContent = 'Features'
links[4].textContent = 'About'
links[5].textContent = 'Contact'


//banner
const bannerHeader = banner.querySelector('h1')
const bannerButton = banner.querySelector('button')
const bannerImage = banner.querySelector('#cta-img')

//mainContent---------------------------------------------------------

const topMainContent = mainContent.querySelector('.top-content')

//Features Content
const featuresContent = topMainContent.querySelector('.text-content')
featuresContent.classList.add('features')
const featuresHeader = featuresContent.querySelector('h4')
const featuresPar = featuresContent.querySelector('p')
//About Content
const aboutContent = featuresContent.nextElementSibling
aboutContent.classList.add('about') 
const aboutHeader = aboutContent.querySelector('h4')
const aboutPar = aboutContent.querySelector('p')

const mainContentImage = mainContent.querySelector('#middle-img')

const bottomMainContent = mainContent.querySelector('.bottom-content')

//Services Content
const serviceContent = bottomMainContent.querySelector('.text-content')
serviceContent.classList.add('service')
const serviceHeader = serviceContent.querySelector('h4')
const servicePar = serviceContent.querySelector('p')
//Product Content
const productContent = serviceContent.nextElementSibling
productContent.classList.add('product') 
const productHeader = productContent.querySelector('h4')
const productPar = productContent.querySelector('p')
//Vision
const visionContent = productContent.nextElementSibling
visionContent.classList.add('vision') 
const visionHeader = visionContent.querySelector('h4')
const visionPar = visionContent.querySelector('p')

// const topHeaderOne = topTextContent.querySelector('h4')
// const topParagraphOne = topTextContent.querySelector('p')
// const topHeaderTwo = topParagraphOne.nextElementSibling
// const topParagraphTwo = topHeaderTwo.nextElementSibling

// const bottomHeaderOne = bottomMainContent.querySelector('h4')
// const bottomHeaderTwo = bottomHeaderOne.nextElementSibling
// const bottomParagraphOne = bottomMainContent.querySelector('p')
// const bottomParagraphTwo = bottomParagraphOne.nextElementSibling
// const bottomHeaderThree = bottomHeaderTwo.nextElementSibling
// const bottomParagraphThree = bottomParagraphTwo.nextElementSibling

//---------------------------------------------------------------------

//contact
const contactHeader = contact.querySelector('h4')
const paragraphOne = contact.querySelector('p')
const paragraphTwo = paragraphOne.nextElementSibling
const paragraphThree = paragraphTwo.nextElementSibling

//footer
const footerParagraph = footer.querySelector('p')


//UPDATED HTML



logoImage.src = 'img/logo.png'


bannerHeader.innerHTML += 'DOM <br/> Is <br/> Awesome' 
bannerButton.textContent = 'Get Started'
bannerImage.src = 'img/header-img.png' 

//------------------WORK ON THIS-----------------------------
featuresHeader.textContent = 'Features'
featuresPar.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

aboutHeader.textContent = 'About'
aboutPar.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

mainContentImage.src = 'img/mid-page-accent.jpg'

serviceHeader.textContent = 'Services'
servicePar.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

productHeader.textContent = 'Product'
productPar.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

visionHeader.textContent = 'Vision'
visionPar.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//---------------------------------------------------------------

contactHeader.textContent = 'Contact'
paragraphOne.innerHTML += '123 Way 456 Street <br/> Somewhere, USA'
paragraphTwo.textContent = '1 (888) 888-8888'
paragraphThree.textContent = 'sales@greatidea.io'

footerParagraph.textContent = 'Copyright Great Idea! 2018'

//NEW CONTENT

//Change the color of the navigation text to be green.
links.forEach(green => green.style.color = 'green')

//Utilize `.appendChild()` and `.prepend()` to add two 
//new items to the navigation system. You can call them 
//whatever you want.

const ideas = document.createElement('a')
ideas.textContent = 'Ideas'
ideas.href = '#'

document.querySelector('nav').appendChild(ideas)

const blog = document.createElement('a')
blog.textContent = 'Blog'
blog.href = '#'

document.querySelector('nav').appendChild(blog)
