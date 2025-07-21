import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Atölye verileri
const workshops = [
  {
    id: 1,
    title: "Yapay Zeka ve Makine Öğrenmesi",
    description:
      "Yapay zeka ve makine öğrenmesi temellerini öğrenin ve kendi modellerinizi geliştirin. Bu atölye, temel kavramlardan başlayarak pratik uygulamalara kadar kapsamlı bir eğitim sunuyor.",
    date: "15 Nisan 2025",
    time: "10:00 - 14:00",
    duration: "4 saat",
    location: "Online",
    capacity: "30 katılımcı",
    price: "₺750",
    image: "/placeholder.svg?height=400&width=800",
    status: "Yaklaşan",
    slug: "yapay-zeka-makine-ogrenmesi",
    testimonials: [
      {
        name: "Ayşe Yılmaz",
        role: "Yazılım Geliştirici",
        company: "TechCorp",
        quote:
          "Bu atölye, yapay zeka alanında kendimi geliştirmem için mükemmel bir başlangıç oldu. Teorik bilgiler ve pratik uygulamalar çok dengeli bir şekilde sunuldu.",
      },
    ],
  },
  {
    id: 2,
    title: "Web Geliştirme Temelleri",
    description:
      "Modern web teknolojileri ile tanışın ve kendi web uygulamanızı geliştirin. HTML, CSS ve JavaScript temelleri ile başlayıp, modern framework'lere kadar ilerleyeceğiz.",
    date: "10 Mayıs 2025",
    time: "09:00 - 12:00",
    duration: "3 saat",
    location: "ByteOpia Lab, İstanbul",
    capacity: "25 katılımcı",
    price: "₺600",
    image: "/placeholder.svg?height=400&width=800",
    status: "Yaklaşan",
    slug: "web-gelistirme-temelleri",
    testimonials: [
      {
        name: "Mehmet Kaya",
        role: "Grafik Tasarımcı",
        company: "DesignX",
        quote:
          "Tasarımcı olarak kodlama konusunda kendimi geliştirmek istiyordum. Bu atölye tam da ihtiyacım olan temelleri çok anlaşılır bir şekilde sundu.",
      },
    ],
  },
  {
    id: 3,
    title: "Siber Güvenlik Atölyesi",
    description:
      "Temel siber güvenlik kavramlarını öğrenin ve güvenlik testleri yapın. Etik hacking, güvenlik açıkları ve korunma yöntemleri hakkında pratik bilgiler edineceksiniz.",
    date: "5 Mart 2025",
    time: "13:00 - 17:00",
    duration: "4 saat",
    location: "Online",
    capacity: "35 katılımcı",
    price: "₺750",
    image: "/placeholder.svg?height=400&width=800",
    status: "Geçmiş",
    slug: "siber-guvenlik-atolyesi",
    testimonials: [
      {
        name: "Ali Demir",
        role: "Sistem Yöneticisi",
        company: "SecureTech",
        quote:
          "Siber güvenlik konusunda teorik bilgilerim vardı, ancak bu atölye pratik uygulamalarla bilgilerimi pekiştirmemi sağladı. Eğitmenin deneyimi ve örnekleri çok değerliydi.",
      },
    ],
  },
  {
    id: 4,
    title: "Mobil Uygulama Geliştirme",
    description:
      "React Native ile cross-platform mobil uygulama geliştirmeyi öğrenin. Tek bir kod tabanı ile hem iOS hem de Android için uygulama geliştirmenin avantajlarını keşfedin.",
    date: "20 Şubat 2025",
    time: "10:00 - 15:00",
    duration: "5 saat",
    location: "ByteOpia Lab, Ankara",
    capacity: "20 katılımcı",
    price: "₺900",
    image: "/placeholder.svg?height=400&width=800",
    status: "Geçmiş",
    slug: "mobil-uygulama-gelistirme",
    testimonials: [
      {
        name: "Zeynep Aydın",
        role: "Frontend Geliştirici",
        company: "MobilTech",
        quote:
          "Web geliştirme tecrübem vardı ancak mobil dünyasına adım atmak istiyordum. Bu atölye, React bilgilerimi mobil platformlara taşımam için mükemmel bir köprü oldu.",
      },
    ],
  },
  {
    id: 5,
    title: "Veri Bilimi ve Analitik",
    description:
      "Veri bilimi temellerini öğrenin ve Python ile veri analizi yapın. Pandas, NumPy ve Matplotlib gibi kütüphaneleri kullanarak veri manipülasyonu ve görselleştirme tekniklerini keşfedin.",
    date: "15 Ocak 2025",
    time: "09:00 - 13:00",
    duration: "4 saat",
    location: "Online",
    capacity: "30 katılımcı",
    price: "₺750",
    image: "/placeholder.svg?height=400&width=800",
    status: "Geçmiş",
    slug: "veri-bilimi-analitik",
    testimonials: [
      {
        name: "Deniz Yıldız",
        role: "İş Analisti",
        company: "DataCorp",
        quote:
          "Veri analizi konusunda kendimi geliştirmek istiyordum ve bu atölye tam da aradığım şeydi. Teorik bilgiler ve pratik uygulamalar çok iyi dengelenmişti.",
      },
    ],
  },
]

