import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  // const [like, setLike] = useState(false)
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      console.log(response);
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <Fragment>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.length !== 0 &&
            movies.map((item, id) => <Movie key={id} item={item} />)}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </Fragment>
  );
};

export default Row;
