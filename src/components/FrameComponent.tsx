import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.legendParent, className].join(" ")}>
      <a className={styles.legend}>LEGEND</a>
      <div className={styles.frameChild} />
      <div className={styles.relevanceKey}>
        <input className={styles.keyItems} type="text" />
        <input className={styles.keyItems1} type="text" />
      </div>
      <div className={styles.relevanceExplanation}>
        <div className={styles.relevanceTypes}>
          <div className={styles.typeLabels}>
            <div className={styles.typeLabelsChild} />
            <div className={styles.highlyRelevantText}>
              Highly Relevant Text
            </div>
          </div>
          <div className={styles.typeLabels1}>
            <div className={styles.typeLabelsItem} />
            <div className={styles.tangentiallyRelevantText}>
              Tangentially Relevant Text
            </div>
          </div>
        </div>
        <div className={styles.relevanceDescription}>
          <div className={styles.descriptionContent}>
            <div className={styles.moderatelyRelevantTextWrapper}>
              <div className={styles.moderatelyRelevantText}>
                Moderately Relevant Text
              </div>
            </div>
            <div className={styles.irrelevantText}>Irrelevant Text</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
