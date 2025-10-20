import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
<div className="container">
      <h1>Моє портфоліо</h1>
      <p>Вітаю! Це мій перший практичний проєкт в Electron.</p>

      <h2>Мої навички</h2>
      <ul>
        <li>HTML5 — Основи</li>
        <li>CSS — Базові стилі</li>
        <li>JavaScript — Початківець</li>
        <li>Electron — Встановлення та запуск</li>
      </ul>

      <h2>Мої проєкти</h2>
      <table>
        <thead>
          <tr>
            <th>Назва проєкту</th>
            <th>Технологія</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Перший додаток</td>
            <td>Electron.js</td>
            <td>В процесі</td>
          </tr>
          <tr>
            <td>Портфоліо</td>
            <td>HTML/CSS</td>
            <td>Готово</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
