document.getElementById('formVaga').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Captura os valores dos campos do formulário
    const placa = document.getElementById('placa').value;
    const proprietario = document.getElementById('proprietario').value;
    const apartamento = document.getElementById('apartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const vaga = document.getElementById('vaga').value;

    // Exibe os valores no console
    console.log(`Placa: ${placa}`);
    console.log(`Proprietário: ${proprietario}`);
    console.log(`Apartamento: ${apartamento}`);
    console.log(`Bloco: ${bloco}`);
    console.log(`Modelo: ${modelo}`);
    console.log(`Cor: ${cor}`);
    console.log(`Vaga: ${vaga}`);

    // Exibe o pop-up de confirmação
    alert('Cadastro realizado com sucesso!');
    
    // Limpa o formulário
    this.reset();
});
