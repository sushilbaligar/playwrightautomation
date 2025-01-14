# PlaywrightAutomation

This repository contains automation tests using Playwright. The following instructions will help you set up the project and run the tests on your local machine.

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)

## Installation

1. **Install Visual Studio Code**:
   - Download and install [Visual Studio Code](https://code.visualstudio.com/).
   - Install the necessary extensions, such as the Python and Node.js extensions.

2. **Install Node.js**:
   - Download and install [Node.js](https://nodejs.org/).
   - Verify the installation by running:
     ```bash
     node --version
     npm --version
     ```

3. **Clone the repository**:
   - Open your terminal and navigate to the location where you want to clone the repository.
   - Run the following command:
     ```bash
     git clone https://github.com/sushilbaligar/playwrightautomation.git
     ```
   - Navigate to the cloned repository:
     ```bash
     cd playwrightautomation
     ```

4. **Install Playwright**:
   - Install Playwright using npm:
     ```bash
     npm init playwright@latest
     ```

## Running the Tests

1. **Install project dependencies**:
   ```bash
   npm install
1. **Run the tests**:
   ```bash
   npx playwright test
   
