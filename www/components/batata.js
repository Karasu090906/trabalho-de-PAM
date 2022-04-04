let nome = document.getElementById('nome');
function retorno(){
        }

        navigator.notification.alert("entrar", retorno, "entrou com o nome " +nome)

    });
     document.querySelector("sair").addEventListener("click", function(){
            navigator.vibrate(2000);
                 navigator.app.exitApp(); 

                    
                    
        document.querySelector("verificar").addEventListener("click", function(){
        let idade = parseInt(document.querySelector("idade").value);
        function retorno(){

        }

        if(idade<18){
        
            if(idade<0){
                navigator.vibrate(3000);
            }else{
                navigator.notification.beep(idade);
            }
        
        }else if(idade>=18){
            navigator.notification.confirm("diga seu genêro.", onConfirm, "Pergunta 2", ["M", "F"]);
            function onConfirm(buttonIndex){
                if(buttonIndex == 1){
                    navigator.notification.alert("já se alistou?", retorno, "foi avisado.", "Ok");
                } else{
                    navigator.notification.alert("Já tirou sua habilitação?", retorno, "foi avisada.", "Ok");
                }
        }
    }
    });
}