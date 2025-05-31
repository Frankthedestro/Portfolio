function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <h3>Hunter West</h3> 
      <img 
        src="Link to your image here" 
        alt="placeholder" 
        style={{ 
          width: "100%",
          maxWidth: "300px",
          height: "auto",
          margin: "0 auto"
        }}
      />
      <p style={{ maxWidth: "800px", margin: "2rem", padding: "0 1rem" }}>
        Hello! I'm Hunter and im interested in web development. I'm still learning but im getting better every day.
        I enjoy learning new things and hopefully my attention span will continue to improve as I learn. What I bring to the table is a willingness to learn and pick up new
        techneques. I have a passion for coding and I love to solve problems. I am always looking for new challenges and opportunities to grow.
      </p>   
    </section>
  )
}

export default AboutMe