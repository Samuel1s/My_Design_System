import { X } from 'phosphor-react'
import { Button } from '../Button'
import { useState } from 'react'
import * as ToastRadix from '@radix-ui/react-toast'
import { ToastContent, ToastTitle, ToastDescription, ToastViewport } from './styles'

export interface ToastProps {
  title: string
  handleScheduleDate: Date 
}

export function Toast({title, handleScheduleDate }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <ToastRadix.Provider swipeDirection="right">
      <Button onClick={() => { setOpen(true), handleScheduleDate }} >
        Add to calendar
      </Button>

      <ToastContent open={open} onOpenChange={setOpen}>
        <div>
            <ToastTitle>{title}</ToastTitle>
            <ToastRadix.Action asChild altText="Goto schedule to undo">
                <Button variant={'tertiary'} size={'sm'}><X size={18}></X></Button>
            </ToastRadix.Action>
        </div>
        <ToastDescription asChild>
          <time>
            { new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(handleScheduleDate)}
          </time>
        </ToastDescription>
      </ToastContent>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}