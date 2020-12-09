function menuHamburguer(x) {
  x.classList.toggle("clickMenu");
}

function confirma(){
  window.alert("Enviado Com Sucesso");
}

function comp1(){
  document.contato.c_nome.value = document.contato.p_nome.value;
}

function comp2(){
  document.contato.c_nome.value = document.contato.c_nome.value + " " + document.contato.u_nome.value;
}