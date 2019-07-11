// Higher orders fucntions are functions that take other functions as arguments

// in functional programming languages, functions are values
var triple = function (x) {
    return x * 3;
};

var waffle = triple;

waffle(30);

var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'cat' },
];

var dogs = [];
var dogs1 = [];
var dogs2 = [];
var dogs3 = [];

// filtering with a callback
dogs = animals.filter(function(animal) {
    return animal.species === 'dog';
});

// filtering with a previously defined callback function
var isDog = function(animal){
    return animal.species === 'dog';
};

dogs1 = animals.filter(isDog);
// otherAnimals = animals.reject(isDog);



dogs2 = animals.filter( (animal) => animal.species === 'dog');

for ( var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        dogs3.push(animals[i]);
    }
}

// Map function(transforms every element)

var names = [];
var names1 = [];

for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}

// Map function with callback function
names1 = animals.map(function(animal) {
    return animal.name;
});

// Just map funciton in ES6
names2 = animals.map((animal) => animal.name);


