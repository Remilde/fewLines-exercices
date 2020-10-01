abstract class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number, height: number) {
    this.age = age;
    this.height = height;
    if (age >= 1 || age <= 50) {
      for (let i = age; i <= 10; i++) {
        this.height += 25;
      }
      if (age > 10) {
        for (let i = 11; i <= 20; i++) {
          this.height += 10;
        }
      }
    } else {
      this.alive = false;
    }
  }
}

// Leave the line below for tests to work properly.
export { Tree };
