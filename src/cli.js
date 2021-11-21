#!/usr/bin/env node

import readline from 'readline';
import process from 'process';
import getColorScheme from './getColorScheme.js';
import checkValidColor from './utils/checkValidColor.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your hexadecimal color? ', answer => {
  const colorIsValid = checkValidColor(answer);
  if (!colorIsValid) {
    console.error(
      '\x1b[91mSorry, your colour must have a valid hexadecimal format.\x1b[0m',
    );
    rl.close();
    return;
  }

  console.log('\x1b[96mHere is your color palette\x1b[0m');
  console.log(getColorScheme(answer));

  rl.close();
});
