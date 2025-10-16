import path from 'path';
const filePath = './dir1/dir2/test.txt'

// basename()
console.log(path.basename(filePath))

//dirname()
console.log(path.dirname(filePath))

// extension name extname()
console.log(path.extname(filePath))

//parse()

console.log(path.parse(filePath))