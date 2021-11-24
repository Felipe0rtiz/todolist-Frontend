import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate()
  const [tarefa, setTarefa] = useState({
    nome:'',
    descricao:'',
    prioridade:'',
    status:'',
    duracao:'',
    data:''
});

const { id } = useParams();

  useEffect(() => {
    getTarefaById();
  }, []);

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  };

  const handleFieldsChange = (evento) => {
    const campos = { ...tarefa }

    campos[evento.target.name] = evento.target.value;
    console.log(campos);
    setTarefa(campos);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const request = await Api.fetchPut(tarefa, id);
    const data = await request.json();
    alert(data.message);
    navigate(`/view/${id}`);
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Editando Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="nome">Nome da tarefa:</label>
                  <input
                    id="nome"
                    className="form-control"
                    type="text"
                    placeholder="Nome da tarefa"
                    value={tarefa.nome}
                    onChange={handleFieldsChange}
                    name="nome"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="autor">Descrição:</label>
                  <input
                    id="autor"
                    type="text"
                    className="form-control"
                    placeholder="Descrição"
                    value={tarefa.descricao}
                    onChange={handleFieldsChange}
                    name="descricao"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="genero">Prioridade:</label>
                  <input
                    id="genero"
                    type="text"
                    className="form-control"
                    value={tarefa.prioridade}
                    onChange={handleFieldsChange}
                    placeholder="Prioridade"
                    name="prioridade"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="capa">Status:</label>
                  <input
                    id="capa"
                    type="text"
                    value={tarefa.status}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Status"
                    name="status"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="duracao">Duração:</label>
                  <input
                    id="duracao"
                    type="date"
                    value={tarefa.duracao}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Duraçao"
                    name="duracao"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="duracao">Data:</label>
                  <input
                    id="data"
                    type="date"
                    value={tarefa.data}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Data"
                    name="data"
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success ">
                  Enviar
                </button>
                <button type="button" className="btn btn-danger">
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
