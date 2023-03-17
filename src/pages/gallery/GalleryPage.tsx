import React, { useRef } from "react";
import gallery from "../../assets/gallery.json";
import styles from "../../styles/GalleryPage.module.css";
interface GroupProps {
  title: string;
  images: { caption: string; url: string }[];
}

const GalleryGroup = ({ title, images }: GroupProps) => {
  console.log(title, images);

  const imageList = useRef<any>();

  const scroll = (amount: number) => {
    imageList.current.scrollBy({ left: amount, behaviour: "smooth" });
  };

  return (
    <div className={styles.image_group}>
      <h2>{title}</h2>
      <div style={{ width: "100%", position: "relative" }}>
        <div
          onClick={() => scroll(-200)}
          className={`${styles.scroll_overlay} ${styles.left}`}
        >
          <img src="/images/arrow_right.svg" />
        </div>
        <div onClick={() => scroll(200)} className={styles.scroll_overlay}>
          <img src="/images/arrow_right.svg" />
        </div>
        <div ref={imageList} className={styles.image_list}>
          {images.map((info, idx) => (
            <div key={idx}>
              <img draggable="false" src={info.url} alt={info.caption} />
              <p>{info.caption}</p>
            </div>
          ))}
        </div>
      </div>
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
