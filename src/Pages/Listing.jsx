import React, { useEffect, useState } from "react";


function Listing() {
  let [items, setItems] = useState();
  let [anime, setAnime] = useState(null);
  let [totalCount, setTotalCount] = useState(0);
  let [currentCount, setCurrentCount] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);
  let [lastPage, setLastPage] = useState(1);

  async function FetchAnime() {
    fetch("https://api.jikan.moe/v4/anime")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data["data"]);
      });
  }

  useEffect(() => {
    FetchAnime();
  }, []);

  async function FetchPageWiseAnime() {
    try {
      let anime = await (
        await fetch(`https://api.jikan.moe/v4/anime?page=${currentPage}`)
      ).json();
      setAnime(anime["data"]);
      setTotalCount(anime["pagination"]["items"]["total"]);
      setCurrentCount(anime["pagination"]["items"]["count"]);
      setLastPage(anime["pagination"]["last_visible_page"]);
    } catch (e) {
      console.log("Some error Occured : ", e);
    }
  }

  useEffect(() => {
    FetchPageWiseAnime();
  }, [currentPage]);

  console.log(items);
  console.log(anime);

  return (
    <>
      <div className="page-content">
        {/* Anime Listing Area Start */}
        <section className="trending p-40">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-3">
                <div className="row">
                  <div className="col-xxl-12 col-xl-4"></div>
                  <div className="col-xxl-12 col-xl-8">
                    <div className="top-anime mb-12">
                      <h2 className="h-30 bold color-white mb-12">
                        Top Rated Anime
                      </h2>
                      <div className="row">
                        <div className="col-xxl-12 col-md-6">
                          <a
                            href="movie-detail.html"
                            className="anime-card mb-12"
                          >
                            <img src="assets/media/anime-card/img-27.png" alt />
                            <div className="text-block">
                              <div className="sm-title">
                                <h6 className="color-white">
                                  The Daily Life of the Immortal King
                                </h6>
                                <p className="color-medium-gray sm sec">
                                  Season 3
                                </p>
                              </div>
                              <ul className="tag unstyled">
                                <li>Action</li>
                                <li>2021</li>
                                <li>EP-24</li>
                                <li className="icon">
                                  <i className="fas fa-star" />
                                </li>
                                <li>8.5</li>
                              </ul>
                            </div>
                          </a>
                        </div>
                        <div className="col-xxl-12 col-md-6">
                          <a
                            href="movie-detail.html"
                            className="anime-card mb-12"
                          >
                            <img src="assets/media/anime-card/img-28.png" alt />
                            <div className="text-block">
                              <div className="sm-title">
                                <h6 className="color-white">
                                  The Daily Life of the Immortal King
                                </h6>
                                <p className="color-medium-gray sm sec">
                                  Season 3
                                </p>
                              </div>
                              <ul className="tag unstyled">
                                <li>Action</li>
                                <li>2021</li>
                                <li>EP-24</li>
                                <li className="icon">
                                  <i className="fas fa-star" />
                                </li>
                                <li>8.5</li>
                              </ul>
                            </div>
                          </a>
                        </div>
                        <div className="col-xxl-12 col-md-6">
                          <a
                            href="movie-detail.html"
                            className="anime-card mb-12"
                          >
                            <img src="assets/media/anime-card/img-27.png" alt />
                            <div className="text-block">
                              <div className="sm-title">
                                <h6 className="color-white">
                                  The Daily Life of the Immortal King
                                </h6>
                                <p className="color-medium-gray sm sec">
                                  Season 3
                                </p>
                              </div>
                              <ul className="tag unstyled">
                                <li>Action</li>
                                <li>2021</li>
                                <li>EP-24</li>
                                <li className="icon">
                                  <i className="fas fa-star" />
                                </li>
                                <li>8.5</li>
                              </ul>
                            </div>
                          </a>
                        </div>
                        <div className="col-xxl-12 col-md-6">
                          <a
                            href="movie-detail.html"
                            className="anime-card mb-12"
                          >
                            <img src="assets/media/anime-card/img-29.png" alt />
                            <div className="text-block">
                              <div className="sm-title">
                                <h6 className="color-white">
                                  The Daily Life of the Immortal King
                                </h6>
                                <p className="color-medium-gray sm sec">
                                  Season 3
                                </p>
                              </div>
                              <ul className="tag unstyled">
                                <li>Action</li>
                                <li>2021</li>
                                <li>EP-24</li>
                                <li className="icon">
                                  <i className="fas fa-star" />
                                </li>
                                <li>8.5</li>
                              </ul>
                            </div>
                          </a>
                        </div>
                        <div className="col-xxl-12 col-md-6">
                          <a
                            href="movie-detail.html"
                            className="anime-card mb-12"
                          >
                            <img src="assets/media/anime-card/img-30.png" alt />
                            <div className="text-block">
                              <div className="sm-title">
                                <h6 className="color-white">
                                  The Daily Life of the Immortal King
                                </h6>
                                <p className="color-medium-gray sm sec">
                                  Season 3
                                </p>
                              </div>
                              <ul className="tag unstyled">
                                <li>Action</li>
                                <li>2021</li>
                                <li>EP-24</li>
                                <li className="icon">
                                  <i className="fas fa-star" />
                                </li>
                                <li>8.5</li>
                              </ul>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9">
                <p className="sm-title mb-40">
                  {currentCount} items {totalCount}
                </p>
                <div className="row">
                  {anime ? (
                    <>
                      {anime.map((value) => {
                        return (
                          <div className="col-md-4 col-sm-6 mb-40">
                            <div className="card st-2 m-0">
                              <div className="img-block mb-20">
                                <a href={value.url}>
                                  <img src={value.images.jpg.image_url} alt />
                                </a>
                                <a href={value.url} className="cus-btn light">
                                  Stream Now
                                  <i className="far fa-play" />
                                </a>
                              </div>
                              <div className="content">
                                <h4 className="h-24 color-white bold">
                                  {value.title}
                                </h4>
                                <ul className="tag unstyled">
                                  <li>{value.type}</li>
                                  <li>{value.year}</li>
                                  <li>{value.episodes}</li>
                                  <li className="icon">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>{value.score}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <h2>Anime Loading...</h2>
                    </>
                  )}
                </div>
                <ul className="pagination unstyled">
                  <li>
                    <button
                      disabled={currentPage === 1}
                      onClick={() => {
                        setCurrentPage(currentPage - 1);
                      }}
                      className="bg-dark text-warning border-0"
                    >
                      <i className="fas fa-chevron-left" />
                    </button>
                  </li>
                  <li>
                    <a href="#" className="active">
                      {currentPage}
                    </a>
                  </li>
                  <li>
                    <button
                      disabled={currentPage === lastPage}
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                      }}
                      className="bg-dark text-warning border-0"
                    >
                      <i className="fas fa-chevron-right" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Anime Listing Area end */}
      </div>
    </>
  );
}

export default Listing;
