import Project from '../components/Project'

function Portfolio() {
  const projects = [
    {
      title: "README Generator",
      description: "A command-line application that dynamically generates a professional README.md file from user input.",
      image: "image link goes here",
      link: "github or rendered link goes here",
      repo: "github link goes here"
    },
    // Add more projects as needed use this as a template
  ]

  return (
    <section className="portfolio-section">
      <h2>PORTFOLIO</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio