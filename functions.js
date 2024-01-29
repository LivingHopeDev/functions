// Find the square of a number
const findSquare = (a) => {
  return console.log(a ** 2);
};

findSquare(12);

// convert Celsius to Fahrenheit
const calFahrenheit = (Celsius) => {
  const result = Celsius * (9 / 5) + 32;
  return console.log(result);
};

calFahrenheit(20);

// find the area and parameter
const circleValues = (r) => {
  const areaOfCircle = Math.PI * r ** 2;
  const perimeterOfCircle = 2 * Math.PI * r;

  const result = `The area of the circle is ${areaOfCircle} and the perimeter is ${perimeterOfCircle}`;
  console.log(result);
};
circleValues(6);

// Simple interest
// p = principal, i= interest, r= rate, time=t
const simpleInt = (p, r, t) => {
  const i = (p * r * t) / 100;
  return console.log(i);
};

simpleInt(2000, 5, 2);

// Area of a rectangle
const reactangleArea = (l, b) => {
  const result = l * b;
  return console.log(result);
};

reactangleArea(4, 5);
