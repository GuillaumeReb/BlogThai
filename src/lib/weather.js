// src/lib/weather.js

const API_KEY = import.meta.env.WEATHERAPI_API_KEY; // Assurez-vous d'avoir cette variable d'environnement

async function getWeatherData(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(
    city
  )}&lang=fr`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        `Erreur lors de la récupération de la météo pour ${city}: ${response.status}`
      );
      return null;
    }
    const data = await response.json();
    return {
      ville: data.location.name,
      temperature: data.current.temp_c,
      description: data.current.condition.text,
      icon: data.current.condition.icon,
    };
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la météo pour ${city}: ${error.message}`
    );
    return null;
  }
}

export async function getMultipleWeatherData(cities) {
  const weatherData = await Promise.all(
    cities.map((city) => getWeatherData(city))
  );
  return weatherData.filter((data) => data !== null); // Filtrer les résultats en cas d'erreur
}
