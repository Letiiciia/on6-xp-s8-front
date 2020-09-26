import React from 'react';
import Layout from '../pages/Layout';
import { Button } from 'react-bootstrap';

const Album = () => {
    return (
        <Layout>
            <h1>Em construção</h1>
            <Button className="mt-5" variant="dark" onClick={() => window.history.back()}>Voltar</Button>
        </Layout>
    )
}

export default Album;