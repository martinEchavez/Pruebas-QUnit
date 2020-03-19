function factorial(n) {
 if (n % 1 == 0) {
  if (n > 0) {
   return n*factorial(n-1);
  } else {
   return 1;
  }
 } else {
  return -1;
 }
}
QUnit.test("Prueba función factorial 6", function(assert) {
 assert.equal(factorial(6),720, "Factorial de 6");
 assert.equal(factorial(5),120, "Factorial de 5");
 assert.equal(factorial(7),5041, "Factorial de 7");
});