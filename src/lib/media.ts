export const MEDIA_QUERIES_PX = {
  MOBILE: 640,
  TABLET: 992,
  DESKTOP: 1200,
  DESKTOP_LG: 1440,
  DESKTOP_XL: 1920,
}

export const MEDIA_QUERIES = {
  MOBILE: `(min-width : ${MEDIA_QUERIES_PX.MOBILE}px)`,
  TABLET: `(min-width : ${MEDIA_QUERIES_PX.TABLET}px)`,
  DESKTOP: `(min-width : ${MEDIA_QUERIES_PX.DESKTOP}px)`,
  DESKTOP_LG: `(min-width : ${MEDIA_QUERIES_PX.DESKTOP_LG}px)`,
  DESKTOP_XL: `(min-width : ${MEDIA_QUERIES_PX.DESKTOP_XL}px)`,

  DARK_THEME: `(prefers-color-scheme: dark)`,
  LIGHT_THEME: `(prefers-color-scheme: light)`,
}
