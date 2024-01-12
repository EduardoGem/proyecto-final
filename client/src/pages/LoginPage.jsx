import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function LoginPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signin, errors: signinErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);


    return (


        <div className="flex h-[calc(100vh-1px)] items-center justify-center bg-slate-200">
            <div className=" bg-slate-100 max-w-md w-full p-10 rounded-md">

                {
                    signinErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white text-center m-2" key={i}>
                            {error}
                        </div>

                    ))
                }

                <h1 className="text-2xl text-zinc-700 font-sans font-bold my-6 text-center">SISTEMA ACADÉMICO</h1> 
                <form
                    onSubmit={onSubmit}
                >
                    <input type="email" {...register("email", { required: true })}
                        className="w-full bg-slate-50 text-black px-4 py-2 rounded-md my-2"
                        placeholder="Correo..."
                    />
                    {errors.email && (
                        <p className="text-red-500">email is required</p>
                    )}
                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-slate-50 text-black px-4 py-2 rounded-md my-2"
                        placeholder="Contraseña..."
                    />
                    {errors.password && (
                        <p className="text-red-500">Password is required</p>
                    )}
                    <button type="submit"
                        className="bg-emerald-600 text-white w-full px-4 py-2 rounded-md my-4 font-bold"
                    >Iniciar Sesión </button>
                </form>

                {/*<p className="flex gap-x-2 justify-between">
                    Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
                    </p>*/}

            </div>
        </div>
    )
}

export default LoginPage