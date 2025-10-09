import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "MSc in Data Science & Analytics",
      icon: GraduationCap,
    },
    {
      degree: "BTech in Computer Science Engineering",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging data science and quality assurance to deliver excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Bio */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Professional Journey
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Multi-disciplinary Data Analyst and Automation Engineer with experience spanning 
                software quality assurance and data science. Skilled in Python, SQL, R and advanced 
                analytics for extracting actionable insights from complex datasets.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Demonstrated history of building and maintaining automation frameworks using Selenium 
                and TestNG. Adept at designing ETL pipelines, performing statistical and machine-learning 
                analysis, creating interactive dashboards, and translating business requirements into 
                efficient automated test scenarios.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Proven ability to work in Agile teams, mentor colleagues, and communicate results to 
                technical and non-technical stakeholders with a focus on delivering measurable business value.
              </p>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl gradient-bg">
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  </div>
                </div>
              </Card>
            ))}

            {/* Highlights */}
            <Card className="p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-4">Key Strengths</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Leadership and mentorship in Agile teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Quality engineering mindset with attention to detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Strong collaboration with cross-functional stakeholders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Translating complex technical concepts for diverse audiences</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
