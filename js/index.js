// scripts.js
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(8, 7);
var triangle3Area = getTriangleArea(0, 11);
function getTriangleArea(a, h){
  if ( (a <= 0) || (h <= 0) ){
    return 'Nieprawidłowe dane';
  }
  else {
    return (a*h/2);
  }
}
console.log( getTriangleArea(10,6) )

