import React, { useState, useEffect} from 'react';
import Layout from '../pages/Layout';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import ListaMusicas from '../components/ListaMusicas';

const Artista = () => {
    const [artista, setArtista] = useState([]);

    useEffect(()=>{
       fetch(`http://localhost:8080${window.location.pathname}`)
           .then(res => res.json())
           .then((res) => setArtista(res))
    },[])

    return (
        <Layout>
            <Titulo> {artista.nome} </Titulo>
            <Dados> Artista: {artista.nome}</Dados>
            <Dados>Lançamento: {artista.data_lancamento}</Dados>
            <ListaMusicas musicas={artista.musicas?artista.musicas:[]}/>
            <Button className="mt-5" variant="dark" onClick={() => window.history.back()}>Voltar</Button>
        </Layout>
    )
}

export default Artista;

const Titulo = styled.h1`
    margin-top: 150px;
    margin-bottom: 50px;
`
const Dados = styled.p`
    font-size:22px;
    font-weight: 500;
`

// const Player = styled.audio`
//     margin-top: 50px;
// `