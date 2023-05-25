const allToDos = document.querySelector('.all_todos')

const newItem = document.querySelector('.item_input')

function addNewItem() {
    const para = document.createElement('p')
    para.innerHTML = newItem.value
    allToDos.appendChild(para)
}