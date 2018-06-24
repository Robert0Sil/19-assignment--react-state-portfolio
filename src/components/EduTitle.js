import React, { Component } from 'react'

class EduTitle extends Component {

_genEduTitJsx(){

  const eduTitArr = this.props.edu.map (function(eduStr, index){
    //console.log(eduStr);
    return  (
      <div className="degree" key={index}>
        <h5 className="degree__institute">{eduStr.institute}</h5>
        <p className="degree__field">{eduStr.fieldOfStudy}</p>
        <p className="degree__dates">{eduStr.dates}</p>
      </div>
    )
  })
    return eduTitArr
      // console.log(eduTitArr);

  }

  render() {
    // console.log(this.props.edu)

    return (
      <section>
        <h4>Education</h4>
        <div className="degree-list">
          {this._genEduTitJsx()}
        </div>
      </section>
    );
  }
}


export default EduTitle;
