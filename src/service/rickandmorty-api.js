import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

const notify = message =>
  toast.error(message, {
    autoClose: 3000,
    theme: 'colored',
  });

export const getCharacters = async page => {
  try {
    const { data } = await axios.get(`/character?page=${page}`);
    return data;
  } catch ({ message }) {
    notify(message);
  }
};

export const characterById = async characterId => {
  try {
    const { data } = await axios.get(`/character/${characterId}`);
    return data;
  } catch ({ message }) {
    notify(message);
  }
};

export const getEpisodes = async episodes => {
  try {
    const { data } = await axios.get(`/episode/${episodes}`);
    return data;
  } catch ({ message }) {
    notify(message);
  }
};

export const getByName = async (query, page) => {
  try {
    const { data } = await axios.get(`/character/?page=${page}&name=${query}`);
    return data;
  } catch ({ message }) {
    notify(message);
  }
};
