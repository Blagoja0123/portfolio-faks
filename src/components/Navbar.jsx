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
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default Navbar