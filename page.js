@tailwind base;
@tailwind components;
@tailwind utilities;

/* Print styling */
@media print {
  body { background: white; }
  button { display: none !important; }
  input[type="range"] { display: none !important; }
}
