import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });
    //para que cambien los campos
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        //console.log(data);
        data.id = props.currentUser.id;
        props.updateUser(props.currentUser.id, data);
        //limpiar campos
        e.target.reset();
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>Name</label>
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
                <label>Username</label>
                <input className="form-control" type="text" name="username" ref={
                    register({
                        required: {value:true, message:"Campo requerido"}
                    })
                }/>
                <small className="form-text text-muted">
                    {errors?.username?.message}
                </small>
            </div>
            <button className="btn btn-primary btn-sm">Actualizar Usuario</button>
        </form>
    );
}

export default EditUserForm