import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "UIIEA (Aplikasi Internal)",
      description: "Platform enterprise architecture internal yang dirancang untuk memvisualisasikan dan mengelola sistem TI, layanan, serta proses bisnis di lingkungan universitas. Saya berkontribusi dalam implementasi fitur frontend, menerjemahkan desain dari Figma, serta melakukan integrasi dengan REST API.",
      image: "/uiiea.png",
      technologies: ["Angular", "Git", "Figma", "Postman"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "UIIRangkin (Aplikasi Internal)",
      description: "Sistem manajemen data pemeringkatan internal yang mendukung universitas dalam mengumpulkan, mengolah, dan menganalisis data untuk berbagai lembaga pemeringkatan nasional maupun internasional. Saya terlibat secara aktif dalam siklus pengembangan penuh, mulai dari diskusi dengan stakeholder hingga implementasi frontend",
      image: "/uiiranking.png",
      technologies: ["Angular", "Laravel", "Git", "Figma", "Postman"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "UIIRuang (Aplikasi Internal)",
      description: "Aplikasi manajemen ruangan internal Universitas Islam Indonesia yang digunakan untuk memfasilitasi peminjaman, penjadwalan, dan monitoring penggunaan fasilitas kampus. Peran saya berfokus pada pengembangan frontend dan integrasi API agar pengalaman pengguna berjalan lancar.",
      image: "/uiiruang.png",
      technologies: ["Angular", "Laravel", "Git", "Figma", "Postman"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "BankHijau",
      description: "Aplikasi BankHijau adalah platform digital yang menyediakan layanan perbankan dengan fokus pada pencatatan nasabah yang didapat setelah mengumpulkan sampah di Bank Sampah.",
      image: "/pt1.png",
      technologies: ["Flutter", "Laravel", "Git", "Figma", "Postman"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "ReWaste",
      description: "Aplikasi ReWaste adalah platform digital yang fokus pada edukasi pengelolaan limbah dengan memanfaatkan teknologi machine learning untuk meningkatkan efisiensi dan transparansi dalam proses daur ulang.",
      image: "/pt2.png",
      technologies: ["Kotlin", "Firebase", "Git", "Figma", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Deshoes",
      description: "Deshoes merupakan web yang menyediakan platform untuk menjual sepatu.",
      image: "/pt3.png",
      technologies: ["HTML", "CSS", "Git", "Figma"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-pretty">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-accent hover:text-accent-foreground bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
