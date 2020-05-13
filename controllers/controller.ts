// Variables
let car: Car;

let plate = document.getElementById('plate')! as HTMLInputElement;
let brand = document.getElementById('brand')! as HTMLInputElement;
let color = document.getElementById('color')! as HTMLInputElement;

let tireBrand = document.getElementById('rueda1')! as HTMLInputElement;
let diameter = document.getElementById('diameter1')! as HTMLInputElement;

let tireBrand2 = document.getElementById('rueda2')! as HTMLInputElement;
let diameter2 = document.getElementById('diameter2')! as HTMLInputElement;

let tireBrand3 = document.getElementById('rueda3')! as HTMLInputElement;
let diameter3 = document.getElementById('diameter3')! as HTMLInputElement;

let tireBrand4 = document.getElementById('rueda4')! as HTMLInputElement;
let diameter4 = document.getElementById('diameter4')! as HTMLInputElement;

// Create Car
function createCar() {
    let car = new Car(plate.value, brand.value, color.value);

    // Validating that vehicle the plate has 4 digits(d{4}) and 3 letters!
    let isPlateOK = /^[0-9]{4}[a-zA-Z]{3}$/.test(plate.value);

    if (!isPlateOK) {
        alert('Please enter a valid plate number!');
    } else {
        // Output message
        let result = document.getElementById('output') as HTMLInputElement;
        result.innerHTML = `Car: <br> <br> Plate: ${car.plate} | Brand: ${car.brand} | Color: ${car.color}`;
    }
}

// Add Wheel
function addWheels() {
    if (+diameter.value < 0.4 || +diameter.value > 2) {
        alert('Diameter should be greater than 0.4 and less than or equal to 2!');
    } else {

        let wheels = new Wheel(tireBrand.value, +diameter.value);
        let wheels2 = new Wheel(tireBrand2.value, +diameter2.value);
        let wheels3 = new Wheel(tireBrand3.value, +diameter3.value);
        let wheels4 = new Wheel(tireBrand4.value, +diameter4.value);

        // Output Wheels message
        let result = document.getElementById('output2') as HTMLInputElement;
        result.innerHTML = `Wheels: <br> <br> Wheel 1:  Brand: ${wheels.brand} Diameter: ${wheels.diameter} | Wheel 2:  Brand: ${wheels2.brand} Diameter: ${wheels2.diameter} <br> Wheel 3:  Brand: ${wheels3.brand} Diameter: ${wheels3.diameter} | Wheel 4:  Brand: ${wheels4.brand} Diameter: ${wheels4.diameter}`;
    }
}