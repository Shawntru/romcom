// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var createNew = document.querySelector('.create-new-book-button');
var formView = document.querySelector('.form-view');
var homeButton = document.querySelector('.home-button');
var homeView = document.querySelector('.home-view');
var makeNew = document.querySelector('.make-new-button');
var randomCov = document.querySelector('.random-cover-button');
var saveCov = document.querySelector('.save-cover-button');
var savedCoverSection = document.querySelector('.saved-covers-section');
var savedView = document.querySelector('.saved-view');
var viewSaved = document.querySelector('.view-saved-button');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = {};

// Add your event listeners here 👇
createNew.addEventListener('click', makeUserBook);
homeButton.addEventListener('click', showHome);
makeNew.addEventListener('click', showForm);
randomCov.addEventListener('click', getRandomCover);
saveCov.addEventListener('click', saveBook);
viewSaved.addEventListener('click', showSaved);

// Create your event handlers and other functions here 👇
getRandomCover();

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayCover(currentCover) {
  coverTitle.innerText = currentCover.title;
  document.querySelector('.tagline-1').innerText = currentCover.tagline1;
  document.querySelector('.tagline-2').innerText = currentCover.tagline2;
  coverImg.setAttribute('src', currentCover.cover);
}

function getRandomCover() {
  currentCover = new Cover (
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );
  displayCover(currentCover);
}

function deleteSavedBook(id) {
  document.getElementById(id).remove();
}

function makeUserBook() {
  event.preventDefault();
  formView.classList.add('hidden');
  homeView.classList.remove('hidden');
  saveCov.classList.remove('hidden');
  currentCover = new Cover (
    document.getElementById('cover').value,
    document.getElementById('title').value,
    document.getElementById('descriptor1').value,
    document.getElementById('descriptor2').value
  );
  covers.push(currentCover.cover);
  titles.push(currentCover.title);
  descriptors.push(currentCover.tagline1, currentCover.tagline2);
  displayCover(currentCover);
}

function saveBook() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
    createHTML();
  }
}

function createHTML() {
  var htmlBlock = `<div class="mini-cover" id="${currentCover.id}" ondblclick="deleteSavedBook(${currentCover.id})">
  <img class="mini-cover" src="${currentCover.cover}">
  <h2 class="cover-title">${currentCover.title}</h2>
  <h3 class="tagline">A tale of ${currentCover.tagline1} and ${currentCover.tagline2}<h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">
  </div>`;
  savedCoverSection.insertAdjacentHTML('afterbegin', htmlBlock);
}

function showForm() {
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomCov.classList.add('hidden');
  saveCov.classList.add('hidden');
  savedView.classList.add('hidden');
}

function showSaved() {
  formView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomCov.classList.add('hidden');
  saveCov.classList.add('hidden');
  savedView.classList.remove('hidden');
}

function showHome() {
  formView.classList.add('hidden');
  homeButton.classList.add('hidden');
  homeView.classList.remove('hidden');
  randomCov.classList.remove('hidden');
  saveCov.classList.remove('hidden');
  savedView.classList.add('hidden');
}
