"use client";

import React, { useState } from "react";
import { z } from "zod";

const schemaZod2 = z.object({
  lat: z.string(),
  lon: z.string(),
});

const schemaZod = z
  .object({
    coords: schemaZod2,
    district: z.string(),
    name: z.string(),
    population: z.number(),
    subject: z.string(),
  })
  .array();

type ZodType = z.infer<typeof schemaZod>;

const getCities = () => {
  const [stateCity, setStateCity] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCities = async (): Promise<ZodType> => {
    try {
      const res = await fetch(
        "https://api.github.com/repos/pensnarik/russian-cities/contents/russian-cities.json",
        {
          headers: {
            Accept: "application/vnd.github.v3.raw",
          },
        }
      );
      if (res.ok) {
        const result = await res.json();
        const fetchTodos = schemaZod.parse(result);
        setStateCity(result);
        setFilteredCities(result);
        console.log(result);
        return fetchTodos;
      } else {
        throw new Error("Failed to fetch cities");
      }
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchCities,
    stateCity,
    filteredCities,
    loading,
    setStateCity,
    setFilteredCities,
    setLoading,
  };
};

export default getCities;
