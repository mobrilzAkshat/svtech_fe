// components/CourseSection.js

import styles from './CourseSection.module.css';

export default function CourseSection() {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/Images/Mask_group.png" // Replace with the correct path to your image
          alt="Students learning"
          width={400} // Adjust width and height based on the actual image size
          height={400}
          className={styles.mainImage}
        />
        <div className={styles.overlayImageContainer}>
          <img
            src="/Images/Group_212.png" // Replace with the correct path to your overlay image
            alt="Video thumbnail"
            width={250}
            height={250}
            className={styles.overlayImage}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.tagline}>Join in Your Live Salesforce Course Today</p>
        <h1 className={styles.mainHeading}>
          Online Learning Salesforce Courses Designed For Real Life
        </h1>
        <div className="flex py-2 mb-5"><img src="/Icon/vector.png" width="100" height="10" alt="vector"/></div>
        <p className={styles.description}>
          We provide job oriented online classes that help you get new jobs and excel in new trending fields.
        </p>
        <ul className={styles.featuresList}>
          <li>✔ Easy Online Learning Platform</li>
          <li>✔ 98% Course Completion Rates</li>
          <li>✔ Friendly Environments & Teachers</li>
        </ul>
        <button className={styles.exploreButton}>Explore Our Courses ➔</button>
      </div>
    </section>
  );
}
