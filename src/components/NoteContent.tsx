import { FunctionComponent } from "react";
import styles from "./NoteContent.module.css";

export type NoteContentType = {
  className?: string;
};

const NoteContent: FunctionComponent<NoteContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.noteContent, className].join(" ")}>
      <div className={styles.noteContentChild} />
      <div className={styles.historicalNotes}>
        <b className={styles.notes}>NOTES</b>
        <div className={styles.noteEntries}>
          <div className={styles.noteEntry}>
            <div className={styles.noteParagraph}>
              <div className={styles.div}>[2]</div>
            </div>
            <div className={styles.theSpanishColonial}>
              The Spanish colonial period lasted for over 300 years, during
              which the country’s education system was heavily influenced by the
              Catholic Church. 
            </div>
          </div>
          <div className={styles.americanPeriod}>
            <div className={styles.americanInfluence}>
              <div className={styles.noteParagraph}>
                <div className={styles.div}>[3]</div>
              </div>
              <div className={styles.educationChanges}>
                <div className={styles.theAmericanColonial}>
                  The American colonial period brought significant changes to
                  the country’s education system, with the government
                  introducing a public school system that aimed to provide
                  education to all Filipinos.
                </div>
                <div className={styles.theAmericanColonial1}>
                  The American colonial period brought significant changes to
                  the country’s education system, with the government
                  introducing a public school system that aimed to provide
                  education to all Filipinos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.schoolEstablishment}>
        <div className={styles.americanInfluence}>
          <div className={styles.div2}>[4]</div>
          <div className={styles.educationChanges}>
            <div className={styles.theAmericanGovernment}>
              The American government established public schools that followed
              an English-language curriculum, which aimed to prepare Filipinos
              for the workforce and eventually lead to their assimilation into
              American society.
            </div>
            <div className={styles.theAmericanGovernment1}>
              The American government established public schools that followed
              an English-language curriculum, which aimed to prepare Filipinos
              for the workforce and eventually lead to their assimilation into
              American society.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reformPeriod}>
        <div className={styles.reformDescription}>
          <div className={styles.reformDetails}>[5]</div>
          <div className={styles.theGovernmentImplemented}>
            The government implemented reforms that aimed to make education
            accessible to all Filipinos, regardless of their socioeconomic
            status.
          </div>
        </div>
        <div className={styles.americanPeriod}>
          <div className={styles.americanInfluence}>
            <div className={styles.reformDetails}>[6]</div>
            <div className={styles.the1987PhilippineConstitutiParent}>
              <div className={styles.div}>
                The 1987 Philippine Constitution states that “the State shall
                protect and promote the right of all citizens to quality
                education at all levels and shall take appropriate steps to make
                such education accessible to all.”
              </div>
              <img
                className={styles.expand1Icon}
                loading="lazy"
                alt=""
                src="/expand-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteContent;
