export type Variant = 'primary' | 'subtle' | 'accent' | 'disabled'
export type Size = 'sm' | 'md' | 'lg'
export type AppTheme = 'light' | 'dark'
export interface FeatureV9Item {
  image: string
  headerText: string
  href?: string
  action?: (...args: any) => any
  buttonVariant?: Variant
  buttonText: string
  description: string
}
