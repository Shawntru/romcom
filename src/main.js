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
  var titleIndex = getRandomIndex(titles);
  var randomTitle = titles[titleIndex];

  var coverIndex = getRandomIndex(covers);
  var randomCover = covers[coverIndex];

  var randomDes1Index = getRandomIndex(descriptors);
  var randomDescriptor1 = descriptors[randomDes1Index];

  var randomDes2Index = getRandomIndex(descriptors);
  var randomDescriptor2 = descriptors[randomDes2Index];



  var newCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
  var document.querySelector('.cover-image');

}
