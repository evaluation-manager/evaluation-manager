import React from 'react';

export const Avaliacao=()=>{
    return (
        <>
        <h1>Olá por aqui me avalie</h1>
        <label>Tipo de instituição</label>
        <select>
            <option>Semec</option>
            <option>Semed</option>
            <option>SMTT</option>
        </select>
        <label>Tipo de serviço</label>
        <select>
            <option>Marca serviço</option>
            <option>Pagamentos</option>
            <option>Abrir empresa</option>
        </select>
<button>Começar</button>
        </>
    )
}