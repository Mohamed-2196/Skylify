# **Skylify: Explore the Cosmos** 🌌🚀

Skylify is an **innovative web application** designed for space enthusiasts, offering a **fully immersive experience** to explore the cosmos. Dive into the universe with **visually captivating and scientifically accurate 3D models** of exoplanets and stars, powered by **NASA data**. Whether you're curious about planetary characteristics, star constellations, or the night sky from the perspective of distant worlds, Skylify brings the wonders of space to your fingertips.

---

## **Live Demo** 🌐

The project is hosted and can be accessed here:  
👉 **[https://temp-nasa.vercel.app/](https://temp-nasa.vercel.app/)**

---

## **Features** ✨

1. **Interactive 3D Models** 🪐:
   - Explore **scientifically accurate 3D models** of exoplanets and stars.
   - Models are based on real data, including **temperature**, **atmospheric composition**, **humidity**, and **planetary type**.

2. **Night Sky Simulation** 🌠:
   - Experience the **night sky** from the viewpoint of different exoplanets.
   - Explore **star constellations** and generate **custom constellation maps**.

3. **AI-Powered Chatbot** 🤖:
   - Get answers to your space-related questions with an **AI-powered chatbot**.
   - Ask about exoplanets, stars, constellations, and more.

4. **Detailed Exoplanet Reports** 📄:
   - Generate **comprehensive reports** on specific exoplanets with just a click.
   - Reports include detailed information on planetary characteristics and more.

5. **Immersive User Experience** 🎮:
   - Built with **Three.js** for stunning 3D visuals.
   - **Material-UI** for a sleek and modern user interface.

---

## **Technologies Used** 🛠️

- **Frontend**:
  - React.js
  - Three.js for 3D rendering.
  - Material-UI for UI components.
- **Backend**:
  - FastAPI for handling API requests.
  - Python 3.10.11 for backend logic.
- **Data Visualization**:
  - NASA data for exoplanet and star models.
  - Custom constellation mapping.

---

## **How to Run the Project** 🏃‍♂️

### **Prerequisites**:
- **Node.js** and **npm** installed.
- **Python 3.10.11** installed.

### **Steps**:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Mohamed-2196/Skylify.git
   cd skylify
   ```

2. **Set Up the Frontend**:
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Set Up the Backend**:
   - Create a virtual environment:
     ```bash
     python -m venv env_name
     ```
   - Activate the virtual environment:
     - On macOS/Linux:
       ```bash
       source env_name/bin/activate
       ```
     - On Windows:
       ```bash
       env_name\Scripts\activate
       ```
   - Add the environment name to `.gitignore`:
     ```bash
     echo "env_name/" >> .gitignore
     ```
   - Install Python dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Navigate to the backend directory:
     ```bash
     cd python_backend/
     ```
   - Start the FastAPI server:
     ```bash
     uvicorn main:app --reload
     ```

4. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000` for the frontend.
   - The backend API will be running at `http://localhost:8000`.

---

Explore the universe like never before with **Skylify**! 🌌✨
