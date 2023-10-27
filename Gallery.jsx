import React from 'react';

const Gallery = ({ data }) => {
  return (
    <div className="gallery">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.previewURL} alt={item.tags} />
          <div className="image-info">
            <p>Downloads: {item.downloads}</p>
            <p>Views: {item.views}</p>
            <p>Likes: {item.likes}</p>
            <a href={item.largeImageURL} download={`image-${item.id}.jpg`}>Download</a>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
