import axios from 'axios';

// ---------------------------------------For Cart ---------------------
export async function FetchCartGet() {
  // const response = await axios.get("http://localhost:3000/cart");
  const response = await axios.get('https://69ef1ac0b92c6242.mokky.dev/Cart');

  return response.data;
}

export async function FetchCartPost(props: any) {
  // await axios.post("http://localhost:3000/cart", props);
  await axios.post('https://69ef1ac0b92c6242.mokky.dev/Cart', props);
}

export async function FetchCartGetDelete(props: any) {
  await axios.delete(`https://69ef1ac0b92c6242.mokky.dev/Cart/${props}`);
}

// ---------------------------------------For Items ---------------------

export async function FetchItemsGet(species: any, sortBy: any) {
  console.log(sortBy, species);
  const response = await axios.get(
    `https://69ef1ac0b92c6242.mokky.dev/items?${sortBy ? sortBy : ''}&${species ? species : ''}`,
    // `http://localhost:3000/items?${species ? species : ''}${sortBy ? sortBy : ''}`,
  );

  return response.data;
}

