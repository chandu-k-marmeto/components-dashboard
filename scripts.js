function handleBlur(event, input) {
  if (!input.value.trim()) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
}

class PageNavigator extends HTMLElement {
  constructor() {
    super();
    this.pages = document.querySelectorAll('.page');
    this.navLinks = document.querySelectorAll('.sidebar a');
    this.sidebar = document.querySelector(".sidebar");
  }

  connectedCallback() {
    this.initializeNavigation();
    this.setDefaultPage();
  }

  initializeNavigation() {
    this.navLinks.forEach((link) => {
      link.addEventListener('click', this.handleLinkClick.bind(this));
    });
  }

  handleLinkClick(event) {
    event.preventDefault();
    const pageId = event.target.getAttribute('href').substring(1);
    this.navigateTo(pageId);
  }

  setDefaultPage() {
    const defaultPage = this.navLinks[0]?.getAttribute('href').substring(1);
    if (defaultPage) {
      this.navigateTo(defaultPage);
    }
  }

  navigateTo(pageId) {
    this.clearActiveStates();
    this.activatePage(pageId);
    this.sidebar.classList.remove("open");
  }

  clearActiveStates() {
    this.pages.forEach((page) => page.classList.remove('active'));
    this.navLinks.forEach((link) => link.classList.remove('active'));
  }

  activatePage(pageId) {
    const targetPage = document.getElementById(pageId);
    const targetLink = document.querySelector(`.sidebar a[href="#${pageId}"]`);
    
    if (targetPage) targetPage.classList.add('active');
    if (targetLink) targetLink.classList.add('active');
  }
}

customElements.define('page-navigator', PageNavigator);


class HamburgerMenuToggle extends HTMLElement {
  constructor() {
    super();
    this.button = null;
    this.sidebar = null;
  }

  connectedCallback() {
    this.initializeElements();
    this.setupToggleEvent();
  }

  initializeElements() {
    this.button = this.querySelector('.hamburger-menu');
    this.sidebar = document.querySelector('.sidebar');

    if (!this.button) {
      console.error('No element with class "hamburger-menu" found inside the custom element.');
    }
  }

  setupToggleEvent() {
    if (!this.button || !this.sidebar) return;

    this.button.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    const isOpen = this.button.classList.toggle('cross');
    this.updateButtonState(isOpen);
    this.sidebar.classList.toggle('open');
  }

  updateButtonState(isOpen) {
    this.button.textContent = isOpen ? '✕' : '☰';
    this.button.setAttribute('aria-label', isOpen ? 'Close Menu' : 'Open Menu');
  }
}

customElements.define('hamburger-menu-toggle', HamburgerMenuToggle);


class ButtonTabs extends HTMLElement {
  constructor() {
    super();
    this.navContainer = null;
    this.displayContainer = null;
  }

  connectedCallback() {
    this.initializeElements();
    this.setupEventListeners();
  }

  initializeElements() {
    this.navContainer = this.querySelector('.navigation');
    this.displayContainer = this.querySelector('.active-element');

    if (!this.navContainer || !this.displayContainer) {
      console.error('Navigation or display container not found in ButtonTabs element.');
    }
  }

  setupEventListeners() {
    if (!this.navContainer || !this.displayContainer) return;

    const navButtons = this.getNavButtons();
    navButtons.forEach(navButton => {
      navButton.addEventListener('click', () => this.handleNavClick(navButton, navButtons));
    });
  }

  getNavButtons() {
    return this.navContainer.querySelectorAll('.nav-button');
  }

  handleNavClick(selectedButton, navButtons) {
    this.updateNavButtonsState(selectedButton, navButtons);
    this.updateDisplayButtonsState(selectedButton.dataset.target);
  }

  updateNavButtonsState(selectedButton, navButtons) {
    navButtons.forEach(button => button.classList.remove('active'));
    selectedButton.classList.add('active');
  }

  updateDisplayButtonsState(target) {
    const displayButtons = this.displayContainer.querySelectorAll('.tab');
    displayButtons.forEach(button => button.classList.remove('active'));

    const targetButton = this.displayContainer.querySelector(`.${target}`);
    if (targetButton) {
      targetButton.classList.add('active');
    } else {
      console.error(`No display button found for target: ${target}`);
    }
  }
}

customElements.define('button-tabs', ButtonTabs);


class PopupComponent extends HTMLElement {
  constructor() {
    super();
    this.closeButton = null;
    this.closePopup = this.closePopup.bind(this);
  }

  connectedCallback() {
    this.initializeElements();
    this.setupEventListeners();
  }

  disconnectedCallback() {
    this.cleanupEventListeners();
  }

  initializeElements() {
    this.closeButton = this.querySelector('.close');
  }

  setupEventListeners() {
    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.closePopup);
    } else {
      console.warn('No close button found in PopupComponent.');
    }
  }

  cleanupEventListeners() {
    if (this.closeButton) {
      this.closeButton.removeEventListener('click', this.closePopup);
    }
  }

  closePopup() {
    this.classList.remove('active');
  }
}

customElements.define('popup-component', PopupComponent);



document.addEventListener("DOMContentLoaded", () => {
  const inputElements = document.querySelectorAll("input");
  inputElements.forEach(input => {
    input.addEventListener('blur', (event) => handleBlur(event, input));
    input.addEventListener('input', (event) => handleBlur(event, input));
    input.addEventListener('change', (event) => handleBlur(event, input));
  });
})