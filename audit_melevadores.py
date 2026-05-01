"""
Visual SEO Audit for melevadores.cl
Captures screenshots and extracts SEO-relevant data via Playwright.
"""

import json
from playwright.sync_api import sync_playwright

URL = "https://www.melevadores.cl"
SCREENSHOTS_DIR = "/Users/manu/_PROYECTOS/m-elevadores/m-elevadores-public-website"

DESKTOP_PATH = f"{SCREENSHOTS_DIR}/screenshot_desktop_1440x900.png"
MOBILE_PATH  = f"{SCREENSHOTS_DIR}/screenshot_mobile_390x844.png"


def audit(url: str):
    results = {}

    with sync_playwright() as p:
        browser = p.chromium.launch()

        # ── DESKTOP (1440×900) ──────────────────────────────────────────────
        desktop_ctx = browser.new_context(
            viewport={"width": 1440, "height": 900},
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
        )
        desktop_page = desktop_ctx.new_page()
        desktop_page.goto(url, wait_until="networkidle", timeout=60000)
        desktop_page.wait_for_timeout(2000)  # let animations settle
        desktop_page.screenshot(path=DESKTOP_PATH, full_page=False)

        # ── SEO DATA (collected on desktop page) ────────────────────────────
        seo = desktop_page.evaluate("""() => {
            const data = {};

            // Viewport meta tag
            const vm = document.querySelector('meta[name="viewport"]');
            data.viewport_meta = vm ? vm.getAttribute('content') : null;

            // Title & description
            data.page_title = document.title;
            const desc = document.querySelector('meta[name="description"]');
            data.meta_description = desc ? desc.getAttribute('content') : null;

            // Canonical
            const can = document.querySelector('link[rel="canonical"]');
            data.canonical = can ? can.getAttribute('href') : null;

            // H1
            const h1s = Array.from(document.querySelectorAll('h1'));
            data.h1_count = h1s.length;
            data.h1_texts = h1s.map(h => h.innerText.trim());

            // All headings hierarchy
            data.headings = Array.from(
                document.querySelectorAll('h1,h2,h3,h4,h5,h6')
            ).map(h => ({ tag: h.tagName, text: h.innerText.trim().substring(0, 80) }));

            // Images – alt, src, loading attribute
            data.images = Array.from(document.querySelectorAll('img')).map(img => ({
                src: img.getAttribute('src') || '',
                alt: img.getAttribute('alt'),
                loading: img.getAttribute('loading'),
                width: img.naturalWidth,
                height: img.naturalHeight,
            }));
            data.images_missing_alt = data.images.filter(
                i => i.alt === null || i.alt === ''
            ).length;

            // Open Graph
            const og = {};
            document.querySelectorAll('meta[property^="og:"]').forEach(m => {
                og[m.getAttribute('property')] = m.getAttribute('content');
            });
            data.open_graph = og;

            // Structured data
            data.structured_data = Array.from(
                document.querySelectorAll('script[type="application/ld+json"]')
            ).map(s => {
                try { return JSON.parse(s.textContent); }
                catch(_) { return null; }
            }).filter(Boolean);

            // Lang attribute
            data.html_lang = document.documentElement.getAttribute('lang');

            // robots meta
            const robots = document.querySelector('meta[name="robots"]');
            data.robots = robots ? robots.getAttribute('content') : null;

            return data;
        }""")

        # ── ABOVE-THE-FOLD desktop ───────────────────────────────────────────
        atf_desktop = desktop_page.evaluate("""() => {
            const vp_h = window.innerHeight;
            const result = {};

            // H1 visible above fold?
            const h1 = document.querySelector('h1');
            if (h1) {
                const r = h1.getBoundingClientRect();
                result.h1_above_fold = r.top < vp_h && r.bottom > 0;
                result.h1_top_px = Math.round(r.top);
                result.h1_text = h1.innerText.trim();
            } else {
                result.h1_above_fold = false;
                result.h1_text = null;
            }

            // Primary CTA – look for buttons / anchors with common CTA keywords
            const ctaKeywords = /contacto|cotiza|llamar|whatsapp|presupuesto|solicitar|llama|cta|btn/i;
            const allBtns = Array.from(
                document.querySelectorAll('a,button,[role="button"]')
            );
            const ctaBtns = allBtns.filter(el => {
                const t = (el.innerText || el.getAttribute('aria-label') || '').trim();
                const cls = el.className || '';
                return ctaKeywords.test(t) || ctaKeywords.test(cls);
            });
            result.cta_count = ctaBtns.length;
            result.cta_above_fold = ctaBtns.some(el => {
                const r = el.getBoundingClientRect();
                return r.top < vp_h && r.bottom > 0;
            });
            result.cta_texts = ctaBtns.slice(0, 5).map(el => (el.innerText || '').trim().substring(0, 60));

            // Nav
            const nav = document.querySelector('nav,header,[role="navigation"]');
            result.nav_present = !!nav;

            // Hero image above fold?
            const imgs = Array.from(document.querySelectorAll('img'));
            const heroImgs = imgs.filter(img => {
                const r = img.getBoundingClientRect();
                return r.top < vp_h && r.bottom > 0 && r.width > 200;
            });
            result.hero_images_above_fold = heroImgs.map(img => ({
                src: img.getAttribute('src') || '',
                alt: img.getAttribute('alt'),
                naturalWidth: img.naturalWidth,
                naturalHeight: img.naturalHeight,
                width: Math.round(img.getBoundingClientRect().width),
                height: Math.round(img.getBoundingClientRect().height),
            }));

            return result;
        }""")

        desktop_ctx.close()

        # ── MOBILE (390×844, iPhone 14) ─────────────────────────────────────
        mobile_ctx = browser.new_context(
            viewport={"width": 390, "height": 844},
            device_scale_factor=3,
            is_mobile=True,
            has_touch=True,
            user_agent=(
                "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) "
                "AppleWebKit/605.1.15 (KHTML, like Gecko) "
                "Version/17.0 Mobile/15E148 Safari/604.1"
            ),
        )
        mobile_page = mobile_ctx.new_page()
        mobile_page.goto(url, wait_until="networkidle", timeout=60000)
        mobile_page.wait_for_timeout(2000)
        mobile_page.screenshot(path=MOBILE_PATH, full_page=False)

        # ── MOBILE CHECKS ────────────────────────────────────────────────────
        mobile_checks = mobile_page.evaluate("""() => {
            const vp_w = window.innerWidth;
            const vp_h = window.innerHeight;
            const result = {};

            // Horizontal scroll
            result.has_horizontal_scroll = document.body.scrollWidth > vp_w;
            result.body_scroll_width = document.body.scrollWidth;
            result.viewport_width = vp_w;

            // Body font size
            const bodyStyle = window.getComputedStyle(document.body);
            result.body_font_size = bodyStyle.fontSize;

            // Tap target analysis – buttons and links
            const interactives = Array.from(
                document.querySelectorAll('a,button,input,[role="button"]')
            );
            const tooSmall = interactives.filter(el => {
                const r = el.getBoundingClientRect();
                return r.width > 0 && r.height > 0 && (r.width < 48 || r.height < 48);
            });
            result.total_tap_targets = interactives.length;
            result.small_tap_targets_count = tooSmall.length;
            result.small_tap_targets_sample = tooSmall.slice(0, 8).map(el => ({
                tag: el.tagName,
                text: (el.innerText || el.getAttribute('aria-label') || el.getAttribute('placeholder') || '').trim().substring(0, 50),
                width: Math.round(el.getBoundingClientRect().width),
                height: Math.round(el.getBoundingClientRect().height),
            }));

            // H1 on mobile
            const h1 = document.querySelector('h1');
            if (h1) {
                const r = h1.getBoundingClientRect();
                result.h1_above_fold_mobile = r.top < vp_h && r.bottom > 0;
                result.h1_font_size_mobile = window.getComputedStyle(h1).fontSize;
            }

            // Nav accessible (hamburger or visible)
            const nav = document.querySelector('nav,header,[role="navigation"]');
            result.nav_present_mobile = !!nav;
            const hamburger = document.querySelector(
                '[class*="hamburger"],[class*="menu-btn"],[class*="toggle"],[aria-label*="menu" i],[class*="burger"]'
            );
            result.hamburger_found = !!hamburger;

            // Text readability – paragraphs font size
            const paragraphs = Array.from(document.querySelectorAll('p'));
            result.paragraph_font_sizes = paragraphs.slice(0, 5).map(p => ({
                text: p.innerText.trim().substring(0, 40),
                fontSize: window.getComputedStyle(p).fontSize,
            }));

            return result;
        }""")

        mobile_ctx.close()
        browser.close()

    results["seo"] = seo
    results["atf_desktop"] = atf_desktop
    results["mobile"] = mobile_checks
    return results


if __name__ == "__main__":
    print("Running audit on", URL)
    data = audit(URL)
    print("\n" + "=" * 60)
    print(json.dumps(data, indent=2, ensure_ascii=False))
