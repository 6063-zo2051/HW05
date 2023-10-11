let data;

let ageMin;
let ageMax;
let timeMin;
let timeMax;

function preload() {
  data = loadTable("./deliverytime.csv", "csv", "header");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
}
 
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 1000; i++) {
    let age = data.getNum(i, "Delivery_person_Age");
    let time = data.getNum(i, "Time_taken(min)");


    ageMin = min(ageMin, age);
    ageMax = max(ageMax, age);
    timeMin = min(timeMin, time);
    timeMax = max(timeMax, time);
  }
}

function draw() {
  background(0);
  noFill();
  stroke(190, 20, 255);
  for (let i = 0; i < 1000; i++) {
    let age = data.get(i, "Delivery_person_Age");
    let time = data.get(i, "Time_taken(min)");
    let x = map(age, ageMin, ageMax, 0, width);
    let d = map(time, timeMin, timeMax, 20, width);
    ellipse(x, height / 2, d, d);
  }
  noLoop();
}


  //let age = [];
  //let deliveryTime = [];

 // for (let i = 0; i < 1000; i++) {
  //  let age = data.getNum(i, "Delivery_person_Age");
  //  let time = data.getNum(i, "Time_taken(min)");
 // }
//}

//function draw() {
 //background(255);

  //let barWidth = width/1000;

 // for ( let i = 0, i < data.length; i++);
  //let x = map(i, 0, data.length, 0, width);
 // let y = map(data[i].deliveryTime, 0, timeMax, height, 0);
 // let barHeight = height - y;

  //fill(255, 0, 0);
 // rect(x, y, barWidth, barHeight);

//}