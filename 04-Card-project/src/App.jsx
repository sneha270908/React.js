import Card from "./components/Card.jsx"  
import './index.css'

const App = () => {
  
  const jobs = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    company: "Amazon",
    postedAgo: "5 days ago",
    title: "Senior UI/UX Designer",
    tags1: "Part Time",
    tag2: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    postedAgo: "2 days ago",
    title: "Frontend Engineer",
    tags1: "Full Time",
    tag2: "Mid Level",
    salary: "$95/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    postedAgo: "1 day ago",
    title: "Product Manager",
    tags1: "Full Time", 
    tag2: "Senior Level",
    salary: "$110/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    postedAgo: "3 days ago",
    title: "iOS Developer",
    tags1: "Contract",
    tag2: "Senior Level",
    salary: "$130/hr",
    location: "Pune, India",
  },
  {
    id: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    postedAgo: "7 days ago",
    title: "Data Scientist",
    tags1: "Full Time", 
    tag2: "Junior Level",
    salary: "$80/hr",
    location: "Delhi, India",
  },
  {
    id: 6,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    company: "Meta",
    postedAgo: "4 days ago",
    title: "React Native Developer",
    tags1: "Remote", 
    tag2: "Mid Level",
    salary: "$100/hr",
    location: "Chennai, India",
  },
  {
    id: 7,
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
    company: "LinkedIn",
    postedAgo: "6 days ago",
    title: "Backend Engineer",
    tags1: "Full Time", 
    tag2: "Senior Level",
    salary: "$115/hr",
    location: "Noida, India",
  },
  {
    id: 8,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    company: "Spotify",
    postedAgo: "10 days ago",
    title: "ML Engineer",
    tags1: "Part Time", 
    tag2: "Mid Level",
    salary: "$90/hr",
    location: "Kolkata, India",
  },
  {
    id: 9,
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
    company: "Uber",
    postedAgo: "8 days ago",
    title: "DevOps Engineer",
    tags1: "Contract", 
    tag2: "Mid Level",
    salary: "$85/hr",
    location: "Ahmedabad, India",
  },
  {
    id: 10,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    company: "Airbnb",
    postedAgo: "12 days ago",
    title: "UI Engineer",
    tags1: "Remote", 
    tag2: "Junior Level",
    salary: "$75/hr",
    location: "Jaipur, India",
  },
]

  return (
    <div className="parent">
      {jobs.map(function(elem){
       return <Card key = {elem.id} lo = {elem.logo} comp = {elem.company} post = {elem.postedAgo} tit = {elem.title} t1 = {elem.tags1} t2 = {elem.tag2} sal = {elem.salary} loc = {elem.location}/>
      })}
    </div>
    
  )
}

export default App