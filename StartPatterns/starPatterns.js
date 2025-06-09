// ****
// ****
// ****
// ****
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row = row + "*";
  }
  // console.log(row);
}

// *
// **
// ***
// ****
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  // console.log(row);
}

// 1
// 12
// 123
// 1234
// 12345
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j;
  }
  // console.log(row);
}

// 1
// 22
// 333
// 4444
// 55555
for (let i = 0; i <= 4; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  // console.log(row);
}

// 12345
// 1234
// 123
// 12
// 1
for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j;
  }
  // console.log(row);
}

// *****
// ****
// ***
// **
// *
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 5; j > i; j--) {
    row = row + "*";
  }
  // console.log(row);
}

// *
// **
// ***
// ****
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  // console.log(row);
}

//     *
//    **
//   ***
//  ****
// *****
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - (i + 1); j++) {
    row = row + " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  // console.log(row);
}

// 1
// 10
// 101
// 1010
// 10101
for (let i = 0; i < 5; i++) {
  let row = "",
    toggle = 1;
  for (let j = 0; j <= i; j++) {
    row += toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  // console.log(row);
}

// 1
// 01
// 010
// 1010
// 10101
let toggle = 1;
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  // console.log(row);
}
