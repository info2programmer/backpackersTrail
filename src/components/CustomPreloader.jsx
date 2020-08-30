import React from 'react'
import { Block,Preloader } from 'framework7-react'

export default function CustomPreloader() {
    return (
        <Block className="centErlement">
            <div className="preloaderContainer"><Preloader color="multi"></Preloader></div>
        </Block>
    )
}
