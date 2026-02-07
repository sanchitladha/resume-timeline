import './App.css';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { resumeData } from './data/resumeData';

function App() {
  return (
    <div className="app">
      <Header
        name={resumeData.name}
        title={resumeData.title}
        summary={resumeData.summary}
        contact={resumeData.contact}
      />

      <main className="main-content">
        <section className="timeline-section">
          <h2 className="section-title">Career Journey</h2>
          <Timeline experiences={resumeData.workExperience} />
        </section>

        <Skills skills={resumeData.skills} />

        <Education education={resumeData.education} />
      </main>

      <footer className="footer">
        <p>© 2024 {resumeData.name}. Built using <a href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Claude Code</a></p>
      </footer>
    </div>
  );
}

export default App;
