export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=x21QgYOF9Rjuo9UZDamhrYWkA5PgZBYq`;  
    const resp = await fetch(url);
    const {data} = await resp.json(resp);
    
    const gifs = data.map( (img)=> {
        return {
            id: img.id,
            title: img.title, 
            url: img.images?.downsized_medium.url //Si viene la imagen, que la utilice
        }
    })
    return gifs;
}