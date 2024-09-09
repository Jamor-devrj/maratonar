function pesquisar(){
  let sector = document.getElementById("resultPesquisa");
  
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  campoPesquisa = campoPesquisa.toLowerCase();

  let result = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  
  if (campoPesquisa == ""){
    sector.innerHTML = `
    <div class="item-resultado">            
      <h2>Busca vazia!</h2>          
      <p class="descricao-meta">Digite sua pesquisa novamente no campo acima.</p>
    </div>
    `;
    return
  }  

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){    
      result += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>          
          <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  sector.innerHTML = result; 

  if(!result){    
    sector.innerHTML = `
    <div class="item-resultado">
        <h2>
          Desculpa, não encontramos o que procura.
        </h2> 
        <p class="descricao-meta">Digite uma nova pesquisa no campo acima.</p>   
      </div>   
    `;
    return
  }
}
 