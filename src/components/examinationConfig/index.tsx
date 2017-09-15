import * as React from 'react'
import { connect } from 'react-redux'
import * as CSSModules from 'react-css-modules'
import { History } from 'history'
import { Paper, RaisedButton , DatePicker } from 'material-ui'
import { submitExaminationConfigFrom, 
    ExaminationConfigPayloadFromAction, 
    ExaminationConfigPayload } from '../../actions/examinationConfig'
import { StoreState, ExaminationConfigFrom } from '../../reducers/types'

const styles = require('./index.scss')

interface Props {
    history: History,
    examinationConfigFrom: ExaminationConfigFrom,
    submitExaminationConfigFrom: ExaminationConfigPayloadFromAction
}

@CSSModules(styles)
class ExaminationConfig extends React.Component<Props, {}> {
    
    examinationConfigPayload: ExaminationConfigPayload = {
        startDate: new Date(),
        endDate: new Date()
    }
    
    render() {
        return (
            <Paper styleName="examination-box" zDepth={2}>
                <DatePicker 
                    floatingLabelText="起始时间"
                    hintText="起始时间" 
                    fullWidth={true}
                    onChange={this.setStartDate.bind(this, 'startDate')}
                />
                <DatePicker 
                    floatingLabelText="终止时间"
                    hintText="终止时间" 
                    fullWidth={true}
                    onChange={this.setEndDate.bind(this, 'endDate')}
                />
                <RaisedButton
                    label="开启考试"
                    primary={true}
                    fullWidth={true}
                    style={{marginTop: 10}}
                    onTouchTap={this.submit}
                />
            </Paper>
        )
    }

    private setStartDate = (field: string, _: Object, date: Date) => {
        this.examinationConfigPayload.startDate = date
    }

    private setEndDate = (field: string, _: Object, date: Date) => {
        this.examinationConfigPayload.endDate = date
    }

    private submit = () => {
        this.props.submitExaminationConfigFrom(this.examinationConfigPayload)
        this.props.history.push('/home')
    }
}

// export default ExaminationConfig
const mapStateToProps = (state: StoreState) => ({
    examinationConfigFrom: state.examinationConfigFrom,
})
const mapDispatchToProps = (dispatch: Function) => {
    return {
        submitExaminationConfigFrom: (examinationConfigPayload: ExaminationConfigPayload) => {
            dispatch(submitExaminationConfigFrom(examinationConfigPayload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExaminationConfig)