export interface Shortcut {
  key: string[]; // Changed to array to support combinations
  name: string;
  description: string;
  vizType?: string; // e.g., 'v-wiggle'
}

export interface ShortcutCategory {
  name: string;
  items: Shortcut[];
}

export interface ExpressionFunction {
  name: string;
  syntax: string;
  description: string;
  exampleCode?: string; // Optional now
  vizType?: string;
}

export interface ExpressionCategory {
  name: string;
  items: ExpressionFunction[];
}

export interface EffectItem {
  name: string;
  description: string;
  category: string; // Keep for reference
  vizType?: string;
}

export interface EffectCategory {
  name: string;
  items: EffectItem[];
}

export enum Tab {
  SHORTCUTS = 'shortcuts',
  EXPRESSIONS = 'expressions',
  EFFECTS = 'effects',
}
