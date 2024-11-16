# Mars Visit Application Form

## Description

This project is a multi-stage application form for individuals interested in visiting Mars. The form collects various personal details and preferences from applicants. It is built with **Next.js**, **React**, and **Chakra UI**, utilizing **React Hook Form** for form management and **Yup** for validation. The project also includes unit tests for form validation logic using **Jest**.

## Features

- **Multi-Stage Form:** Three stages collecting personal information, travel preferences, and health & safety details.
- **Form Validation:** Real-time validation with error messages for required fields, email format, phone format, and date formats.
- **Form Navigation:** Users can navigate back and forth between form stages to review and edit their entries.
- **Progress Indicator:** Visual progress bar indicating the current stage of the application.
- **Responsive Design:** Visually appealing and responsive design using Chakra UI and custom theming.
- **Success Message:** Displayed upon successful submission of the application.
- **Unit Testing:** Tests written using Jest and React Testing Library to ensure form validation logic works correctly.

## Live Demo

[Live Demo Link](https://mars-visit-application-nine.vercel.app) https://mars-visit-application-nine.vercel.app

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mars-visit-application.git
   cd mars-visit-application
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

```bash
npm run build
npm start
```

### Accessing the Application

- **Home Page:** Starts at Stage 1 of the application form.
- **Navigation:** Use the **Next** and **Back** buttons to navigate between stages.
- **Form Submission:** On the final stage, clicking **Submit** will display a success message.

## Testing

### Running Tests

```bash
npm run test
```

### Testing Details

- Tests are located in the `tests` directory.
- The testing framework used is **Jest** along with **React Testing Library**.
- Current tests cover validation logic for the personal information step.

## Deployment

The application is deployed on Vercel and can be accessed via the [Live Demo Link](https://mars-visit-application-nine.vercel.app).


## Project Structure

- **`components/`**
  - Reusable React components for each form step, navigation, progress bar, and success message.
- **`pages/`**
  - Next.js pages, including the main application entry point.
- **`public/`**
  - Static assets like images and favicon.
- **`styles/`**
  - CSS modules and global styles.
- **`tests/`**
  - Unit tests for form validation logic.
- **`theme.js`**
  - Custom theme configurations for Chakra UI.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: Modular and accessible component library.
- **React Hook Form**: For handling form state and validation.
- **Yup**: JavaScript schema builder for value parsing and validation.
- **Jest**: Testing framework for JavaScript.
- **React Testing Library**: Simple and complete React DOM testing utilities.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License

This project is licensed under the MIT License.

