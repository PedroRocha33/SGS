const nameCliente = document.querySelector('#cliente');
const nameServico = document.querySelector('#tipoServico');
const contatoCliente = document.querySelector('#contato');
const dataServico = document.querySelector('#data');
const valorServico = document.querySelector('#valor');
const descService = document.querySelector('#descricao');
const selectStatus = document.querySelector('#status');
const prioridadeService = document.querySelector('#prioridade');
const btnAdd = document.querySelector('#btn-add-service');

const table = document.querySelector('#tabelaServicos');
let listServices = [];

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();

    const service = {
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
    renderService(service);

    // Limpa os inputs
    nameCliente.value = '';
    nameServico.value = '';
    contatoCliente.value = '';
    dataServico.value = '';
    valorServico.value = '';
    descService.value = '';
    selectStatus.value = '';
    prioridadeService.value = '';
});

function renderService(service) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${service.nomeCliente}</td>
        <td>${service.contato}</td>
        <td>${service.nomeServico}</td>
        <td>${service.descricao}</td>
        <td>${service.data}</td>
        <td>R$ ${service.valor}</td>
        <td>${service.prioridade}</td>
        <td><span class="status status-success">${service.status}</span></td>
        <td>
          <div class="table-actions">
            <button class="action-btn visualizar-btn" title="Visualizar"><i class="fas fa-eye"></i></button>
            <button class="action-btn" title="Editar"><i class="fas fa-edit"></i></button>
            <button class="action-btn" title="Excluir"><i class="fas fa-trash"></i></button>
          </div>
        </td>
    `;

    table.appendChild(row);

    // Agora que o botão existe, adicionamos o evento
    const btnVisualizar = row.querySelector('.visualizar-btn');
    btnVisualizar.addEventListener('click', () => {
        showModal(service);
    });
}

function showModal(service) {
    const janela = `
    <div id="fog" style="
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.6); display: flex;
        justify-content: center; align-items: center; z-index: 9999;
    ">
      <div class="modal-content" style="
          background: #fff; padding: 30px; border-radius: 12px;
          max-width: 600px; width: 90%; box-shadow: 0 0 20px rgba(0,0,0,0.3);
          font-family: Arial, sans-serif;
      ">
        <h2 style="margin-top: 0; color: #333;">Detalhes do Serviço</h2>
        <p><strong>Cliente:</strong> ${service.nomeCliente}</p>
        <p><strong>Contato:</strong> ${service.contato}</p>
        <p><strong>Serviço:</strong> ${service.nomeServico}</p>
        <p><strong>Descrição:</strong> ${service.descricao}</p>
        <p><strong>Data:</strong> ${service.data}</p>
        <p><strong>Valor:</strong> R$ ${service.valor}</p>
        <p><strong>Prioridade:</strong> ${service.prioridade}</p>
        <p><strong>Status:</strong> ${service.status}</p>
        <div style="text-align: right;">
          <button id="fechar-modal" style="
              margin-top: 20px; padding: 10px 20px;
              background-color: #ff4d4d; color: white;
              border: none; border-radius: 5px;
              cursor: pointer; font-size: 16px;
          ">Fechar</button>
        </div>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', janela);

    document.querySelector('#fechar-modal').addEventListener('click', () => {
        document.querySelector('#fog').remove();
    });
}
