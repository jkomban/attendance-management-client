import React, { useState, useEffect } from 'react';
import { ConfigS } from '../../services'
import MainLayout from '../../layouts/Main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useSnackbar } from 'notistack';

const App = ({ schoolData, notifications }) => {
  // values below are true and false to make sure screen dont show error message when it is being loaded
  const [isConfigLoaded, setConfigLoaded] = useState(true)
  const [loadFailed, setLoadFailed] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {

    if (notifications.message != null) {
      console.log(`App.Notification ${notifications.message}`)
      const options = {
        variant: notifications.content.notiType.toLowerCase()
      }
      enqueueSnackbar(notifications.message, options)
    }

    const loadComponent = async () => {
      try {
        await ConfigS.setConfiguration();
        setConfigLoaded(true)
        setLoadFailed(false)
      } catch (e) {
        setLoadFailed(false)
      }
      setInitialLoad(false)
    }

    if (initialLoad)
      loadComponent()


  }, [isConfigLoaded, loadFailed, notifications])


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
    schoolData: state.school,
    notifications: state.notifications
  }
}

const mapDispatachToProps = (dispatch) => {
  return bindActionCreators({
    // _getSchoolDetails: getSchoolDetail
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatachToProps)(App);