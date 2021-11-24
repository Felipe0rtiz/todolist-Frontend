import React from 'react'
import ListTarefa from '../../components/structure/ListTarefa';

const Home = () => {
  return (
    <div className="lead">
      <h1 className="display-1 text-center">Todo List</h1>
      <ListTarefa/>
    </div>
  )
}

export default Home
