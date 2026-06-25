function salvarPosts() {
    let forum = document.querySelector(".forum");
    localStorage.setItem("posts", forum.innerHTML);
}

function carregarPosts() {
    let forum = document.querySelector(".forum");
    let postsSalvos = localStorage.getItem("posts");

    if (postsSalvos) {
        forum.innerHTML += postsSalvos;
    }
}

function criarTopico() {
    let nome = document.getElementById("nome").value;
    let titulo = document.getElementById("titulo").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || titulo === "" || mensagem === "") {
        alert("Preenche tudo!");
        return;
    }

    let post = document.createElement("div");
    post.classList.add("topico");

    post.innerHTML = `
        <h3>${titulo}</h3>
        <small>Por: ${nome}</small>
        <p>${mensagem}</p>
        <button onclick="this.parentElement.remove(); salvarPosts()">🗑️ Apagar</button>
    `;

    document.querySelector(".forum").appendChild(post);

    document.getElementById("nome").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("mensagem").value = "";

    salvarPosts();
}

window.onload = function () {
    carregarPosts();
};
