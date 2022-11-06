import * as React from "react";
import {
  Outlet
} from "react-router-dom";

import { Sidebar } from '../../components/Sidebar';
import { Header } from "../../components/Header";
import { Calendar } from "../../components/Calendar";

import styles from './MainLayout.module.scss';


const MainLayout: React.FC = function MainLayout(params:any) {
  return (

    <main className={styles.MainLayout}>
      <Sidebar />
      <Header />
      <Calendar />
      </main>

  );
}

export default MainLayout;
