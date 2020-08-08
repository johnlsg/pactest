function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".heavenlyfood.cn") || shExpMatch(host, "(*heavenlyfood.cn)")){
        return "PROXY 175.6.66.48:3128";

    }



    if (url.match(".*heavenlyfood\\.cn")) {

        return "PROXY 175.6.66.48:3128";
    } else {
        return "DIRECT";
    }
}