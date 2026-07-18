const projectsData = {
    "mahad": {
        title: "Mahad International Traders B2B Export Website",
        desc: "Designed and developed the complete website for Mahad International Traders, a Pakistan-based export company supplying basmati rice, pink salt, table salt, and industrial salt to international buyers. The goal was to create a credible, professional B2B web presence that converts international wholesale visitors into quote requests.",
        client: "Mahad International Traders",
        category: "B2B Export",
        url: "mahadinternationaltraders.com",
        image: "assets/images/mahad-hero.png",
        stack: ["WordPress", "Elementor Pro", "PHP", "On-page SEO"],
        scope: [
            "Full custom design and build using WordPress and Elementor Pro",
            "Product catalogue with 5 export categories and dedicated product pages",
            "Trust signals section — NTN H124110, FCCI Member, ISO Standards",
            "Quote request flow with form and WhatsApp direct contact button",
            "Global supply chain and target market sections for buyer confidence",
            "Google PageSpeed results: Performance 97, Accessibility 95, Best Practices 100, SEO 92"
        ]
    },
    "techosolution": {
        title: "Service Website Development Using WordPress & Elementor",
        desc: "Built a professional business website using WordPress and Elementor Pro, including homepage, service pages, about section, and contact form.",
        client: "Techo Solution",
        category: "WordPress",
        url: "techosolution.com",
        image: "C:\\Users\\User\\Downloads\\protfolio\\techosolution.png",
        stack: ["WordPress", "Elementor Pro", "Custom CSS", "Responsive"],
        scope: [
            "Created custom Elementor Pro layouts beyond standard templates",
            "Applied custom CSS for branding and animations",
            "Configured contact forms and social media links",
            "Optimized performance with 85+ Google PageSpeed scores"
        ]
    },
    "techtonic": {
        title: "Full-Time Corporate Website Build & Maintenance",
        desc: "Built and maintain the official Tech Tonic website using WordPress, Elementor Pro, and ACF as part of my full-time role.",
        client: "Tech Tonic",
        category: "WordPress",
        url: "techtonicltd.com",
        image: "C:\\Users\\User\\Downloads\\protfolio\\techtonic.png",
        stack: ["WordPress", "Elementor Pro", "ACF", "Maintenance"],
        scope: [
            "Developed scalable architecture using ACF",
            "Implemented custom post types for portfolio and services",
            "Ensured strict security protocols and ongoing maintenance",
            "Integrated API for third-party tools"
        ]
    },
    "machxdigital": {
        title: "High-Performance Digital Agency Website",
        desc: "Developed the full website for MachX Digital using WordPress, Elementor Pro, and ACF, delivering a fast, responsive, and high-performing digital agency site.",
        client: "MachX Digital",
        category: "WordPress",
        url: "machxdigital.com",
        image: "C:\\Users\\User\\Downloads\\protfolio\\machXdigitals.png",
        stack: ["WordPress", "Elementor Pro", "Performance"],
        scope: [
            "Built custom theme components from scratch",
            "Achieved 97% PageSpeed score through asset optimization",
            "Created dynamic, CMS-driven case study templates",
            "Configured advanced SEO tools"
        ]
    },
    "streamvidatlas": {
        title: "High-Traffic WordPress Infrastructure Optimization",
        desc: "Engineered a secure, high-performance WordPress infrastructure using Cloudflare, LiteSpeed Cache, and security hardening to improve speed and stability.",
        client: "StreamVid Atlas",
        category: "Infrastructure",
        url: "streamvidatlas.com",
        image: "C:\\Users\\User\\Downloads\\protfolio\\visitor-analytics.jpg",
        stack: ["Speed", "Security", "Cloudflare", "LiteSpeed"],
        scope: [
            "Deployed LiteSpeed cache on high-performance VPS",
            "Configured Cloudflare CDN and WAF",
            "Hardened WordPress security against brute-force attacks",
            "Monitored traffic analytics and optimized database"
        ]
    },
    "globalsportpartner": {
        title: "Custom Coded Sports Brand Homepage",
        desc: "Hand-coded a professional sports brand homepage from scratch using HTML5, CSS3, JavaScript and Bootstrap 5—no CMS, no page builder.",
        client: "Global Sport Partner",
        category: "Frontend",
        url: "globalsportpartner.com",
        image: "C:\\Users\\User\\Downloads\\protfolio\\globalsportbrand.png",
        stack: ["HTML5", "CSS3", "JS", "Bootstrap 5"],
        scope: [
            "Designed and coded responsive layout from scratch",
            "Implemented interactive UI components with vanilla JS",
            "Ensured cross-browser compatibility",
            "Achieved 98% PageSpeed without relying on heavy frameworks"
        ]
    },
    "syphaxcoffee": {
        title: "Premium E-Commerce Redesign for Coffee Brand",
        desc: "Redesigned the landing page and storefront for Syphax Coffee, a premium coffee e-commerce brand, to improve visual identity and user experience.",
        client: "Syphax Coffee",
        category: "E-commerce",
        url: "syphaxcoffee.com",
        image: "C:\\Users\\User\\Downloads\\protfolio\\syphox.png",
        stack: ["UI/UX", "WooCommerce", "Redesign"],
        scope: [
            "Overhauled WooCommerce product pages for conversion",
            "Redesigned checkout flow to reduce cart abandonment",
            "Integrated custom payment gateways",
            "Optimized high-resolution product imagery"
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Read URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    // 2. Select data (default to techosolution)
    const data = projectsData[projectId] || projectsData['techosolution'];
    
    // 3. Inject Text & Links
    document.getElementById('project-title').textContent = data.title;
    document.getElementById('project-desc').textContent = data.desc;
    document.getElementById('project-client').textContent = data.client;
    document.getElementById('project-category').textContent = data.category;
    
    const urlEl = document.getElementById('project-url');
    urlEl.textContent = data.url + " ↗";
    urlEl.href = "https://" + data.url;
    
    document.getElementById('project-url-btn').href = "https://" + data.url;
    
    // 4. Inject Image
    document.getElementById('project-image').src = data.image;
    
    // 5. Inject Tech Stack Pills
    const stackContainer = document.getElementById('project-stack');
    stackContainer.innerHTML = '';
    data.stack.forEach(tech => {
        const span = document.createElement('span');
        span.style.cssText = "font-size: 0.75rem; padding: 0.25rem 0.6rem; border-radius: 9999px; background-color: rgba(255,255,255,0.05); color: var(--text-muted); border: 1px solid var(--border-color);";
        span.textContent = tech;
        stackContainer.appendChild(span);
    });
    
    // 6. Inject Scope List
    const scopeContainer = document.getElementById('project-scope');
    scopeContainer.innerHTML = '';
    data.scope.forEach(item => {
        const li = document.createElement('li');
        li.style.cssText = "display: flex; gap: 1rem; align-items: flex-start; background-color: var(--bg-card); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: var(--border-radius-md);";
        
        li.innerHTML = `
            <div style="color: var(--primary); margin-top: 0.2rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0;">${item}</p>
        `;
        scopeContainer.appendChild(li);
    });
});
