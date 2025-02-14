export default function Contact(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of the avenger"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="./phone.jpg"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./mail.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}
