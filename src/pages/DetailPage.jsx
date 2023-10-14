import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImageURL, options } from "../constants/apiConstants";
import Loading from "../components/Loading";
import millify from "millify";
import Badge from "../components/Badge";

const DetailPage = () => {
  const [detail, setDetail] = useState(null);
  const { movie_id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {!detail && <Loading />}
      {detail && (
        <div className=" movie-detail row p-4">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div className="position-relative">
              <img
                src={baseImageURL.concat(detail.poster_path)}
                style={{ width: "250px" }}
                className="img-fluid rounded shadow-lg"
                alt=""
              />
              <span className="vote bg-warning p-1 rounded shadow position-absolute bottom-0">
                {detail.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
          <div className="col-md-8">
            <h1>{detail.title}</h1>
            <p>{detail.overview}</p>
            <div className="row ">
              <div className="col-6 col-md-12">
                <p>
                  Budget:{" "}
                  {detail?.budget === 0
                    ? "Unknown"
                    : `$ ${millify(detail?.budget)}`}
                </p>
                <p>
                  Revenue:{" "}
                  {detail?.revenue === 0
                    ? "Unknown"
                    : `$ ${millify(detail?.revenue)}`}
                </p>
                <p>
                  Profit:{" "}
                  {detail.budget === 0
                    ? "Unknown"
                    : `$ ${millify(detail?.revenue - detail?.budget)}`}
                </p>
              </div>
              <div className="col-6 col-md-12">
                <Badge barTitle={"Categories"} badgeTitle={detail.genres} />
                <Badge
                  barTitle={"Language"}
                  badgeTitle={detail.spoken_languages}
                />
                <Badge
                  barTitle={"Companies"}
                  badgeTitle={detail.production_companies}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
