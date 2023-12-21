import React from 'react'
import style from "./Pipe.module.css"
import classNames from 'classnames'

interface Iprops extends React.HtmlHTMLAttributes<HTMLDivElement> {
}

const Pipe: React.FC<Iprops> = (props) => {
    const { className, ...shared } = props
    const pipeClass = classNames(style.pipe, className);

    return (
        <div className={pipeClass} {...shared} />
    )
}

export default Pipe;