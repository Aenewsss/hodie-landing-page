google.maps.__gjsload__('overlay', function(_) {
    var Vya = function() {},
        QC = function(a) {
            a.CA = a.CA || new Vya;
            return a.CA
        },
        Wya = function(a) {
            this.Eg = new _.gm(() => {
                const b = a.CA;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Hg && a.onAdd) a.onAdd();
                        b.Hg = !0;
                        a.draw()
                    }
                } else {
                    if (b.Hg)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Hg = !1
                }
            }, 0)
        },
        Yya = function(a, b) {
            const c = QC(a);
            let d = c.Fg;
            d || (d = c.Fg = new Wya(a));
            _.hb(c.Eg || [], _.Xj);
            var e = c.Ig = c.Ig || new _.Gsa;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection",
                b);
            e.bindTo("projectionTopLeft", f);
            e = c.Kg = c.Kg || new Xya(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.hm(d.Eg);
            c.Eg = [_.Vj(a, "panes_changed", e), _.Vj(f, "zoom_changed", e), _.Vj(f, "offset_changed", e), _.Vj(b, "projection_changed", e), _.Vj(f, "projectioncenterq_changed", e)];
            _.hm(d.Eg);
            b instanceof _.Ak ? (_.Pk(b, "Ox"), _.L(b, 148440)) : b instanceof _.el && (_.Pk(b, "Oxs"), _.L(b, 181451))
        },
        Zya = function(a) {
            const b =
                QC(a);
            var c = b.Ig;
            c && c.unbindAll();
            (c = b.Kg) && c.unbindAll();
            a.unbindAll();
            a.set("panes", null);
            a.set("projection", null);
            b.Eg && b.Eg.forEach(d => {
                _.Xj(d)
            });
            b.Eg = null;
            b.Fg && (_.im(b.Fg.Eg), b.Fg = null)
        },
        dza = function(a) {
            if (a) {
                var b = a.getMap();
                if ($ya(a) !== b && b && b instanceof _.Ak) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new aza(b, a, c.overlayLayer) : c.Fg.then(({
                        eh: d
                    }) => {
                        const e = new bza(b, d);
                        d.Hi(e);
                        c.overlayLayer = e;
                        cza(a);
                        dza(a)
                    })
                }
            }
        },
        cza = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Eg.unbindAll(), b.Eg.set("panes",
                    null), b.Eg.set("projection", null), b.Hg.Gl(b), b.Fg && (b.Fg = !1, b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()))
            }
        },
        $ya = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        eza = function(a, b) {
            a.Eg.get("projection") != b && (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b))
        };
    var Xya = class extends _.kk {
        constructor(a) {
            super();
            this.projection = a
        }
        changed(a) {
            a !== "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Zi(this.get("zoom"))), a === !this.get("outProjection") && this.set("outProjection", a ? this.projection : null))
        }
    };
    var RC = {};
    _.va(Wya, _.kk);
    RC.Kl = function(a) {
        if (a) {
            var b = a.getMap();
            (QC(a).Jg || null) !== b && (b && Yya(a, b), QC(a).Jg = b)
        }
    };
    RC.Gl = function(a) {
        Zya(a);
        delete QC(a).Jg
    };
    RC.mN = Vya;
    var SC = {},
        aza = class {
            constructor(a, b, c) {
                this.map = a;
                this.Eg = b;
                this.Hg = c;
                this.Fg = !1;
                _.Pk(this.map, "Ox");
                _.L(this.map, 148440);
                c.Kl(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.Eg.onAdd && this.Eg.onAdd());
                this.Eg.draw && this.Eg.draw()
            }
        },
        bza = class {
            constructor(a, b) {
                this.Ig = a;
                this.Hg = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            ai(a, b, c, d, e, f, g, h) {
                const k = this.Eg = this.Eg || new _.Kz(this.Ig, this.Hg, () => {});
                k.ai(a, b, c, d, e, f, g, h);
                for (const m of this.Fg) eza(m, k), m.draw()
            }
            Kl(a) {
                this.Fg.push(a);
                this.Eg && eza(a, this.Eg);
                this.Hg.refresh()
            }
            Gl(a) {
                _.nb(this.Fg,
                    a)
            }
        };
    SC.Kl = dza;
    SC.Gl = cza;
    _.Mi("overlay", {
        qC: function(a) {
            if (a) {
                (0, RC.Gl)(a);
                (0, SC.Gl)(a);
                var b = a.getMap();
                b && (b instanceof _.Ak ? (0, SC.Kl)(a) : (0, RC.Kl)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.Du(a, {
                Dl: ({
                    event: b
                }) => {
                    _.Ks(b.Eg)
                },
                gk: b => _.ou(b),
                wq: b => _.pu(b),
                fl: b => _.pu(b),
                Ak: b => _.qu(b)
            }).ns(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.Tj);
            a.addEventListener("contextmenu", _.Tj);
            a.addEventListener("dblclick", _.Tj);
            a.addEventListener("mousedown", _.Tj);
            a.addEventListener("mousemove", _.Tj);
            a.addEventListener("MSPointerDown",
                _.Tj);
            a.addEventListener("pointerdown", _.Tj);
            a.addEventListener("touchstart", _.Tj);
            a.addEventListener("wheel", _.Tj)
        }
    });
});