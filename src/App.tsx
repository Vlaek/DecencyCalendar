import { Component } from 'react'
import CalendarComponent from './components/Calender/CalendarComponent'
import 'antd/dist/reset.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

interface AppState {
  dates: string[]
}

class App extends Component<AppState> {
  loadSelectedDatesFromLocalStorage = () => {
    const storedSelectedDates = localStorage.getItem('selectedDates')
    return storedSelectedDates ? JSON.parse(storedSelectedDates) : []
  }

  state = {
    dates: this.loadSelectedDatesFromLocalStorage(),
  }

  onChangeDates = (dates: string[]) => {
    this.setState({ dates: dates })
  }

  render() {
    const { dates } = this.state

    return (
      <div className='container'>
        <Header />
        <CalendarComponent selectedDates={dates} onChangeDates={this.onChangeDates} />
        <Footer selectedDates={dates} />
      </div>
    )
  }
}

export default App
