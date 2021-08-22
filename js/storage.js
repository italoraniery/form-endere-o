function atualizarTabela() {
  let registros = JSON.parse(
    localStorage.getItem('estabelecimentos') || '[]'
  );

  registros.map(cadaEnd => {
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
       <button class="btn btn-sm btn-warning">Editar</button>
       <button class="btn btn-sm btn-danger">Excluir</button>
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

    let lista = JSON.parse(
      localStorage.getItem('estabelecimentos') || '[]'
    );

    lista.push(dados);

    localStorage.setItem('estabelecimentos', JSON.stringify(lista));
  }
