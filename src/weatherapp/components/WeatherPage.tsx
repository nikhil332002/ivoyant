import React, { ChangeEvent, useEffect, useState } from 'react';
import { useGetWeatherQuery } from '../slice/WeatherApi';
import { Input, Button, Typography, Spin, Alert } from 'antd';
import '../styles/Style.css'
import Data_cards from './Data_cards';

const { Title} = Typography;



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
    }
    
    const fetchCities = async (input:string) => {
        if (input) {
          const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${apiKey}`
          );
          const data = await response.json();
          setSuggestions(data.map((city:any) => `${city.name}`));
        } else {
          setSuggestions([]); 
        }
      };

    useEffect(()=>{
        const id = setTimeout(() => {
            fetchCities(district);
        }, 500);

        return ()=>{clearTimeout(id)}
    },[district])

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
                <Data_cards name={data.name} temp={data.main.temp} desc={data.weather[0].description} humi={data.main.humidity} wind={data.wind.speed} />
            )}
        </div>
    );
};

export default WeatherPage;
