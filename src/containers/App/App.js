import React, { useState, useEffect } from 'react';
import { ConfigS } from '../../services'
import MainLayout from '../../layouts/Main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getSchoolDetail } from '../../store/actions/school-actions';

const App = ({ schoolData, _getSchoolDetails }) => {
  // values below are true and false to make sure screen dont show error message when it is being loaded
  const [isConfigLoaded, setConfigLoaded] = useState(true)
  const [loadFailed, setLoadFailed] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {

    const loadComponent = async () => {
      try {
        await ConfigS.setConfiguration();
        await _getSchoolDetails()
        setConfigLoaded(true)
        setLoadFailed(false)
      } catch (e) {
        setLoadFailed(false)
      }
    }

    if (initialLoad)
      loadComponent()

  }, [isConfigLoaded, loadFailed])


  return (
    <div>
      {
        (loadFailed || !isConfigLoaded) &&
        < div >
          <h1>
            Failed to Load the Application configuration.
          </h1>
        </div>
      }
      {
        isConfigLoaded &&
        <MainLayout />
      }
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    schoolData: state.school
  }
}

const mapDispatachToProps = (dispatch) => {
  return bindActionCreators({
    _getSchoolDetails: getSchoolDetail
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatachToProps)(App);