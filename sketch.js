let data;

function preload() {
  data = loadTable("./deliverytime.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
}
 
function draw() {

  let dataPoints = data.getRowCount();

  for (let i = 0; i < 1000; i++) {
    let age = data.getNum(i, "Delivery_person_Age");
    let time = data.getNum(i, "Time_taken(min)");
let x = map(age, 10, 50, 5, width - 5);
let y = map(time, 0, 100, height - 5, 5);
fill(236, 200, 136);
circle (x, y, 7);
fill(255, 226, 7);
circle (x, y, 5);
fill(255, 0, 0);
circle (x - 1, y - 1, 2);
circle (x + 1, y + 1, 2);
circle (x - 1, y + 1, 1);
circle (x + 1, y - 1, 1);

fill(0, 0, 0);
textSize(12);
text("Age (years)", width/2.5, height - 50);
text("Delivery Time (min)", 5, height/2);

}
}
