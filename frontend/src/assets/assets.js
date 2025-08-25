import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import logo from './logo.svg'
import profile_pic from './profile_pic.png'
import dropdown_icon from './dropdown_icon.svg'
import group_profiles from './group_profiles.png'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Dermatologist from './Dermatologist.svg'
import Pediatricians from './Pediatricians.svg'
import Neurologist from './Neurologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png' 
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import verified_icon from './verified_icon.svg'
import info_icon from  './info_icon.svg'
import about_image from './about_image.png'
import contact_image from './contact_image.png'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'







import appointment_img from './appointment_img.png'



export const assets = {
    add_icon,
    admin_logo,
    appointment_icon,
    cancel_icon,
    doctor_icon,
    upload_area,
    home_icon,
    patients_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon,
    logo,
    profile_pic,
    dropdown_icon,
    group_profiles,
    arrow_icon,
    header_img,
    General_physician,
    Gynecologist,
    Dermatologist,
    Pediatricians,
    Neurologist,
    Gastroenterologist,
    appointment_img,
    verified_icon,
    info_icon,
    about_image,
    contact_image,
    menu_icon,
    cross_icon

}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
         speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    }
]


export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Richard James',
    image: doc1,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Richard James is dedicated to delivering comprehensive medical care and improving patient health.',
    fees: 50,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Emily Carter',
    image: doc2,
    speciality: 'Pediatricians',
    degree: 'MD Cardiology',
    experience: '8 Years',
    about: 'Dr. Emily Carter specializes in diagnosing and treating heart diseases with modern techniques.',
    fees: 100,
    address: {
      line1: '45 Maple Street',
      line2: 'Central Park, New York'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Ahmed Khan',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MD Dermatology',
    experience: '6 Years',
    about: 'Dr. Ahmed Khan is an expert in treating skin conditions, allergies, and cosmetic dermatology.',
    fees: 80,
    address: {
      line1: '23 Palm Avenue',
      line2: 'Downtown, Dubai'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Michael Lee',  
    image: doc4,
    speciality: 'Pediatricians',
    degree: 'MD Pediatrics',
    experience: '5 Years',
    about: 'Dr. Michael Lee is passionate about child health and development, offering compassionate care.',
    fees: 60,
    address: {
      line1: '12 Sunset Boulevard',
      line2: 'Harbor Street, Sydney'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Sophia Williams',
    image: doc5,
    speciality: 'Gastroenterologist',
    degree: 'MS Orthopedics',
    experience: '10 Years',
    about: 'Dr. Sophia Williams treats bone, joint, and muscle injuries with advanced surgical procedures.',
    fees: 120,
    address: {
      line1: '8 Greenway Road',
      line2: 'Hilltop, Toronto'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Amit Sharma',
    image: doc6,
    speciality: 'Gynecologist',
    degree: 'MD Gynecology',
    experience: '7 Years',
    about: 'Dr. Amit Sharma specializes in women’s reproductive health and prenatal care.',
    fees: 90,
    address: {
      line1: '56 Rose Garden',
      line2: 'MG Road, Bangalore'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. Daniel Brown',
    image: doc7,
    speciality: 'Neurologist',
    degree: 'MD Neurology',
    experience: '9 Years',
    about: 'Dr. Daniel Brown focuses on treating brain, spine, and nerve disorders.',
    fees: 150,
    address: {
      line1: '34 Lakeview Drive',
      line2: 'Riverdale, Chicago'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Himesh Patel',
    image: doc8,
    speciality: 'Dermatologist',
    degree: 'BDS, MDS',
    experience: '4 Years',
    about: 'Dr. Himesh Patel is skilled in restorative and cosmetic dental treatments.',
    fees: 70,
    address: {
      line1: '19 Orchid Lane',
      line2: 'Garden City, Mumbai'
    }
  },
  {
    _id: 'doc9',
    name: 'Dr. Maria Lopez',
    image: doc9,
    speciality: 'Gastroenterologist',
    degree: 'MS ENT',
    experience: '6 Years',
    about: 'Dr. Maria Lopez treats ear, nose, and throat disorders for patients of all ages.',
    fees: 85,
    address: {
      line1: '22 Pine Street',
      line2: 'West End, Boston'
    }
  },
  {
    _id: 'doc10',
    name: 'Dr. James Wilson',
    image: doc10,
    speciality: 'General Physician',
    degree: 'MD Ophthalmology',
    experience: '8 Years',
    about: 'Dr. James Wilson specializes in vision care and advanced eye surgeries.',
    fees: 110,
    address: {
      line1: '77 Sunshine Road',
      line2: 'Bay Area, San Francisco'
    }
  },
  {
  _id: 'doc11',
  name: 'Dr. Olivia Brown',
  image: doc11,
  speciality: 'General Physician',
  degree: 'MBBS, MD General Medicine',
  experience: '7 Years',
  about: 'Dr. Olivia Brown provides primary healthcare and preventive treatments for all age groups.',
  fees: 100,
  address: {
    line1: '56 Willow Street',
    line2: 'Green Park, Boston'
  }
},
{
  _id: 'doc12',
  name: 'Dr. Hannah Wilson',
  image: doc12,
  speciality: 'Gynecologist',
  degree: 'MBBS, MD Obstetrics & Gynecology',
  experience: '10 Years',
  about: 'Dr. Hannah Wilson specializes in women’s reproductive health and pregnancy care.',
  fees: 130,
  address: {
    line1: '14 Rose Avenue',
    line2: 'Downtown, Miami'
  }
},
{
  _id: 'doc13',
  name: 'Dr. Elly Parker',
  image: doc13,
  speciality: 'Dermatologist',
  degree: 'MBBS, MD Dermatology',
  experience: '9 Years',
  about: 'Dr. Elly Parker is an expert in skin treatments, laser therapy, and cosmetic care.',
  fees: 120,
  address: {
    line1: '78 Skin Care Road',
    line2: 'West End, Denver'
  }
},
{
  _id: 'doc14',
  name: 'Dr. Chloe Martinez',
  image: doc14,
  speciality: 'Pediatricians',
  degree: 'MBBS, MD Pediatrics',
  experience: '8 Years',
  about: 'Dr. Chloe Martinez focuses on children’s health, immunization, and developmental care.',
  fees: 110,
  address: {
    line1: '32 Sunshine Boulevard',
    line2: 'Central Park, Atlanta'
  }
},
{
  _id: 'doc15',
  name: 'Dr. Lia Sharma',
  image: doc15,
  speciality: 'Neurologist',
  degree: 'MBBS, MD Neurology',
  experience: '10 Years',
  about: 'Dr. Lia Sharma treats brain, spinal cord, and nervous system disorders.',
  fees: 150,
  address: {
    line1: '90 Neuro Care Street',
    line2: 'Medical District, Dallas'
  }
}

];
