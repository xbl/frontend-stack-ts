export interface SignInFrom {
    username: string
    password: string
}

export interface ExaminationConfigFrom {
    startDate: Date
    endDate: Date
}

export interface StoreState {
    signInFrom: SignInFrom,
    examinationConfigFrom: ExaminationConfigFrom
}
