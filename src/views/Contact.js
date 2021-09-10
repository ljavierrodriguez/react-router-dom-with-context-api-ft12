import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const Contact = (/* { history, location, match } */) => {
    const history = useHistory(); // historial navegacion
    const params = useParams(); // obtener parametros dentro url
    const location = useLocation(); // informacion de la ruta actual
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Contact</h1>
                    <button onClick={history.goBack}>Regresar</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;