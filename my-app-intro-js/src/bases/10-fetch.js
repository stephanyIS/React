const apiKey = "0a14PWaru6QmwhUcAoHNafLyD68lfRDf";
//https://api.giphy.com/v1/gifs/random?api_key=0a14PWaru6QmwhUcAoHNafLyD68lfRDf

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
/*
peticion.then( resp =>{
    resp.json().then( data=>{
      console.log(data);
    });
})
.catch( console.warn );
*/

//Promesas en cadenas

peticion
  .then( resp =>  resp.json())
  .then( ({data}) => {
    const {url} = data.images.original;
    
    //Crea la imagen en memoria
    const img = document.createElement('img');
    img.src = url;
    
    //Lo envia al html
    document.body.append(img);
  })
  .catch( console.warn );