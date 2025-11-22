import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Mangadetail() {
  let [detail, setDetail] = useState([]);
  let [director, setDirector] = useState({});
  let [img,setImg] = useState({});
  let [date,setDate] = useState({});

  let manga = useLocation().pathname.split("/")[2];

  useEffect(() => {
    if (!manga) return;

    fetch(`https://api.jikan.moe/v4/manga/${manga}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail(data.data);
        setDirector(data.data.authors[0]);
        setImg(data.data.images.webp);
        setDate(data.data.published.prop.from)
      });
  }, []);

  console.log(detail);

  return (
    <>
      {/* Hero Banner start */}
      <div className="inner-banner p-40">
        <div className="container-fluid d-flex justify-content-center">
          <img src={img.large_image_url} alt="" />
        </div>
      </div>

      {/* Main Content Start */}
      <div className="page-content">
        {/* Movie Detail Area Start */}
        <section className="movie-detail p-40">
          <div className="container-fluid">
            {detail ? (
              <>
                <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-9 mb-lg-0 mb-24">
                    <div className="name-rating mb-24">
                      <h2 className="h-30 bold color-white ">
                        {detail.title_english} : Chepter : {detail.chapters}
                      </h2>
                      <div className="rating">
                        <span className="h-24 color-white">
                          {detail.score}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M16.0001 23.027L21.5334 26.3737C22.5468 26.987 23.7868 26.0803 23.5201 24.9337L22.0534 18.6403L26.9468 14.4003C27.8401 13.627 27.3601 12.1603 26.1868 12.067L19.7468 11.5203L17.2268 5.57367C16.7734 4.49367 15.2268 4.49367 14.7734 5.57367L12.2534 11.507L5.81343 12.0537C4.6401 12.147 4.1601 13.6137 5.05343 14.387L9.94676 18.627L8.4801 24.9203C8.21343 26.067 9.45343 26.9737 10.4668 26.3603L16.0001 23.027Z"
                              fill="#EEAA0F"
                            />
                          </svg>
                        </span>
                        <span className="h-24 color-white">(22.6k)</span>
                      </div>
                    </div>
                    <ul className="tag unstyled mb-24">
                      <li>18+</li>
                      <li>HD</li>
                      <li>{date.year}</li>
                      <li>Anime</li>
                      <li>1hr 45m</li>
                    </ul>
                    <h5 className="h-24 color-white mb-16 bold">
                      About the Story
                    </h5>
                    <p className="sec color-white mb-24">{detail.synopsis}</p>
                    <p className="sec color-white mb-16">
                      <span className="color-medium-gray">Staring:</span>{" "}
                      Natsuki Hanae, Akari Kito, Hiro Shimono{" "}
                    </p>
                    <p className="sec color-white mb-16">
                      <span className="color-medium-gray">Language:</span>{" "}
                      Japanese, English, English (India), Español (América
                      Latina)
                    </p>
                    <p className="sec color-white mb-30">
                      <span className="color-medium-gray">Subtitles:</span>{" "}
                      Japanese, English
                    </p>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                      className="cus-btn primary"
                    >
                      <i className="far fa-play" />
                      Play
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-lg-3">
                    <div className="about">
                      <h3 className="h-30 bold color-white mb-24">About</h3>
                      <p className="sec color-white mb-8">
                        <span className="color-medium-gray">Type:</span>
                        {detail.type}
                      </p>
                      <p className="sec color-white mb-8">
                        <span className="color-medium-gray">Author:</span> {director.name}
                      </p>
                      <p className="sec color-white mb-8">
                        <span className="color-medium-gray">Date aired:</span>{" "}
                        {date.month} , {date.year}
                      </p>
                      <p className="sec color-white mb-8">
                        <span className="color-medium-gray">Status:</span>{" "}
                        {detail.status}
                      </p>
                      <p className="sec color-white mb-8">
                        <span className="color-medium-gray">Country:</span>{" "}
                        Japan
                      </p>
                      <p className="sec color-white mb-8">
                        <span className="color-medium-gray">Premiered:</span>{" "}
                        Winter 2022
                      </p>
                      <p className="sec color-white mb-24">
                        <span className="color-medium-gray">Duration:</span> 120
                        min
                      </p>
                      <div className="categorie">
                        <p className="sec color-medium-gray">Genre:</p>
                        <ul className="categorie-list unstyled">
                          <li>
                            <a href="#">Action</a>
                          </li>
                          <li>
                            <a href="#">Thriller</a>
                          </li>
                          <li>
                            <a href="#">Sci-Fi</a>
                          </li>
                          <li>
                            <a href="#">Cyberpunk</a>
                          </li>
                          <li>
                            <a href="#">Shounen</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <h1>Data is loading</h1>
              </>
            )}
            <div className="line" />
          </div>
        </section>
        {/* Movie Detail Area end */}
      </div>
      {/* Main Content End */}
    </>
  );
}

export default Mangadetail;
