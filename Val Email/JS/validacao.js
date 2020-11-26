function validaForm(frm) {
        if(frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 3) {
            
            alert("Por favor, indique o seu nome.");
            
            frm.nome.focus();
           
            return false;
        }
        //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
        if(frm.email.value.indexOf("@gmail") == -1 &&
          frm.email.value.indexOf("@hotmail") == -1 &&
          frm.email.value.indexOf("@outlook") == -1 ||
          frm.email.valueOf.indexOf(".") == -1 ||
          frm.email.value == "" ||
          frm.email.value == null) {
            alert("Por favor, indique um e-mail válido.");
            frm.email.focus();
            return false;
        }
        else {
            alert("Formulário enviado.");
        }
    }