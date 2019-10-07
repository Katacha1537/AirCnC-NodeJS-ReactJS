import React, { useEffect, useState} from 'react';

import './styles.css';
import SpotList from '../../components/spotList';

export default function Spots(){
  const [ tecs, setTecs ] = useState([]);

  useEffect(() => {
    const tek = localStorage.getItem('techs')
    
    function storagedTechs(){
      const techsArray = tek.split(',').map(tech => tech.trim());

      setTecs(techsArray);
    }

    storagedTechs();
  }, [])

  return (
    <>
      {tecs.map(tech => <SpotList key={tech} tech={tech} />)}
    </>
  )
}