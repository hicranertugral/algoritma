import React from 'react'
import style from "./Screen.module.css"
import classNames from 'classnames'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Screen: React.FC<IProps> = (props) => {
    const { className, ...shared } = props;
    const screenClass = classNames(style.screen, className);

    return (
        <div className={screenClass} {...shared} />
    )
}

export default Screen;