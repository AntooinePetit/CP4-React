import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { Menu } from "lucide-react"
import '../styles/components/Header.scss'

const Header = () => {
  return (
    <header>
      <div className="container-1280">
        <Link to="/" id="logo">Kasa</Link>

        <NavBar />

        <Menu id="burgermenu"/>
      </div>
    </header>
  )
}

export default Header