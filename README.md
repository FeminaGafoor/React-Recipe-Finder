# 🍄 Mush Room - Recipe Explorer

A modern, responsive recipe discovery application built with React that helps you find delicious meals and explore ingredients. Browse through hundreds of recipes, watch cooking tutorials, and discover new dishes from around the world!

![Mush Room App](https://img.shields.io/badge/React-18.x-61dafb?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- 🔍 **Search Recipes** - Find meals by name, category, or ingredient
- 🥘 **Browse Ingredients** - Explore popular ingredients and their uses
- 📺 **Video Tutorials** - Watch YouTube cooking videos for each recipe
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful glassmorphic design with smooth animations
- 🌍 **International Cuisine** - Discover recipes from different cultures
- 📝 **Detailed Instructions** - Step-by-step cooking instructions
- 🛒 **Ingredient Lists** - Complete ingredient lists with measurements

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **API:** TheMealDB API
- **Icons:** Lucide React & Custom SVG
- **Build Tool:** Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/React-Recipe-Finder.git
   cd mush-room-recipe-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
mush-room-recipe-app/
├── public/
│   ├── image.png              # Logo for mobile
│   └── image copy 2.png       # Logo for desktop
├── src/
│   ├── Components/
│   │   ├── Header.jsx         # Navigation header
│   │   ├── LoginModal.jsx     # Login/Signup modal
│   │   └── MealCard.jsx       # Recipe card component
│   ├── layout/
│   │   └── MainLayout.jsx     # Main layout wrapper
│   ├── views/
│   │   ├── Home.jsx           # Home page
│   │   ├── Ingredients.jsx    # Ingredients listing page
│   │   ├── MealsByIngredient.jsx  # Meals filtered by ingredient
│   │   └── MealDetail.jsx     # Recipe detail page
│   ├── App.jsx                # Main app component with routes
│   ├── App.css                # Global styles
│   └── main.jsx               # Entry point
├── package.json
└── README.md
```

## 🎯 Usage

### Browsing Recipes

1. Visit the home page to see featured meals
2. Click on any meal card to view full recipe details
3. Watch the YouTube tutorial video for visual guidance

### Exploring Ingredients

1. Navigate to the **Ingredients** page
2. Click on any ingredient to see all recipes using that ingredient
3. Click "Watch Recipe" to see a cooking tutorial

### Login/Signup

1. Click the **Login** button in the header
2. Enter your email and password
3. Toggle between Login and Signup modes
4. Or use social login options (Google/Facebook)

## 🔌 API Reference

This project uses [TheMealDB API](https://www.themealdb.com/api.php) for recipe data.

**Key Endpoints:**

- Get meal by ID: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`
- Search by ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`
- List all ingredients: `https://www.themealdb.com/api/json/v1/1/list.php?i=list`

## 🎨 Customization

### Changing Colors

Edit the Tailwind classes in components or customize `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
      },
    },
  },
};
```

### Adding New Features

1. Create new components in `src/Components/`
2. Add new routes in `App.jsx`
3. Create new pages in `src/views/`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist/` folder, ready for deployment.

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag and drop the dist folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
npm run build
npm run deploy
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/FeminaGafoor)
- LinkedIn: [Your Name](https://www.linkedin.com/in/femina-azeez/)

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for the amazing free recipe API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the awesome JavaScript library
- [Lucide React](https://lucide.dev/) for beautiful icons

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

Made with ❤️ and React

**Delicious meals, delivered fresh!** 🍽️
