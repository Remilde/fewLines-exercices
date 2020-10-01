function handleTuple(tuple: [string, number]): void {
  // Code the function here.
  if (typeof tuple[0] === "string") {
    console.log(`${tuple[0]} string`);
  }

  if (typeof tuple[1] === "number") {
    console.log(`${tuple[1]} is a number`);
  }
}
handleTuple(["HEllO", 1]);
// Leave the line below for tests to work properly.
export { handleTuple };
