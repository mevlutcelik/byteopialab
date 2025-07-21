import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Bu normalde bir CMS veya veritabanından gelecektir
const getBlogPost = (slug: string) => {
  return {
    title: "Yapay Zeka ve Etik: Gelecekteki Zorluklar",
    date: "1 Mart 2025",
    author: "Ahmet Yılmaz",
    category: "Yapay Zeka",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p class="text-xl leading-relaxed mb-6">Yapay zeka teknolojileri her geçen gün hayatımızın daha fazla alanına entegre oluyor. Bu hızlı gelişim, beraberinde önemli etik soruları da getiriyor.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">Yapay Zekanın Etik Boyutu</h2>
      
      <p class="text-lg leading-relaxed mb-6">Yapay zeka sistemlerinin kararları, insanların hayatını doğrudan etkileyebilir. Bu nedenle, bu sistemlerin etik ilkelere uygun olarak tasarlanması ve kullanılması büyük önem taşıyor.</p>
      
      <p class="text-lg leading-relaxed mb-6">Yapay zeka etiği konusunda dikkate alınması gereken temel faktörler şunlardır:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Şeffaflık ve açıklanabilirlik</li>
        <li>Adalet ve önyargıların önlenmesi</li>
        <li>Mahremiyet ve veri güvenliği</li>
        <li>Hesap verebilirlik</li>
        <li>İnsan kontrolü ve özerklik</li>
      </ul>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">Önyargı ve Adalet Sorunları</h2>
      
      <p class="text-lg leading-relaxed mb-6">Yapay zeka sistemleri, eğitildikleri verilerden önyargıları öğrenebilir ve bu önyargıları kararlarına yansıtabilir. Bu durum, adil olmayan sonuçlara yol açabilir.</p>
      
      <blockquote class="border-l-4 border-emerald-700 pl-6 italic my-8 text-xl">
        "Yapay zeka sistemleri, onları tasarlayan ve eğiten insanların değerlerini yansıtır."
        <cite class="block text-sm mt-2 not-italic">— Dr. Zeynep Tüfekçi</cite>
      </blockquote>
      
      <p class="text-lg leading-relaxed mb-6">Önyargıları azaltmak için, çeşitli ve temsili veri setleri kullanmak, algoritmaları düzenli olarak test etmek ve sistemlerin kararlarını açıklayabilir hale getirmek önemlidir.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">Geleceğe Bakış</h2>
      
      <p class="text-lg leading-relaxed mb-6">Yapay zeka teknolojilerinin etik kullanımını sağlamak için, teknoloji geliştiricileri, politika yapıcılar, akademisyenler ve toplumun farklı kesimlerinin iş birliği yapması gerekiyor.</p>
      
      <p class="text-lg leading-relaxed mb-6">ByteOpia olarak, yapay zeka projelerimizde etik ilkeleri ön planda tutuyoruz ve bu alandaki tartışmalara katkıda bulunmayı hedefliyoruz.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: "Web3 ve Blok Zinciri Teknolojileri",
        slug: "web3-blockchain",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        title: "Siber Güvenlikte Yapay Zeka Kullanımı",
        slug: "siber-guvenlik-yapay-zeka",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Back Button */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Blog'a Dön</span>
            </Link>
          </Button>
        </div>

        {/* Post Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="text-sm font-medium text-zinc-500 mb-4">
            {post.category} • {post.date}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt={post.author}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-zinc-600">Yazar: {post.author}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-[16/9] bg-zinc-100 rounded-lg overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-zinc max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-zinc-100 rounded-lg">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt={post.author}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Yazar Hakkında: {post.author}</h3>
              <p className="text-zinc-600">
                ByteOpia'da Yapay Zeka Araştırmacısı olarak görev yapan Ahmet, yapay zeka etiği ve teknolojinin
                toplumsal etkileri konularında uzmanlaşmıştır. Çeşitli akademik dergilerde makaleleri yayınlanmış ve
                konferanslarda konuşmacı olarak yer almıştır.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8">İlgili Yazılar</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {post.relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group block bg-white rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-zinc-100 overflow-hidden">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-emerald-700 transition-colors">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
