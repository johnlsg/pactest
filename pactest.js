function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".heavenlyfood.cn") || shExpMatch(host, "(*heavenlyfood.cn)")){
        return "PROXY 59.38.222.96:3128";

    }



    if (url.match(".*heavenlyfood\\.cn")) {

        return "PROXY 59.38.222.96:3128";
    } else {
        return "DIRECT";
    }
}
