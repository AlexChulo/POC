let classifier;
let imageElement = document.getElementById('image');
let resultElement = document.getElementById('result');
let correctButton = document.getElementById('correct-btn');
let incorrectButton = document.getElementById('incorrect-btn');
let correctInput = document.getElementById('correct-input');
let correctLabelInput = document.getElementById('correct-label');
let currentImageData = null; // To store the current image data

function setup() {
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

document.getElementById('file-input').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            imageElement.src = e.target.result;
            imageElement.style.display = 'block';
            imageElement.onload = function () {
                classifyFn();
            };
        };
        reader.readAsDataURL(file);
    }
}

function classifyFn() {
    console.log('Classifying image...');
    classifier.classify(imageElement)
        .then(results => {
            console.log('Classification results:', results);
            let highestConfidenceResult = results.reduce((max, result) =>
                result.confidence > max.confidence ? result : max,
                { label: '', confidence: 0 }
            );
            resultElement.innerText = `Label: ${highestConfidenceResult.label}\nConfidence: ${(highestConfidenceResult.confidence * 100).toFixed(2)}%`;
            currentImageData = highestConfidenceResult; // Store the current classification data
        })
        .catch(error => {
            console.error('Classification error:', error);
            resultElement.innerText = 'Error classifying image.';
        });
}

function handleCorrect() {
    alert('Correct! No further action needed.');
    // You can store correct results if needed (optional)
}

function handleIncorrect() {
    correctInput.style.display = 'block'; // Show the text input for the user to type the correct label
}

function saveCorrectLabel() {
    const correctLabel = correctLabelInput.value;
    if (correctLabel) {
        // Save the image and correct label to local storage (or a database)
        const feedbackData = {
            imageData: currentImageData,
            correctLabel: correctLabel
        };

        // Store feedback data in localStorage (you can modify this to store in a backend)
        let feedbackStorage = JSON.parse(localStorage.getItem('feedbackData')) || [];
        feedbackStorage.push(feedbackData);
        localStorage.setItem('feedbackData', JSON.stringify(feedbackStorage));

        alert('Label saved successfully!');

        // Reset the input field and hide the section
        correctLabelInput.value = '';
        correctInput.style.display = 'none';
    } else {
        alert('Please enter a valid label.');
    }
}

setup();
