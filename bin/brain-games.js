#!/usr/bin/env node
import evenGame from './brain-even.js';
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getName();
evenGame(name);
