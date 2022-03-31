import React, { FC, useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTupedSelector'
import Navbar from '../navbar/Navbar'

export const Profile: FC = () => {

  const { fetchProfile } = useActions()
  useEffect(() => {
    fetchProfile()
  }, [])
  const { profile } = useTypedSelector(state => state.profile)

  return (
    <div>
      <Navbar/>
      <h1>Profile</h1>
      <h2>{profile[0].level}</h2>
      <h2>{profile[0].discription}</h2>
    </div>
  )
}
