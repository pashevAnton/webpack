import Post from "@models/Post";
import * as $ from 'jquery'
import './styles/styles.css'
import json from "./assets/json"
import xml from './assets/data.xml'
import WebpackLogo from "./assets/webpack-logo"
import csv from "./assets/data.csv"
import './styles/less.less'
import './styles/scss.scss'
import './babel'
import React from 'react'
import {render} from 'react-dom'

const post = new Post('Webpack Post Title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

const App = () => {
    return (
        <div className="container">
            <h1>Webpack course</h1>
            <hr/>
            <div className="logo"></div>
            <hr/>
            <pre></pre>
            <hr/>
            <div className="box">
                <h2>Less</h2>
            </div>
            <hr/>
            <div className="card">
                <h2>SCSS</h2>
            </div>
        </div>
    )
}
render(<App/>, document.getElementById('app'))

console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)