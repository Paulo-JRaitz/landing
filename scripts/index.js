

const ano = new Date().getFullYear();
let anoAtual = document.getElementById('year')
anoAtual.innerHTML = `${ano} `;

const content = document.getElementById('content')
const contents = document.getElementById('contents')
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('nome').value;
  let mail = document.getElementById('email').value;
  let data = {
    name,
    mail
  }

  let finalData = JSON.stringify(data);
  localStorage.setItem('lead', finalData);


  var loader = `
  <style>
  .loader {
    border: 16px solid #31323b;
  border-top: 16px solid #9e9e9e;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
    0 % {
      transform: rotate(0deg);
    }
  100% {
    transform: rotate(360deg);
  }
}
</style>  
`
  contents.innerHTML = loader;

  setTimeout(() => {
    contents.innerHTML = `
    <style>
    .content strong {
      color: #e1ac1c;
    }
    .content {
      display: flex;
      flex-direction: column;
    }
  </style>
  <div class="content">
    <h1>Obrigado <strong> ${name} </strong> Pela sua inscrição!</h1>
    <p>Em breve traremos atualizações...</p>
  </div>
  
   `
  }, 1000);
})
