import * as React from 'react'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import * as ToastRadix from '@radix-ui/react-toast'
import { ToastContent, ToastTitle, ToastDescription, ToastViewport } from './styles'

export type ToastProps = ComponentProps<typeof ToastRadix.Root>

export function Toast(props: ToastProps) {
  const [open, setOpen] = React.useState(false)
  const eventDateRef = React.useRef(new Date())
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <ToastRadix.Provider swipeDirection="right">
      <button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = scheduleDate(new Date())
            setOpen(true)
          }, 100)
        }}
      >
        Add to calendar
      </button>

      <ToastContent open={open} onOpenChange={setOpen}>
        <div>
            <ToastTitle>Agendamento realizado</ToastTitle>
            <ToastRadix.Action asChild altText="Goto schedule to undo">
                <button><X size={24}></X></button>
            </ToastRadix.Action>
        </div>
        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastDescription>
      </ToastContent>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}

function scheduleDate(date: any) {
  const inOneWeek = date.setDate(date.getDate())
  return new Date(inOneWeek)
}

function prettyDate(date: any) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(date)
}
