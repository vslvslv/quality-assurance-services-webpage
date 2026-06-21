# QA Services Portfolio

A professional portfolio website to showcase quality assurance services.

## Tech Stack

- **Next.js** - React framework with static export
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Free static hosting

## Getting Started

### Prerequisites

- Node.js 22+ installed

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000/quality-assurance-services-webpage](http://localhost:3000/quality-assurance-services-webpage) in your browser

### Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. The workflow:

1. Installs dependencies
2. Builds the static site
3. Deploys to the `gh-pages` branch
4. Site is live at `https://yourusername.github.io/quality-assurance-services-webpage`

### First-time GitHub Pages Setup

1. Go to your repo Settings → Pages
2. Set "Build and deployment" source to "Deploy from a branch"
3. Select `gh-pages` branch and root folder
4. Save

## Project Structure

```
app/
  ├── layout.js          # Root layout
  ├── page.js            # Home page
  └── globals.css        # Global styles
components/
  ├── Navigation.js      # Header/nav
  ├── Hero.js            # Hero section
  ├── Services.js        # Services showcase
  ├── Contact.js         # CTA section
  └── Footer.js          # Footer
```

## Customization

- Edit service descriptions in `components/Services.js`
- Update colors/theme in `tailwind.config.js`
- Add your social links in `components/Footer.js`
- Customize text in individual components

## Next Steps

- [ ] Add your personal info and branding
- [ ] Customize service descriptions
- [ ] Add case studies/portfolio section
- [ ] Set up contact form integration
- [ ] Add testimonials section
- [ ] Optimize for SEO

## License

MIT
