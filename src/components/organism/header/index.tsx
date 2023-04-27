import classNames from 'classnames/bind'
import style from './header.module.scss'
const cx = classNames.bind(style)


const Header = () => {
  return <header className={cx(`header`)}>header</header>
}

export default Header;