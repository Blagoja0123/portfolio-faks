import "@/styles/contact.css"
import "@/styles/icons.css"
const Contact = () => {
  return (
    <section className='contactSection' id="contact">
        <div className="contactWrapper">
            <h2>Get in touch</h2>
            <h3>Contact information and socials</h3>
            <ul className='contactCardsWrapper'>
                <li className='contactCardsItem'>
                <span className="material-symbols-outlined">
                    mail
                </span>
                </li>
                <li className='contactCardsItem' >
                    <div id="linkedIn"/>
                </li>
                <li className='contactCardsItem' >
                    <div id="gitHub"/>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Contact