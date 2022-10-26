import React from 'react';
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

const NewItemsSkelton = () => {
    return (
        <div className="nft__wrapper" >
        <div className="nft__item" >
          <div className="author_list_pp">
            <Link
              to="/author"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Creator: Monica Lucas"
            >
              <Skeleton variant='circular' height={40} width={40}/>
              <i className="fa fa-check"></i>
            </Link>
          </div>
          <div className="de_countdown">5h 30m 32s</div>

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

            <Link to="/item-details">
              <Skeleton variant='rectangle' height={260}/>
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/item-details">
              <h4>{<Skeleton variant='rectangle' width={140} />}</h4>
            </Link>
            <div className="nft__item_price">{<Skeleton variant='rectangle' width={110} />}</div>
            <div className="nft__item_like">
              <i className="fa fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewItemsSkelton;
