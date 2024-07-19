"use client"

// import { store } from "@/store/store"
// import { useRef } from "react"
// import { Provider } from "react-redux"

// export default function StoreProvider({ children }) {
//     const storeref = useRef()
//     if (!storeref.current) {
//         storeref.current = store()
//     }

//     return <Provider store={storeref.current}>{children}</Provoder>
// }
import { store } from "./store";
import { Provider } from "react-redux";

export const StoreProvider = ({children}: {children: React.ReactNode}) => {
    return <Provider store={store}>{children}</Provider>
}