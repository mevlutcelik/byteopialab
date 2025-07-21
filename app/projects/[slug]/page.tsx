import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

// Bu normalde bir CMS veya veritabanından gelecektir
const getProject = (slug: string) => {
  return {
    title: "Akıllı Sera Sistemi",
    client: "ByteOpia Ar-Ge",
    year: "2025",
    role: "IoT ve Yazılım Geliştirme",
    description:
      "IoT teknolojileri kullanarak geliştirdiğimiz akıllı sera sistemi, bitkilerin büyümesini optimize ediyor ve su tüketimini azaltıyor.",
    challenge:
      "Tarımsal üretimde su kaynaklarının verimli kullanılması ve bitki büyümesinin optimize edilmesi günümüzün önemli sorunlarından biridir. Geleneksel sera sistemleri genellikle manuel kontrol gerektirir ve kaynak kullanımında verimsizliklere yol açabilir.",
    solution:
      "ByteOpia ekibi olarak, çeşitli sensörler ve IoT teknolojileri kullanarak bitkilerin ihtiyaçlarını gerçek zamanlı olarak izleyen ve otomatik olarak müdahale eden bir akıllı sera sistemi geliştirdik. Sistem, toprak nemi, sıcaklık, nem ve ışık seviyelerini sürekli olarak izliyor ve bu verilere dayanarak sulama, havalandırma ve aydınlatma sistemlerini otomatik olarak kontrol ediyor.",
    technologies: ["Arduino", "Raspberry Pi", "IoT Sensörleri", "Node.js", "React Native", "MQTT", "TensorFlow"],
    featuredImage: "/placeholder.svg?height=800&width=1600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/byteopia/akilli-sera",
    nextProject: {
      title: "Yapay Zeka Destekli Eğitim Platformu",
      slug: "yapay-zeka-egitim-platformu",
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Back Button */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Projelere Dön</span>
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-zinc-600 mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-6">
            {project.liveUrl && (
              <Button asChild size="lg" className="gap-2 bg-emerald-700 hover:bg-emerald-800">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <span>Canlı Projeyi Gör</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span>Kodu İncele</span>
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="aspect-video bg-zinc-100 rounded-lg overflow-hidden">
            <Image
              src={project.featuredImage || "/placeholder.svg"}
              alt={project.title}
              width={1600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Proje Detayları</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-zinc-500 uppercase">Geliştiren</h3>
                <p className="text-lg">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm text-zinc-500 uppercase">Yıl</h3>
                <p className="text-lg">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm text-zinc-500 uppercase">Rol</h3>
                <p className="text-lg">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm text-zinc-500 uppercase">Teknolojiler</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Zorluk</h2>
                <p className="text-lg text-zinc-600">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Çözüm</h2>
                <p className="text-lg text-zinc-600">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Proje Galerisi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="aspect-video bg-zinc-100 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Görsel ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Project */}
        {project.nextProject && (
          <div className="border-t border-zinc-200 pt-16">
            <div className="text-center">
              <p className="text-zinc-500 mb-4">Sonraki Proje</p>
              <h2 className="text-3xl font-bold mb-8">{project.nextProject.title}</h2>
              <Button asChild size="lg" className="bg-emerald-700 hover:bg-emerald-800">
                <Link href={`/projects/${project.nextProject.slug}`}>Projeyi Görüntüle</Link>
              </Button>
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
