import * as React from "react";
import {
  Outlet
} from "react-router-dom";

import styles from './MainLayout.module.scss';


const MainLayout: React.FC = function MainLayout(params:any) {
  return (

      <div className={styles.MainLayout}>
        <h1>START</h1>
        <Outlet />
      </div>

  );
}

export default MainLayout;
