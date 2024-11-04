import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <section className="p-8 bg-gray-100 text-center">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Akbor Skills Development Limited</h1>
                <p className="text-lg">Providing expert training, recruitment, and digital services to clients worldwide.</p>
            </section>
            <Services/>
        </div>
    );
};

export default Home;