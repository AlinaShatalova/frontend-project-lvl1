#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { playRound, gameQuestion } from '../src/games/brainPrimeGame.js';

playRound();

const func = () => gameEngine(playRound, gameQuestion);
func();
