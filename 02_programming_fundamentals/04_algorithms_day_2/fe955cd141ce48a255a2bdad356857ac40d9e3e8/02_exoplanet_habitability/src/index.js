const star = { spectralClass: "M" };

const planet = {
  mass: 1.02,
  radius: 1.12,
  rotationStability: true,
  habitalZone: false,
};

function canHabitateLife(star, planet) {
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
  return canHabitateLife;
}

// Do not remove last lines, it is for tests
module.exports = canHabitateLife;
