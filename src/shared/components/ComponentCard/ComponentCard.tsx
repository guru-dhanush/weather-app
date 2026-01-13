import React from "react";
import styles from "./ComponentCard.module.css";

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  desc?: string;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  desc,
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {desc && <p className={styles.desc}>{desc}</p>}
      </header>

      <section className={styles.body}>
        <div className={styles.content}>{children}</div>
      </section>
    </div>
  );
};

export default ComponentCard;
