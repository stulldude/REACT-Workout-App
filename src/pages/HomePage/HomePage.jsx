import './HomePage.css';

export default function HomePage() {
    return (
        <>
            <header>
                TemPl<img className='logo' src={process.env.PUBLIC_URL + '/templ8s.svg'} />s
            </header>
        </>
    )
}