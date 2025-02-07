import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact
                img="./src/images/5872824cf3a71010b5e8ef0f.png"
                name="Mr. Captain America"
                phone="(212) 555-1234"
                email="CaptainLegen@super.avenger"
            />
            <Contact
                img="./src/images/hulk.png"
                name="Mr. Hulk"
                phone="(312) 555-2345"
                email="hulky@super.avenger"
            />
            <Contact
                img="./src/images/thor.png"
                name="Mr. Thor"
                phone="(412) 555-4567"
                email="Mrhammer@super.avenger"
            />
            <Contact 
                img="./src/images/panther.png"
                name="Mr. Black Panther"
                phone="(1133) 121-9090"
                email="panther@super.avenger"
            />
        </div>
    )
}

export default App
