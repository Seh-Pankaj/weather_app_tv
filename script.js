function getCurrentWeather() {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var result = JSON.parse(this.responseText);
      var currentData = result.current;

      var weatherModel = {
        lastUpdated: currentData.last_updated,
        isDay: currentData.is_day,
        currTemp: currentData.temp_c,
        type: currentData.condition.text,
        windSpeed: currentData.wind_kph,
        windDegree: currentData.wind_degree,
        windDirection: currentData.wind_dir,
        humidity: currentData.humidity,
        visibility: currentData.vis_km,
        uv: currentData.uv,
        feelsLike: currentData.feelslike_c,
        gustSpeed: currentData.gust_kph,
        cloudCover: currentData.cloud,
      };

      document.getElementById("weatherType").textContent = weatherModel.type;

      document.getElementById("lastUpdated").textContent =
        weatherModel.lastUpdated;
      document.getElementById("temp").textContent =
        weatherModel.currTemp + " °";
      document.getElementById("feelsLike").textContent =
        weatherModel.feelsLike + " °";
      document.getElementById("windSpeed").textContent =
        weatherModel.windSpeed + " kph";

      document.getElementById("windDirection").textContent =
        weatherModel.windDegree +
        " °" +
        " (" +
        weatherModel.windDirection +
        ")";

      document.getElementById("gust").textContent =
        "Gust " + weatherModel.gustSpeed + " kph";

      document.getElementById("humidity").textContent =
        weatherModel.humidity + " %";
      document.getElementById("visibility").textContent =
        weatherModel.visibility + " km";

      var uvImg = document.getElementById("uvIcon");
      uvImg.src = "assets/iconSet/uv-index-" + weatherModel.uv + ".svg";

      document.getElementById("cloudCover").textContent =
        weatherModel.cloudCover;

      var weatherIconSrc = getWeatherIconSource(
        weatherModel.type,
        weatherModel.isDay
      );
      document.getElementById("weatherIcon").src = weatherIconSrc;

      var weatherVideoSrc = getWeatherVideoSource(
        weatherModel.type,
        weatherModel.isDay
      );
      document.getElementById("weatherVideo").src = weatherVideoSrc;
    }
  });

  // ADD YOUR LATITUDE AND LONGITUDE HERE

  xhr.open(
    "GET",
    "https://api.weatherapi.com/v1/current.json?key=2dbf726a758b40e2a4d101106202810&q=your_latitude,your_longitude"
  );
  xhr.setRequestHeader(
    "accept",
    "application/json, text/javascript, */*; q=0.01"
  );
  xhr.setRequestHeader("accept-language", "en-US,en;q=0.8");

  xhr.send();
}

function getAqi() {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var result = JSON.parse(this.responseText);
      var locationData = result.Locations[0].airComponents;

      var aqiModel = {
        aqi_IN: locationData.filter(function (sensor) {
          return sensor.sensorName == "AQI-IN";
        })[0].sensorData,
        co: locationData[0].sensorData,
        no2: locationData[2].sensorData,
        o3: locationData[3].sensorData,
        pm10: locationData[5].sensorData,
        pm25: locationData[6].sensorData,
        so2: locationData.filter(function (sensor) {
          return sensor.sensorName == "so2";
        })[0].sensorData,
      };

      document.getElementById("aqi_IN").textContent =
        "AQI (" + aqiModel.aqi_IN + ")";
      document.getElementById("co").textContent = aqiModel.co;
      document.getElementById("no2").textContent = aqiModel.no2;
      document.getElementById("o3").textContent = aqiModel.o3;
      document.getElementById("pm10").textContent = aqiModel.pm10;
      document.getElementById("pm25").textContent = aqiModel.pm25;
      document.getElementById("so2").textContent = aqiModel.so2;

      document.getElementById("aqiColor").style.backgroundColor = Gettablecolor(
        aqiModel.aqi_IN,
        "AQI-IN"
      );
      document.getElementById("pm10Color").style.backgroundColor =
        Gettablecolor(aqiModel.pm10, "pm10");
      document.getElementById("pm25Color").style.backgroundColor =
        Gettablecolor(aqiModel.pm25, "pm25");
      document.getElementById("coColor").style.backgroundColor = Gettablecolor(
        aqiModel.co,
        "co"
      );
      document.getElementById("o3Color").style.backgroundColor = Gettablecolor(
        aqiModel.o3,
        "o3"
      );
      document.getElementById("no2Color").style.backgroundColor = Gettablecolor(
        aqiModel.no2,
        "no2"
      );
      document.getElementById("so2Color").style.backgroundColor = Gettablecolor(
        aqiModel.so2,
        "so2"
      );
    }
  });

  xhr.open("GET", "https://api.aqi.in/api/v1/getNearestLocation");
  xhr.setRequestHeader(
    "accept",
    "application/json, text/javascript, */*; q=0.01"
  );
  xhr.setRequestHeader("accept-language", "en-US,en;q=0.8");
  xhr.setRequestHeader("content-type", "application/json");

  // Add your latitude and longitude here

  xhr.setRequestHeader("lat", "your_lat");
  xhr.setRequestHeader("lon", "your_long");

  xhr.send();
}

