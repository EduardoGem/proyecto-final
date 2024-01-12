import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {

        const {isAuthenticated, logout, user} = useAuth();

    return(
        <nav className=" bg-sky-950 my-3 flex justify-between py-6 px-6 rounded-lg"> 
            <Link to={
                isAuthenticated ? "/tasks" : "/"
            }>
                <h1 className=" text-2xl font-sans">INICIO</h1> 
            </Link>
            <ul className=" flex gap-x-4">
                {isAuthenticated ? (
                <>
                    <li className=" text-bold text-xl">
                        Bienvenido {user.username}
                    </li>
                    <li>
                        <Link to='/add-task' className=" bg-neutral-300 px-6 py-2 rounded-sm font-bold  text-black">Perfil</Link>
                    </li>
                    <li>
                        <Link to='/'
                        className=" bg-neutral-300 px-6 py-2 rounded-sm font-bold  text-black"
                        onClick={() => {
                            logout();
                        }}>Salir</Link>
                    </li>
                    </>
                ) : (
                  <>
                  <li>
                        <Link to='/login' className=" bg-neutral-300 px-6 py-2 rounded-sm font-bold  text-black">Ingresar</Link>
                    </li>
                    <li>
                        <Link to='/register' className=" bg-neutral-300 font-bold px-6 py-2  rounded-sm text-black">Registrarse</Link>
                    </li>
                  </>
                )}
            </ul>

        </nav>
    )
}

export default Navbar