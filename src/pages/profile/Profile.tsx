import React, { FC, useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTupedSelector'

export const Profile: FC = () => {

  const { fetchProfile } = useActions()
  useEffect(() => {
    fetchProfile()
  }, [])
  const { profile } = useTypedSelector(state => state.profile)

  return (
    <div>
      Profile
      {profile[0].level}
      {profile[0].discription}

    </div>
  )
}
