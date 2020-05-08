import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types"; // propTypes를 쓰기위한 API.
import { MaterialCommunityIcons } from "@expo/vector-icons"; // vector이미지 아이콘을 가져올 수 있는 API 모듈.
import { LinearGradient } from "expo-linear-gradient"; // expo-linear-gradient는 그라디언트 뷰를 렌더링하는 API.
import { Image } from "react-native"; // 다양한 유형의 이미지를 표시하기위한 React component.

// => 로딩 완료시 보여줄 weather 앱
export default function Weather({ temp, condition, feels_like, temp_min, temp_max, humidity, name }) {
    const date = new Date();
    const getYears = date.getFullYear();
    const getMonth = date.getMonth() + 1;
    const getDate = date.getDate();
    const getDays = date.getDay();
    const getHours = date.getHours();
    const getMinutes = date.getMinutes();
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // gradient로 전체 배경을 감싸고, 내부는 view단위로 나눠서 구성.
    return (
        <LinearGradient colors={weatherOptions[condition].gradient /* 넘어오는 condition에 따라 배경색을 바꿈. */} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.city}>{name /* API에서 받아온 정보로 현재 위치한 도시명 표출. */}</Text>
                <View style={styles.temperature}>
                    <Image
                        source={
                            /* 이미지 소스를 로드하는 동안 표시 할 정적 이미지. require('./path/to/image.png') */ require("./assets/temperature.png")
                        }
                        fadeDuration={/* android전용.*/ 0}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text style={styles.temp}>{temp /* 현재 기온 표출. */}℃</Text>
                </View>
            </View>
            <View style={styles.topLayer}>
                <StatusBar barStyle="light-content" />
                <Image
                    source={weatherOptions[condition].icon /* condition에 따라 icon을 바꿈. */}
                    fadeDuration={0}
                    style={{ width: 200, height: 200 }}
                />
                <Text style={styles.title}>{weatherOptions[condition].title /* condition에 따라 title을 바꿈. */}</Text>
            </View>
            <View style={styles.bottomLayer}>
                <View style={styles.dateLayer}>
                    <Text style={styles.date}>
                        {getYears}.{getMonth}.{getDate}.{day[getDays]}
                    </Text>
                    <Text style={styles.time}>
                        {getHours}:
                        {`${getMinutes >= 10 ? `${getMinutes}` : `0${getMinutes}`}` /* 현재의 minutes이 10보다 작으면 앞자리에 0을 붙여서 표현. */}
                    </Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.feeltemp}>Feels Like: {feels_like}℃</Text>
                    <Text style={styles.temp_min}>Min: {temp_min}℃</Text>
                    <Text style={styles.temp_max}>Max: {temp_max}℃</Text>
                    <Text style={styles.humidity}>Humidity: {humidity}%</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

// weather의 값들을 명확하고 엄격하게 다루기 위해 사용하는 propTypes. (generic 같은 것.)
Weather.propTypes = {
    temp: PropTypes.number.isRequired, // temp가 number타입이 아니면 error반환.
    condition: PropTypes.oneOf([
        // condition이 아래의 특정값이 아닐 시 error반환.
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds",
    ]).isRequired,
};

// 각 condition들의 option을 가지고 있는 weatherOptions object.
const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#0f0c29", "#302b63", "#24243e"], // 바꿀 gradient 배경색.
        title: "Storm", //  condition title.
        icon: require("./assets/thunder.png"), // icon의 path 경로.
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#1A2980", "#26D0CE"],
        title: "Drizzle",
        icon: require("./assets/drizzle.png"),
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#373B44", "#4286f4"],
        title: "Rain",
        icon: require("./assets/rain.png"),
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#000046", "#1CB5E0"], //["#0052D4", "#65C7F7", "#9CECFB"],
        title: "Snow",
        icon: require("./assets/snow.png"),
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#3f4c6b", "#bdc3c7"],
        title: "Smoke",
        icon: require("./assets/smoke.png"),
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#3f4c6b", "#bdc3c7"],
        title: "Haze",
        icon: require("./assets/fog.png"),
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Dust",
        icon: require("./assets/dust.png"),
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Fog",
        icon: require("./assets/fog.png"),
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Sand",
        icon: require("./assets/sand.png"),
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#3f4c6b", "#bdc3c7"],
        title: "Ash",
        icon: require("./assets/ash.png"),
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["#0f0c29", "#302b63", "#24243e"],
        title: "Squall",
        icon: require("./assets/squall.png"),
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#000000", "#434343"],
        title: "Tornado",
        icon: require("./assets/tornado.png"),
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
        title: "Clear",
        icon: require("./assets/sunny-day.png"),
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Clouds",
        icon: require("./assets/overcast.png"),
    },
};

// 기본 styleSheet 생성. 전체적인 기본 style 설정.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3c4966",
    },
    temp: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "500",
    },
    city: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "300",
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
    },
    temperature: {
        flexDirection: "row",
        alignItems: "center",
    },
    topLayer: {
        flex: 3.5,
        justifyContent: "center",
        alignItems: "center",
    },
    bottomLayer: {
        flex: 2.5,
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 70,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 15,
        color: "ivory",
    },
    dateLayer: {
        alignItems: "center",
    },
    date: {
        color: "ivory",
        fontSize: 17,
    },
    time: {
        color: "ivory",
        fontSize: 47,
    },
    info: {},
    feeltemp: { color: "ivory", fontSize: 18 },
    temp_min: { color: "ivory", fontSize: 18 },
    temp_max: { color: "ivory", fontSize: 18 },
    humidity: { color: "ivory", fontSize: 18 },
});
