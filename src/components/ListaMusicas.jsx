import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListaMusicas = ({musicas}) => {

    return (
        <>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Músicas</th>
                    <th>Artistas</th>
                    <th>Album</th>
                    <th>Duração</th>
                    <th>Ouvir</th>
                </tr>
            </thead>
            <tbody>
                {musicas.map(musica => {
                    return (
                        <tr key={musica.id}>
                            <td><Link to={`/musicas/${musica.id}`} style={{color:'#fff'}}>{musica.nome}</Link></td>
                            <td>{musica.artista}</td>
                            <td>{musica.album_nome}</td>
                            <td>{`${parseInt(musica.duracao/60000)}:${musica.duracao%60000 < 10 ? "0"+ musica.duracao%60 : musica.duracao%60}`}</td>
                            <td>
                                <audio controls>
                                    <source src={musica.amostra} type="audio/mpeg"/>
                                </audio>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </>
    )
}
export default ListaMusicas;