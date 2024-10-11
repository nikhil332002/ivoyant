import React, { ChangeEvent, useState } from 'react';
import { useGetWeatherQuery } from '../slice/WeatherApi';
import { Card, Input, Button, Typography, Spin, Alert, Flex } from 'antd';
import '../styles/Style.css'

const { Title, Paragraph } = Typography;



const WeatherPage: React.FC = () => {
    const [district, setDistrict] = useState<string>('');
    const [final, setFinal] = useState<string>('');
    const [suggestions, setSuggestions] = useState([]);

    const apiKey = import.meta.env.VITE_API_KEY;

    const { data, error, isLoading } = useGetWeatherQuery(final, {
        skip: !final,
    });

    const handleFetchWeather = () => {
        setFinal(district);
        setDistrict("");
    };

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setDistrict(e.target.value);
        fetchCities(e.target.value);
    }


    const fetchCities = async (input:string) => {
        if (input.length > 2) {
          const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${apiKey}`
          );
          const data = await response.json();
          setSuggestions(data.map((city:any) => `${city.name}`));
        } else {
          setSuggestions([]); 
        }
      };

    const handleSuggestionClick = (city:string) => {
    setDistrict(city); 
    setSuggestions([]);  
    };
// console.log(data);

    return (
        <div className='main-div'>
            <Title level={2} className='title' >
                Weather App
            </Title>
            <Input
                placeholder="Enter city name"
                value={district}
                onChange={handleChange}
                className='input-box' 
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((city, index) => (
                        <div key={index} onClick={() => handleSuggestionClick(city)}>
                            {city}
                        </div>
                    ))}
                </ul>
            )}
            <Button 
                type="primary" 
                onClick={handleFetchWeather} 
                block 
                className='button'
            >
                Check Weather
            </Button>

            {isLoading && (
                <div className='spinner'>
                    <Spin size="large" />
                </div>
            )}
            {error && (
                <Alert message="City not found" type="error" showIcon className='error' />
            )}
            {data && (
                <Card className='main-card'>
                    <Title level={3} className='card-title'>{data.name}</Title>
                    <div className='card-div'>
                        <Flex gap="small">
                        <Card className='temp-card'>
                            <Paragraph className='cards-titles'>Temperature: {data.main.temp} °C</Paragraph>
                        </Card>
                        <Card className='desc-card'>
                            <Paragraph className='cards-titles'>Description: {data.weather[0].description}</Paragraph>
                        </Card>
                        </Flex>
                        <Flex gap="small">
                        <Card className='humi-card'>
                            <Paragraph className='cards-titles'>Humidity: {data.main.humidity}%</Paragraph>
                        </Card>
                        <Card className='wind-card'>
                            <Paragraph className='cards-titles'>Wind Speed: {data.wind.speed} m/s</Paragraph>
                        </Card>
                        </Flex>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default WeatherPage;
