function curtir(botao) {
    // CORRIGIDO: Agora pega o texto de dentro do botão (botao.innerText) 
    // em vez da variável 'texto' que não existia.
    let numero = parseInt(botao.innerText.match(/\d+/)[0]);
    
    numero++;
    
    botao.innerText = `❤️ Curtir (${numero})`;
    
    salvarPosts();
}

function criarTopico() {
    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let titulo = document.getElementById("titulo").value;
    let mensagem = document.getElementById("mensagem").value;
    
    if (nome === "" || titulo === "" || mensagem === "") {
        alert("Preencha tudo!");
        return;
    }
    
    let post = document.createElement("div");
    post.classList.add("topico");
    
    post.innerHTML = `
        <h3>${categoria} - ${titulo}</h3>
        <small>Por: ${nome}</small>
        <p>${mensagem}</p>
        
        <button onclick="curtir(this)">
            ❤️ Curtir (0)
        </button>
        
        <button onclick="this.parentElement.remove(); salvarPosts()">
            🗑️ Apagar
        </button>
    `;
    
    document.querySelector(".forum").appendChild(post);
    
    // Limpa os campos do formulário após postar
    document.getElementById("nome").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("mensagem").value = "";
    
    salvarPosts();
}

window.onload = function () {
    carregarPosts();
};
