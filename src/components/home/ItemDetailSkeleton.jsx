import { Skeleton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetailSkeleton = () => {
    return (
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
          <section aria-label="section" className="mt90 sm-mt-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <Skeleton variant='rectangle' height={550}/>
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <h2><Skeleton width={240}/></h2>
  
                    <div className="item_info_counts">
                      <div className="item_info_views">
                        <i className="fa fa-eye"></i>
                        <Skeleton />
                      </div>
                      <div className="item_info_like">
                        <i className="fa fa-heart"></i>
                        <Skeleton />
                      </div>
                    </div>
                    <p>
                    <Skeleton />
                    <Skeleton width={500}/>
                    </p>
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6><Skeleton width={90}/></h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to="/author">
                            <Skeleton variant='circular' height={40}/>
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to="/author"><Skeleton width={90}/></Link>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <h6><Skeleton width={90}/></h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to="/author">
                            <Skeleton variant='circular' height={40} />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to="/author"><Skeleton width={90} /></Link>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6><Skeleton width={90}/></h6>
                      <div className="nft-item-price">
                        <Skeleton width={100}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}

export default ItemDetailSkeleton;
