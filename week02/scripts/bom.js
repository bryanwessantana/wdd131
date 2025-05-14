const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// DOMContentLoaded should be outside and run once
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM fully loaded and parsed. Ready to run JS.');
});

button.addEventListener('click', function () {

    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
    }

    input.focus();
});
