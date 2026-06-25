module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Semantic tokens */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* === LUXURY PALETTE === */
        obsidian: {
          950: "#030304",
          900: "#08080d",
          800: "#0f0f18",
          700: "#161622",
          600: "#1e1e2e",
          500: "#27273a",
        },
        crimson: {
          950: "#1a0005",
          900: "#2d000b",
          800: "#4a0012",
          700: "#6b001a",
          600: "#8b0020",
          500: "#a8002a",
          400: "#cc1a3a",
          300: "#e63355",
          200: "#f06070",
          100: "#fca5a5",
        },
        magenta: {
          600: "#a0005a",
          500: "#c2006e",
          400: "#e0007f",
          300: "#f0339a",
          200: "#f766b5",
          100: "#fca5d3",
        },
        gold: {
          700: "#7a5a00",
          600: "#a07800",
          500: "#c89600",
          400: "#e8b000",
          300: "#f5c842",
          200: "#fad870",
          100: "#fef0b0",
        },
        blush: {
          600: "#7a1a2e",
          500: "#9e2a42",
          400: "#c23d5a",
          300: "#d96070",
          200: "#eda0a8",
          100: "#f8d0d5",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "ui-serif", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "ui-serif", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        /* Keep legacy fonts so old classes don't break */
        cinzel: ["Playfair Display", "Georgia", "ui-serif", "serif"],
        plus_jakarta_sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 8px 2px rgba(200, 150, 0, 0.4), 0 0 20px 4px rgba(200, 150, 0, 0.15)",
          },
          "50%": {
            boxShadow:
              "0 0 16px 4px rgba(200, 150, 0, 0.7), 0 0 40px 8px rgba(200, 150, 0, 0.3)",
          },
        },
        "crimson-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 10px 2px rgba(168, 0, 42, 0.5), 0 0 30px 6px rgba(168, 0, 42, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 20px 5px rgba(168, 0, 42, 0.8), 0 0 50px 10px rgba(168, 0, 42, 0.35)",
          },
        },
        "magenta-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 10px 2px rgba(224, 0, 127, 0.5), 0 0 30px 6px rgba(224, 0, 127, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 20px 5px rgba(224, 0, 127, 0.8), 0 0 50px 10px rgba(224, 0, 127, 0.35)",
          },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(1%, 2%)" },
          "30%": { transform: "translate(-1%, 3%)" },
          "40%": { transform: "translate(2%, -1%)" },
          "50%": { transform: "translate(-2%, 1%)" },
          "60%": { transform: "translate(1%, -2%)" },
          "70%": { transform: "translate(-1%, 1%)" },
          "80%": { transform: "translate(2%, 2%)" },
          "90%": { transform: "translate(-2%, -1%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "glow-line": {
          "0%": { opacity: "0.4", width: "20%" },
          "50%": { opacity: "1", width: "100%" },
          "100%": { opacity: "0.4", width: "20%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neon-pulse": "neon-pulse 2.5s ease-in-out infinite",
        "crimson-pulse": "crimson-pulse 2.5s ease-in-out infinite",
        "magenta-pulse": "magenta-pulse 2s ease-in-out infinite",
        "float-y": "float-y 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        grain: "grain 0.8s steps(1) infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "glow-line": "glow-line 3s ease-in-out infinite",
      },
      backgroundImage: {
        "luxury-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,0,42,0.35) 0%, rgba(3,3,4,0) 70%)",
        "gold-shimmer":
          "linear-gradient(105deg, transparent 40%, rgba(200,150,0,0.6) 50%, transparent 60%)",
        "crimson-burst":
          "radial-gradient(ellipse at center, rgba(168,0,42,0.6) 0%, transparent 70%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        "card-exclusive":
          "linear-gradient(135deg, rgba(168,0,42,0.3) 0%, rgba(200,150,0,0.15) 50%, rgba(168,0,42,0.2) 100%)",
      },
      boxShadow: {
        "glow-gold":
          "0 0 20px 4px rgba(200,150,0,0.35), 0 0 60px 10px rgba(200,150,0,0.12)",
        "glow-crimson":
          "0 0 20px 4px rgba(168,0,42,0.45), 0 0 60px 10px rgba(168,0,42,0.15)",
        "glow-magenta":
          "0 0 20px 4px rgba(224,0,127,0.4), 0 0 60px 10px rgba(224,0,127,0.12)",
        glass:
          "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        "glass-lg":
          "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        "card-hover":
          "0 24px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12)",
        "inner-glow": "inset 0 0 30px rgba(168,0,42,0.15)",
      },
      dropShadow: {
        gold: ["0 0 12px rgba(200,150,0,0.6)", "0 0 30px rgba(200,150,0,0.2)"],
        crimson: ["0 0 12px rgba(168,0,42,0.7)", "0 0 30px rgba(168,0,42,0.3)"],
        "text-glow": [
          "0 0 8px rgba(255,220,100,0.8)",
          "0 2px 4px rgba(0,0,0,0.8)",
        ],
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
