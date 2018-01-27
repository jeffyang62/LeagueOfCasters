import React from 'react';
import NarutoAttack from '../assets/sprites/narutoAttack.gif';

import NarutoDefend from '../assets/sprites/narutoDefend.gif';
import shield from '../assets/sprites/shield.png';
import sword from '../assets/sprites/attack.png';

function attack(props) {
    return (
        <div>
            
            <img src={sword} id="sword"/> 
            <img src={NarutoAttack}/>
        </div>
    );
}

export default attack;