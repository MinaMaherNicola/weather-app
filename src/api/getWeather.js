import axios from 'axios';
// 1ac38f3345fcc1fb7189fa901a6b2ec1

const getWeather = async (city) => {
  const data = await axios.get('https://api.weatherstack.com/current', {
    params: {
      access_key: '1ac38f3345fcc1fb7189fa901a6b2ec1',
      query: city,
      units: 'm'
      // language: 'en'
    }
  });
  return data;
};

export default getWeather;
