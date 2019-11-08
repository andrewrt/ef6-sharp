/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const sharp = require('sharp');
//var debug = require('debug')('sharp'), 
//const sharp = require('sharp')
//, name = 'My App';

 
//debug('booting %o', name);




 const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
 `;

 const Text = styled.div`
    font-size: 20px;
    color: #ccc;
    text-align: center;
 `;


export default class App extends React.Component{


    render(){
        return (
            <Container>
               <Text> Hello From React!</Text>
            </Container>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
