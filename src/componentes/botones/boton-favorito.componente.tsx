import { useDispatch } from 'react-redux';
import { useSelector } from '../../store/store';
import { agregarFavorito, eliminarFavorito } from '../../actions/personajes.actions';
import './boton-favorito.css';
import { FC } from 'react';
import Personaje from '../../types/personaje.types';


/** DOCUMENTACIÓN:
 * 
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @author: Jenny Zambrano
 * @param {{
 *    esFavorito: boolean,
 *    onClick: function
 * }} props 
 * @returns JSX element
 * 
 */


interface IFavoritoProps {
    personajeFav: Personaje
}

const BotonFavorito:FC<IFavoritoProps> = ({personajeFav}) => {

    const dispatch = useDispatch();
    
    const favoritos =  useSelector((state) => state.personajes.favoritos);
    
    const esFavorito = favoritos.find((favorito) => favorito.id === personajeFav.id); 

    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

     const handleFav = () => {
        if(!esFavorito) {
            dispatch(agregarFavorito(personajeFav));
        } else{
            dispatch(eliminarFavorito(personajeFav));
        }
    }


    return <div className="boton-favorito" onClick={handleFav}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;