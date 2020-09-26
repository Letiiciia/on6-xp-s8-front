import React, { useState, useEffect} from 'react';
import Layout from '../pages/Layout';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Musica = (props) => {
    const [musica, setMusica] = useState([]);

    useEffect(()=>{
       fetch(`http://localhost:8080${window.location.pathname}`)
           .then(res => res.json())
           .then((res) => setMusica(res))
    },[])
    return (
        <Layout>
            <Titulo>{musica.nome} </Titulo>
            <Dados>Artista: {musica.artista}</Dados>
            <Dados>Album: {musica.album_nome}</Dados>
            <Dados>Duração total: {`${parseInt(musica.duracao/60000)}:${musica.duracao%60000 < 10 ? "0"+ musica.duracao%60 : musica.duracao%60}`}</Dados>
            <Player controls>
                <source src={musica.amostra} type="audio/mpeg"/>
            </Player>
            <Button variant="dark" onClick={() => window.history.back()}>Voltar</Button>
        </Layout>

    )
}

export default Musica;

const Titulo = styled.h1`
    margin-top: 150px;
    margin-bottom: 50px;
`
const Dados = styled.p`
    font-size:22px;
    font-weight: 500;
`

const Player = styled.audio`
    margin-top: 50px;
    margin-bottom:100px;
    display: block;

`