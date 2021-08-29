function buscarEstabelecimentos() {
  return JSON.parse(
   localStorage.getItem('estabelecimentos') || '[]'
 );
}

function salvarEstabelecimentos(lista) {
  localStorage.setItem('estabelecimentos', JSON.stringify(lista));
}

function abrirModalEditar(id) {
  let dados = buscarEstabelecimentos ()[id];

  document.getElementById('editar-nome').innerHTML = dados.nome;
  document.getElementById('editar-id').value = id;


  INPUT_NOME.value = dados.nome;
  INPUT_CEP.value = dados.cep;
  INPUT_LOGRADOURO.value = dados.logradouro;
  INPUT_NUMERO.value = dados.numero;
  INPUT_BAIRRO.value = dados.bairro;
  INPUT_CIDADE.value = dados.cidade;
  INPUT_UF.value = dados.uf;
}

function editarItem() {
   event.preventDefault();

  let id = document.getElementById('editar-id').value;
  let lista = buscarEstabelecimentos();

  lista[id].nome = INPUT_NOME.value;
  lista[id].cep = INPUT_CEP.value;
  lista[id].logradouro = INPUT_LOGRADOURO.value;
  lista[id].numero = INPUT_NUMERO.value;
  lista[id].bairro = INPUT_BAIRRO.value;
  lista[id].cidade = INPUT_CIDADE.value;
  lista[id].uf = INPUT_UF.value;

  salvarEstabelecimentos(lista);

  $('#tabela').DataTable().destroy();
  atualizarTabela();
  $('#tabela').DataTabela().draw();
}

function abrirModalExcluir(id, nome) {
  document.getElementById('excluir-nome').innerHTML = nome;
  document.getElementById('excluir-id').value = id;
}

function excluirItem() {
  let lista = buscarEstabelecimentos();

   let id = document.getElementById('excluir-id').value;
   lista.splice(id, 1);

   salvarEstabelecimentos(lista);

   $('#tabela').DataTable().destroy();
   atualizarTabela();
   $('#tabela').DataTable().draw();
}

function atualizarTabela() {
  let registros = buscarEstabelecimentos();

  TABELA.innerHTML = '';

  registros.map((cadaEnd, posicao) => {
    TABELA.innerHTML += `
    <tr>
     <td>${cadaEnd.nome}</td>
     <td>${cadaEnd.cep}</td>
     <td>${cadaEnd.logradouro}</td>
     <td>${cadaEnd.numero}</td>
     <td>${cadaEnd.bairro}</td>
     <td>${cadaEnd.cidade}</td>
     <td>${cadaEnd.uf}</td>
     <td>
       <button data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="abrirModalEditar(${posicao})" class="btn btn-sm btn-warning">Editar</button>
       <button data-bs-toggle="modal" data-bs-target="#modalExcluir" onclick="abrirModalExcluir(${posicao},'${cadaEnd.nome}')"class="btn btn-sm btn-danger">Excluir</button>
     </td>
    </tr>
  `;
  })

  $('#tabela').DataTable();
}

  function inserirEndereco() {
    let dados = {
      nome: INPUT_NOME.value,
      cep: INPUT_CEP.value,
      logradouro: INPUT_LOGRADOURO.value,
      numero: INPUT_NUMERO.value,
      bairro: INPUT_BAIRRO.value,
      cidade: INPUT_CIDADE.value,
      uf: INPUT_UF.value,
    }

    let lista = buscarEstabelecimentos();

    lista.push(dados);

    salvarEstabelecimentos(lista);

    alert('Novo estabelecimento inserido');

    document.getElementById('form-endereco').reset();


    let inputs = document.getElementsByClassName('is-valid')

    while(inputs.length > 0){
      inputs[0].classList.remove('is-valid');
    }
  }
