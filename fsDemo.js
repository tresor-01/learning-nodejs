//  import fs from 'fs';
 import fs from 'fs/promises';

 // readfile ()

//  fs.readFile('./text.txt','utf8', (err, data) => {
//   if(err) throw err;
//   console.log(`This is from asynchronous reafile version : ${data}`);
//  })

 // readfilesync syynchronous version 

//  const data = fs.readFileSync('./text.txt','utf8', );
//  console.log(`this from readfilecynchronous version: ${data}`);

 // readfile() -- promise version 

  // fs.readFile('./text.txt', 'utf8')
  //   .then ((data) => console.log(data))
  //   .catch((err) => console.log(err));

  //readfile() --aync/await 

  const readFile = async () =>{
    try {
    const data = await fs.readFile('./text.txt','utf8', ); 
    console.log(data); 
    } catch (error) {
      console.log(error); 
    }
  };

  // Writefiele()

  const writeFile = async () =>{
    try {
      await fs.writeFile('./text.txt','Hello, Iam writing to this file ');
      console.log('file written to ..')
    } catch (error) {
      console.log(error);
    }
  }

  /// appendfile() : to write in a file without the need to delete what was in the fie 

  const appendfile = async () => {
    try {
      await fs.appendFile('./text.txt', '\nthis is what was appended to this file ')
      console.log('file appended to ...')
    } catch (error) {
      console.log(error);
      
      
    }
  }
 writeFile()
 appendfile()
 readFile()