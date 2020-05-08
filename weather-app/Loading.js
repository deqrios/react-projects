import React from "react";

/* 
    StyleSheet : React Native를 사용하면 JavaScript를 사용하여 App의 스타일을 지정할 수 있다. 웹에서 CSS가 작동하는 방식과 일치.
    Text : 텍스트를 표시하기위한 React component. 텍스트는 중첩, 스타일 및 터치 처리를 지원.
    View : 가장 기본적인 UI 구축을 위한 component. flexbox, 스타일, 일부 터치 처리 및 접근성 컨트롤을 사용하여 레이아웃을 지원하는 컨테이너.
    StatusBar : 앱 상태 표시 줄을 제어하는 ​​component.
*/
import { StyleSheet, Text, View, StatusBar } from "react-native";

// => API가 로딩되기전 보여줄 로딩 화면
export default function loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.text}>Deqrios's Weather App</Text>
        </View>
    );
}

// => 로딩화면 스타일 지정.
// create() : 지정된 obj로부터 StyleSheet 스타일 참조를 생성.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#6696ff",
    },
    text: {
        fontSize: 30,
        color: "#fff",
    },
});
