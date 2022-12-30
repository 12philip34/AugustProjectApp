import React from 'react';
import GridLayer from "../../GridLayer";
import './style.css';
import Skills from "../../Images/3d-business-man-has-an-idea.png";
import Lab from "../../Images/casual-life-3d-young-woman-studying-magical-pink-gemstone.png";
import Community from "../../Images/business-3d-young-people-in-casual-clothes-standing.png";

import GridLayerReverse from "../GridLayerReverse";

const CommunityRender = (props) => (
    <div>
        <h1 className='headerCommunity'>Join Community</h1>
        <GridLayer
            header='We Need Your Skills: Contribute!'
            paragraph='Monero is not simply a currency,
            its a decentralized community and exists
            only thanks to the hundreds of volunteers
            that dedicate their time to the project. Join us!'
            button='Contributing'
            Image={Skills}
        />
        <GridLayerReverse
            headerReverse='Monero Research Lab (MRL)'
            paragraphReverse='
            The MRL (Monero Research Lab)
             is a very important part of Monero.
              Researchers and cryptographers from
              all over the world meet to find new ways to improve Monero.
               Read their papers and join them!'
            buttonReverse='Visit the MRL'
            ImageReverse={Lab}
        />
            <GridLayer
                header='Meet the community!'
                paragraph='The members of the Monero
                 community are all over the world.
                 You can find us on multiple platforms. Come meet us!'
                button='Hangouts'
                Image={Community}
            />
    </div>
);

export default CommunityRender;