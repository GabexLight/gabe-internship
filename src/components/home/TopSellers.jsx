import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopSellers = () => {

  const [newItems, setNewItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers")
      setNewItems(data.data)
      setIsLoading(true)
    }
    fetchData()
  }, [])


  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            {isLoading ? (
              <>
                {new Array(1).fill(0).map((_, index) => (
                  <ol className="author_list">
                    {newItems.map(item => (
                      <li key={item.id}>
                        <div className="author_list_pp">
                          <Link to={`/author/${item.authorId}`}>
                            <img
                              className="lazy pp-author"
                              src={item.authorImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${item.authorId}`}>{item.authorName}</Link>
                          <span>{item.price} ETH</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                ))}
              </>
            ) : (
              <>
                  <ol className="author_list">
                {new Array(12).fill(0).map((_, index) => (
                    <li >
                      <div className="author_list_pp">
                        <Link to="">
                          <Skeleton variant="circular" height={60} width={60} />
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to=""><Skeleton variant="rectangle" className="top__skeleton" width={100} /></Link>
                        <span><Skeleton variant="rectangle" className="top__skeleton" width={45} /></span>
                      </div>
                    </li>
                ))}
                  </ol>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
