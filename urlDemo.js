import url from 'url';

const urlString = 'https://www.google.com/search?q=orange+juice';

// URL object to work with 

const urlObj = new URL(urlString);
console.log(urlObj.pathname 
)

// format
console.log(url.format(urlString));

//import.meta.url -file url 

console.log(import.meta.url)

//file url to path 

console.log(url.fileURLToPath(import.meta.url))

//

const params = new URLSearchParams(urlObj.search);
console.log(params)
console.log(params.get('q'))

