import Image from 'next/image'
import styles from '../styles/components/Navbar.module.scss'

export default function Navbar() {
  const handleDarkModeToggle = (e) => {
    if(document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }

  }

  return (
    <>
    <div className={styles.nav}>
      <button className={styles.darkModeToggle} onClick={handleDarkModeToggle}>
        <span></span>
      </button>
    </div>
    </>
  )
}
