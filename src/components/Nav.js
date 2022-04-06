import React from 'react';

export const Nav = ({isOpen}) =>{
    return(
        <nav style={{height:`${isOpen ? '300px':'0'}`,transition:'2s all ease-in',backgroundColor:'red'}} className={`${isOpen ? 'open' : 'close'}`}>
            <ul style={{height:`${isOpen ? '300px':'0'}`,transition:'2s all ease-in',display:`${isOpen ? 'block' :'none'}`} }>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
            </ul>
        </nav>
    )
}