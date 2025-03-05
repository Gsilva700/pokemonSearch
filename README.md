# Pokémon Search APP in JS🎮



The Pokémon Search App is a web application that allows users to search for Pokémon by name or ID. It retrieves data from the PokéAPI and displays detailed information about the Pokémon, including its name, ID, weight, height, types, stats, and sprite.

This project was built as part of the freeCodeCamp curriculum and demonstrates the use of API integration, JavaScript, and dynamic DOM manipulation.

Features ✨


Search Pokémon by Name or ID:

Supports both Pokémon names (e.g., Pikachu) and IDs (e.g., 25).

Detailed Pokémon Information:

Displays the Pokémon's name, ID, weight, height, types, and stats.

Pokémon Sprite:

Shows the Pokémon's front default sprite.

Error Handling:

Displays an alert if the Pokémon is not found.


How It Works 🛠️


Input:

The user enters a Pokémon name or ID in the search input.

API Request:

The app fetches data from the PokéAPI using the provided input.

Data Display:

If the Pokémon is found, the app displays its details and sprite.

If the Pokémon is not found, an alert is shown.


User Stories Implemented ✅


User Story	Status
The app has an input field for searching Pokémon by name or ID.	✔️
The app displays the Pokémon's name, ID, weight, and height.	✔️
The app displays the Pokémon's types.	✔️
The app displays the Pokémon's stats (HP, Attack, Defense, etc.).	✔️
The app displays the Pokémon's sprite.	✔️
The app shows an alert if the Pokémon is not found.	✔️



Technologies Used 💻


HTML: For structuring the app.

CSS: For styling the app.

JavaScript: For fetching data from the PokéAPI and updating the DOM.

PokéAPI: For retrieving Pokémon data.


Setup Instructions 🚀



Clone the Repository:

bash
git clone https://github.com/your-username/pokemon-search-app.git
cd pokemon-search-app
Open the App:

Open the index.html file in your browser.

Use the App:

Enter a Pokémon name or ID in the search input.

Click the "Search" button to see the Pokémon's details.


Example Usage 📋


Search by Name
Input: Pikachu

Output:

Name: PIKACHU

ID: #25

Weight: 60

Height: 4

Types: ELECTRIC

Stats:

HP: 35

Attack: 55

Defense: 40

Special Attack: 50

Special Defense: 50

Speed: 90

Search by ID
Input: 94

Output:

Name: GENGAR

ID: #94

Weight: 405

Height: 15

Types: GHOST, POISON

Stats:

HP: 60

Attack: 65

Defense: 60

Special Attack: 130

Special Defense: 75

Speed: 110



Code Structure 🗂️


pokemon-search-app/
├── index.html          # Main HTML file
├── styles.css          # CSS for styling
├── script.js           # JavaScript for API integration and DOM manipulation
├── README.md           # Project documentation
└── screenshot.png      # Screenshot of the app (optional)


Credits 🙌


Built by Gabriel de Macedo Silva.

Inspired by freeCodeCamp.

Data provided by PokéAPI.

Contributions are welcome! 🤝



API Integration 🔍


The app uses the PokéAPI to fetch Pokémon data. Below is an example of how the API is used:

