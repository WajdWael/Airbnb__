import data from '../../data'
import stars from '/public/star.png'

export default function Card() {
    const cards = data.map(item => {
        let badgeText: string = "";
        let addclass: string = "";
        if (item.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (item.location === "Online") {
            badgeText = "ONLINE"
            addclass = 'online'
        }

        return <section className='card' key={item.id}>
            {
                badgeText &&
                <div className={`card-badge ${addclass}`}>{badgeText}</div>
            }
            <img className='card-img' src={`/public/${item.image}`} alt={item.alt} />
            <div className="card-stats">
                <img src={stars} alt="Star" className='card-star-img' />
                <span>{item.stats.rating}</span>
                <span className='gray-title'>({item.stats.reviewCount}) • </span>
                <span className='gray-title'>{item.location}</span>
            </div>
            <h5 className='card-header'>{item.title}</h5>
            <p><span className='card-price'>From ${item.price}</span>/person</p>
        </section>
    })

    return cards;
}
