import React, { useState } from 'react';
import { useGetWeatherQuery } from '../slice/WeatherApi';
import { Card, Input, Button, Typography, Spin, Alert, Flex } from 'antd';
import '../styles/Style.css'

const { Title, Paragraph } = Typography;

const WeatherPage: React.FC = () => {
    const [district, setDistrict] = useState<string>('');
    const [final, setFinal] = useState<string>('');

    const { data, error, isLoading } = useGetWeatherQuery(final, {
        skip: !final,
    });

    const handleFetchWeather = () => {
        setFinal(district);
        setDistrict("");
    };
console.log(data);

    return (
        <div className='main-div'>
            <Title level={2} className='title' >
                Weather App
            </Title>
            <Input
                placeholder="Enter district name"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className='input-box' 
            />
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
                <Alert message="District not found" type="error" showIcon className='error' />
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
