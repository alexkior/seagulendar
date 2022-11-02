import * as React from "react";
import {
  Outlet
} from "react-router-dom";

import seagul from '../../assets/seagull.svg'

import styles from './MainLayout.module.scss';


const MainLayout: React.FC = function MainLayout(params:any) {
  return (

      <div className={styles.MainLayout}>
        <img className={styles.MainLayout__seagull} src={seagul} alt="seagull" />
        <Outlet />
      </div>

  );
}

export default MainLayout;
