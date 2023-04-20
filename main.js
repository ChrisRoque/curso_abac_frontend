const form = document.getElementById("valida-form");


    form.addEventListener("submit", function(e){
        e.preventDefault();
        
    const numeroUm = document.getElementById("numero-um");
    const numeroDois = document.getElementById("numero-dois");
    const recebeValor = numeroUm.value >  numeroDois.value;
        if (recebeValor){
            alert("A operação não pode ser concluida pois o segundo valor e menor que o primeiro!");
        } else{
            alert("Operação comcluida com susseço!");
            numeroUm.value = "";
            numeroDois.value = "";
        };
    
});

console.log(form);