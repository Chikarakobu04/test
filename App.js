import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ImageClassifier from './components/ImageClassifier';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="App">
      <h1>Image Classification App</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      {selectedImage && <ImageClassifier image={selectedImage} />}
    </div>
  );
}

export default App;
