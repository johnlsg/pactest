function kxAqFlMfl(e) {
    x = 0;
    o = '';
    while (x < e.length) {
        if ((x % 2) == 0) {
            o += e.charAt(x)
        };
        x++
    };
    return o
};

console.log(kxAqFlMfl('AOBLCpDEEBF1GmH5ITJRKULUMnN2OyP4Q9RmSBThUAVTWhXOYzZaavb4cVdXeTfjgih9injkkzlPmenHogpzqcrJsrtPuDvpw2xFyLz20Y1s2F3N4I516G7e8O9a'));

function s(e) {
    x = 0;
    o = '';
    while (x < e.length) {
        if ((x % 2) == 0) {
            o += e.charAt(x)
        };
        x++
    };
    return o
};
oaa = s('AOBLCpDEEBF1GmH5ITJRKULUMnN2OyP4Q9RmSBThUAVTWhXOYzZaavb4cVdXeTfjgih9injkkzlPmenHogpzqcrJsrtPuDvpw2xFyLz20Y1s2F3N4I516G7e8O9a');

console.log(oaa);

var e = {
    e$: s('AOBLCpDEEBF1GmH5ITJRKULUMnN2OyP4Q9RmSBThUAVTWhXOYzZaavb4cVdXeTfjgih9injkkzlPmenHogpzqcrJsrtPuDvpw2xFyLz20Y1s2F3N4I516G7e8O9a') + '+/=',
    encode: function(t) {
        var a = '',
            l, n, o, c, s, d, r, i = 0;
        t = e.n$(t);
        while (i < t.length) {
            l = t.charCodeAt(i++);
            n = t.charCodeAt(i++);
            o = t.charCodeAt(i++);
            c = l >> 2;
            s = (l & 3) << 4 | n >> 4;
            d = (n & 15) << 2 | o >> 6;
            r = o & 63;
            if (isNaN(n)) {
                d = r = 64
            } else if (isNaN(o)) {
                r = 64
            };
            a = a + this.e$.charAt(c) + this.e$.charAt(s) + this.e$.charAt(d) + this.e$.charAt(r)
        };
        return a
    },
    decode: function(t) {
        var n = '',
            l, d, c, s, i, r, a, o = 0;
        t = t.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        while (o < t.length) {
            s = this.e$.indexOf(t.charAt(o++));
            i = this.e$.indexOf(t.charAt(o++));
            r = this.e$.indexOf(t.charAt(o++));
            a = this.e$.indexOf(t.charAt(o++));
            l = s << 2 | i >> 4;
            d = (i & 15) << 4 | r >> 2;
            c = (r & 3) << 6 | a;
            n = n + String.fromCharCode(l);
            if (r != 64) {
                n = n + String.fromCharCode(d)
            };
            if (a != 64) {
                n = n + String.fromCharCode(c)
            }
        };
        n = e.t$(n);
        return n
    },
    n$: function(e) {
        e = e.replace(/;/g, ';');
        var n = '';
        for (var o = 0; o < e.length; o++) {
            var t = e.charCodeAt(o);
            if (t < 128) {
                n += String.fromCharCode(t)
            } else if (t > 127 && t < 2048) {
                n += String.fromCharCode(t >> 6 | 192);
                n += String.fromCharCode(t & 63 | 128)
            } else {
                n += String.fromCharCode(t >> 12 | 224);
                n += String.fromCharCode(t >> 6 & 63 | 128);
                n += String.fromCharCode(t & 63 | 128)
            }
        };
        return n
    },
    t$: function(e) {
        var o = '',
            t = 0,
            n = c1 = c2 = 0;
        while (t < e.length) {
            n = e.charCodeAt(t);
            if (n < 128) {
                o += String.fromCharCode(n);
                t++
            } else if (n > 191 && n < 224) {
                c2 = e.charCodeAt(t + 1);
                o += String.fromCharCode((n & 31) << 6 | c2 & 63);
                t += 2
            } else {
                c2 = e.charCodeAt(t + 1);
                c3 = e.charCodeAt(t + 2);
                o += String.fromCharCode((n & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                t += 3
            }
        };
        return o
    }
};
var o1 = ['YWRuLmViYXkuY29t', 'YWQubWFpbC5ydQ==', 'anVpY3lhZHMuY29t', 'YWQuZm94bmV0d29ya3MuY29t', 'cGFydG5lcmFkcy55c20ueWFob28uY29t', 'YS5saXZlc3BvcnRtZWRpYS5ldQ==', 'YWR2ZXJ0aXNpbmcuYW9sLmNvbQ==', 'Y2FzLmNsaWNrYWJpbGl0eS5jb20=', 'cHJvbW90ZS5wYWlyLmNvbQ==', 'YWRzLnlhaG9vLmNvbQ==', 'YXMuaW5ib3guY29t', 'cGFydG5lcmFkcy55c20ueWFob28uY29t'],
    i1 = ['ZmF2aWNvbi5pY28=', 'YmFubmVyLmpwZw==', 'NDY4eDYwLmpwZw==', 'NzIweDkwLmpwZw==', 'c2t5c2NyYXBlci5qcGc=', 'MTM2N19hZC1jbGllbnRJRDI0NjQuanBn', 'YWRjbGllbnQtMDAyMTQ3LWhvc3QxLWJhbm5lci1hZC5qcGc=', 'Q0ROLTMzNC0xMDktMTM3eC1hZC1iYW5uZXI=', 'ZmF2aWNvbi5pY28=', 'YWQtbGFyZ2UucG5n', 'c3F1YXJlLWFkLnBuZw==', 'ZmF2aWNvbjEuaWNv', 'YmFubmVyX2FkLmdpZg==', 'bGFyZ2VfYmFubmVyLmdpZg==', 'd2lkZV9za3lzY3JhcGVyLmpwZw==', 'YWR2ZXJ0aXNlbWVudC0zNDMyMy5qcGc='];

for(var i = 0; i< o1.length ; i++){
    console.log(e.decode(o1[i]));
}
console.log("*********array i1***********");
for(var i = 0; i< i1.length ; i++){
    console.log(e.decode(i1[i]));
}