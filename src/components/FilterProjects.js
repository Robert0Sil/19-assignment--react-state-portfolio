import React, { Component } from 'react';
import { projectData } from '../data/datasource2'

class ProComp extends Component{
  render(){
    return (
      <div className="user--active">
        <span>{this.props.proname}</span>
        <span>{this.props.estat}</span>
      </div>
    )
  }
}

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

class FilterProjects extends Component {
  constructor(parentClassPropsMethods){

    super(parentClassPropsMethods)
    this.state={visiPro: 'all'}
  }

  _hanProClick(clickedType){

    this.setState({visiPro : clickedType})
  }
  _renProComp(visiPro){

   let filterProList = projectData.filter(function(ProObj){
     if(visiPro === 'all') return true

     if(ProObj.solo === true ) {
       return true
     }else{
       return false
     }

   })

   let componentsArr = filterProList.map(function(ProObj){
     return <ProComp proname={ProObj.projectName} estat={ProObj.solo} />
   })

   return componentsArr
 }

  render() {

    return (

        <section>
          <h4>Projects</h4>
          <h3>
            Currently showing: <mark>{this.state.visiPro}</mark>
          </h3>
          <div className="project-types-list">
            <span data-ptype="all" className="project-type project-type--all project-type--selected" onClick={ ()=>{ this._hanProClick('all') } }>
              All
            </span>

            <span data-ptype="solo" className="project-type project-type--solo " onClick={ ()=>{ this._hanProClick('solo') } }>
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" className="project-type project-type--team" onClick={ ()=>{ this._hanProClick('team') } }>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

            {/* Step (1) --- .map() the projectData to JSX  */}
            { this._renProComp(this.state.visiPro) }
          </div>

        </section>

    );
  }
}

export default FilterProjects
