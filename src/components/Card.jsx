import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { Link } from 'react-router-dom';

const cardItems = [
  {
    id: 1,
    title: "Student Monitoring App",
    description: "A mobile app connecting school and home with real-time child updates.",
    image: "/images/card-image.webp",
    alt: "image description",
    url: '/case-study/student-monitoring-app'
  },
  {
    id: 2,
    title: "Food Delivery App",
    description: "A food delivery app redesign focused on transparent pricing and smarter support.",
    image: "/images/card-image1.webp",
    alt: "image description 2",
    url: '/case-study/food-delivery-app'
  },
  {
    id: 3,
    title: "Scan Track",
    description: "An employee management application for tracking and real-time performance insights.",
    image: "/images/card-image2.webp",
    alt: "image description 2",
    url:  '/case-study/employee-management'
  },
];
function GradientCover() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-5 flex-wrap justify-center">
      {cardItems.map((cardItem) => (
       <Link to={cardItem.url} key={cardItem.id} style={{ textDecoration: 'none' }}>
        <Card key={cardItem.id} variant="outlined" sx={{ minHeight: '280px', width: '100%' }} className="!border-[#343434] cursor-pointer">
          <CardCover><img src={cardItem.image} loading="lazy" alt={cardItem.alt}/></CardCover>
          <CardCover sx={{background:'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',}}/>
          <CardContent sx={{ justifyContent: 'flex-end' }}>
            <h4 className="text-[22px] font-bold text-white">{cardItem.title}</h4>
            <p className="text-white font-normal text-base">{cardItem.description}</p>
          </CardContent>
        </Card>
        </Link>
        ))
      }
    </div>
  );
}
export default GradientCover;