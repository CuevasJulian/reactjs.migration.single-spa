import React,{ useState } from 'react';
import {Row,Col,Radio} from 'antd';
import './style.scss';

const Main = () => {

    const [ platformSelect, setPlatformSelect ] = useState('app1');
    const platformSwitch = [
        {
            label:'App 1',
            value:'app1'
        },
        {
            label:'App 2',
            value:'app2'
        }
    ]

    const onChange = ( values ) => {
        setPlatformSelect(values.target.value)
    }

    return (
        <Row>
            <div className={'container-radio-select'}>
                <Radio.Group
                className={'radio-container'}
                options={platformSwitch}
                onChange={onChange}
                value={platformSelect}
                optionType={"button"}
                buttonStyle={"solid"}
                />
            </div>
            <Col span={24}>
                
            </Col>
        </Row>
    )
}

export default Main;