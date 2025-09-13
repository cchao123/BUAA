"use client";

import { ConfigProvider, theme } from "antd";
import enUS from "antd/locale/en_US";
import frFR from "antd/locale/fr_FR";
import jaJP from "antd/locale/ja_JP";
import zhCN from "antd/locale/zh_CN";
import { useTranslation } from "react-i18next";

const localeMap = {
  zh: zhCN,
  en: enUS,
  fr: frFR,
  jp: jaJP,
  zh_hant: zhCN, // 使用简体中文的locale
};

interface AntdProviderProps {
  children: React.ReactNode;
}

export default function AntdProvider({ children }: AntdProviderProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as keyof typeof localeMap;

  return (
    <ConfigProvider
      locale={localeMap[currentLang] || zhCN}
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#1677ff",
          borderRadius: 8,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
