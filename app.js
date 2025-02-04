//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    nomeInput.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>Amigo Secreto: ${sorteado}</li>`;
}

