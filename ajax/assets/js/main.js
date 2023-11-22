const clickAll = document.addEventListener('click', e => {
  let elements = document.querySelectorAll('a'); 
  e.preventDefault();
 const el = e.target;
 const tag = el.tagName;

  if(tag === elements){
    e.preventDefault();
    carregaResultado(el);
  };
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');
  const response = await fetch(href);

  if(response.status !== 200) throw new Error("Error 404!");
  
  const html = await response.text();
  carregaResultado(html);
}

function carregaResultado(response) {
  const result = document.querySelector(".resultado")
    result.innerHTML = response;
}