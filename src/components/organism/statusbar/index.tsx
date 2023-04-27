import classNames from "classnames/bind";
import style from "./statusbar.module.scss";
const cx = classNames.bind(style);

const StatusBar = () => {
  return <div className={cx(`statusbar`)}>StatusBar</div>;
};

export default StatusBar;
