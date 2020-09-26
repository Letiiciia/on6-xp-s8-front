import React, { useEffect, useState } from 'react';
import Layout from '../pages/Layout';
import ListaMusicas from '../components/ListaMusicas';

const Musicas = () => {
    const [musicas, setMusicas] = useState([]);

    useEffect(()=>{
       fetch("http://localhost:8080/musicas")
           .then(res => res.json())
           .then((res) => setMusicas(res))
    },[])

    return (
        <Layout>
            <h1 className="mb-3">Músicas </h1>
            <ListaMusicas musicas={musicas} />
        </Layout>
    )
}

export default Musicas;