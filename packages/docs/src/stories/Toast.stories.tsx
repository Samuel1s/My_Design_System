import type { Meta, StoryObj } from '@storybook/react'
import { Box, Toast, ToastProps } from '@samuel-santos-ui/react'

export default {
  title: 'Alerts/Toast',
  component: Toast,
  args: {},
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

export const onButtonClick: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    handleScheduleDate: (date: Date) => Date
  }
}