const animal = [
    { name: "cat", sound: "meow", feedingRequirements: {
        food: 2,
        water: 3,
    }, },
    { name: "dog", sound: "woof" }
];

function notAnimals(animal) {
    return [
        animal.name,
        function() {
            console.log(animal.sound);
        }
    ];
}

export default animal;
export { notAnimals };