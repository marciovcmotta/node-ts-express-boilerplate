## NodeJS Boilerplate

This repository provides a simple Node.js boilerplate with pre-configured TypeScript and Express. It aims to provide a starting point for building robust and scalable web applications.

### Features

  * **TypeScript:** Leverage the power of static typing for improved code quality and maintainability.
  * **Express:** Build web applications and APIs quickly and efficiently with this minimalist web framework.
  * **tsup:**  A fast and efficient TypeScript bundler for generating optimized production code.
  * **tsx:**  Execute TypeScript files directly from the command line.

### Getting Started

1.  **Clone the repository:**

```bash
git clone https://github.com/marciovcmotta/node-ts-express-boilerplate
```

1.  **Install dependencies:**

```bash
cd node-ts-express-boilerplate
npm install
```

1.  **Start the development server:**

```bash
npm run start:dev
```

This will start the server in development mode, with automatic reloading on code changes.

### Scripts

  * **`npm run dist`:** Bundles the source code for production using `tsup`.
  * **`npm run start:dev`:** Starts the development server using `tsx`.
  * **`npm run start:watch`:** Starts the development server with file watching using `tsx watch`.
  * **`npm run start:dist`:** Builds the project and starts the production server.

### License

This project is licensed under the Apache-2.0 License - see the [LICENSE](https://www.google.com/url?sa=E&source=gmail&q=LICENSE) file for details.

**Feel free to contribute to this project by submitting issues or pull requests.**
