import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Searchresult() {

    let query = useLocation().search.split("=")[1];
    console.log(query);

    let[animes,setAnimes] = useState([]);

    async function FetchAnimes() {

        try{
            let animes = await(await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)).json();
            console.log(animes);
            setAnimes(animes["data"])
        }catch{
                console.log("error",e);
        }
    }

    useEffect(()=>{
        FetchAnimes();
    },[query])
  return (
    <div>
         <div className="page-content">
  {/* Anime Listing Area Start */}
  <section className="trending p-40">
    <div className="container-fluid">
      <div className="row">
      
        <div className="col-xxl-12">
          <p className="sm-title mb-40">154 items</p>
           <div className="row">
                {animes ? (
                  <>
                    {animes.map((value, index) => {
                      return (
                    
                        <>
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
                           
                              <div className="name">
                                <h4 className="h-24 color-white bold">
                                  {value.title_english}
                                </h4>
                                <ul className='tag unstlyed'>
                                    <li>{value.year}</li>
                                    <li className='icon'><i className='fas fa-star' />{value.score}</li>

                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <h1>Loading ....</h1>
                  </>
                )}
              </div>
          <ul className="pagination unstyled">
            <li><a href="#"><i className="fas fa-chevron-left" /></a></li>
            <li><a href="#" className="active">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li><a href="#"><i className="fas fa-chevron-right" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Anime Listing Area end */}
</div>
</div>




           
  )
}

export default Searchresult