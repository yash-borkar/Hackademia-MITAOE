# Use an official Python runtime as the base image
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

# Install system dependencies for XGBoost
RUN apt-get update && apt-get install -y \
    build-essential \
    libgomp1 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy only requirements first to leverage Docker cache
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend files, including the model and .env file
COPY . .

# Expose the port Flask uses
EXPOSE 5000

# Run the Flask application
CMD ["python", "main.py"]
