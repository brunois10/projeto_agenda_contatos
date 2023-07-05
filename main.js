const form = document.getElementById('form-contatos');
const imgSalvo = '<img src="./imagens/telefone.png" alt="Emoji telefone" />';
const nomes = [];
const numeros = [];

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`Este contato: ${inputNomeContato.value} já foi inserido`);
    }   else {
        nomes.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${imgSalvo}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
