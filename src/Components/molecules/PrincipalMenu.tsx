import React from 'react'
import Logo from "../atoms/Logo"
import Input from '../atoms/Input'
import ButtonURL from '../atoms/ButtonURL'

import {Link} from 'react-router-dom'

const PrincipalMenu: React.FC = () => {
  return (
    <nav className="w-full text-white">
      <div className="mx-auto flex justify-between items-center px-6 py-4 gap-4">
         <Logo textA="MULTI" textB="SHOP" />

        <Input placeholder='Buscar' inputType="text" id="search-input" />
     
        <Link to="Register">
            <ButtonURL label="Registrar"/>
        </Link>

      </div>
    </nav>
  );
};

export default PrincipalMenu;