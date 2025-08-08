# Footer Implementation Documentation

## Overview

This document describes the implementation of a custom 4-column footer for the DSpace Angular application, designed to match the provided reference image with specific styling requirements.

## Features

- **4-Column Layout**: Logo, Contact Us, More Info, Useful Links with social media icons
- **Responsive Design**: Adapts to different screen sizes (mobile, tablet, desktop)
- **Custom Color Scheme**: Matches specified brand colors
- **Social Media Integration**: Facebook, X (Twitter), and YouTube icons
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## File Structure

```
src/
├── app/
│   └── footer/
│       ├── footer.component.html    # Footer template
│       ├── footer.component.scss    # Footer styles
│       └── footer.component.ts      # Footer component logic
└── assets/
    └── tholkudi-assets/
        └── social-media-icons/
            ├── black_facebook.svg   # Facebook icon
            ├── black_x.svg         # X (Twitter) icon
            └── black_youtube.svg   # YouTube icon
```

## Layout Structure

### Column 1: Logo
- Displays the main application logo
- Links to the home page
- Responsive sizing (60px desktop, 50px mobile)

### Column 2: Contact Us
- Organization address and contact information
- Email link with proper accessibility labels
- Styled with brand colors

### Column 3: More Info
- Navigation links to informational pages
- Includes Help, Cookie Settings, Privacy Policy, etc.
- Conditional rendering based on application configuration

### Column 4: Useful Links
- External links to related organizations
- Social media icons at the bottom
- Right-aligned on desktop, centered on mobile

## Color Scheme

| Element | Color Code | Usage |
|---------|------------|-------|
| Background | `#f1f1e9` | Footer background |
| Headings | `#b02127` | Section titles |
| Text Links | `#41566d` | All text and links |
| Underlines | `#9e6646` | Heading underlines |
| Bottom Footer | `#4e342e` | Copyright section background |

## Responsive Breakpoints

### Desktop (≥768px)
- 4-column layout using Bootstrap grid
- Left-aligned content in columns 1-3
- Right-aligned content in column 4
- Social icons aligned left in column 4

### Mobile (<768px)
- Single column layout
- Centered content and headings
- Centered logo and social icons
- Reduced padding and font sizes

## Social Media Icons

### Implementation
- SVG format for crisp rendering at any size
- 24x24px dimensions
- CSS filters for color changes on hover
- Smooth transitions for better UX

### Hover Effects
- Scale transformation (1.1x)
- Color change from dark gray to brand red
- Opacity reduction for visual feedback

## Styling Features

### Heading Underlines
- 50px width on desktop, 40px on mobile
- 3px height with 2px border radius
- Positioned absolutely below headings
- Centered on mobile, left-aligned on desktop

### Accessibility
- Proper ARIA labels for all interactive elements
- Focus indicators with brand colors
- Semantic HTML structure
- Screen reader friendly content

## Usage Instructions

### Basic Implementation
The footer is automatically included in the application layout through the root component. No additional setup is required.

### Customization
To modify the footer content:

1. **Update Links**: Edit `footer.component.html` to change navigation links
2. **Modify Styling**: Update `footer.component.scss` for visual changes
3. **Add Social Icons**: Place new SVG files in the social media icons directory

### Configuration
The footer respects application configuration settings:
- `showHelp`: Controls Help link visibility
- `showPrivacyPolicy`: Controls Privacy Policy link visibility
- `showEndUserAgreement`: Controls End User Agreement link visibility
- `coarLdnEnabled$`: Controls COAR notify support link

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 11+ (with polyfills)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- SVG icons for optimal loading and scaling
- CSS-only animations for smooth performance
- Minimal DOM manipulation
- Efficient responsive design using CSS Grid and Flexbox

## Maintenance

### Adding New Social Icons
1. Create SVG file in `src/assets/tholkudi-assets/social-media-icons/`
2. Add corresponding HTML in the social media section
3. Update CSS for consistent styling

### Updating Colors
Modify the color variables in `footer.component.scss`:
```scss
background-color: #f1f1e9;  // Footer background
color: #b02127;             // Headings
color: #41566d;             // Text and links
background-color: #9e6646;  // Underlines
```

### Responsive Adjustments
Update the media queries in the SCSS file to modify breakpoints or responsive behavior.

## Testing Checklist

- [ ] Footer displays correctly on desktop
- [ ] Footer is responsive on mobile devices
- [ ] All links are functional
- [ ] Social media icons display and have hover effects
- [ ] Colors match the specification
- [ ] Accessibility features work properly
- [ ] Footer integrates properly with the overall application layout

## Troubleshooting

### Common Issues

1. **Icons not displaying**: Check file paths in the HTML template
2. **Styling not applied**: Verify SCSS compilation and CSS loading
3. **Responsive issues**: Check Bootstrap grid classes and media queries
4. **Color inconsistencies**: Ensure color codes match the specification

### Debug Steps

1. Inspect element in browser developer tools
2. Check console for any loading errors
3. Verify CSS specificity and inheritance
4. Test on different devices and screen sizes

## Future Enhancements

- Dynamic social media links from configuration
- Multi-language support for footer content
- Additional social media platforms
- Dark mode support
- Animation improvements
