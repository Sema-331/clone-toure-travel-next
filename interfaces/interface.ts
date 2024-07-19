export interface CustomBtn {
  title: string;
  image: string;
  classN: string;
}
interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  user: User;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: User;
}

export interface UsersessionInt {
  userSession: {
    id: string;
    userName: string;
    adress: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    lastName: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    date_birth: string | null;
  } | null;
}

export interface User {
  id: string;
  userName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  lastName?: string | null;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  phoneNumber?: string | null;
  backgroundImage?: string | null;
  adress?: string | null;
  date_birth?: string | null;
  accounts: Account[];
  sessions: Session[];
  favourites_hotel: FavouritesHotel[];
  favourites_fly_ticket: FavouritesFlyTicket[];
  table_Reviews: TableReviews[];
  history_table_hotel: HistoryTableHotel[];
  review_table_single_hotel: ReviewTableSingleHotel[];
  credit_card_users: CreditCardUsers[];
  table_ticket: TableTicket[];
  table_history_fly: TableHistoryFly[];
  table_favourites_fly: TableFavouritesFly[];
  review_table_single_fly: ReviewTableSingleFly[];
}

export type Usertype = Pick<
  User,
  | "id"
  | "userName"
  | "password"
  | "createdAt"
  | "updatedAt"
  | "lastName"
  | "name"
  | "email"
  | "emailVerified"
  | "image"
  | "phoneNumber"
  | "backgroundImage"
  | "adress"
  | "date_birth"
>;

interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
  email: string;
}

interface TwoFactorToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
}

interface Hotel {
  id: number;
  info_Hotel: string;
  name_hotel: string;
  table_room_hotel: TableRoomHotel[];
}

interface FavouritesHotel {
  user: User;
  userId: string;
  hotel: TableRoomHotel;
  hotelId: number;
}

interface FavouritesFlyTicket {
  id: number;
  user: User;
  userId: string;
  id_table_ticket: TableTicket;
  tableTicketId: number;
}

interface TableAirport {
  id: number;
  name_airport: string;
  table_route_from: TableRoute[];
  table_route_to: TableRoute[];
}

interface TableRoute {
  id: number;
  from_airport: TableAirport;
  to_airport: TableAirport;
  from_airport_fly: number;
  to_airport_fly: number;
  price: number;
  time_fly_from: Date;
  time_fly_to: Date;
  count_places: string;
  name_plane: string;
  trips: string[];
  rate: string[];
  type_class: string[];
  id_table_comp: TableCompany;
  idTableComp: number;
  Table_ticket: TableTicket[];
  image_plane: string;
  geo_airplane: string;
  slider_image: string[];
  idTypeClass: TableTypeClass[];
  table_history_fly: TableHistoryFly[];
  table_favourites_fly: TableFavouritesFly[];
  review_table_single_fly: ReviewTableSingleFly[];
}

interface TableTicket {
  id: number;
  id_table_route: TableRoute;
  id_user: User;
  idUser: string;
  idTableRoute: number;
  place: string;
  row: string;
  Favourites_fly_ticket: FavouritesFlyTicket[];
  classTypeTicket: TableTypeClass[];
}

interface TableHistoryFly {
  id: number;
  id_table_route_history: TableRoute;
  id_user_history: User;
  idUser: string;
  idTableRoute: number;
  place: string;
  row: string;
  id_type_class: TableTypeClass;
  typeClass: number;
}

interface TableFavouritesFly {
  id: number;
  id_table_route_history: TableRoute;
  id_user_history: User;
  idUser: string;
  idTableRoute: number;
}

interface TableTypeClass {
  id: number;
  name_type: string;
  price: number;
  id_table_route: TableRoute;
  idClassType: number;
  id_table_ticket: TableTicket;
  idClassTypeTicket: number;
  table_history_fly: TableHistoryFly[];
}

export interface TableReviews {
  id: number;
  id_user: User;
  idUser: string;
  header_txt: string;
  description_txt: string;
  image_review?: string;
  mark: string;
}

interface TableRoomHotel {
  id: number;
  star_hotel?: string;
  check_in_date: Date;
  check_out_date: Date;
  room_number: number;
  price: number;
  name_hotel: string;
  rate: string;
  geo_hotel: string;
  freebies_options: string[];
  images_slider: string[];
  table_type_room: TableTypeRoom[];
  review_table_single_hotel: ReviewTableSingleHotel[];
  history_table_hotel: HistoryTableHotel[];
  main_image: string;
  amenities_option: string[];
  variaty_hotel: string;
  id_hotel: Hotel;
  idHotel: number;
}

interface TableCompany {
  id: number;
  name_company: string;
  Table_route: TableRoute[];
  image_company: string;
}

interface TableTypeRoom {
  id: number;
  description_type_room: string;
  price_type_room_hotel: number;
  id_hotel: TableRoomHotel;
  id_hotel_tpye_room: number;
  history_table_hotel: HistoryTableHotel[];
}

interface SubscribeToUpdates {
  id: string;
  email: string;
}

interface Test {
  id: number;
  image: string;
}

interface HistoryTableHotel {
  user: User;
  userId: string;
  hotel: TableRoomHotel;
  hotelId: number;
  room_id: TableTypeRoom;
  type_room_hotel_id: number;
}

interface ReviewTableSingleHotel {
  id: number;
  rating: number;
  description_review: string;
  user: User;
  userId: string;
  hotel: TableRoomHotel;
  hotelId: number;
}

interface ReviewTableSingleFly {
  id: number;
  rating: number;
  description_review: string;
  user: User;
  userId: string;
  fly_route: TableRoute;
  fly_route_id: number;
}

interface CreditCardUsers {
  id: number;
  cardholderName: string;
  cvc: string;
  expMonth: string;
  expYear: string;
  card_number: string;
  country_of_region?: string;
  id_user: User;
  idUser: string;
}

export interface IntData {
  data: {
    id_table_route_history: {
      time_fly_to: Date;
      time_fly_from: Date;
      name_plane: string;
      geo_airplane: string;
      Table_ticket: {
        row: string;
        place: string;
        classTypeTicket: {
          price: number;
          name_type: string;
        }[];
      }[];
      id_table_comp: {
        name_company: string;
      };
    };
  } | null;
  userSession: any;
}

export interface getSearchParams {
  searchParams: {
    search: string;
    type_room: string;
    date_from_hotel: Date;
    date_check_out: string;
    min_price: string;
    max_price: string;
    freebies_options: string;
    amenities_options: string;
    variaty: string;
    hotel_rate: string;
    sort_price: string;
  };
  user2: {
    id: string;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    lastName: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    date_birth: string | null;
  } | null;
}
