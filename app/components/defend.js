import React from 'react';
import NarutoAttack from '../assets/sprites/narutoAttack.gif';

import NarutoDefend from '../assets/sprites/narutoDefend.gif';
import shield from '../assets/sprites/shield.png';
import sword from '../assets/sprites/attack.png';

function defend(props) {
    return (
        <div>
            
            <img src={shield} id="shield"/> 
            <img src={NarutoDefend} />
        </div>
    );
}

export default defend;