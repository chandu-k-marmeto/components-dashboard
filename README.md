# Dashboard Component README

## Overview
This document provides an overview and usage instructions for the dashboard structure, including its components and interactive elements. The dashboard consists of four main sections:

1. **Button Components**
2. **Form Components**
3. **Popup Components**
4. **Loader Components**

Each section is organized into tabs and contains customizable elements, enabling developers to efficiently modify and extend the UI.

---

## Project Structure

### HTML Layout
The HTML structure is divided into the following key sections:

1. **Hamburger Menu**: Toggles the visibility of the sidebar.
2. **Sidebar (Page Navigator)**: Contains navigation links to different component sections.
3. **Main Content Area**: Displays interactive elements for customization.

---

### Key Components

#### 1. Hamburger Menu
The `hamburger-menu-toggle` component includes a button for toggling the sidebar visibility. This component can be extended for additional functionality such as animations or accessibility improvements.

```html
<hamburger-menu-toggle>
  <button class="hamburger-menu" aria-label="Open Menu">☰</button>
</hamburger-menu-toggle>
```

#### 2. Sidebar Navigation
The `page-navigator` component provides links to various sections of the dashboard. The active link is highlighted for clarity.

```html
<page-navigator>
  <nav>
    <ul>
      <li><a href="#button-customization" class="active">Button Components</a></li>
      <li><a href="#form-customization">Form Components</a></li>
      <li><a href="#popup-customization">Popup Components</a></li>
      <li><a href="#loader-customization">Loader Components</a></li>
    </ul>
  </nav>
</page-navigator>
```

#### 3. Button Components
Allows users to switch between different button styles (e.g., Primary, Secondary, Disabled, Hover).

**Usage:**
- Buttons are displayed using tabs.
- Each button style is a separate tab managed by `button-tabs`.

```html
<section id="button-customization" class="page active">
  <button-tabs>
    <div class="navigation">
      <button class="nav-button active" data-target="button-active">Primary</button>
      <button class="nav-button" data-target="button-secondary">Secondary</button>
    </div>
    <div class="active-element presentation-element">
      <button class="button button-active active tab">Primary Button</button>
      <button class="button button-secondary tab">Secondary Button</button>
    </div>
  </button-tabs>
</section>
```

#### 4. Form Components
Interactive forms include radio buttons, dropdowns, text inputs, and color pickers.

**Usage:**
- Each form field type is displayed in its respective tab.
- Developers can add or modify form field styles as required.

```html
<section id="form-customization" class="page">
  <button-tabs>
    <div class="navigation">
      <button class="nav-button active" data-target="form-radio">Radio</button>
      <button class="nav-button" data-target="form-select">Select</button>
    </div>
    <div class="active-element">
      <div class="form-field form-radio active tab">
        <label for="radio-group">Choose an option:</label>
        <input type="radio" id="option1" name="radio-group" value="Option 1"> Option 1
      </div>
    </div>
  </button-tabs>
</section>
```

#### 5. Popup Components
Prebuilt popup templates include modal, bottom, and fullscreen popups.

**Usage:**
- Activate the desired popup using the navigation tabs.
- Customize the content, styling, or animations of each popup type.

```html
<section id="popup-customization" class="page">
  <button-tabs>
    <div class="navigation">
      <button class="nav-button active" data-target="modal">Modal Popup</button>
    </div>
    <div class="active-element">
      <popup-component class="modal popup active tab">
        <div class="modal-content">
          <span class="close">✕</span>
          <h2>Modal Title</h2>
          <p>This is a centered popup.</p>
        </div>
      </popup-component>
    </div>
  </button-tabs>
</section>
```

#### 6. Loader Components
A set of animated loaders, including circle, bar, dots, and shimmer effects.

**Usage:**
- Each loader type is displayed in a separate tab.
- Developers can customize animations or integrate them with backend processes.

```html
<section id="loader-customization" class="page">
  <button-tabs>
    <div class="navigation">
      <button class="nav-button active" data-target="loader-circle">Circle Loader</button>
    </div>
    <div class="active-element">
      <div class="loader loader-circle active tab">
        <div class="circle"></div>
      </div>
    </div>
  </button-tabs>
</section>
```

---

## Design Principles

1. **Modularity**: Each section is independent, allowing for easy updates or replacements.
2. **Reusability**: Components such as tabs and loaders can be reused in other projects.
3. **Accessibility**: Components are designed with accessibility in mind (e.g., ARIA labels for buttons).
4. **Ease of Customization**: Developers can easily add new styles, content, or functionality.
5. **Separation of Concerns**: HTML structure is separated from styling and scripting for clarity.

---

## How to Extend

1. **Add a New Section**:
   - Duplicate an existing section structure.
   - Update the `id`, `data-target`, and corresponding content.

2. **Modify Styles**:
   - Add or edit CSS classes for the desired components.

3. **Integrate with JavaScript**:
   - Use event listeners for navigation and interactivity.

---

## File Structure
Ensure the following file structure is maintained for clarity:

```
project/
├── index.html   # Main HTML file
├── styles.css   # CSS for layout and components
├──  script.js       # JavaScript for interactivity
```

---

## Dependencies
- Ensure the project includes the required CSS and JavaScript files.

---

## Notes for Developers
- Use `data-attributes` to manage tab and content interactions.
- Follow the existing HTML structure to ensure consistency.
- Test components in different browsers and devices to verify responsiveness.
- Ensure ARIA roles and labels are updated when extending components.

# components-dashboard
