import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ItemDetailSkeleton from "../components/home/ItemDetailSkeleton";

const ItemDetails2 = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [NFTs, setNFTs] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            window.scrollTo(0, 0);
            const data = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections")
            setNFTs(data.data)
            setIsLoading(true)
        }
        fetchPosts()
    }, []);
    console.log(NFTs)
    

    const { nftId } = useParams()
    const nft = NFTs.find(nft => nft.nftId == nftId)
    console.log(nft)

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
                                        src={nft.nftImage}
                                        className="img-fluid img-rounded mb-sm-30 nft-image"
                                        alt=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="item_info">
                                        <h2>{nft.title}</h2>

                                        <div className="item_info_counts">
                                            <div className="item_info_views">
                                                <i className="fa fa-eye"></i>
                                                100
                                            </div>
                                            <div className="item_info_like">
                                                <i className="fa fa-heart"></i>
                                                {nft.likes}
                                            </div>
                                        </div>
                                        <p>
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                            illo inventore veritatis et quasi architecto beatae vitae
                                            dicta sunt explicabo.
                                        </p>
                                        <div className="d-flex flex-row">
                                            <div className="mr40">
                                                <h6>Owner</h6>
                                                <div className="item_author">
                                                    <div className="author_list_pp">
                                                        <Link to={`/authorId/${nft.authorId}`}>
                                                            <img className="lazy" src={nft.authorImage} alt="" />
                                                            <i className="fa fa-check"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="author_list_info">
                                                        <Link to={`/authorId/${nft.authorId}`}>Monica Lucas</Link>
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
                                                        <Link to={`/authorId/${nft.authorId}`}>
                                                            <img className="lazy" src={nft.authorImage} alt="" />
                                                            <i className="fa fa-check"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="author_list_info">
                                                        <Link to={`/authorId/${nft.authorId}`}>Monica Lucas</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="spacer-40"></div>
                                            <h6>Price</h6>
                                            <div className="nft-item-price">
                                                <img src={EthImage} alt="" />
                                                <span>0.29</span>
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
}

export default ItemDetails2;