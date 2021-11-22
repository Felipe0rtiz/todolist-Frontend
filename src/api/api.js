const Api = {
  apiUrl: 'http://localhost:3001/tarefas',
  fetchGetAll: () => fetch(Api.apiUrl),
  fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),
  fetchPost: (data) => {
    return fetch(`${Api.apiUrl}/add`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
  },
  fetchPut: (tarefa, id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(tarefa),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;



