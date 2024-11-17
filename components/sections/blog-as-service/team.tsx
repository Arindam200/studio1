import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Arindam Majumder',
    role: 'Head of Developer Education',
    image: 'https://avatars.githubusercontent.com/u/109217591?v=4',
    bio: 'Former Developer Advocate at Google Cloud, Sarah brings 10+ years of experience in building developer education programs and technical content strategies.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Amitesh Anand',
    role: 'Head of Community & Events',
    image: 'https://avatars.githubusercontent.com/u/73425223?v=4',
    bio: 'Previously led developer relations at AWS, Marcus specializes in building and scaling global developer communities and organizing impactful tech events.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
//   {
//     name: 'Shivay Lamba',
//     role: 'Head of Technical Strategy',
//     image: 'https://avatars.githubusercontent.com/u/19529592?v=4',
//     bio: 'With experience at Microsoft and GitHub, Alex excels in API strategy, developer experience optimization, and technical partnership development.',
//     social: {
//       twitter: '#',
//       linkedin: '#',
//       github: '#'
//     }
//   }
];

export default function Team() {
  return (
    <div id="team" className="py-10 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6 font-semibold lg:text-5xl text-2xl pb-4">
                Meet Our {" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
                Leadership Team
                </span>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Industry veterans passionate about developer success
          </p>
            </div>
       
        
        <div className="sm:mt-20 mt-6 flex max-sm:flex-col justify-center gap-12 ">
          {team.map((member) => (
            <div key={member.name} className="space-y-4">
              <div className="aspect-w-3 aspect-h-3 flex justify-center items-center">
                <img
                  className="object-cover shadow-lg rounded-lg max-h-[300px] "
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="space-y-2">
                <div className="text-lg leading-6 font-medium space-y-1 text-center">
                  <h3 className="text-orange-500 text-3xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
                <div className="text-base text-gray-500 max-sm:hidden text-center">
                  <p>{member.bio}</p>
                </div>
                <ul className="flex space-x-5 justify-center ">
                  <li>
                    <a href={member.social.twitter} className="text-orange-400 hover:text-orange-500">
                      <span className="sr-only">Twitter</span>
                      <Twitter className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href={member.social.linkedin} className="text-orange-400 hover:text-orange-500">
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href={member.social.github} className="text-orange-400 hover:text-orange-500">
                      <span className="sr-only">GitHub</span>
                      <Github className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
}