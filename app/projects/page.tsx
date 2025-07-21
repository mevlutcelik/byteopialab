import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

// Proje verileri
const projects = [
  {
    id: 1,
    title: "Akıllı Sera Sistemi",
    description:
      "IoT teknolojileri kullanarak geliştirdiğimiz akıllı sera sistemi, bitkilerin büyümesini optimize ediyor ve su tüketimini azaltıyor.",
    technologies: ["Arduino", "IoT", "Sensör Teknolojileri", "Mobil Uygulama"],
    image: "/placeholder.svg?height=600&width=800",
    slug: "akilli-sera-sistemi",
    type: "hosted", // hosted project
  },
  {
    id: 2,
    title: "Yapay Zeka Destekli Eğitim Platformu",
    description:
      "Öğrencilerin öğrenme stillerine göre içerik öneren ve kişiselleştirilmiş eğitim deneyimi sunan yapay zeka destekli eğitim platformu.",
    technologies: ["React", "Node.js", "MongoDB", "Yapay Zeka"],
    image: "/placeholder.svg?height=600&width=800",
    slug: "yapay-zeka-egitim-platformu",
    type: "hosted", // hosted project
  },
  {
    id: 3,
    title: "Siber Güvenlik Eğitim Simülatörü",
    description:
      "Siber güvenlik alanında kendini geliştirmek isteyenler için gerçek dünya senaryolarını simüle eden interaktif eğitim platformu.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
    image: "/placeholder.svg?height=600&width=800",
    slug: "siber-guvenlik-simulatoru",
    type: "hosted", // hosted project
  },
  {
    id: 4,
    title: "Açık Kaynak Veri Görselleştirme Aracı",
    description:
      "Karmaşık veri setlerini anlaşılır görselleştirmelere dönüştüren açık kaynak kodlu veri görselleştirme aracı.",
    technologies: ["JavaScript", "D3.js", "SVG", "Veri Analizi"],
    githubUrl: "https://github.com/byteopia/veri-gorsellestirme",
    image: "/placeholder.svg?height=600&width=800",
    type: "github", // GitHub-only project
  },
  {
    id: 5,
    title: "Doğal Dil İşleme Kütüphanesi",
    description:
      "Türkçe metinler için geliştirilmiş, duygu analizi, metin sınıflandırma ve özetleme yapabilen doğal dil işleme kütüphanesi.",
    technologies: ["Python", "NLP", "Makine Öğrenmesi", "Transformers"],
    githubUrl: "https://github.com/byteopia/turkce-nlp",
    image: "/placeholder.svg?height=600&width=800",
    type: "github", // GitHub-only project
  },
  {
    id: 6,
    title: "Gömülü Sistemler Eğitim Kiti",
    description:
      "Gömülü sistemler ve mikrodenetleyiciler hakkında eğitim vermek için tasarlanmış açık kaynak donanım ve yazılım kiti.",
    technologies: ["C", "Mikrodenetleyiciler", "PCB Tasarımı", "Elektronik"],
    githubUrl: "https://github.com/byteopia/gomulu-sistemler-kit",
    image: "/placeholder.svg?height=600&width=800",
    type: "github", // GitHub-only project
  },
]

export default function ProjectsPage() {
  // Hosted ve GitHub projelerini ayır
  const hostedProjects = projects.filter((project) => project.type === "hosted")
  const githubProjects = projects.filter((project) => project.type === "github")

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Projeler</h1>
          <p className="body-lg text-muted-foreground">
            ByteOpia ekibinin geliştirdiği yenilikçi projeler, araştırmalar ve deneysel çalışmalar.
          </p>
        </div>

        {/* Hosted Projects */}
        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">
            Aktif Projeler
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid gap-16 md:gap-24">
            {hostedProjects.map((project, index) => (
              <div key={project.id} className="group">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <span className="text-8xl font-bold text-emerald-700/30 group-hover:text-emerald-700/50 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                      {project.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-emerald-700 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors"
                    >
                      <Link href={`/projects/${project.slug}`}>Projeyi İncele</Link>
                    </Button>
                  </div>
                  <div className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub-only Projects */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Açık Kaynak Projeler
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
            Bu projeler, açık kaynak topluluğuna katkı sağlamak ve bilgi paylaşımını desteklemek amacıyla GitHub
            üzerinde paylaşılmıştır.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {githubProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 border-emerald-700 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>GitHub'da İncele</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
