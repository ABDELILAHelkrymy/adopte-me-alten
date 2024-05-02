async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];
  if (!animal) return [];

  const apiRes = await fetch(`http://localhost:3000/pets?animal=${animal}`);

  if (!apiRes.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  return apiRes.json();
}
export default fetchBreedList;
