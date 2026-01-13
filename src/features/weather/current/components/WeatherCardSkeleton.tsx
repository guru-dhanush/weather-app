import styles from "./WeatherCardSkeleton.module.css";

const WeatherCardSkeleton = () => {
  return (
    <section className={styles.card} aria-busy="true">
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.skeletonCity} />
            <div className={styles.skeletonUnit} />
          </div>
          <div className={styles.skeletonCondition} />
        </div>

        <div className={styles.tempBlock}>
          <div className={styles.tempCloud}>
            <div className={styles.skeletonTemp} />
            <div className={styles.skeletonIcon} />
          </div>
          <div className={styles.skeletonFeels} />
        </div>

        <div className={styles.range}>
          <div className={styles.skeletonRange} />
          <div className={styles.skeletonRange} />
        </div>
      </div>

      <div className={styles.meta}>
        <div className={styles.metaItem} />
        <div className={styles.divider} />
        <div className={styles.metaItem} />
        <div className={styles.divider} />
        <div className={styles.metaItem} />
      </div>
    </section>
  );
};

export default WeatherCardSkeleton;
