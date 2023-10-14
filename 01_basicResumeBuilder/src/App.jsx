import Section from './Section'
function App() {
  
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
  return (
    <>
      <h1>Resume</h1>
      <h2>Anchal Paswan</h2>
      <hr />

      {Object.keys(resume).map((section, index) => (
        <Section key={index} section={resume[section]} heading={section} />
      ))}
    </>
  )
}

export default App
