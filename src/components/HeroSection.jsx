const HeroSection = ({ chartsRef }) => {
  const scrollToCharts = () => {
    chartsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="grid-background hero-section">
      <div className="container">
        <h1 className="hero-text hero-text-large">Trivia Data Dashboard</h1>
        <p className="hero-paragraph">
          Explore trivia data from the Open Trivia Database. View categories,
          question difficulties, and question distributions. Use the filters to
          select a specific category and see how the questions are organized by
          difficulty level (easy, medium, hard) and type (multiple choice or
          true/false). This dashboard gives you an interactive way to understand
          how trivia questions are organized.
        </p>
        <button className="hero-button" onClick={scrollToCharts}>
          Explore the data
        </button>
      </div>
    </section>
  )
}

export default HeroSection
