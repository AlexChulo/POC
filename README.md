
# Image Classification with Learning Feedback

This project demonstrates how to use `ml5.js` for image classification with an interactive feedback system. Users can upload an image, get a classification prediction, and provide feedback on whether the prediction is correct or not. If the prediction is incorrect, users can supply the correct label, which will be saved for future reference.

## Features

- **Image Upload**: Users can upload an image to be classified.
- **Image Classification**: The app uses the `MobileNet` model from `ml5.js` to classify the image.
- **Feedback Mechanism**: Users can provide feedback on whether the classification was correct or not.
- **Future Learning from Feedback**: Plans to implement a learning system where user-provided labels will be used to retrain the model or for future analysis (to be developed).

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
/image-classification
  ├── index.html
  ├── script.js
  ├── README.md
```

### 4. How It Works

#### Image Upload
- Users can select an image file using the file input at the top of the page.
- The image will be displayed on the page.

#### Image Classification
- Once the image is uploaded, the system uses the `MobileNet` model from `ml5.js` to classify the image.
- The predicted label and confidence score will be shown on the page.

#### Feedback Mechanism
- After the classification, users can click the "Correct" button if the prediction is accurate.
- If the prediction is incorrect, users can click the "Not Correct" button, which will reveal a text input field to provide the correct label.

#### Saving Correct Labels
- When a user provides a correct label for an incorrect prediction, the data (including the original prediction and the correct label) is saved in the browser’s `localStorage`.
- This data can be used for future analysis or potentially for retraining the model in future updates (roadmap feature).

#### Example Steps:
1. Upload an image.
2. View the classification result and feedback options.
3. Mark the prediction as "Correct" or "Not Correct."
4. If incorrect, provide the correct label and save it.

### 5. Customizing the Application

- **Change the Model**: 
  You can replace the `MobileNet` model with another pre-trained model available in `ml5.js`. Just change the model name in the JavaScript code (e.g., `'MobileNet'` to `'Darknet'` or any other available model).
  
- **Styling**: 
  You can modify the `index.html` or `style.css` (if added) to adjust the layout and appearance of the application.

### 6. Viewing the Feedback Data

Feedback data (incorrect classifications and correct labels) is saved in the browser’s `localStorage`. You can inspect it through the browser's developer tools:

1. Open the browser’s Developer Tools (usually by pressing `F12`).
2. Go to the **Application** tab.
3. Under **Storage**, click on **LocalStorage**.
4. Look for the key `feedbackData` to see the stored feedback.

## Roadmap

- **Learning from Feedback**: In the future, we plan to implement a learning system where the feedback data (incorrect classifications and correct labels) will be used to improve the model. This could involve retraining the model with the user-provided labels or analyzing the feedback data to improve future predictions.
  
- **Custom Model Training**: Eventually, the project will support retraining or fine-tuning the model with new data provided by users. This feature will allow users to enhance the model's accuracy over time.

## Conclusion

This project provides an interactive image classification system that allows users to provide feedback on predictions. While learning from feedback is a planned feature, the system currently saves feedback data in `localStorage` for future analysis. This offers users a way to interact with the system and track the correctness of classifications.
```
