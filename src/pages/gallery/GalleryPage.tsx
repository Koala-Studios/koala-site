import React from "react";
import gallery from "../../assets/gallery.json";
import styles from "../../styles/GalleryPage.module.css";
interface GroupProps {
  title: string;
  images: { caption: string; url: string }[];
}

const GalleryGroup = ({ title, images }: GroupProps) => {
  console.log(title, images);

  return (
    <div className={styles.image_group}>
      <h2>{title}</h2>
      {images.map((info, idx) => (
        <div className={styles.image_list} key={idx}>
          <img src={info.url} alt={info.caption} />
          <p>{info.caption}</p>
        </div>
      ))}
    </div>
  );
};

const GalleryPage = () => {
  return (
    <div>
      {gallery.groups.map((group, idx) => (
        <GalleryGroup key={idx} title={group.title} images={group.images} />
      ))}
    </div>
  );
};

export default GalleryPage;
