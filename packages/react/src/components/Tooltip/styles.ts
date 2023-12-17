import * as Tooltip from '@radix-ui/react-tooltip'
import { styled, keyframes } from '../../styles'

export const TooltipArrow = styled(Tooltip.Arrow, {
    fill: '$gray900'
})

const slideDownAndFade = keyframes({
    from: {
      opacity: 0,
      transform: 'translateY("$2")',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    }
})

export const TooltipContent= styled(Tooltip.Content, {
    borderRadius: '$xs',
    padding: '$3 $4',
    color: '$gray100',
    backgroundColor: '$gray900',

    '&[data-state="delayed-open"]["data-side="top"]': {
        animation: `${slideDownAndFade} 200ms ease-out`,
    },
})


