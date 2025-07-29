# 🔑 How to Get Your OpenWeatherMap API Key

To run the **Weather Dashboard** project, you must use a valid API key from [OpenWeatherMap](https://openweathermap.org/).  
Follow these simple steps to get your API key and connect it to the project:

---

## 🧭 Step-by-Step Instructions

### 1️⃣ Create a Free Account
- Visit: [https://home.openweathermap.org/users/sign_up](https://home.openweathermap.org/users/sign_up)
- Fill out the sign-up form and confirm your email address.

### 2️⃣ Access Your API Keys
- After login, go to [My API Keys](https://home.openweathermap.org/api_keys)
- You'll see a default API key. You can use that, or create a new one by giving it a name.

### 3️⃣ Copy Your API Key
- Example key format:
  ```
  522bc627429e67f123234add41a4e20b
  ```

### 4️⃣ Create a `.env` File in Your Project
In the root folder of your React project, create a file named `.env`  
Inside the file, paste this line with your key:

```env
VITE_WEATHER_API_KEY=your_actual_api_key_here
```

Replace `your_actual_api_key_here` with the key you copied from OpenWeather.

### 5️⃣ Restart the Development Server
If your server is already running, stop it and restart:
```bash
npm run dev
```

---

## ⚠️ Common Notes

- It may take **5-10 minutes** after creating your key before it becomes active.
- Do **not share** your API key publicly or push it to GitHub.
- The `.env` file is already gitignored in this project.
- Without the key, the app will not fetch weather data.

---

## 📄 Sample `.env` File

```env
VITE_WEATHER_API_KEY=522bc627429e67f123234add41a4e20b
```

> ⚠️ This key above is only an example. Do not use it unless it's yours.

---

## 🙋 Need Help?

If you face issues setting up the API key:
- Double-check your OpenWeather account
- Make sure `.env` file is in the **root** of your project
- Restart the dev server after changes
- Confirm your key is active and not expired or disabled

---

✅ Now you're all set! Enjoy live weather updates in your React app 🌤️
