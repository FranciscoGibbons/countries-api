import ListCountries from "./components/ListCountries";
import data from '../app/data.json'

export default function Home() {

  return (
    <>
      <ListCountries countries={data}/>
    </>
  );
}
