// components/HomeAbout.js

// import Image from 'next/image';
import styles from './HomeAbout.module.css';

export default function HomeAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/Images/about_1_2.png" // Use Next.js Image optimization with the correct path
          alt="People working"
          width={400} // Adjust these values based on your image size
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.subHeading}>About SV Tech Soft</h4>
        <h1 className={styles.mainHeading}>Welcome to SV Tech Soft.</h1>
        <p className={styles.paragraph}>
          Founded in 2010 and based in India, SV Tech Soft provides training, consulting,
          IT remote support, and IT resourcing.
        </p>
        <p className={styles.paragraph}>
          In training our sole motto is `&quot;`Customer Satisfaction`&quot;` through quality support,
          which shows in our client`&quot;`s testimonial about our support. One of the main
          reasons why large IT projects aren`&quot;`t posted on freelancing platforms is that
          the relevant set of IT skill professionals aren`&quot;`t always willing to work as
          freelancers.
        </p>
        <p className={styles.paragraph}>
          SV Tech Soft is considered as the Best Salesforce job support and online
          training company. SV Tech Soft has the expertise in all Salesforce.com areas.
        </p>
      </div>
    </div>
  );
}
