import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// * Home과 About링크 생성.
function Navigation() {
    return (
        <div className="nav">
            {/*
                링크 컴포넌트 기능을 이용하여 Home과 About의 링크를 생성. to뒤에는 str, obj, func가 올 수 있다.

                str은 위치의 경로 이름, 검색 및 해시 속성을 연결하여 만든 링크 위치의 문자열 표현입니다. 

                obj 다음 속성 중 하나를 가질 수있는 객체 :
                    pathname : 연결할 경로를 나타내는 문자열입니다. 
                    검색 : 쿼리 매개 변수의 문자열 표현. 
                    해시 : URL에 넣을 해시 (예 : #a-hash.
                    state : 해당 위치에 유지되는 상태입니다.

                func는 현재 위치가 인수로 전달되고 위치 표현을 문자열 또는 객체로 반환해야하는 함수.

                참조 : https://reacttraining.com/react-router/web/api
             */}
            <Link to="/" className="link">
                Home
            </Link>
            <Link to="about" className="link">
                About
            </Link>
        </div>
    );
}

export default Navigation;
