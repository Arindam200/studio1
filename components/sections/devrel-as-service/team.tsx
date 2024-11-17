"use client";
import { Github, Linkedin, Twitter, Mail, Calendar } from "lucide-react";
import { useState } from "react";

const team = [
  {
    name: "Sarah Chen",
    role: "Head of Developer Education",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    bio: "Former Developer Advocate at Google Cloud, Sarah brings 10+ years of experience in building developer education programs and technical content strategies.",
    expertise: [
      "Technical Writing",
      "Video Production",
      "Workshop Facilitation",
      "Curriculum Design",
    ],
    achievements: [
      "Google Developer Expert",
      "Published Author",
      "50+ Technical Workshops",
    ],
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "sarah@devrel.pro",
    },
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Community & Events",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    bio: "Previously led developer relations at AWS, Marcus specializes in building and scaling global developer communities and organizing impactful tech events.",
    expertise: [
      "Community Building",
      "Event Management",
      "Developer Advocacy",
      "Strategic Partnerships",
    ],
    achievements: [
      "100K+ Community Growth",
      "AWS Community Builder",
      "200+ Tech Events",
    ],
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "marcus@devrel.pro",
    },
  },
  {
    name: "Alex Thompson",
    role: "Head of Technical Strategy",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    bio: "With experience at Microsoft and GitHub, Alex excels in API strategy, developer experience optimization, and technical partnership development.",
    expertise: [
      "API Design",
      "Developer Experience",
      "Technical Architecture",
      "Platform Strategy",
    ],
    achievements: [
      "Microsoft MVP",
      "Open Source Contributor",
      "30+ Integration Partners",
    ],
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "alex@devrel.pro",
    },
  },
];

export default function Team() {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedMember, setSelectedMember] = useState<(typeof team)[0] | null>(
    null,
  );

  const handleBookMeeting = (member: (typeof team)[0]) => {
    setSelectedMember(member);
    setShowBooking(true);
  };

  return (
    <div id="team" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Leadership Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Industry veterans passionate about developer success
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setActiveTeamMember(index)}
              onMouseLeave={() => setActiveTeamMember(null)}
            >
              <div className="p-6 space-y-6">
                <div className="relative">
                  <img
                    className="w-full h-72 object-cover rounded-lg"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-lg font-medium text-indigo-600">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-gray-600">{member.bio}</p>

                  <div
                    className={`transition-all duration-300 space-y-4 ${activeTeamMember === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {member.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex space-x-4">
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <span className="sr-only">GitHub</span>
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <span className="sr-only">Email</span>
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>

                    <button
                      onClick={() => handleBookMeeting(member)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meeting Booking Modal */}
      {showBooking && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">
              Book a Meeting with {selectedMember.name}
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a consultation to discuss how we can help with your
              DevRel needs.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowBooking(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <a
                href={`mailto:${selectedMember.social.email}?subject=Meeting Request&body=Hi ${selectedMember.name}, I'd like to schedule a meeting to discuss DevRel services.`}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
