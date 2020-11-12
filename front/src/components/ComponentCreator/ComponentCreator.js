import { Card, Icon, TextareaAutosize } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createDay } from '../../redux/actions/dayActions'
import { createBand } from '../../redux/actions/bandActions'
import style from './ComponentCreator.module.css'

export const ComponentCreator = ({ day }) => {
  const buttonInnerText = day ? 'Add another band' : 'Add another day'
  const classNameButtonAdd = day ? style.band : style.day
  const [createMode, setCreateMode] = useState(false)
  const [textarea, setTextarea] = useState('')
  const dispatch = useDispatch()

  const handleCreateDay = () => {
    dispatch(createDay(textarea))
    setCreateMode((state) => !state)
    setTextarea('')
  }

  const handleCreateBand = () => {
    dispatch(createBand(day._id, textarea))
    setCreateMode((state) => !state)
    setTextarea('')
  }

  return (
    <>
      {createMode ? (
        <div>
          <Card className={style.card}>
            <TextareaAutosize
              className={style.textarea}
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            />
          </Card>
          <Icon
            onClick={() => (day ? handleCreateBand() : handleCreateDay())}
          >
            check
          </Icon>
          <Icon className={style.createMode}>close</Icon>
        </div>
      ) : (
        <div
          className={classNameButtonAdd}
          onClick={() => setCreateMode((state) => !state)}
        >
          <Icon>add</Icon>
          <p>{buttonInnerText}</p>
        </div>
      )}
    </>
  )
}
