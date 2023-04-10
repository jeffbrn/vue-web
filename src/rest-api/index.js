import axios from 'axios'

const rest_client = () => {
  const base_url = 'http://192.168.1.150:5129/';
  const http = axios.create({
    baseURL: base_url,
    timeout: 1000,
    headers: {'accept': 'application/json'}
  });

  return {
    getData: async function() {
      const result = await http.get('weatherforecast');
      return result.data;
    }
  };
};

export default rest_client;
