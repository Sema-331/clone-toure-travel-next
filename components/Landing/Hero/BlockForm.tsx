import React from "react";
import SearchBlock from "./SearchBlock";

interface Int {
  onSearch: () => void;
  setSearchQuery: (v: string) => void;
  searchQuery: string | null;
  onSearchTicket: () => void;
  setNameType: (v: string) => void;
  setDateStartFrom: (v: string) => void;
  setNameAirportTo: (v: string) => void;
  setNameAirportFrom: (v: string) => void;
  setNameTypes: (v: string) => void;
  setDateStartFroms: (v: string) => void;
  setDateCheckout: (v: string) => void;
}

const BlockForm = ({
  onSearch,
  setSearchQuery,
  searchQuery,
  onSearchTicket,
  setNameType,
  setDateStartFrom,
  setNameAirportTo,
  setNameAirportFrom,
  setNameTypes,
  setDateStartFroms,
  setDateCheckout,
}: Int) => {
  return (
    <div className="search__block-form-main">
      <SearchBlock
        setNameType={setNameType}
        setDateStartFrom={setDateStartFrom}
        setNameAirportTo={setNameAirportTo}
        setNameAirportFrom={setNameAirportFrom}
        onSearchTicket={onSearchTicket}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        onSearch={onSearch}
        setNameTypes={setNameTypes}
        setDateStartFroms={setDateStartFroms}
        setDateCheckout={setDateCheckout}
      />
      {/* <form>
   <div className="group">      
      <input type="text" required />
      <label>Имя</label>
   </div>
   <div className="group">      
      <input type="text" required />
      <label>Email</label>
   </div>
</form> */}
    </div>
  );
};

export default BlockForm;
