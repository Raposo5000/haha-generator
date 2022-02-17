const calculateRisada = function (risada, tamanho) {
  const resultRisada = [risada];
  for (let i = 1; i <= tamanho; i++) {
    resultRisada.push(risada);
  }
  return resultRisada.join("");
};

const gerarRisada = function (tipo, tamanho) {
  const tipos = {
    kkk: "kkk",
    kkkjjj: "kkkjjj",
    ashua: "ashua",
    hueBR: "hue",
    rs: "rs",
    haha: "haha"
  };

  const tamanhos = {
    Pequena: 3,
    Média: 8,
    Grande: 25,
    "Capotou o Celtinha": 50,
  };

  const risada = calculateRisada(tipos[tipo], tamanhos[tamanho]);
  return risada;
};

const gerar = function () {
  let tamanho_risada = document.getElementById("tamanho-risada");
  let tipo_risada = document.getElementById("tipo-risada");
  let risada_gerada = document.getElementById("risada-gerada");

  const risada = gerarRisada(tipo_risada.value, tamanho_risada.value);
  risada_gerada.innerHTML = risada;
};
