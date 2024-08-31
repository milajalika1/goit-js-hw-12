import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (searchedQuery, page) => {
  try { const axiosParams = {
    params: {
      key: '45538852-2ab6a380c393410172122f885',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  };
    return axios.get(`/`, axiosParams);
  } catch (err) {
    console.error('Error fetching images:', err);
    throw err;
  }
 

  
};
