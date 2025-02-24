# Hackademia-MITAOE

## 🚀 Overview
This project involves building a machine learning model to predict the probability of a customer purchasing a "printer-related product" based on past transactions. The project includes both **frontend** (React) and **backend** (Python FastAPI) components.

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-repo/project.git
cd project
```

### **2️⃣ Backend Setup (Python)**
Navigate to the `backend` directory:
```bash
cd backend
```
Install dependencies:
```bash
pip install -r requirements.txt
```
Run the backend server:
```bash
python main.py
```
By default, the backend will run on `http://localhost:8000`

---

### **3️⃣ Frontend Setup (React)**
Navigate to the `frontend` directory:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
```
Run the frontend:
```bash
npm run dev
```
By default, the frontend will run on `http://localhost:3000`

---

## 🎯 Running the Application
Ensure both the frontend and backend servers are running:
1. Start the **backend**: `python main.py`
2. Start the **frontend**: `npm run dev`
3. Open `http://localhost:3000` in your browser.

---

## 📊 Data Science Workflow
### **1️⃣ Data Collection & Processing**
- Load datasets: `customer_info`, `product_info`, `customer_transaction_info`, `orders_returned_info`, `region_seller_info`.
- Perform data cleaning and feature engineering.
- Identify "printer-related products" based on product name and category.

### **2️⃣ Model Training & Evaluation**
- Train ML models (Logistic Regression, Random Forest, XGBoost, etc.).
- Compare model performance using accuracy, precision, recall, and AUC-ROC.
- Select the best model for deployment.

### **3️⃣ Model Deployment**
- Save the trained model and integrate it with the backend.
- Expose an API endpoint for real-time predictions.
- Connect the frontend to display recommendations.

---

## 🤝 Contributing
Feel free to submit issues or pull requests to improve the project!

Happy coding! 🚀

