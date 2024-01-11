import tensorflow as tf
from PIL import Image
import numpy as np

class_labels = ["benign", "malignant", "normal"]

def predict(image_path):
    # Load the trained model
    model = tf.keras.models.load_model('medicfrontend/src/AIModel/Lung_Model.h5')
    
    # Process the image and make predictions
    img = Image.open(image_path).convert('L')  # Convert to grayscale
    img = img.resize((256, 256))
    img_array = np.expand_dims(np.array(img), axis=0)
    img_array = np.expand_dims(img_array, axis=-1)  # Add channel dimension
    
    predictions = model.predict(img_array)

    # Decode predictions to get the predicted label
    predicted_class_index = np.argmax(predictions)
    predicted_label = class_labels[predicted_class_index]

    # Return the predicted label
    return predicted_label

if __name__ == "__main__":
    # This part is for command-line execution
    import sys
    image_path = sys.argv[1]
    result = predict(image_path)
    print(result)
