export class Ui{
    constructor(){

    }
    renderData(data){
        // console.log(data);
        document.getElementById("ipAddressStatus").innerText = data.ip;

        const ipAddressSecondaryMinStatus = document.getElementById("ipAddressSecondaryMinStatus");
        const ipAddressSecondaryMinStatusData = [`location:${data.country}`,`Isp:${data.isp}`,`latitude:${data.latitude}`,`longitude:${data.longitude}`];
        const scrollDown = document.getElementById("scrollDown");
        ipAddressSecondaryMinStatusData.forEach(item =>{
            const elment = document.createElement("p");
            elment.innerText = item;
            // ipAddressSecondaryMinStatus.appendChild(elment);
            ipAddressSecondaryMinStatus.insertBefore(elment,scrollDown)
        });
        
        const ipAddressSecondaryFullStatus = document.getElementById("ipAddressSecondaryFullStatus");
        const ipAddressSecondaryFullStatusData = ipAddressSecondaryMinStatusData.concat([`calling code::${data.country_phone}`,`organization:${data.org}`,`city:${data.city}`]);
        ipAddressSecondaryFullStatusData.unshift(data.ip)
        ipAddressSecondaryFullStatusData.forEach(item =>{
            const elment = document.createElement("p");
            elment.innerText = item;
            ipAddressSecondaryFullStatus.appendChild(elment);
        });
        ipAddressSecondaryFullStatus.firstChild.classList.add("strong");
    }
    renderImg(imgId,data){
        document.querySelector(imgId).src = data;
    }
}