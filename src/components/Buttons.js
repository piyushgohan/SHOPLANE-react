import React from 'react'
import {
    TruckIcon,
    CurrencyDollarIcon,
    SupportIcon,
    ShieldCheckIcon,
} from '@heroicons/react/outline';

import ButtonIcon from '../addedCompoents/ButtonIcon';

function Buttons() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '2%'}}>
            <div style={{textDecoration:"none",cursor: 'pointer'}}><ButtonIcon title="Free Delivery" Icon={TruckIcon} /></div>

            <div style={{textDecoration:"none",cursor: 'pointer'}}><ButtonIcon title="Money Back Guarantee" Icon={CurrencyDollarIcon} /></div>

            <div style={{textDecoration:"none" , cursor: 'pointer'}}><ButtonIcon title="Always Support" Icon={SupportIcon} /></div>

            <div style={{textDecoration:"none",cursor: 'pointer'}}><ButtonIcon title="Secure Payment" Icon={ShieldCheckIcon} /></div>
        </div>
    )
}

export default Buttons;
