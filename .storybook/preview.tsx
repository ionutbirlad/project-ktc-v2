import type { Preview } from "@storybook/nextjs";
import { Inter, Noto_Serif, Roboto_Mono } from "next/font/google";

import "@/styles/index.scss";

// Import and use Next/fonts here, otherwise fonts won't work in Storybook since
// the root layout is bypassed
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <html className={`${inter.variable} ${notoSerif.variable} ${robotoMono.variable}`}>
        <Story />
      </html>
    ),
  ],
};

export default preview;
