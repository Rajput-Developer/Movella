const api_key = 'http://www.omdbapi.com/?apikey=5f98472';

const fetchData = async (title) => {
    try {
        const response = await fetch(`${api_key}&s=${title}`);
        const data = await response.json();
        return data.Search;
    } catch (error) {
        return error;
    }
}

export default fetchData;