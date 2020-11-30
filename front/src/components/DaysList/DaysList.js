import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDays } from '../../redux/actions/dayActions'
import { ComponentCreator } from '../ComponentCreator/ComponentCreator'
import { Day } from '../Day/Day'
import style from '../DaysList/DaysList.module.css'

export const DaysList = () => {
  const dispatch = useDispatch()
  const festival = useSelector((state) => state.auth.festivalId)
  const days = useSelector((store) => store.days)
  useEffect(() => {
    dispatch(getDays(festival))
  }, [dispatch])

  return (
    <>
      {days.map((day) => (
        <div className={style.day}>
          <Day key={days._id} day={day} />
          <ComponentCreator day={day} />
        </div>
      ))}
      <div className={style.button}>
        <ComponentCreator />
      </div>
    </>
  )
}
