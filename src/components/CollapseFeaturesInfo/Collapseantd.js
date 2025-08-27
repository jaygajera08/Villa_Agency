import { Collapse } from 'antd';

const { Panel } = Collapse;

export default function Collapseantd() {
    return (
        <div style={{marginTop:'50px'}}>
            {/* activeKey="1" :  this is also define and set to default panel open in initial  */}
            <Collapse defaultActiveKey={['1']}>
                <Panel className='abcs' header="Best useful links ?" key="1">

                    <p style={{fontWeight:400,fontSize:15}}>Get <strong>the best villa,</strong> consectetur adipiscing elit, 
                    sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf 
                    same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>

                </Panel>
                <Panel style={{fontWeight:600,fontSize:17}} header="How does this work ?" key="2">

                    <p style={{fontWeight:400,fontSize:15}}>Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod 
                        tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.</p>

                </Panel>
                <Panel style={{fontWeight:600,fontSize:17}} header="Why is Villa Agency the best ?" key="3">

                    <p style={{fontWeight:400,fontSize:15}}>Get <strong>the best villa,</strong> consectetur adipiscing elit, 
                    sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf 
                    same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>

                </Panel>
            </Collapse>
        </div>
    );
}