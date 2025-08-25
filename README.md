<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
<p align="center">
  <img src="public/icons/icons8-j-laces-96.png" width="96" height="96" alt="Jumuika Pro Logo" />
</p>

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

---

# Jumuika Pro

## Overview

Jumuika Pro is a modern tourism platform built with:

- Backend: Laravel 12 (API-first)
- Frontend: Next.js 15 + React 19 using Turbopack for fast dev builds

Local development URLs:

- API: http://127.0.0.1:8000
- Next.js: http://localhost:3000

## Tech Stack

- Backend: Laravel 12 (PHP 8.2+), SQLite (dev), Composer
- Frontend: Next.js 15 (App Router) + React 19
- Bundler (dev): Turbopack (`next dev --turbopack`)
- Styling: Tailwind CSS v4
- Language/Tooling: TypeScript, ESLint

## Getting Started

- Backend (Laravel)
  - Copy env: `cp .env.example .env` (Windows: `copy .env.example .env`)
  - Generate key: `php artisan key:generate`
  - Run server: `php artisan serve`

- Frontend (Next.js)
  - Go to `web-next/`
  - Install deps: `npm install`
  - Set API URL: create `web-next/.env.local` with `NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api`
  - Dev server (Turbopack): `npm run dev`

- Sample API endpoint
  - `GET /api/ping` returns `{"ok": true, "time": "..."}`

## Architecture Notes

- CORS is configured in `config/cors.php` to allow the Next.js dev origin.
- API routes are registered via `bootstrap/app.php` to load `routes/api.php`.

## How to Run (Quick Start)

- Terminal 1 (API):
  - `php artisan serve` → serves Laravel at http://127.0.0.1:8000

- Terminal 2 (Web):
  - `cd web-next` (if running manually)
  - `npm install` (first time only)
  - `npm run dev` → serves Next.js at http://localhost:3000 (Turbopack)

Visit http://localhost:3000 to see the frontend; it will call `http://127.0.0.1:8000/api/ping`.

## Environment

- Laravel: `.env` controls the API server; defaults use SQLite and `APP_URL=http://localhost`.
- Next.js: put API base in `web-next/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
```

## Project Structure

- `routes/api.php` → API endpoints (e.g., `/api/ping`)
- `bootstrap/app.php` → registers `routes/web.php` and `routes/api.php`
- `config/cors.php` → allows Next.js dev origin (3000)
- `web-next/` → Next.js frontend (Turbopack)
- `public/icons/` → project icons and logo used in this README

## Collaborators

List your team here. Example format:

- Name One — @github-handle
- Name Two — @github-handle
- Name Three — @github-handle

To add yourself, edit this section in `README.md` and open a PR.

---

# Jumuika Pro: The Value We Deliver (Beyond Price)

Jumuika Pro isn't just a piece of software; it's a digital transformation partner that reshapes how tour companies and hotels do business. We're not just saving money; we're saving time, reducing stress, eliminating risk, and opening up new opportunities.

## Our Unique Selling Points (Why Choose Us?)

What makes Jumuika Pro stand out from anything else out there?

- **Built for Tanzania, Built for Africa**
  - We're not a generic global platform trying to fit in. Jumuika Pro is designed specifically for the unique way tourism works here – from handling complex safari pricing (STO rates) to understanding local payment methods like Mobile Money. We speak the language of the Tanzanian tourism business.

- **Unmatched Trust & Verification**
  - This is huge. Right now, many tour companies aren't officially registered, and it's hard to know who to trust. Jumuika Pro changes that. We rigorously check every tour operator (making sure they have their TALA license) and every hotel (checking their operating licenses). This means everyone on our platform is a legitimate, verified business. This builds a network of trust that doesn't exist anywhere else.

- **Seamless, Automated Payments (The Magic Split)**
  - Forget chasing payments or worrying about exchange rates. Our system automatically handles payments from tour operators, instantly taking our small commission and sending the rest directly to the hotel owner. This cuts out all the manual work, reduces errors, and ensures everyone gets paid quickly and securely.

- **Real-Time Efficiency & Automation**
  - We take away the headaches of manual work. No more endless emails, phone calls, or spreadsheets to check room availability or update prices. Our platform does it all in real-time, saving countless hours for both sides.

## Why It's Worth It for Tour Companies

For tour operators, Jumuika Pro is like getting a superpower for their business.

- **Instant Access to a Trusted Network**
  - Imagine knowing every hotel you see on Jumuika Pro is legitimate and verified. No more worrying about scams or unreliable partners. You get a curated list of quality accommodations you can trust.

- **Book Faster, Sell More**
  - You can instantly see real-time STO rates and room availability. This means you can quote clients faster, confirm bookings on the spot, and close more deals. No more waiting for emails or phone calls, which means happier clients and a better reputation for your company.

- **Payments Made Easy**
  - Sending money to hotels, especially across borders, can be a nightmare of fees and confusing exchange rates. Jumuika Pro simplifies all of that. Our secure system handles the payments, making sure the hotel gets their money quickly and you have clear records, reducing financial stress and fraud worries.

- **Focus on What You Do Best**
  - Your team spends less time on tedious tasks like managing spreadsheets, sending emails, and reconciling payments. This frees them up to focus on what truly matters: creating amazing safari experiences and selling more tours.

- **Boost Your Own Reputation**
  - By using a platform known for its verified partners and smooth operations, you automatically enhance your own company's image as professional and reliable.

## Why It's Worth It for Accommodation Owners

For hotels and lodges, Jumuika Pro is a direct line to more business and smoother operations.

- **Reach More Tour Operators, Get More Bookings**
  - You gain access to a wide network of verified tour operators, both local and international, who are actively looking for rooms. This is a powerful new sales channel that brings you more bookings without extra marketing effort on your part.

- **Effortless Rate & Availability Management**
  - No more juggling different price lists or manually updating availability across multiple channels. You manage all your STO rates and room availability in one easy place, ensuring tour operators always have the correct, up-to-date information. This means fewer booking errors and happier partners.

- **Guaranteed, Fast Payments**
  - Our system ensures you get paid your share of the booking quickly and reliably. The money is automatically split, so you don't have to worry about chasing payments or dealing with complex reconciliation. This significantly improves your cash flow.

- **Reduced Admin Work**
  - Automate confirmations, invoicing, and payment tracking. This frees up your staff from tedious paperwork, allowing them to focus on providing excellent service to your guests.

- **Targeted Marketing Opportunities**
  - Our in-app promotion tools let you highlight your property directly to tour operators who are actively searching for accommodations. This is like having a dedicated sales team working for you within the platform.

- **Enhanced Professionalism**
  - Being part of Jumuika Pro's verified network boosts your property's credibility and attracts more reliable tour operator partners, strengthening your brand in the industry.

---

In short, Jumuika Pro is the missing link in Tanzania's tourism supply chain. We're not just a tool; we're the trusted, efficient, and growth-enabling ecosystem that empowers every business to thrive in this incredible market. That's our unique selling point, and that's why it's worth it for everyone.
>>>>>>> 20d08c1d4487943c7f8d8d607c68cf079bbbc6bd
