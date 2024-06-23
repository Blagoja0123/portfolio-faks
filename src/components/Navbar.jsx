import "@/styles/icons.css"
import "@/styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navContainer">
        <div>
          <span className="material-symbols-outlined">
            psychology
          </span>
        </div>
        <ul className="navList">
          <li><a href="#about">ЗА МЕНЕ</a></li>
          <li><a href="#education">ОБРАЗОВАНИЕ</a></li>
          <li><a href="#projects">ПРОЕКТИ</a></li>
          <li><a href="#contact">КОНТАКТ</a></li>
        </ul>
    </nav>
  )
}

export default Navbar