const scheduleIdle = (fn, timeout = 1000) => {
    if ("requestIdleCallback" in window) {
        window.requestIdleCallback(fn, { timeout });
    } else {
        setTimeout(fn, timeout);
    }
};

// NOTE: placeholder testimonials with initials only. Replace with real
// testimonials after obtaining written consent from each client.
const testimonials = [
    {
        name: "ת.ל.",
        location: "תל אביב",
        rating: 5,
        service: "טיפול בחרדה",
        date: "2025",
        text: "הגעתי אחרי שנה של התקפי חרדה שלא הבנתי מאיפה באים. אצל רחל למדתי לזהות את הדפוסים ולעצור אותם באמצע. יחס מקצועי ואנושי בו-זמנית — הרגשתי שיש מי שבאמת מקשיב. אחרי חצי שנה חזרתי לתפקד."
    },
    {
        name: "מ.א.",
        location: "ראשון לציון",
        rating: 5,
        service: "טיפול בדיכאון",
        date: "2025",
        text: "הייתי במקום מאוד חשוך לפני שהתחלתי. רחל נתנה לי כלים פרקטיים, בלי הבטחות ריקות, הלכנו בקצב שלי בלי לחץ. היום אני יכול לומר שאני באמת חי ולא רק קיים."
    },
    {
        name: "ש.ב.",
        location: "חולון",
        rating: 5,
        service: "טיפול בטראומה",
        date: "2024",
        text: "עברתי דרך ארוכה בטיפול אחרי אירוע טראומטי. רחל יצרה מרחב בטוח שבו הרגשתי שאפשר לדבר על הכל, גם על דברים שמעולם לא אמרתי בקול. בלי שיפוט, עם סבלנות אינסופית."
    },
    {
        name: "י.כ.",
        location: "רמת גן",
        rating: 5,
        service: "לחץ ושחיקה",
        date: "2025",
        text: "הגעתי שחוקה לגמרי מעבודה, עם הרגשה שאני מאבדת את עצמי. רחל עזרה לי להבין מה באמת חשוב לי, להציב גבולות ולחזור להיות מחוברת לחיים שלי. הפגישות הפכו לנקודת עוגן של השבוע."
    },
    {
        name: "א.ר.",
        location: "בת ים",
        rating: 5,
        service: "ייעוץ ראשוני",
        date: "2024",
        text: "הגעתי לשיחת ייעוץ בחוסר ודאות גדולה, לא ידעתי אם טיפול זה בשבילי. רחל הקשיבה, שאלה את השאלות הנכונות, והסבירה איך הגישה של CBT עובדת. יצאתי עם תחושה ברורה שמצאתי את המקום הנכון."
    }
];

function initFooterYear() {
    const el = document.getElementById("footer-year");
    if (el) el.textContent = new Date().getFullYear();
}

function initMobileMenu() {
    const toggle = document.querySelector(".nav-toggle");
    const list = document.getElementById("nav-list");
    if (!toggle || !list) return;

    toggle.addEventListener("click", () => {
        const open = list.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "סגירת תפריט" : "פתיחת תפריט");
    });

    list.addEventListener("click", (e) => {
        if (e.target.tagName === "A" && list.classList.contains("open")) {
            list.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "פתיחת תפריט");
        }
    });
}

function initStickyHeader() {
    const header = document.getElementById("header");
    if (!header) return;

    let ticking = false;
    const update = () => {
        header.classList.toggle("scrolled", window.scrollY > 8);
        ticking = false;
    };

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });

    update();
}

function initServicesSlider() {
    const track = document.querySelector(".services-track");
    const wrap = document.querySelector(".services-track-wrap");
    const prev = document.querySelector(".services-slider .slider-prev");
    const next = document.querySelector(".services-slider .slider-next");
    if (!track || !wrap || !prev || !next) return;

    const cards = Array.from(track.children);
    if (!cards.length) return;

    const getVisibleCount = () => {
        const w = window.innerWidth;
        if (w > 1024) return 3;
        if (w > 768) return 2;
        return 1;
    };

    let index = 0;

    const update = () => {
        const visible = getVisibleCount();
        const maxIndex = Math.max(0, cards.length - visible);
        index = Math.min(Math.max(0, index), maxIndex);

        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const offset = (cardWidth + gap) * index;

        // RTL: positive translateX moves in the "next" (leftward visual) direction
        track.style.transform = `translateX(${offset}px)`;

        prev.disabled = index === 0;
        next.disabled = index >= maxIndex;
    };

    prev.addEventListener("click", () => { index -= 1; update(); });
    next.addEventListener("click", () => { index += 1; update(); });

    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(update, 120);
    });

    update();
}

