function getWeatherIconSource(weatherType, isDay) {
  return weatherMapping[weatherTypes[weatherType.trim()][isDay]].imageSrc;
}

function getWeatherVideoSource(weatherType, isDay) {
  return weatherMapping[weatherTypes[weatherType.trim()][isDay]].videoSrc;
}

var weatherTypes = {
  "Patchy light drizzle": ["drizzle", "drizzle"],
  "Patchy rain nearby": ["rainy", "rainy"],
  "Moderate or heavy rain with thunder": [
    "rain_and_thunder_night",
    "rain_and_thunder_day",
  ],
  Mist: ["mist", "mist"],
  "Partly cloudy": ["partly_cloudy_night", "partly_cloudy_day"],
  "Patchy light rain with thunder": [
    "rain_and_thunder_night",
    "rain_and_thunder_day",
  ],
  "Light rain shower": [],
  Cloudy: [],
  Overcast: [],
  Clear: ["sunny", "clear_night"],
};

// YOU NEED TO ADD YOUR OWN WEATHER VIDEOS
var weatherMapping = {
  sunny: {
    imageSrc: "assets/iconSet/clear-day.svg",
    videoSrc: "assets/videos/sunny.mp4",
  },
  clear_night: {
    imageSrc: "assets/iconSet/starry-night.svg",
    videoSrc: "assets/videos/clear-night.mp4",
  },
  partly_cloudy_day: {
    imageSrc: "assets/iconSet/partly-cloudy-day.svg",
    videoSrc: "assets/videos/partly-cloudy.mp4",
  },
  partly_cloudy_night: {
    imageSrc: "assets/iconSet/partly-cloudy-night.svg",
    videoSrc: "assets/videos/partly-cloudy.mp4",
  },
  fog_day: {
    imageSrc: "assets/iconSet/fog-day.svg",
    videoSrc: "assets/videos/fog.mp4",
  },
  fog_night: {
    imageSrc: "assets/iconSet/fog-night.svg",
    videoSrc: "assets/videos/fog-night.mp4",
  },
  mist: {
    imageSrc: "assets/iconSet/mist.svg",
    videoSrc: "assets/videos/mist.mp4",
  },
  haze_day: {
    imageSrc: "assets/iconSet/haze-day.svg",
    videoSrc: "assets/videos/haze.mp4",
  },
  haze_night: {
    imageSrc: "assets/iconSet/haze-night.svg",
    videoSrc: "assets/videos/haze.mp4",
  },
  overcast_day: {
    imageSrc: "assets/iconSet/overcast-day.svg",
    videoSrc: "assets/videos/clouds.mp4",
  },
  overcast_night: {
    imageSrc: "assets/iconSet/overcast-night.svg",
    videoSrc: "assets/videos/clouds.mp4",
  },
  drizzle: {
    imageSrc: "assets/iconSet/drizzle.svg",
    videoSrc: "assets/videos/drizzle.mp4",
  },
  rainy: {
    imageSrc: "assets/iconSet/rain.svg",
    videoSrc: "assets/videos/rainy-day.mp4",
  },
  rain_and_thunder_day: {
    imageSrc: "assets/iconSet/thunderstorms-day-rain.svg",
    videoSrc: "assets/videos/thunder-and-rain-day.mp4",
  },
  rain_and_thunder_night: {
    imageSrc: "assets/iconSet/thunderstorms-night-rain.svg",
    videoSrc: "assets/videos/thunder-and-rain-night.mp4",
  },
  thunderstorm_day: {
    imageSrc: "assets/iconSet/thunderstorm-day.svg",
    videoSrc: "assets/videos/thunderstorm.mp4",
  },
  thunderstorm_night: {
    imageSrc: "assets/iconSet/thunderstorms-night.svg",
    videoSrc: "assets/videos/thunderstorm-night.mp4",
  },
};
