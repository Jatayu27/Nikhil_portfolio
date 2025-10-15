export interface Theme {
  id: string;
  name: string;
  type: 'light' | 'dark';
  colors: {
    primary: string;
    primaryLight: string;
    primaryLighter: string;
    accent: string;
    text: string;
    textSecondary: string;
    background: string;
  };
}

export const themes: Theme[] = [
  // Dark Themes
  {
    id: 'midnight-sophistication',
    name: 'Midnight Sophistication',
    type: 'dark',
    colors: {
      primary: '#0A1128',
      primaryLight: '#1A2744',
      primaryLighter: '#14213D',
      accent: '#D4AF37',
      text: '#F5F1E8',
      textSecondary: '#708090',
      background: '#0A1128',
    },
  },
  {
    id: 'charcoal-elite',
    name: 'Charcoal Elite',
    type: 'dark',
    colors: {
      primary: '#1A1A1D',
      primaryLight: '#2E2E32',
      primaryLighter: '#3A3A3F',
      accent: '#4ECDC4',
      text: '#F5F5F5',
      textSecondary: '#A0A0A8',
      background: '#1A1A1D',
    },
  },
  // Light Themes
  {
    id: 'ice-crystal',
    name: 'Ice Crystal',
    type: 'light',
    colors: {
      primary: '#F0F5FA',
      primaryLight: '#F7FAFC',
      primaryLighter: '#FFFFFF',
      accent: '#0891B2',
      text: '#0F172A',
      textSecondary: '#475569',
      background: '#F0F5FA',
    },
  },
  {
    id: 'cream-elegance',
    name: 'Cream Elegance',
    type: 'light',
    colors: {
      primary: '#F5F1E8',
      primaryLight: '#FFFFFF',
      primaryLighter: '#FAF8F3',
      accent: '#2C3E50',
      text: '#2C3E50',
      textSecondary: '#5D6D7E',
      background: '#F5F1E8',
    },
  },
];

export const getThemeById = (id: string): Theme => {
  return themes.find(theme => theme.id === id) || themes[0];
};
