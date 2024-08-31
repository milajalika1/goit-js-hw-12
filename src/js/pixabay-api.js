import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';



export const fetchImages = searchedQuery => {
  const axiosParams = {
    params: {
      key: '45538852-2ab6a380c393410172122f885',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get(`/`, axiosParams);
};


