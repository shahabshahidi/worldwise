import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext";

export default function CityList() {
  const { cities, isLoading, deleteCity } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return (
      <Message message="Add your firist city by clicking on a city on the map." />
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} onHandleDelete={deleteCity} />
      ))}
    </ul>
  );
}
