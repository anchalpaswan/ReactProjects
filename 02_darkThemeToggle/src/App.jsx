import { useState } from 'react'
import Section from './Section'
import './App.css'
function App() {
  const [dark, setDark] = useState(0)
  const resume = {
    Interests: [
      'Drawing',
      'Photography',
      'Design',
      'Programming',
      'Computer Scinece',
    ],
    Skills: ['Web Design with HTML & CSS'],
    Education: [
      'Wiltron Hight School',
      'Silvermine School of Arts',
      'Codeacademy',
    ],
    Experience: ['Student Techology Intern for Wiltron School District'],
    Extracurriculars: ['Recycling Club', 'Gardening Club', 'Book Club'],
  }

  const toggleDarkMode = () => {
    setDark(!dark)
  }
  return (
    <section className={dark ? 'dark-mode' : 'light-mode'}>
      <main>
        <header>
          <h1>Resume</h1>
          <h2>Anchal Paswan</h2>
        </header>
        <hr />

        {Object.keys(resume).map((section, index) => (
          <Section key={index} section={resume[section]} heading={section} />
        ))}
      </main>
      <button onClick={toggleDarkMode}>{dark ? 'light' : 'dark'}</button>
    </section>
  )
}

export default App
