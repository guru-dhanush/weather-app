## Prerequisites to Run the Project

Before running this project, make sure you have the following installed and configured.

### 1. Node.js

* Node version used: **v24.11.0**
* Recommended: use the same or a compatible Node version to avoid issues

You can check your version using:

```bash
node -v
```

---

### 2. Environment Variables

This project uses the **OpenWeather API**.
You need to create a `.env` file in the root of the project and add the following values:

```env
VITE_OPEN_WEATHER_API_KEY=api_key_from_openweather
VITE_BASE_URL=https://api.openweathermap.org/data/2.5
```

> These variables are required for fetching current weather, forecast data, and city search.

---

### 3. Install Dependencies

After cloning the repository, install dependencies:

```bash
npm install
```

or

```bash
pnpm install
```

---

### 4. Run the Project

Start the development server:

```bash
npm run dev
```

or

```bash
pnpm dev
```

The app should now be running locally.

