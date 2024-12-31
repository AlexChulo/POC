
# Image Classification with Learning

This project demonstrates how to use `ml5.js` for image classification with an interactive learning system. Users can upload multiple images, assign labels, train the model, and then use the trained model to classify new images.

## Features

- **Image Upload**: Users can upload multiple images (at least 3) that represent the object or class to be classified.
- **Image Classification**: The app uses the `MobileNet` model from `ml5.js` to classify the uploaded image.
- **Training the Model**: The model learns from the labeled images provided by the user to classify new images accurately.
- **Prediction**: After training, the model can predict the label of new images based on the data it has learned.

## Requirements

- A modern web browser (Google Chrome, Firefox, etc.) with JavaScript enabled.
- The `ml5.js` library is used for image classification and machine learning functionalities.

## Setup Instructions

### 1. Download or Clone the Repository

You can either clone or download this repository to your local machine.

To clone the repository, run:

```bash
git clone https://github.com/AlexChulo/POC

## Requirements

- A modern web browser (Google Chrome, Firefox, etc.) with JavaScript enabled.
- The `ml5.js` library is used for image classification and machine learning functionalities.

## Setup Instructions

### 1. Download or Clone the Repository

You can either clone or download this repository to your local machine.

To clone the repository, run:

```bash
git clone https://github.com/AlexChulo/POC
```

Alternatively, you can download the project files directly and extract them to a folder.

### 2. Open the HTML File

Once you have the files, open the `index.html` file in your preferred web browser. You can either:

- Double-click the `index.html` file to open it.
- Right-click on the `index.html` file and select "Open with" to choose your browser.

### 3. Project Structure

Your project directory should look like this:

```
/POC
├── images
  ├── index.html
  ├── script.js
  ├── README.md
```

### 4. How It Works

#### Image Upload
- Users can select and upload multiple images (at least 3) that represent the object or class to be classified.
- These images will be displayed on the page for the user to review.

#### Image Classification
- Once the images are uploaded, users can assign a label to these images.
- The model uses these labeled images to learn how to classify objects of that kind.

#### Training the Model
- Once the user has uploaded and labeled at least 3 images, they can click the "Train" button to train the model with the images.
- The model will learn from the uploaded images and use this data for future predictions.

#### Prediction
- After the model has been trained with the labeled images, users can upload a new image for classification.
- The model will predict the label of the new image based on the objects it has learned from the training set.

#### Example Steps:
1. Upload at least 3 images that represent the object or class to be classified.
2. Provide a label for these images.
3. Train the model using the uploaded and labeled images.
4. Upload a new image to predict its label based on the trained model.

### 5. Customizing the Application

- **Change the Model**: 
  You can replace the `MobileNet` model with another pre-trained model available in `ml5.js`. Just change the model name in the JavaScript code (e.g., `'MobileNet'` to `'Darknet'` or any other available model).
  
- **Styling**: 
  You can modify the `index.html` or `style.css` (if added) to adjust the layout and appearance of the application.

### 6. Viewing the Feedback Data

The training data (images and labels) is used to teach the model, but you can inspect the progress or debug any issues using the browser's developer tools:

1. Open the browser’s Developer Tools (usually by pressing `F12`).
2. Go to the Console tab to view any debug logs or messages related to the model training and prediction.

## Roadmap

- **Improved Prediction Accuracy**:
As more labeled images are provided, the model will become more accurate at predicting the labels of unseen images.
  
- **Custom Model Training**: In future updates, the project will support additional features like fine-tuning or retraining the model with new data provided by users to improve its prediction capabilities.

## Conclusion

This project provides an interactive image classification system where users can upload and label multiple images to train the model. Once the model has been trained with enough labeled data, it can predict the label of new, unseen images. The system offers a way for users to contribute labeled data, enabling the model to improve its accuracy over time.

