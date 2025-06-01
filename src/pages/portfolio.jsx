import Project from '../components/Project'
import readmeGenImg from '../assets/READMEGen.jpg'

function Portfolio() {
  const projects = [
    {
      title: "README Generator",
      description: "Imput prompts in the terminal to make a README file for your project.",
      image: <img src={readmeGenImg} alt="README Generator" />,
      link: "https://github.com/Frankthedestro/Module7Challange",
      repo: "https://github.com/Frankthedestro/Module7Challange"
    },

    {
      title: "Placeholder",
      description: "Placeholder text for description.",
      image: <img src={readmeGenImg} alt="Placeholder" />,
      link: "live link",
      repo: "repo"
    }, 
    
    {
      title: "Placeholder",
      description: "Placeholder text for description.",
      image: <img src={readmeGenImg} alt="Placeholder" />,
      link: "live link",
      repo: "repo"
    }, 
    
    {
      title: "Placeholder",
      description: "Placeholder text for description.",
      image: <img src={readmeGenImg} alt="Placeholder" />,
      link: "live link",
      repo: "repo"
    }, 

    {
      title: "Placeholder",
      description: "Placeholder text for description.",
      image: <img src={readmeGenImg} alt="Placeholder" />,
      link: "live link",
      repo: "repo"
    }, 

    {
      title: "Placeholder",
      description: "Placeholder text for description.",
      image: <img src={readmeGenImg} alt="Placeholder" />,
      link: "live link",
      repo: "repo"
    }, 

    {
      title: "Placeholder",
      description: "Placeholder text for description.",
      image: <img src={readmeGenImg} alt="Placeholder" />,
      link: "live link",
      repo: "repo"
    }, 

    {
      title: "Placeholder",
      description: "Placeholder text for description.",
      image: <img src={readmeGenImg} alt="Placeholder" />,
      link: "live link",
      repo: "repo"
    }, 

    {
      title: "Placeholder",
      description: "Placeholder text for description.",
      image: <img src={readmeGenImg} alt="Placeholder" />,
      link: "live link",
      repo: "repo"
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