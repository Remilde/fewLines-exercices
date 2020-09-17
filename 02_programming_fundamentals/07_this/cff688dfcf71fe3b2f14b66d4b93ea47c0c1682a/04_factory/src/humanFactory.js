const humanFactory = (object) => {
  const abdel = {
    firstname: "John",
    lastname: "Doe",
    genre: "male",
    job: "unemployed",
    fullname: function () {
      return `${this.firstname} ${this.lastname}`;
    },
    introduction: `Hello! My name is ${this.fullname}`,
  };
  console.log(abdel.fullname());
  return {
    ...abdel,
    firstname: object.firstname,
    lastname: object.lastname,
    genre: object.genre,
    job: object.job, 
  };
};
humanFactory();
  
const createHumans = () => {};

module.exports = {
  humanFactory,
  createHumans,
};
