import React, { useState } from 'react'

interface PropDate {
    item: string
    handleFnCheckedInputTrips: any
}

const InputTrips = ({item, handleFnCheckedInputTrips}: PropDate) => {
    
    const [state, setState] = useState<boolean>(false)

  return (
    <label onChange={() => setState(!state)} onClick={() => handleFnCheckedInputTrips(state, item, 'trips')} className="fly-res__block-list-item">
        <input checked={state} type="checkbox" className="fly-res__input-option-trips" />
        <p className="fly-res__trips-airlines-select">{item}</p>
    </label>
  )
}

export default InputTrips