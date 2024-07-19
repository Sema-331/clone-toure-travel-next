import React, { useState } from 'react'

interface IntBtn {
    item: {
      id: number,
      value: string,
    }
}

const BtnRateComponent = ({item}: IntBtn) => {

    const [state, setState] = useState()

    const handleChangeClick = (value: number) => {
      setState(value)
    }

  return (
    <button onClick={() => handleChangeClick(item.id)} className={ item.id === state ? 'fly-res__btn-lane-value-active' : "fly-res__btn-lane-value"}>{item.value}</button>
  )
}

export default BtnRateComponent