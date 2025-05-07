const nameCliente = document.querySelector('#cliente');
const nameServico = document.querySelector('#tipoServico');
const contatoCliente = document.querySelector('#contato')
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
        contato: contatoCliente.value,
        data: dataServico.value.split('-').reverse().join('/'),
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
    contatoCliente.value = '';
    dataServico.value = '';
    valorServico.value = '';
    descService.value = '';
    selectStatus.value = '';
    prioridadeService.value = '';

    let container = document.querySelector('.table-responsive');
    let table = document.querySelector('#tabelaServicos');

    listServices.forEach(item => {
        table.innerHTML += `<tr>
        <td>${item.nomeCliente}</td>
        <td>${item.contato}</td>
        <td>${item.nomeServico}</td>
        <td>${item.descricao}</td>
        <td>${item.data}</td>
        <td>R$ ${item.valor}</td>
        <td>${item.prioridade}</td>
        <td><span class="status status-success">${item.status}</span></td>
        <td>
          <div class="table-actions">
            <button class="action-btn" title="Visualizar"><i class="fas fa-eye"></i></button>
            <button class="action-btn" title="Editar"><i class="fas fa-edit"></i></button>
            <button class="action-btn" title="Excluir"><i class="fas fa-trash"></i></button>
          </div>
        </td>
      </tr>`
    })

   
});

