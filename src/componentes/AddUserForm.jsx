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
            <div className="form-group">
                <label>Nombre</label>
                <input className="form-control" type="text" name="name" ref={
                    register({
                        required: {value:true, message:"Campo requerido"}
                    })
                }/>
                <small className="form-text text-muted">
                    {errors?.name?.message}
                </small>
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input className="form-control" type="text" name="username"ref={
                    register({
                        required: {value:true, message:"Campo requerido"}
                    })
                }/>
                <small className="form-text text-muted">
                    {errors?.username?.message}
                </small>
            </div>
            <button className="btn btn-primary btn-sm">Nuevo Usuario</button>
        </form>
    );
}

export default AddUserForm;