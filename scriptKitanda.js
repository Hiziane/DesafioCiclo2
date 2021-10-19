
window.onload = function(){

    let produtos = [
        {descricao: 'Laranja', preco:1.00},
        {descricao: 'Mamão Papaya', preco:3.00},
        {descricao: 'Manga', preco:5.00},
        {descricao: 'Melancia', preco:7.00},
        {descricao: 'Melão', preco:9.00}
    ]

    const ListaProdutos = document.querySelector("#listaProdutos");
    const total = document.querySelector("#total"); // caixinha que mostra o total
    var auxtotal=0;
    let laranja = 0;
    let mamao = 0;
    let melao = 0;
    let melancia = 0;
    let manga = 0;

    (()=>{
        let totalzinho=0;

        // for para ler arrays
        for(let pro of produtos) {// este produtos é a variavel criada na primeira linha, no array 
            const filhoLi = document.createElement('li');
            // for para ler objetos
            for ( listaP in pro){
                if (listaP == 'preco'){
                    ListaProdutos.appendChild(filhoLi).setAttribute =('data-preco',pro[listaP]);
                    //totalzinho+= pro[listaP];
                }else{    
                    ListaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                   // console.log(pro[listaP]);
                }
            }
        }
        //total.value = totalzinho.toFixed(2);
        total.value ="0.00";
    })(produtos)


    
 // ---------------------------- calcular ----------------------

    // function calcular(idProduto, resultado){
            
    //     const preco = document.querySelectorAll("#cestaDoCliente");//(`#${idProduto} > li`); // lista a ser manipulada -- cestaDoCliente
    //     console.log(preco);
    //     const valorresultado = document.querySelector("#total"); // caixinha que mostra o total
    //     //const valorresultado = document.querySelector(`#${resultado}`);

    //     let totalzinho=0;
    //     for (let i of preco){
    //         totalzinho += Number(i.dataset.preco);
    //         //console.log(i.dataset.preco);
    //     }
    //     valorresultado.value = totalzinho.toFixed(2);
    //     //total.value = totalzinho.toFixed(2);
    // }

    //-------------------- fim calcula ----------------------------

    // ------------------ remove na nova lista produtos -------------------
   /* function removerProdutos(id){
        const lista= document.querySelectorAll(`#${id} > li`);
        
        for ( let produto of lista){
            produto.addEventListener('click', function(){
            produto.remove();
            calcular('produtos', 'total');       
            })
        }
    }*/

    // ------------------------- fim remove -------------------------
    //calcular('produtos', 'total');
   // removerProdutos('produtos');
    // inserirProdutos('produtos');


   
    var descendentes = document.querySelectorAll("#listaProdutos li");
    var produtoClicado="";

    for (var i = 0; i < descendentes.length; i++) {
        descendentes[i].addEventListener("click", function (e) {
            produtoClicado = this.innerHTML;
            inserirProdutos(produtoClicado);
           // alert('O elemento clicado foi o ' + produtoClicado);
        })
    }
    

// ------------procedimento para capturar o item que foi clicado na tela----------------
    
function inserirProdutos(produtoClicado){
    const CestaCliente = document.querySelector("#cestaDoCliente");
    
    for(let pro of produtos) {// este produtos é a variavel criada na primeira linha, no array 
        const filhoLi = document.createElement('li');
        // for para ler objetos
        for ( listaP in pro){
        //     //console.log(pro[listaP]); 
            if (('data-descricao',pro[listaP]) == produtoClicado){
        //         
                //calcular('produtoClicado', 'total');
                if (produtoClicado == "Laranja" && laranja==0){
                    auxtotal +=  1;
                    laranja +=1;
                    CestaCliente.appendChild(filhoLi).textContent = produtoClicado;
                    //console.log(laranja);
                } else{
                    if (produtoClicado == "Mamão Papaya" && mamao==0){
                        auxtotal += 3;
                        mamao +=1;
                        CestaCliente.appendChild(filhoLi).textContent = produtoClicado;
                        //console.log(auxtotal);
                    }else{
                        if (produtoClicado == "Manga" && manga==0){
                            auxtotal+= 5;
                            manga +=1;
                            CestaCliente.appendChild(filhoLi).textContent = produtoClicado;
                            //console.log(auxtotal);
                        }else{
                             if (produtoClicado == "Melancia" && melancia==0){
                                auxtotal+=  7;
                                melancia +=1;
                                CestaCliente.appendChild(filhoLi).textContent = produtoClicado;
                            }else{
                                if (produtoClicado == "Melão" && melao==0){
                                    auxtotal+= 9;
                                    melao +=1;
                                    CestaCliente.appendChild(filhoLi).textContent = produtoClicado;
                                }else{
                                    alert("Produto já incluido!");
                                }
                            } 
                        }
                    }
                }
            }
        }    
    }
    total.value =Number(auxtotal.toFixed(2));
                
}           

//------------------------ fim do procedimento-----------------------------------------------

}