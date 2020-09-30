import React, { useState, useEffect} from 'react';
import Layout from '../pages/Layout';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import ListaMusicas from '../components/ListaMusicas';

const Album = () => {
    const [album, setAlbum] = useState([]);

    useEffect(()=>{
       fetch(`http://localhost:8080${window.location.pathname}`)
           .then(res => res.json())
           .then((res) => setAlbum(res))
    },[])

    return (
        <Layout>
            <AlbumHeader>
                <PlaylistImage
                    className="playlist-image"
                    src={album.imagem}
                />
                <div>
                    <h1> {album.nome} </h1>
                    <Dados> Total de músicas: {album.total_musicas}</Dados>
                    <Dados>Lançamento: {album.data_lancamento}</Dados>
                </div>
            </AlbumHeader>
            <ListaMusicas musicas={album.musicas?album.musicas:[]}/>
            <Button className="mt-5" variant="dark" onClick={() => window.history.back()}>Voltar</Button>
        </Layout>
    )
}

export default Album;

const Dados = styled.p`
    font-size:22px;
    font-weight: 500;
`
const PlaylistImage = styled.img`
    width: 180px;
    height: 180px;
    transition: transform .5s;
    margin-right:30px;
`

const AlbumHeader = styled.div`
    display:flex;
    align-items:center;
    margin-bottom: 50px;
`