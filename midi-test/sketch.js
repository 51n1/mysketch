// Reference: {URL}
// Demo: https://51n1.github.io/mysketch/{NAME}/

let displayText;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //starting text
  displayText="Nothing received";

  textSize(128);
  textAlign(CENTER);
  textStyle(BOLD);

  ////
  //Setting up MIDI
  ////

  WebMidi.enable(function(err) { //check if WebMidi.js is enabled
    if (err) {
      console.log("WebMidi could not be enabled.", err);
    } else {
      console.log("WebMidi enabled!");
    }

    //name our visible MIDI input and output ports
    console.log("---");
    console.log("Inputs Ports: ");
    for (i = 0; i < WebMidi.inputs.length; i++) {
      console.log(i + ": " + WebMidi.inputs[i].name);
    }

    console.log("---");
    console.log("Output Ports: ");
    for (i = 0; i < WebMidi.outputs.length; i++) {
      console.log(i + ": " + WebMidi.outputs[i].name);
    }

    //Choose an input port
    inputSoftware = WebMidi.inputs[0];
    //The 0 value is the first value in the array
    //meaning that we are going to use the first MIDI input we see
    //which in this case is 'LoopMIDI port'

    //listen to all incoming "note on" input events
    inputSoftware.addListener('noteon', "all",
      function(e) {
        //Show what we are receiving
        console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ") " + e.note.number + ".");
        displayText = "(" + e.note.name + e.note.octave + ") " + e.note.number;

        //the function you want to trigger on a 'note on' event goes here
      }
    );

    //The note off functionality will need its own event listener
    //You don't need to pair every single note on with a note off
    inputSoftware.addListener('noteoff', "all",
      function(e) {
        //Show what we are receiving
        console.log("Received 'noteoff' message (" + e.note.name + e.note.octave + ") " + e.note.number + ".");

        //the function you want to trigger on a 'note on' event goes here
      }
    );

    //
    //end of MIDI setup
    //
  });


}

function draw() {
  background(0);

  //Displaying text
  fill(255);
  text(displayText, width/2, height/2);

  // if (touches.length > 1) saveCanvas();
  // save(frameCount+".png");
}

function keyPressed() {
  if (keyCode === ENTER) saveCanvas();
}
