function FindProxyForURL(url, host)
{
    console.log(url);
    console.log(host);
    if(url.match(".*heavenlyfood\\.cn")){

       return "PROXY 116.196.85.150:3128";
    }else{
        return "DIRECT";
    }
}