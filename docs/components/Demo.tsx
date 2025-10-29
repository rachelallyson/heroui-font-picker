"use client";

import React, { useState } from "react";
// @ts-expect-error - font picker types may not resolve in build context
import { FontPicker } from "@rachelallyson/heroui-font-picker";

export default function Demo() {
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [selectedFontField, setSelectedFontField] = useState("Roboto");

  const styles = {
    container: {
      margin: '2rem 0',
      padding: '2rem',
      backgroundColor: '#f9fafb',
      borderRadius: '12px',
      border: '1px solid #e5e7eb'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '1.5rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    cardText: {
      color: '#6b7280',
      marginBottom: '1rem',
      fontSize: '0.875rem'
    },
    resultBox: {
      marginTop: '1rem',
      padding: '0.75rem',
      backgroundColor: '#f3f4f6',
      borderRadius: '6px',
      fontSize: '0.875rem',
      color: '#374151'
    },
    testSection: {
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e5e7eb'
    },
    testTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    testText: {
      color: '#6b7280',
      marginBottom: '1rem',
      fontSize: '0.875rem'
    },
    fontTest: {
      marginTop: '1rem'
    },
    fontTestItem: {
      padding: '1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      marginBottom: '1rem',
      backgroundColor: '#f9fafb'
    },
    fontTestTitle: {
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#1f2937'
    },
    fontTestText: {
      fontSize: '1.25rem',
      lineHeight: '1.5'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {/* Direct FontPicker Component */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>FontPicker Component</h3>
          <p style={styles.cardText}>
            Direct integration with HeroUI Autocomplete and all its props.
          </p>
          
          <FontPicker
            label="Choose Font"
            description="Select your preferred font"
            value={selectedFont}
            onSelectionChange={(key) => setSelectedFont(key as string)}
            placeholder="Choose a font..."
            showFontPreview={true}
            size="md"
            variant="bordered"
            isRequired
          />
          
          <div style={styles.resultBox}>
            <strong>Selected Font:</strong> {selectedFont}
          </div>
        </div>

        {/* FontPickerField Component */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>FontPickerField Component</h3>
          <p style={styles.cardText}>
            Wrapper component for easier form integration and state management.
          </p>
          
          <FontPicker
            label="Choose Font (Alternative)"
            description="Another font picker for comparison"
            value={selectedFontField}
            onSelectionChange={(key) => setSelectedFontField(key as string)}
            placeholder="Choose a font..."
            showFontPreview={true}
            size="lg"
            variant="faded"
            isClearable
          />
          
          <div style={styles.resultBox}>
            <strong>Selected Font:</strong> {selectedFontField}
          </div>
        </div>
      </div>

      {/* Live Font Test Section */}
      <div style={styles.testSection}>
        <h3 style={styles.testTitle}>Live Font Preview</h3>
        <p style={styles.testText}>
          See how your selected fonts look in practice:
        </p>
        
        <div style={styles.fontTest}>
          <div style={styles.fontTestItem}>
            <h4 style={styles.fontTestTitle}>Font 1: {selectedFont}</h4>
            <p 
              style={{
                ...styles.fontTestText,
                fontFamily: selectedFont
              }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          
          <div style={styles.fontTestItem}>
            <h4 style={styles.fontTestTitle}>Font 2: {selectedFontField}</h4>
            <p 
              style={{
                ...styles.fontTestText,
                fontFamily: selectedFontField
              }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
