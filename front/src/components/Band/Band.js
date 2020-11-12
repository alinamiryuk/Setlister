import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteBand, editBand } from '../../redux/actions/bandActions'

export const Band = ({ band }) => {
  const dispatch = useDispatch()
  const [editSwitcherBand, setEditSwitcherBand] = useState(false)
  const [newTitle, setNewTitle] = useState(band.title)

  return (
    <>
      
        {editSwitcherBand ? (
          <>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={() => setEditSwitcherBand((state) => !state)}>
              cancel
            </button>
            <button onClick={() => dispatch(editBand(band._id, newTitle))}>
              save
            </button>
          </>
        ) : (
          <>
          <p>{band.title}</p>
        {/* <button onClick={() => dispatch(deleteBand(band._id))}>delete</button>
        <button onClick={() => setEditSwitcherBand((state) => !state)}>
          edit
        </button> */}
        </>
        )}
     
    </>
  )
}
