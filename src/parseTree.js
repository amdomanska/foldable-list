let getIndent = (line) => {
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
};

export let parseTree = (input) => {
  if (input === '') {
    return '';
  }
  let root = {title: 'Your Table of Contents'};
  let lines = input.split('\n');
  let stack = [root, null];
  lines.forEach((line) => {
    let currIndent = getIndent(line);
    let curr = {title: line.substring(currIndent * 2)};
    while (stack.length - 1 > currIndent) {
      stack.pop();
    }
    if (!stack[stack.length - 1].children) {
      stack[stack.length - 1].children = [];
    }
    stack[stack.length - 1].toggled = true;
    stack[stack.length - 1].children.push(curr);
    stack.push(curr);
  });
  return root;
};
