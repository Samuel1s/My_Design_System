import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps, TooltipDefaultDataProps, Button } from '@samuel-santos-ui/react'

export default {
  title: 'Tooltip/Tooltip/Button',
  component: Tooltip,
  args: {
    variant: 'primary',
  },

  decorators: [
    () => {
      const defaultObj = {
        htmlElement: <Button />,
        message: 'Some text message'
      } as TooltipDefaultDataProps

      return (
        <Box
          as="label"
          css={{ display: 'flex', alignItems: "center", justifyContent: "center" }}
        >
          <Tooltip {...defaultObj} />
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}