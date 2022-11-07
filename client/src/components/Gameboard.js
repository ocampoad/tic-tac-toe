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


    return (
        <Root >
            <div class="game-board">
                <div class="box" id="box1">O</div>
                <div class="box" id="box2">O</div>
                <div class="box" id="box3">O</div>
                <div class="box" id="box4">O</div>
                <div class="box" id="box5">X</div>
                <div class="box" id="box6">O</div>
                <div class="box" id="box7">O</div>
                <div class="box" id="box8">X</div>
                <div class="box" id="box9">X</div>
            </div>
        </Root>
    );
}
