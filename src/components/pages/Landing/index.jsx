import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    window.open('https://humanrightsfirst.org', '_blank');
  };

  const handleViewGraphs = () => {
    navigate('/graphs');
  };

  return (
    <div className='flex flex-col w-full min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center px-6 py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
        <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
          Asylum Office Grant Rate Tracker
        </h1>
        <p className='text-xl md:text-2xl mb-8 max-w-3xl opacity-90'>
          The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, and the public with an interactive tool to explore USCIS data on asylum decisions.
        </p>
        <div className='flex flex-wrap gap-4 justify-center'>
          <button
            onClick={handleViewGraphs}
            className='px-8 py-4 bg-white text-blue-700 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105'
          >
            View the Data Visualizations
          </button>
          <button
            onClick={downloadCSV}
            className='px-8 py-4 bg-indigo-800 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-indigo-900 transition-all duration-300 transform hover:scale-105'
          >
            Download the Data
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className='px-6 py-16 max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-4xl font-bold mb-6 text-gray-800'>
              Explore the Data
            </h2>
            <p className='text-lg text-gray-700 mb-4 leading-relaxed'>
              The Asylum Office Grant Rate Tracker allows you to explore asylum grant rates by asylum office, nationality, and over time. This tool provides transparency into the asylum adjudication process.
            </p>
            <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
              Understanding these patterns is critical for asylum seekers, legal representatives, and policy makers to ensure fair and consistent application of asylum law.
            </p>
            <button
              onClick={handleReadMore}
              className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300'
            >
              Read More About Human Rights First
            </button>
          </div>
          <div className='flex justify-center'>
            <img
              src={paperStack}
              alt='Asylum Documents'
              className='rounded-lg shadow-2xl w-full max-w-md object-cover'
            />
          </div>
        </div>
      </section>

      {/* Data Visualizations Preview Section */}
      <section className='px-6 py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-12 text-gray-800'>
            Interactive Data Visualizations
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Pie Chart Preview */}
            <div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
              <img
                src={pieChart}
                alt='Pie Chart Visualization'
                className='w-full h-48 object-contain mb-4'
              />
              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                Grant Rate Distribution
              </h3>
              <p className='text-gray-600'>
                Visualize the distribution of asylum decisions across different categories and outcomes.
              </p>
            </div>

            {/* Line Graph Preview */}
            <div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
              <img
                src={lineGraph}
                alt='Line Graph Visualization'
                className='w-full h-48 object-contain mb-4'
              />
              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                Trends Over Time
              </h3>
              <p className='text-gray-600'>
                Track how asylum grant rates have changed over time across different asylum offices.
              </p>
            </div>

            {/* Bar Graph Preview */}
            <div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
              <img
                src={barGraph}
                alt='Bar Graph Visualization'
                className='w-full h-48 object-contain mb-4'
              />
              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                Office Comparisons
              </h3>
              <p className='text-gray-600'>
                Compare grant rates across different asylum offices and nationalities.
              </p>
            </div>
          </div>

          <div className='text-center mt-12'>
            <button
              onClick={handleViewGraphs}
              className='px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105'
            >
              Explore All Visualizations
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='px-6 py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            Take Action with Data
          </h2>
          <p className='text-xl mb-8 opacity-90'>
            Download the complete dataset to conduct your own analysis or integrate it into your research.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <button
              onClick={downloadCSV}
              className='px-8 py-4 bg-white text-indigo-700 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105'
            >
              Download CSV Data
            </button>
            <button
              onClick={scrollToTop}
              className='px-8 py-4 bg-indigo-800 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-indigo-900 transition-all duration-300 transform hover:scale-105'
            >
              Back to Top
            </button>
          </div>
        </div>
      </section>

      {/* Hidden decode message for Canvas submission */}
      <div className='hidden'>
        {'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}
      </div>
    </div>
  );
};
