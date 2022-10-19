import React from 'react';
import { Link } from "react-router-dom";
import { Skeleton, Slide } from "@mui/material";

const SkeletonLoad = () => {
    return (
        <div className="nft__wrapper">
                  <div className="nft_coll">
                        <div className="nft_wrap">
                          <Link to="/item-details">
                            <Skeleton variant='rectangle' height={145}/> 
                          </Link>
                        </div>
                        <div className="nft_coll_pp">
                          <Link to="/author">
                            <Skeleton variant='circular' height={50}/>
                          </Link>
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="nft_coll_info">
                          <Link to="/explore">
                            <span>{<Skeleton variant='text' width={90}/>}</span>
                          </Link>
                          <span>{<Skeleton variant='text' width={40}/>}</span>
                        </div>
                  </div>
                </div>
    );
}

export default SkeletonLoad;
