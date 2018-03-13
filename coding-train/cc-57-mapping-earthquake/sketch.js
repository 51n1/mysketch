// - Coding Challenge #57 Mapping Earthquake Data by Daniel Shiffman

let mapimg;
let clat = 0;
let clon = 0;
let lat = 35.67; // 緯度 Y -90(S) ~ 90(N)
let lon = 139.74; // 経度 X -180(W) ~ 180(E)
let zoom = 1;
let earthquakes;

function preload() {
  mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/light-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiNTFuMSIsImEiOiJjamVuM3c2eXIwZWk5MnFxeThjeGJueXduIn0.pbzMnH--37uvLF3zv_Xmww");
  // earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv");
  earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv");
}

function mercX(lon) {
  lon = radians(lon);
  let a = (256 / PI) * pow(2, zoom);
  let b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  let a = (256 / PI) * pow(2, zoom);
  let b = tan(PI / 4 + lat / 2);
  let c = PI - log(b);
  return a * c;
}

function setup() {
  createCanvas(1024, 512);
  translate(width/2, height/2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  let cx = mercX(clon);
  let cy = mercY(clat);

  for (let i = 0; i < earthquakes.length; i++) {
    let data = earthquakes[i].split(/,/);
    // console.log(data);
    let lat = data[1];
    let lon = data[2];
    let mag = data[4];
    let x = mercX(lon) - cx;
    let y = mercY(lat) - cy;

    mag = pow(10, mag);
    mag = sqrt(mag);

    let magmax = sqrt(pow(10, 10));

    let d = map(mag, 0, magmax, 0, 360);
    stroke(255, 0, 255);
    fill(255, 0, 255, 150);
    ellipse(x, y, d, d);
  }
}

function draw() {
  // background(0);

  if (touches.length > 1 || keyIsDown(ENTER)) saveCanvas();
  // save(frameCount+".png");
}

// function touchMoved() {
//   return false;
// }
