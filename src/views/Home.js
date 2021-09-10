import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const Home = () => {
    const { store, actions } = useContext(Context);
    const [todos, setTodos] = useState([]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Bievenido, {store.name} {store.lastname}</h1>
                    <button onClick={actions.b}>Activar</button>
                </div>
            </div>
        </div>
    )
}

export default Home;