// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRandomCover() {

  var randomTitle = titles[getRandomIndex(titles)];
  var randomImg = covers[getRandomIndex(covers)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];

  var newCover = new Cover(randomImg, randomTitle, randomDescriptor1, randomDescriptor2);

  var displayTitle = document.querySelector('.cover-title');
  displayTitle.innerText = randomTitle;

  var displayDesc1 = document.querySelector('.tagline-1');
  displayDesc1.innerText = randomDescriptor1;

  var displayDesc2 = document.querySelector('.tagline-2');
  displayDesc2.innerText = randomDescriptor2;

  var displayImg = document.querySelector('.cover-image');
  displayImg.setAttribute('src', randomImg);
}

displayRandomCover();

var randomCoverButton = document.querySelector('.random-cover-button');
randomCoverButton.addEventListener('click', displayRandomCover);
