import React from 'react';
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        data.id = null
        //console.log(data)
        props.AddUser(data)
        //limpiar campos
        e.target.reset();
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={
                register({
                    required: {value:true, message:"campo Requerido"}
                })
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username"ref={
                register({
                    required: {value:true, message:"campo Requerido"}
                })
            }/>
            <div>
                {errors?.username?.message}
            </div>
            <button>Nuevo Usuario</button>
        </form>
    );
}

export default AddUserForm;