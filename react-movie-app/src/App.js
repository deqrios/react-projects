/*
    정적 import문은 다른 모듈에서 export한 바인딩을 가져올 때 사용함.
    import defaultExport from "module-name" : module-name이 defaultExport가 있으면 defaultExport자리에 원하는 name을 정의하고 사용.
                                              module-name은 가져올 대상 모듈. 모듈을 담은 .js 파일로의 절대 또는 상대 경로입니다.
    import { anotherExport as shortName } from "module-name" : anotherExport는 default가 아닌 export를 가져오는 방법. {}를 사용.
                                                               shortName은 export의 name이 쓰기 힘들 때 as를 붙여서 쓰기 편한 shortName으로 사용.
*/

// * App.js에 필요한 module 가져옴.
import React from "react"; // React를 사용하기 위해 react 모듈을 가져옴.
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./Navigation";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            {/* URL의 해시 부분 (예 : window.location.hash)을 사용하여 UI와 URL을 동기화하는 라우터*/}
            <Navigation />
            <Route path="/" exact={true} component={Home} /> {/*경로가 현재 URL과 일치 할 때 일부 UI를 렌더링하는 것.*/}
            <Route path="/about" component={About} />
        </HashRouter>
    );
}
/*
    export 문은 JavaScript 모듈에서 함수, 객체, 원시 값을 내보낼 때 사용합니다.
    내보낸 값은 다른 프로그램에서 import 문으로 가져가 사용할 수 있습니다.
    
    / 먼저 선언한 식별자 내보내기
    export { myFunction, myVariable };

    / 각각의 식별자 내보내기
    / (변수, 상수, 함수, 클래스)
    export let myVariable = Math.sqrt(2);
    export function myFunction() { ... };
    ! export default를 사용할 때 var, let, const는 사용하지 못합니다. 
*/
export default App;
