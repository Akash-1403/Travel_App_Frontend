import { Navbar, HotelCard , Categories } from "../../components";
import axios from "axios"
import { useState, useEffect } from "react";
import "./home.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCategory } from "../../Context";

// http://localhost:5173
export const Home = () => {

  const [hotels, setHotels] = useState([]);
  const [hasMore, setHasmore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(16);
  const [testData, setTestData] = useState([]);
  const {hotelCategory } = useCategory();
  useEffect(() => {
    (async () => {

      try {
        const { data } = await axios.get(`https://travel-app-backend-0d3j.onrender.com/api/hotels?category=${hotelCategory}`);


        const hotelData = data.data;
        // console.log(hotelData)

        setTestData(hotelData);
        setHotels(hotelData ? hotelData.slice(0, 16) : []);
        // setHotels(hotelData)

      } catch (error) {
        console.log(error)

      }

    })()

  }, [hotelCategory])

  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasmore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(hotels.concat(testData.slice(currentIndex , currentIndex+ 16)));
        setCurrentIndex(prev => prev + 16);
      } else {
        setHotels([])
      }
    }, 1000)
  }

  return (
    <>
      <Navbar />
      <Categories/>

      {
        hotels && hotels.length > 0 ? (
          <InfiniteScroll
            dataLength={hotels.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={hotels.length > 0 && <h3 className=".alert-text" >Loading ....</h3>}
            endMessage={<p className=".alert-text" >You have seen all </p>}

          >
            <main className="main" >
              {
                hotels && hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)
              }

            </main>

          </InfiniteScroll>

        ) : (<></>)
      }

      {/* <main className="main" >
              {
                hotels && hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)
              }

            </main> */}




    </>
  );
};