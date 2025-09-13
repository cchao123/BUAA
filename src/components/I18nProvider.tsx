"use client";

import { useEffect } from "react";
import "../i18n";

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // i18n配置会在导入时自动初始化
  }, []);

  return <>{children}</>;
}
