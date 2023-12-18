import { ReactNode } from 'react'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipArrow } from './styles'

export interface TooltipProps {
    htmlElement: ReactNode,
    message: string
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipRadix.Provider>
        <TooltipRadix.Root>
            <TooltipRadix.Trigger asChild>
                {props.htmlElement}  
            </TooltipRadix.Trigger>

            <TooltipRadix.Portal>
                <TooltipContent>
                    {props.message}
                    <TooltipArrow />
                </TooltipContent>
            </TooltipRadix.Portal>
        </TooltipRadix.Root>
    </TooltipRadix.Provider> 
  )
}

Tooltip.displayName = 'Tooltip'