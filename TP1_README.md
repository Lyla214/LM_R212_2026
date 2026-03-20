[style.css](https://github.com/user-attachments/files/26150614/style.css)
:root {
  /* Couleurs */
  --color-primary: #2563eb;
  --color-text: #1f2937;
  --color-text-light: #6b7280;
  --color-bg: #ffffff;
  --color-bg-alt: #f9fafb;

  /* Espacements */
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;

  /* Typographie */
  --font-base: system-ui, -apple-system, sans-serif;
  --line-height: 2;
}

body {
  font-family: var(--font-base);
  line-height: var(--line-height);
  color: var(--color-text);
  margin: 2;
}

h1, h2, h3 {
  line-height: 1.2;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ul {
    display: flex;
    gap: 20%;
}

.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: min-content;
    text-align: center;
}

.projets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
}

.cta {
    height: 20%;
    border-radius: 20px;
    --color-bg-alt:#b2bcc7 ; 
    box-shadow:#2563eb;
}


@media (max-width: 600px) {
}
