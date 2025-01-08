
# Weather App

## Overview

This Weather App allows users to search for weather information for any city. It provides real-time data such as temperature, humidity, and weather conditions. The app uses the OpenWeather API to fetch weather data and displays it in a user-friendly interface. The design features a glass effect with responsive layouts and animations for smooth interactions.

## Live Demo

You can view the live demo of the Weather App at [Weatheride](https://weatheride.netlify.app/).

---

## Features

- **Search Functionality**: Users can search for the weather information of any city.
- **Weather Details**: Displays temperature, humidity, min/max temperature, and feels like information.
- **Responsive Design**: The app is fully responsive, adapting to various screen sizes.
- **Glass Effect UI**: The app uses a modern glass effect with blur and transparency.
- **Animations**: Smooth fade-in animations for various components.

---

## Technologies Used

- **Frontend**:
  - React.js
  - Material UI
  - CSS (with custom styles for glass effect and animations)
  
- **API**:
  - OpenWeather API (for fetching weather data)
  
- **Styling**:
  - Tailwind CSS (for utility-first styling)
  
- **Animations**:
  - Custom CSS animations for smooth effects

---

## Project Structure

- **`/src`**: Contains all the source code for the project.
  - **`App.js`**: The main entry point of the application.
  - **`InfoBox.js`**: Displays the weather information for a specific city.
  - **`SearchBox.js`**: Allows the user to input a city name and search for weather information.
  - **`WeatherApp.js`**: The central component managing the state and rendering `SearchBox` and `InfoBox`.

- **`/public`**: Contains public assets like the index.html file.

- **`/node_modules`**: The dependencies required for the project (this folder is ignored by Git).

- **`package.json`**: Manages the project's dependencies and scripts.

---

## Setup Instructions

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager) for managing project dependencies.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of your project and add your OpenWeather API key:

   ```
   REACT_APP_OPENWEATHER_API_KEY=<your-api-key>
   ```

4. Run the development server:

   ```bash
   npm start
   ```

   The app will run on `http://localhost:3000`.

---



## Usage

1. Open the app in your browser.
2. Enter the name of the city you want to check the weather for in the search bar.
3. The weather information for that city will be displayed, including:
   - Temperature
   - Feels like temperature
   - Humidity
   - Min/Max temperatures
   - Weather description
4. The app dynamically updates the displayed information as you search for different cities.

---

## Screenshots

![Weather App Screenshot](path_to_screenshot.png)

---

## Future Improvements

- Add error handling for invalid city names or API issues.
- Implement additional weather metrics such as wind speed, pressure, etc.
- Enhance the UI with more interactive features and animations.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- OpenWeather API for providing weather data.
- Material UI for the beautiful UI components.
- Tailwind CSS for styling flexibility.
