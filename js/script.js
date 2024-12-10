function validarFormulario() {
    // Obtém os valores dos campos
    const nome = document.querySelector('input[name="nome"]');
    const email = document.querySelector('input[name="email"]');
    const endereco = document.querySelector('input[name="endereco"]');
    const telefone = document.querySelector('input[name="telefone"]');

    // Verificar se os campos estão preenchidos

    // Validação do Nome
    if (nome.value.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        return false; // Impede o envio do formulário
    }

    // Validação do Email
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value.trim() === "" || !regexEmail.test(email.value)) {
        alert("Por favor, preencha o campo Email com um email válido.");
        return false; // Impede o envio do formulário
    }

    // Validação do Endereço
    if (endereco.value.trim() === "") {
        alert("Por favor, preencha o campo Endereço.");
        return false; // Impede o envio do formulário
    }

    // Validação do Telefone
    const regexTelefone = /^\d{10,11}$/; // Telefone com 10 ou 11 dígitos
    if (telefone.value.trim() === "" || !regexTelefone.test(telefone.value)) {
        alert("Por favor, preencha o campo Telefone com um número válido (10 ou 11 dígitos).");
        return false; // Impede o envio do formulário
    }

    // Se tudo estiver válido, exibe o alert de sucesso
    alert("Cadastro realizado com sucesso!");
    return true; // Permite o envio do formulário
}
 