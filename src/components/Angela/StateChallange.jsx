import React from 'react';
import animal, { notAnimals } from "./data";

 console.log(animal);
 const [ anythig, dog ] = animal;
 //console.log(notAnimals(anythig))
 const [ animals, makeSound ] = notAnimals(anythig)
 console.log(animals);makeSound();


// console.log(anythig);
// const { name, sound } = dog;
//You can change the name of properties of the object
// like const { name: anyname, sound: anything } = dog or cat 

//You can give the value to the objects  like
// const { name = "anything", sound = "anything" } = cat
//this method is used if there is no value then use th egiven value as default.
//console.log(sound);

//Destructuring of the nestd Object:
// const { name, sound, feedingRequirements: { food, water } } = anythig;
// console.log(water)

function StateChallange() {
    return (
        <div>
            
        </div>
    )
}

export default StateChallange
