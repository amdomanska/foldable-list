'use strict';

function getIndent(line){
  let result = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === ' '){
      result++;
    }
    else {
      return result / 2;
    }
  }
  return result / 2;
}

export function parseTree(input) {
  if (input === '') {
    return '';
  }
  console.log('input: ' + input);
  let root = {title: null, isRoot: true, children: [] };
  let lines = input.split('\n');
  console.log('lines: ' + input.split('\n'));
  let stack = [root, null];
  lines.forEach((line) => {
    let currIndent = getIndent(line);
    let curr = {title: line.substring(currIndent * 2), isRoot: false, children: []};
    while (stack.length - 1 > currIndent) {
      stack.pop();
    }
    stack[stack.length - 1].children.push(curr);
    stack.push(curr);
  });
  return root;
}
