console.log("Kittens of the world, unite as one!");

// brenda-helen-17456-unsplash.jpg
// david-clode-547746-unsplash.jpg
// tim-mossholder-594536-unsplash.jpg

let filenames = [
  "fancy_face.png"
];

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = "kittens/" + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}
