// Create variables targetting the relevant DOM elements here 👇
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var randomCov = document.querySelector('.random-cover-button');
var saveCov = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var savedView = document.querySelector('.saved-view');
var makeNew = document.querySelector('.make-new-button');
var coverImg = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var viewSaved = document.querySelector('.view-saved-button');
var createNew = document.querySelector('.create-new-book-button');
var tag1 = document.querySelector('.tagline-1');
var tag2 = document.querySelector('.tagline-2');
var savedCoverSection = document.querySelector('.saved-covers-section');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = {};

// Add your event listeners here 👇
randomCov.addEventListener('click', getRandomCover);
makeNew.addEventListener('click', showForm);
viewSaved.addEventListener('click', showSaved);
homeButton.addEventListener('click', showHome);
createNew.addEventListener('click', makeUserBook);
saveCov.addEventListener('click', saveBook);
// savedCoverSection.addEventListener('dblclick', deleteSavedBook());

// Create your event handlers and other functions here 👇
getRandomCover();

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayCover(currentCover) {
  coverTitle.innerText = currentCover.title;
  tag1.innerText = currentCover.tagline1;
  tag2.innerText = currentCover.tagline2;
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
    savedCoverSection.insertAdjacentHTML('afterbegin', `
      <div class="mini-cover" id="${currentCover.id}" ondblclick="deleteSavedBook(${currentCover.id})">
      <img class="mini-cover" src="${currentCover.cover}">
      <h2 class="cover-title">${currentCover.title}</h2>
      <h3 class="tagline">A tale of ${currentCover.tagline1} and ${currentCover.tagline2}<h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
      </div>
    `);
  }
}

function showForm() {
  formView.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomCov.classList.add('hidden');
  saveCov.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.add('hidden');
}

function showSaved() {
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  randomCov.classList.add('hidden');
  saveCov.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function showHome() {
  savedView.classList.add('hidden');
  formView.classList.add('hidden');
  homeView.classList.remove('hidden');
  randomCov.classList.remove('hidden');
  saveCov.classList.remove('hidden');
  homeButton.classList.add('hidden');
}
