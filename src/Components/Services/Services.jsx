
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Services</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Training (Instructorium)</h3>
          <p>A short description about our training platform.</p>
          <Link to="/subsidiaries" className="text-blue-500 hover:underline">Learn More</Link>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Digital Services (YouTIQA)</h3>
          <p>An overview of our digital services.</p>
          <Link to="/subsidiaries" className="text-blue-500 hover:underline">Learn More</Link>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Recruitment & Outsourcing</h3>
          <p>Details about our recruitment and outsourcing services.</p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Services;