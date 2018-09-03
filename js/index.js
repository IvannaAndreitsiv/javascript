// const productName = 'iPhone X';
// alert(productName);

// productName = 'Nokia 3200';
// alert(productName);


// const userName = prompt('Enter your name');
// const greetings = userName + ', hello!';

// alert(greetings);

// const userAge = parseFloat(prompt('Enter your age'));
// alert(userAge);
// // const nextAge = userAge + 1;
// const nextAge = addOne(userAge);
// alert(nextAge);

// function addOne(val) {
//     const result = val + 1;
//     return result;
// }

// // Should increase price by 10%
// function calPrice(price) {
//     const result = price * 1.1;
//     return result;
// }

// const oldPrice = parseFloat(prompt('Enter price'));
// const newPrice = calPrice(oldPrice);
// alert(newPrice);


//function checkAge(age) {
   // if (age >= 18 && age < 100) {
       // return 'You are adult';
   // } else if (age > 100) {
      // return 'You are middle age';
   // } else {
   //     return 'You are kid';
    //}
//}

//const userAge = parseInt(prompt('Enter your age'));
//const message = checkAge(userAge);
//alert(message);

// Math.sqrt(4)

function square_equation() {
  var a = document.square.square_a.value;
  var b = document.square.square_b.value;
  var c = document.square.square_c.value;
  var sol = document.getElementById("square_sol");

  var d = b * b - 4 * a * c;
  if ( d < 0 ) {
    string = "a pair of complex conjugate roots<br>x<sub>1</sub> = (";
    string += - b / ( 2 * a );
    string += ", ";
    string += Math.sqrt( -d ) / ( 2 * a );
    string += "), x<sub>2</sub> = (";
    string += - b / ( 2 * a);
    string += ", ";
    string += - Math.sqrt( -d ) / ( 2 * a );
    string += ").";
  } else {
      if ( d == 0 ) {
        string = "two identical real roots:<br>x<sub>1</sub> = x<sub>2</sub> = ";
        string += -b / ( 2 * a );
        string += ".";
      } else {
        string = "two different real roots:<br>x<sub>1</sub> = ";
        string += -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
        string += ", x<sub>2</sub> = ";
        string += -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
        string += ".";
      }
  }
  sol.innerHTML = string;
}