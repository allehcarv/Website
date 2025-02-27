import React, { useState } from 'react'
import Logo from '../Assets/copialogo2.svg'
import {BsCart2} from 'react-icons/bs'
import {HiOutlineBars3} from "react-icons/hi2"
import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoudedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"

const NavBar = () => {

    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"Curiosidades",
            icon:<InfoIcon/>
        },
        {
            text:"Sobre Nós",
            icon:<ShoppingCartRoundedIcon/>
        }
    ]

  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt='' />
        </div>
        <div className='navbar-links-container'>
            <a href=''>Home</a>
            <a href=''>Curiosidades</a>
            <a href=''>Sobre Nós</a>
            <button className='primary-button'>
                Área do aluno
            </button>
        </div>
        <div className='navbar-menu-container' >
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open = {openMenu} onClose={() => setOpenMenu(false)}
        anchor='right'>
            <Box 
            sx = {{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown = {() => setOpenMenu(false)}>

                <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary = {item.text} />
                            </ListItemButton>
                        </ListItem>

                    ))}
                </List>


            </Box>
        </Drawer>
    </nav>
  )
}

export default NavBar