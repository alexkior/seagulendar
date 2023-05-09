import * as React from 'react'

import { Calendar } from '../../components/Calendar'

import styles from './AuthLayout.module.css'
import { IUser } from '../../models/IUser'
import { useUsersQuery } from '../../services/UserService'
import { useNotesQuery } from '../../services/NoteService'
import { useEffect } from 'react'
import useThemeRotator from '../../hooks/useThemeRotator'

const AuthLayout: React.FC = function AuthLayout() {
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

  const theme = useThemeRotator()

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
      <main className={styles.AuthLayout}>
        <Calendar />
      </main>
    </div>
  )
}

export default AuthLayout
