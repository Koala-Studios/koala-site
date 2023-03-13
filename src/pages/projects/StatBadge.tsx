import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/ProjectSections.module.css";

interface Props {
  LargeText: string;
  SmallText: string;
  UnderText?: ReactElement;
}

const StatBadge: React.FC<Props> = ({ LargeText, SmallText, UnderText }) => {
  return (
    <div>
      <div className={styles.stat_badge}>
        <div>
          <span style={{ fontSize: 35 }}>4.02%</span>
          Conversion Rate
        </div>
      </div>
      {UnderText}
    </div>
  );
};

export default StatBadge;
