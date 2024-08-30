import { FunctionComponent } from "react";
import styles from "./QuestionContent.module.css";

export type QuestionContentType = {
  className?: string;
};

const QuestionContent: FunctionComponent<QuestionContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.questionContent, className].join(" ")}>
      <b className={styles.whatDoYou}>
        WHAT DO YOU WANT TO KNOW ABOUT THIS SITE?
      </b>
      <div className={styles.lnameCont}>
        <div className={styles.whatIsThe}>
          What is the history behind Philippines’ educational conditions?
        </div>
        <div className={styles.lnameCont1}>
          <div className={styles.div}>{`>`}</div>
        </div>
      </div>
      <div className={styles.questionInput}>
        <div className={styles.lnameCont2}>
          <input
            className={styles.whatIsThe1}
            placeholder={`What is the history behind Philippines’ educational conditions?>`}
            type="text"
          />
          <div className={styles.lnameContWrapper}>
            <div className={styles.lnameCont3}>
              <div className={styles.div1}>{`>`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionContent;
