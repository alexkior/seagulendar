import * as React from "react";
import {
  Outlet
} from "react-router-dom";

import { Menu } from "../../components/Menu";
import { Calendar } from "../../components/Calendar";

import styles from './MainLayout.module.scss';


const MainLayout: React.FC = function MainLayout(params:any) {
  return (

    <main className={styles.MainLayout}>
      <Menu />
      <Calendar />
      </main>

  );
}

export default MainLayout;
