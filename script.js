function curtir(botao) {
    let count = parseInt(botao.dataset.curtidas || 0) + 1;
    botao.dataset.curtidas = count;
    botao.innerHTML = `❤️ Curtir (${count})`;
    salvarPosts();
}

function criarTopico() {
    const nome = document.getElementById("nome").value.trim();
    const categoria = document.getElementById("categoria").value;
    const titulo = document.getElementById("titulo").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !titulo || !mensagem) {
        alert("❌ Preencha todos os campos!");
        return;
    }

    const post = document.createElement("div");
    post.classList.add("topico");
    post.innerHTML = `
        <h3>${categoria} - ${titulo}</h3>
        <small>Por: ${nome} • Agora</small>
        <p>${mensagem}</p>
        
        <button class="btn-curtir" onclick="curtir(this)" data-curtidas="0">
            ❤️ Curtir (0)
        </button>
        <button class="btn-apagar" onclick="apagarPost(this)">
            🗑️ Apagar
        </button>
    `;

    document.getElementById("forum").prepend(post); // novo no topo

    // Limpar formulário
    document.getElementById("nome").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("mensagem").value = "";

    salvarPosts();
}

function apagarPost(botao) {
    if (confirm("Tem certeza que quer apagar este tópico?")) {
        botao.parentElement.remove();
        salvarPosts();
    }
}

function salvarPosts() {
    const forum = document.getElementById("forum");
    localStorage.setItem("meuForumPosts", forum.innerHTML);
}

function carregarPosts() {
    const postsSalvos = localStorage.getItem("meuForumPosts");
    if (postsSalvos) {
        document.getElementById("forum").innerHTML = postsSalvos;
    }
}

// Carregar ao iniciar
window.onload = carregarPosts;
