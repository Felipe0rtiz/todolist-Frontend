import React from 'react'
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (evento) => {
    evento.preventDefault();
 
    console.log(evento.target);
    const nome = evento.target.nome.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;
    const data = evento.target.data.value;

    const tarefa = {
      nome,
      descricao,
      prioridade,
      status,
      prazo,
      data
    }

    const request = await Api.fetchPost(tarefa);
    if(request.status === 500) {
      alert('ERRO NO SERVIDOR')
    }
    const result = await request.json();
    if(result.error) {
      console.log(result.error);
    }else {
      alert(result.message);
      navigate('/');
    }
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Cadastro de Tarefas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="nome">Nome da Tarefa:</label>
                  <input id="nome" className="form-control" type="text" placeholder="Nome da Tarefa" name="nome" required/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="autor">Descrição da Tarefa:</label>
                  <input id="descricao" type="text" className="form-control" placeholder="descriçao" name="descricao" required/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="genero">Prioridade:</label>
                  <input id="prioridade" type="text" className="form-control" placeholder="Prioridade" name="prioridade" required/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="capa">Status:</label>
                  <input id="status" type="text" className="form-control" placeholder="status" name="status" required/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="duracao">Prazo:</label>
                  <input id="prazo" type="date" className="form-control"  placeholder="Prazo " name="prazo" required/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="duracao">Data:</label>
                  <input id="data" type="date" className="form-control"  placeholder="Data " name="data" required/>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">Enviar</button>
                <a href="/" class="btn btn-danger" role="button">Voltar</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
