const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://localhost:3000/pets?&id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`info/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;
