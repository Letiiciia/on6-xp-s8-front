import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

const hoveredImageStyle = `transform: scale(1.1);`

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 18px;
    &:hover .playlist-image {
        ${hoveredImageStyle}
    }
`

const PlaylistImage = styled.img`
    width: 180px;
    height: 180px;
    transition: transform .5s;
`

const PlaylistName = styled.h3`
    font-size: 15px;
    font-stretch: condensed;
    font-weight: bold;
    margin-top: 20px;
    &:hover ${PlaylistImage} {
        ${hoveredImageStyle}
    }
`

const ListaAlbuns = () => {
    const [albuns, setAlbuns] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/albuns")
            .then(res => res.json())
            .then((res) => setAlbuns(res))
     },[])

    return (
        <>
            <h1>Albuns  </h1>
            <Row> {
                albuns.map((album) => (
                    <Col key={album.id}>
                        <Link to={`/albuns/${album.nome.toLowerCase().replace(/\s/g,'-')}`}>
                            <ListItem >
                                <PlaylistImage
                                    className="playlist-image"
                                    src={album.imagem}
                                />
                                <PlaylistName>{album.nome}</PlaylistName>
                            </ListItem>
                        </Link>
                    </Col>
                ))
            }
            </Row>
        </>
    )
}


export default ListaAlbuns;