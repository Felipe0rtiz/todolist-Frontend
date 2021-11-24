import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Api from '../../api/api';

const View = () => {
  const [tarefa, setTarefa] = useState({});
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const AbreModal = () => setOpen(true);
  const FechaModal = () => setOpen(false);

  useEffect(() => {
    getTarefaById();
  },[])

  const { id } = useParams();
  console.log(id);

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  }

  const handleDelete = async() => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    if(data.message) {
      console.log('excluido', data.message);
      navigate('/');
    }else {
      alert(data.error);
    }
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-6">
          <div className="card my-4">
            <h1 className="text-left my-4"><b>Nome: </b>{tarefa.nome}</h1>
            <h2 className="text-left my-4"><b>Descrição: </b>{tarefa.descricao}</h2>
          <h2  className="text-left my-4"><b>Prioridade: </b>{tarefa.prioridade}</h2 >
          <h2  className="text-left my-4"><b>Status: </b>{tarefa.status}</h2 >
          <h2  className="text-left my-4"><b>Prazo: </b>{tarefa.prazo}</h2>
          <h2 className="text-left my-4"><b>Data de Criação: </b>{tarefa.data}</h2>
            <div className="btn-group mt-3 w-100">
              <Link to={`/edit/${tarefa._id}`} className="btn btn-success">Editar</Link>
              <button className="btn btn-danger" onClick={AbreModal}>Excluir</button>
            </div>
            </div>
      <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
        <h2 className="my-4">Deseja Realmente Excluir ?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger mr-2" onClick={FechaModal}>Não</button>
          <button className="btn btn-success" onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
    </div>
    </div>
  )
}

export default View
