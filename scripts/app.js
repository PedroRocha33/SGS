const nameCliente = document.querySelector('#cliente');
const nameServico = document.querySelector('#tipoServico');
const dataServico = document.querySelector('#data');
const valorServico = document.querySelector('#valor');
const descService = document.querySelector('#descricao');
const selectStatus = document.querySelector('#status');
const prioridadeService = document.querySelector('#prioridade');
const btnAdd = document.querySelector('#btn-add-service');

let listServices = [];

btnAdd.addEventListener('click', (event) => {
    console.log("Entrou")
    event.preventDefault(); // impede o comportamento padrão do botão (como enviar formulário)

    let service = {
        nomeCliente: nameCliente.value,
        nomeServico: nameServico.value,
        data: dataServico.value,
        valor: valorServico.value,
        descricao: descService.value,
        status: selectStatus.value,
        prioridade: prioridadeService.value
    };

    listServices.push(service);

    console.log(listServices); // opcional: para verificar no console se está funcionando

    //Limpa os inputs
    nameCliente.value = '';
    nameServico.value = '';
    dataServico.value = '';
    valorServico.value = '';
    descService.value = '';
    selectStatus.value = '';
    prioridadeService.value = '';

});

