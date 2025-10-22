import React, { useState } from 'react';
import { FontPicker } from './dist/index.js';

function Example() {
  const [selectedFont, setSelectedFont] = useState('Inter');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Font Picker Example</h1>
      <FontPicker
        value={selectedFont}
        onChange={setSelectedFont}
        placeholder="Choose a font..."
        showFontPreview={true}
      />
      <p className="mt-4">Selected font: {selectedFont}</p>
    </div>
  );
}

export default Example;
