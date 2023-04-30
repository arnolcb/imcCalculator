function calcularIMC() {
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;
  var imc = peso / ((altura / 100) * (altura / 100));
  document.getElementById("resultado").value = imc.toFixed(2);
  if (imc < 18.5) {
    document.getElementById("mensaje").textContent = "Tu IMC es bajo (delgado)";
  } else if (imc >= 18.5 && imc < 25) {
    document.getElementById("mensaje").textContent = "Tu IMC es saludable";
  } else if (imc >= 25 && imc < 30) {
    document.getElementById("mensaje").textContent = "Tu IMC indica sobrepeso";
  } else {
    document.getElementById("mensaje").textContent = "Tu IMC indica obesidad";
  }
}
