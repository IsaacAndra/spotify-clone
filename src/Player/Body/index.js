import React from 'react'
import { useDataLayerValue } from '../../DataLayer';
import './Body.css';
import Header from './Header';
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Body() {

  const [{ mix_descobertas_da_semana }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
        <Header /> 

        <div className='body__info'>
          <img src={mix_descobertas_da_semana?.images[0].url} alt='' />
          <div className='body__infoText'>
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{mix_descobertas_da_semana?.description}</p>
          </div>
        </div>

        <div className='body__songs'>
          <div className='body__ icons'>
            <PlayCircleFilledIcon className='body__Shuffle'/>
            <FavoriteIcon fontSize='large'/>
            <MoreHorizIcon />
          </div>

        </div>
    </div>
  )
}

export default Body