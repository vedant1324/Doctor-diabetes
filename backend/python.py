import pickle
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from sklearn import datasets

# Load the diabetes dataset
diabetes = datasets.load_diabetes()

# Split the dataset into features (X) and target variable (y)
X = diabetes.data
y = diabetes.target

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a Linear Regression model and train it
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions on the test set
y_predicted = model.predict(X_test)

# Calculate evaluation metrics
mse = mean_squared_error(y_test, y_predicted)
r2 = r2_score(y_test, y_predicted)

# Print evaluation metrics
print("Mean Squared Error:", mse)
print("R^2 Score:", r2)

# Save the model using pickle
with open('mlmodel.pkl', 'wb') as f:
    pickle.dump(model, f)
