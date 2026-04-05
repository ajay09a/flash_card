export const cards = [
  {
    question: "What is React?",
    answer: "React is a popular open-source JavaScript library used for building user interfaces, especially for single-page applications. It allows developers to create reusable UI components, manage application state efficiently, and update the UI dynamically using a virtual DOM for better performance and faster rendering."
  },
  {
    question: "What is Next.js?",
    answer: "Next.js is a powerful React framework that enables developers to build production-ready web applications with features like server-side rendering, static site generation, API routes, and built-in routing. It simplifies performance optimization, SEO, and scalability while maintaining a great developer experience."
  },
  {
    question: "What is useState?",
    answer: "useState is a React hook that allows functional components to manage and update local state. It returns a state variable and a setter function, enabling dynamic updates and re-rendering of the component whenever the state changes, making UI interactive and responsive."
  },
  {
    question: "What is useEffect?",
    answer: "useEffect is a React hook used to perform side effects in functional components, such as fetching data, updating the DOM, or setting up subscriptions. It runs after render and can be controlled using dependency arrays to optimize performance and avoid unnecessary executions."
  },
  {
    question: "What is server-side rendering in Next.js?",
    answer: "Server-side rendering (SSR) in Next.js is a technique where pages are rendered on the server at request time instead of in the browser. This improves SEO, initial load performance, and ensures that users receive fully rendered HTML content before JavaScript is executed."
  },
  {
    question: "What is static site generation in Next.js?",
    answer: "Static Site Generation (SSG) is a method where HTML pages are generated at build time and served as static files. This makes websites extremely fast, secure, and scalable, as content does not need to be generated on each request and can be cached globally."
  },
  {
    question: "What are props in React?",
    answer: "Props (short for properties) are used to pass data from one component to another in React. They are read-only and help in making components reusable and dynamic by allowing parent components to control the behavior and output of child components."
  },
  {
    question: "What is state in React?",
    answer: "State is an object that stores dynamic data in a React component and determines how the component behaves and renders. Unlike props, state is managed within the component and can change over time, triggering re-renders when updated."
  },
  {
    question: "What is the virtual DOM?",
    answer: "The virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to efficiently update the UI by comparing changes (diffing) and only applying necessary updates to the actual DOM, improving performance and reducing unnecessary operations."
  },
  {
    question: "What is routing in Next.js?",
    answer: "Routing in Next.js is file-based, meaning each file inside the pages directory automatically becomes a route. This simplifies navigation and eliminates the need for external routing libraries, while also supporting dynamic and nested routes."
  },
  {
    question: "What is useContext?",
    answer: "useContext is a React hook that allows components to access global data without passing props manually through every level of the component tree. It is useful for managing themes, authentication, or other shared data across multiple components."
  },
  {
    question: "What is useRef?",
    answer: "useRef is a React hook that provides a way to access and persist values across renders without causing re-renders. It is commonly used to reference DOM elements directly or store mutable values that do not affect UI updates."
  },
  {
    question: "What is hydration in Next.js?",
    answer: "Hydration is the process where React attaches event listeners and makes a server-rendered HTML page interactive on the client side. It ensures that static content becomes dynamic without reloading the entire page."
  },
  {
    question: "What are API routes in Next.js?",
    answer: "API routes in Next.js allow developers to create backend endpoints within the same project. These routes run on the server and can handle requests such as form submissions, authentication, or database interactions without needing a separate backend server."
  },
  {
    question: "What is getServerSideProps?",
    answer: "getServerSideProps is a Next.js function used to fetch data on each request before rendering a page. It ensures that the page always has up-to-date data and is rendered server-side for better SEO and performance."
  },
  {
    question: "What is getStaticProps?",
    answer: "getStaticProps is a Next.js function used to fetch data at build time for static generation. It improves performance by pre-rendering pages and serving them as static files, making them fast and SEO-friendly."
  },
  {
    question: "What is component lifecycle in React?",
    answer: "Component lifecycle refers to the different stages a React component goes through, including mounting, updating, and unmounting. Hooks like useEffect can be used to control behavior during these stages in functional components."
  },
  {
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML and is a syntax extension that allows developers to write HTML-like code inside JavaScript. It makes UI code more readable and expressive while being transformed into JavaScript by tools like Babel."
  },
  {
    question: "What is code splitting?",
    answer: "Code splitting is a technique used to split large JavaScript bundles into smaller chunks that can be loaded on demand. This improves performance by reducing initial load time and only loading necessary code when required."
  },
  {
    question: "What is middleware in Next.js?",
    answer: "Middleware in Next.js allows developers to run code before a request is completed. It can be used for authentication, redirects, logging, or modifying requests and responses, providing more control over application behavior."
  }
];