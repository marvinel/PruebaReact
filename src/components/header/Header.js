import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './styles/styles.css';

import { AppContext } from '../../provider/Provider';

function Header() {

    const [state, setState] = useContext(AppContext);
    const menuitem = [{ id: "1", name: "Vivair" }, { id: "2", name: "Avianca" }, {id:"3", name:"EasyFly"},{id:"4", name:"LATAM"} ]

    useEffect(() => {
        setState({item: menuitem[0].name})
      },[]);
 
    const pasarpro = (name) => {
      
        setState({item: name})
    }
    return (
        <header id="header">
           

          <nav id="menu">
                    <ul>

                        {menuitem.map((item) => (
                            <li key={item.id} onClick={()=>{pasarpro(item.name)}}>
                                <NavLink  to="/" activeClassName="active" id={item.id}  >{item.name}</NavLink>

                            </li>

                        ))

                        }


                    </ul>

                </nav>

                
         

        </header>
    );
}

export default Header;