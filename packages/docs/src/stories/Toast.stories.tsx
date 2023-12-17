import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text, Toast, ToastProps } from '@samuel-santos-ui/react'

export default {
  title: 'Toast',
  component: Toast,

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', alignItems: "flex-start", height: '50vh'  }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}