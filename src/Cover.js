class Cover {
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now();
    this.cover = coverImgSrc || 'http://placeimg.com/640/480/any';
    this.title = title || titles[getRandomIndex(titles)];
    this.tagline1 = descriptor1 || descriptors[getRandomIndex(descriptors)];
    this.tagline2 = descriptor2 || descriptors[getRandomIndex(descriptors)];
  }
}
