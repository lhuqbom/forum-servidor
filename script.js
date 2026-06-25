function salvarPosts() {
    localStorage.setItem(
        "posts",
        document.querySelector(".forum").innerHTML
    );
}

function carregarPosts() {
    let posts = localStorage.getItem("posts");

    if (posts) {
        document.querySelector(".forum").innerHTML = posts;
    }
}

function curtir(botao) {
    let numero = parseInt(
        botao.innerText.match(/\d+/)[0]
    );

    numero++;

    botao.innerText = `❤️ Curtir (${numero})`;

    salvarPosts();
}

function criarTopico() {
    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let titulo = document.getElementById("titulo").value;
    let mensagem = document.getElementById("mensagem").value;

    if (!nome || !titulo || !mensagem) {
        alert("Preencha tudo!");
        return;
    }

    let post = document.createElement("div");

    post.className = "topico";

    post.innerHTML = `
        <h3>${categoria} - ${titulo}</h3>
        <small>Por: ${nome}</small>
        <p>${mensagem}</p>

        <button onclick="curtir(this)">
            ❤️ Curtir (0)
        </button>

        <button onclick="this.parentElement.remove(); salvarPosts();">
            🗑️ Apagar
        </button>
        <button onclick="this.parentElement.appendChild(this); salvarPosts();">
            🔄 Motivo
        </button>
    `;

    document.querySelector(".forum").appendChild(post);

    salvarPosts();

    document.getElementById("nome").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("mensagem").value = "";
}

window.onload = carregarPosts;
