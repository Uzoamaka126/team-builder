import React, { useState } from 'react';


export default function Form(props) {

    return (
        <form>
            <label htmlFor='nameInput'>Name</label>
            <input name="name" onChange={props.onChange} value={props.formData.name} type="text" />

            <label htmlFor='nameInput'>Email</label>
            <input name="email" onChange={props.onChange} value={props.formData.email} type="text" />

            <label htmlFor='nameInput'>Role</label>
            <input name="role" onChange={props.onChange} value={props.formData.role} type="text" />

            <button>Add New Member</button>
        </form>
    )
}

