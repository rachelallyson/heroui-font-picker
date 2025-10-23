"use client";

import React, { useState } from "react";
import { FontPicker, FontPickerField } from "@rachelallyson/heroui-font-picker";

export default function DemoPage() {
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [selectedFontField, setSelectedFontField] = useState("Roboto");

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#6b7280'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    card: {
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      padding: '1.5rem',
      border: '1px solid #e5e7eb'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    cardText: {
      color: '#6b7280',
      marginBottom: '1rem'
    },
    resultBox: {
      marginTop: '1rem',
      padding: '0.75rem',
      backgroundColor: '#f3f4f6',
      borderRadius: '6px',
      fontSize: '0.875rem',
      color: '#374151'
    },
    features: {
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      border: '1px solid #e5e7eb'
    },
    featuresTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem'
    },
    featureCard: {
      padding: '1rem',
      borderRadius: '6px',
      backgroundColor: 'white',
      border: '1px solid #e5e7eb'
    },
    featureTitle: {
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    featureText: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    testSection: {
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      border: '1px solid #e5e7eb'
    },
    testTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    testText: {
      color: '#6b7280',
      marginBottom: '1rem'
    },
    fontTest: {
      marginTop: '1rem'
    },
    fontTestItem: {
      padding: '1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      marginBottom: '1rem',
      backgroundColor: 'white'
    },
    fontTestTitle: {
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#1f2937'
    },
    fontTestText: {
      fontSize: '1.5rem',
      lineHeight: '1.5'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.title}>HeroUI Font Picker Demo</h1>
          <p style={styles.subtitle}>
            Testing the @rachelallyson/heroui-font-picker package
          </p>
        </div>

        <div style={styles.grid}>
          {/* Direct FontPicker Component */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Direct FontPicker Component</h2>
            <p style={styles.cardText}>
              Using the FontPicker component directly with all HeroUI Autocomplete props.
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
            <h2 style={styles.cardTitle}>FontPickerField Component</h2>
            <p style={styles.cardText}>
              Using the FontPickerField wrapper component for easier integration.
            </p>
            
            <FontPickerField
              label="Choose Font (Field Wrapper)"
              description="Select your preferred font using the wrapper"
              value={selectedFontField}
              onChange={setSelectedFontField}
              fontPickerProps={{
                showFontPreview: true,
                loadAllVariants: false,
                size: "lg",
                variant: "faded",
                isClearable: true,
              }}
            />
            
            <div style={styles.resultBox}>
              <strong>Selected Font:</strong> {selectedFontField}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div style={styles.features}>
          <h2 style={styles.featuresTitle}>Package Features</h2>
          <div style={styles.featuresGrid}>
            <div style={{...styles.featureCard, backgroundColor: '#dbeafe'}}>
              <h3 style={{...styles.featureTitle, color: '#1e40af'}}>Google Fonts Integration</h3>
              <p style={{...styles.featureText, color: '#1d4ed8'}}>Access to 1,785+ Google Fonts with intelligent loading</p>
            </div>
            <div style={{...styles.featureCard, backgroundColor: '#dcfce7'}}>
              <h3 style={{...styles.featureTitle, color: '#166534'}}>Sprite Previews</h3>
              <p style={{...styles.featureText, color: '#16a34a'}}>Instant font previews using optimized sprite images</p>
            </div>
            <div style={{...styles.featureCard, backgroundColor: '#f3e8ff'}}>
              <h3 style={{...styles.featureTitle, color: '#7c3aed'}}>HeroUI Compatible</h3>
              <p style={{...styles.featureText, color: '#9333ea'}}>Works with both @heroui/react and @heroui/autocomplete</p>
            </div>
            <div style={{...styles.featureCard, backgroundColor: '#fed7aa'}}>
              <h3 style={{...styles.featureTitle, color: '#ea580c'}}>TypeScript Support</h3>
              <p style={{...styles.featureText, color: '#f97316'}}>Full TypeScript support with proper type definitions</p>
            </div>
            <div style={{...styles.featureCard, backgroundColor: '#fecaca'}}>
              <h3 style={{...styles.featureTitle, color: '#dc2626'}}>Intelligent Loading</h3>
              <p style={{...styles.featureText, color: '#ef4444'}}>Loads only essential font variants for optimal performance</p>
            </div>
            <div style={{...styles.featureCard, backgroundColor: '#e0e7ff'}}>
              <h3 style={{...styles.featureTitle, color: '#4338ca'}}>Flexible Integration</h3>
              <p style={{...styles.featureText, color: '#6366f1'}}>Easy integration with react-hook-form and other form libraries</p>
            </div>
          </div>
        </div>

        {/* Test Section */}
        <div style={styles.testSection}>
          <h2 style={styles.testTitle}>Live Font Test</h2>
          <p style={styles.testText}>
            See how the selected fonts look in practice:
          </p>
          
          <div style={styles.fontTest}>
            <div style={styles.fontTestItem}>
              <h3 style={styles.fontTestTitle}>Font 1: {selectedFont}</h3>
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
              <h3 style={styles.fontTestTitle}>Font 2: {selectedFontField}</h3>
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
    </div>
  );
}
