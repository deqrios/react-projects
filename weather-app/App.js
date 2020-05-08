import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location"; // 위치 권환,정보를 위한 API.
import axios from "axios"; //  브라우저 및 node.js에 대한 promise 기반 HTTP 클라이언트.
import Weather from "./Weather";
import config from "./config";

// 민감한 정보를 숨기기 위한 config파일 이용. (github이용시.) deploy를 하려면 environment(환경변수)설정 해야 함.
const API_KEY = config.WEATHER_API_KEY;

export default class App extends React.Component {
    state = {
        isLoading: true,
    };

    // => 받아온 좌표값으로 openweathermap API에서 필요한 데이터를 추출, state에 저장.
    getWeather = async (latitude, longitude) => {
        const {
            data: {
                main: { temp, feels_like, temp_min, temp_max, humidity },
                weather,
                name,
            },
            // axios참조 - https://www.npmjs.com/package/axios
        } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        this.setState({
            isLoading: false,
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity,
            condition: weather[0].main,
            name,
        });
    };

    // => 사용자에게 위치정보 동의를 구하고, 받아온 위치정보를 대입해 getWeather함수를 호출. 정보동의를 하지않거나, 실패하면 error문구 띄움.
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
        } catch (e) {
            Alert.alert("Error!!!", "Can't found your Location.");
        }
    };

    // => 앱이 실행되면 getLocation함수를 호출 함.
    componentDidMount() {
        this.getLocation();
    }
    // => isLoding의 값에 따라 로딩화면과 정상실행을 render함.
    render() {
        const { isLoading, temp, condition, feels_like, temp_min, temp_max, humidity, name } = this.state;
        return isLoading ? (
            <Loading />
        ) : (
            <Weather
                temp={Math.round(temp)}
                condition={condition}
                feels_like={Math.round(feels_like)}
                temp_min={Math.round(temp_min)}
                temp_max={Math.round(temp_max)}
                humidity={Math.round(humidity)}
                name={name}
            />
        );
    }
}

const styles = StyleSheet.create({});
