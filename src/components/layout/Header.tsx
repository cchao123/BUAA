'use client';

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      // 如果滚动位置小于100px，始终显示header
      if (currentScrollY < 100) {
        setIsScrolled(false);
      } else {
        // 向下滚动时隐藏，向上滚动时显示
        if (currentScrollY > lastScrollY) {
          // 向下滚动
          setIsScrolled(true);
        } else {
          // 向上滚动
          setIsScrolled(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--hide' : ''}`} data-js-hook="site-header" role="banner">
      <div className="site-header__wrapper wfp-wrapper">
        <div className="site-header__branding">
          <a href="https://www.wfp.org/" className="site-header__logo">
            <img src="https://static-data.gaokao.cn/upload/logo/47.jpg" alt="UN World Food Programme" />
          </a>
          <a href="https://www.wfp.org/" className="site-header__slogan">
            BUAA‌<br />2025
          </a>
        </div>

        <div className="navigation-main"
          data-once="navigation-area navigation-main">
          <div className="navigation-main__mobile-togglers">
            <a className="search-overlay__toggler search-overlay__toggler--mobile js--fullscreen-overlay__toggler"
              aria-controls="search-overlay"></a>
            <button className="navigation-main__toggler"
              aria-label="Main menu toggler">
              <span className="navigation-main__toggler-label">Menu</span>
              <span className="navigation-main__toggler-icon"></span>
            </button>
          </div>
          <div id="navigation-main__panel" className="navigation-main__panel" aria-hidden="true">
            <div className="navigation-main__panel-content menu-mobile">
              <nav className="menu-secondary" aria-label="Secondary">

                <ul className="menu menu--language-switcher" data-js-hook="menu"
                  data-internal-element-name="language-switcher" data-once="menu">
                  <li className="menu__item menu__item--has-children">
                    <span className="menu__title">English</span>

                    <div className="menu__item-panel"
                      aria-hidden="true">
                      <a className="menu__item-closer--mobile" data-js-hook="menu__panel-closer"
                        href="https://www.wfp.org/#languages-megamenu-panel-e7b04579-9673-4f4f-bdf9-ffc80e7b09eb"
                        aria-controls="languages-megamenu-panel-e7b04579-9673-4f4f-bdf9-ffc80e7b09eb"
                       >Back</a>

                      <div className="menu__item-intro">
                        <h2 className="menu__item-intro-title">Languages</h2>
                      </div>

                      <ul className="menu__submenu menu__submenu--language-links"
                        data-internal-element-name="language-switcher--links">
                        <li className="menu__submenu-item">
                          <ul className="menu__submenu-list">
                            <li>
                              <a href="https://fr.wfp.org/" className="language-link" hrefLang="fr">Français</a>
                            </li>
                            <li>
                              <a href="https://es.wfp.org/" className="language-link" hrefLang="es">Español</a>
                            </li>
                            <li>
                              <a href="https://ar.wfp.org/" className="language-link" hrefLang="ar">العربية</a>
                            </li>
                            <li>
                              <a href="https://zh.wfp.org/" className="language-link" hrefLang="zh-hans">简体中文</a>
                            </li>
                            <li>
                              <a href="https://fa.wfp.org/" className="language-link" hrefLang="fa">فارسی</a>
                            </li>
                            <li>
                              <a href="https://de.wfp.org/" className="language-link" hrefLang="de">Deutsch</a>
                            </li>
                            <li>
                              <a href="https://it.wfp.org/" className="language-link" hrefLang="it">Italiano</a>
                            </li>
                            <li>
                              <a href="https://ja.wfp.org/" className="language-link" hrefLang="ja">日本語</a>
                            </li>
                            <li>
                              <a href="https://ko.wfp.org/" className="language-link" hrefLang="ko">한국어</a>
                            </li>
                            <li>
                              <a href="https://ru.wfp.org/" className="language-link" hrefLang="ru">Русский</a>
                            </li>
                          </ul>
                        </li>
                      </ul>

                    </div>
                  </li>
                </ul>
              </nav>

              <nav className="menu-primary" aria-label="Main">
                <ul className="menu" data-js-hook="menu" data-once="menu">
                  <li className="menu__item menu__item--has-children">
                    <a className="menu__title">Home</a>
                  </li>
                  <li className="menu__item menu__item--has-children">
                    <a className="menu__title">Call for Papers</a>
                  </li> <li className="menu__item menu__item--has-children">
                    <a className="menu__title">Submission</a>
                  </li>
                  <li className="menu__item menu__item--has-children">
                    <a className="menu__title">Registration</a>
                  </li>
                  <li className="menu__item menu__item--has-children">
                    <a className="menu__title">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}