function initTestimonials() {
    const track = document.querySelector(".testimonials-track");
    const dotsWrap = document.querySelector(".carousel-dots");
    const prev = document.querySelector(".carousel-prev");
    const next = document.querySelector(".carousel-next");
    if (!track || !dotsWrap || !prev || !next) return;
    if (!testimonials.length) return;

    const stars = (n) => "★".repeat(n) + "☆".repeat(Math.max(0, 5 - n));

    track.innerHTML = testimonials.map(t => `
        <article class="testimonial-card">
            <div class="testimonial-rating" aria-label="דירוג ${t.rating} מתוך 5">${stars(t.rating)}</div>
            <p class="testimonial-text">"${t.text}"</p>
            <p class="testimonial-meta">
                <span class="testimonial-name">${t.name}</span>
                · ${t.location} · ${t.service}${t.date ? " · " + t.date : ""}
            </p>
        </article>
    `).join("");

    dotsWrap.innerHTML = testimonials.map((_, i) =>
        `<button type="button" class="dot${i === 0 ? " active" : ""}" role="tab" aria-label="המלצה ${i + 1}" data-index="${i}"></button>`
    ).join("");

    const dots = Array.from(dotsWrap.children);
    let index = 0;
    let timer = null;
    const viewport = track.parentElement;

    const render = () => {
        track.style.transform = `translateX(${index * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle("active", i === index));
    };

    const go = (i) => {
        index = (i + testimonials.length) % testimonials.length;
        render();
    };

    prev.addEventListener("click", () => { go(index - 1); restart(); });
    next.addEventListener("click", () => { go(index + 1); restart(); });
    dots.forEach(d => d.addEventListener("click", () => {
        go(parseInt(d.dataset.index, 10));
        restart();
    }));

    const start = () => {
        stop();
        timer = setInterval(() => go(index + 1), 6000);
    };
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
    const restart = () => { stop(); start(); };

    viewport.addEventListener("mouseenter", stop);
    viewport.addEventListener("mouseleave", start);

    if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => e.isIntersecting ? start() : stop());
        }, { threshold: 0.2 });
        io.observe(viewport);
    } else {
        start();
    }

    // Touch swipe (RTL-aware)
    let sx = 0;
    viewport.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
    viewport.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) < 50) return;
        // In RTL, swiping right (positive dx) goes to "previous"
        if (dx > 0) { go(index - 1); } else { go(index + 1); }
        restart();
    });

    render();
}

function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const waNumber = "972509250117";
    const phoneRegex = /^0[0-9]{1,2}-?[0-9]{7}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const topicMap = {
        initial: "ייעוץ ראשוני",
        anxiety: "טיפול בחרדה",
        depression: "טיפול בדיכאון",
        trauma: "טיפול בטראומה",
        stress: "לחץ ושחיקה",
        other: "אחר"
    };

    const timeMap = {
        morning: "בוקר",
        noon: "צהריים",
        afternoon: "אחר הצהריים",
        evening: "ערב"
    };

    const setError = (id, msg) => {
        const field = form.querySelector("#" + id);
        const errEl = form.querySelector(`.error[data-for="${id}"]`);
        if (field) field.setAttribute("aria-invalid", msg ? "true" : "false");
        if (errEl) errEl.textContent = msg || "";
    };

    const clearErrors = () => {
        form.querySelectorAll(".error").forEach(e => e.textContent = "");
        form.querySelectorAll("[aria-invalid]").forEach(e => e.removeAttribute("aria-invalid"));
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors();

        const name = form["name"].value.trim();
        const phone = form["phone"].value.trim();
        const email = form["email"].value.trim();
        const topic = form["topic"].value;
        const time = form["time"].value;
        const message = form["message"].value.trim();
        const consent = form["consent"].checked;

        let ok = true;
        if (!name) { setError("f-name", "נא להזין שם מלא"); ok = false; }
        if (!phone) {
            setError("f-phone", "נא להזין מספר טלפון");
            ok = false;
        } else if (!phoneRegex.test(phone)) {
            setError("f-phone", "מספר טלפון לא תקין (פורמט: 0501234567)");
            ok = false;
        }
        if (email && !emailRegex.test(email)) {
            setError("f-email", "כתובת אימייל לא תקינה");
            ok = false;
        }
        if (!topic) { setError("f-topic", "נא לבחור נושא"); ok = false; }
        if (!consent) { setError("f-consent", "יש לאשר את מדיניות הפרטיות לפני השליחה"); ok = false; }

        if (!ok) {
            const firstInvalid = form.querySelector("[aria-invalid='true']");
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        const lines = [
            "שלום רחל, הגעתי דרך האתר 👋",
            "",
            `שם: ${name}`,
            `טלפון: ${phone}`
        ];
        if (email) lines.push(`אימייל: ${email}`);
        lines.push(`נושא: ${topicMap[topic] || topic}`);
        if (time) lines.push(`זמן מועדף: ${timeMap[time] || time}`);
        if (message) {
            lines.push("");
            lines.push("הודעה:");
            lines.push(message);
        }

        const text = encodeURIComponent(lines.join("\n"));
        window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank", "noopener");
    });
}

function initAccessibilityWidget() {
    if (document.querySelector(".a11y-widget")) return;

    const widget = document.createElement("div");
    widget.className = "a11y-widget";
    widget.innerHTML = `
        <button class="a11y-toggle" type="button" aria-label="פתיחת תפריט נגישות" aria-expanded="false">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"/><path d="M19 13V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5"/><path d="M12 10v7"/><path d="M8 22l4-5 4 5"/></svg>
        </button>
        <div class="a11y-panel" role="region" aria-label="הגדרות נגישות">
            <h3>נגישות</h3>
            <div class="a11y-font-group" role="group" aria-label="גודל טקסט">
                <button class="a11y-btn" type="button" data-action="font-down">א-</button>
                <button class="a11y-btn" type="button" data-action="font-reset">א</button>
                <button class="a11y-btn" type="button" data-action="font-up">א+</button>
            </div>
            <button class="a11y-btn" type="button" data-action="contrast">ניגודיות גבוהה</button>
            <button class="a11y-btn" type="button" data-action="highlight">הדגשת קישורים</button>
            <button class="a11y-btn" type="button" data-action="motion">עצירת אנימציות</button>
            <button class="a11y-btn" type="button" data-action="reset">איפוס הכל</button>
        </div>
    `;
    document.body.appendChild(widget);

    const toggle = widget.querySelector(".a11y-toggle");
    const panel = widget.querySelector(".a11y-panel");
    const body = document.body;
    const html = document.documentElement;

    let fontScale = 100;
    const MIN = 80, MAX = 150, STEP = 10;

    const applyFont = () => { html.style.fontSize = fontScale + "%"; };

    toggle.addEventListener("click", () => {
        const open = panel.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "סגירת תפריט נגישות" : "פתיחת תפריט נגישות");
    });

    document.addEventListener("click", (e) => {
        if (!widget.contains(e.target) && panel.classList.contains("open")) {
            panel.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "פתיחת תפריט נגישות");
        }
    });

    panel.addEventListener("click", (e) => {
        const btn = e.target.closest(".a11y-btn");
        if (!btn) return;
        const action = btn.dataset.action;

        switch (action) {
            case "font-up":
                fontScale = Math.min(MAX, fontScale + STEP);
                applyFont();
                break;
            case "font-down":
                fontScale = Math.max(MIN, fontScale - STEP);
                applyFont();
                break;
            case "font-reset":
                fontScale = 100;
                applyFont();
                break;
            case "contrast":
                body.classList.toggle("high-contrast");
                btn.classList.toggle("active", body.classList.contains("high-contrast"));
                break;
            case "highlight":
                body.classList.toggle("highlight-links");
                btn.classList.toggle("active", body.classList.contains("highlight-links"));
                break;
            case "motion":
                body.classList.toggle("stop-animations");
                btn.classList.toggle("active", body.classList.contains("stop-animations"));
                break;
            case "reset":
                fontScale = 100;
                applyFont();
                body.classList.remove("high-contrast", "highlight-links", "stop-animations");
                panel.querySelectorAll(".a11y-btn.active").forEach(b => b.classList.remove("active"));
                break;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initFooterYear();
    initMobileMenu();
    initStickyHeader();
    initServicesSlider();

    scheduleIdle(() => initTestimonials(),        1200);
    scheduleIdle(() => initContactForm(),         1800);
    scheduleIdle(() => initAccessibilityWidget(), 2400);
});
