class Vehicle{
    // speed, VehicleMake
    constructor(speed, vehicleMake){
        this.speed = speed;
        this.vehicleMake = vehicleMake;
    }

    horn(){
        console.log("Make a sound...");
    }
}

class Car extends Vehicle{
    constructor(speed, make, doorCount){
        super(speed, make);
        this.doorCount = doorCount;
    }

    horn(){
        console.log("BEEEP!!!");
    }
}

const toyota = new Car (190, 'Toyota Auris', 4);

toyota.horn()
console.log(toyota);