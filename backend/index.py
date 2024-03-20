from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the trained model
with open('mlmodel.pkl', 'rb') as f:
    model = pickle.load(f)

# API endpoint for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the request
        data = request.json.get('data')  # Extract 'data' field
        
        # Check if the data is in the correct format
        if not isinstance(data, list):
            raise ValueError("Input data must be a list")
        
        # Convert data to numpy array
        data_np = np.array(data).reshape(1, -1)
        
        # Make prediction using the loaded model
        prediction = model.predict(data_np)
        
        # Return the prediction as JSON response
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
