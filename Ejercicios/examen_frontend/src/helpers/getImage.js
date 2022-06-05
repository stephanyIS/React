export const getImage = async() => {
    const url = 'https://dog.ceo/api/breeds/image/random';  
    const resp = await fetch(url);
    const data= await resp.json(resp);
    return data;
}
