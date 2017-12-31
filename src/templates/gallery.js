import React from 'react'

const Gallery = (data) => (
  <div>
    <h3>{data.content.title}</h3>
    <ul>
      {data.content.images.map((image, i) => (
        <img
          key={i}
          alt={image.title}
          srcSet={image.sizes.srcSet}
          src={image.sizes.src}
          sizes={image.sizes.sizes}
        />
      ))}
    </ul>
  </div>
)

export default Gallery
