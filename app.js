
function pesquisar(){

let section = document.getElementById("resultados-pesquisa")
console.log();
 
let campoPesquisa = document.getElementById("campo-pesquisa").value;


 if(campoPesquisa==""){

    section.innerHTML = " <p> pesquisa sem resultado</p>"

    return
}
   //campoPesquisa = campoPesquisa.toLowerCase();
  
   let resultados = "";
   //let tags
   //let titulo = "";
   //let descricao = "";

for (let dado of dados){  

    //titulo = dado.titulo.toLowerCase();
    //descricao = dado.descricao.toLowerCase();

    if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) 
        || dado.tags.includes(campoPesquisa)){

       resultados += 
       
       `<div class="item-resultado">
                    <h2> 
                        
                        <a href="#" target="_blank"> ${dado.titulo} </a>
                
                    </h2>
            
                    <p class="descricao-meta"> ${dado.descricao}</p>
            
                    <a href="  https://pt.wikipedia.org/wiki/C%C3%A3o   "  target="_blank">Mais Informações </a>

         </div>
       `;  
    }

    
        
        
    }
        
    if (!resultados){

        resultados = "<p>nada foi encontrado!</p>"
    } 

section.innerHTML = resultados;

}
    








        









                                                    


 
    
