export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "War Footing Wiki",
  shortName: "War Footing",
  logoText: "W",
  tagline: "Units, Scenarios & Cold War Defense Strategy",
  description: "Master War Footing with practical strategy guides, scenario walkthroughs, military unit insights, procurement tips, and economic planning advice for Cold War defense campaigns.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://warfooting.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://warfooting.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/4727860/",
  heroVideoId: "EbfWy0_mSwU", // War Footing gameplay: defending a small nation (procurement strategy)
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
