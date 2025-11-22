import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

function Home() {
  let [anime, setAnime] = useState([]);
  let [manga, setManga] = useState([]);
  let [categorie, setCategorie] = useState([]);

  async function fetchAnimes() {
    try {
      let data = await (await fetch("https://api.jikan.moe/v4/anime")).json();
      setAnime(data["data"]);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchManga() {
    try {
      let data = await (await fetch("https://api.jikan.moe/v4/manga")).json();
      setManga(data["data"]);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetcCategories() {
    try {
      let data = await (
        await fetch("https://api.jikan.moe/v4/genres/anime")
      ).json();
      setCategorie(data["data"]);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchAnimes();
    fetchManga();
    fetcCategories();
  }, []);

  return (
    <>
      {/* Hero Banner start */}
      <div className="hero-banner-1 p-40">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-8 mb-30 mb-xxl-0">
              <div className="anime-card ">
                <div className="content">
                  <img
                    src="assets/media/logo/logo-1.png"
                    className="logo"
                    alt
                  />
                  <h2 className="h-40 bold color-white mb-16">
                    Demon Slayer: <br /> Kimetsu no Yaiba
                  </h2>
                  <ul className="tag unstyled mb-16">
                    <li>18+</li>
                    <li>HD</li>
                    <li>2029</li>
                    <li>Anime</li>
                    <li>1hr 45m</li>
                  </ul>
                  <p className="color-white mb-32">
                    <b className="color-medium-gray">Starting:</b> Natsuki
                    Hanae, Akari Kito, Hiro Shimono
                  </p>
                  <div className="btn-block">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                      className="cus-btn primary"
                    >
                      <i className="far fa-play" />
                      Play
                    </a>
                    <a href="anime-detail.html" className="cus-btn sec">
                      <i className="fal fa-info-circle" />
                      More info
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4">
              <div className="row">
                <div className="col-xxl-12 col-xl-6 col-12">
                  <div className="anime-sm-card mb-30">
                    <img
                      src="assets/media/anime-card/img-1.png"
                      className="br-12"
                      alt
                    />
                    <div className="content">
                      <h4 className="h-30 color-white mb-8">
                        My Hero Academia
                      </h4>
                      <ul className="tag unstyled mb-16">
                        <li>2019</li>
                        <li className="sec">18+</li>
                        <li>4 Seasons</li>
                        <li>Anime</li>
                      </ul>
                      <p className=" sm color-medium-gray">
                        Sentenced to death, ninja Gabimaru the Hollow finds
                        himself apathetic.{" "}
                      </p>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#videoModal"
                        className="cus-btn primary space"
                      >
                        <i className="far fa-play" />
                        Play
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-6 col-12">
                  <div className="anime-sm-card">
                    <img
                      src="assets/media/anime-card/img-2.png"
                      className="br-12"
                      alt
                    />
                    <div className="content">
                      <h4 className="h-30 color-white mb-8">Hell’s Paradise</h4>
                      <ul className="tag unstyled mb-16">
                        <li>2019</li>
                        <li className="sec">18+</li>
                        <li>4 Seasons</li>
                        <li>Anime</li>
                      </ul>
                      <p className=" sm color-medium-gray">
                        Sentenced to death, ninja Gabimaru the Hollow finds
                        himself apathetic.{" "}
                      </p>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#videoModal"
                        className="cus-btn primary space"
                      >
                        <i className="far fa-play" />
                        Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Start */}
      <div className="page-content">
        {/* Categories Area Start */}
        <section className="categories p-40">
          <div className="container-fluid">
            <div className="row">
              {categorie ? (
                <>
                  {" "}
                  {categorie.map((value) => {
                    return (
                      <div className="col-xxl-3 col-sm-6 mb-30">
                        <a href={value.url} className="categorie-item">
                          <img src="assets/media/categories/Img-1.png" alt />
                          <div className="content">
                            <h2 className="h-36 mb-1 color-white">
                              {value.name}
                            </h2>
                            <span className="h-20 color-medium-gray">
                              {value.count}+ Animes
                            </span>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <h1>Loading ......</h1>
                </>
              )}
            </div>
          </div>
        </section>
        {/* Categories Area End */}

        <div>
          {/* Anime Area Start */}
          <section className="trending p-40">
            <div className="container-fluid">
              <div className="heading mb-32">
                <h2 className="h-40 bold">Top Anime</h2>
                <Link to={"/listing"} className="light-btn primary">
                  View All <i className="far fa-chevron-right" />
                </Link>
              </div>
              <div className="row">
                {anime ? (
                  <>
                    {anime.map((value, index) => {
                      return (
                        <div className="col-xxl-3 col-xl-4 col-sm-6 mb-30 mb-xl-0">
                          <div className="card">
                            <div className="img-block mb-30">
                              <img
                                src={value.images.jpg.large_image_url}
                                style={{ height: "400px" }}
                                alt
                              />
                              <a
                                href="movie-detail.html"
                                className="cus-btn light"
                              >
                                View Detail
                                <i className="fa fa-eye" />
                              </a>
                            </div>
                            <div
                              className="content mb-4"
                              style={{ height: "100px" }}
                            >
                              <div className="list">{index + 1}</div>
                              <div className="name">
                                <h4 className="h-24 color-white bold">
                                  {value.title_english}
                                </h4>
                                <h6 className="h-20 color-medium-gray ">
                                  {value["genres"][0]["name"]}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <h1>Loading ....</h1>
                  </>
                )}
              </div>
            </div>
          </section>
          {/* Anime Area End */}

          {/* Manga Area Start */}
          <section className="trending p-40">
            <div className="container-fluid">
              <div className="heading mb-32">
                <h2 className="h-40 bold">Top Manga</h2>
                <Link to={"/manga"} className="light-btn primary">
                  View All <i className="far fa-chevron-right" />
                </Link>
              </div>
              <div className="row">
                {manga ? (
                  <>
                    {manga.map((value, index) => {
                      return (
                        <div className="col-xxl-3 col-xl-4 col-sm-6 mb-30 mb-xl-0">
                          <div className="card">
                            <div className="img-block mb-30">
                              <img
                                src={value.images.jpg.large_image_url}
                                style={{ height: "450px" }}
                                alt
                              />
                              <a
                                href="movie-detail.html"
                                className="cus-btn light"
                              >
                                View Details
                                <i className="fa fa-eye" />
                              </a>
                            </div>
                            <div
                              className="content mb-4"
                              style={{ height: "100px" }}
                            >
                              <div className="list">{index + 1}</div>
                              <div className="name">
                                <h4 className="h-24 color-white bold">
                                  {value.title_english}
                                </h4>
                                <h6 className="h-20 color-medium-gray ">
                                  {value["genres"][0]["name"]}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <h1>Loading ....</h1>
                  </>
                )}
              </div>
            </div>
          </section>
          {/* Manga Area End */}
        </div>
      </div>
      {/* Main Content End */}
    </>
  );
}

export default Home;
