import dayjs from 'dayjs'
import { Tooltip } from '../Tooltip'
import { useMemo, useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { getWeekDays } from '../../utils/get-week-days'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>
}

export type CalendarWeeks = CalendarWeek[]


export function Calendar() {
    const [currentDate, setCurrentDate] = useState(() => {
        return dayjs().set('date', 1)
    })

    function handlePreviousMonth() {
        const previousMonth = currentDate.subtract(1, 'month')

        setCurrentDate(previousMonth)
    }

    function handleNextMonth() {
        const nextMonth = currentDate.add(1, 'month')

        setCurrentDate(nextMonth)
    }

    const shortWeekDays = getWeekDays({ short: true })

    const currentMonth = currentDate.format('MMMM')
    const currentYear = currentDate.format('YYYY')

    const calendarWeeks = useMemo(() => {
        const daysInMonthArray = Array.from({ length: currentDate.daysInMonth() }).map((_, i) => { return currentDate.set('date', i + 1) })

        const firstWeekDay = currentDate.get('day')

        const previousMonthFillArray = Array.from({ length: firstWeekDay }).map((_, i) => {
            return currentDate.subtract(i + 1, 'day')
        }).reverse()

        const lastDayInCurrentMonth = currentDate.set('date', currentDate.daysInMonth())
        const lastWeekDay = lastDayInCurrentMonth.get('day')

        const nextMonthFillArray = Array.from({ length: 7 - (lastWeekDay + 1) }).map((_, i) => {
        return lastDayInCurrentMonth.add(i + 1, 'day')
        })

        const calendarDays = [
        ...previousMonthFillArray.map((date) => {
            return { date, disabled: true }
        }),
        ...daysInMonthArray.map((date) => {
            return { date, disabled: false }
        }),
        ...nextMonthFillArray.map((date) => {
            return { date, disabled: true }
        }),
        ]

        const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
            (weeks, _, i, original) => {
                const isNewWeek = i % 7 === 0

                if (isNewWeek) {
                    weeks.push({
                        week: i / 7 + 1,
                        days: original.slice(i, i + 7),
                    })
                }
                return weeks
            },
            [],
        )

        return calendarWeeks
    }, [currentDate])

    return (
        <CalendarContainer>
            <CalendarHeader>
                <CalendarTitle>
                {currentMonth} <span>{currentYear}</span>
                </CalendarTitle>

                <CalendarActions>
                <button onClick={handlePreviousMonth} title="Previous month">
                    <CaretLeft />
                </button>
                <button onClick={handleNextMonth} title="Next month">
                    <CaretRight />
                </button>
                </CalendarActions>
            </CalendarHeader>

            <CalendarBody>
                <thead>
                <tr>
                    {shortWeekDays.map((weekDay) => (
                    <th key={weekDay}>{weekDay}.</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {calendarWeeks.map(({ week, days }) => {
                    return (
                    <tr key={week}>
                        {days.map(({ date, disabled }) => {
                        return (
                            <td key={date.toString()}>
                                <Tooltip 
                                    htmlElement={<CalendarDay disabled={disabled}>{date.get('date')} </CalendarDay>} 
                                    message={ 
                                        new Date(date.get('year'),date.get('month'),(date.get('date'))).toLocaleString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }) + `${disabled ? ' - Indisponível' : ' - Disponível'}`
                                    }    
                                />
                            </td>
                        )
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </CalendarBody>
        </CalendarContainer>
    )
}

Calendar.displayName = 'Calendar'