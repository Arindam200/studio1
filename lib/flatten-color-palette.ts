interface ColorPalette {
  [color: string]: string | ColorPalette
}

/** Flatten nested Tailwind colour values into utility-friendly keys. */
export function flattenColorPalette(colors: ColorPalette = {}): Record<string, string> {
  return Object.entries(colors).reduce<Record<string, string>>(
    (palette, [color, value]) => {
      if (typeof value === "string") {
        palette[color] = value
        return palette
      }

      for (const [shade, shadeValue] of Object.entries(flattenColorPalette(value))) {
        palette[`${color}${shade === "DEFAULT" ? "" : `-${shade}`}`] = shadeValue
      }

      return palette
    },
    {},
  )
}
