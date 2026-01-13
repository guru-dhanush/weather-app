import ComponentCard from "@/shared/components/ComponentCard/ComponentCard";
import styles from "./ForecastListSkeleton.module.css";

const SKELETON_ITEMS = 5;

const ForecastListSkeleton = () => {
  return (
    <ComponentCard
      title="5-Day Weather Forecast"
      desc="Daily temperature and conditions for the next five days"
    >
      <div className={styles.list} aria-busy="true">
        {Array.from({ length: SKELETON_ITEMS }).map((_, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.date}>
              <div className={styles.day} />
              <div className={styles.fullDate} />
            </div>

            <div className={styles.icon} />

            <div className={styles.condition} />

            <div className={styles.temp}>
              <div className={styles.tempMax} />
              <div className={styles.tempMin} />
            </div>
          </div>
        ))}
      </div>
    </ComponentCard>
  );
};

export default ForecastListSkeleton;
