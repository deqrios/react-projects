import React from "react";
import axios from "axios"; //브라우저 및 node.js에 대한 promise 기반 HTTP 클라이언트. 참조 : https://www.npmjs.com/package/axios
import Movie from "../Movie";

// * 리액트 컴포넌트를 상속받아 Home클래스 모듈을 생성.
class Home extends React.Component {
    state = {
        // state 생성 (값을 다루는 실제 데이터.)
        isLoading: true,
        movies: [],
    };

    // => 영화정보 API를 받아와, 필요한 정보를 state에 저장.
    getMovies = async () => {
        // 이벤트 루프를 통해 비동기적으로 작동하는 함수. 암시적으로 promise를 사용하여 결과를 반환.
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // 필요한 데이터만 API에서 받아옴.
        this.setState({ movies, isLoading: false }); // state정보를 update함.
    };

    // => 렌더링 될 때 getMovies함수를 실행해서 영화정보를 받아옴.
    componentDidMount() {
        this.getMovies();
    }

    // => 컴포넌트를 렌더링 함.
    render() {
        const { isLoading, movies } = this.state; // state에서 isLoading과 movies 가져옴.
        return (
            <section className="container">
                {/* :: isLoading의 상태에 따라 Loading화면을 보여주거나 Loading이 완료된 화면을 보여줌.*/}
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading ... </span>
                    </div>
                ) : (
                    <div className="movies">
                        {/* :: 각 영화마다 영화의 정보를 Movie컴포넌트에 argument로 주고 Movie형식에 맞게 render함.*/}
                        {movies.map((movie) => (
                            // map은 callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듦.
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
