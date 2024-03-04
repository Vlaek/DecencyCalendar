import { FC } from 'react'
import { block } from 'bem-cn'

import './Header.less'

const b = block('header')

const Header: FC = () => {
  return (
    <header className={b()}>
      <div className={b('title')}>Decency Calendar</div>
    </header>
  )
}

export default Header
