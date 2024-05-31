import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spotlight from "../components/Spotlight";
import { GALLERY } from "../utils/Constants";
import { PhotoBox } from "../components/PhotoBox";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Gallery = () => {
  const [images, setImages] = useState(GALLERY.slice(0, 3));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreImages = () => {
    const newImages = GALLERY.slice(images.length, images.length + 3);
    setImages((prevImages) => [...prevImages, ...newImages]);
    if (images.length + 3 >= GALLERY.length) {
      setHasMore(false);
    }
  };

  return (
    <main className="relative overflow-hidden">
      <section
        id="committees"
        className="flex flex-col text-center gap-8 py-24 mt-24 px-48"
      >
        <h1 className="text-[60px] text-[white]">Spotlight</h1>
        <Spotlight />
        <h1 className="text-[60px] text-[white]">Gallery</h1>

        <InfiniteScroll
          dataLength={images.length}
          next={fetchMoreImages}
          hasMore={hasMore}
          loader={
            <div className="flex justify-center items-center h-32">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
            </div>
          }
          endMessage={<p className="text-[white]">No more images to load</p>}
          className="grid grid-cols-3 gap-5 w-full text-center"
        >
          {images.map((img, index) => (
            <Popup
              key={index}
              trigger={
                <div>
                  <PhotoBox photo={img.img} />
                </div>
              }
              modal
              nested
            >
              <div className="flex items-center justify-center max-w-[700px] min-h-auto bg-[#16161b] text-[white] rounded-md">
                <img src={img.img} className="w-full min-h-min bg-cover" />
              </div>
            </Popup>
          ))}
        </InfiniteScroll>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={fetchMoreImages}
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Gallery;
