"use client";

import React, { useState, useEffect } from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Button, Card, CardBody, CardHeader, Chip, Switch } from "@heroui/react";
import { FontPicker } from '@rachel-allyson/heroui-font-picker';
import { useTheme } from "next-themes";



export default function DemoPage() {
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [selectedFontPicker, setSelectedFontPicker] = useState("Roboto");
  const [selectedFontField, setSelectedFontField] = useState("Open Sans");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8`}>
      <div className="max-w-6xl mx-auto bg-content1 rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold  mb-4">HeroUI Font Picker Demo</h1>
          <p className="text-lg ">Testing HeroUI components with Tailwind CSS v4 and custom theming</p>
          
          {/* Package Support Info */}
          <div className="mt-4">
            <Chip 
              color="success" 
              variant="flat"
              size="sm"
            >
              Dual Package Support
            </Chip>
            <p className="text-xs  mt-1">
              Supports both @heroui/react and @heroui/autocomplete
            </p>
          </div>
          
          {/* Dark Mode Toggle */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className={`text-sm `}>Light</span>
            <Switch
              isSelected={theme === 'dark'}
              onValueChange={(isSelected) => setTheme(isSelected ? 'dark' : 'light')}
              color="primary"
            />
            <span className={`text-sm `}>Dark</span>
          </div>
          <p className="text-xs  mt-2">
            {theme === 'dark' ? 'Dark mode is active' : 'Light mode is active'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Basic Autocomplete */}
          <Card className="">
            <CardHeader>
              <h2 className="text-2xl font-semibold ">Basic Autocomplete</h2>
            </CardHeader>
            <CardBody>
              <Autocomplete
                label="Choose Font"
                description="Select your preferred font"
                selectedKey={selectedFont}
                onSelectionChange={(key) => setSelectedFont(key as string)}
                placeholder="Choose a font..."
                size="md"
                variant="bordered"
                className="mb-4"
                color="primary"
              >
                <AutocompleteItem key="Inter">Inter</AutocompleteItem>
                <AutocompleteItem key="Roboto">Roboto</AutocompleteItem>
                <AutocompleteItem key="Open Sans">Open Sans</AutocompleteItem>
                <AutocompleteItem key="Lato">Lato</AutocompleteItem>
              </Autocomplete>
              
              <div className="mt-4 p-3  rounded-md">
                <span className="font-semibold">Selected Font:</span> 
                <Chip color="primary" variant="flat" className="ml-2">{selectedFont}</Chip>
              </div>
            </CardBody>
          </Card>

          {/* FontPicker Component */}
          <Card className="">
            <CardHeader>
              <h2 className="text-2xl font-semibold ">FontPicker Component</h2>
            </CardHeader>
            <CardBody>
              <p className=" mb-4">Testing the FontPicker component with Google Fonts integration:</p>
              
              <FontPicker
                label="Choose Font"
                description="Select your preferred font with preview"
                value={selectedFontPicker}
                onSelectionChange={(key) => setSelectedFontPicker(key as string)}
                placeholder="Choose a font..."
                showFontPreview={true}
                size="md"
                variant="bordered"
                className="mb-4"
                color="primary"
              />
              
              <div className="mt-4 p-3  rounded-md">
                <span className="font-semibold">Selected Font:</span> 
                <Chip color="primary" variant="flat" className="ml-2">{selectedFontPicker}</Chip>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Additional FontPicker Example */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold ">Additional FontPicker Example</h2>
            <p className="">Testing another FontPicker with different configuration:</p>
          </CardHeader>
          <CardBody>
            <FontPicker
              label="Choose Font (Alternative Config)"
              description="Select your preferred font with different settings"
              value={selectedFontField}
              onSelectionChange={(key) => setSelectedFontField(key as string)}
              placeholder="Choose a font..."
              showFontPreview={true}
              size="lg"
              variant="faded"
              isClearable={true}
              color="secondary"
            />
            
            <div className="mt-4 p-3  rounded-md">
              <span className="font-semibold">Selected Font:</span> 
              <Chip color="secondary" variant="flat" className="ml-2">{selectedFontField}</Chip>
            </div>
          </CardBody>
        </Card>

        {/* Font Test */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold ">Live Font Test</h2>
            <p className="">See how the selected fonts look in practice:</p>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="">
                <CardBody>
                  <h3 className="font-semibold mb-2 ">Basic Autocomplete: {selectedFont}</h3>
                  <p 
                    className="text-2xl leading-relaxed"
                    style={{ fontFamily: selectedFont }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                </CardBody>
              </Card>
              
              <Card className="">
                <CardBody>
                  <h3 className="font-semibold mb-2 ">FontPicker: {selectedFontPicker}</h3>
                  <p 
                    className="text-2xl leading-relaxed"
                    style={{ fontFamily: selectedFontPicker }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                </CardBody>
              </Card>
              
              <Card className="">
                <CardBody>
                  <h3 className="font-semibold mb-2 ">FontPickerField: {selectedFontField}</h3>
                  <p 
                    className="text-2xl leading-relaxed"
                    style={{ fontFamily: selectedFontField }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>

        {/* Tailwind Test Section */}
        <Card className="bg-primary-50 dark:bg-primary-900/20">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-200">Tailwind CSS v4 + HeroUI Test</h2>
            <p className="text-primary-600 dark:text-primary-300">Testing various Tailwind utility classes with HeroUI components:</p>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-r from-pink-500 to-rose-500 ">
                <CardBody className="text-center">
                  <h3 className="font-bold text-lg">Gradient</h3>
                  <p className="text-sm">Pink to Rose</p>
                </CardBody>
              </Card>
              
              <Card className="bg-success-100 dark:bg-success-900/20 border-2 border-success-500">
                <CardBody className="text-center">
                  <h3 className="font-bold text-lg text-success-800 dark:text-success-200">Success</h3>
                  <p className="text-sm text-success-600 dark:text-success-300">Green theme</p>
                </CardBody>
              </Card>
              
              <Card className="bg-secondary-200 hover:bg-secondary-300 transition-colors duration-300 cursor-pointer">
                <CardBody className="text-center">
                  <h3 className="font-bold text-lg text-secondary-800">Hover</h3>
                  <p className="text-sm text-secondary-600">Purple hover</p>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}