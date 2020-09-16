const person = {
  nom : "",
  prenom : "",
  age : "",
};
const identityForm = (reader) => {
  reader.question("What is your first name? ", (firstName) => {
    person.prenom = firstName;
    reader.question("What is your last name? ", (lastName) => {
      person.nom = lastName;
      reader.question("What is your last age? ", (age) => {
        person.age = age;
        console.log("Your name is " + person.prenom + " " + person.nom +  " and you are " + person.age + ".");    
        reader.close();
      });
    });
  });
};



// Leave line below for tests to work
module.exports = identityForm;
