// Імпортуємо необхідні бібліотеки та стилі
import React from "react"; // Імпортуємо React для JSX
import { useDispatch, useSelector } from "react-redux"; // Імпортуємо хоки для роботи з Redux
import { changeFilter } from "../../redux/filtersSlice"; // Імпортуємо дію для встановлення фільтра
import { selectNameFilter } from "../../redux/filtersSlice"; // Імпортуємо ваш селектор
import css from "./SearchBox.module.css"; // Імпортуємо CSS модулі для стилізації компонента

// Оголошуємо компонент SearchBox
const SearchBox = () => {
  const dispatch = useDispatch(); // Хук для доступу до dispatch в Redux
  const filter = useSelector(selectNameFilter); // Використовуємо селектор для отримання значення фільтра

  return (
    // Поле вводу для пошуку контактів
    <input
      type="text" // Тип поля вводу — текст
      value={filter} // Значення поля встановлюється з Redux (фільтр)
      onChange={(e) => dispatch(changeFilter(e.target.value))} // Оновлюємо фільтр при зміні введеного тексту
      placeholder="Search contacts by name" // Текст підказки в полі вводу
      className={css.input} // Стилізуємо компонент за допомогою CSS класу
    />
  );
};

// Експортуємо компонент SearchBox для використання в інших частинах програми
export default SearchBox;
