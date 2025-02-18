// jsx.d.ts
declare namespace JSX {
    type Element = string; // Componentes retornam strings HTML
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }