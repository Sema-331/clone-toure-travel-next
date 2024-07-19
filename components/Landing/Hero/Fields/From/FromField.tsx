"use client";

import Async, { useAsync } from "react-select/async";
import React from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import swap from "./../../../../../public/images/ion_swap-horizontal.png";
import AsyncSelect from "react-select/async";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

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
      <Image src={swap} height={28} width={28} alt="icon_form" />
    </components.DropdownIndicator>
  );
};

const FromField = () => (
  <AsyncSelect
    components={{ DropdownIndicator }}
    placeholder={"From..."}
    cacheOptions
    loadOptions={loadOptions}
    defaultOptions
  />
);

export default FromField;
