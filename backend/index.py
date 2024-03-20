from flask import Flask, request, jsonify
from flask_cors import CORS;
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)
# Load the trained model
with open('mlmodel.pkl', 'rb') as f:
    model = pickle.load(f)

# Threshold for classifying diabetes
threshold = 150  # You can adjust this threshold as needed

# API endpoint for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the request
        data = request.json
        
        # Extract values from the form data
        age = float(data.get('age', 0))
        sex = float(data.get('sex', 0))
        bp = float(data.get('bp', 0))
        bmi = float(data.get('bmi', 0))
        s1 = float(data.get('s1', 0))
        s2 = float(data.get('s2', 0))
        s3 = float(data.get('s3', 0))
        s4 = float(data.get('s4', 0))
        s5 = float(data.get('s5', 0))
        s6 = float(data.get('s6', 0))
        
        # Convert data to numpy array
        data_np = np.array([age, sex, bp, bmi, s1, s2, s3, s4, s5, s6]).reshape(1, -1)
        
        # Make prediction using the loaded model
        prediction = model.predict(data_np)
        
        # Classify the prediction
        if prediction >= threshold:
            diabetes_status = "Diabetes"
        else:
            diabetes_status = "Not Diabetes"
        
        # Return the prediction and classification as JSON response
        return jsonify({'prediction': prediction.tolist(), 'diabetes_status': diabetes_status})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
