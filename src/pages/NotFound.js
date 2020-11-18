import React from 'react';
import { Link } from 'react-router-dom'

export default function NotFound(){
    return (

        <div>
            <h1>Desculpe, está página não foi encontrada</h1>
            <Link to="/">Voltar para página inicial</Link>
        </div>
    );

}