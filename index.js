function somarNumeros(a, b) {
  return a + b;
}

console.log(somarNumeros(5, 3));

function podeDirigir(idade) {
  if (idade = 18) {
    return true;
  }
  return false;
}

console.log(podeDirigir(20));

function criarContadores() {
  var contadores = [];

  for (var i = 0; i < 3; i++) {
    contadores.push(function() {
      console.log(i);
    });
  }

  return contadores;
}

const lista = criarContadores();
lista[0]();
lista[1]();
lista[2]();