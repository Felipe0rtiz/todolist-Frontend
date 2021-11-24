import React, { useState, useEffect } from 'react'
import Card from '../Card';
import Api from '../../../api/api';

const ListTarefa = () => {

  const [tarefas, setTarefas] = useState([]);
  

  useEffect(() => {
    getTarefas();
  }, [])

 
  const getTarefas = async () => {
    const request = await Api.fetchGetAll();
    const data = await request.json();
    setTarefas(data);
  }


  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
      {tarefas.map((tarefa) => (
        <Card data={tarefa} key={tarefa._id}/>
      ))}
    </div>
  )
}

export default ListTarefa
