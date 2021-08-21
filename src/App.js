import React, { Component } from 'react'
import Form from './Components/Form'
import MyList from './Components/MyList'
class App extends Component {

    state = {
      Skills : [
            {skill : "Front-end"},
            {skill : "Ui / Ux Design"},
            {skill : "Back-end"},
        ],
        current : ''
    }

    handleInputChange = (e) => {
        const inputvalue = e.target.value
        this.setState({
            current : inputvalue,
        })
    }

    addNewSkill = (e) => {
        e.preventDefault();
        let current = this.state.current;
        let Skills = this.state.Skills;
        Skills.push({skill : current})
        this.setState({
          Skills,
          current : ''
        })
    }

    deleteSkill = (i) => {
      let Skills = this.state.Skills;
      Skills.splice(i , 1);
      this.setState({
        Skills,
      })
    }

    editSkill = (i , value) => { 
        let Skills = this.state.Skills;
        let Skill = Skills[i];
        Skill['skill'] = value
        this.setState({
            Skills,
        })
    }


    render() {
      return (
        <section>
            <h1>CRUD</h1>
            <Form 
                handleInputChange = {this.handleInputChange} 
                addNewSkill = {this.addNewSkill}
                current = {this.state.current}
            />
            <MyList 
                Skills={this.state.Skills} 
                deleteSkill = {this.deleteSkill}
                editSkill = {this.editSkill}
            />
        </section>
      );
    }
}

export default App;