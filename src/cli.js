#!/usr/bin/env node

import readline from 'readline';
import process from 'process';
import getColorScheme from './getColorScheme.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your hexadecimal color? ', answer => {
  console.log(`Thank you for your color: ${answer}`);

  console.log('Here is your color scheme');
  console.log(getColorScheme(answer));

  rl.close();
});
