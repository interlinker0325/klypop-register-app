# KLYPOP Landing Page

Next.js landing site for KLYPOP. The original design is from [Figma](https://www.figma.com/design/pjAgjqmiixswvCftnSE5Fs/KLYPOP-Landing-Page-Design-RAILTr).

## Tech stack

- **Next.js 15** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**
- **Nodemailer** (for waitlist email notifications)

## Getting started

1. Install dependencies:

   ```bash
   pnpm install
   # or: npm install
   ```

2. Set up email configuration (for waitlist form):

   Create a `.env.local` file in the root directory:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-gmail-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

   **Important:** To use Gmail with nodemailer:
   - Enable 2-Step Verification on your Google Account
   - Generate an App Password: Google Account → Security → 2-Step Verification → App passwords
   - Use the generated App Password (not your regular password) for `EMAIL_PASSWORD`

3. Run the development server:

   ```bash
   pnpm dev
   # or: npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm start` — Start production server
- `pnpm lint` — Run ESLint

## Routes

| Path        | Page                |
| ----------- | ------------------- |
| `/`         | Landing (Hero, FAQ, CTA) |
| `/waitlist` | Waitlist signup     |
| `/privacy`  | Privacy policy      |
| `/features` | Features            |
| `/payment`  | Secure payment (Stripe) |
| `/enterprise` | Enterprise       |

## Project structure

- `src/app/` — App Router: `layout.tsx`, `page.tsx`, route folders
- `src/app/api/waitlist/` — API route for handling waitlist form submissions
- `src/app/components/` — Shared UI (Header, Footer, Hero, etc.)
- `src/styles/` — Global CSS and theme variables
- `public/` — Static assets (e.g. `logo.png`)

## Email Setup

The waitlist form sends submissions via email using nodemailer. Configure your Gmail credentials in `.env.local`:

- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASSWORD`: Gmail App Password (generate from Google Account settings)
- `RECIPIENT_EMAIL`: Where waitlist submissions are sent (defaults to EMAIL_USER if not set)
