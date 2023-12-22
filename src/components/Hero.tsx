import gridImage from '../assets/images/grid.png'

export default function Hero() {
    return <main className='hero-container'>
        <img className='hero-img' src={gridImage} alt='The image is a grid consisting of 9 different characters, each displayed nicely together. The characters include a cooking challenge participant, a cookie cook, a dancer, someone playing the guitar, a person adding a pinch of salt to a dish of food, a piano player, a swimmer in a swimming pool, a yoga player, and finally, a singer.' />

        <section className="hero-content">
            <h1 className='hero-content-header'>Online Experiences</h1>
            <p className='hero-content-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    </main>
}