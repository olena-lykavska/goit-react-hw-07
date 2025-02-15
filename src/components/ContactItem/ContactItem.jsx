import React from "react";
import css from "./ContactItem.module.css";  // Використовуємо "css"

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={css.item}>
      <span>{contact.name}: {contact.phone}</span>
      <button onClick={onDelete} className={css.deleteButton}>Delete</button>
    </li>
  );
};

export default ContactItem;
