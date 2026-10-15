import { defineRouting } from "next-intl/routing";

export type Locale = "en" | "de" | "ru" | "fr";

export const locales: Locale[] = ["en", "de", "ru", "fr"];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});
