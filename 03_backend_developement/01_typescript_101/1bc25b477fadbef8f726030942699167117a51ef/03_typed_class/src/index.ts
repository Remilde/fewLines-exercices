class Bird {
  // Write your code here.
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  sing(): void {
    console.log("Cui cui");
  }
  fly(second: number): void {
    let distance = second;
    if (this.age <= 1) {
      console.log("The bird is too young to fly");
    } else {
      if (this.age > 3) {
        distance *= 2;
      }
      console.log(`The bird flew ${distance} meters in ${second} seconds`);
    }
  }
}

// Leave the line below for tests to work properly.
export { Bird };
