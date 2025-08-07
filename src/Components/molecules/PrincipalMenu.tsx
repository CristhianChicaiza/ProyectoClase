import React from 'react'
import Logo from "../atoms/Logo"
import Input from '../atoms/Input'
import ButtonURL from '../atoms/ButtonURL'

import {Link} from 'react-router-dom'
import arrowLeft from '../../image/boxicons/arrowleft.svg'
 
function Search() {}

const PrincipalMenu: React.FC = () => {
  return (
    <nav className="w-full text-white">
      <div className="mx-auto flex justify-between items-center px-6 py-4 gap-4">
         <Logo textA="MULTI" textB="SHOP" />

<div className="flex items-center gap-2">
        <Input placeholder='Buscar' inputType={'Text'} id={'InText'}/>
        <button onClick={Search}>
          <img
            src={arrowLeft}
            alt="Anterior"
            className="w-10 h-10 hover:scale-105 transition-transform"
          />
        </button>
        </div>

        <Link to="Register">
            <ButtonURL label="Registrar"/>
        </Link>

      </div>
    </nav>
  );
};

export default PrincipalMenu;