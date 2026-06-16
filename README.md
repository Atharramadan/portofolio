# Atharrama's Portfolio

Modern, professional, and responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- 🎨 Modern minimalist design with coffee brown, cream, and dark elegant colors
- 🌙 Dark mode and light mode support
- 📱 Fully responsive design (desktop, tablet, mobile)
- ✨ Smooth animations and transitions
- 🔄 Dynamic project management system
- 🎯 SEO friendly
- ⚡ Fast loading performance

## Folder Structure

```
portofolio/
├── index.html
├── css/
│   ├── style.css
│   ├── variables.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── theme.js
│   ├── projects.js
│   └── animations.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── data/
│   ├── projects.json
│   └── certifications.json
└── README.md
```

## How to Add Projects

1. Open `data/projects.json`
2. Add your project following this structure:

```json
{
  "id": "project-id",
  "title": "Project Title",
  "category": "Category",
  "description": "Project description",
  "technologies": ["Tech1", "Tech2"],
  "features": ["Feature1", "Feature2"],
  "image": "assets/images/project-image.jpg",
  "demoUrl": "https://demo-url.com",
  "githubUrl": "https://github.com/username/repo"
}
```

3. The project will automatically appear in the portfolio.

## How to Add Certifications

1. Open `data/certifications.json`
2. Add your certification:

```json
{
  "id": "cert-id",
  "title": "Certification Title",
  "issuer": "Issuer Name",
  "date": "2025-01-15",
  "image": "assets/images/cert-image.jpg",
  "credentialUrl": "https://credential-url.com"
}
```

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this as your portfolio template.
