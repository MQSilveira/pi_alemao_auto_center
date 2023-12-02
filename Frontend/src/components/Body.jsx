import Sidebar from './Sidebar'
import Footer from './Footer'
// importar HOME, SOBRE, SERVIÇOS, CONTATO

export default function Body() {
    return (
        <div className="body">
            <Sidebar />
            <div className="main">
                <main id="main">
                    <section id="home" className="home">
                        {/* <Home /> */}
                    </section>
                    <section id="about" className="about">
                        {/* <About /> */}
                    </section>
                    <section id="services" className="services">
                        {/* <Services /> */}
                    </section>
                    <section id="appContact" className="appContact">
                        {/* <AppContact /> */}
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    )
}


