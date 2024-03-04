import { Component } from 'react'
import { block } from 'bem-cn'

import './Footer.less'

const b = block('footer')

interface FooterProps {
  selectedDates: string[]
}

class Footer extends Component<FooterProps> {
  //   componentDidMount() {
  //     // Executed after component is mounted
  //   }

  //   componentDidUpdate(prevProps: FooterProps, prevState: FooterState) {
  //     // Executed after component updates
  //   }

  //   componentWillUnmount() {
  //     // Executed before component is unmounted
  //   }

  render() {
    return (
      <footer className={b()}>
        <div className={b('title')}>Footer</div>
      </footer>
    )
  }
}

export default Footer
