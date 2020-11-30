import React, { useState } from 'react'
import { Card, Typography, CardContent } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDay, editDay } from '../../redux/actions/dayActions'
import { Band } from '../Band/Band'

export const Day = ({ day }) => {
  const bands = useSelector((store) => store.bands && store.bands.filter((band) => band.day === day._id))
  const dispatch = useDispatch()
  const [editSwitcherDay, setEditSwitcherDay] = useState(false)
  const [newTitle, setNewTitle] = useState(day.title)

  return (
    <>
      {editSwitcherDay ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={() => setEditSwitcherDay((state) => !state)}>
            cancel
          </button>
          <button
            onClick={() => {
              dispatch(editDay(day.id, newTitle))
              setEditSwitcherDay((state) => !state)
            }}
          >
            save
          </button>
        </>
      ) : (
        <>
          <p>{day.title}</p>
          <button onClick={() => dispatch(deleteDay(day._id))}>delete</button>
          <button onClick={() => setEditSwitcherDay((state) => !state)}>
            edit
          </button>
        </>
      )}
      {bands && bands.map((band) => (
        <Card>
          <CardContent>
            <Typography gutterBottom>
              <Band key={band._id} band={band} />
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
