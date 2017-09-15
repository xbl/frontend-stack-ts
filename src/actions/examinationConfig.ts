import ActionTypes, { PayloadAction } from './types'

export interface ExaminationConfigPayload {
    startDate?: Date,
    endDate?: Date,
}

export type ExaminationConfigPayloadResult = PayloadAction<ExaminationConfigPayload>

export type ExaminationConfigPayloadFromAction = (payload: ExaminationConfigPayload) => ExaminationConfigPayloadResult

export const submitExaminationConfigFrom = (payload: ExaminationConfigPayload): ExaminationConfigPayloadResult => ({
    payload,
    type: ActionTypes.SUBMIT_EXAMINATION_CONFIG_FROM,
})