import { newHorizontal, newVertical, limit } from '../helper/position.js';
import { KeyCodes, Actions } from '../constants';
import Spritz from 'spritz.js';
import RightSprite from 'assets/sprites/walkRight2.png';

export function updateNewPositionSuccess(newPosition) {
    return {
        type: 'UPDATE_POSITION',
        newPosition,
    };
}
export function moveRight() {
    return {
        type: Actions.MOVE_RIGHT,
    }
}

export function moveLeft() {
    return {
        type: Actions.MOVE_LEFT,
    }
}
export function stopRight() {
    return {
        type: 'STOP_RIGHT',
    }
}
export function stopLeft() {
    return {
        type: 'STOP_LEFT',
    }
}
export function keyUp(key) {
    return {
        type: 'KEY_UP',
        key,
    }
}
export function initLoad(limits, sprites) {
    console.log(limits);
    return {
        type: 'INITIAL_LOAD',
        sprites,
        limits,
    }
}

export function mouseMoveDown(newHorizontalPos, newVerticalPos) {
    return {
        type: 'MOUSE_DOWN',
        newHorizontalPos,
        newVerticalPos,
    }
}

export function stopAnimationRight() {
    return (dispatch, getState) => {
        const state = getState().position;
        if (state.isPlaying) {
            state.sprite.stop();
        }
        dispatch(stopRight());
    }
}
export function stopAnimationLeft() {
    return (dispatch, getState) => {
        const state = getState().position;
        if (state.isPlaying) {
            state.sprite.stop();
        }
        dispatch(stopLeft());
    }
}

export function startAnimationRight() {
    return (dispatch, getState) => {
        const state = getState().position;
        if (state.d[37]) { 
            return; 
        }
        else if (!state.isPlaying && !state.direction) {
            state.sprite.flip().fps(5).play();
        } 
        else if (!state.isPlaying) {
            state.sprite.fps(5).play();
        }
        dispatch(moveRight());
    }
}

export function startAnimationLeft() {
    return (dispatch, getState) => {
        const state = getState().position;
        if (state.d[39]) { 
            return;
        }
        else if (!state.isPlaying && state.direction) {
            state.sprite.flip().fps(5).play();
        } 
        else if (!state.isPlaying) {
            state.sprite.fps(5).play();
        }
        dispatch(moveLeft());
    }
}


export function keyPressedUp(key) {
    //console.log(key);


    return (dispatch, getState) => {
        

        switch (event.keyCode) {
            case KeyCodes.LEFT_ARROW:
                return dispatch(stopAnimationLeft());
            case KeyCodes.RIGHT_ARROW:
                return dispatch(stopAnimationRight());
            default:
                return null;
        }
    }
}


export function keyPressed(event, position) {

    return (dispatch, getState) => {
        switch (event.keyCode) {
            case KeyCodes.LEFT_ARROW:
                return dispatch(startAnimationLeft());
            case KeyCodes.RIGHT_ARROW:
                return dispatch(startAnimationRight());
            default:
                return null;
        }
    }
}


//Check if a portal
//if not, drop down
//if yes, navigaqte to new screen
//add functions to helper methods
export function mouseDown(event, position) {
  
    const sprite = document.getElementById('SPRITE');
    //console.log(sprite.offsetHeight);
    return (dispatch, getState) => {
        const newHorizontalPos = event.clientX - (sprite.offsetWidth/2);
        const newVerticalPos = (event.clientY - (sprite.offsetHeight/2));
        sprite.style.left = newHorizontalPos +'px';
        sprite.style.top =  newVerticalPos+'px';
        dispatch(mouseMoveDown(newHorizontalPos, newVerticalPos));
    }
}

export function updatePosition() {

    console.log("is updating");
    const sprite = document.getElementById('SPRITE');
    const pane = document.getElementById('BOX');

    const width = pane.offsetWidth - sprite.offsetWidth;
   
    return (dispatch, getState) => {
        const position = getState().position;
        newHorizontal(position.horizontal, 37, 39, position.d, position.x, width)
            .then(
                (newPosition) => {
                    //console.log(newPosition);
                    sprite.style.left = newPosition + 'px';
                    dispatch(updateNewPositionSuccess(newPosition));
                }
            )     
    }
}


//function sshould accept an image as sprite,
//need to add delete sprite to clear memory.
export function initialLoad(props) {

        const sprites = Spritz('#SPRITE', {
            picture: [{
                srcset: RightSprite, 
                width: 338,
                height: 90, 
            }],
            steps: 5,
        }).flip();
    
        
        return (dispatch) => {
            limit(window.innerWidth)
                .then(
                    (limits) => {
                        dispatch(initLoad(limits, sprites));
                    }
                )
        }
    }
export function changeScreenSuccess(screen) {
    return {
        type: 'CHANGE_SCREEN',
        screen
    }
}
//screen actions

export function changeScreen(screen) {
    //console.log(screen);

    


    return (dispatch, getState) => {
        dispatch(changeScreenSuccess(screen));
    }
}
