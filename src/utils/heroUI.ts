// Path-mapped imports for HeroUI components
// Uses #ui path mapping which resolves to individual packages by default
import { Autocomplete, AutocompleteItem, AutocompleteSection } from '#ui';

// Utility to get HeroUI components with path mapping
export function getHeroUIComponents() {
  return {
    source: '#ui (individual packages)',
    Autocomplete,
    AutocompleteItem,
    AutocompleteSection
  };
}

// Type for the HeroUI components
export interface HeroUIComponents {
  source: string;
  Autocomplete: any;
  AutocompleteItem: any;
  AutocompleteSection: any;
}
