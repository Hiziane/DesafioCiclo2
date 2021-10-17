//import { calcular, removerProdutos } from './util.js';
import{resultadoCep} from './modulo.js';


window.onload = function(){
    

    let dadosCep = async function(cep){
                 
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        
            try { 
                let dadosFetch = await fetch(url);    
                let dadosJson = await dadosFetch.json();
                resultadoCep(dadosJson);
                 
            } catch(error){
                alert("Digite um cep válido!"); 
            }
             
    }


    const btnBuscar = document.querySelector("#buscarCep");
    const CEP      = document.querySelector("#NumeroCep");

    btnBuscar.addEventListener('click',function(){
        dadosCep(CEP.value);
    })

    
}