export const displayMenu = (list) => {
  list.array.forEach((menuOption, index) => {
    console.log(`${index + 1}`);
  });
};
