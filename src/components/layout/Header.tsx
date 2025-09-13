import { CONTACT_US, HEADER_MENU } from '@/constants';
import { langList } from '@/i18n';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';

interface SubMenuItem {
  name: string;
  link: string;
  label?: string;
}

interface SubMenuProps {
  list?: SubMenuItem[];
  animate?: boolean;
  position?: 'left' | 'right';
  cb?: (item: SubMenuItem) => void;
}

export default function Header({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [languageShow, setLanguageShow] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!languageShow) return;
    const handleClick = (e: MouseEvent) => {
      const langGroup = document.getElementById('lang-group');
      if (langGroup && !langGroup.contains(e.target as Node)) setLanguageShow(false);
    };

    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, [languageShow]);

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    setLanguageShow(false);
  };

  return (
    <header className={styles.header} style={customStyle}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logoGroup} href="/">
          <img
            src="https://visionflow-video.talkit.ai/vf-talkit/header/logo-icon.png"
            alt="Logo Icon"
            className={styles.logoIcon}
          />
          <img
            src="https://visionflow-video.talkit.ai/vf-talkit/header/logo-font.svg"
            alt="Logo Font"
            className={styles.logoFont}
          />
        </Link>
        <nav className={styles.menuGroup}>
          {HEADER_MENU.map((menuItm) => (
            <div key={menuItm.key} className={styles.menuItem}>
              {
                // target='_blank'
                menuItm.subMenu ? (
                  <span> {t(menuItm.name)} </span>
                ) : (
                  <Link href={menuItm.link!}>{t(menuItm.name)} </Link>
                )
              }
              {menuItm.subMenu && (
                <img
                  src="https://visionflow-video.talkit.ai/vf-talkit/header/arrow.svg"
                  alt="arrow"
                  className={styles.arrow}
                />
              )}
              {menuItm.subMenu && (
                <SubMenu list={menuItm.subMenu} position={menuItm.position as 'left' | 'right'} />
              )}
            </div>
          ))}
        </nav>
        <div className={styles.rightGroup}>
          <div className={styles.mediaGroup}>
            {CONTACT_US.map(({ src, link, key }) => (
              <a
                className={styles.mediaIconWrapper}
                href={link}
                key={key}
                target="_blank"
                rel="noreferrer"
              >
                <img src={src} alt={key} className={styles.mediaIcon} />
              </a>
            ))}
          </div>
          <div
            className={styles.langGroup}
            id="lang-group"
            onClick={() => setLanguageShow((v) => !v)}
            style={{ position: 'relative' }}
          >
            <span>
              {langList.find((l) => l.value === i18n.language)?.label ||
                i18n.language?.toUpperCase() ||
                'EN'}
            </span>
            <img
              src="https://visionflow-video.talkit.ai/vf-talkit/header/arrow.svg"
              alt="arrow"
              className={styles.arrow}
            />
            {languageShow && (
              <div
                className={`${styles.subMenu} ${styles.right} ${styles.subMenuAnimate}`}
                style={{ minWidth: 120, right: 0, left: 'auto' }}
              >
                {langList.map((item) => (
                  <div
                    className={styles.menuItem}
                    key={item.value}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLangChange(item.value);
                    }}
                    style={{ fontWeight: i18n.language === item.value ? 'bold' : undefined }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function SubMenu({ list, animate, position = 'left', cb }: SubMenuProps) {
  const { t } = useTranslation();
  return (
    <div
      className={`${styles.subMenu} ${styles[position]} ${animate ? styles.subMenuAnimate : ''}`}
    >
      {list?.map((item, idx) => {
        if (!item.link)
          return (
            <span className={styles.menuItem} key={idx} onClick={() => cb?.(item)}>
              {t(item.label || '')} {item.label}
            </span>
          );
        return (
          <Link href={item.link} className={styles.menuItem} key={idx}>
            {t(item.name)}
          </Link>
        );
      })}
    </div>
  );
}
