<form id="formulario" className=" p-20" onSubmit={handleSubmit}>
    <div className=" flex justify-between w-full p-4">
        <label htmlFor="estudiante" className="w-[30%]  justify-center text-xl font-sans  flex items-center ">Estudiante:</label>

        <div className=" w-[70%] text-black">
            <Controller
                name="estudiante"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <AsyncSelect
                        {...field}
                        isClearable
                        defaultOptions
                        cacheOptions
                        placeholder="CI ESTUDIANTE"
                        closeMenuOnSelect={true}
                        loadOptions={userselect}
                        inputRef={field.ref}
                        name={field.name}
                        components={animatedComponents}
                        onChange={onchangeEst}

                        value={valueEst}



                        //{...register("estudiante", { required: true })}

                        styles={estilos}
                    />

                )}

            />
        </div>

    </div>
    <div className=" flex justify-between w-full p-4">
        <label htmlFor="grado" className="w-[30%]  justify-center text-xl font-sans flex items-center ">Grado:</label>

        <div className=" font-sans w-[70%] text-black  ">
            <Controller
                name="grado"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <Select
                        {...field}
                        isClearable
                        defaultOptions
                        cacheOptions

                        placeholder="NONE"
                        name={field.name}
                        styles={estilos}
                        options={optgrado}
                        closeMenuOnSelect={true}
                        inputRef={field.ref}
                        onChange={onchangeGrad}
                        value={valueGrado}

                    //{...register("grado", { required: true })}

                    />
                )}

            />
        </div>
    </div>
    <div className=" flex justify-between w-full p-4">
        <label htmlFor="curso" className="w-[30%]  justify-center text-xl font-sans flex items-center ">Curso:</label>

        <div className=" font-sans w-[70%] text-black">
            <Controller
                name="curso"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <Select
                        isClearable
                        defaultOptions
                        cacheOptions
                        name={field.name}
                        styles={estilos}
                        placeholder="NONE"
                        options={optcursos}
                        inputRef={field.ref}
                        closeMenuOnSelect={true}
                        onChange={onchangeCur}
                        value={valueCurso}
                        {...field}

                    // {...register("curso", { required: true })}


                    />
                )}

            />
        </div>
    </div>
    <div className=" flex justify-between w-full px-4 py-2">
        <label htmlFor="paralelo" className="w-[30%]  justify-center text-xl font-sans flex items-center ">Paralelo:</label>
        <input onChange={handleChange} value={values.paralelo} id="paralelo" name="paralelo" type="text" placeholder="PARALELO" className=" font-sans w-[70%]  p-2 bg-gray-200 outline-slate-400 rounded-md" />
    </div>
    <div className="flex justify-end w-full py-10 px-4">
        <button type="submit" className=" w-[200px] bg-[#198754]  text-white px-4 py-2 rounded-lg text-xl  font-sans">
            Guardar
        </button>
    </div>
</form>