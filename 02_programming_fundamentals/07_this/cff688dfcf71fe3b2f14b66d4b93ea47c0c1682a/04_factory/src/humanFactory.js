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
  Object.keys
  return {
    ...abdel,
    Object.key(object)
  };
};
humanFactory();
  
const createHumans = () => {};

module.exports = {
  humanFactory,
  createHumans,
};
