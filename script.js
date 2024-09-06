// Atualiza as informações do streaming
async function atualizarInformacoes() {
    try {
        const resposta = await fetch('https://api-de-exemplo.com/stream-info');
        const dados = await resposta.json();

        document.getElementById('musicaAtual').innerText = `Tocando agora: ${dados.musica} por ${dados.artista}`;
        document.getElementById('programaAtual').innerText = `Programa: ${dados.programa}`;
    } catch (erro) {
        console.error('Erro ao obter informações de streaming:', erro);
    }
}

// Chama a função a cada 30 segundos para atualizar as informações
setInterval(atualizarInformacoes, 30000);
atualizarInformacoes();

// Função para obter o número de visitantes do PHP
async function obterContadorVisitantes() {
    try {
        const resposta = await fetch('contador.php');
        const texto = await resposta.text();
        document.getElementById('contador').innerText = texto;
    } catch (erro) {
        console.error('Erro ao obter o contador de visitantes:', erro);
    }
}

// Chama a função ao carregar a página
obterContadorVisitantes();