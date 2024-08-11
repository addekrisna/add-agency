"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const TeamsPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => setTeamMembers(data.results));
  }, []);

  return (

    <section id="our-team" className="py-32">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
            {teamMembers.map((member, index) => (
                <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center" key={member.name.first}>
                    <Image 
                        src={member.picture.large}
                        alt={`${member.name.first} ${member.name.last}`}
                        width={120}
                        height={120}
                        className="w-full rounded-full mb-4"
                    />
                    
                    <h3 className="text-black text-xl font-semibold mb-2">{`${member.name.first} ${member.name.last}`}</h3>
                    <p className="text-gray-700">{member.email}</p>
                </div>

            ))}

                

               
            </div>
        </div>
    </section>



  );
};

export default TeamsPage;