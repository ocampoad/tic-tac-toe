import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled, {
    tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';



const Root = styled('div')`
.game-board
{
	width: 600px;
	height: 600px;
	margin: 0 auto;
  background-color: #1575bf;
  color: #fff;
  border: 3px solid #0a0a0a;
  border-radius: 10px;
	
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
}

.box
{
  border: 3px solid #0a0a0a;
  border-radius: 1px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
}

`;


export default function UnstyledTable() {

    let player1 = "X"
    let player2 = "O"
    let currentPlayer = player1

    const checkWinner = () => {
        return false;
    }

    const Click = (e, player) => {
        e.target.textContent = player
        if (checkWinner()) {
            alert("win!")
        }
        if( player === player1) {
            currentPlayer = player2
        } else if ( player === player2) {
            currentPlayer = player1
        }
    };

    return (
        <Root >
            <div class="game-board">
                <div class="box" id="box1" onClick={e => Click(e, currentPlayer)}></div>
                <div class="box" id="box2" onClick={e => Click(e, currentPlayer)}></div>
                <div class="box" id="box3" onClick={e => Click(e, currentPlayer)}></div>
                <div class="box" id="box4" onClick={e => Click(e, currentPlayer)}></div>
                <div class="box" id="box5" onClick={e => Click(e, currentPlayer)}></div>
                <div class="box" id="box6" onClick={e => Click(e, currentPlayer)}></div>
                <div class="box" id="box7" onClick={e => Click(e, currentPlayer)}></div>
                <div class="box" id="box8" onClick={e => Click(e, currentPlayer)}></div>
                <div class="box" id="box9" onClick={e => Click(e, currentPlayer)}></div>
            </div>
        </Root>
    );
}
