import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {
  const tarefa = props.data;
  return (
    <Link to={`/view/${tarefa._id}`} className="col">
      <div className="card">
          <h3 className="card-header"> <i class="bi bi-bookmark-star"></i> Tarefa 🡆 {tarefa.nome}</h3>
          <h3 className="card-header"> <i class="bi bi-stopwatch"></i> Status 🡆 {tarefa.status}</h3>
        </div>
    </Link>
  )
}

export default Card
