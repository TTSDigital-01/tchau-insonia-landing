/**
 * @version 2.3
 * @author "M (Experto 5 - BIZ-PLAN-PRO)"
 * @date 2025-08-26
 * @description Refactoriza las variantes de tamaño para usar padding vertical (py) en lugar de altura fija (h-). Esto permite que la altura del botón se expanda para acomodar contenido de múltiples líneas, solucionando problemas en vistas móviles.
 */
// RUTA: app/components/ui/Button.tsx

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-sans font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent',
        secondary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
        ghost: 'bg-transparent text-primary hover:bg-gray-200 focus:ring-primary',
      },
      size: {
        default: 'px-8 py-3',
        sm: 'px-4 py-2 rounded-md',
        lg: 'px-10 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
      asChild?: boolean;
    }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const finalClassName = twMerge(clsx(buttonVariants({ variant, size, className })));
    
    return (
      <Comp
        className={finalClassName}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };