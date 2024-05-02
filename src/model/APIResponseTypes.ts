export type Animal = "dog" | "cat" | "bird";
export type Location = "casablanca" | "rabat" | "fes" | "Kenitra";

export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  location: Location;
  images: string[];
  breed: string;
}
