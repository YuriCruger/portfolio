import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  // locales: ["en", "pt-BR"],
  defaultLocale: "en",
  localeDetection: true,
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(pt-BR|en)/:path*"],
};
