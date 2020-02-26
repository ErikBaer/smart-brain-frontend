import React from 'react'

const Navigation = () => {
    return (
        <nav style ={{display:"flex", justifyContent:"flex-end"}}>
            <p onClick=onRoutChange() className='f3 link dim light-blue underline pa3 pointer'>Sign Out</p>
        </nav>
    );
}

export default Navigation;