function resultadoCep(dadosCep){
    //console.log(dadosCep);
    //if (dadosCep==true)  {
         //alert("CEP não encontrado.");

    // }else{
        for( let campo in dadosCep ) {
            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value= dadosCep[campo];
                //console.log(dadosCep[campo]);
            } 
        }
     //}
}

export {resultadoCep};