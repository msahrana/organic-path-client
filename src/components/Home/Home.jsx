import {useState} from "react";
import Banner from "../Banner/Banner";
import {useEffect} from "react";
import AllDataCard from "../AllDataCard/AllDataCard";

const Home = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        {/* search, filter & sort */}
        <h1>Home page</h1>
        {/* data load */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allData.map((singleData) => (
            <AllDataCard
              key={singleData.product_name}
              singleData={singleData}
            ></AllDataCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
