import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Github, Linkedin, Mail, Twitter, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Atölye verileri
const workshops = [
  {
    id: 1,
    title: "Yapay Zeka ve Makine Öğrenmesi",
    description: "Yapay zeka ve makine öğrenmesi temellerini öğrenin ve kendi modellerinizi geliştirin.",
    date: "15 Nisan 2025",
    time: "10:00 - 14:00",
    location: "Online",
    image: "/placeholder.svg?height=300&width=500",
    status: "Yaklaşan",
    slug: "yapay-zeka-makine-ogrenmesi",
  },
  {
    id: 2,
    title: "Web Geliştirme Temelleri",
    description: "Modern web teknolojileri ile tanışın ve kendi web uygulamanızı geliştirin.",
    date: "10 Mayıs 2025",
    time: "09:00 - 12:00",
    location: "ByteOpia Lab, İstanbul",
    image: "/placeholder.svg?height=300&width=500",
    status: "Yaklaşan",
    slug: "web-gelistirme-temelleri",
  },
  {
    id: 3,
    title: "Siber Güvenlik Atölyesi",
    description: "Temel siber güvenlik kavramlarını öğrenin ve güvenlik testleri yapın.",
    date: "5 Mart 2025",
    time: "13:00 - 17:00",
    location: "Online",
    image: "/placeholder.svg?height=300&width=500",
    status: "Geçmiş",
    slug: "siber-guvenlik-atolyesi",
  },
]

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hoş Geldiniz</p>
              <h1 className="heading-xl mb-4">ByteOpia</h1>
              <h2 className="heading-md text-emerald-700">Teknoloji Laboratuvarı</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              Teknolojiye tutkulu gençlerin bir araya gelerek fikir ürettiği, geliştirdiği ve hayata geçirdiği yenilikçi
              bir oluşum.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8 bg-emerald-700 hover:bg-emerald-800">
                <Link href="/#contact">İletişime Geç</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/projects">Projelerimiz</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-emerald-100 rounded-full opacity-50"></div>
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="ByteOpia"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Hakkımızda
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">01</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="body-lg mb-6">
              <strong>ByteOpia</strong>, teknolojiye tutkulu gençlerin bir araya gelerek fikir ürettiği, geliştirdiği ve
              hayata geçirdiği yenilikçi bir oluşumdur. Amacımız; yazılım, donanım, yapay zeka, siber güvenlik ve
              dijital tasarım gibi alanlarda hem bireysel hem de kolektif üretimi destekleyen bir ekosistem
              oluşturmaktır.
            </p>
            <p className="body-lg mb-6">
              ByteOpia, sadece bir topluluk değil; aynı zamanda bir gelişim alanı, bir öğrenme merkezi ve üretkenliğin
              dijital yansımasıdır. Genç beyinlerin enerjisini projelere dönüştürdüğümüz bu platformda, hem teorik hem
              pratik bilgiyle donanmış bir nesil yetiştiriyoruz.
            </p>
            <p className="body-lg mb-10">
              Ayrıca düzenli olarak{" "}
              <Link href="/workshops" className="font-medium underline underline-offset-4 text-emerald-700">
                atölyeler ve eğitimler
              </Link>{" "}
              düzenleyerek teknoloji alanında kendini geliştirmek isteyen herkese destek oluyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
              >
                <Link href="/blog">Blogumuzu Okuyun</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
              >
                <Link href="/workshops">Atölyelerimiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Öne Çıkan Projeler
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
          </h2>
          <Link href="/projects" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            Tüm Projeleri Görüntüle
          </Link>
        </div>

        <div className="grid gap-24">
          {[
            {
              id: 1,
              title: "Akıllı Sera Sistemi",
              description:
                "IoT teknolojileri kullanarak geliştirdiğimiz akıllı sera sistemi, bitkilerin büyümesini optimize ediyor ve su tüketimini azaltıyor.",
            },
            {
              id: 2,
              title: "Yapay Zeka Destekli Eğitim Platformu",
              description:
                "Öğrencilerin öğrenme stillerine göre içerik öneren ve kişiselleştirilmiş eğitim deneyimi sunan yapay zeka destekli eğitim platformu.",
            },
            {
              id: 3,
              title: "Siber Güvenlik Eğitim Simülatörü",
              description:
                "Siber güvenlik alanında kendini geliştirmek isteyenler için gerçek dünya senaryolarını simüle eden interaktif eğitim platformu.",
            },
          ].map((project) => (
            <div key={project.id} className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-8xl font-bold text-emerald-700/30 group-hover:text-emerald-700/50 transition-colors">
                    0{project.id}
                  </span>
                  <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-emerald-700 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors"
                  >
                    <Link href={`/projects/project-${project.id}`}>Projeyi İncele</Link>
                  </Button>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                    <Image
                      src={`/placeholder.svg?height=270&width=480`}
                      alt={`Proje ${project.id}`}
                      width={480}
                      height={270}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops Section */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Atölyeler
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">03</span>
          </h2>
          <Link href="/workshops" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            Tüm Atölyeleri Görüntüle
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="group overflow-hidden border border-border bg-card">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant={workshop.status === "Yaklaşan" ? "default" : "secondary"}
                    className={workshop.status === "Yaklaşan" ? "bg-emerald-700" : ""}
                  >
                    {workshop.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-emerald-700 transition-colors">
                  {workshop.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">{workshop.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{workshop.location}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-emerald-700 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors"
                >
                  <Link href={`/workshops/${workshop.slug}`}>Detayları Gör</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Uzmanlık Alanlarımız
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">04</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-y-8 gap-x-16">
              {[
                "Yazılım Geliştirme",
                "Yapay Zeka",
                "Siber Güvenlik",
                "IoT",
                "Veri Bilimi",
                "Robotik",
                "Web Teknolojileri",
                "Mobil Uygulama",
              ].map((skill, index) => (
                <div key={skill} className="border-b border-border pb-2 group">
                  <div className="flex items-baseline">
                    <span className="text-sm text-muted-foreground mr-4 group-hover:text-foreground transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-2xl group-hover:translate-x-2 transition-transform">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Son Yazılar
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">05</span>
          </h2>
          <Link href="/blog" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            Tüm Yazıları Görüntüle
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "Yapay Zeka ve Etik: Gelecekteki Zorluklar",
              excerpt:
                "Yapay zeka teknolojilerinin gelişimi ile birlikte ortaya çıkan etik sorunlar ve çözüm önerileri.",
              date: "1 Mart 2025",
            },
            {
              id: 2,
              title: "Web3 ve Blok Zinciri Teknolojileri",
              excerpt:
                "Merkeziyetsiz web teknolojilerinin geleceği ve günlük hayatımıza etkileri üzerine bir inceleme.",
              date: "15 Şubat 2025",
            },
            {
              id: 3,
              title: "Siber Güvenlikte Yapay Zeka Kullanımı",
              excerpt: "Siber güvenlik alanında yapay zeka teknolojilerinin kullanımı ve sağladığı avantajlar.",
              date: "5 Şubat 2025",
            },
          ].map((post) => (
            <Link
              key={post.id}
              href={`/blog/post-${post.id}`}
              className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={`Blog Yazısı ${post.id}`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-700 transition-colors">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-custom section-spacing">
        <h2 className="heading-lg mb-16 relative text-center">
          İletişime Geçin
          <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 left-1/2 -translate-x-1/2 opacity-80">
            06
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl leading-relaxed mb-10">
              Projelerimiz, atölyelerimiz veya iş birliği fırsatları hakkında bilgi almak için bizimle iletişime
              geçebilirsiniz.
            </p>
            <div className="flex flex-col gap-6">
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">iletisim@byteopia.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">linkedin.com/company/byteopia</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">github.com/byteopia</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">twitter.com/byteopia</span>
              </a>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-8">
              <div>
                <label htmlFor="name" className="block text-lg mb-2 font-medium">
                  İsim
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-emerald-700 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2 font-medium">
                  E-posta
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-emerald-700 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2 font-medium">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-emerald-700 transition-colors"
                ></textarea>
              </div>
              <div>
                <Button size="lg" className="text-lg px-8 w-full md:w-auto bg-emerald-700 hover:bg-emerald-800">
                  Mesaj Gönder
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
