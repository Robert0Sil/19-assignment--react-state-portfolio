import React, { Component } from 'react'

class WorkHistory extends Component {

_genWrkHistJsx(){

  const wrkHistArr = this.props.wHist.map(function(wHistStr, index){
    // console.log(wHitsStr);
    return  (
      <div className="job" key={index}>

          <div className="job__years">
            <h6 className="job__end">{wHistStr.years.end}</h6>
            <h6 className="job__start">{wHistStr.years.start}</h6>
          </div>
          <h5 className="job__title">{wHistStr.title}</h5>
          <h5 className="job__company">{wHistStr.company}</h5>
          <p className="job__description">{wHistStr.description}</p>
      </div>
    )
  })
      return wrkHistArr
      // console.log(wrkHistArr);
}

  render () {
    console.log(this.props.wHist);

    return(
        <section>
          <h4>Work Experience</h4>
          <div className="job-timeline">
            {this._genWrkHistJsx()}
          </div>
        </section>

    );
  }
}

export default WorkHistory;
