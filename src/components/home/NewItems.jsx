import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Clock from "../UI/clock";
import NFTcard from "../UI/NFTcard";
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
                    <NFTcard item={item}/>
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
