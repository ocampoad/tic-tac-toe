import * as React from 'react';
import { useState } from 'react';
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

    const [disableClick1, setDisableClick1] = useState(true)
    const [disableClick2, setDisableClick2] = useState(true)
    const [disableClick3, setDisableClick3] = useState(true)
    const [disableClick4, setDisableClick4] = useState(true)
    const [disableClick5, setDisableClick5] = useState(true)
    const [disableClick6, setDisableClick6] = useState(true)
    const [disableClick7, setDisableClick7] = useState(true)
    const [disableClick8, setDisableClick8] = useState(true)
    const [disableClick9, setDisableClick9] = useState(true)

    const checkWinner = () => {
        let box1 = document.querySelector("#box1").innerHTML
        let box2 = document.querySelector("#box2").innerHTML
        let box3 = document.querySelector("#box3").innerHTML
        let box4 = document.querySelector("#box4").innerHTML
        let box5 = document.querySelector("#box5").innerHTML
        let box6 = document.querySelector("#box6").innerHTML
        let box7 = document.querySelector("#box7").innerHTML
        let box8 = document.querySelector("#box8").innerHTML
        let box9 = document.querySelector("#box9").innerHTML

        let win = [
            box1 === box2 && box2 === box3 && (box3 === "X" || box3 === "O"),
            box4 === box5 && box5 === box6 && (box6 === "X" || box6 === "O"),
            box7 === box8 && box8 === box9 && (box9 === "X" || box9 === "O"),
            box1 === box4 && box4 === box7 && (box7 === "X" || box7 === "O"),
            box2 === box5 && box5 === box8 && (box8 === "X" || box8 === "O"),
            box3 === box6 && box6 === box9 && (box9 === "X" || box9 === "O"),
            box1 === box5 && box5 === box9 && (box9 === "X" || box9 === "O"),
            box3 === box5 && box5 === box7 && (box7 === "X" || box7 === "O")
        ]

        if (win.some(x => x === true)) {
            return true;
        }

        return false;
    };

    const clearGameBoard = () => {
        document.querySelector("#box1").innerHTML = ""
        document.querySelector("#box2").innerHTML = ""
        document.querySelector("#box3").innerHTML = ""
        document.querySelector("#box4").innerHTML = ""
        document.querySelector("#box5").innerHTML = ""
        document.querySelector("#box6").innerHTML = ""
        document.querySelector("#box7").innerHTML = ""
        document.querySelector("#box8").innerHTML = ""
        document.querySelector("#box9").innerHTML = ""
    }

    const playerClick = async (e, player) => {
        e.target.textContent = player
        
        if (checkWinner()) {
            setTimeout(clearGameBoard, 5000);
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
                <div class="box" id="box1" onClick={disableClick1 ? e => {playerClick(e, currentPlayer); setDisableClick1(!disableClick1)} : () => {}}></div>
                <div class="box" id="box2" onClick={disableClick2 ? e => {playerClick(e, currentPlayer); setDisableClick2(!disableClick2)} : () => {}}></div>
                <div class="box" id="box3" onClick={disableClick3 ? e => {playerClick(e, currentPlayer); setDisableClick3(!disableClick3)} : () => {}}></div>
                <div class="box" id="box4" onClick={disableClick4 ? e => {playerClick(e, currentPlayer); setDisableClick4(!disableClick4)} : () => {}}></div>
                <div class="box" id="box5" onClick={disableClick5 ? e => {playerClick(e, currentPlayer); setDisableClick5(!disableClick5)} : () => {}}></div>
                <div class="box" id="box6" onClick={disableClick6 ? e => {playerClick(e, currentPlayer); setDisableClick6(!disableClick6)} : () => {}}></div>
                <div class="box" id="box7" onClick={disableClick7 ? e => {playerClick(e, currentPlayer); setDisableClick7(!disableClick7)} : () => {}}></div>
                <div class="box" id="box8" onClick={disableClick8 ? e => {playerClick(e, currentPlayer); setDisableClick8(!disableClick8)} : () => {}}></div>
                <div class="box" id="box9" onClick={disableClick9 ? e => {playerClick(e, currentPlayer); setDisableClick9(!disableClick9)} : () => {}}></div>
            </div>
        </Root>
    );
}
