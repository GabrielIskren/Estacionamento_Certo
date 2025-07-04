class Estacionamento {
  constructor(tempo) {
    this.tempo = parseFloat(tempo);
  }

  calcularTempo() {
    let preco = 0;

    if (this.tempo < 1) {
      return { mensagem: "Tempo insuficiente" };
    }

    if (this.tempo <= 30) {
      preco = this.tempo * 1.00;
    } else if (this.tempo <= 60) {
      preco = this.tempo * 1.75;
    } else if (this.tempo <= 120) {
      preco = this.tempo * 3.00;
    } else {
      return { mensagem: "Tempo excede o máximo permitido (120 minutos)" };
    }

    return {
      mensagem: `Tempo de uso: ${this.tempo} minutos <br> Portanto são R$ ${preco.toFixed(2)}`
    };
  }
}

function mostrarResultado() {
  const tempo = document.getElementById("tempo").value;
  const resultadoDiv = document.getElementById("resultado");

  if (!tempo || tempo <= 0) {
    resultadoDiv.innerHTML = `<p class="erro">Por favor, insira um tempo válido.</p>`;
    return;
  }

  const estacionamento = new Estacionamento(tempo);
  const resultado = estacionamento.calcularTempo();

  if (resultado.erro) {
    resultadoDiv.innerHTML = `<p class="erro">${resultado.mensagem}</p>`;
  } else {
    resultadoDiv.innerHTML = `<p>${resultado.mensagem}</p>`;
  }
}