function getOverallWeather() {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var result = JSON.parse(this.responseText);
      var locationData = result.Locations[0];
      var forecastDayData = locationData.forecastdata.forecastday[0].day;
      var astroData = locationData.forecastdata.forecastday[0].astro;

      var weatherModel = {
        location: locationData.locationName,
        highTemp: forecastDayData.maxtemp_c,
        lowTemp: forecastDayData.mintemp_c,
        sunrise: astroData.sunrise,
        sunset: astroData.sunset,
        moonrise: astroData.moonrise,
        moonset: astroData.moonset,
        moon_phase: astroData.moon_phase,
        moon_illumination: astroData.moon_illumination,
      };

      document.getElementById("highTemp").textContent =
        weatherModel.highTemp + " °";
      document.getElementById("lowTemp").textContent =
        weatherModel.lowTemp + " °";

      document.getElementById("sunrise").textContent = weatherModel.sunrise;
      document.getElementById("sunset").textContent = weatherModel.sunset;

      document.getElementById("moonrise").textContent = weatherModel.moonrise;
      document.getElementById("moonset").textContent = weatherModel.moonset;
      var moonImg = document.getElementById("moon_phase_img");
      moonImg.src = moonPhases[weatherModel.moon_phase];
      document.getElementById("moon_illumination").textContent =
        weatherModel.moon_illumination;
    }
  });

  xhr.open("GET", "https://api.aqi.in/api/v1/getWeatherDetailsByLocationName");
  xhr.setRequestHeader(
    "accept",
    "application/json, text/javascript, */*; q=0.01"
  );
  xhr.setRequestHeader("accept-language", "en-US,en;q=0.8");

  // ADD YOUR LOCATION NAME HERE AS FROM AQI WEBSITE

  xhr.setRequestHeader("locationname", "Shahjahan Garden");

  xhr.send();
}

function updateTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  // Manually format hours and minutes to ensure two digits
  const hours12 = hours < 10 ? "0" + hours : hours;
  const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;

  document.getElementById("time").textContent =
    hours12 + ":" + minutesFormatted;
}

function getAllWeather() {
  updateTime();
  getCurrentWeather();
  getAqi();
  getOverallWeather();

  setInterval(updateTime, 60 * 1000);
  setInterval(getCurrentWeather, 5 * 60 * 1000);
  setInterval(getAqi, 5 * 60 * 1000);
  setInterval(getOverallWeather, 10 * 60000);
}

document.addEventListener("webOSLaunch", getAllWeather, true);
document.addEventListener("webOSRelaunch", getAllWeather, true);

// Mapping of moon phases against icons
var moonPhases = {
  "Waning Crescent": "assets/iconSet/waning_crescent.svg",
  "Waning Gibbous": "assets/iconSet/waning_gibbous.svg",
  "Waxing Crescent": "assets/iconSet/waxing_crescent.svg",
  "Waxing Gibbous": "assets/iconSet/waxing_gibbous.svg",
  "New Moon": "assets/iconSet/moon-new.svg",
  "Full Moon": "assets/iconSet/moon-full.svg",
  "Last Quarter": "assets/iconSet/moon-last-quarter.svg",
  "First Quarter": "assets/iconSet/moon-first-quarter.svg",
};
