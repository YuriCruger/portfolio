import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  defaultLocale: "en",
  localeDetection: true,
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(pt-BR|en)/:path*"],
};
