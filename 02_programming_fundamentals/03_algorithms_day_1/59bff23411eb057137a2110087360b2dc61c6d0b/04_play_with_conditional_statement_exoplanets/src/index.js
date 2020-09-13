// Don't modify these lines for tests to work properly.
const star = require("./data/starData");
const planet = require("./data/exoplanetData");
// const starData = require("./data/starData");
// const exoplanetData = require("./data/exoplanetData");

// Your code here:
let canHabitateLife = false;
if((star.spectralClass === "K" || star.spectralClass === "M") && planet.habitalZone && planet.mass > 0.32 && planet.rotationStability){
    if(planet.radius > 0.5 && planet.radius < 2.5){        
        if(planet.mass >= 0.5) {
            canHabitateLife = true;
        }   else if(planet.radius >= 1) {
          canHabitateLife = true;
        }
    }
}
// Don't modifiy this line for test to work properly.
module.exports = canHabitateLife;
