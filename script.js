document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Salva o usuário no localStorage
        localStorage.setItem('user', JSON.stringify({ username, email, password }));

        // Redireciona para a tela de lista de compras
        window.location.href = 'list.html';
    });

    // Verifica se o usuário já está logado
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        window.location.href = 'list.html';
    }
});
