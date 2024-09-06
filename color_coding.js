function Gettablecolor(a, e) {
  if ("aqi" == e || "AQI-IN" == e)
    return (
      (aqicolor =
        a >= 0 && a <= 50
          ? "#34a12b"
          : a > 50 && a <= 100
          ? "#d4cc0f"
          : a > 100 && a <= 200
          ? "#FFA500"
          : a > 200 && a <= 300
          ? "#FF69B4"
          : a > 300 && a <= 400
          ? "#800080"
          : "#ec0000"),
      aqicolor
    );
  if ("pm25" == e)
    return (
      (aqicolor =
        a >= 0 && a <= 30
          ? "#669D34"
          : a > 30 && a <= 60
          ? "#F5EC00"
          : a > 60 && a <= 90
          ? "#FFAB01"
          : a > 90 && a <= 120
          ? "#EE719E"
          : a > 120 && a <= 250
          ? "#D357FE"
          : "#E22400"),
      aqicolor
    );
  if ("pm10" == e)
    return (
      (aqicolor =
        a >= 0 && a <= 50
          ? "#669D34"
          : a > 50 && a <= 100
          ? "#F5EC00"
          : a > 100 && a <= 250
          ? "#FFAB01"
          : a > 250 && a <= 350
          ? "#EE719E"
          : a > 350 && a <= 430
          ? "#D357FE"
          : "#E22400"),
      aqicolor
    );
  if ("ppb") {
    if ("no2" == e)
      return (
        (aqicolor =
          a >= 0 && a <= 53
            ? "#669D34"
            : a > 53 && a <= 100
            ? "#F5EC00"
            : a > 100 && a <= 360
            ? "#FFAB01"
            : a > 360 && a <= 649
            ? "#EE719E"
            : a > 649 && a <= 1250
            ? "#D357FE"
            : "#E22400"),
        aqicolor
      );
    if ("so2" == e)
      return (
        (aqicolor =
          a >= 0 && a <= 35
            ? "#669D34"
            : a > 35 && a <= 75
            ? "#F5EC00"
            : a > 75 && a <= 185
            ? "#FFAB01"
            : a > 185 && a <= 304
            ? "#EE719E"
            : a > 304 && a <= 605
            ? "#D357FE"
            : "#E22400"),
        aqicolor
      );
    if ("co" == e)
      return (
        (aqicolor =
          a >= 0 && a <= 9e3
            ? "#669D34"
            : a > 9e3 && a <= 24e3
            ? "#F5EC00"
            : a > 24e3 && a <= 4e4
            ? "#FFAB01"
            : a > 4e4 && a <= 55e3
            ? "#EE719E"
            : a > 55e3 && a <= 7e4
            ? "#D357FE"
            : "#E22400"),
        aqicolor
      );
    if ("o3" == e)
      return (
        (aqicolor =
          a >= 0 && a <= 50
            ? "#669D34"
            : a > 50 && a <= 90
            ? "#F5EC00"
            : a > 90 && a <= 120
            ? "#FFAB01"
            : a > 120 && a <= 160
            ? "#EE719E"
            : a > 160 && a <= 200
            ? "#D357FE"
            : "#E22400"),
        aqicolor
      );
  }
  if ("ppm") {
    if ("no2" == e)
      return (
        (aqicolor =
          a >= 0 && a <= 0.053
            ? "#669D34"
            : a > 0.053 && a <= 0.1
            ? "#F5EC00"
            : a > 0.1 && a <= 0.36
            ? "#FFAB01"
            : a > 0.36 && a <= 0.649
            ? "#EE719E"
            : a > 0.649 && a <= 1.25
            ? "#D357FE"
            : "#E22400"),
        aqicolor
      );
    if ("so2" == e)
      return (
        (aqicolor =
          a >= 0 && a <= 0.035
            ? "#669D34"
            : a > 0.035 && a <= 0.075
            ? "#F5EC00"
            : a > 0.075 && a <= 0.185
            ? "#FFAB01"
            : a > 0.185 && a <= 0.304
            ? "#EE719E"
            : a > 0.304 && a <= 0.605
            ? "#D357FE"
            : "#E22400"),
        aqicolor
      );
    if ("co" == e)
      return (
        (aqicolor =
          a >= 0 && a <= 9
            ? "#669D34"
            : a > 9 && a <= 24
            ? "#F5EC00"
            : a > 24 && a <= 40
            ? "#FFAB01"
            : a > 40 && a <= 55
            ? "#EE719E"
            : a > 55 && a <= 70
            ? "#D357FE"
            : "#E22400"),
        aqicolor
      );
    if ("o3" == e)
      return (
        (aqicolor =
          a >= 0 && a <= 0.05
            ? "#669D34"
            : a > 0.05 && a <= 0.09
            ? "#F5EC00"
            : a > 0.09 && a <= 0.12
            ? "#FFAB01"
            : a > 0.12 && a <= 0.16
            ? "#EE719E"
            : a > 0.16 && a <= 0.2
            ? "#D357FE"
            : "#E22400"),
        aqicolor
      );
  }
}
