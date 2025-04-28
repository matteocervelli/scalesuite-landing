# ScaleSuite Landing Page

Landing page per ScaleSuite, una piattaforma AI-driven per il supporto decisionale nelle PMI italiane.

## Tecnologie

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- i18n (IT/EN)

## Sviluppo Locale

```bash
# Installare le dipendenze
npm install

# Avviare il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avviare in modalità produzione
npm run start
```

## Struttura del Progetto

```
src/
├── app/          # App Router di Next.js
├── components/   # Componenti React riutilizzabili
├── styles/       # Stili CSS/Tailwind
├── locales/      # File di traduzione (i18n)
└── utils/        # Utility e funzioni di supporto
```

## Deployment

Il progetto è configurato per il deployment automatico su Vercel attraverso GitHub Actions.

## Testing

```bash
# Eseguire i test
npm test

# Test con coverage
npm run test:coverage
```

## Contribuire

1. Fork del repository
2. Creare un branch per la feature (`git checkout -b feature/nome-feature`)
3. Commit delle modifiche (`git commit -am 'Aggiunta nuova feature'`)
4. Push al branch (`git push origin feature/nome-feature`)
5. Creare una Pull Request

## Licenza

Proprietario - AdLimen Srl 