
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Data_cards from './Data_card'; 

describe('Data_cards Component', () => {
  const mockData = {
    name: 'City Name',
    temp: '25',
    desc: 'Clear Sky',
    humi: '60',
    wind: '5',
  };

  test('renders the card with the provided data', () => {
    render(<Data_cards {...mockData} />);

    // Check if the title (city name) is rendered
    expect(screen.getByRole('heading', { level: 3, name: mockData.name })).toBeInTheDocument();

    // Check if the temperature is displayed correctly
    expect(screen.getByText(/Temperature:/i)).toBeInTheDocument();
    expect(screen.getByText(/25 °C/i)).toBeInTheDocument();

    // Check if the description is displayed correctly
    expect(screen.getByText(/Description:/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear Sky/i)).toBeInTheDocument();

    // Check if the humidity is displayed correctly
    expect(screen.getByText(/Humidity:/i)).toBeInTheDocument();
    expect(screen.getByText(/60%/i)).toBeInTheDocument();

    // Check if the wind speed is displayed correctly
    expect(screen.getByText(/Wind Speed:/i)).toBeInTheDocument();
    expect(screen.getByText(/5 m\/s/i)).toBeInTheDocument();
  });
});
