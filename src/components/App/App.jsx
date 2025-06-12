import { useEffect, useState } from "react";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import fetchImages from "../../unsplash-api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [topic, setTopic] = useState("");
  const [curretPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);

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
  const isLastPage = curretPage === totalPages;

  const hendalOpenModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setIsModalOpen(true);
  };
  const hendalCloseModal = () => {
    setSelectedImage([]);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={hendalSearch} />
      {isError && <ErrorMessage />}
      {haveImages && <ImageGallery images={images} onImageClick={hendalOpenModal} />}
      <ImageModal isOpen={isModalOpen} imgUrl={selectedImage} onClose={hendalCloseModal} />
      {isLoading && <Loader loading={isLoading} />}
      {haveImages && !isLoading && !isLastPage && (
        <LoadMoreBtn onClick={incrementPage} />
      )}
    </>
  );
}

export default App;
