const form = document.getElementById('form-contact');
const contatos = [];
var linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    handleSubmit(e);
});

function adicionaLinha() {
    const inputContact = document.getElementById('add-contact');
    const inputNumber = document.getElementById('number-contact');
    const errorMessage = document.querySelector('.error-message');

    console.log('Contatos existentes:', contatos);

    // Verifica se o contato já existe
    if (contatos.includes(inputContact.value)) {
        errorMessage.style.display = 'block';
    } else {
        // Adiciona o novo contato à lista
        contatos.push(inputContact.value);

        // Crie uma string HTML para a nova linha da tabela
        const novaLinha = '<tr><td>' + inputContact.value + '</td><td>' + inputNumber.value + '</td></tr>';

        // Adicione a nova linha à variável 'linhas'
        linhas += novaLinha;

        errorMessage.style.display = 'none';
    }

    inputContact.value = '';
    inputNumber.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function handleSubmit(e) {
    e.preventDefault();
    const errorMessage = document.querySelector('.error-message');

    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}