import axios from 'axios';

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_BASE_URL;
const TOKEN = JSON.parse(sessionStorage.getItem('token'));
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${TOKEN}`
};

const GET = async (URL, body) => {
  try {
    const response = await axios.get(`${BASE_URL}${URL}`, body, headers);
    return response;
  } catch (error) {
    return error;
  }
};

const POST = async (URL, body) => {
  try {
    const response = await axios.post(`${BASE_URL}${URL}`, body, headers);
    return response;
  } catch (error) {
    return error;
  }
};

const PUT = async (URL, body) => {
  try {
    const response = await axios.put(`${BASE_URL}${URL}`, body, headers);
    return response;
  } catch (error) {
    return error;
  }
};

const DELETE = async (URL, body) => {
  try {
    const response = await axios.delete(`${BASE_URL}${URL}`, body, headers);
    return response;
  } catch (error) {
    return error;
  }
};

export const UseRequest = async (URL, method, body) => {

  switch(method) {
  case 'GET': return GET(URL, body);
  case 'POST': return POST(URL, body);
  case 'PUT': return PUT(URL, body);
  case 'DELETE': return DELETE(URL, body);
  default : return GET(URL, body);
  }

};
