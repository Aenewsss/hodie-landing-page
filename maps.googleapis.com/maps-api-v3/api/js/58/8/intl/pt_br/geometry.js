google.maps.__gjsload__('geometry', function(_) {
    var Isa = function(a, b) {
            return Math.abs(_.Xi(b - a, -180, 180))
        },
        Jsa = function(a, b, c, d, e) {
            if (!d) {
                c = Isa(a.lng(), c) / Isa(a.lng(), b.lng());
                if (!e) return e = Math.sin(_.ui(a.lat())), e = Math.log((1 + e) / (1 - e)) / 2, b = Math.sin(_.ui(b.lat())), _.zi(2 * Math.atan(Math.exp(e + c * (Math.log((1 + b) / (1 - b)) / 2 - e))) - Math.PI / 2);
                a = e.fromLatLngToPoint(a);
                b = e.fromLatLngToPoint(b);
                return e.fromPointToLatLng(new _.Vk(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))).lat()
            }
            e = _.ui(a.lat());
            a = _.ui(a.lng());
            d = _.ui(b.lat());
            b = _.ui(b.lng());
            c = _.ui(c);
            return _.Xi(_.zi(Math.atan2(Math.sin(e) *
                Math.cos(d) * Math.sin(c - b) - Math.sin(d) * Math.cos(e) * Math.sin(c - a), Math.cos(e) * Math.cos(d) * Math.sin(a - b))), -90, 90)
        },
        Ksa = function(a, b) {
            a = new _.Gj(a, !1);
            b = new _.Gj(b, !1);
            return a.equals(b)
        },
        Lsa = function(a, b) {
            const c = [];
            let d = [0, 0],
                e;
            for (let f = 0, g = _.Ti(a); f < g; ++f) e = b ? b(a[f]) : a[f], EA.CE(e[0] - d[0], c), EA.CE(e[1] - d[1], c), d = e;
            return c.join("")
        },
        FA = {
            containsLocation: function(a, b) {
                a = _.Kj(a);
                const c = _.Xi(a.lng(), -180, 180),
                    d = !!b.get("geodesic"),
                    e = b.get("latLngs");
                var f = b.get("map");
                f = !d && f ? f.getProjection() : null;
                let g = !1;
                for (let k = 0, m = e.getLength(); k < m; ++k) {
                    const p = e.getAt(k);
                    for (let t = 0, u = p.getLength(); t < u; ++t) {
                        const w = p.getAt(t),
                            x = p.getAt((t + 1) % u);
                        var h = _.Xi(w.lng(), -180, 180);
                        const z = _.Xi(x.lng(), -180, 180),
                            B = Math.max(h, z);
                        h = Math.min(h, z);
                        (B - h > 180 ? c >= B || c < h : c < B && c >= h) && Jsa(w, x, c, d, f) < a.lat() && (g = !g)
                    }
                }
                return g || FA.isLocationOnEdge(a, b)
            }
        };
    _.ta("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.containsLocation", FA.containsLocation);
    FA.isLocationOnEdge = function(a, b, c) {
        a = _.Kj(a);
        c = c || 1E-9;
        const d = _.Xi(a.lng(), -180, 180),
            e = b instanceof _.cn,
            f = !!b.get("geodesic"),
            g = b.get("latLngs");
        b = b.get("map");
        b = !f && b ? b.getProjection() : null;
        for (let t = 0, u = g.getLength(); t < u; ++t) {
            const w = g.getAt(t),
                x = w.getLength(),
                z = e ? x : x - 1;
            for (let B = 0; B < z; ++B) {
                var h = w.getAt(B);
                const C = w.getAt((B + 1) % x);
                if (Ksa(h, a) || Ksa(C, a)) return !0;
                var k = _.Xi(h.lng(), -180, 180),
                    m = _.Xi(C.lng(), -180, 180);
                const F = Math.max(k, m),
                    I = Math.min(k, m);
                if (k = Math.abs(_.Xi(k - m, -180, 180)) <= 1E-9 &&
                    (Math.abs(_.Xi(k - d, -180, 180)) <= c || Math.abs(_.Xi(m - d, -180, 180)) <= c)) {
                    k = a.lat();
                    m = Math.min(h.lat(), C.lat()) - c;
                    var p = Math.max(h.lat(), C.lat()) + c;
                    k = k >= m && k <= p
                }
                if (k) return !0;
                if (F - I > 180 ? d + c >= F || d - c <= I : d + c >= I && d - c <= F)
                    if (h = Jsa(h, C, d, f, b), Math.abs(h - a.lat()) < c) return !0
            }
        }
        return !1
    };
    _.ta("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.isLocationOnEdge", FA.isLocationOnEdge);
    var EA = {
        decodePath: function(a) {
            const b = _.Ti(a),
                c = Array(Math.floor(a.length / 2));
            let d = 0,
                e = 0,
                f = 0,
                g;
            for (g = 0; d < b; ++g) {
                let h = 1,
                    k = 0,
                    m;
                do m = a.charCodeAt(d++) - 63 - 1, h += m << k, k += 5; while (m >= 31);
                e += h & 1 ? ~(h >> 1) : h >> 1;
                h = 1;
                k = 0;
                do m = a.charCodeAt(d++) - 63 - 1, h += m << k, k += 5; while (m >= 31);
                f += h & 1 ? ~(h >> 1) : h >> 1;
                c[g] = new _.Gj(e * 1E-5, f * 1E-5, !0)
            }
            c.length = g;
            return c
        }
    };
    _.ta("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath", EA.decodePath);
    EA.encodePath = function(a) {
        a instanceof _.Ml && (a = a.getArray());
        a = (0, _.qk)(a);
        return Lsa(a, function(b) {
            return [Math.round(b.lat() * 1E5), Math.round(b.lng() * 1E5)]
        })
    };
    _.ta("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath", EA.encodePath);
    EA.CE = function(a, b) {
        for (a = a < 0 ? ~(a << 1) : a << 1; a >= 32;) b.push(String.fromCharCode((32 | a & 31) + 63)), a >>= 5;
        b.push(String.fromCharCode(a + 63))
    };
    var Msa = {
        encoding: EA,
        spherical: _.yp,
        poly: FA
    };
    _.ja.google.maps.geometry = Msa;
    _.Mi("geometry", Msa);
});