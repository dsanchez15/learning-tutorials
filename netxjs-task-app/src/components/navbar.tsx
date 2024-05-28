import { ModeToggle } from "./theme-toggle-button"

function Navbar() {
    return (
        <nav className="flex justify-between">
            <h1>Titulo Page</h1>
            <ModeToggle />
        </nav>
    )
}

export default Navbar