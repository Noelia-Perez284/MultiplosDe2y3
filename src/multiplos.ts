let n: number;
let multiplos: string = " ";

for (n = 1; n <= 100; n++) {
  let multiplo2: number = n % 2;

  if (multiplo2 === 0) {
    multiplos = multiplos + " " + n;
    //console.log(multiplos);
  } else {
    let multiplo3: number = n % 3;
    if (multiplo3 === 0) {
      multiplos = multiplos + " " + n;
      //console.log(multiplos);
    }
  }
  //console.log(multiplos);
}
console.log(multiplos);
// 2 im
// 3 im
// 4 im
// 5
// 6 im

// si es mult de 2
//     imp ("es mult de 2")
// sino si (es multipño de 3)
//    imp ("es mult de 3")
