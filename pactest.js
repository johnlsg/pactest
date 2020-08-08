function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".heavenlyfood.cn") || shExpMatch(host, "(*heavenlyfood.cn)")){
        return "PROXY 180.165.225.1:4145";

    }



    if (url.match(".*heavenlyfood\\.cn")) {

        return "PROXY 180.165.225.1:4145";
    } else {
        return "DIRECT";
    }
}