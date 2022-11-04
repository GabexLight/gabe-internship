import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewItemsSkelton from "../home/NewItemsSkelton";
import NFTcard from "../UI/NFTcard";

// https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=likes_high_to_low

const ExploreItems = () => {

  const [newItems, setNewItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [visible, setVisible] = useState(8)


  function showMoreItems() {
    setVisible((prevValue) => prevValue + 4)
  }

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore")
      setNewItems(data.data)
      setIsLoading(true)
    }
    fetchData()
  }, [])

  async function filterNFTs (filter) {
    console.log(filter)
    if (filter === "price_low_to_high") {
      let data = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=price_low_to_high")
      setNewItems(data.data)

    }
    if (filter === "price_high_to_low") {
      let data = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=price_high_to_low")
      setNewItems(data.data)

    }
    if (filter === "likes_high_to_low") {
      let data = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=likes_high_to_low")
      setNewItems(data.data)

    }
  }

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={(event) => filterNFTs(event.target.value)}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {isLoading ? (
        <>
      {new Array(1).fill(0).map((_, index) => (
        <>
          {newItems.slice(0, visible).map(item => (
            <div
              key={item.id}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <NFTcard item={item} />
            </div>
          ))}
        </>
      ))}
      <div className="col-md-12 text-center">
        {visible < 13 &&
          <Link to="" id="loadmore" className="btn-main lead" onClick={showMoreItems}>
            Load more
          </Link>
        }
      </div>
      </>
      ) : (
        <>
              {new Array(8).fill(0).map((_, index) => (
                <>
        <div
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 nft__skeleton--wrapper2 "
              style={{ display: "block", backgroundSize: "cover" }}
            >

          <NewItemsSkelton />

            </div>
            </>
            ))}
        </>
      )}
    </>
  );
};

export default ExploreItems;
