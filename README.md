# English to French Translation Service

This is a simple web application that translates English text to French using a RESTful API endpoint.

## Overview

The application provides a user interface where users can input English text, which is then translated to French and displayed on the page. The translation is performed through a backend API endpoint using the Google Translate API.

## Features

- Translation of English text to French.
- Responsive user interface.
- Error handling for missing or invalid input.

## Technologies Used

- Node.js
- Express.js
- Google Translate API
- HTML
- CSS

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/im-yogesh/english-to-french-translator.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - If you're using the Google Translate API, ensure you have an API key and set it as an environment variable.

4. Start the server:

   ```bash
   npm start
   ```

## Usage

1. Access the application in your web browser at `http://localhost:4001`.
2. Enter English text in the provided textarea.
3. Click the "Translate" button.
4. The translated text will be displayed below the form.

## Folder Structure

- `controllers/`: Contains controller logic.
- `routes/`: Defines routes for the application.
- `public/`: Contains static assets such as CSS files.

## Contributing

Contributions are welcome! Please follow the [GitHub Flow](https://guides.github.com/introduction/flow/) when making contributions:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push the branch (`git push origin feature/feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
