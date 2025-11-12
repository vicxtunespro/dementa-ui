# 🎨 Dementa UI

Beautiful, accessible TypeScript React components for modern web applications.

[![npm version](https://img.shields.io/npm/v/dementa-ui.svg)](https://www.npmjs.com/package/dementa-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎯 **TypeScript Support** - Full type safety and autocomplete
- 🎨 **Beautiful Design** - Styled with Tailwind CSS
- ♿ **Accessible** - Built with accessibility in mind
- 📦 **Tree-shakeable** - Import only what you need
- 🚀 **Easy to Use** - Simple and intuitive API
- ⚡ **Fast** - Optimized for performance

## 📦 Installation
```bash
npm install dementa-ui
```

or
```bash
yarn add dementa-ui
```

or
```bash
pnpm add dementa-ui
```

## 🚀 Quick Start
```tsx
import { Button } from 'dementa-ui';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Hello!')}>
      Click me!
    </Button>
  );
}
```

## 📚 Components

### Button

A versatile button component with multiple variants, sizes, and states.
```tsx
import { Button } from 'dementa-ui';
import { Heart } from 'lucide-react';

// Basic usage
<Button variant="primary">Primary Button</Button>

// With icon
<Button variant="success" icon={<Heart size={18} />}>
  Like
</Button>

// Loading state
<Button variant="primary" loading>
  Saving...
</Button>

// Icon only
<Button variant="outline" icon={<Heart size={18} />} />

// Full width
<Button variant="primary" fullWidth>
  Sign In
</Button>

// As link
<Button variant="primary" asLink href="https://example.com">
  Visit Site
</Button>
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'outline' \| 'ghost'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `shape` | `'rounded' \| 'square' \| 'circle'` | `'rounded'` | Button shape |
| `loading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `icon` | `ReactNode` | - | Icon element |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `fullWidth` | `boolean` | `false` | Full width button |
| `asLink` | `boolean` | `false` | Render as anchor tag |
| `className` | `string` | - | Additional CSS classes |

## 🎨 Styling

Dementa UI uses Tailwind CSS. Make sure you have Tailwind CSS installed in your project:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add Dementa UI to your `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/dementa-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of config
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT © Dementa Skills.

## 🔗 Links

- [GitHub Repository](https://github.com/vicxtunespro/dementa-ui)
- [NPM Package](https://www.npmjs.com/package/dementa-ui)
- [Report Issues](https://github.com/vicxtunespro/dementa-ui/issues)

## 💖 Support

If you like this project, please give it a ⭐ on GitHub!
