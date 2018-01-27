import React from 'react';

function Intro(props) {
    //console.log(props);
    return (
        <div className="">
            <div className="" id="human">
            
            </div>

            <div className="" id="text">
                <h3>Welcome to Kyoby Designs!</h3>

                <a onClick={()=>props.nextScreen()} className="waves-effect waves-light btn bottom_right_position">button</a>
            </div>
        </div>
    );
}

export default Intro;
