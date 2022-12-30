import React from 'react';
import GridLayer from "../../GridLayer";
import ConnectWallet from '../../Images/Group 1.png'
import Exchanges from '../../Images/Group 2.png'
import Merchants from '../../Images/Group 3.png'
import Answers from '../../Images/business-3d-young-people-standing-and-talking.png'
import GridLayerReverse from "../GridLayerReverse"

const RenderGrid = (props) => (
    <div>
        <div>
            <GridLayer
                header='Choose a Wallet'
                paragraph='To use Monero, the first thing you are going to need is a wallet. Visit our Downloads page and get the right wallet for you. The Monero wallets are available for a variety of platforms and contain everything you need to use Monero immediately.'
                button='Dowloads'
                Image={ConnectWallet}
            />
            <GridLayerReverse
                headerReverse='Get Some Coins'
                paragraphReverse='After you install a wallet, you need to get some Monero.
                 There are multiple ways to acquire some coins to spend,
                  like mining or working in exchange for Monero,
                  but the easiest way is to use an exchange and convert
                  your fiat money into XMR. Many exchanges,
                  centralized and decentralized, list Monero (XMR).'
                buttonReverse='Exchanges'
                ImageReverse={Exchanges}
            />
            <GridLayer
                header='Its a Currency: Use It!'
                paragraph='Monero is a currency and can be exchanged
                 for goods, services and other currencies,
                 privately and with very low fees.
                  Many entities will gladly accept
                  XMR for payments; take a look at our Merchants page.'
                button='Merchants'
                Image={Merchants}
            />
            <GridLayerReverse
                headerReverse='Find answers to your questions'
                paragraphReverse='We have heard a lot of questions over the years
                and have compiled a thorough and
                varied FAQ. Don not worry,
                if your questions are not in there, you can always ask the community.'
                buttonReverse='FAQ'
                ImageReverse={Answers}
            />
        </div>
    </div>
);

export default RenderGrid;