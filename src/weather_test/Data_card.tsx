import { Card, Flex, Typography } from "antd";
const { Title, Paragraph } = Typography;

interface CardData{
    name:string;
    temp:string;
    desc:string;
    humi:string;
    wind:string;
}
const Data_cards:React.FC<CardData>=({name,temp,desc,humi,wind})=>{

    return(
        <>
            <Card className='main-card'>
                    <Title level={3} className='card-title'>{name}</Title>
                    <div className='card-div'>
                        <Flex gap="small">
                        <Card className='temp-card'>
                            <Paragraph className='cards-titles'>Temperature: {temp} °C</Paragraph>
                        </Card>
                        <Card className='desc-card'>
                            <Paragraph className='cards-titles'>Description: {desc}</Paragraph>
                        </Card>
                        </Flex>
                        <Flex gap="small">
                        <Card className='humi-card'>
                            <Paragraph className='cards-titles'>Humidity: {humi}%</Paragraph>
                        </Card>
                        <Card className='wind-card'>
                            <Paragraph className='cards-titles'>Wind Speed: {wind} m/s</Paragraph>
                        </Card>
                        </Flex>
                    </div>
                </Card>
        </>
    )

}
export default Data_cards;