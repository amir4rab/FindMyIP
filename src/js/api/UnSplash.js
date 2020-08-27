export class UnSplash{
    // constructor(data,imgId){
    //     this.initData(data,imgId);
    // }
    async initData(data){
        let img;
        document.getElementById("ipAddressStatus").innerText = `https://source.unsplash.com/${window.innerHeight/2}x${window.innerWidth}/?city,${data}`;
        if(window.innerWidth < 800){
            img = await fetch(`https://source.unsplash.com/${window.innerHeight<720?720:window.innerHeight}x${window.innerWidth<720?720:window.innerWidth}/?city,${data}`);
        }else{
            img = await fetch(`https://source.unsplash.com/${window.innerHeight>1080?1080:window.innerHeight}x${window.innerWidth>1920?1920:window.innerWidth}/?city,${data}`);
        }
        return img;
    }
}