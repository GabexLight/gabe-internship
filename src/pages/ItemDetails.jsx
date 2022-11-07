import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ItemDetailSkeleton from "../components/home/ItemDetailSkeleton";

const ItemDetails = () => {
  
  const [newItems, setNewItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  let { nftId } = useParams()
  
  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      const data = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`)
      setNewItems(data.data)
      setIsLoading(true)
    }
    fetchData()
  }, [])
  
  
  return (
      <div id="wrapper" >
    {isLoading ? (
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
          <section aria-label="section" className="mt90 sm-mt-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={newItems.nftImage}
                    className="img-fluid img-rounded mb-sm-30 nft-image"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <h2>{newItems.title}</h2>
  
                    <div className="item_info_counts">
                      <div className="item_info_views">
                        <i className="fa fa-eye"></i>
                        {newItems.views}
                      </div>
                      <div className="item_info_like">
                        <i className="fa fa-heart"></i>
                        {newItems.likes}
                      </div>
                    </div>
                    <p>
                      {newItems.description}
                    </p>
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6>Owner</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to={`/author/${newItems.ownerId}`}>
                              <img className="lazy" src={newItems.ownerImage} alt="" />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to={`/author/${newItems.ownerId}`}>{newItems.ownerName}</Link>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <h6>Creator</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to={`/author/${newItems.creatorId}`}>
                              <img className="lazy" src={newItems.creatorImage} alt="" />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to={`/author/${newItems.creatorId}`}>{newItems.creatorName}</Link>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6>Price</h6>
                      <div className="nft-item-price">
                        <img src={EthImage} alt="" />
                        <span>{newItems.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    ) : (
      <ItemDetailSkeleton />
      )}
      </div>
      
  );
};

export default ItemDetails;
