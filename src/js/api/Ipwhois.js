export class IpWhois{
    constructor(){
        // this.data = this.initData();
    }
    async initData(){
        const Data = await fetch('https://ipwhois.app/json/');
        const JData = await Data.json();
        if(JData.success === true){
            return JData;
        }else{
            console.log(`somting went wrong, Erorr: ${JData.message}`);
        }
        return JData;
    }
}
const data = {
    "ip": "89.39.107.200",
    "success": true,
    "type": "IPv4",
    "continent": "Europe",
    "continent_code": "EU",
    "country": "Netherlands",
    "country_code": "NL",
    "country_flag": "https:\\/\\/cdn.ipwhois.io\\/flags\\/nl.svg",
    "country_capital": "Amsterdam",
    "country_phone": "+31",
    "country_neighbours": "DE,BE",
    "region": "North Holland",
    "city": "Amsterdam",
    "latitude": "52.3702157",
    "longitude": "4.8951679",
    "asn": "AS49981",
    "org": "WorldStream B.V.",
    "isp": "WorldStream B.V.",
    "timezone": "Europe\\/Amsterdam",
    "timezone_name": "Central European Standard Time",
    "timezone_dstOffset": "0",
    "timezone_gmtOffset": "3600",
    "timezone_gmt": "GMT +1:00",
    "currency": "Euro",
    "currency_code": "EUR",
    "currency_symbol": "\\u20ac",
    "currency_rates": "0.845095",
    "currency_plural": "euros",
    "completed_requests": 0
}