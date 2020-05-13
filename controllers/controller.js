"use strict";
// Variables
var car;
var plate = document.getElementById('plate');
var brand = document.getElementById('brand');
var color = document.getElementById('color');
var tireBrand = document.getElementById('rueda1');
var diameter = document.getElementById('diameter1');
var tireBrand2 = document.getElementById('rueda2');
var diameter2 = document.getElementById('diameter2');
var tireBrand3 = document.getElementById('rueda3');
var diameter3 = document.getElementById('diameter3');
var tireBrand4 = document.getElementById('rueda4');
var diameter4 = document.getElementById('diameter4');
// Create Car
function createCar() {
    var car = new Car(plate.value, brand.value, color.value);
    // Validating that vehicle the plate has 4 digits(d{4}) and 3 letters!
    var isPlateOK = /^[0-9]{4}[a-zA-Z]{3}$/.test(plate);
    if (!isPlateOK) {
        alert('Please enter a valid plate number!');
    }
    else {
        // Output message
        var result = document.getElementById('output');
        result.innerHTML = "Car: <br> <br> Plate: " + car.plate + " | Brand: " + car.brand + " | Color: " + car.color;
    }
}
// Add Wheel
function addWheels() {
    if (+diameter.value < 0.4 || +diameter.value > 2) {
        alert('Diameter should be greater than 0.4 and less than or equal to 2!');
    }
    else {
        var wheels = new Wheel(tireBrand.value, +diameter.value);
        var wheels2 = new Wheel(tireBrand2.value, +diameter2.value);
        var wheels3 = new Wheel(tireBrand3.value, +diameter3.value);
        var wheels4 = new Wheel(tireBrand4.value, +diameter4.value);
        // Output Wheels message
        var result = document.getElementById('output2');
        result.innerHTML = "Wheels: <br> <br> Wheel 1:  Brand: " + wheels.brand + " Diameter: " + wheels.diameter + " | Wheel 2:  Brand: " + wheels2.brand + " Diameter: " + wheels2.diameter + " <br> Wheel 3:  Brand: " + wheels3.brand + " Diameter: " + wheels3.diameter + " | Wheel 4:  Brand: " + wheels4.brand + " Diameter: " + wheels4.diameter;
    }
}
