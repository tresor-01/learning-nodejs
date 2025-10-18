import crypto from 'crypto';

// createhash 
// const hash = crypto.createHash('sha256');
 
// hash.update('pasword1234')

// console.log(hash.digest('hex'));

// /// randomtest()

// crypto.randomBytes(16, (err,buf) =>{
//   if(err) throw err;
//   console.log(buf.toString('hex'))
// })

// createCipheriv && createDecipheriv

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
//  encrypting 
const cipher = crypto.createCipheriv(algorithm, key, iv );
let encrypted = cipher.update( ' hello this is a secret messasge made by tita  ', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted)

// decrypting 

const decipher = crypto.createDecipheriv(algorithm, key, iv );
let decrypted = decipher.update( encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted)



