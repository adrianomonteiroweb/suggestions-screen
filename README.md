# Fintech Suggestions Screen

![Project Logo](https://img.freepik.com/premium-vector/feedback-concept-line-icon-simple-element-illustration-feedback-concept-outline-symbol-design-can-be-used-web-mobile-ui-ux_159242-3724.jpg?w=2000) <!-- Se você tiver um logo, você pode incluí-lo aqui -->

The **Fintech Suggestions Screen** is a powerful web application developed using Node.js, TypeScript, and Next.js, with MongoDB serving as its database backend. This application is designed to provide fintech clients with a seamless experience for submitting suggestions, which can then be reviewed, liked, and commented on by other users. This project follows essential Object-Oriented Programming (OOP) and SOLID principles, ensuring a robust and maintainable codebase.

## Features

- User-friendly interface for submitting and tracking suggestions.
- Collaborative environment with likes and comments for suggestions.
- Complete flow for monitoring suggestion status, from submission to implementation or discontinuation.

## Project Team

### Project Lead and Frontend Developer

- **Adriano Monteiro**
  - *Software Developer*
  - [LinkedIn](https://www.linkedin.com/in/adrianomonteirodev/) , [Github](https://github.com/adrianomonteiroweb?tab=repositories)

### Backend Developer

- **Allana**
  - *Software Developer*
  - [LinkedIn](https://www.linkedin.com/in/lana-karla/) , [Github](https://github.com/lana2-2karla)

## Project Structure

This project is organized using a Monorepo Yarn Workspaces approach for better maintainability and scalability. The project's structure is as follows:

packages/
├── api/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ │ ├── index.ts
│ │ │ ├── user.route.ts
│ │ │ └── adm.route.ts
│ │ ├── app.ts
│ │ └── index.ts
│ ├── tests/
│ ├── .eslintrc.js
│ ├── jest.config.js
│ ├── tsconfig.json
│ └── package.json
├── web/
│ ├── components/
│ ├── pages/
│ ├── styles/
│ ├── .eslintrc.js
│ └── package.json
├── .eslintrc.json
└── package.json

## Technologies and methods Used

### Patterns

 - [Commits Patterns](https://github.com/iuricode/padroes-de-commits)
### Backend (API)

- Node.js
- Express.js
- TypeScript
- MongoDB
- POO
- SOLID
- Tests in-memmory
- Jest.js
- ESLint

## Getting Started

To set up the project locally and start using it, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `api` directory and run `yarn install` to install the required dependencies.
3. Run `yarn dev` to start the backend server.
4. Similarly, navigate to the `web` directory and repeat the steps to set up the frontend.

For detailed instructions on setting up the project, running tests, and deploying, please refer to the [full documentation](link_para_documentação_completa).

## Contact

For any inquiries or support, please reach out to [adrianomonteiroweb@gmail.com](mailto:adrianomonteiroweb@gmail.com).
