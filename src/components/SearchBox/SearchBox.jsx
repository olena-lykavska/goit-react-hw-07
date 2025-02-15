// Імпортуємо необхідні бібліотеки та стилі
import React from "react"; // Імпортуємо React для JSX
import { useDispatch, useSelector } from "react-redux"; // Імпортуємо хоки для роботи з Redux
import { setFilter } from "../../redux/filtersSlice"; // Імпортуємо дію для встановлення фільтра
import css from "./SearchBox.module.css"; // Імпортуємо CSS модулі для стилізації компонента

// Оголошуємо компонент SearchBox
const SearchBox = () => {
  const dispatch = useDispatch(); // Хук для доступу до dispatch в Redux
  const filter = useSelector((state) => state.filters.name); // Отримуємо поточне значення фільтра з Redux через селектор

  return (
    // Поле вводу для пошуку контактів
    <input
      type="text" // Тип поля вводу — текст
      value={filter} // Значення поля встановлюється з Redux (фільтр)
      onChange={(e) => dispatch(setFilter(e.target.value))} // Оновлюємо фільтр при зміні введеного тексту
      placeholder="Search contacts" // Текст підказки в полі вводу
      className={css.input} // Стилізуємо компонент за допомогою CSS класу
    />
  );
};

// Експортуємо компонент SearchBox для використання в інших частинах програми
export default SearchBox;
