import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import signInFrom from './signInFrom'
import examinationConfig from './examinationConfig'

export default combineReducers({
    router: routerReducer,
    signInFrom,
    examinationConfig
})
