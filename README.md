# 🍸 Mocktail Bar Application 🥂

This project is a simple web application that fetches random cocktail recipes from an external API (TheCocktailDB) and displays them dynamically using **Express.js** as the server framework and **EJS (Embedded JavaScript)** for templating. The app presents the cocktail name, ingredients, and instructions along with an embedded YouTube video tutorial.

## 📋 Table of Contents
- [🍹 Project Overview](#-project-overview)
- [💻 Technologies Used](#-technologies-used)
- [📦 Setup Instructions](#-setup-instructions)
- [🗂 Folder Structure](#-folder-structure)
- [🔗 API Integration](#-api-integration)
- [⚠️ Error Handling](#️-error-handling)
- [🔧 Usage](#-usage)
- [📜 License](#-license)

![image](https://github.com/user-attachments/assets/e3e71d61-d5b5-4a6b-af16-348f3c09ba71)
![image](https://github.com/user-attachments/assets/e7861d8e-3998-4d4c-aea3-ca8dfff76b38)


## 🍹 Project Overview

This application aims to provide a fun and interactive way for users to discover new cocktails. It pulls random drink recipes from TheCocktailDB's API and renders the drink's name, image, ingredients, and preparation instructions. Additionally, it embeds a related YouTube video tutorial.

### ✨ Features:
- 🍸 Fetch random cocktails from TheCocktailDB API.
- 📸 Display the cocktail name, image, ingredients, and preparation instructions.
- 🎥 Embed a YouTube video related to the cocktail.
- 🔄 Simple error handling for failed API requests.

---
## 🔗 API Integration

The application uses the [TheCocktailDB API](https://www.thecocktaildb.com/api.php) to fetch random cocktail details.

- **Endpoint**: `https://www.thecocktaildb.com/api/json/v1/1/random.php`
- **Request**: The application makes a GET request to fetch random drink data.

### API Response:
The API returns a JSON object containing details about a random cocktail, including the following:

- 🍹 **Drink name** (`strDrink`)
- 🖼️ **Image** (`strDrinkThumb`)
- 🥄 **Ingredients** (`strIngredient1`, `strIngredient2`, etc.)
- 📖 **Instructions** (`strInstructions`)


## 💻 Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **EJS (Embedded JavaScript)**: Templating engine for rendering HTML with embedded JavaScript logic.
- **Axios**: Promise-based HTTP client to fetch data from external APIs.
- **Body-Parser**: Middleware for handling form data.
- **HTML5 & CSS3**: For structuring and styling the web page.

---

## 📦 Setup Instructions

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/mocktail-bar.git
cd mocktail-bar
