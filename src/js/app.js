import './sass';
import {IpWhois} from './api/Ipwhois';
import {UnSplash} from './api/UnSplash';
import { Ui } from './Ui/Ui';

console.log(`   ----(*﹏*)----    `) ;

const ui = new Ui;
const ipWhois = new IpWhois();
const unSplash = new UnSplash();
const dt = async ()=>{
    const data = await ipWhois.initData();
    ui.renderData(data);
    const img = await unSplash.initData(data.country);
    ui.renderImg("#heroImg",img.url);
}
dt();