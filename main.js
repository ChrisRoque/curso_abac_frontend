$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();

        const novaTarefa = $("#nova-tarefa").val();
        const adicionarTarefa = $("<li></li>");
        $(`<li>${novaTarefa}</li>`).appendTo(adicionarTarefa).appendTo("ul");
        $("#nova-tarefa").val("");

        $("li").click(function(){
            $(this).addClass("riscado")
        })
        
    })
})