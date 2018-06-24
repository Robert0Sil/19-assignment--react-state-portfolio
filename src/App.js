import React, { Component } from 'react';
import './css/styles.css';
import FilterProjects from './components/FilterProjects.js'
import ShowHideTech from './components/ShowHideTech.js'
import Skill from './components/Skill.js'
import EduTitle from './components/EduTitle.js'
import WorkHistory from './components/WorkHistory.js'
import { skills, eduList, jobsList } from './data/datasource.js'


class App extends Component {

  render() {
    return (
      <div className="App" id="app-container">

      <ShowHideTech/>
      <FilterProjects/>
      <Skill skill = {skills}/>
      <EduTitle edu = {eduList}/>
      <WorkHistory wHist = {jobsList}/>
      </div>
    );
  }
}

export default App;
