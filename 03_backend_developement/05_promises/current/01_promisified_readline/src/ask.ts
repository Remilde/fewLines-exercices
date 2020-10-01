import { rl } from "./reader";

function ask(question: string, reader = rl): Promise<string> {
  // Your code goes here
  return new Promise((resolve, reject) => {
    reader.question(question, (input) => {
      if (input === "") {
        reject(new Error("Invalid input"));
      }
      resolve(input);
    });
  });
}

// Leave line below for tests to work properly
export default ask;
