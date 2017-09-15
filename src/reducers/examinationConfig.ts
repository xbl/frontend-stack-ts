import ActionTypes, { PayloadAction } from '../actions/types'
import { ExaminationConfigFrom } from './types'

const initialState: ExaminationConfigFrom = {
    startDate: new Date(),
    endDate: new Date(),
}

export default (state: ExaminationConfigFrom = initialState,
                action: PayloadAction<ExaminationConfigFrom>): ExaminationConfigFrom => {
    switch (action.type) {
        case ActionTypes.SUBMIT_EXAMINATION_CONFIG_FROM:
            return {
                ...state,
                ...action.payload
            }
        default:
            break
    }
    return state
}
