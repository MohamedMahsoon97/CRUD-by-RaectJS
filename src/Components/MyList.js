import React, { Component  , Fragment} from 'react'

class MyList extends Component{

    state = {
        isEdit : false,
    }

    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
          isEdit : !isEdit
        })
    }

    updateSkill = (e) => {
        e.preventDefault();
        this.props.editSkill(this.props.i , this.input.value);
        this.toggleState()
    }

    showFormEdit = () => {
        return (
            <form onSubmit={this.updateSkill}>
                <input type="text" ref = {(v) => this.input = v} defaultValue={this.props.Skills.Skill}/>
                <input type="submit" value="Update"/>
            </form>
        )
    }

    

    render(){
        const {Skills , deleteSkill} = this.props
        const {isEdit} = this.state
        return (
            <Fragment>
                <h4>MyList</h4>
                {isEdit ? this.showFormEdit() : 
                Skills.map((Skill , i) => {
                    return (
                        <div>
                            <span key={i} i={i} >{i + 1} - {Skill.skill} </span>
                            <button onClick={this.props.deleteSkill}>delete</button>
                            <button onClick={this.toggleState}>Edit</button>
                        </div>
                    )
                })}
            </Fragment>
        )
    }
}

export default MyList;