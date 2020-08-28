// Create variables targetting the relevant DOM elements here 👇

function displayRandomCover() {
  var randomTitle = titles[getRandomIndex(titles)];
  var randomImg = covers[getRandomIndex(covers)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  var newCover = new Cover(randomImg, randomTitle, randomDescriptor1, randomDescriptor2);

  document.querySelector('.cover-title').innerText = randomTitle;
  document.querySelector('.tagline-1').innerText = randomDescriptor1;
  document.querySelector('.tagline-2').innerText = randomDescriptor2;
  document.querySelector('.cover-image').setAttribute('src', randomImg);
}

displayRandomCover();

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

document.querySelector('.random-cover-button').addEventListener('click', displayRandomCover);
document.querySelector('.make-new-button').addEventListener('click', showForm);

// Create your event handlers and other functions here 👇

function showForm() {
  document.querySelector('.form-view').classList.toggle('hidden');
  document.querySelector('.home-view').classList.toggle('hidden');
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
