//Vai referênciar com os elementos
const input = document.getElementById('input__content-header');
const trs = document.querySelectorAll('.post');

console.log(trs)

// Criar um evento no meu input
// quando digitar um local específico, irá mostrar o post do local digitado
input.addEventListener('input', () => {
    const search = input.value.toLowerCase(); // vai pegar o valor inserido dentro do input e deixar tudo em minúsculo
    trs.forEach(post => {
        const matches = post.textContent.toLowerCase().includes(search);
        post.style.display = matches ? 'block' : 'none';
    });
});