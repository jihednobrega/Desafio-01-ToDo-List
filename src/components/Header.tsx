import styles from './Header.module.css'

import ToDoLogo from '../assets/to-do-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ToDoLogo} alt="Logotipo do ToDo" />
    </header>
  )
}
