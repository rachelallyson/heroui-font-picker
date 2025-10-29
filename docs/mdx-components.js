import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import Demo from './components/Demo'

const themeComponents = getThemeComponents()

export function useMDXComponents(components) {
    return {
        ...themeComponents,
        ...components,
        Demo
    }
}

