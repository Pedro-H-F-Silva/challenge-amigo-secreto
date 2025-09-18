let amigos = [];
function adicionarAmigo() {
   let campo = document.querySelector ('input').value;
   if (campo === '') {
     alert ('Por favor, Insira um nome!');
   } else {
    amigos.push(campo);
   }
   limparCampo();
  listaDeAmigos(); 
  }

   
function listaDeAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
   for (let i = 0; i<amigos.length; i++ ){
   lista.innerHTML += '</li>' + amigos[i] + '<li>';
   }
  } 



function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function sortearAmigo() {
    let amigoEscolhido = Math.floor(Math.random() * amigos.length);
   let nomeSorteado = amigos[amigoEscolhido];
    (`${nomeSorteado}` );
  let resultadoAmigo = document.getElementById('resultado');
resultadoAmigo.innerHTML = (`${nomeSorteado}`);
}

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o input pelo id usado no HTML
    let input = document.getElementById('amigo');
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            adicionarAmigo();
        }
    });
});

