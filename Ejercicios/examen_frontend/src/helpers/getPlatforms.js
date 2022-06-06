export const getPlatforms = async() => {
    const apiKey =  'a534925a6a295361930b6b9fff675bd0';
    const url = `https://libraries.io/api/platforms?api_key=${apiKey}`;  
    const resp = await fetch(url);
    const data= await resp.json(resp);
    return data;
}