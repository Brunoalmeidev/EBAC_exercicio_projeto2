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

    if (contatos.includes(inputContact.value)) {
        document.querySelector('.error.message').style.display = 'block';
    } else {
        contatos.push(inputContact.value);

        const novaLinha = '<tr><td>' + inputContact.value + '</td><td>' + inputNumber.value + '</td></tr>';
    }

    inputContact.value = '';
    inputNumber.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function handleSubmit(e) {
    e.preventDefault();
    const errorMessage = document.querySelector('.error-message');

    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 6000);
}