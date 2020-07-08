function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".heavenlyfood.cn") || shExpMatch(host, "(*heavenlyfood.cn)")){
        return "PROXY 116.196.85.150:3128";

    }



    if (url.match(".*heavenlyfood\\.cn")) {

        return "PROXY 116.196.85.150:3128";
    } else {
        return "DIRECT";
    }
}