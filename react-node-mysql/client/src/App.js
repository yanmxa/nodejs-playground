import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((res) => {
      setMovieReviewList(res.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    }).then((err, ret) => {});
    setMovieReviewList([
      ...movieReviewList,
      { movieName: movieName, movieReview: review },
    ]);
  };
  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  };

  const updateReview = (movie) => {
    Axios.put("http://localhost:3001/api/update", {
      movieName: movie,
      movieReview: newReview,
    });
  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name</label>
        <input
          type="text"
          name="movieName"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <label>Review</label>
        <input
          type="text"
          name="movieReview"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />
        <button onClick={submitReview}>Submit</button>
        {movieReviewList.map((item) => {
          return (
            <div className="card">
              <h1>{item.movieName}</h1>
              <p>{item.movieReview}</p>
              <button onClick={() => deleteReview(item.movieName)}>
                Delete
              </button>
              <input
                type="text"
                id="updateInput"
                onChange={(e) => {
                  setNewReview(e.target.value);
                }}
              />
              <button onClick={() => updateReview(item.movieName)}>
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
