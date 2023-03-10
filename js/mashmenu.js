! function(e) {
    "use strict";
    var t = {
        separator: !0,
        ripple_effect: !0,
        search_bar_hide: !1,
        top_fixed: !1,
        full_width: !1,
        right_to_left: !1,
        trigger: "hover",
        vertical_tabs_trigger: "click",
        vertical_tabs_effect_speed: 400,
        drop_down_effect_in_speed: 200,
        drop_down_effect_out_speed: 200,
        drop_down_effect_in_delay: 200,
        drop_down_effect_out_delay: 200,
        outside_close_dropDown: !0,
        sticky_header: !1,
        sticky_header_height: 200,
        sticky_header_animation_speed: 400,
        timer_on: !1,
        timer_morning_color: "cyan",
        timer_afternoon_color: "red",
        timer_evening_color: "teal",
        internal_links_enable: !0,
        internal_links_toggle_drop_down: !1,
        internal_links_target_speed: 400,
        mobile_search_bar_hide: !1,
        mobile_sticky_header: !1,
        mobile_sticky_header_height: 100,
        media_query_max_width: 768
    };
    e.fn.mashableMenu = function(i) {
        return i = e.extend({}, t, i || {}), this.each(function() {
            var t, o, n = e(this),
                a = "li",
                r = "a",
                s = "active",
                d = "separator",
                l = n.find(".mash-list-items"),
                c = l.find(".drop-down, .drop-down-large, .drop-down-medium"),
                f = n.find(".mash-search-bar"),
                p = "search-bar-hide",
                u = "mash-top-fixed",
                _ = "mash-full-width",
                h = c.find(".vertical-tabs-container"),
                m = c.find(".collapsible"),
                g = c.find(".mash-tabs-container"),
                v = n.find(".mash-brand"),
                b = v.find(".mash-mobile-button"),
                y = ".menu-select",
                w = h.find(".vertical-tabs-content"),
                k = g.find(".mash-tabs"),
                C = g.find(".mash-tabs-content"),
                x = m.find(".collapsible-header"),
                T = m.find(".collapsible-body"),
                O = "right-to-left",
                j = n.find(".form-horizontal"),
                I = j.find(".form-notifier"),
                q = ".DropDownOpen";
            t = function() {
                return t = function(e) {
                    this.name = e
                }, t.prototype.contact_form_ajax = function() {
                    e(j).submit(function(t) {
                        var i, o;
                        i = e(this), t.preventDefault(), o = e(this).serialize(), i.find("button i.fa").css("display", "inline-block"), e.ajax({
                            type: "POST",
                            url: e(this).attr("action"),
                            data: o
                        }).done(function(e) {
                            I.text(e), i.find('input[type="text"]').val(""), i.find('input[type="email"]').val(""), i.find("textarea").val(""), i.find("button i.fa").css("display", "none")
                        }).fail(function(e) {
                            "" !== e.responseText && I.text("Error"), i.find("button i.fa").css("display", "none")
                        })
                    })
                }, t.prototype.collapsible_accordion = function() {
                    m.each(function() {
                        var t, i, o;
                        o = e(this), t = function(e) {
                            return e === !0 ? o.find(T).slideUp(200) : void 0
                        }, i = function(i) {
                            o.find(x).off("click").on("click", function(o) {
                                return o = e(this), o.siblings(T).is(":visible") ? o.siblings(T).slideUp(200) : (t(i), o.siblings(T).slideDown(200)), !1
                            })
                        }, o.hasClass("collapsible-accordion") && i(!0), o.hasClass("collapsible-expandable") && i(!1)
                    })
                }, t.prototype.verticalTabsResponsive = function(t) {
                    h.each(function() {
                        var o, n, a, d, l, c, f;
                        if (o = e(this), n = o.find(".vertical-tabs > a"), a = o.find(".vertical-tabs > a.active").attr("href"), c = o.find(".vertical-tabs-content-container"), t === !0) o.find(".vertical-tabs .vertical-tabs-content").remove(), n.hasClass(s) ? e(a).show(0) : (n.eq(0).addClass(s), e(n.eq(0).attr("href")).show(0)), "click" === i.vertical_tabs_trigger && "string" == typeof i.vertical_tabs_trigger && (o.on("click", ".vertical-tabs > a", function() {
                            return !1
                        }), d = function() {
                            var t, a, l, c;
                            t = e(this), a = o.find("a.active"), l = a.attr("href"), t.hasClass(s) ? o.one("click", ".vertical-tabs > a", d) : (n.siblings(r).removeClass(s), t.addClass(s), e(l).stop(!0, !0).fadeOut(i.vertical_tabs_effect_speed, function() {
                                c = t.attr("href"), e(c).stop(!0, !0).fadeIn(i.vertical_tabs_effect_speed), o.one("click", ".vertical-tabs > a", d)
                            }))
                        }, o.one("click", ".vertical-tabs > a", d)), "hover" === i.vertical_tabs_trigger && "string" == typeof i.vertical_tabs_trigger && (o.on("click", ".vertical-tabs > a", function() {
                            return !1
                        }), d = function() {
                            var t, a, l, c;
                            t = e(this), a = o.find("a.active"), l = a.attr("href"), t.hasClass(s) ? o.one("mouseenter", ".vertical-tabs > a", d) : (n.siblings(r).removeClass(s), t.addClass(s), e(l).stop(!0, !0).fadeOut(i.vertical_tabs_effect_speed, function() {
                                c = t.attr("href"), e(c).stop(!0, !0).fadeIn(i.vertical_tabs_effect_speed), o.one("mouseenter", ".vertical-tabs > a", d)
                            }))
                        }, o.one("mouseenter", ".vertical-tabs > a", d));
                        else {
                            if (n.hasClass(s) ? e(a).hide(0) : (n.eq(0).addClass(s), e(n.eq(0).attr("href")).hide(0)), 0 === c.find("> a").length)
                                for (l = 0; l < n.length; l += 1) f = n.eq(l).clone(), c.find(".vertical-tabs-content").eq(l).before(f);
                            o.off("click").on("click", ".vertical-tabs-content-container > a", function(t) {
                                t.stopPropagation(), t.stopImmediatePropagation(), t.preventDefault();
                                var i = e(this);
                                i.parent(".vertical-tabs-content-container").find(r).removeClass(s), i.addClass(s), i.next(".vertical-tabs-content").is(":hidden") ? (i.parent(".vertical-tabs-content-container").find(".vertical-tabs-content").hide(0), i.next(".vertical-tabs-content").show(0)) : i.next(".vertical-tabs-content").hide(0)
                            })
                        }
                    })
                }, t.prototype.drop_down_option_outside = function() {
                    i.internal_links_enable === !0 && "boolean" == typeof i.internal_links_enable && e(q).off("click").on("click", function(t) {
                        t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
                        var o, n, r, s;
                        o = l, n = f, o.is(":hidden") && o.add(n).show(0), r = e(this).attr("href"), s = e(r), s.is(":hidden") ? (s.parents(a).siblings(a).find(c).fadeOut(i.drop_down_effect_out_speed), s.parents(l).siblings(l).find(c).fadeOut(i.drop_down_effect_out_speed), s.fadeIn(i.drop_down_effect_in_speed)) : i.internal_links_toggle_drop_down === !0 && s.fadeOut(i.drop_down_effect_out_speed), 0 === i.internal_links_target_speed && (i.internal_links_target_speed = 10), e("html, body").stop().animate({
                            scrollTop: s.offset().top
                        }, i.internal_links_target_speed)
                    })
                }, t.prototype.brand_close_dropDown = function() {
                    v.find(r).off("click").on("click", function() {
                        c.fadeOut(i.drop_down_effect_out_speed)
                    })
                }, t.prototype.outside_close = function(t) {
                    t === !0 && i.outside_close_dropDown === !0 && "boolean" == typeof i.outside_close_dropDown && e(window).on("click", function(e) {
                        n.is(e.target) || 0 !== n.has(e.target).length || c.fadeOut(i.drop_down_effect_out_speed)
                    })
                }, t.prototype.sibling_mobile = function(e) {
                    e.is(":hidden") ? (e.parents(a).siblings(a).find(c).fadeOut(0), e.parents(l).siblings(l).find(c).fadeOut(0)) : e.parent(a).find(c).fadeOut(0)
                }, t.prototype.sibling_desktop = function(e) {
                    e.is(":hidden") ? (e.parents(a).siblings(a).find(c).fadeOut(i.drop_down_effect_out_speed), e.parents(l).siblings(l).find(c).fadeOut(i.drop_down_effect_out_speed)) : e.parent(a).find(c).fadeOut(i.drop_down_effect_out_speed)
                }, t.prototype.trigger_click = function(t) {
                    var o = this;
                    t === !0 && "click" === i.trigger && "string" == typeof i.trigger ? c.prev(r).on("click", function(t) {
                        t.stopPropagation(), t.stopImmediatePropagation(), t.preventDefault();
                        var n = e(this).next(c);
                        n.is(":hidden") ? n.delay(i.drop_down_effect_in_delay).fadeIn(i.drop_down_effect_in_speed) : n.delay(i.drop_down_effect_out_delay).fadeOut(i.drop_down_effect_out_speed), o.sibling_desktop(n)
                    }) : (t === !1 && "hover" === i.trigger || t === !1 && "click" === i.trigger) && c.prev(r).on("click", function(t) {
                        t.stopPropagation(), t.stopImmediatePropagation();
                        var i, n, a;
                        i = c.prev(r).innerWidth() / 2, n = t.pageX, n > i && t.preventDefault(), a = e(this).next(c), a.is(":hidden") ? a.delay(0).fadeIn(0) : a.delay(0).fadeOut(0), o.sibling_mobile(a)
                    })
                }, t.prototype.input_select = function() {
                    n.find(y).dropdown({
                        autoinit: ".menu-select"
                    })
                }, t.prototype.trigger_hover = function(t) {
                    t === !0 && "hover" === i.trigger && "string" == typeof i.trigger && c.parents(a).on({
                        mouseenter: function() {
                            e(this).find(c).first(c).stop(!0).delay(i.drop_down_effect_in_delay).fadeIn(i.drop_down_effect_in_speed)
                        },
                        mouseleave: function() {
                            e(this).find(c).first(c).stop(!0).delay(i.drop_down_effect_out_delay).fadeOut(i.drop_down_effect_out_speed)
                        }
                    })
                }, t.prototype.mobile_collapse_button = function() {
                    b.off("click").on("click", function(e) {
                        e.stopPropagation(), e.stopImmediatePropagation(), e.preventDefault();
                        var t = l,
                            i = f;
                        t.is(":hidden") ? t.add(i).show(0) : t.add(i).hide(0)
                    })
                }, t.prototype.stickyHeader = function(t) {
                    if (t === !0 && i.top_fixed === !0 && "boolean" == typeof i.top_fixed) return e(window).off("scroll"), !1;
                    var o, a = !0;
                    o = t === !0 ? i.sticky_header_height : i.mobile_sticky_header_height, t === !0 && i.sticky_header === !0 || t === !1 && i.mobile_sticky_header === !0 ? e(window).off("scroll").on("scroll", function() {
                        e(window).scrollTop() > o ? a === !0 && n.fadeOut(i.sticky_header_animation_speed, function() {
                            e(this).addClass(u).fadeIn(i.sticky_header_animation_speed), a = !1
                        }) : a === !1 && n.fadeOut(i.sticky_header_animation_speed, function() {
                            e(this).removeClass(u).fadeIn(i.sticky_header_animation_speed), a = !0
                        })
                    }) : (e(window).off("scroll"), n.removeClass(u))
                }, t.prototype.menu_fullWidth = function() {
                    i.full_width === !0 && "boolean" == typeof i.full_width ? n.addClass(_) : n.removeClass(_)
                }, t.prototype.rightToLeft = function() {
                    i.right_to_left === !0 && "boolean" == typeof i.right_to_left ? n.addClass(O) : n.removeClass(O)
                }, t.prototype.menu_fixed = function(e) {
                    e === !0 && i.top_fixed === !0 && "boolean" == typeof i.top_fixed ? n.addClass(u) : n.removeClass(u)
                }, t.prototype.searchBar_hide = function(e) {
                    e === !0 && i.search_bar_hide === !0 && "boolean" == typeof i.search_bar_hide ? f.addClass(p) : e === !1 && i.mobile_search_bar_hide === !0 && "boolean" == typeof i.mobile_search_bar_hide ? (f.addClass(p), l.addClass(p)) : (f.removeClass(p), l.removeClass(p))
                }, t.prototype.google_ripple_effect = function(t, o) {
                    i.ripple_effect === !0 && "boolean" == typeof i.ripple_effect && (t = n.find(".mash-brand > li > a,.mash-list-items > li > a,.drop-down > li > a,.btn,.collapsible-header,.vertical-tabs a,.nav.nav-tabs li a,.list-group a,.vertical-tabs-content-container > a,.mash-tabs-container .mash-tabs-mobile,.mash-tabs-container .mash-tabs a"), o = c.find("button, input"), e.material.ripples(t.add(o)))
                }, t.prototype.separator_show = function() {
                    i.separator === !0 && "boolean" == typeof i.separator ? n.addClass(d) : n.removeClass(d)
                }, t.prototype.color_change_time = function(e, t, o) {
                    i.timer_on === !0 && "boolean" == typeof i.timer_on && (e = new Date, t = e.getHours(), o = 12 > t ? i.timer_morning_color : 18 > t ? i.timer_afternoon_color : i.timer_evening_color, n.attr("data-color", o))
                }, t.prototype.destroy = function() {
                    c.parents(a).off("mouseenter mouseleave"), c.prev(r).off("click"), e(window).off("click"), h.off("click mouseenter", ".vertical-tabs > a"), w.hide(0), k.find("a").removeClass(s), k.find("a").off("click"), C.find(">div").hide(0)
                }, t.prototype.mediaQuery = function(e, t) {
                    function o(e) {
                        e.matches ? (t.destroy(), t.searchBar_hide(!1), t.menu_fixed(!1), t.stickyHeader(!1), t.trigger_hover(!1), t.trigger_click(!1), t.outside_close(!1), t.verticalTabsResponsive(!1)) : (t.destroy(), t.searchBar_hide(!0), t.menu_fixed(!0), t.stickyHeader(!0), t.trigger_hover(!0), t.trigger_click(!0), t.outside_close(!0), t.verticalTabsResponsive(!0))
                    }
                    t = this, e = window.matchMedia("(max-width: " + i.media_query_max_width + "px)"), o(e), e.addListener(o)
                }, t
            }(), o = new t, o.mediaQuery(), o.color_change_time(), o.separator_show(), o.google_ripple_effect(), o.rightToLeft(), o.menu_fullWidth(), o.mobile_collapse_button(), o.input_select(), o.brand_close_dropDown(), o.drop_down_option_outside(), o.collapsible_accordion(), o.contact_form_ajax()
        })
    }
}(jQuery)