async function fetchSearch({ queryKey }) {
  const { location, animal, breed } = queryKey[1];

  let query = location || animal || breed ? "?" : "";

  if (location) {
    query += query.length ? "&location=" + location : "location=" + location;
  }
  if (animal) {
    query += query.length ? "&animal=" + animal : "animal=" + animal;
  }
  if (breed) {
    query += query.length ? "&breed=" + breed : "animal=" + animal;
  }

  const res = await fetch(`http://localhost:3000/pets` + query);
  if (!res.ok) {
    throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);
  }

  return res.json();
}

export default fetchSearch;
