import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BotonFavorito from '../botones/boton-favorito.componente';
import { detallePersonaje } from '../../actions/personajes.actions';
import './tarjeta-personaje.css';
import { FC } from 'react';
import Personaje from '../../types/personaje.types';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

interface ITarjetaProps {
    personajesPaginados: Personaje[]
}


const TarjetaPersonaje:FC<ITarjetaProps> = ({personajesPaginados}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDetalle = (id: number) => {
        dispatch(detallePersonaje(id));
        navigate('/detalle');
    }

    return <>
        {
            personajesPaginados?.map((personaje) => (
                <div
                    key={personaje.id}
                    className="tarjeta-personaje"
                >
                    <img 
                        src={personaje.image}
                        alt={personaje.name}
                        onClick={ () => handleDetalle(personaje.id) }
                    />
                    <div className="tarjeta-personaje-body">
                        <span> {personaje.name} </span>
                        
                        <BotonFavorito personajeFav={personaje} />
                    </div>
                </div>
            ))
        }

    </>
}

export default TarjetaPersonaje;