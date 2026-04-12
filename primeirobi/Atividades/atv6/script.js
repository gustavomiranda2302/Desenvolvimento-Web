function adicionarTarefa() {
    const inputTarefa = document.querySelector('.inputTarefa');
    const tarefa = inputTarefa.value;
    
    if (tarefa.trim() === '') {
        alert('Por favor, insira uma tarefa válida.');
        return;
    }
    
    
    const li = document.createElement('li');
    li.textContent = tarefa;
    const ulVazia = document.querySelector('.listaTarefas');
    ulVazia.appendChild(li);
    inputTarefa.value = '';


}
const ulVazia = document.querySelector('.listaTarefas');
ulVazia.addEventListener('click', function(event) {
    event.target.remove();
});
const inputTarefa = document.querySelector('.inputTarefa');

inputTarefa.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});