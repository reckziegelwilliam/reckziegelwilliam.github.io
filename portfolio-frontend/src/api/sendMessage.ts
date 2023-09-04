import axios from 'axios';

export const sendMessage = async (data: any) => {
  const response = await axios.post(process.env.BACKEND_URL + '/contact', data);
  return response.data;
};
