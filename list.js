document.addEventListener('DOMContentLoaded', function() {
    const addItemForm = document.getElementById('add-item-form');
    const shoppingList = document.getElementById('shopping-list');
    const logoutButton = document.getElementById('logout-button');

    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const itemInput = document.getElementById('item-input');
        const itemText = itemInput.value;

        // Adiciona o item na lista
        const li = document.createElement('li');
        li.textContent = itemText;
        shoppingList.appendChild(li);

        itemInput.value = '';
    });

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    });

    // Verifica se o usuário está logado
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'index.html';
    }
});
