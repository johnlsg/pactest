function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".heavenlyfood.cn") || shExpMatch(host, "(*heavenlyfood.cn)")){
        return "PROXY 223.82.106.253:3128; PROXY 114.99.8.248:4216; PROXY 60.169.201.13:53315; PROXY 113.100.209.140:3128; PROXY 59.36.10.79:3128; PROXY 175.6.66.48:3128";


    }



    if (url.match(".*heavenlyfood\\.cn")) {


        return "PROXY 223.82.106.253:3128; PROXY 114.99.8.248:4216; PROXY 60.169.201.13:53315; PROXY 113.100.209.140:3128; PROXY 59.36.10.79:3128; PROXY 175.6.66.48:3128";

    } else {
        return "DIRECT";
    }
}
