import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

//Типы переменных
type TypeTodoState = {
    list: boolean,
    toggleValueLoginSpinner: boolean,
    // creditCard: CreditCard[],
    checkLoginUser: Storage,
    authority_hotel: IntItem[],
    stateCheckedSelectedCreditCard: boolean,
    stateVariatyHotel: string,
    checkedValueVisibleItem: number,
    stateSortItemHotel: any,
    dataCheckboxFly: [],
    authority_route_ticket: Array<any>
    arrRouteFly: [],
    checkedValueVisibleItemFly: number,
    getLogin: boolean,
    stateCity: string
    stateLoadFlyTypeTicket: boolean
}

// interface CreditCard {
//     cardholderName: string
//     cvc: string
//     expMonth: string
//     expYear: string
//     number: string
//     class_credit: string
// }

interface IntItem {
    item: {
      id: number;
      name_hotel: string;
      userId: string;
      star_hotel: string | null;
      check_in_date: Date;
      check_out_date: Date;
      room_number: number;
      price: string;
      rate: string;
      geo_hotel: string;
      freebies_options: string[];
      amenities_option: string[];
      variaty_hotel: string;
      idHotel: number;
    }
  }

  /****STORAGE****/
const log: Storage = typeof window !== 'undefined' && localStorage.getItem('login') !== null ? JSON.parse(localStorage.getItem('login') || '"') : 0
const adress: Storage = typeof window !== 'undefined' && localStorage.getItem('adress') !== null ? JSON.parse(localStorage.getItem('adress') || '"') : ''
// const creditCard: Storage = typeof window !== 'undefined' && localStorage.getItem('creditCard') !== null ? JSON.parse(localStorage.getItem('creditCard') as string) : []
const authority_hotel: Storage = typeof window !== 'undefined' && localStorage.getItem('authority_hotel') !== null ? JSON.parse(localStorage.getItem('authority_hotel') as string) : []

const authority_route_ticket: Storage = typeof window !== 'undefined' && localStorage.getItem('authority_route_ticket') !== null ? JSON.parse(localStorage.getItem('authority_route_ticket') as string) : []


const initialState: TypeTodoState = {
    //Переменные
    list: false,
    toggleValueLoginSpinner: false,
    // creditCard: creditCard,
    checkLoginUser: log,
    authority_hotel: authority_hotel,
    stateCheckedSelectedCreditCard: false,
    stateVariatyHotel: 'Hotels',
    stateItemsHotel: [],
    checkedValueVisibleItem: 1,
    checkedValueVisibleItemFly: 1,
    stateSortItemHotel: 'asc',
    dataCheckboxFly: [],
    authority_route_ticket: authority_route_ticket,
    arrRouteFly: [],
    getLogin: false,
    stateCity: 'Moscow',
    stateLoadFlyTypeTicket: true
}

const todoSlice = createSlice ({
    name: 'todos',
    initialState,
    reducers: {
    //     handleTestAddCreditCard(state, action) {
    //         const isExist = state.creditCard.some(r => r.id === action.payload.id) 
    //   if (isExist) {
    //       state = state.creditCard.filter(r => r.id !== action.payload.id)
    //   } else {
    //       state.creditCard.push(action.payload)
    //       localStorage.setItem('creditCard', JSON.stringify(state.creditCard.map((item) => item)))
    //   }
    // {/*}  state.favouritesItem = state.productCopy.some(r => r.id === action.payload.id) 
    //   if (state.favouritesItem) {
    //       state.favouritesItem = state.productCopy.filter(r => r.id === action.payload.id)
    //   } else {
    //       state.favouritesItem.push(action.payload)
    //       localStorage.setItem('authority', JSON.stringify(state.favouritesItem.map((item) => item)))
    //   }*/}
    //     },
        hadnleToggleLoad(state, action) {
            state.stateLoadFlyTypeTicket = action.payload
        },
        handleChooseCity(state, action) {
            state.stateCity = action.payload
        },
        handleLogedin(state, action) {
            state.getLogin = action.payload
        },
        handlePuchValue(state, action) {
            state.arrRouteFly = action.payload
        },
        handleClickCHckbox(state, action) {
            state.dataCheckboxFly = action.payload
        },
        handleStateDesc(state) {
            state.stateSortItemHotel = 'desc'
        },
        handleStateAsc(state) {
            state.stateSortItemHotel = 'asc'
        },
        handleCLickLoadMore(state, action) {
            state.checkedValueVisibleItem = action.payload
        },
        handleCliclLoadMoreFly(state, action) {
            state.checkedValueVisibleItemFly = action.payload 
        },
        handleClickChangeVariatyHotel(state, action) {
            state.stateVariatyHotel = action.payload
        },
        handleAddCities(state, action) {
            state.stateCity = action.payload
            localStorage.setItem('adress', JSON.stringify(state.stateCity))
        },    
        handleClickFavoritesAdd(state, action) {
            state.authority_hotel.push(action.payload)
            localStorage.setItem('authority_hotel', JSON.stringify(state.authority_hotel.map((item) => item)))
        },
        handleClickFavoritesRemove(state, action) {
            state.authority_hotel = state.authority_hotel.filter((item) => item.id !== action.payload)
            localStorage.setItem('authority_hotel', JSON.stringify(state.authority_hotel.map((item) => item)))
        },
        handleClickFavoritesAddRoute(state, action) {
            state.authority_route_ticket.push(action.payload)
            localStorage.setItem('authority_route_ticket', JSON.stringify(state.authority_route_ticket.map((item) => item)))
        },
        handleClickFavoritesRemoveRoute(state, action) {
            state.authority_route_ticket = state.authority_route_ticket.filter((item) => item.id !== action.payload)
            localStorage.setItem('authority_route_ticket', JSON.stringify(state.authority_route_ticket.map((item) => item)))
        },
        handleClickToggleStatus(state) {
            state.stateCheckedSelectedCreditCard = true
        },
        handleCLickToggleCheckbox(state) {
            console.log(state.list)
            state.list = !state.list
        },
        handleToggleSpinnerLogin(state) {
            state.toggleValueLoginSpinner = !state.toggleValueLoginSpinner
        },
        // handleAddCreditCard(state, action) {
        //     state.creditCard.push(action.payload)
        //     console.log(state.creditCard)
        //     localStorage.setItem('creditCard', JSON.stringify(state.creditCard.map((item) => item)))
        // },
        // handleRemoveCreditCrad(state, action) {
        //     state.creditCard = state.creditCard.filter((item) => item.id !== action.payload)
        //     localStorage.setItem('creditCard', JSON.stringify(state.creditCard.map((item) => item)))
        // },
        handleClickSignInUser(state) {
            localStorage.setItem('login', JSON.stringify(state.checkLoginUser = 1))
            // console.log(state.checkLoginUser)
        },
        handleClickSignOutUser(state) {
            localStorage.setItem('login', JSON.stringify(state.checkLoginUser = 0))
            // console.log(state.checkLoginUser)
        },
    }
})

export const { handleCLickToggleCheckbox, handleToggleSpinnerLogin, handleClickSignInUser, handleClickSignOutUser, handleClickToggleStatus, handleClickFavoritesAdd, handleClickFavoritesRemove, handleClickChangeVariatyHotel, handleCLickLoadMore, handleStateDesc, handleStateAsc, handleClickCHckbox, handleClickFavoritesAddRoute, handleClickFavoritesRemoveRoute, handlePuchValue, handleCliclLoadMoreFly, handleLogedin, handleChooseCity, handleAddCities, hadnleToggleLoad } = todoSlice.actions
export default todoSlice.reducer