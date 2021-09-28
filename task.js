const fs = require("fs");

let numbers = [5, 8, 0, 1, 9, 11, 15, 16];

console.log("Original numbers list: ", numbers);

/* 
    1. The problem with the code was that it used i to iterate through the array in the nested loop.
    To solve the problem we just use j and it will work just fine.
    Plus adding (-i) for the sake of optimization.
*/

// 2. Removed extra spaces to make the code easier to look at.

// 3. To keep the original array untouched, two copies are declared and then sorted.

let numbersCopy1 = [...numbers];

for (let i = 0; i < numbersCopy1.length; i++) {
  for (let j = 0; j < numbersCopy1.length - 1 - i; j++) {
    //if the left number is greater than the right one, swap.
    if (numbersCopy1[j] > numbersCopy1[j + 1]) {
      let temp = numbersCopy1[j];
      numbersCopy1[j] = numbersCopy1[j + 1];
      numbersCopy1[j + 1] = temp;
    }
  }
}

console.log("numbers list After sorting: ", numbersCopy1);

let numbersCopy2 = [...numbers];

for (let i = 0; i < numbersCopy2.length; i++) {
  for (let j = 0; j < numbersCopy2.length - 1 - i; j++) {
    if (numbersCopy2[j] < numbersCopy2[j + 1]) {
      //if the left number is less than the right one, swap.
      let temp = numbersCopy2[j];
      numbersCopy2[j] = numbersCopy2[j + 1];
      numbersCopy2[j + 1] = temp;
    }
  }
}

console.log("numbers list After Desc sorting: ", numbersCopy2);

// 4. reading from data.txt
fs.readFile("data.txt", "utf8", (err, data) => {
  // error handling
  if (err) {
    console.error(err);
    return;
  }

  // get the data from data.txt then turn it into an array so we can sort it after mapping it to Numbers.
  let numbersInFile = data.split(",").map(Number);

  //sorting the array
  for (let i = 0; i < numbersInFile.length; i++) {
    for (let j = 0; j < numbersInFile.length - 1 - i; j++) {
      if (numbersInFile[j] > numbersInFile[j + 1]) {
        let temp = numbersInFile[j];
        numbersInFile[j] = numbersInFile[j + 1];
        numbersInFile[j + 1] = temp;
      }
    }
  }
  // joining the array so we can start writing it.
  const sortedArrayString = numbersInFile.join(",");

  // writing the string to output.txt
  fs.writeFile("output.txt", sortedArrayString, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
