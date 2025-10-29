"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useFilter } from "@react-aria/i18n";
import { getHeroUIComponents } from "../utils/heroUI";

import type { FontPickerProps, GoogleFont } from "../types";
import fontData from '../font-preview/fontInfo.json';
import { getFourVariants, checkFontLoaded, loadGoogleFont, sanitizeFontName, createFontPreview } from '../utils/fontUtils';
import '../styles/font-picker.css';
import '../font-preview/font-previews.css';

// HeroUI Autocomplete-based font picker component with Google Fonts integration
export function FontPicker({ 
  showFontPreview = true, 
  loadAllVariants = false,
  onFontsLoaded,
  fontsLoadedTimeout = 3000,
  ...autocompleteProps 
}: FontPickerProps) {
  const [loading, setLoading] = useState(false);
  
  // Get HeroUI components dynamically
  const { Autocomplete, AutocompleteItem } = getHeroUIComponents();
  
  // Use static font data
  const fonts: GoogleFont[] = useMemo(() => fontData as unknown as GoogleFont[], []);

  // Intelligent font loading with 4-variant optimization (only for selected fonts)
  const loadGoogleFontOptimized = (fontFamily: string) => {
    const font = fonts.find(f => f.name === fontFamily);
    if (!font) return;

    const variants = loadAllVariants 
      ? font.variants 
      : getFourVariants(font.variants);

    loadGoogleFont(fontFamily, variants);
  };
  
  // Font loading detection
  useEffect(() => {
    if (!onFontsLoaded || !autocompleteProps.value || typeof autocompleteProps.value !== 'string') return;

    const checkLoading = async () => {
      try {
        const loaded = await checkFontLoaded(autocompleteProps.value as string, fontsLoadedTimeout);
        onFontsLoaded(loaded);
      } catch (error) {
        onFontsLoaded(false);
      }
    };

    checkLoading();
  }, [autocompleteProps.value, onFontsLoaded, fontsLoadedTimeout]);
  
  // Convert fonts to a flat list for simple display
  const allFonts = useMemo(() => {
    return fonts.map((font: GoogleFont) => ({
      key: font.name,
      label: font.name,
      category: font.category,
      fontFamily: font.name
    }));
  }, [fonts]);

  const handleSelectionChange = (key: React.Key | null) => {
    // Call the original onSelectionChange if provided (always call, even if null)
    if (autocompleteProps.onSelectionChange) {
      autocompleteProps.onSelectionChange(key as any);
    }
    
    if (key) {
      const fontName = key as string;
      
      // Load the selected font with intelligent variant selection
      if (showFontPreview && fontName) {
        setLoading(true);
        loadGoogleFontOptimized(fontName);
        
        // Use font loading detection to set loading to false
        checkFontLoaded(fontName, fontsLoadedTimeout).then((loaded) => {
          setLoading(false);
        }).catch(() => {
          setLoading(false);
        });
      }
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      // Show loading state briefly when opening to simulate data loading
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  // Extract value and map it to selectedKey for HeroUI Autocomplete
  const { value, ...restProps } = autocompleteProps;
  
  // Convert value to Key type (string | number | null | undefined)
  // React Aria Key is string | number, so we filter out arrays and bigint
  const selectedKey = (typeof value === 'string' || typeof value === 'number') 
    ? (value as string | number)
    : undefined;
  
  return (
    <Autocomplete
      {...restProps}
      selectedKey={selectedKey}
      onSelectionChange={handleSelectionChange}
      onOpenChange={handleOpenChange}
      isLoading={loading}
      allowsCustomValue={false}
      listboxProps={{
        emptyContent: loading ? "Loading fonts..." : "No fonts found",
        ...autocompleteProps.listboxProps
      }}
      classNames={{
        base: "w-full",
        listboxWrapper: "max-h-64",
        ...autocompleteProps.classNames
      }}
    >
      {allFonts.map((font) => {
        const fontName = font.fontFamily;
        const category = font.category;
        return (
          <AutocompleteItem
            key={fontName}
            textValue={fontName}
          >
            {(() => {
              const preview = createFontPreview(fontName, category);
              return (
                <div className="flex items-center gap-2 w-full">
                  <div className="flex-1 min-w-0">
                    <div 
                      className={`${preview.className} text-sm font-normal truncate`}
                      style={{
                        ...preview.style,
                        color: 'transparent', // Hide text to show sprite
                        textIndent: '-9999px', // Alternative method to hide text
                        overflow: 'hidden'
                      }}
                      title={`Preview of ${fontName} font`}
                    >
                      {preview.text}
                    </div>
                  </div>
                  <span className="text-tiny text-default-400 ml-2 flex-shrink-0 capitalize">
                    {category}
                  </span>
                </div>
              );
            })()}
          </AutocompleteItem>
        );
      })}
    </Autocomplete>
  );
}
