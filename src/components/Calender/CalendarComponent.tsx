import { Component } from 'react'
import { Calendar } from 'antd'
import { Dayjs } from 'dayjs'
import './CalendarComponent.less'

interface CalendarComponentProps {
  selectedDates: string[]
  onChangeDates: (dates: string[]) => void
}

class CalendarComponent extends Component<CalendarComponentProps> {
  componentDidMount() {
    this.applyStylesToSelectedDates()
  }

  componentDidUpdate() {
    this.removeStylesFromMonth()
    this.applyStylesToSelectedDates()
  }

  applyStylesToSelectedDates = () => {
    this.removeStylesFromMonth()
    const { selectedDates } = this.props
    selectedDates.forEach((dateString) => {
      const selectedNode = document.querySelector(`.ant-picker-cell[title="${dateString}"]`)
      if (selectedNode) {
        selectedNode.setAttribute('data-style', 'not-decent')
      }
    })
  }

  saveSelectedDatesToLocalStorage = (selectedDates: string[]) => {
    localStorage.setItem('selectedDates', JSON.stringify(selectedDates))
  }

  onDateSelect = (date: Dayjs) => {
    const { selectedDates } = this.props
    const dateString = date.format('YYYY-MM-DD')
    const selectedNode = document.querySelector(`.ant-picker-cell[title="${dateString}"]`)

    if (selectedNode) {
      if (selectedDates.includes(dateString)) {
        this.props.onChangeDates(selectedDates.filter((d) => d !== dateString))
        selectedNode.removeAttribute('data-style')
      } else {
        this.props.onChangeDates([...selectedDates, dateString])
        selectedNode.setAttribute('data-style', 'not-decent')
      }
    }
  }

  removeStylesFromMonth = () => {
    const allCells = document.querySelectorAll('.ant-picker-cell')
    allCells.forEach((cell) => {
      cell.removeAttribute('data-style')
    })
  }

  render() {
    const { selectedDates } = this.props
    this.saveSelectedDatesToLocalStorage(selectedDates)

    return (
      <Calendar
        onSelect={this.onDateSelect}
        style={{ userSelect: 'none' }}
        onChange={() => {
          this.removeStylesFromMonth()
          setTimeout(() => {
            this.applyStylesToSelectedDates()
          }, 100)
        }}
      />
    )
  }
}

export default CalendarComponent
