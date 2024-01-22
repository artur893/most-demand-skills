import styles from "./LanguagesMenu.module.css";
import { languagesList } from "../../constants/languagesList";
import { Button } from "../Button/Button";

export function LanguagesMenu() {
  return (
    <div className={styles.languagesMenu}>
      <ul>
        {languagesList.map((item) => {
          return (
            <li key={item.id}>
              <Button>{item.name}</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
