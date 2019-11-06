function Traveler (name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}
function Wagon (capacity){
this.capacity = capacity
this.passenger = [] ;
}

Traveler.prototype = {
    constructor: Traveler,
    hunt: function(){
        this.food += 2
    },
    eat: function(){
        if(this.food > 0){
            this.food -= 1
        }
        else{
            this.isHealthy = false;
        }
    }
}

Wagon.prototype = {
    constructor: Wagon,
    getAvailableSeatCount: function(){
       return this.capacity - this.passenger.length
    },
    join: function(traveler){
        if (this.capacity > this.passenger.length){
        this.passenger.push(traveler)
        }
    },
    shouldQuarantine: function(){
        for (counter = 0; counter < this.passenger.length; counter++){
            if(!this.passenger[counter].isHealthy){
                return true
            }

        }
        return false
        
    },
    totalFood: function(){
       let foodSum = 0
       for (counter = 0; counter < this.passenger.length; counter++){
            foodSum += this.passenger[counter].food
       }
       return foodSum
    }


}

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);