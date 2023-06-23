import { useEffect, useState } from "react";
import axios from "axios";
import CountryView from "../shared/CountryView";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SocialLogo from "../shared/SocialLogo";
import HomeButton from "../shared/HomeButton";
import "./HomePage.scss";
interface Country {
  name: string;
  region: string;
  flag: string;
}

const HomePage = () => {
  const email = useSelector((state: RootState) => state.auth.email);
  console.log("email: ", email);
  const [countries, setCountries] = useState<Country[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(6); 
  const [selectedRegion, setSelectedRegion] = useState("All"); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<Country[]>(
          "https://restcountries.com/v2/all?fields=name,region,flag"
        );
        setCountries(response.data);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching countries:", error);
        setIsLoading(false); 
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries =
    selectedRegion === "All"
      ? countries
      : countries.filter((country) => country.region === selectedRegion);

  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;
  const displayedCountries = filteredCountries.slice(firstIndex, lastIndex);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleRegionFilter = (region: string) => {
    setSelectedRegion(region);
    setCurrentPage(1); 
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader"></div>
      </div>
    ); 
  }

  return (
    <section className="py-10 px-20">
      <div className="flex justify-between">
        <div className="text-[24px] font-bold text-[#3D3D3D]">Countries</div>
        <div className="flex justify-center mb-8">
          <HomeButton
            region="All"
            selectedRegion={selectedRegion}
            onClick={handleRegionFilter}
          />
          <HomeButton
            region="Asia"
            selectedRegion={selectedRegion}
            onClick={handleRegionFilter}
          />
          <HomeButton
            region="Europe"
            selectedRegion={selectedRegion}
            onClick={handleRegionFilter}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedCountries.map((country, index) => (
          <CountryView
            key={index}
            name={country.name}
            region={country.region}
            flag={country.flag}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-16">
        <button
          className="mx-2 py-2 px-4 rounded bg-gray-200"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          className="mx-2 py-2 px-4 rounded bg-gray-200"
          onClick={goToNextPage}
          disabled={
            currentPage ===
            Math.ceil(filteredCountries.length / countriesPerPage)
          }
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div></div>
        <div>
          <SocialLogo />
          <div className="text-[13px] font-bold text[#3D3D3D] text-center mt-8">
            {email}
            <div className="mt-4">
              Copyright © 2020 Name. All rights reserved.
            </div>
          </div>
        </div>
        <div> </div>
      </div>
    </section>
  );
};

export default HomePage;
