import { useEffect, useState } from "react";
import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import fetchImages from "../../unsplash-api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [topic, setTopic] = useState("");
  const [curretPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const hendalSearch = (newTopic) => {
    setTopic(newTopic);
    setImages([]);
    setCurrentPage(1);
  };

  const incrementPage = () => {
    setCurrentPage(curretPage + 1);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(topic, curretPage);
        setImages((prevImages) => [...prevImages, ...data.images]);
        setTotalPages(data.totalPages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [topic, curretPage]);

  const haveImages = images.length > 0;
  const isLastPage = curretPage !== totalPages;

  return (
    <>
      <SearchBar onSearch={hendalSearch} />
      {isError && <ErrorMessage />}
      {haveImages && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {haveImages && !isLoading && !isLastPage && (
        <LoadMoreBtn onClick={incrementPage} />
      )}
      <Toaster />
    </>
  );
}

export default App;