export default function WorkshopsPage() {
  // Yaklaşan ve geçmiş atölyeleri ayır
  const upcomingWorkshops = workshops.filter((workshop) => workshop.status === "Yaklaşan")
  const pastWorkshops = workshops.filter((workshop) => workshop.status === "Geçmiş")

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Atölyeler</h1>
          <p className="body-lg text-muted-foreground">
            Modern teknolojileri ve teknikleri öğrenmenizi sağlayacak uygulamalı eğitim programları.
          </p>
        </div>

        {/* Upcoming Workshops */}
        <div className="mb-20">
          <h2 className="heading-lg mb-10 relative">
            Yaklaşan Atölyeler
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid gap-12">
            {upcomingWorkshops.map((workshop) => (
              <Card key={workshop.id} className="overflow-hidden border border-border bg-card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="mb-2">
                      <Badge variant="default" className="bg-emerald-700">
                        Yaklaşan
                      </Badge>
                    </div>
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-2xl">{workshop.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">{workshop.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 py-4 space-y-3 flex-grow">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          {workshop.time} ({workshop.duration})
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{workshop.capacity}</span>
                      </div>
                      <div className="text-lg font-bold mt-2">{workshop.price}</div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4">
                      <Button asChild className="w-full bg-emerald-700 hover:bg-emerald-800">
                        <Link href={`/workshops/${workshop.slug}`}>Şimdi Kaydol</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Workshops */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Geçmiş Atölyeler
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWorkshops.map((workshop) => (
              <Card key={workshop.id} className="group overflow-hidden border border-border bg-card">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 opacity-80"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">Geçmiş</Badge>
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
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{workshop.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
                  >
                    <Link href={`/workshops/${workshop.slug}`}>Detayları Gör</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="heading-lg mb-10 text-center">Katılımcı Yorumları</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {workshops.flatMap((workshop) =>
              workshop.testimonials.map((testimonial, index) => (
                <div key={`${workshop.id}-${index}`} className="bg-muted/30 p-8 rounded-lg border border-border">
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
              )),
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-muted/30 p-12 rounded-lg border border-border">
          <h2 className="text-3xl font-bold mb-4">Özel Atölye mi İstiyorsunuz?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ekipler ve kurumlar için özel atölyeler düzenliyoruz. Spesifik ihtiyaçlarınızı ve hedeflerinizi konuşmak
            için bizimle iletişime geçin.
          </p>
          <Button asChild size="lg" className="bg-emerald-700 hover:bg-emerald-800">
            <Link href="/#contact">İletişime Geç</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
