"use client";

import { useState, useEffect } from "react";

import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

import Card from "./Card";
import Theme from "./Theme";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const ListCountries = ({ countries }) => {
  const [result, setResult] = useState(countries);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState(null);

  useEffect(() => {
    if (!search && !region) {
      setResult(countries);
      return;
    }
    const newCountrySearch = countries?.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    const newCountry = region
      ? newCountrySearch?.filter(
          (country) => country.region === regions[region]
        )
      : newCountrySearch;

    setResult(newCountry);
  }, [search, region]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-y-0 p-1 md:items-center mb-10">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          label="Search for a country..."
          className="max-w-[500px]"
        />
        <div className="flex items-center">
        <Select
          label="Select a region"
          className="w-1/2 md:w-[300px]"
          onChange={(e) => setRegion(e.target.value)}
        >
          {regions.map((region, i) => (
            <SelectItem key={i} value={region.toLowerCase()}>
              {region}
            </SelectItem>
          ))}
        </Select>
        <div className="ml-12">
        <Theme/>
        </div>
        </div>
      </div>
      <ul className="list-countries flex flex-wrap gap-[70px] py-3 items-center justify-center">
        {result?.map((country, i) => {
          return (
            <Card key={i} country={country} id={country.id} search={search} />
          )
        })}
      </ul>
    </div>
  );
};

export default ListCountries;
