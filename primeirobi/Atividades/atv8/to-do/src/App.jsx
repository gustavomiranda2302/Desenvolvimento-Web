import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputValue, setInputValue] = useState('')
  
  
  function adicionarTarefa() {
  if (inputValue.trim() === '') {
    alert('Por favor, insira uma tarefa válida.')
    return
  }
    const novaTarefa = {
    id: Date.now(),
    text: inputValue
  }

  setTarefas([...tarefas, novaTarefa])
  setInputValue('')

  

  }
  function removerTarefa(id){
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (
    <>
      <h1>To-Do List</h1>
      <input value = {inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder='Nova tarefa'>

      </input>
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.text} <button onClick={()=> removerTarefa(tarefa.id)}>Remover</button></li>
        ))}
      </ul>

    </>
  )
}

export default App
