import axios from "axios";

const LocationKey = import.meta.env.VITE_API_KEY_NINJA;

const GetCity = async (city: string) => {
  try {
    const res = await axios.get(`https://api.api-ninjas.com/v1/city?name=${city}`, {
      headers: {
        'X-Api-Key': LocationKey,
      },
    });

    return res.data;
  } catch (error) {
    throw error.data;
  }
};

const LocationServices = {
  GetCity,
};

export default LocationServices;
