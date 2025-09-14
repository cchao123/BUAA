'use client';

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { mainMenuItems, languageOptions } from '@/constants'
import { useTranslation } from 'react-i18next';
import { langList } from '@/i18n';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLang = () => {
    setIsLangOpen(!isLangOpen);
  };

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

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
          setIsLangOpen(false)
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
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  return (
    <header className={`site-header ${isScrolled ? 'site-header--hide' : ''}`} data-js-hook="site-header" role="banner">
      <div className="site-header__wrapper wfp-wrapper">
        <div className="site-header__branding">
          <a href="/" className="site-header__logo">
            <img src="https://static-data.gaokao.cn/upload/logo/47.jpg" alt="UN World Food Programme" />
          </a>
          <a href="/" className="site-header__slogan">
            SMART<br />
            Symposium
          </a>
        </div>

        <div className="navigation-main"
          data-once="navigation-area navigation-main">
          <div className="navigation-main__mobile-togglers">
            <a className="search-overlay__toggler search-overlay__toggler--mobile js--fullscreen-overlay__toggler"
              aria-controls="search-overlay"></a>
            <button
              className="navigation-main__toggler"
              aria-label="Main menu toggler"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="navigation-main__toggler-label">Menu</span>
              <span className="navigation-main__toggler-icon"></span>
            </button>
          </div>
          <div
            id="navigation-main__panel"
            className="navigation-main__panel"
            aria-hidden={!isMenuOpen}
            style={{ display: isMenuOpen ? 'block' : 'none' }}
          >
            <div className="navigation-main__panel-content menu-mobile">
              <nav className="menu-secondary" aria-label="Secondary">

                <ul className="menu menu--language-switcher" data-js-hook="menu"
                  data-internal-element-name="language-switcher" data-once="menu">
                  <li className="menu__item menu__item--has-children">
                    <span
                      className="menu__title"
                      onClick={toggleLang}
                      aria-expanded={isLangOpen}
                      style={{ cursor: 'pointer' }}
                    >
                      {langList.find((l) => l.value === i18n.language)?.label ||
                        i18n.language?.toUpperCase() ||
                        'ENGLISH'}
                    </span>

                    <div
                      className="menu__item-panel"
                      aria-hidden={!isLangOpen}
                      style={{ opacity: isLangOpen ? '1' : '0' }}
                    >
                      <a className="menu__item-closer--mobile" data-js-hook="menu__panel-closer"
                        href="/"
                        aria-controls="languages-megamenu-panel-e7b04579-9673-4f4f-bdf9-ffc80e7b09eb"
                      >Back</a>

                      <div className="menu__item-intro">
                        <h2 className="menu__item-intro-title">Languages</h2>
                      </div>

                      <ul className="menu__submenu menu__submenu--language-links" data-internal-element-name="language-switcher--links">
                        <li className="menu__submenu-item">
                          <ul className="menu__submenu-list">
                            {langList.map((language) => (
                              <li key={language.value} 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLangChange(language.value);
                              }}>
                                <a className="language-link">
                                  {language.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>

              <nav className="menu-primary">
                <ul className="menu">
                  {mainMenuItems.map((item, index) => (
                    <li key={index} className="menu__item menu__item--has-children">
                      <a 
                        className="menu__title" 
                        aria-expanded={pathname === item.href + '/'} 
                        href={item.href}
                      >
                        {t(`Header.${item.title}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}