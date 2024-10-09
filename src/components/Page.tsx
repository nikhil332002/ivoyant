import { useState } from "react";
import { Input, Button, Card, Typography, Row, Col, Alert, Spin } from 'antd';
import { CloudOutlined } from '@ant-design/icons';
import './Style.css'

const { Title, Text } = Typography;

interface DataType {
    name: string;
    main: {
        humidity: number;
        temp: number;
    }
}

const Page = () => {
    const [data, setData] = useState<DataType>();
    const [city, setCity] = useState<string>();
    const [error, setError] = useState<string | null>(null);
    const [loading,setLoading] = useState<boolean>(false);

    const API_KEY = import.meta.env.VITE_API_KEY;
    

    const fetchApi = async () => {
        setError(null); 
        try {
            setLoading(true)
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

            if (!res.ok) {
                throw new Error('City not found.');
            }

            const result = await res.json();
            setData(result);
            setLoading(false)
            setCity("");
        } catch (err: any) {
            setError(err.message);
            setData(undefined); 
            setLoading(false)
        }
    }

    return (
        <Row justify="center" className="mainRow">
            <Col span={12}>
                <Card className="card1">
                    <Title level={3}><CloudOutlined /> Weather App</Title>
                    <Input
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        style={{ marginBottom: '20px' }}
                    />
                    <Button type="primary" onClick={fetchApi}>
                        Search
                    </Button>

                    {loading?<Spin size="large" />:null}

                    {error && (
                        <Alert
                            message="Error"
                            description={error}
                            type="error"
                            showIcon
                            className="alert"                           
                        />
                    )}

                    {data && !error && (
                        <Card className="card2">
                            <Title level={4}>Weather Information</Title>
                            <Text strong>City: </Text> {data?.name} <br />
                            <Text strong>Humidity: </Text> {data?.main.humidity}% <br />
                            <Text strong>Temperature: </Text> {data?.main.temp}°C
                        </Card>
                    )}
                </Card>
            </Col>
        </Row>
    )
}

export default Page;
