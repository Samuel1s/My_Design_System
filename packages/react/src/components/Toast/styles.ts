
import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const slideIn = keyframes({
    from: {
        transform: 'translateX(calc(100% + 25px)))'
    },
    to: {
        transform: 'translateX(0)'
    }
})

const hide = keyframes({
    from: {
        opacity: 1
    },
    to: {
        opacity: 0
    }
})

const swipeOut = keyframes({
    from: {
        transform: 'translateX(100px))'
      },
      to: {
        transform: 'translateX(calc(100% + 25px))'
      }
})

export const ToastContent= styled(Toast.Root, {
    borderRadius: '$xs',
    padding: '$3 $5',
    color: '$gray100',
    backgroundColor: '$gray900',

    div: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        button: {
            all: 'unset',
        }
    },

    '&[data-state="open"]': {
        animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },

    '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`
    },

    '&[data-swipe="move"]': {
        transform: 'translateX(100px))'
    },

    '&[data-swipe="cancel"]': {
        transform: 'translateX(0)',
        transition: 'transform 200ms ease-out'
    },

    '&[data-swipe="end"]': {
        animation: `${swipeOut} 100ms ease-out`
    }
})

export const ToastTitle = styled(Toast.Title, {
    color: '$white',
    fontWeight: '$bold',
    fontSize: '$xl'
})

export const ToastDescription= styled(Toast.Description, {
    color: '$gray200',
    fontWeight: '$regular',
    fontSize: '$md',
    padding: '$2 0'
})

export const ToastViewport= styled(Toast.Viewport, {
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: '$8',
    width: '$60',
    listStyle: 'none',
    zIndex: 1,
})

