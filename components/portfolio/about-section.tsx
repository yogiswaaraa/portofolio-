import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/profile.png"
                alt="Profile"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto h-100 object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
I am an Informatics graduate with a cum laude distinction (GPA 3.85) and currently work as a Junior Frontend Engineer at UII. Skilled in Angular, Flutter, and Laravel, I have experience building enterprise-scale applications and collaborating across teams. I am passionate about creating efficient, user-friendly digital solutions while continuously developing both technical and leadership skills.              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
