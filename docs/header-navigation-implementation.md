# DSpace Theme Header and Navigation Implementation Documentation

## Overview

This document describes the implementation of the custom header and navigation system in the **DSpace theme** for the DSpace Angular application, recreated to match the exact UI from the old custom theme source with blue navigation buttons (#2b4878), teal user controls (#229daf), and responsive design.

## Features

- **Custom Navigation Buttons**: Blue rounded buttons (#2b4878) with hover effects
- **Teal User Controls Section**: User controls with teal background (#229daf)
- **About Us Button**: Simple navigation link to about page
- **Tamil Nadu Tribes Button**: Direct link to community list
- **Login/Language Controls**: White login button with transparent language switcher
- **Responsive Design**: Mobile-friendly with collapsible navigation
- **Dynamic Logo**: Language-based logo switching (English/Tamil)

## File Structure

```
src/themes/dspace/app/header/
├── header.component.html       # Header template with navigation buttons
├── header.component.scss       # Custom styling for blue buttons and layout
└── header.component.ts         # Component logic with language/auth handling

src/themes/dspace/styles/
└── _theme_css_variable_overrides.scss  # CSS variables for colors and spacing
```

## Layout Structure

### Desktop Layout
```
[Logo] ---------------------------------------- [About Us] [Tamil Nadu Tribes] [👤 Login | English/தமிழ்]
```

### Mobile Layout
```
[Logo] ---------------------------------------- [தமிழ்] [☰]
                                               [Mobile Menu]
```

## Navigation Components

### 1. About Us Button
- **Type**: Simple navigation link
- **Target**: `/about-us`
- **Style**: Blue rounded button (#2b4878) with white text
- **Hover**: Darker blue (#1e3456)

### 2. Tamil Nadu Tribes Button
- **Type**: Simple navigation link
- **Target**: `/community-list`
- **Style**: Blue rounded button (#2b4878) matching About Us button

### 3. User Controls Section
- **Background**: Teal color (#229daf) with rounded corners
- **Login Component**:
  - White background button with dark text
  - Standard DSpace authentication functionality
- **Language Switcher**:
  - Transparent background blending with teal
  - White text for language options
  - Supports English/Tamil switching

## Styling Implementation

### Color Scheme
```scss
header {
  background-color: #fff;              /* White header background */
  border-bottom: 1px solid #e0e0e0;    /* Light gray border */
}
```

### Navigation Button Styling
```scss
.nav-button {
  background-color: #2b4878;           /* Blue background */
  color: white !important;
  border-radius: 20px;                 /* Rounded corners */
  padding: 8px 16px;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    background-color: #1e3456;         /* Darker blue on hover */
  }
}
```

### User Controls Section
```scss
.user-controls-wrapper {
  background-color: #229daf;           /* Teal background */
  border-radius: 20px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
```

## Component Implementation

### TypeScript Features

#### Mobile Menu Functionality
```typescript
// Mobile menu state
isMobileMenuOpen = false;

toggleMobileMenu(): void {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}

closeMobileMenu(): void {
  this.isMobileMenuOpen = false;
}
```

#### Component Integration
```typescript
export class HeaderComponent extends BaseComponent implements OnInit {
  public isNavBarCollapsed$: Observable<boolean>;
  isMobileMenuOpen = false;

  ngOnInit() {
    super.ngOnInit();
    this.isNavBarCollapsed$ = this.menuService.isMenuCollapsed(this.menuID);
  }
}
```

### Template Features

#### Conditional Rendering
- Navigation buttons only show on desktop (`d-none d-md-flex`)
- Mobile menu shows on mobile devices (`d-md-none`)
- Mobile language switcher positioned left of hamburger menu
- Collapsible mobile navigation with smooth transitions

#### Mobile Navigation
- Hamburger menu with custom blue styling
- Collapsible navigation panel with slide animation
- Mobile-specific styling for navigation links
- Proper touch-friendly sizing and spacing

## Responsive Behavior

### Desktop (≥768px)
- Full navigation buttons visible (About Us, Tamil Nadu Tribes)
- Teal user controls section with login and language switcher
- Horizontal layout with proper spacing
- Logo on left, navigation and controls on right

### Mobile (<768px)
- Navigation buttons hidden, replaced with hamburger menu
- Language switcher visible next to hamburger button
- Collapsible mobile navigation panel
- Touch-friendly mobile interface

## Integration Points

### Search Integration
- Uses existing `<ds-search-navbar>` component
- Positioned before navigation buttons
- Maintains existing search functionality

### Authentication Integration
- Integrates with `AuthService` for login state
- Uses `<ds-log-in>` component in dropdown
- Uses `<ds-user-menu>` for authenticated users

### Language Integration
- Integrates with `TranslateService`
- Dynamic language switching
- Logo changes based on selected language

## CSS Variables Used

```scss
:root {
  --ds-header-bg: #5f3721;
  --ds-navbar-link-color: #ffffff;
  --ds-navbar-link-hover: #ffbf00;
  --ds-header-icon-color: #ffffff;
  --ds-header-icon-color-hover: #ffbf00;
  --ds-body-bg: #fbf9f5;
  --ds-text-primary-color: #000000;
  --ds-text-secondary-color: #4d4d4d;
  --ds-header-logo-height: 60px;
  --ds-header-height: 80px;
}
```

## Accessibility Features

- Proper ARIA labels on all interactive elements
- Role attributes for menu items and dropdowns
- Keyboard navigation support
- Focus indicators
- Screen reader friendly structure

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (full support)
- **Internet Explorer 11+**: Supported with polyfills
- **Mobile Browsers**: iOS Safari, Chrome Mobile (full support)

## Performance Considerations

- CSS-only animations for smooth interactions
- Efficient dropdown rendering
- Minimal DOM manipulation
- Optimized responsive breakpoints

## Maintenance

### Adding New Navigation Items
1. Add button wrapper in template
2. Style with `.nav-button` class
3. Add any dropdown content if needed
4. Update responsive behavior if necessary

### Modifying Colors
Update CSS variables in `_theme_css_variable_overrides.scss`:
```scss
--ds-header-bg: #new-color;
--ds-navbar-link-color: #new-color;
```

### Updating Dropdown Content
Modify the dropdown menu items in the HTML template:
```html
<div ngbDropdownMenu role="menu" class="dropdown-menu">
  <a class="dropdown-item" href="/new-link">New Item</a>
</div>
```

## Testing Checklist

- [x] Header displays correctly on desktop
- [x] Navigation buttons have proper styling (#2b4878)
- [x] About Us button links to correct page
- [x] Tamil Nadu Tribes button links to community list
- [x] User controls section has teal background (#229daf)
- [x] Login button has white background with dark text
- [x] Language switcher has transparent background with white text
- [x] Logo changes based on selected language
- [x] Mobile view shows hamburger menu
- [x] Mobile language switcher appears left of hamburger
- [x] Mobile navigation panel slides in/out correctly
- [x] All hover effects work correctly
- [x] Responsive design works on all screen sizes
- [x] Touch-friendly mobile interface

## Troubleshooting

### Common Issues

1. **Navigation buttons not styled correctly**
   - Check if CSS variables are properly set
   - Verify SCSS compilation
   - Check for CSS specificity conflicts

2. **Dropdowns not working**
   - Ensure NgbDropdownModule is imported
   - Check for JavaScript errors in console
   - Verify Bootstrap CSS is loaded

3. **Mobile menu not appearing**
   - Check responsive breakpoints
   - Verify mobile detection logic
   - Test on actual mobile devices

4. **Language switching not working**
   - Verify TranslateService integration
   - Check language configuration
   - Ensure language files are loaded

## Future Enhancements

- **Animation Improvements**: Add smooth transitions for dropdown menus
- **Additional Languages**: Support for more languages beyond English and Tamil
- **Customizable Navigation**: Admin interface for managing navigation items
- **Advanced Search**: Enhanced search functionality in header
- **User Preferences**: Remember user's preferred language and settings
