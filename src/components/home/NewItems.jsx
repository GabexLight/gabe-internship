import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Clock from "../UI/clock";
import NewItemsSkelton from "./NewItemsSkelton";



const NewItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ] 
  };

  const [newItems, setNewItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems")
      setNewItems(data.data)
      setIsLoading(true)
      console.log(newItems)
    }
    fetchData()
  }, [])


  return (
    <section id="section-items" className="no-bottom" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {isLoading ? (
            <>
              {new Array(1).fill(0).map((_, index) => (
                <Slider {...settings}>
                  {newItems.map(item => (
                    <div className="nft__wrapper" key={index}>
                      <div className="nft__item" key={item.id}>
                        <div className="author_list_pp">
                          <Link
                            to={`/authorId/${item.authorId}`}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Creator: Monica Lucas"
                          >
                            <img className="lazy" src={item.authorImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        {item.expiryDate ? (
                          <div className="de_countdown">< Clock item={item}/></div>
                        ) : (
                          <div></div>
                        )

                        }
                        <div className="nft__item_wrap">
                          <div className="nft__item_extra">
                            <div className="nft__item_buttons">
                              <button>Buy Now</button>
                              <div className="nft__item_share">
                                <h4>Share</h4>
                                <a
                                  href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="fa fa-facebook fa-lg"></i>
                                </a>
                                <a
                                  href="https://twitter.com/intent/tweet?url=https://gigaland.io"
                                  target="_blank" 
                                  rel="noreferrer"
                                >
                                  <i className="fa fa-twitter fa-lg"></i>
                                </a>
                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                  <i className="fa fa-envelope fa-lg"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <Link to={`/item-details/${item.nftId}`}>
                            <img
                              src={item.nftImage}
                              className="lazy nft__item_preview"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="nft__item_info">
                          <Link to={`/item-details/${item.nftId}`}>
                            <h4>{item.title}</h4>
                          </Link>
                          <div className="nft__item_price">{item.price} ETH</div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart"></i>
                            <span>{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              ))}
            </>
          ) : (
            <>
              <Slider  {...settings}>
                <NewItemsSkelton />
                <NewItemsSkelton />
                <NewItemsSkelton />
                <NewItemsSkelton />
              </Slider>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
