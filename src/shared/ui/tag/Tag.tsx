import type { HTMLAttributes, ReactNode } from 'react'

export type TagVariant = 'outline' | 'brand'

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  variant?: TagVariant
  className?: string
}

export const Tag = ({ children, className, variant, ...props }: TagProps) => (
  <span className={className} data-variant={variant} {...props}>
    {children}
  </span>
)
