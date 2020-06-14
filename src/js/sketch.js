var array = [50, 49, 45, 35, 25, 47, 23, 8, 49, 27, 13, 40, 35, 7,10];
var colors = [];

var randomize;
var next, previous, reset;

var ii = 1, jj = 1, n = 16;

function setup () {
  createCanvas(windowWidth, windowHeight - 40);
  randomizeArray();
  randomize = createButton("Randomize Array");
  randomize.mouseClicked(randomizeArray);

  for (var i = 0; i < n; i++) {
    colors.push("#BBDEFB");
  }

  next = createButton("Next Step");
  next.mouseClicked(nextStep);
  // previous = createButton("Previous Step");
  // previous.mouseClicked(previousStep);

  reset = createButton("Reset");
  reset.mouseClicked(function(){
    location.reload();
  });

}

function draw () {
  background(51);

  fill(250);
  textFont('monospace');
  textSize(27);
  text("Insertion Sort", 15, 40);
  textSize(14);
  textFont('Sans-serif');
 // text("Here we keep selecting the unsorted element and move them to their right place.", 15, 70);Click on Next button to visualize the next step
  text("> Click on Next button to visualize the next step", 15, 90);
  text("> Red shows the position of unsorted element", 15, 110);
  text("> Green shows the movement of unsorted element", 15, 130);
  textFont('monospace');
  



  fill(200, 245, 66);
  textSize(15);
  // text("Note : Use Maximum 5 Clusters", 15, windowHeight - 7);
  text("Creator : Mohammad Anas", windowWidth - 270, 40);
  text("Mentor  : Syed Usman Sir", windowWidth - 270, 70);
fill(100);
  noFill();
  noStroke();

  for (var i = 0; i < array.length; i++) {
    if (i == ii) {
      colors[i] = "#FF1744";
    } else if (i == jj) {
      colors[i] = "#388E3C";
    } else {
      colors[i] = "#BBDEFB";
    }
  }

  printArrayBar(array);
   fill(99, 245, 66);
    textSize(20)
text("Controls", 15, height - 20);

  if (ii == 16 && jj == 16) {
    // textSize(32);
    fill(245, 66, 120);
    textSize(20)
    text("Array Sorted!", 15, height - 170);
  }
}

function randomizeArray () {
  if (ii == 1 && jj == 1) {
    for (var i = 0; i < n; i++) {
      array[i] = Math.floor(Math.random() * 50 + 1);
    }
  }
}

function printArrayBar (array) {

  for (var i = 0; i < array.length; i++) {
    fill(colors[i]);
    printBar(300 + i * 50, y = height - 50, array[i]);
  }
}

function printBar (x, y, number) {

  var ratio = number * 7;
  rect(x, y - ratio, 30, ratio);
  text(number, x + 5, y + 25);
}

function nextStep () {
  if (ii < n) {
    if (jj > 0 && array[jj - 1] > array[jj]) {
      var temp = array[jj];
      array[jj] = array[jj - 1];
      array[jj - 1] = temp;

      jj--;
    } else {
      ii++;
      jj = ii;
    }
  }
}

function previousStep () {

}

function keyPressed () {
  if (keyCode == ENTER) {
    nextStep();
  }
}
