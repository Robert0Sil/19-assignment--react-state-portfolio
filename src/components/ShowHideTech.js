import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear

*/

class ShowHideTech extends Component {

  constructor(parentClassPropsMethods){

    super(parentClassPropsMethods)
    this.state={isSelected: true}
  }
  _toggleSelected(){
    let newStateObj
    if(this.state.isSelected === true){
      newStateObj = {isSelected : false }
    }else{
    newStateObj = {isSelected : true}
    }
    this.setState(newStateObj)
  }
  render() {

    let techlistStatus
    if(this.state.isSelected === true){
      techlistStatus = `techlist--hidden`
    }else{
      techlistStatus = ''
    }

    return (

      <section>
        <h4>Technologies</h4>
        <button className="toggle-techlist"  onClick ={ ()=>{ this._toggleSelected()} }>
        {/*className={techlistStatus}>*/}
        + Show Tech
        </button>

        <div className={`techlist ${techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>

    );
  }
}

export default ShowHideTech

/*<li
  onClick ={ ()=>{ this._toggleSelected()} }
  className={techlistStatus}>

  {this.props.theName}
</li>*/
