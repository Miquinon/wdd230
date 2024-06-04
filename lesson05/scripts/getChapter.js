const input = document.getElementById("fav-chap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const  clearButton= document.querySelector("#clear-all");


button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus;
        });
        input.focus();
        input.value = '';
    }
});

clearButton.addEventListener('click', () => {
  list.innerHTML='';
  input.focus;
});