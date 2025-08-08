# Tholkudi Logo Implementation Documentation

## Overview

This document describes the implementation of dynamic language-based logo switching for the DSpace Angular application. The system supports both English and Tamil versions of the Tholkudi logo, automatically switching based on the user's selected language.

## Features

- **Dynamic Language Switching**: Automatically changes logo based on current language
- **Multi-language Support**: English and Tamil logo versions
- **Responsive Design**: Optimized sizing for different screen sizes
- **Consistent Integration**: Works across header and footer components
- **Service-based Architecture**: Centralized logo management through LogoService

## File Structure

```
src/
├── app/
│   ├── header/
│   │   ├── header.component.html       # Updated with dynamic logo
│   │   ├── header.component.scss       # Logo styling
│   │   └── header.component.ts         # Logo service integration
│   ├── footer/
│   │   ├── footer.component.html       # Updated with dynamic logo
│   │   ├── footer.component.scss       # Logo styling
│   │   └── footer.component.ts         # Logo service integration
│   └── shared/
│       └── logo/
│           └── logo.service.ts          # Logo management service
├── assets/
│   └── tholkudi-assets/
│       └── logos/
│           ├── tholkudi-logo-english.png  # English version
│           └── tholkudi-logo-tamil.png    # Tamil version
└── themes/
    └── dspace/
        └── app/
            └── header/
                ├── header.component.html   # Themed header with dynamic logo
                └── header.component.scss   # Themed header styling
```

## Logo Service Implementation

### LogoService (`src/app/shared/logo/logo.service.ts`)

The LogoService provides centralized logo management with the following features:

#### Key Methods

- `getCurrentLogo()`: Returns Observable with current logo based on language
- `getCurrentLogoSync()`: Returns current logo synchronously
- `getLogoForLanguage(langCode)`: Gets logo for specific language
- `hasLogoForLanguage(langCode)`: Checks if logo exists for language
- `getAvailableLogoLanguages()`: Returns array of supported languages

#### Configuration

```typescript
private readonly logoConfig = {
  'en': {
    src: 'assets/tholkudi-assets/logos/tholkudi-logo-english.png',
    alt: 'Tholkudi Logo English'
  },
  'ta': {
    src: 'assets/tholkudi-assets/logos/tholkudi-logo-tamil.png',
    alt: 'Tholkudi Logo Tamil'
  }
};
```

## Component Integration

### Header Component

#### HTML Template
```html
<a class="navbar-brand my-2" routerLink="/home">
  <img [src]="currentLogo.src" [alt]="currentLogo.alt" class="header-logo"/>
</a>
```

#### TypeScript Implementation
```typescript
export class HeaderComponent implements OnInit {
  public currentLogo: {src: string, alt: string};

  constructor(
    protected logoService: LogoService,
    // ... other dependencies
  ) {}

  ngOnInit(): void {
    // Initialize current logo
    this.currentLogo = this.logoService.getCurrentLogoSync();
    
    // Subscribe to language changes
    this.logoService.getCurrentLogo().subscribe(logo => {
      this.currentLogo = logo;
    });
  }
}
```

### Footer Component

Similar implementation to header component with the same pattern:
- Dynamic logo binding in template
- LogoService injection and subscription
- Automatic updates on language change

## Styling Implementation

### Logo Sizing

#### Desktop (≥768px)
- **Header**: max-width: 200px, height: var(--ds-header-logo-height)
- **Footer**: max-width: 180px, max-height: 60px

#### Mobile (<768px)
- **Header**: max-width: 150px, max-height: 40px
- **Footer**: max-width: 150px, max-height: 50px

### CSS Classes

#### Header Styling
```scss
.navbar-brand img,
.header-logo {
  max-height: var(--ds-header-logo-height);
  max-width: 200px;
  width: auto;
  height: auto;
}

@media (max-width: 767.98px) {
  .navbar-brand img,
  .header-logo {
    max-width: 150px;
    max-height: 40px;
  }
}
```

#### Footer Styling
```scss
.footer-logo {
  max-height: 60px;
  max-width: 180px;
  width: auto;
  height: auto;
}

@media (max-width: 767.98px) {
  .footer-logo {
    max-height: 50px;
    max-width: 150px;
    display: block;
    margin: 0 auto 1rem auto;
  }
}
```

## Language Support

### Supported Languages

| Language Code | Language Name | Logo File |
|---------------|---------------|-----------|
| `en` | English | `tholkudi-logo-english.png` |
| `ta` | Tamil | `tholkudi-logo-tamil.png` |

### Adding New Languages

1. **Add logo file** to `src/assets/tholkudi-assets/logos/`
2. **Update LogoService configuration**:
   ```typescript
   private readonly logoConfig = {
     'en': { src: '...', alt: '...' },
     'ta': { src: '...', alt: '...' },
     'new-lang': { 
       src: 'assets/tholkudi-assets/logos/tholkudi-logo-newlang.png',
       alt: 'Tholkudi Logo New Language'
     }
   };
   ```

## Integration with Language Switching

The logo system integrates seamlessly with the existing language switching functionality:

1. **User selects language** via language switcher
2. **TranslateService** updates current language
3. **LogoService** detects language change via `onLangChange` observable
4. **Components** receive updated logo configuration
5. **UI updates** automatically with new logo

## Performance Considerations

- **Lazy Loading**: Logos are loaded on-demand
- **Caching**: Browser caches logo images after first load
- **Optimized Images**: PNG format for quality and compatibility
- **Responsive Images**: Different sizes for different screen sizes

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (full support)
- **Internet Explorer 11+**: Supported with polyfills
- **Mobile Browsers**: iOS Safari, Chrome Mobile (full support)

## Troubleshooting

### Common Issues

1. **Logo not displaying**
   - Check file paths in LogoService configuration
   - Verify logo files exist in assets directory
   - Check browser console for 404 errors

2. **Logo not switching languages**
   - Verify language codes match in LogoService config
   - Check if language switching is working properly
   - Ensure components are subscribing to logo changes

3. **Logo sizing issues**
   - Check CSS max-width and max-height values
   - Verify responsive breakpoints
   - Test on different screen sizes

### Debug Steps

1. **Check LogoService**: Verify service is properly injected
2. **Console Logging**: Add logs to track language changes
3. **Network Tab**: Check if logo files are loading correctly
4. **Element Inspector**: Verify src attributes are updating

## Maintenance

### Updating Logos

1. **Replace logo files** in `src/assets/tholkudi-assets/logos/`
2. **Clear browser cache** for testing
3. **Test on different devices** and screen sizes

### Modifying Logo Sizes

Update CSS variables and media queries in:
- `src/app/header/header.component.scss`
- `src/app/footer/footer.component.scss`
- `src/themes/dspace/app/header/header.component.scss`

## Future Enhancements

- **SVG Support**: Convert to SVG for better scalability
- **Dark Mode**: Add dark mode logo variants
- **Animation**: Add smooth transitions during logo changes
- **Preloading**: Preload logos for faster switching
- **CDN Integration**: Serve logos from CDN for better performance

## Testing Checklist

- [ ] Logo displays correctly in header (desktop/mobile)
- [ ] Logo displays correctly in footer (desktop/mobile)
- [ ] Logo switches when language changes
- [ ] Both English and Tamil logos work
- [ ] Responsive sizing works on all screen sizes
- [ ] Logo links to home page correctly
- [ ] Alt text is appropriate for accessibility
- [ ] No console errors or 404s
- [ ] Performance is acceptable on slow connections
