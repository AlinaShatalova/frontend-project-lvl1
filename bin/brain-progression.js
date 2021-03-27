#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { playRound, gameQuestion } from '../src/games/brainProgressionGame.js';

playRound();

const func = () => gameEngine(playRound, gameQuestion);
func();
