"use client";

import Async, { useAsync } from "react-select/async";
import React from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import AsyncSelect from "react-select/async";
import { ChevronDown, TicketCheck } from "lucide-react";

const colourOptions = [
  { value: "The Crownlands", label: "The Crownlands" },
  { value: "Iron Islands", label: "Iron Islands" },
  { value: "The North", label: "The North" },
  { value: "The Reach", label: "The Reach" },
  { value: "The Riverlands", label: "The Riverlands" },
  { value: "The Vale", label: "The Vale" },
  { value: "The Westerlands", label: "The Westerlands" },
  { value: "The Stormlands", label: "The Stormlands" },
  { value: "ggg", label: "The Crownlands" },
  { value: "Iron Islands", label: "Iron Islands" },
  { value: "The North", label: "The North" },
  { value: "The Reach", label: "The Reach" },
  { value: "The Riverlands", label: "The Riverlands" },
  { value: "The Vale", label: "The Vale" },
  { value: "The Westerlands", label: "The Westerlands" },
  { value: "The Stormlands", label: "The Stormlands" },
];

const filterColors = (inputValue: string) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue: string, callback: (options: any) => void) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

const DropdownIndicator = (props: DropdownIndicatorProps<any, true>) => {
  return (
    <components.DropdownIndicator {...props}>
      <TicketCheck />
    </components.DropdownIndicator>
  );
};

const TypeClassField = () => (
  <AsyncSelect
    components={{ DropdownIndicator }}
    cacheOptions
    loadOptions={loadOptions}
    defaultOptions
  />
);

export default TypeClassField;
