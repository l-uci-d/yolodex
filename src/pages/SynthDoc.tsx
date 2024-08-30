import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import QuestionContent from "../components/QuestionContent";
import NoteContent from "../components/NoteContent";
import styles from "./SynthDoc.module.css";

const SynthDoc: FunctionComponent = () => {
  return (
    <div className={styles.synthdoc1}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h2 className={styles.h2}>{`>`}</h2>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <header className={styles.logoContainerParent}>
                <div className={styles.logoContainer}>
                  <img
                    className={styles.logoIcon}
                    loading="lazy"
                    alt=""
                    src="/logo.svg"
                  />
                </div>
                <div className={styles.lnameCont}>
                  <img
                    className={styles.internet1Icon}
                    alt=""
                    src="/internet-1@2x.png"
                  />
                  <input
                    className={styles.lnameContChild}
                    placeholder="https://www.pids.gov.ph/details/news/in-the-news/educational-challenges-in-the-philippines"
                    type="text"
                  />
                </div>
                <div className={styles.lnameCont1}>
                  <img
                    className={styles.magnifyingGlass1Icon}
                    loading="lazy"
                    alt=""
                    src="/magnifyingglass-1@2x.png"
                  />
                </div>
              </header>
            </div>
            <div className={styles.terms}>
              <div className={styles.imageContent}>
                <div className={styles.image1Parent}>
                  <img
                    className={styles.image1Icon}
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <div className={styles.lnameCont2}>
                    <h1 className={styles.h1}>+</h1>
                    <h1 className={styles.h11}>-</h1>
                    <img
                      className={styles.zoomIn1Icon}
                      loading="lazy"
                      alt=""
                      src="/zoomin-1@2x.png"
                    />
                  </div>
                  <div className={styles.gridCells} />
                  <div className={styles.gridCells1} />
                  <div className={styles.gridCells2} />
                  <div className={styles.gridCells3} />
                  <div className={styles.gridCells4} />
                  <div className={styles.gridCells5} />
                  <div className={styles.gridCells6} />
                  <div className={styles.gridCells7} />
                  <div className={styles.gridCells8} />
                  <div className={styles.gridCells9} />
                  <div className={styles.gridCells10} />
                  <div className={styles.gridCells11} />
                  <div className={styles.gridCells12} />
                  <div className={styles.thumbnailGrid}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.thumbnails} />
                    <div className={styles.thumbnails1} />
                    <div className={styles.thumbnails2} />
                    <div className={styles.thumbnails3} />
                    <div className={styles.thumbnails4} />
                  </div>
                </div>
                <div className={styles.separator} />
              </div>
            </div>
            <div className={styles.lnameCont3}>
              <div className={styles.baiN2023}>
                Bai, N. (2023, August 5). Educational challenges in the
                Philippines. PIDS.
                https://www.pids.gov.ph/details/news/in-the-news/educational-challenges-in-the-philippines
              </div>
              <div className={styles.lnameContWrapper}>
                <div className={styles.lnameCont4}>
                  <div className={styles.updateCitation}>update citation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameWrapper1}>
          <FrameComponent />
        </div>
        <div className={styles.questionContentParent}>
          <QuestionContent />
          <div className={styles.notesContentWrapper}>
            <div className={styles.notesContent}>
              <div className={styles.includeTheFollowingInYourWrapper}>
                <div className={styles.includeTheFollowing}>
                  Include the following in your notes:
                </div>
              </div>
              <div className={styles.lnameCont5}>
                <div className={styles.highlyRelevantText}>
                  Highly Relevant Text
                </div>
                <div className={styles.noteMarker}>
                  <img
                    className={styles.markerShapeIcon}
                    alt=""
                    src="/marker-shape.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <NoteContent />
      </div>
    </div>
  );
};

export default SynthDoc;
