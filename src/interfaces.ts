interface joke {
  id: string;
  joke: string;
  status: number;
}

interface jokeReport {
  joke: string;
  score: number;
  date: string;
}

interface weather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface jokeChuck {
  categories: string[],
  created_at: string,
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export { joke, jokeReport, weather, jokeChuck };
