import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps, Button, Calendar } from '@samuel-santos-ui/react'

export default {
  title: 'Alerts/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', alignItems: "center", justifyContent: "center" }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const onButtonHover: StoryObj<TooltipProps> = {
  args: {
    htmlElement: <Button>Hover</Button>,
    message: 'some text message'
  }
}

export const onCalendar: StoryObj<TooltipProps> = {
  args: {
    htmlElement: <Calendar />,
  },
}