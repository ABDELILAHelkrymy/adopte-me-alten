import { QueryStatus, useQuery } from "@tanstack/react-query";
import fetchBreedList from "../api/fetchBreedList";
import { Animal, Pet } from "../model/APIResponseTypes";

export default function useBreedList(animal: Animal) {
  const results = useQuery<Pet[]>(["breeds", animal], fetchBreedList);

  return [results.data?.map((pet) => pet.breed) ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}
