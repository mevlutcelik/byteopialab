import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Blog yazıları verileri
const blogPosts = [
  {
    id: 1,
    title: "Yapay Zeka ve Etik: Gelecekteki Zorluklar",
    excerpt: "Yapay zeka teknolojilerinin gelişimi ile birlikte ortaya çıkan etik sorunlar ve çözüm önerileri.",
    date: "1 Mart 2025",
    category: "Yapay Zeka",
    image: "/placeholder.svg?height=400&width=600",
    slug: "yapay-zeka-etik",
  },
  {
    id: 2,
    title: "Web3 ve Blok Zinciri Teknolojileri",
    excerpt: "Merkeziyetsiz web teknolojilerinin geleceği ve günlük hayatımıza etkileri üzerine bir inceleme.",
    date: "15 Şubat 2025",
    category: "Blockchain",
    image: "/placeholder.svg?height=400&width=600",
    slug: "web3-blockchain",
  },
  {
    id: 3,
    title: "Siber Güvenlikte Yapay Zeka Kullanımı",
    excerpt: "Siber güvenlik alanında yapay zeka teknolojilerinin kullanımı ve sağladığı avantajlar.",
    date: "1 Şubat 2025",
    category: "Siber Güvenlik",
    image: "/placeholder.svg?height=400&width=600",
    slug: "siber-guvenlik-yapay-zeka",
  },
  {
    id: 4,
    title: "Veri Bilimi Projelerinde Başarı Faktörleri",
    excerpt: "Veri bilimi projelerinde başarıyı etkileyen faktörler ve dikkat edilmesi gereken noktalar.",
    date: "20 Ocak 2025",
    category: "Veri Bilimi",
    image: "/placeholder.svg?height=400&width=600",
    slug: "veri-bilimi-basari-faktorleri",
  },
  {
    id: 5,
    title: "Erişilebilirlik: Herkes İçin Teknoloji",
    excerpt: "Teknoloji ürünlerinde erişilebilirliğin önemi ve uygulanması gereken temel prensipler.",
    date: "5 Ocak 2025",
    category: "Erişilebilirlik",
    image: "/placeholder.svg?height=400&width=600",
    slug: "erisilebilirlik-herkes-icin-teknoloji",
  },
  {
    id: 6,
    title: "Yazılım Geliştirmede Çevik Metodolojiler",
    excerpt: "Çevik yazılım geliştirme metodolojilerinin avantajları ve başarılı uygulama stratejileri.",
    date: "15 Aralık 2024",
    category: "Yazılım Geliştirme",
    image: "/placeholder.svg?height=400&width=600",
    slug: "cevik-metodolojiler",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Blog</h1>
          <p className="body-lg text-zinc-600">
            Teknoloji, yazılım, yapay zeka ve dijital dönüşüm hakkında düşünceler, analizler ve öngörüler.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm font-medium text-zinc-500 mb-2">
                  {blogPosts[0].category} • {blogPosts[0].date}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-emerald-700 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-zinc-600 mb-6">{blogPosts[0].excerpt}</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-700 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors"
                >
                  Yazıyı Oku
                </Button>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-lg">
                <div className="aspect-video bg-zinc-200 rounded-lg overflow-hidden">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-zinc-100 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-zinc-500 mb-2">
                  {post.category} • {post.date}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-700 transition-colors">{post.title}</h3>
                <p className="text-zinc-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
