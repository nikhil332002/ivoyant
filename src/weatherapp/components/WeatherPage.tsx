// src/Weather.tsx
import React, { useState } from 'react';
import { useGetWeatherQuery } from '../slice/WeatherApi';
import { Card, Input, Button, Typography, Spin, Alert, Flex } from 'antd';

const { Title, Paragraph } = Typography;

const WeatherPage: React.FC = () => {
    const [district, setDistrict] = useState<string>('');
    const [final, setFinal] = useState<string>('');

    const { data, error, isLoading } = useGetWeatherQuery(final, {
        skip: !final,
    });

    const handleFetchWeather = () => {
        setFinal(district);
    };
console.log(data);

    return (
        <div style={{ maxWidth: 600, backgroundColor: '#1a1a1a', color: '#ffffff', padding: '20px', borderRadius: '8px' }}>
            <Title level={2} style={{ textAlign: 'center', color: '#ffffff' }}>
                Weather App
            </Title>
            <Input
                placeholder="Enter district name"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                style={{ marginBottom: 10, borderColor: '#444444', backgroundColor: 'white', color: 'black' }}
                
            />
            <Button 
                type="primary" 
                onClick={handleFetchWeather} 
                block 
                style={{ backgroundColor: '#007bff', borderColor: '#007bff', marginBottom: 20 }}
            >
                Check Weather
            </Button>

            {isLoading && (
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <Spin size="large" />
                </div>
            )}
            {error && (
                <Alert message="District not found" type="error" showIcon style={{ marginTop: 20 }} />
            )}
            {data && (
                <Card style={{ marginTop: 20, backgroundColor: '#2a2a2a', color: '#ffffff', borderRadius: '8px' }}>
                    <Title level={3} style={{ color: '#ffffff', textAlign: 'center' }}>{data.name}</Title>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Flex gap="small">
                        <Card  style={{ backgroundColor: '#3a3a3a', color: '#ffffff'}}>
                            <Paragraph style={{ color: '#ffffff' }}>Temperature: {data.main.temp} °C</Paragraph>
                        </Card>
                        <Card style={{ backgroundColor: '#3a3a3a', color: '#ffffff' }}>
                            <Paragraph style={{ color: '#ffffff' }}>Description: {data.weather[0].description}</Paragraph>
                        </Card>
                        </Flex>
                        <Flex gap="small">
                        <Card style={{ backgroundColor: '#3a3a3a', color: '#ffffff',width:'53%' }}>
                            <Paragraph style={{ color: '#ffffff' }}>Humidity: {data.main.humidity}%</Paragraph>
                        </Card>
                        <Card style={{ backgroundColor: '#3a3a3a', color: '#ffffff',width:'55%' }}>
                            <Paragraph style={{ color: '#ffffff' }}>Wind Speed: {data.wind.speed} m/s</Paragraph>
                        </Card>
                        </Flex>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default WeatherPage;
