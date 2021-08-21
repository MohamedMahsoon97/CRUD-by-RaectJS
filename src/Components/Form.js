import React, { Component } from 'react'

function Form(props) {
    return (
    <section>
        <h4>Form</h4>
        <form onSubmit={props.addNewSkill}>
            <input type="text" placeholder="add skill" value={props.current} onChange={props.handleInputChange}/>
            <input type="submit"/>
        </form>
    </section>
    );
}

export default Form;