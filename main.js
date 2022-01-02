canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "11-removebg-preview.png";
car1_x = 10;
car1_y = 10;





rover_width = 120;
rover_height = 70;
rover_image = "Lambo-removebg-preview.png";
rover_x = 10;
rover_y = 100;

background_image = "racetrack.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;


}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        car1_up();
        console.log("up");
    }
    if (keyPressed == "40") {
        car1_down();
        console.log("down");
    }
    if (keyPressed == "37") {
        car1_left();
        console.log("left");
    }
    if (keyPressed == "39") {
        car1_right();
        console.log("right");
    }
    if (keyPressed == "87") {
        rover_up();
        console.log("w");
    }
    if (keyPressed == "65") {
        rover_left();
        console.log("a");
    }
    if (keyPressed == "68") {
        rover_right();
        console.log("d");
    }
    if (keyPressed == "83") {
        rover_down();
        console.log("d");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("when the up arrow key is pressed, x= " + rover_x + "and y position is" + rover_y);
        uploadBackground();
        uploadRover();

    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("when the down arrow key is pressed, x=" + rover_x + "and y position is" + rover_y);
        uploadBackground();
        uploadRover();

    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("when the left arrow key is pressed, x=" + rover_x + "and y position is" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("when the right arrow key is pressed, x=" + rover_x + "and y position is" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
