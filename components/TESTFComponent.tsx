import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

interface PropDat {
    item: string,
    // handleFnCheckedInput: any
    setStateTrips: any
}

const TESTFComponent = ({item, setStateTrips}: PropDat) => {

    const [state, setState] = useState<boolean>(false)

    const router = useRouter();

    const onRemoveTypeClass = (typeToRemove: string, type: string, typeState: any) => {
        // Создаем новый объект URLSearchParams на основе текущего URL
        const searchParams = new URLSearchParams(window.location.search);
      
        // Получаем текущие значения параметра "type_class"
        let typeClassValues = searchParams.getAll(type).join(",").split(",");
      
        // Удаляем значение typeToRemove из массива значений
        typeClassValues = typeClassValues.filter(value => value !== typeToRemove);
  
        console.log(typeClassValues)
      
        // Обновляем параметр "type_class" в URLSearchParams
        searchParams.delete(type);
        typeClassValues.forEach(value => {
            searchParams.append(type, value);
        });
      
        // Собираем новый URL
        const newUrl = `/test2?${searchParams.toString()}`;
      
        console.log(newUrl)
        // Перенаправляем пользователя на новый URL
        router.push(newUrl);
    
        // Обновляем состояние stateTypeClass
        typeState(typeClassValues);
    };
  
    const handleFnCheckedInput = (v: boolean, typeToRemove: string, type: string) => {
        v ? onRemoveTypeClass(typeToRemove, type, setStateTrips) : setStateTrips((prev: any) => [...prev, typeToRemove])
    }

  return (
    <label className="fly-res__block-list-item">
        <input checked={state} type="Checkbox" onChange={() => setState(!state)} onClick={() => handleFnCheckedInput(state , item, 'trips')} className="fly-res__input-option-trips" />
        <p className="fly-res__trips-airlines-select">{item}</p>
    </label>
  )
}

export default TESTFComponent