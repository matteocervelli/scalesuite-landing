# ScaleSuite Landing Page

[![Deploy Status](https://github.com/adlimen/scale-suite-landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/adlimen/scale-suite-landing/actions/workflows/deploy.yml)

Landing page for ScaleSuite, an AI-driven platform for decision support in Italian SMEs.

## Technologies

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- i18n (IT/EN)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start in production mode
npm run start
```

## Project Structure

```
src/
├── app/          # Next.js App Router
├── components/   # Reusable React components
├── styles/       # CSS/Tailwind styles
├── locales/      # Translation files (i18n)
└── utils/        # Utilities and support functions
```

## Deployment

The project is configured for automatic deployment to Vercel through GitHub Actions.

## Testing

```bash
# Run tests
npm test

# Test with coverage
npm run test:coverage
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -am 'Added new feature'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Create a Pull Request

## License

Proprietary - AdLimen Srl 