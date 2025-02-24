from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load your trained model
with open("xgboost_model.pkl", "rb") as model_file:
    model = pickle.load(model_file)

# Secure API key
API_KEY = os.getenv("API_KEY")

@app.route('/predict', methods=['POST'])
def predict():
    api_key = request.headers.get("x-api-key")
    if api_key != API_KEY:
        return jsonify({"error": "Unauthorized access"}), 403
    
    data = request.get_json()
    features = [
        data.get("total_orders", 0),
        data.get("total_spent", 0.0),
        data.get("printer_purchases_last_6m", 0),
        data.get("return_rate", 0.0),
        data.get("average_order_value", 0.0),
        data.get("product_diversity", 0),
        data.get("region", 0),
        data.get("high_value_customer", 0)
    ]

    prediction = model.predict([features])
    probability = model.predict_proba([features])[0, 1]

    return jsonify({"prediction": int(prediction[0]), "probability": float(probability)})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
