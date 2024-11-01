const getIpData = async (ip) =>{
    try {
        let url = `https://freeipapi.com/api/json/${ip}`;

        let ipAddressResponse = await fetch(url);
        if (ipAddressResponse.status !== 200) {
            document.querySelector("#container").innerHTML = ` 
                <p class="text-sm grey tracking-widest mt-8 mb-2">  Data not found</p>
                <h3 class="text-3xl darkgrey">status ${ipAddressResponse.status}</h3>
            `;
            return; 
        }
    
        let data = await ipAddressResponse.json()
        console.log(data)

        document.querySelector("#container").innerHTML = ` <div class="">
                    <p class="text-sm grey tracking-widest mb-2">IP ADDRESS</p>
                    <p class="text-3xl darkgrey">${data.ipAddress}</p>
                </div>
                <div class="">
                    <p class="text-sm grey tracking-widest mt-8 mb-2">LOCATION</p>
                    <h3 class="text-3xl darkgrey">${data.cityName}</h3>
                </div>
                <div class="">
                    <p class="text-sm grey tracking-widest mt-8  mb-2">TIMEZONE</p>
                    <h3 class="text-3xl darkgrey">UTC${data.timeZone}</h3>
                </div>
                <div class="">
                    <p class="text-sm grey tracking-widest mt-8  mb-2">ZIP CODE</p>
                    <h3 class="text-3xl darkgrey">${data.zipCode }</h3>
                </div>`
    } catch (error) {
        console.error(error)
    }
   
}
   



let resquestBtn = () =>{
    let userinput = document.querySelector("#ipinput").value;
    console.log(userinput)
    getIpData(userinput)
}