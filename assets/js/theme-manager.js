(function () {
    const THEMES = {
        light: {
            nextLabel: 'Switch to dark mode',
        },
        dark: {
            nextLabel: 'Switch to light mode',
        },
    };

    class SiteThemeManager {
        constructor() {
            if (window.__siteThemeManager) {
                return window.__siteThemeManager;
            }

            this.themeToggle = document.getElementById('themeToggle');
            this.body = document.body;
            this.currentTheme = 'light';
            this.switchingTimeout = null;

            window.__siteThemeManager = this;
            this.init();
        }

        init() {
            this.applyTheme(this.currentTheme, { animate: false });
            this.body.classList.add('loaded');

            if (!this.themeToggle) return;

            this.themeToggle.addEventListener('click', () => this.toggleTheme());
            document.addEventListener('keydown', (event) => {
                if (event.ctrlKey && event.key.toLowerCase() === 'd') {
                    event.preventDefault();
                    this.toggleTheme();
                }
            });
        }

        applyTheme(theme, options = {}) {
            const nextTheme = THEMES[theme] ? theme : 'light';
            const config = THEMES[nextTheme];
            const shouldAnimate = options.animate !== false;

            this.currentTheme = nextTheme;

            if (shouldAnimate) {
                this.body.classList.add('theme-switching');
            }

            document.documentElement.setAttribute('data-theme', nextTheme);
            document.documentElement.style.colorScheme = nextTheme;
            this.body.setAttribute('data-theme', nextTheme);

            this.updateButton(config, nextTheme);

            if (this.switchingTimeout) {
                clearTimeout(this.switchingTimeout);
            }

            this.switchingTimeout = setTimeout(() => {
                this.body.classList.remove('theme-switching');
            }, shouldAnimate ? 100 : 0);
        }

        updateButton(config, theme) {
            if (!this.themeToggle) return;

            this.themeToggle.setAttribute('title', config.nextLabel);
            this.themeToggle.setAttribute('aria-label', config.nextLabel);
            this.themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        }

        toggleTheme() {
            this.applyTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
            this.addSwitchAnimation();
        }

        addSwitchAnimation() {
            if (!this.themeToggle) return;

            this.themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.themeToggle.style.transform = '';
            }, 300);
        }
    }

    function initSiteTheme() {
        return new SiteThemeManager();
    }

    window.SiteThemeManager = SiteThemeManager;
    window.initSiteTheme = initSiteTheme;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSiteTheme, { once: true });
    } else {
        initSiteTheme();
    }
})();
