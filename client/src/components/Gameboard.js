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
        const box1 = document.querySelector("#box1").innerHTML
        const box2 = document.querySelector("#box2").innerHTML
        const box3 = document.querySelector("#box3").innerHTML
        const box4 = document.querySelector("#box4").innerHTML
        const box5 = document.querySelector("#box5").innerHTML
        const box6 = document.querySelector("#box6").innerHTML
        const box7 = document.querySelector("#box7").innerHTML
        const box8 = document.querySelector("#box8").innerHTML
        const box9 = document.querySelector("#box9").innerHTML

        console.log(typeof(box9))
        // box4 === box5 && box5 === box6,
        // box7 === box8 && box8 === box9,
        // box1 === box4 && box4 === box7,
        // box2 === box5 && box5 === box8,
        // box3 === box6 && box6 === box9,
        // box1 === box5 && box5 === box9,
        // box3 === box5 && box5 === box7

        let win = [
            box1 === box2 && box2 === box3,
            box4 === box5 && box5 === box6,
            box7 === box8 && box8 === box9,
            box1 === box4 && box4 === box7,
            box2 === box5 && box5 === box8,
            box3 === box6 && box6 === box9,
            box1 === box5 && box5 === box9,
            box3 === box5 && box5 === box7
        ]

        if (win.some(x => x === true)) {
            console.log(win)
        }

        return false;
    }

    const Click = (e, player) => {
        e.target.textContent = player
        if (checkWinner()) {
            alert("win!")
        }
        if (player === player1) {
            currentPlayer = player2
        } else if (player === player2) {
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
