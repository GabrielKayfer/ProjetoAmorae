import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  radius: {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    pill: "999px",
  },
  shadows: {
    sm: "0 8px 20px rgba(2, 89, 81, 0.08)",
    md: "0 18px 40px rgba(2, 89, 81, 0.12)",
  },
};
