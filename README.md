# 🌦️ MobileWeatherApp

A React Native weather forecasting mobile app built using Expo, React Native, and OpenWeatherMap API.

## 📦 Features

- Get current weather and hourly forecast by city
- Toggle between Celsius and Fahrenheit
- Toggle between light and dark themes

---

## ⚙️ Setup Instructions

### 1. 📁 Clone the Repo

```bash
git clone https://github.com/ChezzyB/MobileWeatherApp.git
cd MobileWeatherApp
```
---

### 2. 🔐 Environment Variables

This project uses a `.env` file to securely inject your OpenWeatherMap API Key into the app configuration.

a. Create a `.env` file:

```bash
touch .env
```

b. Then open `.env` and add:

```ini
WEATHER_API_KEY=your_actual_api_key_here
```

✅ **Never commit this file to GitHub!**


---

### 3. 📤 Inject API Key into `app.json`

Before running or building the app, inject the API key by running the following script:

```bash
npm run prestart
```

This will:

- Read your `.env` file
- Insert your `WEATHER_API_KEY` into `app.json` under `expo.extra.weatherApiKey`

---

### 4. ▶️ Run the App

Once the API key is injected, you can start the app:

```bash
npm start
```

Or:

```bash
npm run android
# or
npm run ios
```

---

## 📁 Scripts

| Script               | Description                            |
|----------------------|----------------------------------------|
| `npm run start`      | Starts the Expo dev server             |
| `npm run prestart`   | Injects the API key into `app.json`    |
| `npm run build`      | Builds the app for production          |
| `npm run reset-project` | Clears cache and resets the project |

---

## 🛡️ Security & Git Best Practices

✅ `.env` is gitignored  
✅ `app.json` contains only a placeholder key  
✅ Use `.env.example` for safe sharing

---

## 📄 .env.example

```env
# Rename this file to .env and add your actual key
WEATHER_API_KEY=your_api_key_here
```

---

## 🔗 API Reference

- [OpenWeatherMap API Docs](https://openweathermap.org/api)

---

## 🧑‍💻 Author

**Chesney Brooke**  
Built for **UBCO Circuit Stream Assignment** 🚀