import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps, TooltipDefaultDataProps, Calendar, Button } from '@samuel-santos-ui/react'

export default {
  title: 'Tooltip/Tooltip/Calendar',
  component: Tooltip,
  args: {
    variant: 'primary',
  },

  decorators: [
    () => {
      const defaultObj = {
        htmlElement: <Calendar />,
        message: `${new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })} - Disponível`
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