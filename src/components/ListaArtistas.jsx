import React, { useEffect, useState }  from 'react';
import { Card , Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ListaArtistas = () => {
    const [artistas, setArtistas] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/artistas")
            .then(res => res.json())
            .then((res) => setArtistas(res))
     },[])

    return (
        <>
            <h1 className="mb-5">Artistas </h1>
            <Row >
                {artistas.map(artista => {
                    return(
                        <Col md={4} key={artista.id}>
                            <Link to={`/artistas/${artista.id}`}>
                                <Card body className="mb-4">
                                        {artista.nome}
                                </Card>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}
export default ListaArtistas;