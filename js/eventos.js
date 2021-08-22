
document.getElementById('form-endereco').addEventListener('submit', (event) => {
  event.preventDefault();

 let valid = true;

  if (INPUT_CEP.value.length < 8) {
    valid = false;
    INPUT_CEP.classList.add('is-invalid');
  }

  if (INPUT_LOGRADOURO.value ==='') {
    valid = false;
    INPUT_LOGRADOURO.classList.add('is-invalid');
  }

  if (INPUT_NUMERO.value ==='') {
    valid = false;
    INPUT_NUMERO.classList.add('is-invalid');
  }

  if (INPUT_BAIRRO.value ==='') {
    valid = false;
    INPUT_BAIRRO.classList.add('is-invalid');
  }

  if (INPUT_CIDADE.value ==='') {
    valid = false;
    INPUT_CIDADE.classList.add('is-invalid');
  }

  if (INPUT_UF.value.length !== 2) {
    valid = false;
    INPUT_UF.classList.add('is-invalid');
  }

  if (valid === true) {
    inserirEndereco();
  }
});

 INPUT_CEP.addEventListener('keyup',() => {
   INPUT_CEP.classList.remove('is-invalid');

   if (INPUT_CEP.value.length ==8) {
     INPUT_CEP.classList.add('is-valid');
   }
 })

 INPUT_LOGRADOURO.addEventListener('keyup',() => {
   INPUT_LOGRADOURO.classList.remove('is-invalid');

   if (INPUT_LOGRADOURO.value.length > 3) {
     INPUT_LOGRADOURO.classList.add('is-valid');
   }
 })

 INPUT_NUMERO.addEventListener('keyup',() => {
   INPUT_NUMERO.classList.remove('is-invalid');

   if (INPUT_NUMERO.value.length > 0) {
     INPUT_NUMERO.classList.add('is-valid');
   }
 })

 INPUT_BAIRRO.addEventListener('keyup',() => {
   INPUT_BAIRRO.classList.remove('is-invalid');

   if (INPUT_BAIRRO.value.length > 0) {
     INPUT_BAIRRO.classList.add('is-valid');
   }
 })

 INPUT_CIDADE.addEventListener('keyup',() => {
   INPUT_CIDADE.classList.remove('is-invalid');

   if (INPUT_CIDADE.value.length > 0) {
     INPUT_CIDADE.classList.add('is-valid');
   }
 })

 INPUT_UF.addEventListener('keyup',() => {
   INPUT_UF.classList.remove('is-invalid');

   if (INPUT_UF.value.length > 1) {
     INPUT_UF.classList.add('is-valid');
   }
 })
