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
// Prueba con números factoriales
QUnit.test("Prueba función factorial 6", function(assert) {
 assert.equal(factorial(6),720, "Factorial de 6");
 assert.equal(factorial(5),120, "Factorial de 5");
 assert.equal(factorial(7),5040, "Factorial de 7");
});
// Prueba con String
var miarray = ["hola", "estamos", "haciendo", "una", "prueba"]
QUnit.test("Prueba Array", function(assert) {
 assert.equal(miarray[0],"hola", "Correcto");
 assert.equal(miarray[1],"estamos", "Correcto");
 assert.equal(miarray[2],"haciendo", "Correcto");
 assert.equal(miarray[3],"una", "Correcto");
 assert.equal(miarray[4],"prueba", "Correcto");
});
/**
 * Objeto del modelo de dominio llamado usuario
 * ID
 * Nombre
 * Email
 * Password
 */
var usuario = new Array();
usuario["Id"] = "01";
usuario["Nombre"] = "Martin";
usuario["Email"] = "m@gmail.com";
usuario["Password"] = "1234";
QUnit.test("Prueba usuario", function(assert) {
 assert.equal(usuario["Id"], "01", "El Id es correcto");
 assert.equal(usuario.Nombre, "Martin", "El Nombre es correcto");//Se puede comparar de las dos formas.
 assert.equal(usuario["Email"], "m@gmail.com", "El Email es correcto");
 assert.equal(usuario.Password, "1234", "La Pass es correcto");
});