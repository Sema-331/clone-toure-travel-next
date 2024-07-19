import React, { useState } from 'react'

interface PropDate {
    item: string,
    handleFnCheckedInput: any
}

const InputNameCompany = ({item, handleFnCheckedInput}: PropDate) => {

    const [state, setState] = useState<boolean>(false)

  return (
    <label onClick={() => handleFnCheckedInput(state, item, 'name_airlines')} onChange={() => setState(!state)} className="fly-res__block-list-item">
        <input checked={state} type="checkbox" className="fly-res__input-option-name" />
        <p className="fly-res__name-airlines-select">{item}</p>
    </label>
  )
}

export default InputNameCompany