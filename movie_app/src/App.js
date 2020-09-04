import React from 'react';
import axios from "axios";
import Movie from "./movie";
import "./App.css";

class App extends React.Component{
  state={
    isLoading : true,
    movies : []
  };

  getMovies = async () =>{
    //await: 비동기, 너는 이걸 기다려야해
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies: movies, isLoading: false})
    //movies:from state , movies: 내가 fetch한것. javascript는 movies하나만 써도 알아먹음
  }
  componentDidMount(){
    this.getMovies();

    // setTimeout( () => {
    //   this.setState({ isLoading : false })
    // }, 6000);
    //5초후 로딩되면 ready로 바꾸는 예시
  }

  render(){
    //state에서 가져오는법
    // css를 위한 class는 react가 헷갈리지 않도록 className으로 써줘야함
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
          ) : (            
          <div className="movies">
          {movies.map( movie =>( 
          //return 생략

            <Movie 
              key={movie.id}
              id={movie.id} 
              title= {movie.title}
              year={movie.year} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
        ))}
        </div>
        )} 
      </section>
    );
  }
}

export default App;