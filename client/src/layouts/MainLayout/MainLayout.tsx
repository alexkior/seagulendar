import * as React from 'react'

import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import { Calendar } from '../../components/Calendar'

import styles from './MainLayout.module.css'
import { IUser } from '../../models/IUser'
import { useUsersQuery } from '../../services/UserService'
import { useNotesQuery } from '../../services/NoteService'
import { useEffect } from 'react'
import useThemeRotator from './useThemeRotator'

const MainLayout: React.FC = function MainLayout() {
  const {
    isError: isUsersError,
    isLoading: isUsersLoading,
    isSuccess: isUsersSuccess,
    data: usersData,
  } = useUsersQuery()
  const {
    isError: isNotesError,
    isLoading: isNotesLoading,
    isSuccess: isNotesSuccess,
    data: notesData,
  } = useNotesQuery()

  const [theme, setTheme] = React.useState('theme_default')
  // const theme = useThemeRotator()

  useEffect(() => {
    console.log({
      'usersData.': usersData,
      isUserError: isUsersError,
      isUserLoading: isUsersLoading,
      isUserSuccess: isUsersSuccess,
    })
  }, [usersData, isUsersError, isUsersLoading, isUsersSuccess])

  useEffect(() => {
    console.log({
      notesData: notesData,
      isNotesError: isNotesError,
      isNotesLoading: isNotesLoading,
      isNotesSuccess: isNotesSuccess,
    })
  }, [notesData, isNotesError, isNotesLoading, isNotesSuccess])

  return (
    <div className={theme}>
      <main className={styles.MainLayout}>
        <Sidebar />
        <Header />
        <Calendar />
      </main>
    </div>
  )
}

export default MainLayout
