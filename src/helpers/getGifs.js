export const getGifs = async (category) => {
    //No tiene argumento porque la categoria viene por parametro
    const url = `https://api.giphy.com/v1/gifs/search?api_key=auujy5nmG3IsZDoLd8MuCMCTY8xl8zcN&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img =>({
      id: img.id,
      title:img.title,
      url: img.images.downsized_medium.url
    }))
     
      return gifs;
  
    }