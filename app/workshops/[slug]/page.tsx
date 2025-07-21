import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Bu normalde bir CMS veya veritabanından gelecektir
const getWorkshop = (slug: string) => {
  return {
    title: "Yapay Zeka ve Makine Öğrenmesi",
    description: "Yapay zeka ve makine öğrenmesi temellerini öğrenin ve kendi modellerinizi geliştirin.",
    longDescription: `
      <p>Bu yoğun atölye, yapay zeka ve makine öğrenmesi konularında kendini geliştirmek isteyen orta ve ileri seviye geliştiriciler için tasarlanmıştır. Temel kavramlardan başlayarak, pratik uygulamalara kadar kapsamlı bir eğitim sunuyoruz.</p>
      
      <p>Atölye boyunca, gerçek dünya problemlerini çözmek için kullanabileceğiniz pratik örnekler ve uygulamalar üzerinde çalışacaksınız.</p>
    `,
    date: "15 Nisan 2025",
    time: "10:00 - 14:00",
    duration: "4 saat",
    location: "Online",
    capacity: "30 katılımcı",
    price: "₺750",
    image: "/placeholder.svg?height=600&width=1200",
    status: "Yaklaşan",
    instructor: {
      name: "Dr. Mehmet Yılmaz",
      bio: "5 yılı aşkın yapay zeka ve makine öğrenmesi deneyimine sahip veri bilimci. TechCorp ve StartupX gibi şirketlerde çalışmış, ölçeklenebilir yapay zeka çözümleri geliştirmiştir.",
      image: "/placeholder.svg?height=200&width=200",
    },
    topics: [
      "Yapay zeka ve makine öğrenmesi temelleri",
      "Denetimli ve denetimsiz öğrenme",
      "Derin öğrenme ve sinir ağları",
      "Doğal dil işleme",
      "Bilgisayarlı görü uygulamaları",
      "Model değerlendirme ve optimizasyon",
    ],
    prerequisites: [
      "Python programlama dili temel bilgisi",
      "Temel matematik ve istatistik bilgisi",
      "Veri analizi konusunda temel anlayış",
    ],
    testimonials: [
      {
        name: "Ayşe Yılmaz",
        role: "Yazılım Geliştirici",
        company: "TechCorp",
        quote:
          "Bu atölye, yapay zeka alanında kendimi geliştirmem için mükemmel bir başlangıç oldu. Teorik bilgiler ve pratik uygulamalar çok dengeli bir şekilde sunuldu.",
      },
      {
        name: "Mehmet Kaya",
        role: "Veri Bilimci",
        company: "DataX",
        quote: "Teorik bilgilerimi pratiğe dökme fırsatı buldum. Eğitmenin deneyimi ve örnekleri çok değerliydi.",
      },
    ],
    relatedWorkshops: [
      {
        title: "Web Geliştirme Temelleri",
        slug: "web-gelistirme-temelleri",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Veri Bilimi ve Analitik",
        slug: "veri-bilimi-analitik",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }
}

export default function WorkshopPage({ params }: { params: { slug: string } }) {
  const workshop = getWorkshop(params.slug)

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Back Button */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/workshops" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Atölyelere Dön</span>
            </Link>
          </Button>
        </div>

        {/* Workshop Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <Badge
                variant={workshop.status === "Yaklaşan" ? "default" : "secondary"}
                className={workshop.status === "Yaklaşan" ? "bg-emerald-700" : ""}
              >
                {workshop.status}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{workshop.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{workshop.description}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-3" />
                <span>{workshop.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3" />
                <span>
                  {workshop.time} ({workshop.duration})
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span>{workshop.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-3" />
                <span>{workshop.capacity}</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-3xl font-bold">{workshop.price}</div>
            </div>

            {workshop.status === "Yaklaşan" && (
              <Button size="lg" className="w-full md:w-auto bg-emerald-700 hover:bg-emerald-800">
                Şimdi Kaydol
              </Button>
            )}
          </div>

          <div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <Image
                src={workshop.image || "/placeholder.svg"}
                alt={workshop.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Workshop Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Bu Atölye Hakkında</h2>
            <div
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: workshop.longDescription }}
            />

            <h2 className="text-2xl font-bold mb-6">Neler Öğreneceksiniz</h2>
            <ul className="space-y-3 mb-8">
              {workshop.topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-700 mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-6">Ön Koşullar</h2>
            <ul className="space-y-3 mb-8">
              {workshop.prerequisites.map((prerequisite, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-700 mr-2">•</span>
                  <span>{prerequisite}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-muted/30 p-6 rounded-lg border border-border mb-8">
              <h2 className="text-xl font-bold mb-4">Eğitmeniniz</h2>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-muted overflow-hidden mr-4">
                  <Image
                    src={workshop.instructor.image || "/placeholder.svg"}
                    alt={workshop.instructor.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{workshop.instructor.name}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{workshop.instructor.bio}</p>
            </div>

            {workshop.status === "Yaklaşan" && (
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h2 className="text-xl font-bold mb-4">Katılmaya Hazır mısınız?</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Yerinizi şimdi ayırtın. Kaliteli bir öğrenme deneyimi sağlamak için kontenjan sınırlıdır.
                </p>
                <Button className="w-full bg-emerald-700 hover:bg-emerald-800">Şimdi Kaydol</Button>
              </div>
            )}
          </div>
        </div>

        {/* Testimonials */}
        {workshop.testimonials && workshop.testimonials.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Katılımcı Yorumları</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {workshop.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-muted/30 p-8 rounded-lg border border-border">
                  <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-muted overflow-hidden mr-4">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Workshops */}
        {workshop.relatedWorkshops && workshop.relatedWorkshops.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">İlgili Atölyeler</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {workshop.relatedWorkshops.map((relatedWorkshop, index) => (
                <Link
                  key={index}
                  href={`/workshops/${relatedWorkshop.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-square bg-muted overflow-hidden">
                      <Image
                        src={relatedWorkshop.image || "/placeholder.svg"}
                        alt={relatedWorkshop.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="col-span-2 p-4 flex items-center">
                      <h3 className="text-xl font-bold group-hover:text-emerald-700 transition-colors">
                        {relatedWorkshop.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
