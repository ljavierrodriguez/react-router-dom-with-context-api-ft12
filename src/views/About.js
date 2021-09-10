import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const About = () => {
    const {store} = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>About</h1>
                    <h3>{store.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default About;