import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Slider from "react-slick";
import SkeletonLoad from "./skeletonLoad";



const HotCollections = () => {
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
        breakpoint: 770,
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

  ;
  const [isLoading, setIsLoading] = useState(false)
  const [NFTs, setNFTs] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const data = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections")
      setNFTs(data.data)
      setIsLoading(true)
      console.log(NFTs)
    }
    fetchPosts()
  }, []);



  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {isLoading ? (
            <>
          {new Array(1).fill(0).map((_, index) => (
            <Slider {...settings}>
              {NFTs.map(nft => (
                <div className="nft__wrapper" key={index}>
                  <div className="nft_coll" key={nft.id}>
                        <div className="nft_wrap">
                          <Link to={`/item-details/${nft.nftId}`}>
                            <img src={nft.nftImage} className="lazy img-fluid" alt="" />
                          </Link>
                        </div>
                        <div className="nft_coll_pp">
                          <Link to={`/author/${nft.authorId}`}>
                            <img className="lazy pp-coll" src={nft.authorImage} alt="" />
                          </Link>
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="nft_coll_info">
                          <Link to="/explore">
                            <h4>{nft.title}</h4>
                          </Link>
                          <span>{nft.nftId}</span>
                        </div>
                  </div>
                </div>
              ))}
            </Slider>
          ))}
          </>
        ) : (
          <>
            <Slider {...settings}>
              <SkeletonLoad />
              <SkeletonLoad />
              <SkeletonLoad />
              <SkeletonLoad />
              <SkeletonLoad />
            </Slider>

          </>
        )}
        </div>
      </div>
    </section>
  )
};

export default HotCollections;
