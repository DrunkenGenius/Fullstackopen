import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let counter = 0;
const refresh = () => {ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter = {counter}/>
)
}
