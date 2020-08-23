import React,{useState,useRef,useEffect}from 'react';
import TodList from './TodList';
import uuidv4 from 'uuid/v4';
import './App.css'

function App() {
  const [todos,setTodos]=useState([]);
  const todoRefname =useRef();
  const LOCAL_STORAGE_KEY='todosApp.todos';

  useEffect(()=>{
    const storTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storTodos) setTodos(storTodos)
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])
  function handleAddTodos(e){
    const name = todoRefname.current.value;
    if(name === '') return
    setTodos(prevTodos=> {return [...prevTodos,{id:uuidv4(),name:name,complete:false}]});

    todoRefname.current.value=null

  }

  function toggleTodos(id){
    const newTodos=[...todos];
    const todo=newTodos.find(todo=>todo.id===id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  function handleClearTodos(){
    const newTodos=todos.filter(todo=> !todo.complete)
    setTodos(newTodos)
  }
  
  return (
    <div className="flexbox-container">
    <TodList todos={todos} toggleTodos={toggleTodos}/>
    <input ref={todoRefname} type="text" />
    <button onClick={handleAddTodos}>Add todo</button>
    <button onClick={handleClearTodos}>Clear Complete todo</button>
  <div>{todos.filter(todo=> !todo.complete).length}Left todo</div>
    </div>
  );
    
}

export default App;
